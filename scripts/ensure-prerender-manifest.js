/**
 * With output: "standalone", Next.js 14 writes prerender-manifest.js but
 * "next start" expects prerender-manifest.json. This script creates the JSON
 * from the JS file so "npm start" works after "npm run build".
 */
const fs = require("fs");
const path = require("path");

const nextDir = path.join(__dirname, "..", ".next");
const jsPath = path.join(nextDir, "prerender-manifest.js");
const jsonPath = path.join(nextDir, "prerender-manifest.json");

if (!fs.existsSync(jsPath)) {
  console.warn("scripts/ensure-prerender-manifest.js: prerender-manifest.js not found, skipping.");
  process.exit(0);
}

const content = fs.readFileSync(jsPath, "utf8").trim();
const rhs = content.replace(/^self\.__PRERENDER_MANIFEST\s*=\s*/, "");
if (!rhs) {
  console.warn("scripts/ensure-prerender-manifest.js: could not parse prerender-manifest.js");
  process.exit(0);
}

let manifest;
try {
  const jsonString = eval(rhs);
  manifest = typeof jsonString === "string" ? JSON.parse(jsonString) : jsonString;
} catch (e) {
  console.warn("scripts/ensure-prerender-manifest.js: invalid JSON in prerender-manifest.js", e.message);
  process.exit(0);
}

const full = {
  version: 4,
  routes: manifest.routes ?? {},
  dynamicRoutes: manifest.dynamicRoutes ?? {},
  preview: manifest.preview ?? {},
};

fs.writeFileSync(jsonPath, JSON.stringify(full, null, 2), "utf8");
console.log("Created .next/prerender-manifest.json for next start");
