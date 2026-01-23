#!/bin/bash

# Script to apply module_faqs compound key migration
# This updates the database schema to allow translations to share the same ID

echo "Applying module_faqs compound key migration..."

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
    echo "❌ ERROR: DATABASE_URL environment variable is not set"
    echo "Please set it in your .env file or export it:"
    echo "export DATABASE_URL='postgresql://user:password@localhost:5432/dbname?schema=public'"
    exit 1
fi

# Apply the SQL migration
echo "Running SQL migration..."
psql "$DATABASE_URL" -f prisma/migrations/migrate_module_faqs_to_compound_key.sql

if [ $? -eq 0 ]; then
    echo "✅ Migration applied successfully!"
    echo ""
    echo "Now regenerating Prisma client..."
    npx prisma generate
    
    if [ $? -eq 0 ]; then
        echo "✅ Prisma client regenerated!"
        echo ""
        echo "✅ Migration complete! You can now use the module FAQs with translations."
    else
        echo "❌ Failed to regenerate Prisma client"
        exit 1
    fi
else
    echo "❌ Migration failed. Please check the error above."
    exit 1
fi
