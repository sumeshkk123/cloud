/**
 * One-off script: remove per-country folders under app/[lang]/mlm-software-payment-gateways
 * so the dynamic route [countrySlug] serves all countries (like mlm-software-availability-across-countries).
 * Keeps: page.tsx (list), [countrySlug]/page.tsx (dynamic).
 */
const fs = require("fs");
const path = require("path");

const base = path.join(__dirname, "..", "app", "[lang]", "mlm-software-payment-gateways");
if (!fs.existsSync(base)) {
  console.error("Path not found:", base);
  process.exit(1);
}

const entries = fs.readdirSync(base, { withFileTypes: true });
const toRemove = entries.filter(
  (e) => e.isDirectory() && e.name !== "[countrySlug]"
);

console.log("Removing", toRemove.length, "country folders...");
for (const dir of toRemove) {
  const full = path.join(base, dir.name);
  fs.rmSync(full, { recursive: true });
  console.log("  removed", dir.name);
}
console.log("Done. Only page.tsx and [countrySlug]/ remain.");
