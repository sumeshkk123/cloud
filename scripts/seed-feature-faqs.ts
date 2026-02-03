import { createFeatureFaq, listFeatureFaqs } from '../lib/api/features-faq';

const featureFaqs = [
  {
    question: "What are the key features of Cloud MLM Software?",
    answer:
      "Plan customization, commission automation, wallets, genealogy, real-time reporting, replicated sites, mobile access, and KYC tooling work together to simplify growth.",
    locale: 'en',
  },
  {
    question: "Can I customize the compensation plan?",
    answer:
      "Yes. Configure binary, matrix, unilevel, hybrid, or bespoke logic with drag-and-drop builders, staging, and approval workflows.",
    locale: 'en',
  },
  {
    question: "What reporting is available?",
    answer:
      "Finance and field teams monitor commissions, sales, team health, payouts, retention, and growth trends with exportable dashboards and scheduled reports.",
    locale: 'en',
  },
  {
    question: "Does the software support multiple languages and currencies?",
    answer:
      "Absolutely -- localize content and transact in regional currencies with accurate conversion and tax handling.",
    locale: 'en',
  },
  {
    question: "What marketing tools are included?",
    answer:
      "Use replicated sites, email and SMS automation, lead capture, and social sharing to attract and convert distributors.",
    locale: 'en',
  },
  {
    question: "Is the platform secure and compliant?",
    answer:
      "Encryption, MFA, audit trails, tax automation, and compliance workflows maintain trust while meeting regional regulations.",
    locale: 'en',
  },
  {
    question: "Is it mobile-friendly and globally accessible?",
    answer:
      "Every module is responsive and reachable worldwide, so teams can enroll, train, and manage payouts from any device.",
    locale: 'en',
  },
];

async function seedFeatureFaqs() {
  console.log('🌱 Starting Feature FAQs seed...\n');

  try {
    // Check existing entries to avoid duplicates
    const existing = await listFeatureFaqs('en');
    const existingQuestions = new Set(existing.map((e) => e.question.toLowerCase().trim()));

    let created = 0;
    let skipped = 0;

    for (const faq of featureFaqs) {
      // Check if FAQ with same question already exists
      if (existingQuestions.has(faq.question.toLowerCase().trim())) {
        console.log(`⏭️  Skipping "${faq.question}" - already exists`);
        skipped++;
        continue;
      }

      try {
        await createFeatureFaq({
          question: faq.question,
          answer: faq.answer,
          locale: faq.locale,
        });
        console.log(`✅ Created: "${faq.question}"`);
        created++;
      } catch (error: any) {
        console.error(`❌ Error creating "${faq.question}":`, error.message);
      }
    }

    console.log(`\n✨ Seed completed! Created: ${created}, Skipped: ${skipped}`);
  } catch (error: any) {
    console.error('❌ Seed failed:', error.message);
    process.exit(1);
  }
}

// Run the seed
seedFeatureFaqs()
  .then(() => {
    console.log('\n🎉 All done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
