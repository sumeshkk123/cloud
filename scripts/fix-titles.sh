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
echo "Step 1: Checking current adminDemoTitle values"
echo "=========================================="
psql "$DB_URL_CLEAN" -f scripts/check-current-titles.sql

echo ""
echo "=========================================="
echo "Step 2: Updating titles based on patterns"
echo "=========================================="
psql "$DB_URL_CLEAN" -f scripts/check-and-update-titles.sql

echo ""
echo "=========================================="
echo "Done! Check the results above."
echo "=========================================="
