import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';
import { randomUUID } from 'crypto';

const prisma = new PrismaClient();

async function main() {
  const backupFile = path.join(process.cwd(), 'backup', 'english-demos-backup-2026-01-30T04-09-22.json');
  const data = JSON.parse(fs.readFileSync(backupFile, 'utf-8'));

  console.log(`Restoring ${data.demos.length} English demos...\n`);

  for (const demo of data.demos) {
    const existing = await prisma.demo_items.findFirst({
      where: { icon: demo.icon, locale: 'en' },
    });

    const updateData = {
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
        data: updateData,
      });
      console.log(`✓ ${demo.title}`);
    } else {
      await prisma.demo_items.create({
        data: {
          id: demo.id || randomUUID(),
          icon: demo.icon || '',
          locale: 'en',
          ...updateData,
        },
      });
      console.log(`✓ ${demo.title} (created)`);
    }
  }

  console.log('\n✅ Done!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
