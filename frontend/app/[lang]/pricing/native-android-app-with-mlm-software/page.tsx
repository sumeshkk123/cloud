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
  Android,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BatteryCharging,
  Fingerprint,
  LineChart,
  Radio,
  Sparkles
} from "lucide-react";
import {
  Bell,
  ChatCenteredDots,
  DeviceMobile,
  Lightning,
  QRCode,
  RocketLaunch,
  ShieldCheckered
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  title: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Feature = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Package = {
  name: string;
  price: string;
  description: string;
  bestFor: string;
  highlights: string[];
  icon: IconType;
};

type Timeline = {
  title: string;
  duration: string;
  summary: string;
  outputs: string[];
  icon: IconType;
};

type Showcase = {
  title: string;
  detail: string;
};

type Faq = {
  question: string;
  answer: string;
};

const HERO_METRICS: Metric[] = [
  {
    title: "Launch timeline",
    value: "12 weeks",
    detail: "Concept to Google Play and private distribution readiness.",
    icon: RocketLaunch
  },
  {
    title: "Active user retention",
    value: "33%",
    detail: "Average uplift in DAU after mobile-first onboarding rolls out.",
    icon: LineChart
  },
  {
    title: "Offline sync reliability",
    value: "99.7%",
    detail: "Background sync success rate across challenging connectivity markets.",
    icon: Radio
  },
  {
    title: "Security compliance",
    value: "100%",
    detail: "Apps aligned with SOC 2, GDPR, and regional privacy requirements.",
    icon: Fingerprint
  }
];

const FEATURES: Feature[] = [
  {
    title: "Field engagement cockpit",
    description:
      "Deliver mission-critical analytics, onboarding, and collaboration features built around distributor workflows.",
    bullets: [
      "Progress dashboards aligned to ranks and incentives",
      "Guided onboarding, training videos, and playbooks",
      "Team messaging with compliance-friendly moderation"
    ],
    icon: DeviceMobile
  },
  {
    title: "Commerce-ready experiences",
    description:
      "Enable mobile enrolment, ordering, and payments that mirror your Magento or custom storefronts.",
    bullets: [
      "SKU catalogue with dynamic pricing, taxes, and inventory",
      "Cart, checkout, and wallet top-ups with tokenised payments",
      "QR and social share kits for promotions and sampling"
    ],
    icon: QRCode
  },
  {
    title: "Operations and support",
    description:
      "Keep leadership confident with security, observability, and update pipelines purpose-built for native Android.",
    bullets: [
      "Biometric login, device binding, and compliance messaging",
      "Crash analytics, performance monitoring, and release automation",
      "In-app support routing with knowledge base integration"
    ],
    icon: ShieldCheckered
  }
];

const PACKAGES: Package[] = [
  {
    name: "Launch edition",
    price: "$38k fixed",
    description: "Core mobile experience that mirrors your Cloud MLM Software portal.",
    bestFor: "Organisations launching their first native Android app.",
    highlights: [
      "Brand system, UX, and component library built for Android",
      "Offline-ready enrolment, ordering, and dashboards",
      "Analytics instrumentation and Firebase distribution setup"
    ],
    icon: Android
  },
  {
    name: "Growth edition",
    price: "$52k fixed",
    description: "Layer automation, personalisation, and engagement programmes on top of the core experience.",
    bestFor: "Scaling brands with multi-market field teams.",
    highlights: [
      "Hyper-personalised journeys powered by behavioural data",
      "Automation for notifications, campaigns, and event triggers",
      "Multilingual content and dynamic segmentation controls"
    ],
    icon: Lightning
  },
  {
    name: "Enterprise edition",
    price: "Custom engagement",
    description: "Advanced governance, integrations, and experimentation to support global enterprises.",
    bestFor: "Highly regulated or multi-brand organisations.",
    highlights: [
      "Mobile PMO with release, security, and compliance workflows",
      "Custom integrations (learning, payments, logistics, AI copilots)",
      "Dedicated optimisation squad with experimentation backlog"
    ],
    icon: Sparkles
  }
];

const TIMELINE: Timeline[] = [
  {
    title: "Product alignment",
    duration: "Weeks 1-3",
    summary: "Vision workshops, user journey mapping, and success metrics agreed across leadership and field.",
    outputs: [
      "Experience blueprint and feature prioritisation",
      "Technical architecture and integration map",
      "Release plan with MVP + roadmap milestones"
    ],
    icon: BadgeCheck
  },
  {
    title: "Design & engineering",
    duration: "Weeks 4-8",
    summary: "Design system creation, native development, and API integration with Cloud MLM Software.",
    outputs: [
      "Figma library + Android component kit",
      "Automated build pipelines with QA suites",
      "Beta release for stakeholder testing"
    ],
    icon: BatteryCharging
  },
  {
    title: "Launch & hypercare",
    duration: "Weeks 9-12",
    summary: "Public launch, enablement, and optimisation loops fueled by analytics and feedback.",
    outputs: [
      "Google Play submission + enterprise distribution",
      "Field enablement content and launch communications",
      "Post-launch analytics, experiment backlog, and support plan"
    ],
    icon: Bell
  }
];

const SHOWCASES: Showcase[] = [
  {
    title: "Offline-first design",
    detail: "Auto-sync content, orders, and messaging in the background so distributors stay productive between connections."
  },
  {
    title: "Automation at the edge",
    detail: "Trigger push, SMS, or in-app journeys based on rank milestones, inventory updates, or compliance alerts."
  },
  {
    title: "Future-ready foundation",
    detail: "Architecture supports wearables, Android TV, and AI copilots without costly rebuilds."
  }
];

const FAQS: Faq[] = [
  {
    question: "Do we need separate infrastructure for the mobile app?",
    answer:
      "No. The app connects to Cloud MLM Software APIs and your existing integrations. We configure secure gateways and caching layers tailored to mobile usage patterns."
  },
  {
    question: "Can we reuse our web portal branding?",
    answer:
      "Yes. We extend your design language into Material-compliant patterns, ensuring the app feels native while staying on-brand."
  },
  {
    question: "How are updates and releases managed?",
    answer:
      "Release pipelines include automated QA, staged rollouts, and instant rollback capabilities. We provide playbooks for weekly or monthly cadence depending on your needs."
  },
  {
    question: "What analytics are included?",
    answer:
      "Every package ships with product analytics, crash reporting, and cohort dashboards linked to compensation KPIs so leadership can measure impact."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Native Android App with Cloud MLM Software Pricing";
  const description =
    "Review pricing, roadmap, and features for Cloud MLM Software’s native Android app. Launch mobile experiences that drive distributor productivity and compliance.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/pricing/native-android-app-with-mlm-software", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type NativeAndroidAppPageProps = {
  params: { lang: SupportedLocale };
};

export default function NativeAndroidAppPage({ params }: NativeAndroidAppPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-emerald-500 via-slate-900 to-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(56,189,248,0.28),transparent_40%),radial-gradient(circle_at_80%_25%,rgba(74,222,128,0.25),transparent_55%),linear-gradient(135deg,rgba(21,128,61,0.8) 0%,rgba(15,23,42,1) 60%)]" aria-hidden />
        <div className="container relative grid gap-16 py-24 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.58fr)]">
          <div className="space-y-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold text-emerald-200">
              Mobile-first MLM experiences
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Native Android app pricing to accelerate field performance.
            </h1>
            <p className="max-w-xl text-base text-slate-100/80">
              Cloud MLM Software delivers a native Android experience that keeps distributors in sync, on brand, and revenue-focused. We handle product strategy, engineering, security, and enablement so your team can launch with confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link href={contactHref}>
                  Book a mobile strategy session
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                <Link href={demoHref}>
                  View Android demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {HERO_METRICS.map((metric) => {
              const Icon = metric.icon;
              return (
                <article key={metric.title} className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200/80">{metric.title}</p>
                    <p className="mt-1 text-2xl font-semibold">{metric.value}</p>
                  </div>
                  <p className="text-sm text-slate-100/70">{metric.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Features purpose-built for Android</h2>
          <p className="text-sm text-muted-foreground">
            Each capability is engineered for low-latency performance, offline resilience, and compliance. Your mobile ecosystem stays as flexible and governed as the core Cloud MLM Software platform.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:bg-slate-950/70">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:bg-slate-950/40">
        <div className="container space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Choose the edition that matches your ambition</h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
              Whether you need a focused MVP or a global enterprise rollout, we align pricing with features, integrations, and enablement scope.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {PACKAGES.map((pkg) => {
              const Icon = pkg.icon;
              return (
                <article key={pkg.name} className="flex h-full flex-col gap-5 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <span className="text-sm font-semibold text-primary">{pkg.price}</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground">{pkg.description}</p>
                  </div>
                  <div className="rounded-2xl border border-border/40 bg-muted/40 p-3 text-xs font-semibold uppercase tracking-wide text-primary/80 dark:bg-slate-900/60">
                    {pkg.bestFor}
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {pkg.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline">
                    <Link href={contactHref}>
                      Discuss this package
                      <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                    </Link>
                  </Button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">12-week delivery blueprint</h2>
          <p className="text-sm text-muted-foreground">
            Structured delivery keeps stakeholders aligned and ensures every release meets quality, security, and adoption goals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TIMELINE.map((stage) => {
            const Icon = stage.icon;
            return (
              <article key={stage.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary/80">{stage.duration}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{stage.title}</h3>
                <p className="text-sm text-muted-foreground">{stage.summary}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {stage.outputs.map((output) => (
                    <li key={output} className="flex items-start gap-2">
                      <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      <span>{output}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/40 py-20 dark:bg-slate-950/50">
        <div className="container space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Why leaders choose Cloud MLM Software for Android</h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
              Our mobile team couples product strategy with deep Cloud MLM Software expertise so you launch faster without compromising compliance or quality.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {SHOWCASES.map((showcase) => (
              <article key={showcase.title} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
                <h3 className="text-base font-semibold text-foreground">{showcase.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{showcase.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground">Product, engineering, and compliance leaders ask these before kick-off.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {FAQS.map((faq) => (
            <article key={faq.question} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
              <h3 className="text-base font-semibold text-foreground">{faq.question}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/20 via-background to-emerald-100 p-10 shadow-sm dark:border-primary/50 dark:from-primary/25 dark:via-slate-950 dark:to-emerald-950/40">
          <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl dark:bg-primary/30" aria-hidden />
          <div className="absolute bottom-0 right-0 h-48 w-48 translate-y-1/3 rounded-full bg-emerald-200/30 blur-3xl dark:bg-emerald-900/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to empower your distributors on Android?</h2>
              <p className="text-sm text-muted-foreground">
                Share your launch goals, integrations, and timelines. We’ll prepare a tailored proposal and roadmap that keeps every stakeholder aligned.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/30 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/45 dark:bg-slate-950/70">
              <p className="text-sm text-muted-foreground">
                Expect a discovery agenda and prototype ideas within one business day. We remain embedded from kickoff through optimisation.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={contactHref}>
                    Schedule consultation
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={demoHref}>
                    Explore Android demo
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
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
