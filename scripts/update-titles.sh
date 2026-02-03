#!/bin/bash

# Load environment variables from .env file
if [ -f .env ]; then
  export $(cat .env | grep -v '^#' | xargs)
fi

# Extract database connection details from DATABASE_URL
DB_URL="${DATABASE_URL}"

# Remove query parameters if present (psql doesn't like them)
DB_URL_CLEAN=$(echo "$DB_URL" | sed 's/?.*$//')

echo "Updating title fields in demo_items table..."
echo "Database: $DB_URL_CLEAN"
echo ""

# Run SQL command to update titles
psql "$DB_URL_CLEAN" <<EOF
UPDATE "demo_items" 
SET "title" = "adminDemoTitle"
WHERE "title" IS NULL OR "title" = '';

-- Show results
SELECT COUNT(*) as updated_count FROM "demo_items" WHERE "title" = "adminDemoTitle";
EOF

echo ""
echo "Update completed!"
echo ""
echo "Verifying results..."
psql "$DB_URL_CLEAN" -c "SELECT id, \"adminDemoTitle\", \"title\", locale FROM \"demo_items\" WHERE locale = 'en' LIMIT 10;"
