#!/bin/bash

# Load environment variables from .env file
if [ -f .env ]; then
  export $(cat .env | grep -v '^#' | xargs)
fi

# Extract database connection details from DATABASE_URL
DB_URL="${DATABASE_URL}"

# Remove query parameters if present (psql doesn't like them)
DB_URL_CLEAN=$(echo "$DB_URL" | sed 's/?.*$//')

echo "=========================================="
echo "Step 1: Checking current state"
echo "=========================================="
psql "$DB_URL_CLEAN" -c "SELECT COUNT(*) as total_items, COUNT(CASE WHEN \"title\" IS NOT NULL AND \"title\" != '' THEN 1 END) as items_with_title FROM \"demo_items\" WHERE locale = 'en';"

echo ""
echo "=========================================="
echo "Step 2: Updating titles from descriptions"
echo "=========================================="
psql "$DB_URL_CLEAN" -f scripts/map-descriptions-to-titles.sql

echo ""
echo "=========================================="
echo "Step 3: Verifying results"
echo "=========================================="
psql "$DB_URL_CLEAN" -f scripts/verify-titles.sql

echo ""
echo "=========================================="
echo "Done!"
echo "=========================================="
