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
  Building2,
  AreaChart,
  Cloud,
  Layers3,
  ShieldCheck,
  SignalHigh,
  Sparkles,
  Users,
  Wallet
} from "lucide-react";
import {
  Cpu,
  DeviceMobileCamera,
  GlobeHemisphereEast,
  Handshake,
  Lightning,
  MapPinLine
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Priority = {
  title: string;
  description: string;
  icon: IconType;
};

type Option = {
  title: string;
  description: string;
  icon: IconType;
  cta: {
    label: string;
    href: string;
  };
};

type Feature = {
  title: string;
  summary: string;
  icon: IconType;
};

const MARKET_PRIORITIES: Priority[] = [
  {
    title: "Local economic readiness",
    description:
      "Support Afghanistan-based distributors with Dari and Pashto interfaces, mobile-friendly portals, and offline-friendly workflows for remote regions.",
    icon: MapPinLine
  },
  {
    title: "Trusted financial rails",
    description:
      "Automate commission cycles with support for regional payment providers, mobile wallets, and FX reconciliation for cross-border teams.",
    icon: Wallet
  },
  {
    title: "Resilient infrastructure",
    description:
      "Choose secure cloud hosting or self-hosted deployments with redundancy and audit trails to satisfy local regulatory expectations.",
    icon: ShieldCheck
  }
];

const DEPLOYMENT_OPTIONS: Option[] = [
  {
    title: "Cloud-managed platform",
    description:
      "We manage uptime, security patches, and performance tuning from our global infrastructure so your team focuses on growth, not maintenance.",
    icon: Cloud,
    cta: { label: "Connect now", href: "#contact-afghanistan" }
  },
  {
    title: "Self-hosted freedom",
    description:
      "Receive a hardened source package with deployment playbooks and training. Ideal for enterprises with government or financial compliance requirements.",
    icon: Layers3,
    cta: { label: "Explore handover", href: "#deployment" }
  },
  {
    title: "Plan-agnostic flexibility",
    description:
      "Launch with binary, unilevel, monoline, or hybrid compensation structures—plus unlimited custom plan templates for future programmes.",
    icon: Users,
    cta: { label: "See plan library", href: "#plan-library" }
  }
];

const AI_FEATURES: Feature[] = [
  {
    title: "Predictive growth modelling",
    summary:
      "AI-assisted simulations estimate enrolment velocity, rank progression, and payout exposure across your Afghan and diaspora networks.",
    icon: SignalHigh
  },
  {
    title: "Automated engagement",
    summary:
      "Smart journeys nurture distributors with multilingual prompts, WhatsApp-ready assets, and mobile push campaigns aligned to incentives.",
    icon: Lightning
  },
  {
    title: "Data-driven governance",
    summary:
      "Anomaly detection protects against compliance breaches while dashboards surface product, region, and team performance in real time.",
    icon: AreaChart
  }
];

const ASSURANCES: Feature[] = [
  {
    title: "Enterprise security",
    summary: "Role-based access, encryption at rest, and continuous monitoring keep sensitive genealogy and payment data protected.",
    icon: ShieldCheck
  },
  {
    title: "Local onboarding",
    summary: "Dedicated project managers orchestrate requirements workshops, localisation, and training alongside your leadership team.",
    icon: Handshake
  },
  {
    title: "Mobile-first delivery",
    summary: "Native iOS, Android, and responsive web apps keep distributors productive even with low bandwidth.",
    icon: DeviceMobileCamera
  },
  {
    title: "Analytics for every role",
    summary: "Executive, finance, and field dashboards provide instant visibility into KPIs, promotions, and inventory health.",
    icon: Sparkles
  },
  {
    title: "Integration fabric",
    summary: "Connect ERPs, payment gateways, SMS providers, and logistics partners through secure APIs and webhooks.",
    icon: Cpu
  },
  {
    title: "24/5 multilingual care",
    summary: "Support engineers and success teams respond in English, Dari, and Pashto via chat, email, and voice.",
    icon: Building2
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Network Marketing Software in Afghanistan";
  const description =
    "Deploy affordable, enterprise-grade MLM software tailored for Afghanistan with Cloud MLM Software’s secure, multilingual platform.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath(
        "/network-marketing-software-company-providing-affordable-mlm-system-in-afghanistan",
        locale
      )
    },
    openGraph: {
      title,
      description
    }
  };
}

type AfghanistanPageProps = {
  params: { lang: SupportedLocale };
};

export default function AfghanistanPage({ params }: AfghanistanPageProps) {
  const locale = resolveLocale(params.lang);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(56,189,248,0.28),transparent_55%),radial-gradient(circle_at_82%_22%,rgba(16,185,129,0.25),transparent_55%),radial-gradient(circle_at_68%_78%,rgba(191,219,254,0.18),transparent_60%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/50 bg-emerald-400/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-emerald-100">
              Afghanistan expansion partner
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              Launch and scale network marketing in Afghanistan with resilient, affordable technology.
            </h1>
            <p className="max-w-2xl text-base text-emerald-50/85">
              Cloud MLM Software blends localisation, payment integrations, and AI-driven automation to help Afghan direct selling brands and international entrants grow with confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={demoHref}>
                  Explore the Afghan demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-emerald-200/70 text-emerald-100 hover:bg-emerald-400/10"
              >
                <Link href={pricingHref}>
                  Review pricing options
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative space-y-5 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
            <div className="absolute -right-12 -top-10 h-40 w-40 rounded-full bg-emerald-400/40 blur-3xl" aria-hidden />
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/80">
              <span>Go-live confidence</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold">
                <GlobeHemisphereEast className="h-3.5 w-3.5" aria-hidden />
                Kabul • Mazar • Dubai
              </span>
            </div>
            <div className="grid gap-4 rounded-2xl border border-white/20 bg-slate-950/40 p-4 text-sm text-slate-100/80">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-semibold text-white">
                  <Lightning className="h-4 w-4" aria-hidden />
                  Average deployment timeline
                </span>
                <span>45 days</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-semibold text-white">
                  <Users className="h-4 w-4" aria-hidden />
                  Pilot distributor cohort
                </span>
                <span>150 leaders</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-semibold text-white">
                  <Wallet className="h-4 w-4" aria-hidden />
                  Payment channels
                </span>
                <span>8 connected</span>
              </div>
            </div>
            <p className="text-xs text-emerald-50/80">
              Tailored advisory keeps your compensation launch, mobile roll-out, and compliance programme aligned to Afghan market dynamics.
            </p>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            What Afghan expansion leaders prioritise
          </h2>
          <p className="text-sm text-muted-foreground">
            These pillars ensure your direct selling brand accelerates distributor adoption while maintaining financial discipline.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {MARKET_PRIORITIES.map((priority) => {
            const Icon = priority.icon;
            return (
              <article
                key={priority.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{priority.title}</h3>
                <p className="text-sm text-muted-foreground">{priority.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="deployment" className="border-y border-border/60 bg-muted/30 py-20 dark:bg-slate-950/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Choose the deployment model that matches your governance requirements
            </h2>
            <p className="text-sm text-muted-foreground">
              Maintain flexibility without sacrificing feature velocity. Every option includes implementation playbooks, training, and dedicated success resources.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {DEPLOYMENT_OPTIONS.map((option) => {
              const Icon = option.icon;
              return (
                <article
                  key={option.title}
                  className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
                >
                  <div className="space-y-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">{option.title}</h3>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </div>
                  <Button asChild variant="link" className="px-0 text-primary">
                    <Link href={option.cta.href}>
                      {option.cta.label}
                      <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                    </Link>
                  </Button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12" id="plan-library">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              AI acceleration
            </span>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              AI-driven automation keeps your Afghan network energised
            </h2>
            <p className="text-sm text-muted-foreground">
              Data-backed insights, automated outreach, and intelligent alerts help leadership focus on strategic initiatives rather than firefighting.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {AI_FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article
                    key={feature.title}
                    className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-center shadow-sm"
                  >
                    <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground">{feature.summary}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <aside className="relative space-y-6 overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 via-background to-emerald-50 p-8 shadow-sm dark:from-primary/15 dark:via-slate-950 dark:to-emerald-900/30">
            <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-primary/20 blur-3xl" aria-hidden />
            <div className="absolute bottom-0 right-0 h-52 w-52 translate-y-1/3 rounded-full bg-emerald-200/30 blur-3xl dark:bg-emerald-900/30" aria-hidden />
            <div className="relative space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/40 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm dark:bg-slate-950/50">
                <Sparkles className="h-4 w-4" aria-hidden />
                AI + human partnership
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Strategy labs combine AI findings with field insights to craft actionable playbooks every quarter.
              </h3>
              <p className="text-sm text-muted-foreground">
                Marketing calendars, recognition campaigns, and retention programmes evolve with real-time market feedback.
              </p>
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Book an acceleration workshop
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:bg-slate-950/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Confidence from discovery to nationwide expansion
            </h2>
            <p className="text-sm text-muted-foreground">
              Our proven methodology de-risks implementation while equipping your teams to run and scale independently.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {ASSURANCES.map((assurance) => {
              const Icon = assurance.icon;
              return (
                <article
                  key={assurance.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{assurance.title}</h3>
                  <p className="text-sm text-muted-foreground">{assurance.summary}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact-afghanistan" className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 via-background to-slate-100 p-10 shadow-sm dark:from-primary/15 dark:via-slate-950 dark:to-slate-900">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/3 translate-y-1/3 rounded-full bg-emerald-200/30 blur-3xl dark:bg-emerald-900/30" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to build Afghanistan’s next-generation direct selling leader?
              </h2>
              <p className="text-sm text-muted-foreground">
                Share your goals, compensation plans, and launch timelines. We will align an implementation roadmap, success metrics, and investment profile tailored to Afghanistan.
              </p>
            </div>
            <div className="grid gap-3 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-sm dark:border-primary/30 dark:bg-slate-950/70">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Implementation phases</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-primary">
                  <Layers3 className="h-3.5 w-3.5" aria-hidden />
                  4 sprints
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Included enablement</span>
                <span className="font-semibold text-foreground">24 training modules</span>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Support window</span>
                <span className="font-semibold text-foreground">12 months concierge</span>
              </div>
              <Button asChild>
                <Link href={contactHref}>
                  Start the conversation
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
