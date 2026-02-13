import {
  CircleDollarSign,
  Wallet,
  LineChart,
  ShieldCheck,
  BarChart3,
  Plug,
  Compass,
} from "lucide-react";
import type { ConsultingPageContent } from "@/components/frontend/mlm-consulting";
import type { Locale } from "@/i18n-config";

const ICONS = {
  CircleDollarSign,
  Wallet,
  LineChart,
  ShieldCheck,
  BarChart3,
  Plug,
  Compass,
} as const;

/** String-only content per locale; icons are attached in buildContent(). */
const TEXTS: Record<
  string,
  {
    hero: { badge: string; title: string; description: string; primaryCta: string; secondaryCta: string; highlights: { title: string; description: string }[] };
    intro: { badge: string; heading: string; paragraphs: string[]; partnerCard: { badge: string; heading: string; subheading: string; points: string[] } };
    introFeatures: { title: string; description: string }[];
    whySection: { heading: string; description: string; reasons: { title: string; detail: string }[] };
    checklistSection: { badge: string; heading: string; description: string; items: string[] };
    offerSection: { badge: string; heading: string; description: string; items: { title: string; description: string }[] };
    processSection: { heading: string; description: string; steps: { number: string; title: string; description: string }[] };
    trustSection: { heading: string; pointsTitle: string; paragraphs: string[]; points: string[] };
    cta: { heading: string; description: string; buttonText: string; secondaryButtonText: string; trustIndicators: [string, string, string] };
  }
> = {
  en: {
    hero: {
      badge: "Bitcoin & Cryptocurrency MLM Software",
      title: "Bitcoin & Cryptocurrency MLM Software",
      description:
        "Run your MLM or direct selling business with crypto payouts and multi-currency support. Cloud MLM Software supports Bitcoin and cryptocurrency integration for commissions, e-wallets, and compliant reporting.",
      primaryCta: "Request a demo",
      secondaryCta: "View demo",
      highlights: [
        { title: "Crypto payouts", description: "Bitcoin and major cryptocurrencies for commissions and bonuses. Integrate with your compensation plan and genealogy." },
        { title: "Multi-currency", description: "Fiat and crypto in one platform. E-wallets and multi-currency dashboards for distributors." },
        { title: "Compliance", description: "Audit trails, KYC integration, and reporting for both fiat and crypto. Stay compliant across regions." },
      ],
    },
    intro: {
      badge: "Why this service",
      heading: "Cryptocurrency and MLM in one platform",
      paragraphs: [
        "Bitcoin and cryptocurrency MLM software from Cloud MLM gives you commission payouts, e-wallets, and multi-currency support in a single system. Integrate with your existing compensation plans and genealogy so distributors can earn and receive payouts in crypto or fiat.",
        "We build for compliance: audit trails, KYC integration, and reporting that work across fiat and crypto. Scale your network with flexible payout options and real-time dashboards.",
        "Cloud MLM's Bitcoin and cryptocurrency integration keeps compensation rules, genealogy, and payouts in sync. You get audit trails and compliance-ready reporting for both fiat and crypto transactions.",
      ],
      partnerCard: {
        badge: "Included",
        heading: "Features of Bitcoin & Cryptocurrency MLM",
        subheading: "Crypto payouts, multi-currency, and compliance in one platform.",
        points: [
          "Bitcoin and major cryptocurrency payout support",
          "Multi-currency and e-wallet integration",
          "Compensation and genealogy integration",
          "Compliance and audit-ready reporting",
        ],
      },
    },
    introFeatures: [
      { title: "Crypto payouts", description: "Support Bitcoin and major cryptocurrencies for commissions and bonuses. Run fiat and crypto in one platform." },
      { title: "E-wallets & multi-currency", description: "Multi-currency dashboards and e-wallets so distributors can view balances and receive payouts in crypto or fiat." },
      { title: "Reporting & compliance", description: "Audit trails and compliance-ready reporting for fiat and crypto. KYC integration where required." },
    ],
    whySection: {
      heading: "Why use cryptocurrency in MLM software?",
      description: "Distributors and members increasingly expect payout options in Bitcoin and other cryptocurrencies. An MLM platform that supports crypto alongside fiat gives you one system for commissions, e-wallets, and reporting.",
      reasons: [
        { title: "Crypto payouts & multi-currency", detail: "Support Bitcoin and major cryptocurrencies for commissions and bonuses. Run fiat and crypto in one platform with e-wallets and multi-currency dashboards for distributors." },
        { title: "Compensation & genealogy integration", detail: "Same compensation engine and genealogy; add crypto as a payout option without changing plan logic. Balances and payouts stay in sync across your network." },
        { title: "Compliance & audit-ready reporting", detail: "Audit trails, KYC integration, and reporting for both fiat and crypto. Stay compliant across regions with configuration per jurisdiction." },
      ],
    },
    checklistSection: {
      badge: "Before you start",
      heading: "What to consider for Bitcoin & Cryptocurrency MLM",
      description: "Key areas we assess to deliver the right crypto-ready setup.",
      items: [
        "Your current compensation structure and payout preferences",
        "Regulatory and KYC requirements in your regions",
        "Preferred cryptocurrencies and wallet integrations",
        "Multi-currency and e-wallet requirements",
        "Reporting and audit needs for fiat and crypto",
      ],
    },
    offerSection: {
      badge: "Capabilities",
      heading: "Key capabilities of Bitcoin & Cryptocurrency MLM",
      description: "Crypto payouts, multi-currency, e-wallets, and compliance reporting.",
      items: [
        { title: "Crypto payouts", description: "Bitcoin and major cryptocurrencies for commissions and bonuses. Configurable per plan or region." },
        { title: "Multi-currency & e-wallets", description: "Fiat and crypto in one platform. E-wallets and dashboards for distributors with real-time balances." },
        { title: "Integration & compliance", description: "Compensation and genealogy stay in sync. Audit trails and reporting for fiat and crypto." },
        { title: "Reporting & analytics", description: "Audit trails and compliance-ready reporting. KYC integration where required." },
        { title: "Payment gateway integration", description: "Connect payment gateways and crypto processors for seamless payout flows." },
        { title: "Global multi-currency", description: "Support multiple fiat and crypto currencies for distributors across regions." },
      ],
    },
    processSection: {
      heading: "How we enable Bitcoin & Cryptocurrency MLM",
      description: "From configuration to go-live, we help you add crypto payouts and multi-currency support without changing your core compensation logic.",
      steps: [
        { number: "01", title: "Plan and configuration", description: "We configure crypto payout options and multi-currency settings to align with your compensation plan and regional requirements." },
        { number: "02", title: "Integration and testing", description: "Payment gateways, e-wallets, and reporting are integrated and tested for fiat and crypto flows." },
        { number: "03", title: "Compliance and go-live", description: "Audit trails, KYC, and reporting are validated. You go live with crypto and multi-currency support." },
      ],
    },
    trustSection: {
      heading: "Get Bitcoin & Cryptocurrency MLM Software",
      pointsTitle: "Why choose Cloud MLM",
      paragraphs: ["Cloud MLM Software is committed to providing crypto-ready MLM solutions. With Bitcoin and cryptocurrency integration, multi-currency support, and compliance-ready reporting, we ensure your business can offer modern payout options while staying audit-ready."],
      points: [
        "Crypto payouts and multi-currency in one platform.",
        "Compensation and genealogy integration unchanged.",
        "Compliance and audit-ready reporting for fiat and crypto.",
        "Ongoing support and configuration per region.",
      ],
    },
    cta: {
      heading: "Get Bitcoin & Cryptocurrency MLM Software",
      description: "Run your MLM with crypto payouts and multi-currency support. Request a demo and see how Cloud MLM can power your network.",
      buttonText: "Request a demo",
      secondaryButtonText: "View all services",
      trustIndicators: ["Crypto-ready", "Multi-currency", "Compliance support"],
    },
  },
  es: {
    hero: {
      badge: "Software MLM Bitcoin y Criptomonedas",
      title: "Software MLM Bitcoin y Criptomonedas",
      description: "Gestione su negocio MLM o de venta directa con pagos en cripto y soporte multimoneda. Cloud MLM Software ofrece integración de Bitcoin y criptomonedas para comisiones, monederos electrónicos e informes conformes.",
      primaryCta: "Solicitar una demo",
      secondaryCta: "Ver demo",
      highlights: [
        { title: "Pagos en cripto", description: "Bitcoin y las principales criptomonedas para comisiones y bonos. Integración con su plan de compensación y genealogía." },
        { title: "Multimoneda", description: "Fiat y cripto en una sola plataforma. Monederos electrónicos y paneles multimoneda para distribuidores." },
        { title: "Cumplimiento", description: "Trazas de auditoría, integración KYC e informes para fiat y cripto. Cumplimiento en todas las regiones." },
      ],
    },
    intro: {
      badge: "Por qué este servicio",
      heading: "Criptomonedas y MLM en una sola plataforma",
      paragraphs: [
        "El software MLM de Bitcoin y criptomonedas de Cloud MLM le ofrece pagos de comisiones, monederos electrónicos y soporte multimoneda en un solo sistema. Integre con sus planes de compensación y genealogía para que los distribuidores cobren en cripto o fiat.",
        "Construimos para el cumplimiento: trazas de auditoría, KYC e informes que funcionan con fiat y cripto. Escale su red con opciones de pago flexibles y paneles en tiempo real.",
        "La integración de Bitcoin y criptomonedas de Cloud MLM mantiene las reglas de compensación, genealogía y pagos sincronizados. Obtenga trazas de auditoría e informes listos para cumplimiento en transacciones fiat y cripto.",
      ],
      partnerCard: {
        badge: "Incluido",
        heading: "Funciones del MLM Bitcoin y Criptomonedas",
        subheading: "Pagos en cripto, multimoneda y cumplimiento en una sola plataforma.",
        points: [
          "Soporte de pagos en Bitcoin y principales criptomonedas",
          "Integración multimoneda y monedero electrónico",
          "Integración de compensación y genealogía",
          "Cumplimiento e informes listos para auditoría",
        ],
      },
    },
    introFeatures: [
      { title: "Pagos en cripto", description: "Soporte para Bitcoin y principales criptomonedas en comisiones y bonos. Fiat y cripto en una plataforma." },
      { title: "Monederos electrónicos y multimoneda", description: "Paneles multimoneda y monederos para que los distribuidores vean saldos y reciban pagos en cripto o fiat." },
      { title: "Informes y cumplimiento", description: "Trazas de auditoría e informes conformes para fiat y cripto. Integración KYC cuando se requiera." },
    ],
    whySection: {
      heading: "¿Por qué usar criptomonedas en software MLM?",
      description: "Distribuidores y miembros esperan cada vez más opciones de pago en Bitcoin y otras criptomonedas. Una plataforma MLM que soporte cripto junto con fiat le da un solo sistema para comisiones, monederos e informes.",
      reasons: [
        { title: "Pagos en cripto y multimoneda", detail: "Soporte para Bitcoin y principales criptomonedas en comisiones y bonos. Fiat y cripto en una plataforma con monederos y paneles multimoneda para distribuidores." },
        { title: "Integración de compensación y genealogía", detail: "Mismo motor de compensación y genealogía; añada cripto como opción de pago sin cambiar la lógica del plan. Saldos y pagos sincronizados en su red." },
        { title: "Cumplimiento e informes listos para auditoría", detail: "Trazas de auditoría, KYC e informes para fiat y cripto. Cumplimiento por región con configuración por jurisdicción." },
      ],
    },
    checklistSection: {
      badge: "Antes de empezar",
      heading: "Qué considerar para el MLM Bitcoin y Criptomonedas",
      description: "Áreas clave que evaluamos para ofrecer la configuración correcta con cripto.",
      items: [
        "Su estructura de compensación actual y preferencias de pago",
        "Requisitos regulatorios y KYC en sus regiones",
        "Criptomonedas y integraciones de monedero preferidas",
        "Requisitos multimoneda y monedero electrónico",
        "Necesidades de informes y auditoría para fiat y cripto",
      ],
    },
    offerSection: {
      badge: "Capacidades",
      heading: "Capacidades clave del MLM Bitcoin y Criptomonedas",
      description: "Pagos en cripto, multimoneda, monederos electrónicos e informes de cumplimiento.",
      items: [
        { title: "Pagos en cripto", description: "Bitcoin y principales criptomonedas para comisiones y bonos. Configurable por plan o región." },
        { title: "Multimoneda y monederos electrónicos", description: "Fiat y cripto en una plataforma. Monederos y paneles para distribuidores con saldos en tiempo real." },
        { title: "Integración y cumplimiento", description: "Compensación y genealogía sincronizadas. Trazas de auditoría e informes para fiat y cripto." },
        { title: "Informes y análisis", description: "Trazas de auditoría e informes conformes. Integración KYC cuando se requiera." },
        { title: "Integración de pasarela de pago", description: "Conecte pasarelas de pago y procesadores de cripto para flujos de pago fluidos." },
        { title: "Multimoneda global", description: "Soporte para múltiples monedas fiat y cripto para distribuidores en todas las regiones." },
      ],
    },
    processSection: {
      heading: "Cómo habilitamos el MLM Bitcoin y Criptomonedas",
      description: "Desde la configuración hasta la puesta en marcha, le ayudamos a añadir pagos en cripto y soporte multimoneda sin cambiar su lógica de compensación.",
      steps: [
        { number: "01", title: "Plan y configuración", description: "Configuramos opciones de pago en cripto y ajustes multimoneda para alinearlos con su plan de compensación y requisitos regionales." },
        { number: "02", title: "Integración y pruebas", description: "Pasarelas de pago, monederos electrónicos e informes se integran y prueban para flujos fiat y cripto." },
        { number: "03", title: "Cumplimiento y puesta en marcha", description: "Se validan trazas de auditoría, KYC e informes. Puesta en marcha con soporte cripto y multimoneda." },
      ],
    },
    trustSection: {
      heading: "Obtenga el Software MLM Bitcoin y Criptomonedas",
      pointsTitle: "Por qué elegir Cloud MLM",
      paragraphs: ["Cloud MLM Software está comprometido con soluciones MLM listas para cripto. Con integración de Bitcoin y criptomonedas, soporte multimoneda e informes conformes, su negocio puede ofrecer opciones de pago modernas manteniendo la auditoría."],
      points: [
        "Pagos en cripto y multimoneda en una plataforma.",
        "Integración de compensación y genealogía sin cambios.",
        "Cumplimiento e informes listos para auditoría para fiat y cripto.",
        "Soporte y configuración continua por región.",
      ],
    },
    cta: {
      heading: "Obtenga el Software MLM Bitcoin y Criptomonedas",
      description: "Gestione su MLM con pagos en cripto y soporte multimoneda. Solicite una demo y vea cómo Cloud MLM puede impulsar su red.",
      buttonText: "Solicitar una demo",
      secondaryButtonText: "Ver todos los servicios",
      trustIndicators: ["Listo para cripto", "Multimoneda", "Soporte de cumplimiento"],
    },
  },
  fr: {
    hero: {
      badge: "Logiciel MLM Bitcoin et cryptomonnaies",
      title: "Logiciel MLM Bitcoin et cryptomonnaies",
      description: "Pilotez votre activité MLM ou vente directe avec des paiements crypto et multi-devises. Cloud MLM Software prend en charge Bitcoin et les cryptomonnaies pour les commissions, e-portefeuilles et rapports conformes.",
      primaryCta: "Demander une démo",
      secondaryCta: "Voir la démo",
      highlights: [
        { title: "Paiements crypto", description: "Bitcoin et principales cryptomonnaies pour commissions et bonus. Intégration avec votre plan de rémunération et généalogie." },
        { title: "Multi-devises", description: "Fiat et crypto sur une seule plateforme. E-portefeuilles et tableaux de bord multi-devises pour les distributeurs." },
        { title: "Conformité", description: "Traces d'audit, intégration KYC et rapports pour fiat et crypto. Conformité dans toutes les régions." },
      ],
    },
    intro: {
      badge: "Pourquoi ce service",
      heading: "Cryptomonnaies et MLM sur une seule plateforme",
      paragraphs: [
        "Le logiciel MLM Bitcoin et cryptomonnaies de Cloud MLM vous offre paiements de commissions, e-portefeuilles et multi-devises dans un seul système. Intégrez avec vos plans de rémunération et généalogie pour que les distributeurs perçoivent en crypto ou fiat.",
        "Nous construisons pour la conformité : traces d'audit, KYC et rapports pour fiat et crypto. Développez votre réseau avec des options de paiement flexibles et tableaux de bord en temps réel.",
        "L'intégration Bitcoin et cryptomonnaies de Cloud MLM garde les règles de rémunération, la généalogie et les paiements synchronisés. Traces d'audit et rapports conformes pour les transactions fiat et crypto.",
      ],
      partnerCard: {
        badge: "Inclus",
        heading: "Fonctionnalités du MLM Bitcoin et cryptomonnaies",
        subheading: "Paiements crypto, multi-devises et conformité sur une plateforme.",
        points: [
          "Prise en charge des paiements Bitcoin et principales cryptomonnaies",
          "Intégration multi-devises et e-portefeuille",
          "Intégration rémunération et généalogie",
          "Conformité et rapports prêts pour l'audit",
        ],
      },
    },
    introFeatures: [
      { title: "Paiements crypto", description: "Prise en charge de Bitcoin et principales cryptomonnaies pour commissions et bonus. Fiat et crypto sur une plateforme." },
      { title: "E-portefeuilles et multi-devises", description: "Tableaux de bord multi-devises et e-portefeuilles pour que les distributeurs voient les soldes et perçoivent en crypto ou fiat." },
      { title: "Rapports et conformité", description: "Traces d'audit et rapports conformes pour fiat et crypto. Intégration KYC si nécessaire." },
    ],
    whySection: {
      heading: "Pourquoi utiliser les cryptomonnaies dans un logiciel MLM ?",
      description: "Les distributeurs et membres attendent de plus en plus des options de paiement en Bitcoin et autres cryptomonnaies. Une plateforme MLM qui supporte la crypto avec le fiat offre un seul système pour commissions, e-portefeuilles et rapports.",
      reasons: [
        { title: "Paiements crypto et multi-devises", detail: "Prise en charge de Bitcoin et principales cryptomonnaies pour commissions et bonus. Fiat et crypto sur une plateforme avec e-portefeuilles et tableaux multi-devises pour les distributeurs." },
        { title: "Intégration rémunération et généalogie", detail: "Même moteur de rémunération et généalogie ; ajoutez la crypto comme option de paiement sans changer la logique du plan. Soldes et paiements synchronisés sur votre réseau." },
        { title: "Conformité et rapports d'audit", detail: "Traces d'audit, KYC et rapports pour fiat et crypto. Conformité par région avec configuration par juridiction." },
      ],
    },
    checklistSection: {
      badge: "Avant de commencer",
      heading: "À considérer pour le MLM Bitcoin et cryptomonnaies",
      description: "Domaines clés que nous évaluons pour une configuration crypto adaptée.",
      items: [
        "Votre structure de rémunération et préférences de paiement",
        "Exigences réglementaires et KYC dans vos régions",
        "Cryptomonnaies et intégrations portefeuille préférées",
        "Besoins multi-devises et e-portefeuille",
        "Besoins en rapports et audit pour fiat et crypto",
      ],
    },
    offerSection: {
      badge: "Capacités",
      heading: "Capacités clés du MLM Bitcoin et cryptomonnaies",
      description: "Paiements crypto, multi-devises, e-portefeuilles et rapports de conformité.",
      items: [
        { title: "Paiements crypto", description: "Bitcoin et principales cryptomonnaies pour commissions et bonus. Configurable par plan ou région." },
        { title: "Multi-devises et e-portefeuilles", description: "Fiat et crypto sur une plateforme. E-portefeuilles et tableaux pour distributeurs avec soldes en temps réel." },
        { title: "Intégration et conformité", description: "Rémunération et généalogie synchronisées. Traces d'audit et rapports pour fiat et crypto." },
        { title: "Rapports et analyses", description: "Traces d'audit et rapports conformes. Intégration KYC si nécessaire." },
        { title: "Intégration passerelle de paiement", description: "Connectez passerelles et processeurs crypto pour des flux de paiement fluides." },
        { title: "Multi-devises global", description: "Prise en charge de plusieurs devises fiat et crypto pour les distributeurs dans toutes les régions." },
      ],
    },
    processSection: {
      heading: "Comment nous activons le MLM Bitcoin et cryptomonnaies",
      description: "De la configuration à la mise en production, nous vous aidons à ajouter paiements crypto et multi-devises sans changer votre logique de rémunération.",
      steps: [
        { number: "01", title: "Plan et configuration", description: "Nous configurons les options de paiement crypto et paramètres multi-devises pour aligner avec votre plan de rémunération et exigences régionales." },
        { number: "02", title: "Intégration et tests", description: "Passerelles de paiement, e-portefeuilles et rapports sont intégrés et testés pour les flux fiat et crypto." },
        { number: "03", title: "Conformité et mise en production", description: "Traces d'audit, KYC et rapports validés. Mise en production avec support crypto et multi-devises." },
      ],
    },
    trustSection: {
      heading: "Obtenez le logiciel MLM Bitcoin et cryptomonnaies",
      pointsTitle: "Pourquoi choisir Cloud MLM",
      paragraphs: ["Cloud MLM Software s'engage à fournir des solutions MLM prêtes pour la crypto. Avec l'intégration Bitcoin et cryptomonnaies, le multi-devises et les rapports conformes, votre entreprise peut offrir des options de paiement modernes tout en restant auditable."],
      points: [
        "Paiements crypto et multi-devises sur une plateforme.",
        "Intégration rémunération et généalogie inchangée.",
        "Conformité et rapports d'audit pour fiat et crypto.",
        "Support et configuration continues par région.",
      ],
    },
    cta: {
      heading: "Obtenez le logiciel MLM Bitcoin et cryptomonnaies",
      description: "Pilotez votre MLM avec paiements crypto et multi-devises. Demandez une démo et découvrez comment Cloud MLM peut renforcer votre réseau.",
      buttonText: "Demander une démo",
      secondaryButtonText: "Voir tous les services",
      trustIndicators: ["Prêt pour la crypto", "Multi-devises", "Support conformité"],
    },
  },
  it: {
    hero: {
      badge: "Software MLM Bitcoin e criptovalute",
      title: "Software MLM Bitcoin e criptovalute",
      description: "Gestisci la tua attività MLM o vendita diretta con pagamenti in cripto e supporto multivaluta. Cloud MLM Software supporta Bitcoin e criptovalute per commissioni, e-wallet e report conformi.",
      primaryCta: "Richiedi una demo",
      secondaryCta: "Vedi demo",
      highlights: [
        { title: "Pagamenti cripto", description: "Bitcoin e principali criptovalute per commissioni e bonus. Integrazione con piano di compensazione e genealogia." },
        { title: "Multivaluta", description: "Fiat e cripto in una piattaforma. E-wallet e dashboard multivaluta per i distributori." },
        { title: "Conformità", description: "Tracce di audit, integrazione KYC e report per fiat e cripto. Conformità in tutte le regioni." },
      ],
    },
    intro: {
      badge: "Perché questo servizio",
      heading: "Criptovalute e MLM in una piattaforma",
      paragraphs: [
        "Il software MLM Bitcoin e criptovalute di Cloud MLM offre pagamenti commissioni, e-wallet e supporto multivaluta in un unico sistema. Integra con i tuoi piani di compensazione e genealogia così i distributori possono incassare in cripto o fiat.",
        "Costruiamo per la conformità: tracce di audit, KYC e report per fiat e cripto. Scala la rete con opzioni di pagamento flessibili e dashboard in tempo reale.",
        "L'integrazione Bitcoin e criptovalute di Cloud MLM mantiene regole di compensazione, genealogia e pagamenti sincronizzati. Tracce di audit e report conformi per transazioni fiat e cripto.",
      ],
      partnerCard: {
        badge: "Incluso",
        heading: "Funzionalità del MLM Bitcoin e criptovalute",
        subheading: "Pagamenti cripto, multivaluta e conformità in una piattaforma.",
        points: [
          "Supporto pagamenti Bitcoin e principali criptovalute",
          "Integrazione multivaluta e e-wallet",
          "Integrazione compensazione e genealogia",
          "Conformità e report pronti per l'audit",
        ],
      },
    },
    introFeatures: [
      { title: "Pagamenti cripto", description: "Supporto Bitcoin e principali criptovalute per commissioni e bonus. Fiat e cripto in una piattaforma." },
      { title: "E-wallet e multivaluta", description: "Dashboard multivaluta e e-wallet per i distributori per vedere saldi e ricevere pagamenti in cripto o fiat." },
      { title: "Report e conformità", description: "Tracce di audit e report conformi per fiat e cripto. Integrazione KYC dove richiesto." },
    ],
    whySection: {
      heading: "Perché usare le criptovalute nel software MLM?",
      description: "I distributori e i membri si aspettano sempre più opzioni di pagamento in Bitcoin e altre criptovalute. Una piattaforma MLM che supporta cripto insieme al fiat offre un unico sistema per commissioni, e-wallet e report.",
      reasons: [
        { title: "Pagamenti cripto e multivaluta", detail: "Supporto Bitcoin e principali criptovalute per commissioni e bonus. Fiat e cripto in una piattaforma con e-wallet e dashboard multivaluta per i distributori." },
        { title: "Integrazione compensazione e genealogia", detail: "Stesso motore di compensazione e genealogia; aggiungi la cripto come opzione di pagamento senza cambiare la logica del piano. Saldi e pagamenti sincronizzati sulla tua rete." },
        { title: "Conformità e report di audit", detail: "Tracce di audit, KYC e report per fiat e cripto. Conformità per regione con configurazione per giurisdizione." },
      ],
    },
    checklistSection: {
      badge: "Prima di iniziare",
      heading: "Cosa considerare per il MLM Bitcoin e criptovalute",
      description: "Aree chiave che valutiamo per la giusta configurazione crypto.",
      items: [
        "La tua struttura di compensazione e preferenze di pagamento",
        "Requisiti normativi e KYC nelle tue regioni",
        "Criptovalute e integrazioni wallet preferite",
        "Requisiti multivaluta e e-wallet",
        "Esigenze di report e audit per fiat e cripto",
      ],
    },
    offerSection: {
      badge: "Capacità",
      heading: "Capacità chiave del MLM Bitcoin e criptovalute",
      description: "Pagamenti cripto, multivaluta, e-wallet e report di conformità.",
      items: [
        { title: "Pagamenti cripto", description: "Bitcoin e principali criptovalute per commissioni e bonus. Configurabile per piano o regione." },
        { title: "Multivaluta e e-wallet", description: "Fiat e cripto in una piattaforma. E-wallet e dashboard per distributori con saldi in tempo reale." },
        { title: "Integrazione e conformità", description: "Compensazione e genealogia sincronizzate. Tracce di audit e report per fiat e cripto." },
        { title: "Report e analisi", description: "Tracce di audit e report conformi. Integrazione KYC dove richiesto." },
        { title: "Integrazione gateway di pagamento", description: "Collega gateway di pagamento e processori cripto per flussi di pagamento fluidi." },
        { title: "Multivaluta globale", description: "Supporto per più valute fiat e cripto per i distributori in tutte le regioni." },
      ],
    },
    processSection: {
      heading: "Come abilitiamo il MLM Bitcoin e criptovalute",
      description: "Dalla configurazione al go-live, ti aiutiamo ad aggiungere pagamenti cripto e supporto multivaluta senza cambiare la logica di compensazione.",
      steps: [
        { number: "01", title: "Piano e configurazione", description: "Configuriamo le opzioni di pagamento cripto e le impostazioni multivaluta per allineare con il tuo piano di compensazione e requisiti regionali." },
        { number: "02", title: "Integrazione e test", description: "Gateway di pagamento, e-wallet e report sono integrati e testati per i flussi fiat e cripto." },
        { number: "03", title: "Conformità e go-live", description: "Tracce di audit, KYC e report convalidati. Go-live con supporto cripto e multivaluta." },
      ],
    },
    trustSection: {
      heading: "Ottieni il software MLM Bitcoin e criptovalute",
      pointsTitle: "Perché scegliere Cloud MLM",
      paragraphs: ["Cloud MLM Software è impegnato a fornire soluzioni MLM pronte per la cripto. Con integrazione Bitcoin e criptovalute, multivaluta e report conformi, la tua azienda può offrire opzioni di pagamento moderne restando auditable."],
      points: [
        "Pagamenti cripto e multivaluta in una piattaforma.",
        "Integrazione compensazione e genealogia invariata.",
        "Conformità e report di audit per fiat e cripto.",
        "Supporto e configurazione continui per regione.",
      ],
    },
    cta: {
      heading: "Ottieni il software MLM Bitcoin e criptovalute",
      description: "Gestisci il tuo MLM con pagamenti cripto e supporto multivaluta. Richiedi una demo e scopri come Cloud MLM può potenziare la tua rete.",
      buttonText: "Richiedi una demo",
      secondaryButtonText: "Vedi tutti i servizi",
      trustIndicators: ["Pronto per cripto", "Multivaluta", "Supporto conformità"],
    },
  },
  de: {
    hero: {
      badge: "Bitcoin- und Kryptowährungs-MLM-Software",
      title: "Bitcoin- und Kryptowährungs-MLM-Software",
      description: "Führen Sie Ihr MLM- oder Direktvertriebsgeschäft mit Krypto-Auszahlungen und Mehrwährungsunterstützung. Cloud MLM Software unterstützt Bitcoin und Kryptowährungen für Provisionen, E-Wallets und konforme Berichterstattung.",
      primaryCta: "Demo anfordern",
      secondaryCta: "Demo ansehen",
      highlights: [
        { title: "Krypto-Auszahlungen", description: "Bitcoin und wichtige Kryptowährungen für Provisionen und Boni. Integration mit Ihrem Vergütungsplan und Genealogie." },
        { title: "Mehrwährung", description: "Fiat und Krypto in einer Plattform. E-Wallets und Mehrwährungs-Dashboards für Vertriebspartner." },
        { title: "Compliance", description: "Prüfpfade, KYC-Integration und Berichte für Fiat und Krypto. Compliance in allen Regionen." },
      ],
    },
    intro: {
      badge: "Warum dieser Service",
      heading: "Kryptowährung und MLM auf einer Plattform",
      paragraphs: [
        "Die Bitcoin- und Kryptowährungs-MLM-Software von Cloud MLM bietet Provisionsauszahlungen, E-Wallets und Mehrwährungsunterstützung in einem System. Integrieren Sie mit Ihren Vergütungsplänen und Genealogie, damit Vertriebspartner in Krypto oder Fiat ausbezahlt werden.",
        "Wir bauen für Compliance: Prüfpfade, KYC und Berichte für Fiat und Krypto. Skalieren Sie Ihr Netzwerk mit flexiblen Auszahlungsoptionen und Echtzeit-Dashboards.",
        "Cloud MLMs Bitcoin- und Kryptowährungs-Integration hält Vergütungsregeln, Genealogie und Auszahlungen synchron. Prüfpfade und auditfähige Berichte für Fiat- und Krypto-Transaktionen.",
      ],
      partnerCard: {
        badge: "Inklusive",
        heading: "Funktionen der Bitcoin- und Kryptowährungs-MLM",
        subheading: "Krypto-Auszahlungen, Mehrwährung und Compliance auf einer Plattform.",
        points: [
          "Unterstützung für Bitcoin- und Kryptowährungs-Auszahlungen",
          "Mehrwährungs- und E-Wallet-Integration",
          "Vergütungs- und Genealogie-Integration",
          "Compliance und auditfähige Berichte",
        ],
      },
    },
    introFeatures: [
      { title: "Krypto-Auszahlungen", description: "Unterstützung für Bitcoin und wichtige Kryptowährungen für Provisionen und Boni. Fiat und Krypto in einer Plattform." },
      { title: "E-Wallets und Mehrwährung", description: "Mehrwährungs-Dashboards und E-Wallets, damit Vertriebspartner Kontostände sehen und in Krypto oder Fiat ausbezahlt werden." },
      { title: "Berichte und Compliance", description: "Prüfpfade und konforme Berichte für Fiat und Krypto. KYC-Integration wo erforderlich." },
    ],
    whySection: {
      heading: "Warum Kryptowährung in MLM-Software nutzen?",
      description: "Vertriebspartner und Mitglieder erwarten zunehmend Auszahlungsoptionen in Bitcoin und anderen Kryptowährungen. Eine MLM-Plattform, die Krypto neben Fiat unterstützt, bietet ein System für Provisionen, E-Wallets und Berichte.",
      reasons: [
        { title: "Krypto-Auszahlungen und Mehrwährung", detail: "Unterstützung für Bitcoin und wichtige Kryptowährungen für Provisionen und Boni. Fiat und Krypto in einer Plattform mit E-Wallets und Mehrwährungs-Dashboards für Vertriebspartner." },
        { title: "Vergütungs- und Genealogie-Integration", detail: "Gleicher Vergütungsmotor und Genealogie; Krypto als Auszahlungsoption ohne Änderung der Planlogik. Kontostände und Auszahlungen in Ihrem Netzwerk synchron." },
        { title: "Compliance und auditfähige Berichte", detail: "Prüfpfade, KYC und Berichte für Fiat und Krypto. Compliance pro Region mit Konfiguration pro Rechtsraum." },
      ],
    },
    checklistSection: {
      badge: "Bevor Sie starten",
      heading: "Was bei Bitcoin- und Kryptowährungs-MLM zu beachten ist",
      description: "Bereiche, die wir prüfen, um die richtige Krypto-Konfiguration zu liefern.",
      items: [
        "Ihre aktuelle Vergütungsstruktur und Auszahlungspräferenzen",
        "Regulatorische und KYC-Anforderungen in Ihren Regionen",
        "Bevorzugte Kryptowährungen und Wallet-Integrationen",
        "Mehrwährungs- und E-Wallet-Anforderungen",
        "Berichts- und Audit-Bedarf für Fiat und Krypto",
      ],
    },
    offerSection: {
      badge: "Funktionen",
      heading: "Kernfunktionen der Bitcoin- und Kryptowährungs-MLM",
      description: "Krypto-Auszahlungen, Mehrwährung, E-Wallets und Compliance-Berichte.",
      items: [
        { title: "Krypto-Auszahlungen", description: "Bitcoin und wichtige Kryptowährungen für Provisionen und Boni. Konfigurierbar pro Plan oder Region." },
        { title: "Mehrwährung und E-Wallets", description: "Fiat und Krypto in einer Plattform. E-Wallets und Dashboards für Vertriebspartner mit Echtzeit-Kontoständen." },
        { title: "Integration und Compliance", description: "Vergütung und Genealogie synchron. Prüfpfade und Berichte für Fiat und Krypto." },
        { title: "Berichte und Analysen", description: "Prüfpfade und konforme Berichte. KYC-Integration wo erforderlich." },
        { title: "Zahlungsgateway-Integration", description: "Verbinden Sie Zahlungsgateways und Krypto-Prozessoren für nahtlose Auszahlungsabläufe." },
        { title: "Globale Mehrwährung", description: "Unterstützung mehrerer Fiat- und Kryptowährungen für Vertriebspartner in allen Regionen." },
      ],
    },
    processSection: {
      heading: "Wie wir Bitcoin- und Kryptowährungs-MLM ermöglichen",
      description: "Von der Konfiguration bis zum Go-Live helfen wir Ihnen, Krypto-Auszahlungen und Mehrwährungsunterstützung hinzuzufügen, ohne Ihre Vergütungslogik zu ändern.",
      steps: [
        { number: "01", title: "Plan und Konfiguration", description: "Wir konfigurieren Krypto-Auszahlungsoptionen und Mehrwährungseinstellungen für Ihren Vergütungsplan und regionale Anforderungen." },
        { number: "02", title: "Integration und Tests", description: "Zahlungsgateways, E-Wallets und Berichte werden für Fiat- und Krypto-Flows integriert und getestet." },
        { number: "03", title: "Compliance und Go-Live", description: "Prüfpfade, KYC und Berichte validiert. Go-Live mit Krypto- und Mehrwährungsunterstützung." },
      ],
    },
    trustSection: {
      heading: "Bitcoin- und Kryptowährungs-MLM-Software erhalten",
      pointsTitle: "Warum Cloud MLM wählen",
      paragraphs: ["Cloud MLM Software verpflichtet sich zu kryptofähigen MLM-Lösungen. Mit Bitcoin- und Kryptowährungs-Integration, Mehrwährungsunterstützung und konformen Berichten kann Ihr Unternehmen moderne Auszahlungsoptionen anbieten und dabei auditfähig bleiben."],
      points: [
        "Krypto-Auszahlungen und Mehrwährung in einer Plattform.",
        "Vergütungs- und Genealogie-Integration unverändert.",
        "Compliance und auditfähige Berichte für Fiat und Krypto.",
        "Laufender Support und Konfiguration pro Region.",
      ],
    },
    cta: {
      heading: "Bitcoin- und Kryptowährungs-MLM-Software erhalten",
      description: "Führen Sie Ihr MLM mit Krypto-Auszahlungen und Mehrwährungsunterstützung. Fordern Sie eine Demo an und erfahren Sie, wie Cloud MLM Ihr Netzwerk antreiben kann.",
      buttonText: "Demo anfordern",
      secondaryButtonText: "Alle Dienste anzeigen",
      trustIndicators: ["Kryptofähig", "Mehrwährung", "Compliance-Support"],
    },
  },
  pt: {
    hero: {
      badge: "Software MLM Bitcoin e criptomoedas",
      title: "Software MLM Bitcoin e criptomoedas",
      description: "Gerencie seu negócio MLM ou vendas diretas com pagamentos em cripto e suporte multimoeda. Cloud MLM Software suporta Bitcoin e criptomoedas para comissões, carteiras eletrónicas e relatórios conformes.",
      primaryCta: "Solicitar uma demo",
      secondaryCta: "Ver demo",
      highlights: [
        { title: "Pagamentos cripto", description: "Bitcoin e principais criptomoedas para comissões e bónus. Integração com seu plano de compensação e genealogia." },
        { title: "Multimoeda", description: "Fiat e cripto numa única plataforma. Carteiras eletrónicas e painéis multimoeda para distribuidores." },
        { title: "Conformidade", description: "Rastros de auditoria, integração KYC e relatórios para fiat e cripto. Conformidade em todas as regiões." },
      ],
    },
    intro: {
      badge: "Por que este serviço",
      heading: "Criptomoedas e MLM numa plataforma",
      paragraphs: [
        "O software MLM Bitcoin e criptomoedas da Cloud MLM oferece pagamentos de comissões, carteiras eletrónicas e suporte multimoeda num único sistema. Integre com seus planos de compensação e genealogia para que os distribuidores recebam em cripto ou fiat.",
        "Construímos para conformidade: rastros de auditoria, KYC e relatórios para fiat e cripto. Escale sua rede com opções de pagamento flexíveis e painéis em tempo real.",
        "A integração Bitcoin e criptomoedas da Cloud MLM mantém regras de compensação, genealogia e pagamentos sincronizados. Rastros de auditoria e relatórios conformes para transações fiat e cripto.",
      ],
      partnerCard: {
        badge: "Incluído",
        heading: "Funcionalidades do MLM Bitcoin e criptomoedas",
        subheading: "Pagamentos cripto, multimoeda e conformidade numa plataforma.",
        points: [
          "Suporte a pagamentos em Bitcoin e principais criptomoedas",
          "Integração multimoeda e carteira eletrónica",
          "Integração de compensação e genealogia",
          "Conformidade e relatórios prontos para auditoria",
        ],
      },
    },
    introFeatures: [
      { title: "Pagamentos cripto", description: "Suporte a Bitcoin e principais criptomoedas para comissões e bónus. Fiat e cripto numa plataforma." },
      { title: "Carteiras eletrónicas e multimoeda", description: "Painéis multimoeda e carteiras para distribuidores verem saldos e receberem em cripto ou fiat." },
      { title: "Relatórios e conformidade", description: "Rastros de auditoria e relatórios conformes para fiat e cripto. Integração KYC quando necessário." },
    ],
    whySection: {
      heading: "Por que usar criptomoedas em software MLM?",
      description: "Distribuidores e membros esperam cada vez mais opções de pagamento em Bitcoin e outras criptomoedas. Uma plataforma MLM que suporta cripto com fiat oferece um sistema único para comissões, carteiras e relatórios.",
      reasons: [
        { title: "Pagamentos cripto e multimoeda", detail: "Suporte a Bitcoin e principais criptomoedas para comissões e bónus. Fiat e cripto numa plataforma com carteiras e painéis multimoeda para distribuidores." },
        { title: "Integração de compensação e genealogia", detail: "Mesmo motor de compensação e genealogia; adicione cripto como opção de pagamento sem alterar a lógica do plano. Saldos e pagamentos sincronizados na sua rede." },
        { title: "Conformidade e relatórios de auditoria", detail: "Rastros de auditoria, KYC e relatórios para fiat e cripto. Conformidade por região com configuração por jurisdição." },
      ],
    },
    checklistSection: {
      badge: "Antes de começar",
      heading: "O que considerar para o MLM Bitcoin e criptomoedas",
      description: "Áreas que avaliamos para a configuração certa com cripto.",
      items: [
        "Sua estrutura de compensação e preferências de pagamento",
        "Requisitos regulatórios e KYC nas suas regiões",
        "Criptomoedas e integrações de carteira preferidas",
        "Requisitos multimoeda e carteira eletrónica",
        "Necessidades de relatórios e auditoria para fiat e cripto",
      ],
    },
    offerSection: {
      badge: "Capacidades",
      heading: "Capacidades do MLM Bitcoin e criptomoedas",
      description: "Pagamentos cripto, multimoeda, carteiras eletrónicas e relatórios de conformidade.",
      items: [
        { title: "Pagamentos cripto", description: "Bitcoin e principais criptomoedas para comissões e bónus. Configurável por plano ou região." },
        { title: "Multimoeda e carteiras eletrónicas", description: "Fiat e cripto numa plataforma. Carteiras e painéis para distribuidores com saldos em tempo real." },
        { title: "Integração e conformidade", description: "Compensação e genealogia sincronizadas. Rastros de auditoria e relatórios para fiat e cripto." },
        { title: "Relatórios e análise", description: "Rastros de auditoria e relatórios conformes. Integração KYC quando necessário." },
        { title: "Integração de gateway de pagamento", description: "Conecte gateways de pagamento e processadores de cripto para fluxos de pagamento fluidos." },
        { title: "Multimoeda global", description: "Suporte a várias moedas fiat e cripto para distribuidores em todas as regiões." },
      ],
    },
    processSection: {
      heading: "Como ativamos o MLM Bitcoin e criptomoedas",
      description: "Da configuração ao go-live, ajudamos a adicionar pagamentos cripto e suporte multimoeda sem alterar a lógica de compensação.",
      steps: [
        { number: "01", title: "Plano e configuração", description: "Configuramos opções de pagamento cripto e definições multimoeda para alinhar com seu plano de compensação e requisitos regionais." },
        { number: "02", title: "Integração e testes", description: "Gateways de pagamento, carteiras e relatórios são integrados e testados para fluxos fiat e cripto." },
        { number: "03", title: "Conformidade e go-live", description: "Rastros de auditoria, KYC e relatórios validados. Go-live com suporte cripto e multimoeda." },
      ],
    },
    trustSection: {
      heading: "Obtenha o software MLM Bitcoin e criptomoedas",
      pointsTitle: "Por que escolher Cloud MLM",
      paragraphs: ["A Cloud MLM Software está comprometida em fornecer soluções MLM prontas para cripto. Com integração Bitcoin e criptomoedas, multimoeda e relatórios conformes, sua empresa pode oferecer opções de pagamento modernas mantendo-se auditável."],
      points: [
        "Pagamentos cripto e multimoeda numa plataforma.",
        "Integração de compensação e genealogia inalterada.",
        "Conformidade e relatórios de auditoria para fiat e cripto.",
        "Suporte e configuração contínuos por região.",
      ],
    },
    cta: {
      heading: "Obtenha o software MLM Bitcoin e criptomoedas",
      description: "Gerencie seu MLM com pagamentos cripto e suporte multimoeda. Solicite uma demo e veja como a Cloud MLM pode impulsionar sua rede.",
      buttonText: "Solicitar uma demo",
      secondaryButtonText: "Ver todos os serviços",
      trustIndicators: ["Pronto para cripto", "Multimoeda", "Suporte à conformidade"],
    },
  },
  zh: {
    hero: {
      badge: "比特币与加密货币 MLM 软件",
      title: "比特币与加密货币 MLM 软件",
      description: "通过加密货币支付和多币种支持运营您的 MLM 或直销业务。Cloud MLM Software 支持比特币和加密货币集成，用于佣金、电子钱包和合规报告。",
      primaryCta: "申请演示",
      secondaryCta: "查看演示",
      highlights: [
        { title: "加密货币支付", description: "比特币和主要加密货币用于佣金和奖金。与您的薪酬计划和 genealogy 集成。" },
        { title: "多币种", description: "法币和加密货币在一个平台上。面向经销商的电子钱包和多币种仪表板。" },
        { title: "合规", description: "审计追踪、KYC 集成以及法币和加密货币的报告。跨地区合规。" },
      ],
    },
    intro: {
      badge: "为何选择此服务",
      heading: "加密货币与 MLM 一体化平台",
      paragraphs: [
        "Cloud MLM 的比特币与加密货币 MLM 软件在一个系统中提供佣金支付、电子钱包和多币种支持。与您现有的薪酬计划和 genealogy 集成，让经销商以加密货币或法币获得支付。",
        "我们为合规而建：审计追踪、KYC 集成以及适用于法币和加密货币的报告。通过灵活的支付选项和实时仪表板扩展您的网络。",
        "Cloud MLM 的比特币与加密货币集成保持薪酬规则、genealogy 和支付同步。您可获得法币和加密货币交易的审计追踪和合规就绪报告。",
      ],
      partnerCard: {
        badge: "包含",
        heading: "比特币与加密货币 MLM 功能",
        subheading: "加密货币支付、多币种与合规一体化平台。",
        points: [
          "比特币及主要加密货币支付支持",
          "多币种与电子钱包集成",
          "薪酬与 genealogy 集成",
          "合规与审计就绪报告",
        ],
      },
    },
    introFeatures: [
      { title: "加密货币支付", description: "支持比特币和主要加密货币用于佣金和奖金。法币和加密货币在一个平台上。" },
      { title: "电子钱包与多币种", description: "多币种仪表板和电子钱包，让经销商查看余额并以加密货币或法币收款。" },
      { title: "报告与合规", description: "法币和加密货币的审计追踪与合规报告。按需 KYC 集成。" },
    ],
    whySection: {
      heading: "为何在 MLM 软件中使用加密货币？",
      description: "经销商和成员越来越期望比特币和其他加密货币的支付选项。支持加密货币与法币的 MLM 平台可为您提供统一的佣金、电子钱包和报告系统。",
      reasons: [
        { title: "加密货币支付与多币种", detail: "支持比特币和主要加密货币用于佣金和奖金。法币和加密货币在一个平台上，为经销商提供电子钱包和多币种仪表板。" },
        { title: "薪酬与 genealogy 集成", detail: "相同的薪酬引擎和 genealogy；在不改变计划逻辑的情况下将加密货币作为支付选项。余额和支付在整个网络中保持同步。" },
        { title: "合规与审计就绪报告", detail: "法币和加密货币的审计追踪、KYC 集成和报告。按地区配置实现跨地区合规。" },
      ],
    },
    checklistSection: {
      badge: "开始之前",
      heading: "比特币与加密货币 MLM 需考虑事项",
      description: "我们评估以提供正确加密货币配置的关键领域。",
      items: [
        "您当前的薪酬结构和支付偏好",
        "您所在地区的监管和 KYC 要求",
        "首选加密货币和钱包集成",
        "多币种和电子钱包要求",
        "法币和加密货币的报告与审计需求",
      ],
    },
    offerSection: {
      badge: "能力",
      heading: "比特币与加密货币 MLM 核心能力",
      description: "加密货币支付、多币种、电子钱包与合规报告。",
      items: [
        { title: "加密货币支付", description: "比特币和主要加密货币用于佣金和奖金。可按计划或地区配置。" },
        { title: "多币种与电子钱包", description: "法币和加密货币在一个平台上。面向经销商的电子钱包和实时余额仪表板。" },
        { title: "集成与合规", description: "薪酬与 genealogy 保持同步。法币和加密货币的审计追踪与报告。" },
        { title: "报告与分析", description: "审计追踪与合规报告。按需 KYC 集成。" },
        { title: "支付网关集成", description: "连接支付网关和加密货币处理器，实现无缝支付流程。" },
        { title: "全球多币种", description: "支持多种法币和加密货币，面向各地区经销商。" },
      ],
    },
    processSection: {
      heading: "我们如何实现比特币与加密货币 MLM",
      description: "从配置到上线，我们帮助您在不改变核心薪酬逻辑的情况下添加加密货币支付和多币种支持。",
      steps: [
        { number: "01", title: "计划与配置", description: "我们配置加密货币支付选项和多币种设置，以符合您的薪酬计划和地区要求。" },
        { number: "02", title: "集成与测试", description: "支付网关、电子钱包和报告针对法币和加密货币流程进行集成和测试。" },
        { number: "03", title: "合规与上线", description: "审计追踪、KYC 和报告经验证。随加密货币和多币种支持上线。" },
      ],
    },
    trustSection: {
      heading: "获取比特币与加密货币 MLM 软件",
      pointsTitle: "为何选择 Cloud MLM",
      paragraphs: ["Cloud MLM Software 致力于提供加密货币就绪的 MLM 解决方案。通过比特币与加密货币集成、多币种支持和合规报告，确保您的企业能够提供现代支付选项并保持可审计性。"],
      points: [
        "一个平台上的加密货币支付与多币种。",
        "薪酬与 genealogy 集成不变。",
        "法币和加密货币的合规与审计就绪报告。",
        "按地区持续支持与配置。",
      ],
    },
    cta: {
      heading: "获取比特币与加密货币 MLM 软件",
      description: "通过加密货币支付和多币种支持运营您的 MLM。申请演示，了解 Cloud MLM 如何为您的网络提供支持。",
      buttonText: "申请演示",
      secondaryButtonText: "查看所有服务",
      trustIndicators: ["加密货币就绪", "多币种", "合规支持"],
    },
  },
};

function buildContent(t: (typeof TEXTS)["en"], locale: string): ConsultingPageContent {
  const icons = ICONS;
  return {
    hero: {
      ...t.hero,
      highlights: t.hero.highlights.map((h, i) => ({ ...h, icon: [icons.CircleDollarSign, icons.Wallet, icons.ShieldCheck][i] })),
    },
    intro: t.intro,
    introFeatures: t.introFeatures.map((f, i) => ({ ...f, icon: [icons.CircleDollarSign, icons.Wallet, icons.LineChart][i] })),
    whySection: {
      ...t.whySection,
      reasons: t.whySection.reasons.map((r, i) => ({ ...r, icon: [icons.CircleDollarSign, icons.Wallet, icons.ShieldCheck][i] })),
    },
    checklistSection: t.checklistSection,
    offerSection: {
      ...t.offerSection,
      items: t.offerSection.items.map((item, i) => ({
        ...item,
        icon: [icons.CircleDollarSign, icons.Wallet, icons.ShieldCheck, icons.BarChart3, icons.Plug, icons.Compass][i],
      })),
    },
    processSection: {
      ...t.processSection,
      steps: t.processSection.steps.map((s, i) => ({ ...s, icon: [icons.CircleDollarSign, icons.Wallet, icons.ShieldCheck][i] })),
    },
    trustSection: t.trustSection,
    cta: t.cta,
  };
}

const contentCache = new Map<string, ConsultingPageContent>();

export function getBitcoinCryptocurrencyConsultingContent(locale: Locale): ConsultingPageContent {
  const key = locale || "en";
  if (contentCache.has(key)) return contentCache.get(key)!;
  const t = TEXTS[key] || TEXTS.en;
  const content = buildContent(t, key);
  contentCache.set(key, content);
  return content;
}

/** @deprecated Use getBitcoinCryptocurrencyConsultingContent(locale) for localized content. */
export const bitcoinCryptocurrencyConsultingContent: ConsultingPageContent = (() => {
  return buildContent(TEXTS.en, "en");
})();
