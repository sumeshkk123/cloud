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
  Home,
  LineChart,
  Palette,
  Ruler,
  ShieldCheck,
  Sparkles,
  Sun,
  Users
} from "lucide-react";
import { Handshake, UsersThree } from "@phosphor-icons/react/dist/ssr";

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
  highlight: string;
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
    value: "$185M",
    detail: "Hillary’s Blinds delivers customer-tailored window treatments generating $185M annually.",
    icon: LineChart
  },
  {
    label: "Founded",
    value: "1971",
    detail: "Half a century of craft, beginning with bespoke blinds in Nottinghamshire, England.",
    icon: Building
  },
  {
    label: "Primary market",
    value: "United Kingdom",
    detail: "Thousands of consultants run in-home design consultations across England, Scotland, Wales, and Ireland.",
    icon: Home
  },
  {
    label: "Sales model",
    value: "Single-level design consultancy",
    detail: "Stylists earn through personalised appointments, design expertise, and premium installation services.",
    icon: UsersThree
  }
];

const DESIGN_PILLARS: Pillar[] = [
  {
    title: "Made-to-measure craftsmanship",
    description:
      "Every blind, curtain, and shutter is measured, manufactured, and installed to fit unique spaces.",
    proof: "UK workshops use precision tooling and quality inspections on each order.",
    icon: Ruler
  },
  {
    title: "Style-led storytelling",
    description:
      "Consultants curate mood boards, fabric swatches, and trend insights during in-home visits.",
    proof: "Seasonal collections and House Beautiful collaborations keep design language fresh.",
    icon: Palette
  },
  {
    title: "Light & comfort expertise",
    description:
      "Solutions consider insulation, light control, privacy, and energy efficiency for every room.",
    proof: "Training modules cover daylight mapping, thermal benefits, and motorisation options.",
    icon: Sun
  },
  {
    title: "Customer peace of mind",
    description:
      "Warranty-backed installations, vetted fitters, and transparent pricing nurture long-term trust.",
    proof: "High Trustpilot ratings and repeat-customer metrics underpin the brand’s reputation.",
    icon: ShieldCheck
  }
];

const FIELD_PROGRAMMES: Programme[] = [
  {
    title: "Design Discovery Sessions",
    description:
      "Interactive consultations where stylists co-create schemes using digital visualisers and tactile swatches.",
    highlight: "Boosts conversion by translating client aspirations into concrete product plans.",
    icon: Palette
  },
  {
    title: "Installer-Stylist Alliances",
    description:
      "Structured collaboration between consultants and fitters ensures seamless customer journeys.",
    highlight: "Shared dashboards track survey notes, installation dates, and client satisfaction.",
    icon: Handshake
  },
  {
    title: "Showroom-on-the-move",
    description:
      "Branded vehicles carry sample libraries, AR-enabled tablets, and portable demo rigs to every appointment.",
    highlight: "Extends premium showroom experiences into the customer’s home.",
    icon: Home
  }
];

const CLOUD_ENABLEMENT: Enablement[] = [
  {
    title: "Room-by-room planning studio",
    description:
      "Plan appointments with AI-guided questionnaires, fabric recommendations, and profitability insights.",
    outcome: "Stylists arrive prepared and deliver bespoke proposals in one visit.",
    icon: Palette
  },
  {
    title: "Operations & install tracker",
    description:
      "Connect survey data, manufacturing status, and installer schedules to protect customer timelines.",
    outcome: "Regional teams anticipate bottlenecks and keep service promises.",
    icon: Users
  },
  {
    title: "Experience sentiment monitor",
    description:
      "Capture feedback, designer ratings, and referral potential immediately after installation.",
    outcome: "Leadership amplifies five-star stories and resolves issues before they escalate.",
    icon: Sparkles
  },
  {
    title: "Sustainability and CSR ledger",
    description:
      "Track eco fabrics, recycling initiatives, and community design donations for marketing and compliance.",
    outcome: "Hillary’s demonstrates tangible impact alongside design excellence.",
    icon: ShieldCheck
  }
];

const PRIMARY_TRUST_SCORE = {
  score: 72,
  label: "Trust & experience index",
  summary: "Combines craftsmanship quality, customer satisfaction, and operational reliability metrics."
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = isSupportedLocale(params.lang) ? params.lang : i18n.defaultLocale;

  const title = "Hillary’s Blinds MLM Strategy — Bespoke Home Styling Playbook";
  const description =
    "Discover Hillary’s Blinds multi-million design consultancy: revenue signals, design pillars, field programmes, and Cloud MLM Software enablement for premium in-home experiences.";

  const alternates = i18n.locales.reduce<Record<string, string>>((acc, currentLocale) => {
    acc[currentLocale] = buildLocalizedPath("/mlm-companies/hillarys-blinds", currentLocale as SupportedLocale);
    return acc;
  }, {});

  return {
    title,
    description,
    alternates: { canonical: buildLocalizedPath("/mlm-companies/hillarys-blinds", locale as SupportedLocale), languages: alternates },
    openGraph: {
      title,
      description,
      url: buildLocalizedPath("/mlm-companies/hillarys-blinds", locale as SupportedLocale),
      type: "article"
    }
  };
}

export default function HillarysBlindsPage({ params }: { params: { lang: Locale } }) {
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
              Home styling • Rank #64
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Hillary’s Blinds — Bespoke home styling intelligence
              </h1>
              <p className="text-base text-muted-foreground sm:text-lg">
                Hillary’s transforms homes with made-to-measure blinds, curtains, and shutters. This blueprint helps you scale
                premium design consultations, operations excellence, and data-informed growth.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={demoHref}>
                  Request a guided demo
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={contactHref}>
                  Discuss rollout strategy
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="underline underline-offset-4">
                <Link href={companiesHref}>
                  Return to MLM index
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              “Hillary’s Blinds transforms homes into beautiful, functional spaces with exceptional window treatments and
              personalised service.”
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
            Design pillars that win client trust
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Anchor consultant training around craftsmanship, comfort, and peace of mind.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {DESIGN_PILLARS.map((pillar) => {
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
            Programmes elevating the in-home experience
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Hillary’s success is powered by immersive consultations, strong fitter partnerships, and mobile showrooms.
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
                <p className="text-xs font-medium text-primary">{programme.highlight}</p>
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
              Coordinate designers, fitters, manufacturing, and sustainability narratives within a single AI-powered workspace.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href={demoHref}>
                  Book an experience demo
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href={contactHref}>
                  Architect the deployment
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

