/**
 * Script to check all tables for missing icons
 */

import { prisma } from '@/lib/db/prisma';

async function checkAllMissingIcons() {
  try {
    console.log('Checking all tables for missing icons...\n');

    // Check demo_items
    const demos = await prisma.demo_items.findMany({
      where: { locale: 'en' },
      select: { id: true, title: true, icon: true },
    });
    const demosMissing = demos.filter(d => !d.icon || d.icon.trim() === '');
    console.log(`Demo Items: ${demos.length} total, ${demosMissing.length} missing icons`);
    if (demosMissing.length > 0) {
      demosMissing.forEach(d => console.log(`  - "${d.title}"`));
    }

    // Check features
    const features = await prisma.features.findMany({
      where: { locale: 'en' },
      select: { id: true, title: true, icon: true },
    });
    const featuresMissing = features.filter(f => !f.icon || f.icon.trim() === '');
    console.log(`\nFeatures: ${features.length} total, ${featuresMissing.length} missing icons`);
    if (featuresMissing.length > 0) {
      featuresMissing.forEach(f => console.log(`  - "${f.title}"`));
    }

    // Check services
    const services = await prisma.services.findMany({
      where: { locale: 'en' },
      select: { id: true, title: true, icon: true },
    });
    const servicesMissing = services.filter(s => !s.icon || s.icon.trim() === '');
    console.log(`\nServices: ${services.length} total, ${servicesMissing.length} missing icons`);
    if (servicesMissing.length > 0) {
      servicesMissing.forEach(s => console.log(`  - "${s.title}"`));
    }

    // Check ai_copilots
    const aiCopilots = await prisma.ai_copilots.findMany({
      where: { locale: 'en' },
      select: { id: true, title: true, icon: true },
    });
    const aiCopilotsMissing = aiCopilots.filter(a => !a.icon || a.icon.trim() === '');
    console.log(`\nAI Copilots: ${aiCopilots.length} total, ${aiCopilotsMissing.length} missing icons`);
    if (aiCopilotsMissing.length > 0) {
      aiCopilotsMissing.forEach(a => console.log(`  - "${a.title}"`));
    }

    // Check industry_solutions
    const industrySolutions = await prisma.industry_solutions.findMany({
      where: { locale: 'en' },
      select: { id: true, title: true, icon: true },
    });
    const industrySolutionsMissing = industrySolutions.filter(i => !i.icon || i.icon.trim() === '');
    console.log(`\nIndustry Solutions: ${industrySolutions.length} total, ${industrySolutionsMissing.length} missing icons`);
    if (industrySolutionsMissing.length > 0) {
      industrySolutionsMissing.forEach(i => console.log(`  - "${i.title}"`));
    }

    const totalMissing = demosMissing.length + featuresMissing.length + servicesMissing.length +
      aiCopilotsMissing.length + industrySolutionsMissing.length;

    console.log(`\n\nTotal items missing icons: ${totalMissing}`);

    if (totalMissing > 0) {
      console.log('\n⚠️  Items that need icons:');
      if (demosMissing.length > 0) {
        console.log('\nDemo Items:');
        demosMissing.forEach(d => console.log(`  - Demo: "${d.title}" (ID: ${d.id})`));
      }
      if (featuresMissing.length > 0) {
        console.log('\nFeatures:');
        featuresMissing.forEach(f => console.log(`  - Feature: "${f.title}" (ID: ${f.id})`));
      }
      if (servicesMissing.length > 0) {
        console.log('\nServices:');
        servicesMissing.forEach(s => console.log(`  - Service: "${s.title}" (ID: ${s.id})`));
      }
      if (aiCopilotsMissing.length > 0) {
        console.log('\nAI Copilots:');
        aiCopilotsMissing.forEach(a => console.log(`  - AI Copilot: "${a.title}" (ID: ${a.id})`));
      }
      if (industrySolutionsMissing.length > 0) {
        console.log('\nIndustry Solutions:');
        industrySolutionsMissing.forEach(i => console.log(`  - Industry Solution: "${i.title}" (ID: ${i.id})`));
      }
    } else {
      console.log('\n✓ All items have icons!');
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkAllMissingIcons();
