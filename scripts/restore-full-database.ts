/**
 * Script to restore entire database from SQL backup file
 * Uses psql command-line tool for reliable restoration
 */

import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

// Load environment variables manually
function loadEnvFile(filePath: string) {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const [key, ...valueParts] = trimmed.split('=');
        if (key && valueParts.length > 0) {
          const value = valueParts.join('=').replace(/^["']|["']$/g, '');
          process.env[key.trim()] = value;
        }
      }
    }
  }
}

// Load .env files
loadEnvFile(path.join(process.cwd(), '.env.local'));
loadEnvFile(path.join(process.cwd(), '.env'));

function extractDatabaseUrl(): string {
  // Try different environment variable names
  const url = process.env.DATABASE_URL ||
    process.env.POSTGRES_PRISMA_URL ||
    process.env.DIRECT_URL ||
    process.env.POSTGRES_URL;

  if (!url) {
    throw new Error('DATABASE_URL not found in environment variables');
  }

  // Remove query parameters that psql doesn't understand
  // Prisma URLs often have ?schema=public&pgbouncer=true
  const cleanUrl = url.split('?')[0];

  return cleanUrl;
}

async function restoreDatabase(backupFilePath: string) {
  try {
    console.log('='.repeat(60));
    console.log('Full Database Restoration from SQL Backup');
    console.log('='.repeat(60));
    console.log('');

    // Validate backup file
    if (!fs.existsSync(backupFilePath)) {
      throw new Error(`Backup file not found: ${backupFilePath}`);
    }

    const stats = fs.statSync(backupFilePath);
    console.log(`Backup file: ${backupFilePath}`);
    console.log(`File size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
    console.log('');

    // Get database URL
    const dbUrl = extractDatabaseUrl();
    console.log(`Database URL: ${dbUrl.replace(/:[^:@]+@/, ':****@')}`); // Hide password
    console.log('');

    console.log('⚠️  WARNING: This will OVERWRITE your entire database!');
    console.log('⚠️  All current data will be replaced with backup data.');
    console.log('');
    console.log('Press Ctrl+C to cancel, or wait 5 seconds to proceed...');
    console.log('');

    // Wait 5 seconds
    await new Promise(resolve => setTimeout(resolve, 5000));

    console.log('Starting database restoration...');
    console.log('This may take several minutes depending on backup size...');
    console.log('');

    // Execute psql restore
    // Use psql with the backup file as input
    const command = `psql "${dbUrl}" < "${backupFilePath}"`;

    console.log('Executing restore command...');
    console.log('');

    try {
      execSync(command, {
        stdio: 'inherit',
        shell: '/bin/bash',
        env: { ...process.env, PGPASSWORD: undefined }, // Don't pass PGPASSWORD if it's in URL
      });

      console.log('');
      console.log('='.repeat(60));
      console.log('✅ Database restored successfully!');
      console.log('='.repeat(60));
      console.log('');
      console.log('Note: If demo_items table was empty in backup,');
      console.log('you may need to restore English demo data separately.');
      console.log('Run: npm run restore-english-demos-direct');

    } catch (error: any) {
      console.error('');
      console.error('='.repeat(60));
      console.error('❌ Error during restoration');
      console.error('='.repeat(60));
      console.error('');

      if (error.message.includes('psql: command not found')) {
        console.error('Error: psql command not found.');
        console.error('Please install PostgreSQL client tools:');
        console.error('  macOS: brew install postgresql');
        console.error('  Ubuntu: sudo apt-get install postgresql-client');
        console.error('');
      } else {
        console.error('Error details:', error.message);
        console.error('');
      }

      throw error;
    }

  } catch (error: any) {
    console.error('');
    console.error('Error:', error.message);
    process.exit(1);
  }
}

// Get backup file from command line args
const backupFile = process.argv[2] || 'backup/cloud_mlm_backup_20260129_153359.sql';

restoreDatabase(backupFile)
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
