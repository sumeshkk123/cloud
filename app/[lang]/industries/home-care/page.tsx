import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  ClipboardCheck,
  HandHeart,
  Layers3,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Smartphone,
  UsersRound
} from "lucide-react";
import {
  HandsPraying,
  Heartbeat,
  Smiley,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  value: string;
  label: string;
  detail: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  description: string;
};

type Programme = {
  name: string;
  description: string;
  checklist: string[];
  icon: IconType;
};

type Feature = {
  title: string;
  description: string;
  icon: IconType;
};

type Step = {
  title: string;
  detail: string;
};

const CARE_METRICS: Metric[] = [
  {
    value: "98%",
    label: "family satisfaction",
    detail: "Automated feedback, service visibility, and tailored care plans elevate every interaction.",
    icon: Smiley
  },
  {
    value: "72 hrs",
    label: "to deploy new regions",
    detail: "Launch localised compensation, compliance, and caregiving workflows in a single sprint.",
    icon: MapPin
  },
  {
    value: "+43%",
    label: "caregiver retention",
    detail: "Mobile-first enablement, transparent payouts, and recognition programmes keep teams engaged.",
    icon: UsersThree
  }
];

const SERVICE_PILLARS: Pillar[] = [
  {
    title: "Quality at scale",
    description: "Maintain consistent standards across in-home visits, wellness checks, and subscription refills with automated workflows."
  },
  {
    title: "Compassionate experiences",
    description: "Blend human conversations with digital touchpoints to keep families informed and reassured."
  },
  {
    title: "Operational trust",
    description: "Deliver compliance-ready auditing, route optimisation, and inventory transparency across the network."
  }
];

const CARE_PROGRAMMES: Programme[] = [
  {
    name: "Resident wellness journeys",
    description: "Coordinate caregivers, nutrition programmes, and medication reminders with AI-assisted tasking.",
    checklist: [
      "Centralised care plans with permissions for family, nurses, and coordinators.",
      "Outcome dashboards tracking wellbeing metrics and visit follow-ups."
    ],
    icon: Heartbeat
  },
  {
    name: "Subscription replenishment",
    description: "Automate replenishment of essentials like hygiene kits, supplements, and mobility aids.",
    checklist: [
      "Predictive inventory alerts and supplier integrations.",
      "Self-service portals for customers to manage preferences and deliveries."
    ],
    icon: PackageCheck
  },
  {
    name: "Community ambassador network",
    description: "Mobilise advocates, nurses, and partner clinics to host events, screenings, and education sessions.",
    checklist: [
      "Customisable compensation across referrals, events, and subscription upgrades.",
      "CRM views combining attendee data, feedback, and upsell opportunities."
    ],
    icon: HandsPraying
  }
];

const ENABLEMENT_FEATURES: Feature[] = [
  {
    title: "Adaptive compensation studio",
    description: "Configure binary, matrix, or unilevel plans that reward quality scores, visit completion, and care miles travelled.",
    icon: HandHeart
  },
  {
    title: "Compliance guardian",
    description: "Digitise consent forms, health documentation, and licensing checks with full audit trails.",
    icon: ShieldCheck
  },
  {
    title: "Mobile caregiver workspace",
    description: "Provide scheduling, route optimisation, and care notes through an intuitive mobile experience.",
    icon: Smartphone
  },
  {
    title: "Family engagement hub",
    description: "Offer secure portals with visit updates, service history, and care team messaging.",
    icon: UsersRound
  },
  {
    title: "Inventory & logistics",
    description: "Track home care kits, medical equipment, and consumables with supplier integrations.",
    icon: Layers3
  },
  {
    title: "Data and insight fabric",
    description: "Visualise customer lifetime value, care outcomes, and expansion opportunities in context-aware dashboards.",
    icon: ClipboardCheck
  }
];

const LAUNCH_STEPS: Step[] = [
  {
    title: "Care blueprint discovery",
    detail: "Define service catalogue, regulatory landscape, and partner ecosystem with cross-functional stakeholders."
  },
  {
    title: "Experience design & prototyping",
    detail: "Map family, caregiver, and admin journeys; validate with interactive prototypes before automation."
  },
  {
    title: "Automation & enablement rollout",
    detail: "Connect CRM, HR, and logistics systems; activate compensation, learning paths, and reporting."
  },
  {
    title: "Optimise & expand",
    detail: "Monitor satisfaction, iterate incentives, and expand into new territories with insight-led experimentation."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Home Care Industry MLM Software";
  const description =
    "Deliver compassionate growth with Cloud MLM Software—caregiver enablement, subscription automation, and compliant compensation for home care brands.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/industries/home-care", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type HomeCarePageProps = {
  params: { lang: SupportedLocale };
};

export default function HomeCarePage({ params }: HomeCarePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-rose-50 via-white to-emerald-50 py-20 dark:border-border/40 dark:from-rose-950 dark:via-slate-950 dark:to-emerald-950/30">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(244,114,182,0.24),transparent_55%),radial-gradient(circle_at_82%_26%,rgba(167,243,208,0.22),transparent_60%),radial-gradient(circle_at_50%_88%,rgba(244,114,182,0.18),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="space-y-10">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                Home care excellence platform
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Cloud MLM Software for home care brands championing comfort and trust.
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground">
                Transform every visit, refill, and referral into a thoughtful experience with automation that empowers caregivers and reassures families.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Craft your care innovation roadmap
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref}>
                  Walk through the home care demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {CARE_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article key={metric.label} className="flex h-full flex-col gap-2 rounded-3xl border border-border/60 bg-background/70 p-5 shadow-sm backdrop-blur dark:border-border/40 dark:bg-slate-950/60">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <p className="text-xl font-semibold text-foreground">{metric.value}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{metric.label}</p>
                    <p className="text-sm text-muted-foreground">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="space-y-6 rounded-3xl border border-border/60 bg-background/70 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Leadership pillars</p>
            <div className="space-y-5">
              {SERVICE_PILLARS.map((pillar) => (
                <article key={pillar.title} className="rounded-2xl border border-border/60 bg-muted/30 p-5 dark:border-border/40 dark:bg-slate-900/40">
                  <h2 className="text-sm font-semibold text-foreground">{pillar.title}</h2>
                  <p className="mt-2 text-xs text-muted-foreground">{pillar.description}</p>
                </article>
              ))}
            </div>
            <Button asChild variant="ghost" className="w-full justify-between">
              <Link href={pricingHref}>
                Explore solution tiers
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Care programmes tailored to modern lifestyles</h2>
          <p className="text-sm text-muted-foreground">
            Align clinical excellence with heartfelt service by connecting care teams, distributors, and family advocates.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {CARE_PROGRAMMES.map((programme) => {
            const Icon = programme.icon;
            return (
              <article key={programme.name} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-foreground">{programme.name}</h3>
                  <p className="text-sm text-muted-foreground">{programme.description}</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {programme.checklist.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:border-border/30 dark:bg-slate-950/40">
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Enable every caregiver to deliver exceptional service</h2>
            <p className="text-sm text-muted-foreground">
              Harness modules engineered for health & wellness organisations, with governance and empathy woven together.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {ENABLEMENT_FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-emerald-100 p-8 shadow-sm dark:border-primary/40 dark:from-primary/20 dark:via-slate-950 dark:to-emerald-900/40">
          <div className="absolute -left-24 top-1/4 h-48 w-48 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 right-0 h-64 w-64 translate-y-1/3 rounded-full bg-emerald-200/30 blur-3xl dark:bg-emerald-900/30" aria-hidden />
          <div className="relative space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Implementation steps tailored to caregiver operations</h2>
            <p className="text-sm text-muted-foreground">
              Bring every department together with an execution rhythm that protects quality and accelerates growth.
            </p>
            <div className="space-y-3">
              {LAUNCH_STEPS.map((step, index) => (
                <div key={step.title} className="flex gap-4 rounded-3xl border border-border/60 bg-background/80 p-4 shadow-sm backdrop-blur dark:border-border/40 dark:bg-slate-950/60">
                  <span className="text-sm font-semibold text-primary">{String(index + 1).padStart(2, "0")}</span>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 p-10 text-white shadow-xl dark:border-border/40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_30%,rgba(16,185,129,0.28),transparent_58%),radial-gradient(circle_at_78%_20%,rgba(244,114,182,0.22),transparent_60%)]" aria-hidden />
          <div className="relative space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready to elevate every visit?</h2>
            <p className="text-sm text-slate-200">
              Share your service mix, regional priorities, and caregiver enablement goals. We will deliver a Cloud MLM Software playbook shaped around your mission.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="secondary">
                <Link href={contactHref}>
                  Speak with our home care strategists
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white/40 text-white hover:bg-white/10">
                <Link href={demoHref}>
                  Request the home care demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="space-y-3 rounded-3xl border border-white/30 bg-white/10 p-6 text-sm text-slate-200 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-wide text-white/80">Bring to the strategy session</p>
              <ul className="space-y-2">
                <li>• Service catalogue, quality metrics, and regional compliance details.</li>
                <li>• Technology stack, data flows, and integration priorities.</li>
                <li>• Growth targets, partnership plans, and caregiver experience goals.</li>
              </ul>
              <p className="text-xs text-slate-300">Receive a tailored roadmap, KPI framework, and enablement checklist within one business day.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
