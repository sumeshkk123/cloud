import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/db/prisma';

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    console.log('Starting title updates...\n');

    // Get all demo items (English locale)
    const demoItems = await prisma.demo_items.findMany({
      where: { locale: 'en' },
      select: {
        id: true,
        adminDemoTitle: true,
        title: true,
        icon: true,
      },
    });

    console.log(`Found ${demoItems.length} demo items\n`);

    const results: Array<{ adminDemoTitle: string; title: string; status: string; translationsUpdated: number }> = [];
    let updatedCount = 0;

    for (const item of demoItems) {
      const adminTitle = (item.adminDemoTitle ?? '').trim();
      
      // Set title to adminDemoTitle if title is empty or different
      if (!item.title || item.title !== adminTitle) {
        // Find all translations by icon
        const allTranslations = await prisma.demo_items.findMany({
          where: { icon: item.icon },
        });

        // Update title for all translations to match adminDemoTitle
        const updateResult = await prisma.demo_items.updateMany({
          where: { icon: item.icon },
          data: { title: adminTitle },
        });

        results.push({
          adminDemoTitle: adminTitle,
          title: adminTitle,
          status: 'updated',
          translationsUpdated: updateResult.count,
        });

        console.log(`✓ Updated title: "${adminTitle}" (${updateResult.count} translations)`);
        updatedCount++;
      } else {
        results.push({
          adminDemoTitle: adminTitle,
          title: item.title,
          status: 'already_set',
          translationsUpdated: 0,
        });
        console.log(`- Already set: "${adminTitle}"`);
      }
    }

    return NextResponse.json({
      success: true,
      summary: {
        total: demoItems.length,
        updated: updatedCount,
        alreadySet: demoItems.length - updatedCount,
      },
      results,
    });
  } catch (error) {
    console.error('Error updating titles:', error);
    const message = error instanceof Error ? error.message : 'Failed to update titles.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
