#!/bin/bash

# Script to push Prisma schema to database
# This will create/update the contact_addresses table with the flag field

echo "🔄 Pushing Prisma schema to database..."
echo ""

cd /Users/sumeshkk/Documents/bpract/git-desktop/cloud-next

# Generate Prisma Client first
echo "📦 Generating Prisma Client..."
npx prisma generate

echo ""
echo "🗄️  Pushing schema to database..."
npx prisma db push

echo ""
echo "✅ Done! The contact_addresses table should now exist with the flag field."
echo ""
echo "If you see any errors, make sure:"
echo "1. Your database is running"
echo "2. DATABASE_URL in .env is correct"
echo "3. You have permission to modify the database"
