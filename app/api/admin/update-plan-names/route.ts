import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/db/prisma';

// Plan names extracted from images
// Format: { adminDemoTitle: title }
const titleMappings: Record<string, string> = {
  'Investment MLM Plan Software Demo': 'Investment MLM Plan',
  'Help Plan MLM Software Demo': 'Help Plan',
  'Australian MLM Binary Software Demo': 'Australian MLM Binary',
  'MLM Stair Step Plan Software Demo': 'MLM Stair Step Plan',
  'Spillover Binary Plan Software Demo': 'Spillover Binary Plan',
  'MLM Party Plan Software Demo': 'MLM Party Plan',
  'Repurchase MLM Plan Software Demo': 'Repurchase MLM Plan',
  'Emgoldex MLM Plan Software Demo': 'Emgoldex MLM Plan',
  'Matrix MLM Software Demo': 'Matrix Plan',
  'Binary MLM Software Demo': 'Binary Plan',
  'Crowd Funding MLM Software Demo': 'Crowd Funding MLM Plan',
  'Hybrid Plan MLM Software Demo': 'Hybrid Plan',
  'MMM Global MLM Plan Software Demo': 'MMM Global MLM Plan',
  'Click Plan MLM Software Demo': 'Click Plan',
  'Auto-fill Plan MLM Software Demo': 'Auto-fill Plan',
  'X-UP Plan MLM Software Demo': 'X-UP Plan',
  'Monoline MLM Plan Software Demo': 'Monoline Plan',
  'MLM Forced Matrix Plan': 'MLM Forced Matrix Plan',
  'MLM Board Plan Software Demo': 'MLM Board Plan',
  'MLM Gift Plan Software Demo': 'MLM Gift Plan',
  'MLM Generation Plan Software Demo': 'MLM Generation Plan',
  'Unilevel MLM Software Demo': 'Unilevel Plan',
};

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    console.log('Starting plan name updates...\n');

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
    let notFoundCount = 0;

    for (const item of demoItems) {
      const adminTitle = item.adminDemoTitle?.trim() ?? '';
      const mappedTitle = titleMappings[adminTitle];

      if (mappedTitle) {
        // Find all translations by icon
        await prisma.demo_items.findMany({
          where: { icon: item.icon },
        });

        // Update title for all translations
        const updateResult = await prisma.demo_items.updateMany({
          where: { icon: item.icon },
          data: { title: mappedTitle },
        });

        results.push({
          adminDemoTitle: adminTitle,
          title: mappedTitle,
          status: 'updated',
          translationsUpdated: updateResult.count,
        });

        console.log(`✓ Updated "${adminTitle}" -> "${mappedTitle}" (${updateResult.count} translations)`);
        updatedCount++;
      } else {
        results.push({
          adminDemoTitle: adminTitle,
          title: item.title || '',
          status: 'not_found',
          translationsUpdated: 0,
        });
        console.log(`✗ Not found in mapping: "${adminTitle}"`);
        notFoundCount++;
      }
    }

    return NextResponse.json({
      success: true,
      summary: {
        total: demoItems.length,
        updated: updatedCount,
        notFound: notFoundCount,
      },
      results,
    });
  } catch (error) {
    console.error('Error updating plan names:', error);
    const message = error instanceof Error ? error.message : 'Failed to update plan names.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
