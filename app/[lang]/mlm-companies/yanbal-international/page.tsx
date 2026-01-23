import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { buildLocalizedPath } from "@/lib/locale-links";
import { isSupportedLocale } from "@/lib/i18n-utils";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  ArrowRight,
  ArrowUpRight,
  Diamond,
  Globe,
  Heart,
  MapPin,
  Palette,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";
import { ChartLineUp, ChatsCircle, Handshake, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type SignatureLine = {
  title: string;
  description: string;
  highlight: string;
  icon: IconType;
};

type ConsultantStage = {
  stage: string;
  focus: string;
  enablement: string;
  icon: IconType;
};

type CloudPlay = {
  title: string;
  description: string;
  outcome: string;
  icon: IconType;
};

const CORE_METRICS: Metric[] = [
  {
    label: "Global revenue",
    value: "$994M",
    detail: "Cosmetics, fragrances, and jewellery loved across Latin America and beyond.",
    icon: ChartLineUp
  },
  {
    label: "Founded",
    value: "1967",
    detail: "Family-led heritage company with headquarters in Lima, Peru.",
    icon: Sparkles
  },
  {
    label: "Compensation",
    value: "Multi-level model",
    detail: "Rewards personal sales excellence and leadership rooted in social uplift.",
    icon: UsersThree
  },
  {
    label: "Core team",
    value: "5,200 employees",
    detail: "Product artisans, supply chain experts, and empowerment coaches worldwide.",
    icon: Users
  },
  {
    label: "Primary market",
    value: "Peru & pan-regional expansion",
    detail: "Localized storytelling and cultural relevance anchor every market entry.",
    icon: Globe
  }
];

const SIGNATURE_LINES: SignatureLine[] = [
  {
    title: "High-performance beauty",
    description:
      "Color cosmetics and skincare designed with scientific research and inclusive palettes for Latin American tones.",
    highlight: "Laboratory innovation pairs with trend intelligence to keep launches fresh and aspirational.",
    icon: Palette
  },
  {
    title: "Artisan jewellery",
    description:
      "Handcrafted pieces blending Andean heritage with modern design, empowering women to wear their stories.",
    highlight: "Responsible sourcing and limited editions boost desirability and consultant pride.",
    icon: Diamond
  },
  {
    title: "Fragrance & self-care",
    description:
      "Signature perfumes and wellness lines celebrate personal rituals, confidence, and self-expression.",
    highlight: "Multi-sensory experiences anchor party plans and digital storytelling alike.",
    icon: Heart
  },
  {
    title: "Prosperity for all",
    description:
      "Social impact programs, financial literacy, and leadership academies turn entrepreneurship into generational change.",
    highlight: "Consultants see tangible pathways to uplift families and communities.",
    icon: Handshake
  }
];

const CONSULTANT_STAGES: ConsultantStage[] = [
  {
    stage: "Inspire with beauty",
    focus:
      "Host immersive parties and digital showcases that blend product artistry with prosperity narratives.",
    enablement: "Creative decks, AI captioning, and compliance-checked claims keep storytelling powerful.",
    icon: Palette
  },
  {
    stage: "Elevate the experience",
    focus:
      "Curate personalised recommendations, look books, and jewellery styling sessions fuelled by data-driven insights.",
    enablement: "CRM journeys, virtual try-ons, and inventory alerts ensure every moment feels bespoke.",
    icon: Diamond
  },
  {
    stage: "Empower legacy leaders",
    focus:
      "Mentor new consultants through financial education, community service, and leadership certification.",
    enablement: "Recognition dashboards, mentorship matching, and social impact trackers sustain growth.",
    icon: Handshake
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "Yanbal inspiration studio",
    description:
      "Centralises product storytelling, cultural campaigns, and AI-guided content creation for every consultant.",
    outcome: "Keeps messaging on-brand while accelerating launch readiness in each market.",
    icon: Sparkles
  },
  {
    title: "Prosperity program cockpit",
    description:
      "Tracks financial milestones, training progress, and community impact to prove the ‘Prosperity for All’ promise.",
    outcome: "Gives leaders visibility to celebrate wins and close inclusion gaps quickly.",
    icon: Globe
  },
  {
    title: "Premium experience engine",
    description:
      "Orchestrates party plans, hybrid masterclasses, and personalised follow-ups with regulatory confidence.",
    outcome: "Protects the fragrance and jewellery experience while scaling internationally.",
    icon: ShieldCheck
  },
  {
    title: "Supply & sustainability radar",
    description:
      "Connects sourcing data, ESG metrics, and inventory to inform ethical storytelling and responsible growth.",
    outcome: "Builds trust with consultants, consumers, and regulators alike.",
    icon: UsersThree
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Yanbal International Empowerment Blueprint";
  const description =
    "See how Yanbal International combines beauty, jewellery, and social impact—accelerated by Cloud MLM Software for compliant, inclusive growth.";
  const keywords = [
    "Yanbal International strategy",
    "beauty direct selling enablement",
    "Yanbal consultant tools",
    "Cloud MLM Software cosmetics platform",
    "Prosperity for All MLM model"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/yanbal-international", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type YanbalPageProps = {
  params: { lang: SupportedLocale };
};

export default function YanbalInternationalPage({ params }: YanbalPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const servicesHref = buildLocalizedPath("/services", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const indexHref = buildLocalizedPath("/mlm-companies", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-slate-950 via-rose-900 to-amber-900 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(244,114,182,0.3),transparent_55%),radial-gradient(circle_at_78%_28%,rgba(251,191,36,0.28),transparent_58%),radial-gradient(circle_at_50%_85%,rgba(147,197,253,0.25),transparent_52%)]" />
        <div className="container grid gap-12 xl:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-200/60 bg-rose-500/10 px-4 py-1 text-sm font-semibold tracking-wide text-rose-100">
              Yanbal International • Beauty and prosperity
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Empower women, celebrate culture, and scale prosperity with intelligent beauty enablement.
            </h1>
            <p className="text-base text-rose-50/80">
              Yanbal International unites premium cosmetics, artisan jewellery, and social responsibility to transform families. Cloud
              MLM Software ensures the “Prosperity for All” promise stays authentic as consultants grow across Latin America and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={demoHref}>
                  Tour the empowerment studio
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-rose-200/60 text-rose-100 hover:bg-rose-500/10">
                <Link href={pricingHref}>
                  Design my Yanbal rollout
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-rose-100 underline underline-offset-4 hover:bg-white/10">
                <Link href={indexHref}>
                  Return to MLM company index
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="space-y-3 text-sm text-rose-50/80">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-rose-200" aria-hidden />
                Lima, Peru • Empowering consultants across Latin America and global diaspora markets
              </p>
              <p>
                “When beauty, culture, and entrepreneurship align, communities rise together.”
              </p>
            </div>
          </div>
          <aside className="grid gap-4 rounded-3xl border border-white/15 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <div className="space-y-2 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-200">Prosperity metrics</p>
              <h2 className="text-2xl font-semibold text-white">Yanbal momentum</h2>
            </div>
            <div className="grid gap-4">
              {CORE_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-black/25 p-4 text-left shadow-sm transition hover:-translate-y-1 hover:border-rose-200/40 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-rose-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-rose-100/80">{metric.label}</p>
                        <p className="text-lg font-semibold text-white">{metric.value}</p>
                      </div>
                    </div>
                    <p className="text-sm text-rose-50/80">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 rounded-3xl border border-border/60 bg-gradient-to-br from-rose-50 via-white to-slate-50 p-10 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Empowering women and families through beauty and prosperity</h2>
            <p className="text-base text-muted-foreground">
              Guided by the “Prosperity for All” philosophy, Yanbal delivers high-quality cosmetics and jewellery that inspire
              confidence. Consultants gain more than income—they gain self-worth, leadership skills, and the ability to uplift their
              communities.
            </p>
            <p className="text-base text-muted-foreground">
              Cloud MLM Software supports the mission with compliant storytelling, digital-first experiences, and data that proves the
              impact of every program. Beauty becomes a catalyst for opportunity across every region.
            </p>
          </div>
          <div className="grid gap-4 rounded-3xl border border-primary/10 bg-primary/5 p-6 dark:border-primary/10 dark:bg-primary/10">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80 dark:text-primary/70">Prosperity lens</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                Beauty rituals celebrate cultural roots while embracing modern expression.
              </li>
              <li className="flex items-start gap-2">
                <Heart className="mt-1 h-4 w-4 text-primary" aria-hidden />
                Entrepreneurial coaching, financial literacy, and social impact create lasting change.
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-1 h-4 w-4 text-primary" aria-hidden />
                Ethical sourcing and responsible messaging earn trust with regulators and customers alike.
              </li>
            </ul>
            <div>
              <Button asChild variant="secondary">
                <Link href={servicesHref}>
                  Explore empowerment services
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-4 text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-border/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            Signature lines
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Collections that elevate expression and unlock opportunity
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            Equip consultants with storytelling ready catalogs—each rooted in cultural pride, scientific performance, and ethical
            craftsmanship.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {SIGNATURE_LINES.map((line) => {
            const Icon = line.icon;
            return (
              <article
                key={line.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/80"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{line.title}</h3>
                  <p className="text-sm text-muted-foreground">{line.description}</p>
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                  {line.highlight}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
          <div className="space-y-4 rounded-3xl border border-border/60 bg-background p-8 shadow-sm dark:border-border/40 dark:bg-slate-950/80">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Consultant prosperity path</h2>
            <p className="text-sm text-muted-foreground">
              Support every Yanbal consultant from the first party to generational leadership status.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 hidden border-l border-primary/30 md:block" aria-hidden />
            <div className="space-y-6">
              {CONSULTANT_STAGES.map((stage, index) => {
                const Icon = stage.icon;
                return (
                  <article
                    key={stage.stage}
                    className="relative grid gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75 md:grid-cols-[auto_1fr]"
                  >
                    <div className="flex items-center gap-4 md:flex-col md:items-start">
                      <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Stage {index + 1}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{stage.stage}</h3>
                      <p className="text-sm text-muted-foreground">{stage.focus}</p>
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                        {stage.enablement}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10 rounded-3xl border border-border/60 bg-background p-10 shadow-sm dark:border-border/40 dark:bg-slate-950/85">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,0.5fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Cloud MLM Software plays</h2>
            <p className="text-sm text-muted-foreground">
              Blend human connection with AI-ready systems to grow Yanbal’s prosperity movement responsibly.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Architect my Yanbal platform
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href={demoHref}>
                  Schedule a guided demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {CLOUD_PLAYS.map((play) => {
              const Icon = play.icon;
              return (
                <article
                  key={play.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/80"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
                    <p className="text-sm text-muted-foreground">{play.description}</p>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {play.outcome}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

