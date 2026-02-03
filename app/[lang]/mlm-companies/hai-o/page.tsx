import type { ComponentType } from "react";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { buildLocalizedPath } from "@/lib/locale-links";
import { isSupportedLocale } from "@/lib/i18n-utils";
import {
  ArrowRight,
  ArrowUpRight,
  Building,
  Factory,
  Globe2,
  Leaf,
  LineChart,
  Sparkles,
  Sprout,
  Users
} from "lucide-react";
import { ChartLineUp, Handshake, Heartbeat, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  description: string;
  proof: string;
  icon: IconType;
};

type Programme = {
  title: string;
  description: string;
  impact: string;
  icon: IconType;
};

type Enablement = {
  title: string;
  description: string;
  outcome: string;
  icon: IconType;
};

const CORE_METRICS: Metric[] = [
  {
    label: "Revenue",
    value: "$87M",
    detail: "Hai-O generates $87M from wellness, beauty, and TCM-inspired products across Malaysia.",
    icon: LineChart
  },
  {
    label: "Founded",
    value: "1992",
    detail: "Established in Selangor, Hai-O brings traditional Chinese remedies to modern direct selling.",
    icon: Building
  },
  {
    label: "Primary market",
    value: "Malaysia",
    detail: "Extensive distributor network serves urban and rural communities with localised wellness education.",
    icon: Globe2
  },
  {
    label: "Flagship categories",
    value: "TCM wellness • Beauty • Personal care",
    detail: "Product lines integrate herbal heritage with contemporary formulas.",
    icon: Sprout
  }
];

const HERITAGE_PILLARS: Pillar[] = [
  {
    title: "Traditional wisdom, modern science",
    description:
      "Hai-O’s herbal tonics and supplements blend TCM knowledge with GMP manufacturing and quality audits.",
    proof: "Pharmacists, herbalists, and QA teams collaborate to validate each recipe before launch.",
    icon: Leaf
  },
  {
    title: "Community wellness advocates",
    description:
      "Distributors act as wellness consultants—hosting health talks, herbal workshops, and product demos nationwide.",
    proof: "Community impact reports highlight thousands of annual engagements across Malaysia.",
    icon: Handshake
  },
  {
    title: "Accessible beauty rituals",
    description:
      "Skincare and personal care lines emphasise natural extracts and halal-certified formulas for inclusive appeal.",
    proof: "Beauty coaches deliver personalised regimens and digital tutorials tailored to local climates.",
    icon: Sparkles
  },
  {
    title: "CSR rooted in heritage",
    description:
      "Hai-O invests in cultural preservation, scholarships, and SME development programmes supporting Malaysian entrepreneurs.",
    proof: "Annual CSR reports document scholarships, charity collaborations, and community entrepreneurship drives.",
    icon: Users
  }
];

const FIELD_PROGRAMMES: Programme[] = [
  {
    title: "Heritage Health Roadshows",
    description:
      "Travelling clinics combine wellness screenings, herbal consultations, and community education in town halls.",
    impact: "Tens of thousands of participants experience Hai-O products with personalised guidance.",
    icon: Heartbeat
  },
  {
    title: "Hai-O eCommunity",
    description:
      "Digital platform unites distributors with knowledge modules, livestream schedules, and collaborative campaign spaces.",
    impact: "Encourages cross-team collaboration and fast iteration of digital sales tactics.",
    icon: ChartLineUp
  },
  {
    title: "Entrepreneurship Academy",
    description:
      "Structured training covering product mastery, financial literacy, and leadership pathways for new distributors.",
    impact: "Graduates show higher retention and sustainable customer acquisition metrics.",
    icon: UsersThree
  }
];

const CLOUD_ENABLEMENT: Enablement[] = [
  {
    title: "Herbal knowledge vault",
    description:
      "Centralise TCM research, ingredient sourcing, and compliance-approved messaging for consultants.",
    outcome: "Ensures consistent, trustworthy storytelling that respects regulatory boundaries.",
    icon: Leaf
  },
  {
    title: "Community impact tracker",
    description:
      "Measure attendance, conversions, and health outcomes from Heritage Health Roadshows.",
    outcome: "Leadership scales successful formats and channels CSR data into marketing narratives.",
    icon: Heartbeat
  },
  {
    title: "Digital commerce accelerator",
    description:
      "Provide templates, analytics, and co-marketing assets for eCommunity campaigns and livestreams.",
    outcome: "Distributors adopt best practices quickly, boosting online revenue without losing authenticity.",
    icon: ChartLineUp
  },
  {
    title: "Supply chain radar",
    description:
      "Connect herbal supplier data, manufacturing batches, and distributor forecasts for proactive planning.",
    outcome: "Operations stay resilient during seasonal spikes and product launches.",
    icon: Factory
  }
];

const PRIMARY_TRUST_SCORE = {
  score: 69,
  label: "Trust progression",
  summary: "Assesses heritage authenticity, product satisfaction, and CSR transparency."
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = isSupportedLocale(params.lang) ? params.lang : i18n.defaultLocale;

  const title = "Hai-O MLM Strategy — Malaysian Herbal Wellness & Community Commerce";
  const description =
    "Review Hai-O’s revenue profile, heritage pillars, field programmes, and Cloud MLM Software enablement for Malaysian wellness leaders.";

  const alternates = i18n.locales.reduce<Record<string, string>>((acc, currentLocale) => {
    acc[currentLocale] = buildLocalizedPath("/mlm-companies/hai-o", currentLocale as SupportedLocale);
    return acc;
  }, {});

  return {
    title,
    description,
    alternates: { canonical: buildLocalizedPath("/mlm-companies/hai-o", locale as SupportedLocale), languages: alternates },
    openGraph: {
      title,
      description,
      url: buildLocalizedPath("/mlm-companies/hai-o", locale as SupportedLocale),
      type: "article"
    }
  };
}

export default function HaiOPage({ params }: { params: { lang: Locale } }) {
  const locale = isSupportedLocale(params.lang) ? params.lang : i18n.defaultLocale;

  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale as SupportedLocale);
  const contactHref = buildLocalizedPath("/contact", locale as SupportedLocale);
  const companiesHref = buildLocalizedPath("/mlm-companies", locale as SupportedLocale);

  return (
    <div className="space-y-24 pb-20 pt-16">
      <section className="relative isolate overflow-hidden border-y border-primary/25 bg-gradient-to-br from-primary/5 via-background to-background py-20 dark:from-primary/20">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary dark:border-primary/20 dark:bg-primary/20">
              Malaysian wellness • Rank #92
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Hai-O — Heritage wellness, modern impact
              </h1>
              <p className="text-base text-muted-foreground sm:text-lg">
                Hai-O fuses traditional Chinese medicine with contemporary direct selling. Deploy this strategy brief to align
                heritage storytelling, community impact, and data-driven operations.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={demoHref}>
                  Explore platform capabilities
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={contactHref}>
                  Plan a leadership session
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="underline underline-offset-4">
                <Link href={companiesHref}>
                  Discover other companies
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              “Hai-O is a legacy of health, wealth, and heartfelt connections—improving lives through high-quality products and
              empowering opportunities.”
            </p>
          </div>

          <aside className="space-y-6 rounded-3xl border border-primary/25 bg-background/90 p-8 shadow-xl dark:border-primary/15 dark:bg-slate-950/80">
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-border/60 bg-background/95 p-6 text-center dark:border-border/40 dark:bg-slate-950/70">
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {PRIMARY_TRUST_SCORE.label}
              </span>
              <span className="text-5xl font-semibold text-primary">{PRIMARY_TRUST_SCORE.score}</span>
              <p className="text-xs text-muted-foreground">{PRIMARY_TRUST_SCORE.summary}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {CORE_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex h-full flex-col gap-3 rounded-2xl border border-border/60 bg-background p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75"
                  >
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {metric.label}
                      </span>
                    </div>
                    <span className="text-lg font-semibold text-foreground">{metric.value}</span>
                    <p className="text-xs text-muted-foreground">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Heritage pillars in action
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Reinforce the brand’s promise with pillars that balance tradition, inclusivity, and entrepreneurship.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {HERITAGE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-3 rounded-3xl border border-primary/20 bg-primary/5 p-6 dark:border-primary/15 dark:bg-primary/10"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background text-primary shadow-sm">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
                <p className="text-xs font-medium text-primary">{pillar.proof}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Programmes serving Malaysian communities
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            From roadshows to digital communities, Hai-O keeps relationships authentic while scaling impact.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {FIELD_PROGRAMMES.map((programme) => {
            const Icon = programme.icon;
            return (
              <article
                key={programme.title}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{programme.title}</h3>
                <p className="text-sm text-muted-foreground">{programme.description}</p>
                <p className="text-xs font-medium text-primary">{programme.impact}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-8 rounded-3xl border border-primary/25 bg-primary/5 p-8 dark:border-primary/20 dark:bg-primary/10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Cloud MLM Software enablement
            </h2>
            <p className="text-sm text-muted-foreground">
              Digitise Hai-O’s heritage model with AI workflows covering knowledge sharing, community impact, and supply chain
              resilience.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href={demoHref}>
                  Book a guided demo
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href={contactHref}>
                  Co-create the rollout
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {CLOUD_ENABLEMENT.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <p className="text-xs font-medium text-primary">{item.outcome}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

