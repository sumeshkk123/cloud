#!/usr/bin/env node
/**
 * Database backup script (cross-platform: Windows, macOS, Linux).
 * Reads DATABASE_URL from .env or environment, runs pg_dump, writes to backup/.
 * Usage: npm run db:backup  or  npx tsx scripts/backup-database.ts
 */

import { spawn } from "node:child_process";
import { createWriteStream, existsSync, mkdirSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const isWindows = process.platform === "win32";
const pgDumpExe = isWindows ? "pg_dump.exe" : "pg_dump";

/** Resolve path to pg_dump: env PGDUMP_PATH, or Windows Program Files, or "pg_dump" for PATH. */
function resolvePgDumpPath(env: Record<string, string>): string {
  const fromEnv = process.env.PGDUMP_PATH ?? env.PGDUMP_PATH;
  if (fromEnv && existsSync(fromEnv)) return fromEnv;
  if (isWindows) {
    const pf = process.env["ProgramFiles"] || "C:\\Program Files";
    const pgDir = join(pf, "PostgreSQL");
    if (existsSync(pgDir)) {
      const versions = readdirSync(pgDir);
      for (const v of versions.sort().reverse()) {
        const exe = join(pgDir, v, "bin", pgDumpExe);
        if (existsSync(exe)) return exe;
      }
    }
  }
  return pgDumpExe;
}

function loadEnv(): Record<string, string> {
  const root = join(process.cwd(), ".env");
  if (!existsSync(root)) return {};
  const out: Record<string, string> = {};
  for (const line of readFileSync(root, "utf-8").split("\n")) {
    const trimmed = line.trim();
    if (trimmed.startsWith("#") || !trimmed.includes("=")) continue;
    const eq = trimmed.indexOf("=");
    const key = trimmed.slice(0, eq).trim();
    const raw = trimmed.slice(eq + 1).trim();
    const value = raw.startsWith('"') && raw.endsWith('"')
      ? raw.slice(1, -1).replace(/\\"/g, '"')
      : raw.startsWith("'") && raw.endsWith("'")
        ? raw.slice(1, -1).replace(/\\'/g, "'")
        : raw;
    out[key] = value;
  }
  return out;
}

function parseDatabaseUrl(url: string): { host: string; port: string; user: string; password: string; database: string } {
  const raw = url.replace(/^postgresql:\/\//i, "").replace(/^postgres:\/\//i, "");
  const atIdx = raw.indexOf("@");
  if (atIdx === -1) {
    throw new Error("Invalid DATABASE_URL: missing @");
  }
  const userPass = raw.slice(0, atIdx);
  const hostDb = raw.slice(atIdx + 1);
  const colonIdx = userPass.indexOf(":");
  const user = colonIdx === -1 ? decodeURIComponent(userPass) : decodeURIComponent(userPass.slice(0, colonIdx));
  const password = colonIdx === -1 ? "" : decodeURIComponent(userPass.slice(colonIdx + 1));
  const slashIdx = hostDb.indexOf("/");
  if (slashIdx === -1) throw new Error("Invalid DATABASE_URL: missing /");
  const hostPort = hostDb.slice(0, slashIdx);
  const dbPath = hostDb.slice(slashIdx + 1);
  const dbName = dbPath.replace(/\?.*$/, "").trim() || "postgres";
  const portColon = hostPort.indexOf(":");
  const host = portColon === -1 ? hostPort : hostPort.slice(0, portColon);
  const port = portColon === -1 ? "5432" : hostPort.slice(portColon + 1);
  return { host, port, user, password, database: dbName };
}

function main() {
  const env = loadEnv();
  const DATABASE_URL = process.env.DATABASE_URL ?? env.DATABASE_URL;

  if (!DATABASE_URL) {
    console.error("Error: DATABASE_URL is not set.");
    console.error("Set DATABASE_URL in .env or in the environment.");
    process.exit(1);
  }

  let parsed: ReturnType<typeof parseDatabaseUrl>;
  try {
    parsed = parseDatabaseUrl(DATABASE_URL);
  } catch (e) {
    console.error("Error parsing DATABASE_URL:", (e as Error).message);
    process.exit(1);
  }

  const { host, port, user, password, database } = parsed;
  const backupDir = join(process.cwd(), "backup");
  const d = new Date();
  const timestamp =
    `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}_` +
    `${String(d.getHours()).padStart(2, "0")}${String(d.getMinutes()).padStart(2, "0")}${String(d.getSeconds()).padStart(2, "0")}`;
  const safeName = database.replace(/[^a-zA-Z0-9_]/g, "_");
  const backupFile = join(backupDir, `${safeName}_backup_${timestamp}.sql`);

  if (!existsSync(backupDir)) mkdirSync(backupDir, { recursive: true });

  console.log("Creating database backup...");
  console.log("Database:", database);
  console.log("User:", user);
  console.log("Host:", host);
  console.log("Port:", port);
  console.log("Backup file:", backupFile);
  console.log("");

  const pgDumpPath = resolvePgDumpPath(env);
  const envWithPassword = { ...process.env, PGPASSWORD: password };
  const pgDump = spawn(
    pgDumpPath,
    [
      "-h", host,
      "-p", port,
      "-U", user,
      "-d", database,
      "--no-owner",
      "--no-privileges",
      "--clean",
      "--if-exists",
    ],
    {
      env: envWithPassword,
      stdio: ["ignore", "pipe", "pipe"],
    }
  );

  const w = createWriteStream(backupFile);
  pgDump.stdout.pipe(w);

  let stderr = "";
  pgDump.stderr.setEncoding("utf8");
  pgDump.stderr.on("data", (chunk: string) => { stderr += chunk; });

  pgDump.on("error", (err: NodeJS.ErrnoException) => {
    if (err.code === "ENOENT") {
      console.error("pg_dump was not found.");
      console.error("  - Windows: Install PostgreSQL from https://www.postgresql.org/download/windows/");
      console.error("    and add its 'bin' folder to PATH (e.g. C:\\Program Files\\PostgreSQL\\16\\bin),");
      console.error("    or set PGDUMP_PATH in .env to the full path to pg_dump.exe");
      console.error("  - macOS: brew install postgresql");
      console.error("  - Linux: apt install postgresql-client  or  yum install postgresql");
    } else {
      console.error("Failed to run pg_dump:", err.message);
    }
    process.exit(1);
  });

  pgDump.on("close", (code) => {
    if (code === 0) {
      const size = statSync(backupFile).size;
      const sizeStr = size < 1024 ? `${size} B` : size < 1024 * 1024 ? `${(size / 1024).toFixed(1)} KB` : `${(size / (1024 * 1024)).toFixed(1)} MB`;
      console.log("Backup created successfully:", backupFile);
      console.log("Backup size:", sizeStr);
      console.log("");
      console.log("To restore:");
      console.log(`  set PGPASSWORD=*** && psql -h ${host} -p ${port} -U ${user} -d ${database} < ${backupFile}`);
    } else {
      console.error("Backup failed.");
      if (stderr) console.error(stderr);
      process.exit(1);
    }
  });
}

main();
