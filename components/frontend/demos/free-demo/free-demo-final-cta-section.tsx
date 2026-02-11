import type { Locale } from "@/i18n-config";
import { GradientCtaSection } from "@/components/frontend/common/gradient-cta-section";

const translations: Record<
  Locale,
  {
    title: string;
    description: string;
    primaryButton: string;
    trustIndicators: {
      quickSetup: string;
      guidedSession: string;
      decisionReady: string;
    };
  }
> = {
  en: {
    title: "Start your Cloud MLM Software demo today",
    description: "We'll help you import data, configure workflows, and brief stakeholders—so you can make decisions with confidence.",
    primaryButton: "Reserve a slot",
    trustIndicators: {
      quickSetup: "Fast sandbox setup",
      guidedSession: "Guided walkthrough",
      decisionReady: "Decision-ready insights",
    },
  },
  es: {
    title: "Empieza hoy tu demo de Cloud MLM Software",
    description: "Te ayudaremos a importar datos, configurar flujos y alinear a las partes interesadas para que decidas con confianza.",
    primaryButton: "Reservar un horario",
    trustIndicators: {
      quickSetup: "Configuración rápida del sandbox",
      guidedSession: "Recorrido guiado",
      decisionReady: "Insights listos para decidir",
    },
  },
  it: {
    title: "Inizia oggi la tua demo di Cloud MLM Software",
    description: "Ti aiutiamo a importare i dati, configurare i flussi e allineare gli stakeholder—per decidere con sicurezza.",
    primaryButton: "Prenota uno slot",
    trustIndicators: {
      quickSetup: "Setup rapido della sandbox",
      guidedSession: "Walkthrough guidato",
      decisionReady: "Insight per decidere",
    },
  },
  de: {
    title: "Starten Sie noch heute Ihre Cloud MLM Software Demo",
    description: "Wir helfen beim Datenimport, der Workflow-Konfiguration und beim Briefing der Stakeholder – damit Sie sicher entscheiden können.",
    primaryButton: "Termin reservieren",
    trustIndicators: {
      quickSetup: "Schnelles Sandbox-Setup",
      guidedSession: "Geführte Demo",
      decisionReady: "Entscheidungsreife Insights",
    },
  },
  pt: {
    title: "Comece hoje sua demo do Cloud MLM Software",
    description: "Vamos ajudar você a importar dados, configurar fluxos e alinhar stakeholders — para decidir com confiança.",
    primaryButton: "Reservar um horário",
    trustIndicators: {
      quickSetup: "Configuração rápida do sandbox",
      guidedSession: "Demonstração guiada",
      decisionReady: "Insights para decisão",
    },
  },
  zh: {
    title: "立即开始您的 Cloud MLM 软件演示",
    description: "我们将协助导入数据、配置流程并向相关方说明要点，让您更有信心做出决策。",
    primaryButton: "预约时间",
    trustIndicators: {
      quickSetup: "快速搭建沙盒",
      guidedSession: "引导式讲解",
      decisionReady: "决策所需洞察",
    },
  },
};

export function FreeDemoFinalCtaSection({ locale, contactHref }: { locale: Locale; contactHref: string }) {
  const t = translations[locale] ?? translations.en;
  return (
    <GradientCtaSection
      title={t.title}
      description={t.description}
      primaryButton={{ text: t.primaryButton, href: contactHref }}
      primaryButtonOpensDemoModal={{ source: "cta-section", subheading: "From: CTA section", locale }}
      trustIndicators={[t.trustIndicators.quickSetup, t.trustIndicators.guidedSession, t.trustIndicators.decisionReady]}
    />
  );
}
