/**
 * Script to restore English demo data from JSON backup file
 * This restores the English demo items we backed up earlier
 */

import { prisma } from '../lib/db/prisma';
import * as fs from 'fs';
import * as path from 'path';

async function restoreEnglishFromJsonBackup(backupFilePath?: string) {
  try {
    console.log('='.repeat(50));
    console.log('Restoring English Demo Data from JSON Backup');
    console.log('='.repeat(50));
    console.log('');

    // Find the most recent JSON backup if not specified
    let backupFile = backupFilePath;
    if (!backupFile) {
      const backupDir = path.join(process.cwd(), 'backup');
      const files = fs.readdirSync(backupDir)
        .filter(f => f.startsWith('english-demos-backup-') && f.endsWith('.json'))
        .map(f => ({
          name: f,
          path: path.join(backupDir, f),
          mtime: fs.statSync(path.join(backupDir, f)).mtime
        }))
        .sort((a, b) => b.mtime.getTime() - a.mtime.getTime());

      if (files.length === 0) {
        console.error('No JSON backup files found in backup/ directory');
        console.log('Run: npm run backup-current-english-demos first');
        return;
      }

      backupFile = files[0].path;
      console.log(`Using backup file: ${files[0].name}`);
      console.log(`Last modified: ${files[0].mtime.toISOString()}\n`);
    }

    // Read JSON backup
    console.log('Reading backup file...');
    const backupContent = fs.readFileSync(backupFile, 'utf-8');
    const backupData = JSON.parse(backupContent);

    console.log(`Found ${backupData.count} English demo items in backup\n`);

    if (!backupData.demos || backupData.demos.length === 0) {
      console.log('No demo items found in backup.');
      return;
    }

    // Show what will be restored
    console.log('English demos to restore:');
    backupData.demos.forEach((demo: any, idx: number) => {
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

    for (const demo of backupData.demos) {
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
              showOnHomePage: demo.showOnHomePage ?? false,
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
              showOnHomePage: demo.showOnHomePage ?? false,
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
restoreEnglishFromJsonBackup(backupFile)
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });
