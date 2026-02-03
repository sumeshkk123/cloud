/**
 * Script to backup current English demo data before restoring from backup
 * This creates a JSON backup of current English demo_items
 */

import { prisma } from '../lib/db/prisma';
import * as fs from 'fs';
import * as path from 'path';

async function backupCurrentEnglishDemos() {
  try {
    console.log('='.repeat(50));
    console.log('Backing up Current English Demo Data');
    console.log('='.repeat(50));
    console.log('');

    const englishDemos = await prisma.demo_items.findMany({
      where: { locale: 'en' },
      orderBy: { title: 'asc' },
    });

    console.log(`Found ${englishDemos.length} English demo items\n`);

    if (englishDemos.length === 0) {
      console.log('No English demo items found in current database.');
      return;
    }

    // Create backup directory if it doesn't exist
    const backupDir = path.join(process.cwd(), 'backup');
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }

    // Create JSON backup
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
    const backupFile = path.join(backupDir, `english-demos-backup-${timestamp}.json`);

    const backupData = {
      timestamp: new Date().toISOString(),
      count: englishDemos.length,
      demos: englishDemos.map(demo => ({
        id: demo.id,
        icon: demo.icon,
        image: demo.image,
        title: demo.title,
        adminDemoTitle: demo.adminDemoTitle,
        adminDemoFeatures: demo.adminDemoFeatures,
        distributorsDemoTitle: demo.distributorsDemoTitle,
        distributorsDemoFeatures: demo.distributorsDemoFeatures,
        showOnHomePage: demo.showOnHomePage,
        locale: demo.locale,
        createdAt: demo.createdAt.toISOString(),
        updatedAt: demo.updatedAt.toISOString(),
      })),
    };

    fs.writeFileSync(backupFile, JSON.stringify(backupData, null, 2));

    console.log(`✅ Backup created: ${backupFile}`);
    console.log(`   Saved ${englishDemos.length} English demo items\n`);

    // List what was backed up
    console.log('Backed up demos:');
    englishDemos.forEach((demo, idx) => {
      console.log(`  ${idx + 1}. ${demo.title}`);
      console.log(`     Icon: ${demo.icon || 'none'}`);
    });

  } catch (error) {
    console.error('Error:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

backupCurrentEnglishDemos()
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });
