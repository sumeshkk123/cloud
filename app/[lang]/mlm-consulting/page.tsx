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
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Compass,
  PenTool,
  PlugZap,
  ShieldCheck,
  Sparkles,
  UserCog
} from "lucide-react";
import { GearSix, GlobeHemisphereEast, RocketLaunch } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Pillar = {
  title: string;
  description: string;
  icon: IconType;
};

type Service = {
  title: string;
  detail: string;
  icon: IconType;
};

type PlaybookStep = {
  title: string;
  description: string;
  icon: IconType;
};

const PILLARS: Pillar[] = [
  {
    title: "Strategic blueprint",
    description:
      "Consultants decode your market, evaluate existing assets, and map the growth model that fits your ambition.",
    icon: Compass
  },
  {
    title: "Technology enablement",
    description:
      "Pair business goals with Cloud MLM Software’s capabilities—automation, analytics, and integrations included.",
    icon: Sparkles
  },
  {
    title: "Ongoing optimisation",
    description:
      "We keep iterating on compensation, compliance, and adoption so momentum never stalls.",
    icon: ShieldCheck
  }
];

const SERVICES: Service[] = [
  {
    title: "Compensation plan engineering",
    detail: "Design motivating, compliant structures that balance acquisition, retention, and profitability.",
    icon: PenTool
  },
  {
    title: "Platform and third-party integrations",
    detail: "Connect payment gateways, e-commerce stacks, CRMs, and mobile apps for a seamless ecosystem.",
    icon: PlugZap
  },
  {
    title: "Automation and analytics",
    detail: "Build workflows, dashboards, and KPIs that keep leadership informed and the field inspired.",
    icon: BarChart3
  },
  {
    title: "Global expansion advisory",
    detail: "Localise plans, taxation, and compliance so you can scale across borders with confidence.",
    icon: GlobeHemisphereEast
  }
];

const PLAYBOOK: PlaybookStep[] = [
  {
    title: "Discover and benchmark",
    description: "Workshop your current state, analyse competitor approaches, and capture high-impact opportunities.",
    icon: UserCog
  },
  {
    title: "Architect and validate",
    description: "Co-create compensation models, operational workflows, and system requirements. Stress-test before we deploy.",
    icon: GearSix
  },
  {
    title: "Launch and accelerate",
    description: "Support go-live, train teams, and activate optimisation cycles tied to measurable KPIs.",
    icon: RocketLaunch
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Consulting";
  const description =
    "Partner with Cloud MLM Software consultants for plan design, integrations, and growth strategies tailored to your MLM business.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-consulting", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MlmConsultingPageProps = {
  params: { lang: SupportedLocale };
};

export default function MlmConsultingPage({ params }: MlmConsultingPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const servicesHref = buildLocalizedPath("/services", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 py-20 dark:from-slate-950 dark:via-slate-950 dark:to-emerald-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_18%,rgba(99,102,241,0.18),transparent_48%),radial-gradient(circle_at_82%_20%,rgba(16,185,129,0.18),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.6fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              Advisory for high-growth MLM brands
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Consulting that aligns vision, compensation, and technology.
            </h1>
            <p className="text-base text-muted-foreground">
              Achieve MLM success with expert guidance. Our consultants design, implement, and optimise strategies that combine resilient compensation plans with the Cloud MLM Software platform, ensuring every initiative is measurable and scalable.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Book a strategy call
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={servicesHref}>
                  Review service catalog
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article key={pillar.title} className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-muted/30 p-4 dark:bg-slate-900/40">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-sm font-semibold text-foreground">{pillar.title}</h2>
                  </div>
                  <p className="text-xs text-muted-foreground">{pillar.description}</p>
                </article>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Consulting services tailored to your roadmap</h2>
          <p className="text-sm text-muted-foreground">
            Each engagement blends strategic insight with hands-on platform expertise so teams can execute with confidence.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Our consulting playbook</h2>
            <p className="text-sm text-muted-foreground">
              Navigate every stage of transformation with a proven sequence that keeps stakeholders aligned.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {PLAYBOOK.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/5 via-background to-emerald-50 p-10 shadow-sm dark:border-primary/60 dark:from-primary/10 dark:via-slate-950 dark:to-emerald-950/40">
          <div className="absolute -left-16 -top-14 h-48 w-48 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 right-0 h-60 w-60 translate-y-1/3 rounded-full bg-sky-200/25 blur-3xl dark:bg-sky-900/30" aria-hidden />
          <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Schedule your consulting assessment</h2>
              <p className="text-sm text-muted-foreground">
                Share your product categories, regions, and transformation goals. We’ll prepare a readiness brief outlining quick wins and long-term investments.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/40 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/50 dark:bg-slate-950/60">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Request tailored guidance</h3>
                <p className="text-sm text-muted-foreground">
                  Expect follow-up within one business day with agenda options and the information we’ll need to get started.
                </p>
              </div>
              <Button asChild>
                <Link href={contactHref}>
                  Request consultation
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
