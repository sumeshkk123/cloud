#!/bin/bash

# Script to run the demo_items migration
# Usage: ./scripts/run-migration.sh

# Load environment variables
if [ -f .env ]; then
  export $(cat .env | grep -v '^#' | xargs)
fi

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
  echo "Error: DATABASE_URL not found in .env file"
  echo "Please set DATABASE_URL in your .env file"
  echo "Example: DATABASE_URL=postgresql://user:password@localhost:5432/cloud_mlm"
  exit 1
fi

# Run the migration
echo "Running migration: add_title_and_rename_fields.sql"
psql "$DATABASE_URL" -f prisma/migrations/add_title_and_rename_fields.sql

if [ $? -eq 0 ]; then
  echo "Migration completed successfully!"
  echo "Now run: npx prisma generate"
else
  echo "Migration failed. Please check the error messages above."
  exit 1
fi
