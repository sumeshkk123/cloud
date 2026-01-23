import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroSection, type HeroMetric } from "@/components/frontend/common/hero-section";
import { Sparkles, ArrowUpRight } from "lucide-react";
import type { Locale } from "@/i18n-config";
import type { PageTitleRecord } from "@/lib/api/page-titles";

interface ServicesHeroSectionProps {
  locale: Locale;
  contactHref: string;
  demoHref: string;
  supportHref: string;
  pageTitleData?: PageTitleRecord | null;
}

// Translation strings
const translations: Record<Locale, {
  badgeText: string;
  fallbackTitle: {
    beforeText?: string;
    highlightText: string;
    afterText?: string;
  };
  description: string;
  primaryCta: string;
  secondaryCta: string;
  metrics: {
    projectsDelivered: { label: string; detail: string };
    launchSpecialists: { label: string; detail: string };
    marketsSupported: { label: string; detail: string };
  };
}> = {
  en: {
    badgeText: "Full-service delivery for direct selling teams",
    fallbackTitle: {
      highlightText: "Launch",
      afterText: "scale, and optimise your MLM programme with a specialist partner."
    },
    description: "Consultants, engineers, and compliance experts work as one team to accelerate implementations, modernise legacy systems, and keep global operations running smoothly.",
    primaryCta: "Talk to a services lead",
    secondaryCta: "Explore platform capabilities",
    metrics: {
      projectsDelivered: { label: "Projects delivered", detail: "" },
      launchSpecialists: { label: "Launch specialists", detail: "" },
      marketsSupported: { label: "Markets supported", detail: "" }
    }
  },
  es: {
    badgeText: "Entrega de servicio completo para equipos de venta directa",
    fallbackTitle: {
      highlightText: "Lanza",
      afterText: "escala y optimiza tu programa MLM con un socio especializado."
    },
    description: "Consultores, ingenieros y expertos en cumplimiento trabajan como un solo equipo para acelerar implementaciones, modernizar sistemas heredados y mantener las operaciones globales funcionando sin problemas.",
    primaryCta: "Habla con un líder de servicios",
    secondaryCta: "Explora las capacidades de la plataforma",
    metrics: {
      projectsDelivered: { label: "Proyectos entregados", detail: "" },
      launchSpecialists: { label: "Especialistas en lanzamiento", detail: "" },
      marketsSupported: { label: "Mercados soportados", detail: "" }
    }
  },
  it: {
    badgeText: "Consegna di servizio completo per team di vendita diretta",
    fallbackTitle: {
      highlightText: "Lancia",
      afterText: "scala e ottimizza il tuo programma MLM con un partner specializzato."
    },
    description: "Consulenti, ingegneri ed esperti di conformità lavorano come un unico team per accelerare le implementazioni, modernizzare i sistemi legacy e mantenere le operazioni globali funzionanti senza intoppi.",
    primaryCta: "Parla con un responsabile servizi",
    secondaryCta: "Esplora le capacità della piattaforma",
    metrics: {
      projectsDelivered: { label: "Progetti consegnati", detail: "" },
      launchSpecialists: { label: "Specialisti di lancio", detail: "" },
      marketsSupported: { label: "Mercati supportati", detail: "" }
    }
  },
  de: {
    badgeText: "Vollständige Servicebereitstellung für Direktvertriebsteams",
    fallbackTitle: {
      highlightText: "Starten",
      afterText: "skalieren und optimieren Sie Ihr MLM-Programm mit einem spezialisierten Partner."
    },
    description: "Berater, Ingenieure und Compliance-Experten arbeiten als ein Team zusammen, um Implementierungen zu beschleunigen, Legacy-Systeme zu modernisieren und globale Operationen reibungslos am Laufen zu halten.",
    primaryCta: "Sprechen Sie mit einem Serviceleiter",
    secondaryCta: "Plattformfunktionen erkunden",
    metrics: {
      projectsDelivered: { label: "Abgeschlossene Projekte", detail: "" },
      launchSpecialists: { label: "Launch-Spezialisten", detail: "" },
      marketsSupported: { label: "Unterstützte Märkte", detail: "" }
    }
  },
  pt: {
    badgeText: "Entrega de serviço completo para equipes de vendas diretas",
    fallbackTitle: {
      highlightText: "Lance",
      afterText: "escalone e otimize seu programa MLM com um parceiro especializado."
    },
    description: "Consultores, engenheiros e especialistas em conformidade trabalham como uma equipe para acelerar implementações, modernizar sistemas legados e manter operações globais funcionando sem problemas.",
    primaryCta: "Fale com um líder de serviços",
    secondaryCta: "Explorar capacidades da plataforma",
    metrics: {
      projectsDelivered: { label: "Projetos entregues", detail: "" },
      launchSpecialists: { label: "Especialistas em lançamento", detail: "" },
      marketsSupported: { label: "Mercados suportados", detail: "" }
    }
  },
  zh: {
    badgeText: "为直销团队提供全方位服务",
    fallbackTitle: {
      highlightText: "启动",
      afterText: "扩展并优化您的 MLM 计划，与专业合作伙伴一起。"
    },
    description: "顾问、工程师和合规专家作为一个团队工作，以加速实施、现代化遗留系统并保持全球运营顺利运行。",
    primaryCta: "与服务负责人交谈",
    secondaryCta: "探索平台功能",
    metrics: {
      projectsDelivered: { label: "已完成项目", detail: "" },
      launchSpecialists: { label: "启动专家", detail: "" },
      marketsSupported: { label: "支持的市场", detail: "" }
    }
  }
};

export function ServicesHeroSection({ locale, contactHref, demoHref, supportHref, pageTitleData }: ServicesHeroSectionProps) {
  const t = translations[locale];

  // Parse title to extract highlight text
  const parseTitle = (title: string): { beforeText?: string; highlightText: string; afterText?: string } => {
    const highlightWords = [
      t.fallbackTitle.highlightText,
      // Also check for common translations
      'Launch', 'Lanza', 'Lancia', 'Starten', 'Lance', '启动',
      'scale', 'escala', 'scala', 'skalieren', 'escalone', '扩展',
      'optimise', 'optimiza', 'ottimizza', 'optimieren', 'otimize', '优化'
    ];

    const words = title.split(' ');
    const highlightIndex = words.findIndex(w => highlightWords.some(hw => w.toLowerCase().includes(hw.toLowerCase())));

    if (highlightIndex >= 0) {
      return {
        beforeText: highlightIndex > 0 ? words.slice(0, highlightIndex).join(' ') : undefined,
        highlightText: words[highlightIndex],
        afterText: highlightIndex < words.length - 1 ? words.slice(highlightIndex + 1).join(' ') : undefined,
      };
    }

    return {
      highlightText: words[0] || t.fallbackTitle.highlightText,
      afterText: words.length > 1 ? words.slice(1).join(' ') : undefined,
    };
  };

  const titleParts = pageTitleData?.title
    ? parseTitle(pageTitleData.title)
    : t.fallbackTitle;

  // Build metrics from translations
  const metrics: HeroMetric[] = [
    {
      label: t.metrics.projectsDelivered.label,
      value: "320+",
      detail: t.metrics.projectsDelivered.detail
    },
    {
      label: t.metrics.launchSpecialists.label,
      value: "85",
      detail: t.metrics.launchSpecialists.detail
    },
    {
      label: t.metrics.marketsSupported.label,
      value: "45",
      detail: t.metrics.marketsSupported.detail
    }
  ];

  return (
    <HeroSection
      badgeText={pageTitleData?.pagePill || t.badgeText}
      badgeIcon={<Sparkles className="h-4 w-4" aria-hidden />}
      beforeText={titleParts.beforeText}
      highlightText={titleParts.highlightText}
      afterText={titleParts.afterText}
      description={pageTitleData?.sectionSubtitle || t.description}
      primaryCta={{
        label: t.primaryCta,
        href: contactHref,
      }}
      secondaryCta={{
        label: t.secondaryCta,
        href: demoHref,
        external: true,
      }}
      metrics={metrics}
      centered={false}
      disableHighlight={false}
      className="bg-transparent border-0 py-0"
    />
  );
}
