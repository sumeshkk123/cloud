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
  Activity,
  AppWindow,
  ArrowUpRight,
  Bot,
  Compass,
  GaugeCircle,
  Globe2,
  Layers,
  MessageSquare,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users2,
  Workflow
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Stat = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Benefit = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Module = {
  title: string;
  description: string;
  icon: IconType;
  bullets: string[];
};

type WorkflowStep = {
  title: string;
  description: string;
  icon: IconType;
};

type AiEnhancement = {
  year: string;
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type UseCase = {
  title: string;
  narrative: string;
  metric: string;
  icon: IconType;
};

type Faq = {
  question: string;
  answer: string;
};

const HERO_STATS: Stat[] = [
  {
    label: "Active mobile users",
    value: "240K+",
    detail: "Distributors and customers engaging through Cloud MLM mobile experiences each month.",
    icon: Smartphone
  },
  {
    label: "Languages supported",
    value: "36",
    detail: "Native localisation packs covering priority global markets.",
    icon: Globe2
  },
  {
    label: "Release cadence",
    value: "4 weeks",
    detail: "Continuous delivery cycle shipping enhancements without downtime.",
    icon: Rocket
  },
  {
    label: "AI copilots live",
    value: "2025",
    detail: "In-app assistants recommend next best actions across field and support journeys.",
    icon: Sparkles
  }
];

const BENEFITS: Benefit[] = [
  {
    title: "Designed for global field momentum",
    description:
      "Give distributors the tools to enrol, train, and support on any device with offline resilience and localisation control.",
    icon: Users2,
    bullets: [
      "Dynamic onboarding flows tailored to role, rank, and language",
      "Offline cache with smart resync so field teams stay productive on the go",
      "Push campaigns triggered by promotions, product drops, or compliance alerts"
    ]
  },
  {
    title: "Operations-grade security & governance",
    description:
      "Mobile experiences inherit enterprise policies so compliance, IT, and finance teams remain aligned.",
    icon: ShieldCheck,
    bullets: [
      "Device posture, biometrics, and adaptive MFA baked into the app",
      "Secure e-wallet, payouts, and document vault with regional retention",
      "Role-based feature toggles for corporate, leaders, and frontline sellers"
    ]
  },
  {
    title: "AI guidance inside every journey",
    description:
      "Copilots and signals surface the right insight for success coaches, service desks, and the field.",
    icon: Bot,
    bullets: [
      "Conversational prompts summarise team health and urgent tasks",
      "Predictive alerts highlight churn risk and offer recovery playbooks",
      "Auto-generated recap notes sync back to CRM, LMS, and analytics"
    ]
  }
];

const CORE_MODULES: Module[] = [
  {
    title: "Distributor cockpit",
    description:
      "Daily scorecards, genealogy snapshots, and replicated storefronts delivered through a sleek interface.",
    icon: Layers,
    bullets: [
      "Rank tracker with real-time qualification gaps",
      "Personal storefront editor synced with corporate product launches",
      "Quick actions for enrolments, orders, and support tickets"
    ]
  },
  {
    title: "Customer experience",
    description:
      "Shoppable journeys, loyalty wallets, and support chat keep customers close to the brand.",
    icon: MessageSquare,
    bullets: [
      "Personalised offers and autoship controls",
      "In-app support powered by AI triage and live agents",
      "Loyalty wallets connecting rewards, vouchers, and referrals"
    ]
  },
  {
    title: "Leadership command centre",
    description:
      "Regional directors and corporate teams monitor field health, campaign ROI, and compliance on mobile dashboards.",
    icon: GaugeCircle,
    bullets: [
      "Heatmaps and cohort insights for every market",
      "Approval workflows for incentives, price changes, and communications",
      "Voice summaries deliver board-ready updates in seconds"
    ]
  }
];

const WORKFLOW: WorkflowStep[] = [
  {
    title: "Blueprint",
    description:
      "Collaborate with Cloud MLM analysts to map journeys, integrations, and governance requirements before configuration.",
    icon: Compass
  },
  {
    title: "Launch",
    description:
      "Deploy white-labelled iOS and Android apps with automated store submissions, beta rings, and analytics dashboards.",
    icon: AppWindow
  },
  {
    title: "Engage",
    description:
      "Run campaigns, training, and support from one control plane with AI nudges and A/B experiments.",
    icon: Activity
  },
  {
    title: "Scale",
    description:
      "Extend to new markets, partners, and channels with localisation packs, APIs, and compliance presets.",
    icon: Workflow
  }
];

const AI_ENHANCEMENTS: AiEnhancement[] = [
  {
    year: "2025",
    title: "Mobile copilots",
    description:
      "Conversational copilots inside the app answer questions, escalate anomalies, and draft updates for leaders.",
    icon: Bot,
    bullets: [
      "Ask for enrolment health, order trends, or payout status in natural language",
      "Copilot alerts highlight unusual churn or stockouts before they spread",
      "One-tap actions push suggested follow-ups to the right teams"
    ]
  },
  {
    year: "2024",
    title: "Telemetry & experimentation",
    description:
      "Feature flags, synthetic data, and real-time observability hardened the platform for AI-native execution.",
    icon: Activity,
    bullets: [
      "Shadow deployments validate new features without disrupting the field",
      "Streaming analytics feed predictive retention and revenue models",
      "Experiment manager compares onboarding flows, messaging, and incentives"
    ]
  }
];

const USE_CASES: UseCase[] = [
  {
    title: "Hypergrowth launch playbooks",
    narrative: "Scaled a wellness brand across 14 countries with consistent onboarding and 52% faster rank advancement.",
    metric: "Global wellness client",
    icon: Rocket
  },
  {
    title: "Hybrid retail + field operations",
    narrative: "Enabled store associates and distributors to collaborate, sharing inventory and KPIs inside one app.",
    metric: "Consumer goods enterprise",
    icon: Layers
  },
  {
    title: "AI-driven coaching",
    narrative: "Success coaches now receive copilot briefings that cut prep time by 70% while raising retention by 11%.",
    metric: "Digital services provider",
    icon: Bot
  }
];

const FAQS: Faq[] = [
  {
    question: "Is the mobile app available for both iOS and Android?",
    answer:
      "Yes. We publish white-labelled builds to the App Store and Google Play, manage certificates, and automate release rings so updates rollout safely."
  },
  {
    question: "How do offline capabilities work?",
    answer:
      "Critical modules cache data securely on-device. When connectivity returns, the app synchronises orders, enrolments, and support notes with conflict resolution."
  },
  {
    question: "Can the app integrate with my existing systems?",
    answer:
      "Our API and webhook framework connects to ERP, CRM, LMS, payment gateways, and analytics tools. Prebuilt connectors accelerate most enterprise scenarios."
  },
  {
    question: "How long does implementation take?",
    answer:
      "Most organisations launch sandbox apps in weeks. Corporate styling, localisation, and governance presets typically complete in 6–10 weeks depending on integrations."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Cloud MLM Mobile App";
  const description =
    "Deliver AI-assisted mobile experiences for distributors, leaders, and customers with the Cloud MLM Software mobile app.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/cloud-mlm-mobile-app", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type CloudMobileAppPageProps = {
  params: { lang: SupportedLocale };
};

export default function CloudMobileAppPage({ params }: CloudMobileAppPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";
  const resourcesHref = buildLocalizedPath("/resources", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-24 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(56,189,248,0.18),transparent_42%),radial-gradient(circle_at_90%_-10%,rgba(16,185,129,0.18),transparent_55%)]" />
        <div className="container space-y-12">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <Smartphone className="h-4 w-4" aria-hidden />
              Enterprise mobile operations
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Empower every distributor with AI-ready mobile tools built for global growth.
            </h1>
            <p className="text-lg text-muted-foreground">
              Cloud MLM Software’s mobile app delivers enrolment, commerce, coaching, and compliance in one curated experience. Launch fast, adapt to new markets, and keep leaders informed with live insights wherever they work.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Request a mobile strategy session
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                  Explore the live demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href={resourcesHref}>
                  Review enablement resources
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <dl className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {HERO_STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <dt className="mt-4 text-sm font-medium text-muted-foreground">{stat.label}</dt>
                  <dd className="mt-1 text-2xl font-semibold text-foreground">{stat.value}</dd>
                  <p className="mt-2 text-xs text-muted-foreground">{stat.detail}</p>
                </div>
              );
            })}
          </dl>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Built to delight the field and reassure the enterprise</h2>
          <p className="text-sm text-muted-foreground">
            Every release is co-created with analysts, compliance teams, and field leaders so your programme keeps winning wherever it operates.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article key={benefit.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {benefit.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <ShieldCheck className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Modules that power modern mobile MLM programmes</h2>
            <p className="text-sm text-muted-foreground">
              Explore the core components you will experience inside the Cloud MLM mobile app demo.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {CORE_MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <article key={module.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-foreground">{module.title}</h3>
                  <p className="text-sm text-muted-foreground">{module.description}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {module.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <ShieldCheck className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">A delivery workflow proven across global brands</h2>
          <p className="text-sm text-muted-foreground">
            From blueprint to scale, our team guides every phase so you launch with confidence and evolve quickly.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {WORKFLOW.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-background py-20">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">From experimentation to AI-native excellence</h2>
            <p className="text-sm text-muted-foreground">
              Understand how 2024 observability investments unlocked 2025 mobile copilots.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {AI_ENHANCEMENTS.map((entry) => {
              const Icon = entry.icon;
              return (
                <article key={entry.year} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">{entry.year}</p>
                      <h3 className="text-lg font-semibold text-foreground">{entry.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{entry.description}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <ShieldCheck className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Where the mobile app delivers measurable outcomes</h2>
          <p className="text-sm text-muted-foreground">
            Real programmes using Cloud MLM mobile experiences to accelerate growth and governance.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {USE_CASES.map((useCase) => {
            const Icon = useCase.icon;
            return (
              <article key={useCase.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground">{useCase.narrative}</p>
                <p className="text-xs uppercase tracking-wide text-primary">{useCase.metric}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
            <p className="text-sm text-muted-foreground">
              Clarity for leaders planning mobile-first MLM operations.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {FAQS.map((faq) => (
              <article key={faq.question} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-10 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Take your field mobile in record time</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Partner with Cloud MLM Software to configure, launch, and optimise an AI-assisted mobile experience tailored to your compensation model.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Book a mobile readiness workshop
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                View the mobile demo
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
