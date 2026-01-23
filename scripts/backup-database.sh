#!/bin/bash

# Database backup script
# Usage: ./scripts/backup-database.sh
# This script reads DATABASE_URL from .env file or environment variables

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

# Parse DATABASE_URL
# Format: postgresql://user:password@host:port/database?schema=public
DB_URL=$DATABASE_URL

# Remove postgresql:// or postgres:// prefix
DB_URL=${DB_URL#postgresql://}
DB_URL=${DB_URL#postgres://}

# Extract user:password@host:port/database?schema=public
if [[ $DB_URL == *"@"* ]]; then
  # Has authentication
  CREDS_AND_HOST=${DB_URL%%@*}
  REST=${DB_URL#*@}
  
  # Extract user and password
  if [[ $CREDS_AND_HOST == *":"* ]]; then
    DB_USER=${CREDS_AND_HOST%%:*}
    DB_PASSWORD=${CREDS_AND_HOST#*:}
  else
    DB_USER=$CREDS_AND_HOST
    DB_PASSWORD=""
  fi
else
  # No authentication (unlikely but handle it)
  REST=$DB_URL
  DB_USER="${USER:-postgres}"
  DB_PASSWORD=""
fi

# Extract host:port/database?schema=public
if [[ $REST == *"/"* ]]; then
  HOST_PORT=${REST%%/*}
  DB_PATH=${REST#*/}
  
  # Extract host and port
  if [[ $HOST_PORT == *":"* ]]; then
    DB_HOST=${HOST_PORT%%:*}
    DB_PORT=${HOST_PORT#*:}
  else
    DB_HOST=$HOST_PORT
    DB_PORT="5432"
  fi
  
  # Extract database name (remove ?schema=public)
  DB_NAME=${DB_PATH%%\?*}
else
  DB_HOST="localhost"
  DB_PORT="5432"
  DB_NAME=$REST
fi

# Remove ?schema=public or other query params
DB_NAME=${DB_NAME%%\?*}

# Set defaults if empty
DB_HOST=${DB_HOST:-localhost}
DB_PORT=${DB_PORT:-5432}
DB_USER=${DB_USER:-postgres}

# Create backup directory
BACKUP_DIR="backup"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
DB_NAME_CLEAN=$(echo "$DB_NAME" | sed 's/[^a-zA-Z0-9_]/_/g')
BACKUP_FILE="${BACKUP_DIR}/${DB_NAME_CLEAN}_backup_${TIMESTAMP}.sql"

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

# Display information
echo "🔄 Creating database backup..."
echo "📋 Database: $DB_NAME"
echo "👤 User: $DB_USER"
echo "🌐 Host: $DB_HOST"
echo "🔌 Port: $DB_PORT"
echo "📁 Backup file: $BACKUP_FILE"
echo ""

# Check if pg_dump is available
if ! command -v pg_dump &> /dev/null; then
  echo "❌ Error: pg_dump is not installed!"
  echo "   Please install PostgreSQL client tools:"
  echo "   - macOS: brew install postgresql"
  echo "   - Ubuntu/Debian: sudo apt-get install postgresql-client"
  echo "   - CentOS/RHEL: sudo yum install postgresql"
  exit 1
fi

# Create backup
# Use PGPASSWORD environment variable for password authentication
export PGPASSWORD="$DB_PASSWORD"

if pg_dump -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" -d "$DB_NAME" \
  --no-owner \
  --no-privileges \
  --clean \
  --if-exists \
  > "$BACKUP_FILE" 2>&1; then
  echo ""
  echo "✅ Backup created successfully: $BACKUP_FILE"
  echo "📊 Backup size: $(du -h "$BACKUP_FILE" | cut -f1)"
  echo ""
  echo "💡 To restore this backup, use:"
  echo "   PGPASSWORD='$DB_PASSWORD' psql -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME < $BACKUP_FILE"
  
  # Unset password from environment
  unset PGPASSWORD
  exit 0
else
  echo ""
  echo "❌ Backup failed!"
  echo ""
  echo "Troubleshooting:"
  echo "  1. Check if PostgreSQL is running"
  echo "  2. Verify DATABASE_URL in .env file"
  echo "  3. Check if user '$DB_USER' has access to database '$DB_NAME'"
  echo "  4. Verify network connection to $DB_HOST:$DB_PORT"
  
  # Unset password from environment
  unset PGPASSWORD
  exit 1
fi
