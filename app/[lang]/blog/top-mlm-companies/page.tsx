import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  MlmCompaniesHeroWithProjectBriefModal,
  MlmCompaniesPrimarySection,
  MlmCompaniesTopUsaSection,
  MlmCompaniesTopMalaysiaSection,
  MlmCompaniesTopSpainSection,
  MlmCompaniesListSection,
  MlmCompaniesImplementationSection,
  MlmCompaniesFaqSection,
  MlmCompaniesCtaSection
} from "@/components/frontend/mlm-companies";
import { getPageTitle } from "@/lib/api/page-titles";
import { getMlmCompaniesSubpageHeroData } from "@/lib/mlm-companies-subpage-hero";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";
import { getMlmCompaniesContent } from "@/lib/mlm-companies";
import { cn } from "@/lib/utils";

const TOP_MLM_HERO_COPY: Record<Locale, { backLabel: string; title: string; description: string }> = {
  en: {
    backLabel: "Back to blogs",
    title: "Top 100 MLM Companies in the world as of 2026",
    description:
      "Here is the list of Top 100 MLM companies in 2025, showcasing industry leaders renowned for their innovative products and successful business models. From health and wellness to beauty and lifestyle, these companies offer lucrative opportunities for entrepreneurs and distributors alike. Explore their unique strengths and find your ideal match!",
  },
  es: {
    backLabel: "Volver a blogs",
    title: "Las 100 principales empresas MLM del mundo en 2026",
    description:
      "Aquí está la lista de las 100 principales empresas MLM en 2025, que muestra líderes del sector reconocidos por sus productos innovadores y modelos de negocio exitosos. Desde salud y bienestar hasta belleza y estilo de vida, estas empresas ofrecen oportunidades lucrativas para emprendedores y distribuidores. Explora sus fortalezas únicas y encuentra tu opción ideal.",
  },
  fr: {
    backLabel: "Retour aux blogs",
    title: "Top 100 des entreprises MLM dans le monde en 2026",
    description:
      "Voici la liste des 100 meilleures entreprises MLM en 2025, mettant en avant des leaders du secteur réputés pour leurs produits innovants et leurs modèles économiques performants. De la santé et du bien-être à la beauté et au style de vie, ces entreprises offrent des opportunités lucratives aux entrepreneurs et distributeurs. Découvrez leurs atouts uniques et trouvez votre correspondance idéale.",
  },
  it: {
    backLabel: "Torna ai blog",
    title: "Le 100 migliori aziende MLM al mondo nel 2026",
    description:
      "Ecco l'elenco delle 100 migliori aziende MLM nel 2025, con i leader del settore rinomati per prodotti innovativi e modelli di business di successo. Dalla salute e benessere alla bellezza e lifestyle, queste aziende offrono opportunità redditizie per imprenditori e distributori. Esplora i loro punti di forza unici e trova la scelta ideale per te.",
  },
  de: {
    backLabel: "Zurück zu Blogs",
    title: "Die 100 besten MLM-Unternehmen der Welt im Jahr 2026",
    description:
      "Hier ist die Liste der Top-100-MLM-Unternehmen im Jahr 2025 mit Branchenführern, die für innovative Produkte und erfolgreiche Geschäftsmodelle bekannt sind. Von Gesundheit und Wellness bis hin zu Beauty und Lifestyle bieten diese Unternehmen lukrative Chancen für Unternehmer und Vertriebspartner. Entdecken Sie ihre besonderen Stärken und finden Sie die ideale Wahl.",
  },
  pt: {
    backLabel: "Voltar aos blogs",
    title: "As 100 principais empresas de MLM no mundo em 2026",
    description:
      "Aqui está a lista das 100 principais empresas de MLM em 2025, destacando líderes do setor reconhecidos por produtos inovadores e modelos de negócio bem-sucedidos. De saúde e bem-estar a beleza e estilo de vida, essas empresas oferecem oportunidades lucrativas para empreendedores e distribuidores. Explore seus diferenciais e encontre a opção ideal.",
  },
  zh: {
    backLabel: "返回博客",
    title: "截至 2026 年全球前 100 家 MLM 公司",
    description:
      "以下是 2025 年全球前 100 家 MLM 公司的名单，涵盖以创新产品和成功商业模式著称的行业领导者。从健康与养生到美妆与生活方式，这些公司为创业者和分销商提供了可观机会。探索它们的独特优势，找到最适合你的选择。",
  },
};

function BlogBackLink({ href, label, className }: { href: string; label: string; className?: string }) {
  return (
    <div className={cn("container pt-8 md:pt-10", className)}>
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        {label}
      </Link>
    </div>
  );
}

export const dynamic = "force-dynamic";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata(props: { params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale } }): Promise<Metadata> {
  const params = props?.params ?? null;
  let resolvedParams: { lang: SupportedLocale } | null = null;
  try {
    resolvedParams = params != null ? (params instanceof Promise ? await params : params) : null;
  } catch {
    // ignore
  }
  const lang = resolvedParams?.lang ?? i18n.defaultLocale;
  const { getPageKeywords } = await import("@/lib/seo-keywords");

  return getPageMetadata(
    params,
    "/blog/top-mlm-companies",
    {
      page: "top-mlm-companies",
      fallbackTitle: "MLM Companies | Leading Network Marketing Organizations | USA, India, Philippines, Australia, Germany",
      fallbackDescription: "Explore successful MLM companies and network marketing organizations worldwide. Learn from industry leaders, their compensation plans, and business strategies. Build your MLM business with proven insights.",
      fallbackKeywords: `${getPageKeywords("mlm-companies", lang)}, MLM companies, network marketing organizations, direct selling companies, MLM business, multi-level marketing, compensation plans`
    }
  );
}

type MlmCompaniesPageProps = {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
};

export default async function MlmCompaniesPage(props: MlmCompaniesPageProps) {
  const params = props?.params;
  const resolvedParams =
    params != null ? (params instanceof Promise ? await params : params) : null;
  const lang = resolvedParams?.lang ?? i18n.defaultLocale;
  const locale = resolveLocale(lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const blogHref = buildLocalizedPath("/blog", locale);
  const pricingHref = "/pricing/";
  const demoHref = "/free-mlm-software-demo/";

  // Fetch hero data from same backend as subpages; fallback to page_titles for main page
  let pageTitleData = await getMlmCompaniesSubpageHeroData("mlm-companies", locale);
  if (!pageTitleData) pageTitleData = await getPageTitle("mlm-companies", locale);
  const heroCopy = TOP_MLM_HERO_COPY[locale] ?? TOP_MLM_HERO_COPY.en;

  pageTitleData = {
    ...(pageTitleData ?? {}),
    title: heroCopy.title,
    sectionSubtitle: heroCopy.description,
  };

  // Fetch companies content on server side (can't use require() in client components)
  const companiesContent = getMlmCompaniesContent(locale);

  return (
    <div>
      <BlogBackLink href={blogHref} label={heroCopy.backLabel} />

      <MlmCompaniesHeroWithProjectBriefModal
        locale={locale}
        contactHref={contactHref}
        pricingHref={pricingHref}
        demoHref={demoHref}
        pageTitleData={pageTitleData}
      />

      <MlmCompaniesPrimarySection locale={locale} />


      <MlmCompaniesListSection locale={locale} />

      <MlmCompaniesTopUsaSection locale={locale} />

      <MlmCompaniesTopMalaysiaSection locale={locale} />

      <MlmCompaniesTopSpainSection locale={locale} />


      <MlmCompaniesImplementationSection locale={locale} />

      <MlmCompaniesFaqSection locale={locale} faqContent={companiesContent.faqSection} />

      <MlmCompaniesCtaSection contactHref={contactHref} demoHref={demoHref} locale={locale} />
    </div>
  );
}
