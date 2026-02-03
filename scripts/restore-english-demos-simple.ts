/**
 * Simple script to restore English demo data from JSON backup
 */

import { prisma } from '../lib/db/prisma';
import * as fs from 'fs';
import * as path from 'path';
import { randomUUID } from 'crypto';

async function restoreEnglishDemos() {
  try {
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
      console.error('No JSON backup files found');
      return;
    }

    const backupFile = files[0].path;
    console.log(`Using: ${files[0].name}\n`);

    const backupData = JSON.parse(fs.readFileSync(backupFile, 'utf-8'));
    console.log(`Found ${backupData.demos.length} English demos\n`);

    let restored = 0;
    let updated = 0;

    for (const demo of backupData.demos) {
      const existing = await prisma.demo_items.findFirst({
        where: { icon: demo.icon, locale: 'en' },
      });

      const data = {
        title: demo.title,
        adminDemoTitle: demo.adminDemoTitle || '',
        adminDemoFeatures: demo.adminDemoFeatures ? (typeof demo.adminDemoFeatures === 'string' ? demo.adminDemoFeatures : JSON.stringify(demo.adminDemoFeatures)) : null,
        distributorsDemoTitle: demo.distributorsDemoTitle || '',
        distributorsDemoFeatures: demo.distributorsDemoFeatures ? (typeof demo.distributorsDemoFeatures === 'string' ? demo.distributorsDemoFeatures : JSON.stringify(demo.distributorsDemoFeatures)) : null,
        image: demo.image || '',
        showOnHomePage: demo.showOnHomePage ?? false,
        updatedAt: new Date(),
      };

      if (existing) {
        await prisma.demo_items.update({
          where: { id_locale: { id: existing.id, locale: 'en' } },
          data,
        });
        updated++;
        console.log(`✓ Updated: ${demo.title}`);
      } else {
        await prisma.demo_items.create({
          data: {
            id: demo.id || randomUUID(),
            icon: demo.icon || '',
            locale: 'en',
            ...data,
          },
        });
        restored++;
        console.log(`✓ Created: ${demo.title}`);
      }
    }

    console.log(`\n✅ Restored: ${restored} created, ${updated} updated`);
  } catch (error) {
    console.error('Error:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

restoreEnglishDemos();
