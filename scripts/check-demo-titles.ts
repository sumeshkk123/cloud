/**
 * Script to check current Admin Demo Title and Distributors Demo Title
 */

import { prisma } from '@/lib/db/prisma';

async function checkDemoTitles() {
  try {
    const demos = await prisma.demo_items.findMany({
      where: { locale: 'en' },
      select: {
        id: true,
        title: true,
        adminDemoTitle: true,
        distributorsDemoTitle: true,
      },
      orderBy: { title: 'asc' },
    });

    console.log(`Total English demos: ${demos.length}\n`);

    const sameTitles = demos.filter(
      d => d.adminDemoTitle === d.distributorsDemoTitle
    );

    const shortTitles = demos.filter(
      d => {
        const adminWords = (d.adminDemoTitle || '').split(/\s+/).length;
        const distributorWords = (d.distributorsDemoTitle || '').split(/\s+/).length;
        return adminWords < 10 || distributorWords < 10;
      }
    );

    console.log(`⚠️  Demos with same Admin/Distributor titles: ${sameTitles.length}`);
    console.log(`⚠️  Demos with short titles (< 10 words): ${shortTitles.length}\n`);

    console.log('Sample demos:\n');
    demos.slice(0, 5).forEach((demo, idx) => {
      console.log(`${idx + 1}. ${demo.title}`);
      console.log(`   Admin: "${demo.adminDemoTitle}" (${(demo.adminDemoTitle || '').split(/\s+/).length} words)`);
      console.log(`   Distributor: "${demo.distributorsDemoTitle}" (${(demo.distributorsDemoTitle || '').split(/\s+/).length} words)`);
      console.log(`   Same: ${demo.adminDemoTitle === demo.distributorsDemoTitle ? 'YES ⚠️' : 'NO ✓'}\n`);
    });

    if (sameTitles.length > 0) {
      console.log('\nDemos with identical titles:');
      sameTitles.forEach(d => {
        console.log(`  - ${d.title}`);
      });
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkDemoTitles();
