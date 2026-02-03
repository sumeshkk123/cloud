import { createAICopilot } from '../lib/api/ai-copilot';
import { listAICopilots } from '../lib/api/ai-copilot';

const aiCopilotEntries = [
  {
    icon: 'lucide:Rocket',
    title: 'AI launch co-pilot',
    content: 'Implementation strategists pair with automation to migrate data, configure your plan, and rehearse go-live scenarios before launch.',
    locale: 'en',
  },
  {
    icon: 'lucide:ShieldCheck',
    title: 'Global-ready infrastructure',
    content: 'SOC2-aligned hosting, regional data residency, and multi-currency finance workflows keep compliance teams confident everywhere you expand.',
    locale: 'en',
  },
  {
    icon: 'lucide:Users',
    title: 'Field adoption built-in',
    content: 'Mobile apps, LMS templates, and incentives dashboards drive daily engagement while leadership tracks KPIs in real time.',
    locale: 'en',
  },
];

async function seedAICopilots() {
  console.log('🌱 Starting AI Copilot seed...\n');

  try {
    // Check existing entries to avoid duplicates
    const existing = await listAICopilots('en');
    const existingTitles = new Set(existing.map((e) => e.title.toLowerCase()));

    let created = 0;
    let skipped = 0;

    for (const entry of aiCopilotEntries) {
      // Check if entry with same title already exists
      if (existingTitles.has(entry.title.toLowerCase())) {
        console.log(`⏭️  Skipping "${entry.title}" - already exists`);
        skipped++;
        continue;
      }

      try {
        await createAICopilot(entry);
        console.log(`✅ Created: "${entry.title}"`);
        created++;
      } catch (error: any) {
        console.error(`❌ Error creating "${entry.title}":`, error.message);
      }
    }

    console.log(`\n✨ Seed completed! Created: ${created}, Skipped: ${skipped}`);
  } catch (error: any) {
    console.error('❌ Seed failed:', error.message);
    process.exit(1);
  }
}

// Run the seed
seedAICopilots()
  .then(() => {
    console.log('\n🎉 All done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
