import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/db/prisma';
import { randomUUID } from 'crypto';
import * as fs from 'fs';
import * as path from 'path';

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Read JSON backup
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
      return NextResponse.json({ error: 'No JSON backup found' }, { status: 404 });
    }

    const backupData = JSON.parse(fs.readFileSync(files[0].path, 'utf-8'));

    let restored = 0;
    let updated = 0;
    const errors: string[] = [];

    for (const demo of backupData.demos) {
      try {
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
            where: { id: existing.id },
            data: updateData,
          });
          updated++;
        } else {
          await prisma.demo_items.create({
            data: {
              id: demo.id || randomUUID(),
              icon: demo.icon || '',
              locale: 'en',
              ...updateData,
            },
          });
          restored++;
        }
      } catch (error: any) {
        errors.push(`${demo.title}: ${error.message}`);
      }
    }

    return NextResponse.json({
      success: true,
      restored,
      updated,
      errors: errors.length > 0 ? errors : undefined,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
