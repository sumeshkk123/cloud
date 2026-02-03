/**
 * Script to restore entire database from SQL backup file
 * Uses Prisma's raw SQL execution to restore the backup
 */

import { prisma } from '../lib/db/prisma';
import * as fs from 'fs';
import * as path from 'path';

async function restoreDatabaseFromBackup(backupFilePath?: string) {
  try {
    console.log('='.repeat(50));
    console.log('Restoring Database from SQL Backup');
    console.log('='.repeat(50));
    console.log('');

    const backupFile = backupFilePath || 'backup/cloud_mlm_backup_20260129_153359.sql';

    if (!fs.existsSync(backupFile)) {
      console.error(`Error: Backup file not found: ${backupFile}`);
      return;
    }

    console.log(`Backup file: ${backupFile}`);
    console.log(`File size: ${(fs.statSync(backupFile).size / 1024 / 1024).toFixed(2)} MB\n`);

    console.log('⚠️  WARNING: This will overwrite your current database!');
    console.log('Press Ctrl+C to cancel, or wait 5 seconds to proceed...\n');
    await new Promise(resolve => setTimeout(resolve, 5000));

    console.log('Reading backup file...');
    const backupContent = fs.readFileSync(backupFile, 'utf-8');

    console.log('Executing SQL backup...');
    console.log('This may take several minutes...\n');

    // Split the SQL file into statements
    // PostgreSQL backup files use semicolons and backslash commands
    // We need to execute the entire file as one transaction if possible

    // For large files, we'll execute in chunks
    // But first, let's try executing the whole file

    try {
      // Execute the entire backup file
      // Note: This might fail if the file is too large or has special commands
      await prisma.$executeRawUnsafe(backupContent);

      console.log('✅ Database restored successfully!');
    } catch (error: any) {
      // If executeRawUnsafe fails, try using $queryRawUnsafe for read operations
      // and handle DDL/DML separately
      console.error('Error executing backup:', error.message);
      console.log('\nTrying alternative restoration method...');

      // Alternative: Use pg_restore or psql via child process
      console.log('\nPlease restore manually using:');
      console.log(`  psql $DATABASE_URL < ${backupFile}`);
      console.log('\nOr use pg_restore if the backup is in custom format.');
      throw error;
    }

    console.log('\n' + '='.repeat(50));
    console.log('Restoration Complete');
    console.log('='.repeat(50));
    console.log('\nNote: If demo_items table was empty in backup,');
    console.log('run: npm run restore-english-from-json-backup');
    console.log('to restore English demo data from JSON backup.');

  } catch (error) {
    console.error('\nError:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Get backup file from command line args
const backupFile = process.argv[2];
restoreDatabaseFromBackup(backupFile)
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });
