#!/bin/bash

# Script to restore database from SQL backup file
# Usage: ./scripts/restore-from-backup.sh [backup-file]

set -e

BACKUP_FILE="${1:-backup/cloud_mlm_backup_20260129_153359.sql}"

if [ ! -f "$BACKUP_FILE" ]; then
    echo "Error: Backup file not found: $BACKUP_FILE"
    exit 1
fi

echo "=========================================="
echo "Restoring Database from Backup"
echo "=========================================="
echo ""
echo "⚠️  WARNING: This will overwrite your current database!"
echo "Backup file: $BACKUP_FILE"
echo ""
read -p "Are you sure you want to continue? (yes/no): " confirm

if [ "$confirm" != "yes" ]; then
    echo "Restoration cancelled."
    exit 0
fi

# Get database URL from .env files
ENV_FILES=(".env.local" ".env")
DATABASE_URL=""

for env_file in "${ENV_FILES[@]}"; do
    if [ -f "$env_file" ]; then
        # Extract DATABASE_URL, POSTGRES_PRISMA_URL, or DIRECT_URL
        while IFS= read -r line; do
            if [[ $line =~ ^[[:space:]]*DATABASE_URL= ]] || [[ $line =~ ^[[:space:]]*POSTGRES_PRISMA_URL= ]] || [[ $line =~ ^[[:space:]]*DIRECT_URL= ]]; then
                DATABASE_URL=$(echo "$line" | cut -d '=' -f2- | tr -d '"' | tr -d "'" | xargs)
                break
            fi
        done < "$env_file"
        [ -n "$DATABASE_URL" ] && break
    fi
done

if [ -z "$DATABASE_URL" ]; then
    echo "Error: DATABASE_URL not found in .env files"
    echo "Please set DATABASE_URL, POSTGRES_PRISMA_URL, or DIRECT_URL in .env.local or .env"
    exit 1
fi

# Convert Prisma URL to standard PostgreSQL URL if needed
# Prisma URLs have ?schema=public&pgbouncer=true, remove those
PG_URL=$(echo "$DATABASE_URL" | sed 's/?.*$//')

echo ""
echo "Restoring database..."
echo "This may take a few minutes..."
echo ""

# Use psql to restore
psql "$PG_URL" < "$BACKUP_FILE"

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Database restored successfully!"
    echo ""
    echo "Note: If demo_items table was empty in backup, you may need to:"
    echo "  1. Check if you have another backup with demo data"
    echo "  2. Or manually restore English demo data"
else
    echo ""
    echo "❌ Error restoring database"
    exit 1
fi
