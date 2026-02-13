#!/usr/bin/env node
/**
 * Project backup: copy project to ../cloud-backup/<timestamp> (outside repo).
 * Excludes node_modules, .next, .git, build artifacts, env files.
 * Usage: npm run backup
 */

import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const EXCLUDE = new Set([
  "node_modules",
  ".next",
  "out",
  "build",
  ".git",
  "coverage",
  "backup",
  ".vercel",
  ".pnp",
  ".pnp.js",
  "*.tsbuildinfo",
  "next-env.d.ts",
]);

const EXCLUDE_FILES = new Set([".env", ".env.local", ".env*.local"]);

function shouldExclude(name: string, isDir: boolean): boolean {
  if (EXCLUDE.has(name)) return true;
  if (isDir) return false;
  if (EXCLUDE_FILES.has(name)) return true;
  if (name.endsWith(".tsbuildinfo")) return true;
  if (name === "next-env.d.ts") return true;
  return false;
}

function copyRecursive(src: string, dest: string): void {
  const stat = statSync(src);
  if (stat.isDirectory()) {
    if (!existsSync(dest)) mkdirSync(dest, { recursive: true });
    for (const name of readdirSync(src)) {
      if (shouldExclude(name, statSync(join(src, name)).isDirectory())) continue;
      copyRecursive(join(src, name), join(dest, name));
    }
  } else {
    const destDir = join(dest, "..");
    if (!existsSync(destDir)) mkdirSync(destDir, { recursive: true });
    copyFileSync(src, dest);
  }
}

function main(): void {
  const root = process.cwd();
  const backupBase = join(root, "..", "cloud-backup");
  const d = new Date();
  const timestamp =
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}_` +
    `${String(d.getHours()).padStart(2, "0")}${String(d.getMinutes()).padStart(2, "0")}${String(d.getSeconds()).padStart(2, "0")}`;
  const dest = join(backupBase, timestamp);

  if (!existsSync(backupBase)) mkdirSync(backupBase, { recursive: true });

  console.log("Backing up project to:", dest);

  copyRecursive(root, dest);

  console.log("Backup done:", dest);
}

main();
