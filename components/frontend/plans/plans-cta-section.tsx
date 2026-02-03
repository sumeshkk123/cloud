import type { Locale } from "@/i18n-config";
import { GradientCtaSection } from "@/components/frontend/common/gradient-cta-section";

interface PlansCtaSectionProps {
  contactHref: string;
  guideHref: string;
  locale: Locale;
}

export function PlansCtaSection({ contactHref, guideHref, locale }: PlansCtaSectionProps) {
  // Default CTA content - can be moved to content files later
  const ctaContent: Record<Locale, {
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
    trustIndicators: [string, string, string];
  }> = {
    en: {
      title: "Ready to modernise your compensation plan?",
      description: "Partner with Cloud MLM Software to test scenarios, align stakeholders, and roll out a plan that rewards the right behaviours at every stage of growth.",
      primaryButton: "Schedule a strategy session",
      secondaryButton: "Explore plan resources",
      trustIndicators: [
        "Quick implementation",
        "Expert consultation",
        "Proven results"
      ] as [string, string, string],
    },
    es: {
      title: "¿Listo para modernizar su plan de compensación?",
      description: "Asóciese con Cloud MLM Software para probar escenarios, alinear a las partes interesadas y lanzar un plan que recompense los comportamientos correctos en cada etapa del crecimiento.",
      primaryButton: "Programar una sesión estratégica",
      secondaryButton: "Explorar recursos del plan",
      trustIndicators: [
        "Implementación rápida",
        "Consulta experta",
        "Resultados probados"
      ] as [string, string, string],
    },
    it: {
      title: "Pronto a modernizzare il tuo piano di compensazione?",
      description: "Collabora con Cloud MLM Software per testare scenari, allineare gli stakeholder e lanciare un piano che premi i comportamenti giusti in ogni fase della crescita.",
      primaryButton: "Prenota una sessione strategica",
      secondaryButton: "Esplora le risorse del piano",
      trustIndicators: [
        "Implementazione rapida",
        "Consulenza esperta",
        "Risultati comprovati"
      ] as [string, string, string],
    },
    de: {
      title: "Bereit, Ihren Vergütungsplan zu modernisieren?",
      description: "Arbeiten Sie mit Cloud MLM Software zusammen, um Szenarien zu testen, Stakeholder auszurichten und einen Plan zu entwickeln, der die richtigen Verhaltensweisen in jeder Wachstumsphase belohnt.",
      primaryButton: "Strategiesitzung planen",
      secondaryButton: "Planressourcen erkunden",
      trustIndicators: [
        "Schnelle Implementierung",
        "Expertenberatung",
        "Bewährte Ergebnisse"
      ] as [string, string, string],
    },
    pt: {
      title: "Pronto para modernizar seu plano de compensação?",
      description: "Faça parceria com a Cloud MLM Software para testar cenários, alinhar partes interessadas e lançar um plano que recompense os comportamentos certos em cada estágio do crescimento.",
      primaryButton: "Agendar uma sessão estratégica",
      secondaryButton: "Explorar recursos do plano",
      trustIndicators: [
        "Implementação rápida",
        "Consulta especializada",
        "Resultados comprovados"
      ] as [string, string, string],
    },
    zh: {
      title: "准备好现代化您的薪酬计划了吗？",
      description: "与 Cloud MLM Software 合作，测试场景，协调利益相关者，并推出一个在成长的每个阶段都能奖励正确行为的计划。",
      primaryButton: "安排战略会议",
      secondaryButton: "探索计划资源",
      trustIndicators: [
        "快速实施",
        "专家咨询",
        "经过验证的结果"
      ] as [string, string, string],
    },
  };

  const cta = ctaContent[locale] || ctaContent.en;

  return (
    <GradientCtaSection
      title={cta.title}
      description={cta.description}
      primaryButton={{ text: cta.primaryButton, href: contactHref }}
      secondaryButton={{ text: cta.secondaryButton, href: guideHref, openInNewTab: true }}
      trustIndicators={cta.trustIndicators}
    />
  );
}
