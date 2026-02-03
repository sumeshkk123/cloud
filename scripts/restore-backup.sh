#!/bin/bash

# Restore database from backup
# Usage: ./scripts/restore-backup.sh [backup_file]

BACKUP_DIR="backup"

# Use provided backup file or default to most recent
if [ -z "$1" ]; then
    BACKUP_FILE="${BACKUP_DIR}/cloud_mlm_backup_20260123_105921.sql"
    echo "📦 Using default backup: $BACKUP_FILE"
else
    BACKUP_FILE="$1"
    echo "📦 Using provided backup: $BACKUP_FILE"
fi

# Check if backup file exists
if [ ! -f "$BACKUP_FILE" ]; then
    echo "❌ Backup file not found: $BACKUP_FILE"
    echo "Available backups:"
    ls -lh "$BACKUP_DIR"/*.sql 2>/dev/null || echo "No backups found in $BACKUP_DIR"
    exit 1
fi

# Load environment variables from .env file if it exists
if [ -f .env ]; then
  export $(grep -v '^#' .env | grep DATABASE_URL | xargs)
fi

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
  echo "❌ Error: DATABASE_URL is not set!"
  echo "   Please set DATABASE_URL in your .env file or environment variables."
  exit 1
fi

echo "🔄 Restoring database from: $BACKUP_FILE"
echo "⚠️  This will REPLACE all data in the database!"
echo ""
read -p "Are you sure you want to continue? (type 'yes' to confirm): " confirm

if [ "$confirm" != "yes" ]; then
    echo "❌ Restore cancelled"
    exit 1
fi

# Parse DATABASE_URL
DB_URL=$DATABASE_URL
DB_URL=${DB_URL#postgresql://}
DB_URL=${DB_URL#postgres://}

if [[ $DB_URL == *"@"* ]]; then
  CREDS_AND_HOST=${DB_URL%%@*}
  REST=${DB_URL#*@}
  
  if [[ $CREDS_AND_HOST == *":"* ]]; then
    DB_USER=${CREDS_AND_HOST%%:*}
    DB_PASSWORD=${CREDS_AND_HOST#*:}
  else
    DB_USER=$CREDS_AND_HOST
    DB_PASSWORD=""
  fi
else
  REST=$DB_URL
  DB_USER="${USER:-postgres}"
  DB_PASSWORD=""
fi

if [[ $REST == *"/"* ]]; then
  HOST_PORT=${REST%%/*}
  DB_PATH=${REST#*/}
  
  if [[ $HOST_PORT == *":"* ]]; then
    DB_HOST=${HOST_PORT%%:*}
    DB_PORT=${HOST_PORT#*:}
  else
    DB_HOST=$HOST_PORT
    DB_PORT="5432"
  fi
  
  DB_NAME=${DB_PATH%%\?*}
else
  DB_HOST="localhost"
  DB_PORT="5432"
  DB_NAME=$REST
fi

DB_NAME=${DB_NAME%%\?*}
DB_HOST=${DB_HOST:-localhost}
DB_PORT=${DB_PORT:-5432}
DB_USER=${DB_USER:-postgres}

echo ""
echo "📋 Database: $DB_NAME"
echo "👤 User: $DB_USER"
echo "🌐 Host: $DB_HOST"
echo "🔌 Port: $DB_PORT"
echo ""

# Set password for psql
export PGPASSWORD="$DB_PASSWORD"

# Restore the database
echo "📥 Restoring..."
if psql -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" -d "$DB_NAME" -f "$BACKUP_FILE" 2>&1; then
    echo ""
    echo "✅ Database restored successfully!"
    echo ""
    echo "📋 Next steps:"
    echo "1. Run: npx prisma db push (to sync schema and add stories table)"
    echo "2. Run: npx prisma generate (to regenerate Prisma client)"
    echo ""
else
    echo ""
    echo "❌ Restore failed!"
    echo ""
    echo "Troubleshooting:"
    echo "  1. Check if PostgreSQL is running"
    echo "  2. Verify DATABASE_URL in .env file"
    echo "  3. Check if user '$DB_USER' has access to database '$DB_NAME'"
    echo "  4. Verify network connection to $DB_HOST:$DB_PORT"
    unset PGPASSWORD
    exit 1
fi

# Unset password from environment
unset PGPASSWORD

echo "✅ Restore complete!"
