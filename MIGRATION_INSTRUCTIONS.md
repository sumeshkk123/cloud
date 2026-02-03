# Migration Instructions: Add Title Field and Rename Fields

## Problem
The `title` column doesn't exist in the database yet, causing the error:
```
Invalid `prisma.demo_items.create()` invocation: The column `title` does not exist in the current database.
```

## Solution: Run the Migration SQL

### Step 1: Make sure your database is running
```bash
# Check if PostgreSQL is running
# On macOS with Homebrew:
brew services list | grep postgresql

# Start if not running:
brew services start postgresql
```

### Step 2: Run the migration SQL

**Option A: Using Prisma db execute (Recommended)**
```bash
cd /Users/sumeshkk/Documents/bpract/git-desktop/cloud-next
npx prisma db execute --file prisma/migrations/add_title_and_rename_fields.sql --schema prisma/schema.prisma
```

**Option B: Using psql directly**
```bash
cd /Users/sumeshkk/Documents/bpract/git-desktop/cloud-next

# Load DATABASE_URL from .env
export $(cat .env | grep DATABASE_URL | xargs)

# Run migration
psql "$DATABASE_URL" -f prisma/migrations/add_title_and_rename_fields.sql
```

**Option C: Using the helper script**
```bash
cd /Users/sumeshkk/Documents/bpract/git-desktop/cloud-next
./scripts/run-migration.sh
```

**Option D: Manual SQL execution**
1. Connect to your database using any PostgreSQL client (pgAdmin, DBeaver, TablePlus, etc.)
2. Open a SQL query window
3. Copy the contents of `prisma/migrations/add_title_and_rename_fields.sql`
4. Paste and execute

### Step 3: Regenerate Prisma Client
After the migration completes successfully:
```bash
npx prisma generate
```

### Step 4: Verify the migration
You can verify the migration worked by checking the table structure:
```bash
npx prisma db pull
```

Or check in your database:
```sql
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'demo_items';
```

You should see:
- `title` column exists
- `icon`, `image`, `title`, `adminDemoTitle`, `distributorsDemoTitle` are all NOT NULL
- `adminDemoTitleContent` and `distributorsDemoTitleContent` columns are removed

## What the migration does:

1. **Adds `title` column** as nullable first
2. **Migrates data** from `adminDemoTitleContent` → `adminDemoTitle` and `distributorsDemoTitleContent` → `distributorsDemoTitle`
3. **Sets default empty strings** for any NULL values in required fields
4. **Drops old Content columns** (`adminDemoTitleContent`, `distributorsDemoTitleContent`)
5. **Makes columns NOT NULL** (`icon`, `image`, `title`, `adminDemoTitle`, `distributorsDemoTitle`)

## Troubleshooting

If you get connection errors:
- Make sure PostgreSQL is running
- Check your `DATABASE_URL` in `.env` file
- Verify database credentials are correct

If migration fails partway through:
- Check the error message
- The migration uses `IF EXISTS` and `IF NOT EXISTS` clauses, so it's safe to re-run
- You may need to manually fix any issues before re-running
