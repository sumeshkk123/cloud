#!/bin/bash

# Load environment variables from .env file
if [ -f .env ]; then
  export $(cat .env | grep -v '^#' | xargs)
fi

# Extract database connection details from DATABASE_URL
DB_URL="${DATABASE_URL}"

# Remove query parameters if present (psql doesn't like them)
DB_URL_CLEAN=$(echo "$DB_URL" | sed 's/?.*$//')

echo "Updating title fields based on screenshots..."
echo "Database: $DB_URL_CLEAN"
echo ""

# Run SQL command to update titles
psql "$DB_URL_CLEAN" -f scripts/update-titles-from-screenshots.sql

echo ""
echo "Update completed!"
