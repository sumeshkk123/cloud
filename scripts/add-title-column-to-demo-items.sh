#!/bin/bash

# Load environment variables
source .env

# Extract database connection details
DB_URL="${DATABASE_URL}"

# Remove query parameters if present (psql doesn't like them)
DB_URL_CLEAN=$(echo "$DB_URL" | sed 's/?.*$//')

# Run SQL commands
psql "$DB_URL_CLEAN" <<EOF
ALTER TABLE "demo_items" DROP COLUMN IF EXISTS "adminDemoTitleContent";
ALTER TABLE "demo_items" DROP COLUMN IF EXISTS "distributorsDemoTitleContent";
ALTER TABLE "demo_items" ADD COLUMN IF NOT EXISTS "title" TEXT;
EOF

echo "Migration completed!"
