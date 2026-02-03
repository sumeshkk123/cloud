import { listAICopilots, createAICopilot, getAllAICopilotTranslations } from '../lib/api/ai-copilot';
import { i18n } from '../i18n-config';

// Translation data for each entry
const translations: Record<string, Record<string, { title: string; content: string }>> = {
  'AI launch co-pilot': {
    es: {
      title: 'Copiloto de lanzamiento con IA',
      content: 'Los estrategas de implementación se combinan con la automatización para migrar datos, configurar su plan y ensayar escenarios de puesta en marcha antes del lanzamiento.',
    },
    it: {
      title: 'Co-pilota di lancio IA',
      content: 'Gli strateghi di implementazione si uniscono all\'automazione per migrare i dati, configurare il vostro piano e provare scenari di go-live prima del lancio.',
    },
    de: {
      title: 'KI-Launch-Co-Pilot',
      content: 'Implementierungsstrategen arbeiten mit Automatisierung zusammen, um Daten zu migrieren, Ihren Plan zu konfigurieren und Go-Live-Szenarien vor dem Start zu proben.',
    },
    pt: {
      title: 'Co-piloto de lançamento IA',
      content: 'Estrategistas de implementação se unem à automação para migrar dados, configurar seu plano e ensaiar cenários de go-live antes do lançamento.',
    },
    zh: {
      title: 'AI 启动副驾驶',
      content: '实施策略师与自动化相结合，迁移数据、配置您的计划，并在启动前演练上线场景。',
    },
  },
  'Global-ready infrastructure': {
    es: {
      title: 'Infraestructura lista para el mundo',
      content: 'El alojamiento alineado con SOC2, la residencia de datos regional y los flujos de trabajo financieros multi-moneda mantienen a los equipos de cumplimiento seguros en todas partes donde se expande.',
    },
    it: {
      title: 'Infrastruttura pronta per il mondo',
      content: 'Hosting allineato SOC2, residenza dei dati regionale e flussi di lavoro finanziari multi-valuta mantengono i team di conformità fiduciosi ovunque si espandano.',
    },
    de: {
      title: 'Weltweit einsatzbereite Infrastruktur',
      content: 'SOC2-konformes Hosting, regionale Datenresidenz und Multi-Währungs-Finanzworkflows geben Compliance-Teams überall dort Vertrauen, wo Sie expandieren.',
    },
    pt: {
      title: 'Infraestrutura pronta para o mundo',
      content: 'Hospedagem alinhada ao SOC2, residência de dados regional e fluxos de trabalho financeiros multi-moeda mantêm as equipes de conformidade confiantes em todos os lugares onde você se expande.',
    },
    zh: {
      title: '全球就绪的基础设施',
      content: '符合 SOC2 的托管、区域数据驻留和多币种财务工作流程，让合规团队在您扩展的任何地方都充满信心。',
    },
  },
  'Field adoption built-in': {
    es: {
      title: 'Adopción de campo integrada',
      content: 'Las aplicaciones móviles, las plantillas LMS y los tableros de incentivos impulsan el compromiso diario mientras el liderazgo rastrea los KPI en tiempo real.',
    },
    it: {
      title: 'Adozione sul campo integrata',
      content: 'App mobili, modelli LMS e dashboard degli incentivi guidano l\'impegno quotidiano mentre la leadership monitora i KPI in tempo reale.',
    },
    de: {
      title: 'Integrierte Feldadoption',
      content: 'Mobile Apps, LMS-Vorlagen und Incentive-Dashboards treiben das tägliche Engagement voran, während die Führung KPIs in Echtzeit verfolgt.',
    },
    pt: {
      title: 'Adoção de campo integrada',
      content: 'Aplicativos móveis, modelos LMS e painéis de incentivos impulsionam o engajamento diário enquanto a liderança acompanha KPIs em tempo real.',
    },
    zh: {
      title: '内置现场采用',
      content: '移动应用程序、LMS 模板和激励仪表板推动日常参与，而领导层实时跟踪 KPI。',
    },
  },
};

async function translateAICopilots() {
  console.log('🌍 Starting AI Copilot translations...\n');

  try {
    // Get all English entries
    const englishEntries = await listAICopilots('en');
    
    if (englishEntries.length === 0) {
      console.log('⚠️  No English AI Copilot entries found. Please run seed-ai-copilot.ts first.');
      return;
    }

    let created = 0;
    let skipped = 0;
    let errors = 0;

    for (const entry of englishEntries) {
      const translationData = translations[entry.title];
      
      if (!translationData) {
        console.log(`⏭️  No translation data found for "${entry.title}"`);
        skipped++;
        continue;
      }

      // Get existing translations
      const existingTranslations = await getAllAICopilotTranslations(entry.id);
      const existingLocales = new Set(existingTranslations.map(t => t.locale));

      // Create translations for each locale
      for (const locale of i18n.locales) {
        if (locale === 'en') continue; // Skip English

        // Check if translation already exists
        if (existingLocales.has(locale)) {
          console.log(`⏭️  Translation for "${entry.title}" in ${locale} already exists`);
          continue;
        }

        const translation = translationData[locale];
        if (!translation) {
          console.log(`⚠️  No translation data for "${entry.title}" in ${locale}`);
          continue;
        }

        try {
          await createAICopilot({
            icon: entry.icon, // Use the same icon as English
            title: translation.title,
            content: translation.content,
            locale: locale,
          });
          console.log(`✅ Created ${locale} translation for "${entry.title}"`);
          created++;
        } catch (error: any) {
          console.error(`❌ Error creating ${locale} translation for "${entry.title}":`, error.message);
          errors++;
        }
      }
    }

    console.log(`\n✨ Translation completed! Created: ${created}, Skipped: ${skipped}, Errors: ${errors}`);
  } catch (error: any) {
    console.error('❌ Translation failed:', error.message);
    process.exit(1);
  }
}

// Run the translation
translateAICopilots()
  .then(() => {
    console.log('\n🎉 All translations done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
