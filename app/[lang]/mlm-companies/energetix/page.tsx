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
  Gem,
  Globe2,
  Magnet,
  ShieldCheck,
  Sparkles,
  Target,
  Users
} from "lucide-react";
import { Handshake, Pulse, TrendUp, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  narrative: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  description: string;
  proof: string;
  icon: IconType;
};

type Collection = {
  name: string;
  highlight: string;
  detail: string;
  icon: IconType;
};

type Programme = {
  title: string;
  description: string;
  support: string;
};

type Enablement = {
  title: string;
  description: string;
  result: string;
  icon: IconType;
};

const CORE_METRICS: Metric[] = [
  {
    label: "Revenue",
    value: "$94.5M",
    narrative: "Magnetic jewelry and wellness accessories generate nearly $95M in annual global sales.",
    icon: TrendUp
  },
  {
    label: "Founded",
    value: "2002",
    narrative: "Launched in Bingen am Rhein, Germany to empower wellness consultants with design-led magnetism.",
    icon: Sparkles
  },
  {
    label: "Headquarters",
    value: "Germany",
    narrative: "Product design, R&D, and logistics remain centralised to retain craftsmanship and compliance.",
    icon: Globe2
  },
  {
    label: "Sales model",
    value: "Single-level + experience retail",
    narrative: "Consultants curate pop-up boutiques, styling sessions, and online showcases.",
    icon: Users
  }
];

const ENERGY_PILLARS: Pillar[] = [
  {
    title: "Magnetic wellness artistry",
    description:
      "Each piece fuses premium materials with neodymium magnets to support balance, circulation, and mindful living.",
    proof: "Energetix labs test gauss strength, plating durability, and skin compatibility before release.",
    icon: Magnet
  },
  {
    title: "Design for everyday confidence",
    description:
      "Collections span minimal classics to statement stones, letting consultants style looks for any lifestyle or budget.",
    proof: "Seasonal catalogues and digital look-books equip stylists with storytelling prompts.",
    icon: Gem
  },
  {
    title: "Community-powered care",
    description:
      "Consultants host wellness evenings, micro-coaching sessions, and social fundraisers that build loyal circles.",
    proof: "Customer loyalty programmes reward referrals, gifting moments, and repeat styling appointments.",
    icon: Handshake
  }
];

const SIGNATURE_COLLECTIONS: Collection[] = [
  {
    name: "Balance Line",
    highlight: "Everyday essentials with discreet magnets for all-day resilience.",
    detail: "Popular among corporate clients seeking subtle wellness cues without sacrificing style.",
    icon: ShieldCheck
  },
  {
    name: "Premium Elements",
    highlight: "Semi-precious stones paired with high-gauss inserts for standout gifting.",
    detail: "Consultants stage curated showcases highlighting craftsmanship, provenance, and therapeutic intent.",
    icon: Sparkles
  },
  {
    name: "Kids & Active",
    highlight: "Vibrant, durable pieces with gentle magnetism for family-oriented rituals.",
    detail: "Parent ambassadors share hydration, mindfulness, and energy tips alongside accessory demos.",
    icon: Target
  },
  {
    name: "Pure Energy Home",
    highlight: "Home wellness accents including water sticks, cushions, and relaxation tools.",
    detail: "Extends magnetic narratives beyond jewelry, boosting customer lifetime value.",
    icon: Pulse
  }
];

const FIELD_PROGRAMMES: Programme[] = [
  {
    title: "Magnetic Moments Parties",
    description:
      "Experience-led gatherings with guided relaxation, styling corners, and wellness journaling for guests.",
    support: "Event kits include ambiance playlists, consultation cards, and recommended product mixes."
  },
  {
    title: "Energetix Academy",
    description:
      "Modular training that blends product science, storytelling, ethical claims, and digital retail skills.",
    support: "Live translation, micro-certifications, and mentor pods keep new consultants progressing."
  },
  {
    title: "Customer Care Loops",
    description:
      "Automated follow-ups for sizing, magnet care, and upsell journeys tied to life milestones and gifting seasons.",
    support: "CRM dashboards surface anniversaries, wellness check-ins, and reorder reminders."
  }
];

const CLOUD_ENABLEMENT: Enablement[] = [
  {
    title: "Experience design studio",
    description:
      "Plan every Magnetic Moments event with AI-curated checklists, ambience prompts, and compliance-approved scripts.",
    result: "Consultants deliver consistent premium experiences while leaders monitor sentiment across regions.",
    icon: Sparkles
  },
  {
    title: "Collection intelligence",
    description:
      "Track SKU velocity, stone preferences, and magnet strength feedback to inform replenishment and product roadmaps.",
    result: "Merchandising teams launch capsules based on live customer data instead of intuition.",
    icon: TrendUp
  },
  {
    title: "Wellness storytelling coach",
    description:
      "Blend approved magnetic wellness insights with customer profiles so consultants tailor conversations ethically.",
    result: "Every consultation stays compliant while remaining deeply personal and aspirational.",
    icon: ShieldCheck
  },
  {
    title: "Community commerce hub",
    description:
      "Sync livestream schedules, pop-up pop-ins, and referral incentives across local consultant squads.",
    result: "Teams collaborate on seasonal campaigns and share best-performing playbooks.",
    icon: UsersThree
  }
];

const PRIMARY_TRUST_SCORE = {
  score: 68,
  label: "Trust & experience index",
  summary: "Balances product science accuracy, customer satisfaction, and event experience consistency."
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = isSupportedLocale(params.lang) ? params.lang : i18n.defaultLocale;

  const title = "Energetix MLM Company Guide — Magnetic Wellness & Retail Playbook";
  const description =
    "Uncover Energetix’s magnetic jewelry opportunity: revenue signals, experience pillars, product collections, and Cloud MLM enablement to grow compliant, design-led communities.";

  const alternates = i18n.locales.reduce<Record<string, string>>((acc, currentLocale) => {
    acc[currentLocale] = buildLocalizedPath("/mlm-companies/energetix", currentLocale as SupportedLocale);
    return acc;
  }, {});

  return {
    title,
    description,
    alternates: { canonical: buildLocalizedPath("/mlm-companies/energetix", locale as SupportedLocale), languages: alternates },
    openGraph: {
      title,
      description,
      url: buildLocalizedPath("/mlm-companies/energetix", locale as SupportedLocale),
      type: "article"
    }
  };
}

export default function EnergetixPage({ params }: { params: { lang: Locale } }) {
  const locale = isSupportedLocale(params.lang) ? params.lang : i18n.defaultLocale;

  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale as SupportedLocale);
  const contactHref = buildLocalizedPath("/contact", locale as SupportedLocale);
  const companiesHref = buildLocalizedPath("/mlm-companies", locale as SupportedLocale);

  return (
    <div className="space-y-24 pb-20 pt-16">
      <section className="relative isolate overflow-hidden border-y border-primary/25 bg-gradient-to-br from-primary/10 via-background to-background py-18 dark:from-primary/20">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary dark:border-primary/20 dark:bg-primary/20">
              Magnetic wellness • Rank #88
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Energetix Magnetic Wellness — Experience-led Growth System
              </h1>
              <p className="text-base text-muted-foreground sm:text-lg">
                Energetix blends design-led jewelry with magnetic wellness benefits. Use this guide to choreograph experiences,
                loyalty, and AI-assisted compliance that keep your brand premium and human-centric.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={demoHref}>
                  Preview Cloud MLM platform
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={contactHref}>
                  Plan a rollout session
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="underline underline-offset-4">
                <Link href={companiesHref}>
                  See other companies
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              “Energetix combines innovative technology with natural healing principles to promote balance, energy, and
              well-being through every collection.”
            </p>
          </div>
          <aside className="space-y-6 rounded-3xl border border-primary/20 bg-background/90 p-8 shadow-xl dark:border-primary/15 dark:bg-slate-950/80">
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
                    <p className="text-xs text-muted-foreground">{metric.narrative}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Energetix energy pillars</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Anchor your consultant playbooks to what makes magnetic wellness compelling and credible.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {ENERGY_PILLARS.map((pillar) => {
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

      <section className="container space-y-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Collections at a glance</h2>
            <p className="text-sm text-muted-foreground">
              Equip stylists with curated stories for every line—highlighting benefits, emotions, and upsell paths.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {SIGNATURE_COLLECTIONS.map((collection) => {
              const Icon = collection.icon;
              return (
                <article
                  key={collection.name}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{collection.name}</h3>
                  <p className="text-sm font-medium text-primary">{collection.highlight}</p>
                  <p className="text-sm text-muted-foreground">{collection.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Programmes that sustain consultant momentum
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Layer immersive experiences, training depth, and automated care loops to keep communities active.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {FIELD_PROGRAMMES.map((programme) => (
            <article
              key={programme.title}
              className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75"
            >
              <h3 className="text-lg font-semibold text-foreground">{programme.title}</h3>
              <p className="text-sm text-muted-foreground">{programme.description}</p>
              <p className="text-xs font-medium text-primary">{programme.support}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-8 rounded-3xl border border-primary/20 bg-primary/5 p-8 dark:border-primary/15 dark:bg-primary/10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Cloud MLM Software enablement
            </h2>
            <p className="text-sm text-muted-foreground">
              Build a magnetic commerce engine with AI guidance, event orchestration, and compliance baked in.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href={demoHref}>
                  Launch a guided demo
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href={contactHref}>
                  Co-create the roadmap
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
                  <p className="text-xs font-medium text-primary">{item.result}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

