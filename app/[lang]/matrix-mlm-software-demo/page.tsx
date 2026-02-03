import type { Metadata } from "next";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  DEMO_HIGHLIGHTS,
  EVALUATION_BULLETS,
  EXPERIENCES,
  MatrixDemoCtaSection,
  MatrixDemoEvaluationSection,
  MatrixDemoHeroSection,
  MatrixDemoSessionSection
} from "@/components/frontend/demos/matrix-demo";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Matrix MLM Software Demo";
  const description =
    "See Cloud MLM Software’s matrix platform in action—spill-over automation, e-commerce integrations, and analytics in one guided demo.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/matrix-mlm-software-demo", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MatrixDemoPageProps = {
  params: { lang: SupportedLocale };
};

export default function MatrixDemoPage({ params }: MatrixDemoPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const calculatorHref = buildLocalizedPath("/matrix-mlm-calculator", locale);

  return (
    <div className="space-y-24 pb-24">
      <MatrixDemoHeroSection
        contactHref={contactHref}
        calculatorHref={calculatorHref}
        highlights={DEMO_HIGHLIGHTS}
      />

      <MatrixDemoSessionSection experiences={EXPERIENCES} />

      <MatrixDemoEvaluationSection bullets={EVALUATION_BULLETS} />

      <MatrixDemoCtaSection contactHref={contactHref} />
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
