/**
 * Script to restore English demo data from SQL backup file
 * Extracts English demo_items from PostgreSQL backup and restores them
 */

import { prisma } from '../lib/db/prisma';
import * as fs from 'fs';
import * as path from 'path';

async function restoreEnglishDemoFromBackup(backupFilePath?: string) {
  try {
    console.log('='.repeat(50));
    console.log('Restoring English Demo Data from Backup');
    console.log('='.repeat(50));
    console.log('');

    // Find the most recent backup file if not specified
    let backupFile = backupFilePath;
    if (!backupFile) {
      const backupDir = path.join(process.cwd(), 'backup');
      const files = fs.readdirSync(backupDir)
        .filter(f => f.endsWith('.sql'))
        .map(f => ({
          name: f,
          path: path.join(backupDir, f),
          mtime: fs.statSync(path.join(backupDir, f)).mtime
        }))
        .sort((a, b) => b.mtime.getTime() - a.mtime.getTime());

      if (files.length === 0) {
        console.error('No backup files found in backup/ directory');
        return;
      }

      backupFile = files[0].path;
      console.log(`Using backup file: ${files[0].name}`);
      console.log(`Last modified: ${files[0].mtime.toISOString()}\n`);
    }

    // Read backup file
    console.log('Reading backup file...');
    const backupContent = fs.readFileSync(backupFile, 'utf-8');

    // Find COPY statement for demo_items
    const copyPattern = /COPY\s+public\.demo_items\s*\(([^)]+)\)\s+FROM\s+stdin;/i;
    const copyMatch = backupContent.match(copyPattern);

    if (!copyMatch) {
      console.error('No COPY statement found for demo_items table');
      return;
    }

    // Extract column names
    const columns = copyMatch[1].split(',').map(c => c.trim().replace(/"/g, ''));
    console.log(`Found columns: ${columns.join(', ')}\n`);

    // Find the data section (between COPY and \.)
    const copyStartIndex = backupContent.indexOf(copyMatch[0]) + copyMatch[0].length;
    const dataEndPattern = /\\\./;
    const dataEndMatch = backupContent.substring(copyStartIndex).match(dataEndPattern);

    if (!dataEndMatch) {
      console.error('No data end marker (\\.) found');
      return;
    }

    const dataSection = backupContent.substring(copyStartIndex, copyStartIndex + dataEndMatch.index);
    const lines = dataSection.split('\n').filter(line => line.trim() && !line.startsWith('--'));

    console.log(`Found ${lines.length} data rows\n`);

    // Parse tab-separated values (PostgreSQL COPY format uses tabs)
    const englishDemos: any[] = [];

    for (const line of lines) {
      if (!line.trim()) continue;

      // PostgreSQL COPY format uses tab-separated values
      // Handle quoted values and escaped characters
      const values: string[] = [];
      let current = '';
      let inQuotes = false;
      let escapeNext = false;

      for (let i = 0; i < line.length; i++) {
        const char = line[i];

        if (escapeNext) {
          current += char;
          escapeNext = false;
          continue;
        }

        if (char === '\\') {
          escapeNext = true;
          current += char;
          continue;
        }

        if (char === '\t' && !inQuotes) {
          values.push(current);
          current = '';
          continue;
        }

        if (char === '"') {
          inQuotes = !inQuotes;
          continue;
        }

        current += char;
      }
      if (current) values.push(current);

      // Map values to columns
      if (values.length >= columns.length) {
        const demo: any = {};
        columns.forEach((col, idx) => {
          let value = values[idx] || '';
          // Remove surrounding quotes if present
          value = value.replace(/^["']|["']$/g, '');
          // Handle NULL
          if (value === '\\N' || value === 'NULL') {
            demo[col] = null;
          } else {
            demo[col] = value;
          }
        });

        // Only process English records
        if (demo.locale === 'en' && demo.title) {
          englishDemos.push(demo);
        }
      }
    }

    console.log(`Found ${englishDemos.length} English demo records in backup\n`);

    if (englishDemos.length === 0) {
      console.log('No English demo records found in backup.');
      return;
    }

    // Show what will be restored
    console.log('English demos to restore:');
    englishDemos.forEach((demo, idx) => {
      console.log(`  ${idx + 1}. ${demo.title}`);
      console.log(`     Icon: ${demo.icon || 'none'}`);
      console.log(`     Image: ${demo.image || 'none'}`);
    });

    console.log('\n⚠ This will update existing English demos or create new ones.');
    console.log('Press Ctrl+C to cancel, or wait 3 seconds to proceed...\n');
    await new Promise(resolve => setTimeout(resolve, 3000));

    let restoredCount = 0;
    let updatedCount = 0;
    let errorCount = 0;

    for (const demo of englishDemos) {
      try {
        // Check if demo exists (by icon, since that's how we group translations)
        const existing = await prisma.demo_items.findFirst({
          where: {
            icon: demo.icon,
            locale: 'en',
          },
        });

        // Parse JSON fields if they're strings
        let adminDemoFeatures = demo.adminDemoFeatures;
        let distributorsDemoFeatures = demo.distributorsDemoFeatures;

        if (typeof adminDemoFeatures === 'string' && adminDemoFeatures.trim()) {
          try {
            adminDemoFeatures = JSON.parse(adminDemoFeatures);
          } catch {
            // Keep as string if not valid JSON
          }
        }

        if (typeof distributorsDemoFeatures === 'string' && distributorsDemoFeatures.trim()) {
          try {
            distributorsDemoFeatures = JSON.parse(distributorsDemoFeatures);
          } catch {
            // Keep as string if not valid JSON
          }
        }

        if (existing) {
          // Update existing
          await prisma.demo_items.update({
            where: {
              id_locale: {
                id: existing.id,
                locale: 'en',
              },
            },
            data: {
              title: demo.title,
              adminDemoTitle: demo.adminDemoTitle || '',
              adminDemoFeatures: adminDemoFeatures ? (typeof adminDemoFeatures === 'string' ? adminDemoFeatures : JSON.stringify(adminDemoFeatures)) : null,
              distributorsDemoTitle: demo.distributorsDemoTitle || '',
              distributorsDemoFeatures: distributorsDemoFeatures ? (typeof distributorsDemoFeatures === 'string' ? distributorsDemoFeatures : JSON.stringify(distributorsDemoFeatures)) : null,
              image: demo.image || existing.image,
              showOnHomePage: demo.showOnHomePage === true || demo.showOnHomePage === 'true' || demo.showOnHomePage === '1',
              updatedAt: new Date(),
            },
          });
          console.log(`✓ Updated: ${demo.title}`);
          updatedCount++;
        } else {
          // Create new
          const { randomUUID } = require('crypto');
          await prisma.demo_items.create({
            data: {
              id: demo.id || randomUUID(),
              icon: demo.icon || '',
              image: demo.image || '',
              title: demo.title,
              adminDemoTitle: demo.adminDemoTitle || '',
              adminDemoFeatures: adminDemoFeatures ? (typeof adminDemoFeatures === 'string' ? adminDemoFeatures : JSON.stringify(adminDemoFeatures)) : null,
              distributorsDemoTitle: demo.distributorsDemoTitle || '',
              distributorsDemoFeatures: distributorsDemoFeatures ? (typeof distributorsDemoFeatures === 'string' ? distributorsDemoFeatures : JSON.stringify(distributorsDemoFeatures)) : null,
              showOnHomePage: demo.showOnHomePage === true || demo.showOnHomePage === 'true' || demo.showOnHomePage === '1',
              locale: 'en',
              updatedAt: new Date(),
            },
          });
          console.log(`✓ Created: ${demo.title}`);
          restoredCount++;
        }
      } catch (error) {
        console.error(`✗ Error processing "${demo.title}":`, error);
        errorCount++;
      }
    }

    console.log('\n' + '='.repeat(50));
    console.log('Restoration Summary:');
    console.log('='.repeat(50));
    console.log(`✓ Created: ${restoredCount}`);
    console.log(`✓ Updated: ${updatedCount}`);
    console.log(`✗ Errors: ${errorCount}`);
    console.log('='.repeat(50));

  } catch (error) {
    console.error('Error:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Get backup file from command line args or use most recent
const backupFile = process.argv[2];
restoreEnglishDemoFromBackup(backupFile)
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });
