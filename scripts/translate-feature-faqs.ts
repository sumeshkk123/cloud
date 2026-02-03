import { listFeatureFaqs, createFeatureFaq, getAllFeatureFaqTranslations } from '../lib/api/features-faq';
import { i18n } from '../i18n-config';

// Translation mappings for each FAQ
const translations: Record<string, Record<string, { question: string; answer: string }>> = {
  "What are the key features of Cloud MLM Software?": {
    es: {
      question: "¿Cuáles son las características clave del software Cloud MLM?",
      answer: "La personalización de planes, la automatización de comisiones, las billeteras, la genealogía, los informes en tiempo real, los sitios replicados, el acceso móvil y las herramientas KYC trabajan juntos para simplificar el crecimiento."
    },
    it: {
      question: "Quali sono le caratteristiche principali del software Cloud MLM?",
      answer: "La personalizzazione del piano, l'automazione delle commissioni, i portafogli, la genealogia, i report in tempo reale, i siti replicati, l'accesso mobile e gli strumenti KYC lavorano insieme per semplificare la crescita."
    },
    de: {
      question: "Was sind die Hauptfunktionen von Cloud MLM Software?",
      answer: "Plananpassung, Provisionsautomatisierung, Geldbörsen, Genealogie, Echtzeitberichte, replizierte Websites, mobiler Zugriff und KYC-Tools arbeiten zusammen, um das Wachstum zu vereinfachen."
    },
    pt: {
      question: "Quais são as principais funcionalidades do software Cloud MLM?",
      answer: "A personalização de planos, automação de comissões, carteiras, genealogia, relatórios em tempo real, sites replicados, acesso móvel e ferramentas KYC trabalham juntos para simplificar o crescimento."
    },
    zh: {
      question: "Cloud MLM 软件的主要功能是什么？",
      answer: "计划定制、佣金自动化、钱包、家谱、实时报告、复制网站、移动访问和 KYC 工具共同简化增长。"
    }
  },
  "Can I customize the compensation plan?": {
    es: {
      question: "¿Puedo personalizar el plan de compensación?",
      answer: "Sí. Configure lógica binaria, matricial, uninivel, híbrida o personalizada con constructores de arrastrar y soltar, ensayo y flujos de trabajo de aprobación."
    },
    it: {
      question: "Posso personalizzare il piano di compensazione?",
      answer: "Sì. Configura logica binaria, matrice, unilevel, ibrida o personalizzata con costruttori drag-and-drop, staging e flussi di lavoro di approvazione."
    },
    de: {
      question: "Kann ich den Vergütungsplan anpassen?",
      answer: "Ja. Konfigurieren Sie binäre, Matrix-, Unilevel-, Hybrid- oder maßgeschneiderte Logik mit Drag-and-Drop-Buildern, Staging und Genehmigungsworkflows."
    },
    pt: {
      question: "Posso personalizar o plano de compensação?",
      answer: "Sim. Configure lógica binária, matriz, unilevel, híbrida ou personalizada com construtores de arrastar e soltar, staging e fluxos de trabalho de aprovação."
    },
    zh: {
      question: "我可以自定义补偿计划吗？",
      answer: "可以。使用拖放构建器、暂存和审批工作流配置二进制、矩阵、单级、混合或定制逻辑。"
    }
  },
  "What reporting is available?": {
    es: {
      question: "¿Qué informes están disponibles?",
      answer: "Los equipos de finanzas y campo monitorean comisiones, ventas, salud del equipo, pagos, retención y tendencias de crecimiento con paneles exportables e informes programados."
    },
    it: {
      question: "Quali report sono disponibili?",
      answer: "I team finanziari e sul campo monitorano commissioni, vendite, salute del team, pagamenti, fidelizzazione e tendenze di crescita con dashboard esportabili e report programmati."
    },
    de: {
      question: "Welche Berichte sind verfügbar?",
      answer: "Finanz- und Feldteams überwachen Provisionen, Verkäufe, Teamgesundheit, Auszahlungen, Bindung und Wachstumstrends mit exportierbaren Dashboards und geplanten Berichten."
    },
    pt: {
      question: "Quais relatórios estão disponíveis?",
      answer: "Equipes de finanças e campo monitoram comissões, vendas, saúde da equipe, pagamentos, retenção e tendências de crescimento com painéis exportáveis e relatórios agendados."
    },
    zh: {
      question: "有哪些报告可用？",
      answer: "财务和现场团队通过可导出的仪表板和计划报告监控佣金、销售、团队健康、支出、保留和增长趋势。"
    }
  },
  "Does the software support multiple languages and currencies?": {
    es: {
      question: "¿El software admite múltiples idiomas y monedas?",
      answer: "Absolutamente: localice el contenido y realice transacciones en monedas regionales con conversión precisa y manejo de impuestos."
    },
    it: {
      question: "Il software supporta più lingue e valute?",
      answer: "Assolutamente: localizza i contenuti e transaziona in valute regionali con conversione accurata e gestione fiscale."
    },
    de: {
      question: "Unterstützt die Software mehrere Sprachen und Währungen?",
      answer: "Absolut – lokalisieren Sie Inhalte und führen Sie Transaktionen in regionalen Währungen mit genauer Umrechnung und Steuerbehandlung durch."
    },
    pt: {
      question: "O software suporta vários idiomas e moedas?",
      answer: "Absolutamente: localize o conteúdo e transacione em moedas regionais com conversão precisa e tratamento fiscal."
    },
    zh: {
      question: "软件是否支持多种语言和货币？",
      answer: "绝对可以——本地化内容并以区域货币进行交易，具有准确的转换和税务处理。"
    }
  },
  "What marketing tools are included?": {
    es: {
      question: "¿Qué herramientas de marketing están incluidas?",
      answer: "Use sitios replicados, automatización de correo electrónico y SMS, captura de leads y compartir en redes sociales para atraer y convertir distribuidores."
    },
    it: {
      question: "Quali strumenti di marketing sono inclusi?",
      answer: "Utilizza siti replicati, automazione email e SMS, acquisizione lead e condivisione social per attrarre e convertire distributori."
    },
    de: {
      question: "Welche Marketing-Tools sind enthalten?",
      answer: "Verwenden Sie replizierte Websites, E-Mail- und SMS-Automatisierung, Lead-Erfassung und Social Sharing, um Vertriebspartner anzuziehen und zu konvertieren."
    },
    pt: {
      question: "Quais ferramentas de marketing estão incluídas?",
      answer: "Use sites replicados, automação de e-mail e SMS, captura de leads e compartilhamento social para atrair e converter distribuidores."
    },
    zh: {
      question: "包含哪些营销工具？",
      answer: "使用复制网站、电子邮件和短信自动化、潜在客户捕获和社交分享来吸引和转化分销商。"
    }
  },
  "Is the platform secure and compliant?": {
    es: {
      question: "¿La plataforma es segura y cumple con las normativas?",
      answer: "El cifrado, MFA, los registros de auditoría, la automatización fiscal y los flujos de trabajo de cumplimiento mantienen la confianza mientras cumplen con las regulaciones regionales."
    },
    it: {
      question: "La piattaforma è sicura e conforme?",
      answer: "Crittografia, MFA, audit trail, automazione fiscale e flussi di lavoro di conformità mantengono la fiducia rispettando le normative regionali."
    },
    de: {
      question: "Ist die Plattform sicher und konform?",
      answer: "Verschlüsselung, MFA, Audit-Trails, Steuerautomatisierung und Compliance-Workflows erhalten das Vertrauen und erfüllen gleichzeitig regionale Vorschriften."
    },
    pt: {
      question: "A plataforma é segura e compatível?",
      answer: "Criptografia, MFA, trilhas de auditoria, automação fiscal e fluxos de trabalho de conformidade mantêm a confiança enquanto atendem às regulamentações regionais."
    },
    zh: {
      question: "平台是否安全且合规？",
      answer: "加密、MFA、审计跟踪、税务自动化和合规工作流在满足区域法规的同时保持信任。"
    }
  },
  "Is it mobile-friendly and globally accessible?": {
    es: {
      question: "¿Es compatible con dispositivos móviles y accesible globalmente?",
      answer: "Cada módulo es responsivo y accesible en todo el mundo, por lo que los equipos pueden inscribirse, capacitarse y gestionar pagos desde cualquier dispositivo."
    },
    it: {
      question: "È mobile-friendly e accessibile globalmente?",
      answer: "Ogni modulo è reattivo e raggiungibile in tutto il mondo, quindi i team possono iscriversi, formarsi e gestire i pagamenti da qualsiasi dispositivo."
    },
    de: {
      question: "Ist es mobilfreundlich und global zugänglich?",
      answer: "Jedes Modul ist responsiv und weltweit erreichbar, sodass Teams sich registrieren, schulen und Auszahlungen von jedem Gerät aus verwalten können."
    },
    pt: {
      question: "É compatível com dispositivos móveis e acessível globalmente?",
      answer: "Cada módulo é responsivo e acessível em todo o mundo, para que as equipes possam se inscrever, treinar e gerenciar pagamentos de qualquer dispositivo."
    },
    zh: {
      question: "它是否对移动设备友好且可在全球范围内访问？",
      answer: "每个模块都是响应式的，可在全球范围内访问，因此团队可以从任何设备注册、培训和管理付款。"
    }
  }
};

async function translateFeatureFaqs() {
  console.log('🌍 Starting Feature FAQs translation...\n');

  try {
    // Get all English FAQs
    const englishFaqs = await listFeatureFaqs('en');
    
    if (englishFaqs.length === 0) {
      console.log('⚠️  No English FAQs found. Please seed English FAQs first.');
      return;
    }

    const targetLocales = i18n.locales.filter(locale => locale !== 'en');
    let created = 0;
    let skipped = 0;
    let updated = 0;

    for (const englishFaq of englishFaqs) {
      const translationKey = englishFaq.question;
      const translationsForFaq = translations[translationKey];

      if (!translationsForFaq) {
        console.log(`⚠️  No translations found for: "${translationKey}"`);
        continue;
      }

      // Check existing translations for this FAQ
      const existingTranslations = await getAllFeatureFaqTranslations(englishFaq.id);
      const existingLocales = new Set(existingTranslations.map(t => t.locale));

      for (const locale of targetLocales) {
        // Check if translation already exists
        if (existingLocales.has(locale)) {
          console.log(`⏭️  Skipping "${translationKey}" (${locale}) - already exists`);
          skipped++;
          continue;
        }

        const translation = translationsForFaq[locale];
        if (!translation) {
          console.log(`⚠️  No translation found for "${translationKey}" in locale ${locale}`);
          continue;
        }

        try {
          // Create translation with the same ID as the English FAQ
          await createFeatureFaq({
            id: englishFaq.id, // Use same ID for all translations
            question: translation.question,
            answer: translation.answer,
            locale: locale,
          });
          console.log(`✅ Created: "${translation.question}" (${locale})`);
          created++;
        } catch (error: any) {
          console.error(`❌ Error creating translation for "${translationKey}" (${locale}):`, error.message);
        }
      }
    }

    console.log(`\n✨ Translation completed! Created: ${created}, Skipped: ${skipped}, Updated: ${updated}`);
  } catch (error: any) {
    console.error('❌ Translation failed:', error.message);
    process.exit(1);
  }
}

translateFeatureFaqs()
  .then(() => {
    console.log('\n🎉 All done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
