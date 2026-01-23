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
  BadgeCheck,
  Database,
  Globe2,
  Layers,
  LineChart,
  LockKeyhole,
  ShieldCheck,
  Wallet
} from "lucide-react";
import {
  CloudArrowUp,
  CloudCheck,
  FingerprintSimple,
  MagicWand,
  ShieldStar
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroFeature = {
  title: string;
  description: string;
  icon: IconType;
};

type SecurityLayer = {
  title: string;
  summary: string;
  points: string[];
  icon: IconType;
};

type AutomationCapability = {
  title: string;
  description: string;
  insights: string[];
  icon: IconType;
};

type ResiliencePattern = {
  label: string;
  detail: string;
};

type ReadinessStep = {
  title: string;
  description: string;
};

const HERO_FEATURES: HeroFeature[] = [
  {
    title: "Proactive defence posture",
    description: "Rate-limited APIs, captcha gates, and anomaly rules stop automated threats before they touch your data.",
    icon: ShieldCheck
  },
  {
    title: "Verified identities everywhere",
    description: "Two-step verifications, biometric add-ons, and contextual login policies protect every distributor journey.",
    icon: FingerprintSimple
  },
  {
    title: "Audit-ready operations",
    description: "Immutable logs, KYC workflows, and payout trails keep regulators and leadership aligned.",
    icon: BadgeCheck
  }
];

const SECURITY_LAYERS: SecurityLayer[] = [
  {
    title: "Zero trust for open networks",
    summary: "Cloud MLM Software assumes no location is safe. Every request proves itself before sensitive data loads.",
    points: [
      "Isolate admin, distributor, and customer surfaces across dedicated micro front ends.",
      "Context-aware firewalls and automated captcha defences halt credential stuffing and spam.",
      "Session scoring adjusts friction based on device reputation, geography, and behaviour."
    ],
    icon: ShieldStar
  },
  {
    title: "Layered verification orchestration",
    summary: "Mix knowledge, possession, and inherence factors to match compliance and business goals.",
    points: [
      "OTP, Duo, and secure certificate flows extend trust beyond passwords.",
      "RFID, fingerprint, or camera verification for high-value operations.",
      "Kerberos-style ticketing keeps sessions short-lived and traceable."
    ],
    icon: MagicWand
  },
  {
    title: "Observable, resilient infrastructure",
    summary: "Security signals, backups, and intelligence combine to keep growth uninterrupted.",
    points: [
      "Real-time dashboards surface anomalies across payouts, enrolments, and access logs.",
      "Encrypted backups and disaster recovery testing keep historical data intact.",
      "Continuous performance tuning maintains fast, global experiences without exposing secrets."
    ],
    icon: CloudCheck
  }
];

const AUTOMATION_CAPABILITIES: AutomationCapability[] = [
  {
    title: "E-wallet intelligence",
    description:
      "Digital wallets handle deposits, crypto conversions, and payouts without sacrificing security or usability.",
    insights: [
      "Cryptocurrency transactions secured with enhanced encryption and audit trails.",
      "Role-based limits and approvals reduce fraud while keeping the field moving.",
      "Distributors track balances and withdrawals inside a multilingual, mobile-ready workspace."
    ],
    icon: Wallet
  },
  {
    title: "E-commerce integration",
    description:
      "Blend MLS catalogues with online storefronts and apps so products remain available 24/7 worldwide.",
    insights: [
      "Unified product data powers web and mobile stores for distributors and executives.",
      "Experience design focuses on accessibility, language support, and conversion-driven layouts.",
      "Campaign assets roll out instantly across replicated sites and marketplaces."
    ],
    icon: Layers
  },
  {
    title: "Secure payment gateways",
    description:
      "Automated gateway orchestration ensures every transaction is encrypted, logged, and frictionless.",
    insights: [
      "Supports OTP-secured transfers with email receipts and optional crypto rails.",
      "Lower exchange fees for Bitcoin, Ethereum, and fiat without losing compliance.",
      "Internal transfers between users stay tracked with reconciliation-ready records."
    ],
    icon: LockKeyhole
  },
  {
    title: "Enhanced platform architecture",
    description:
      "A modern tech foundation evolves as your compensation model, compliance, and scale requirements change.",
    insights: [
      "Multi-technology stack with hardened plugins and proactive bug fixes.",
      "Remote code execution controls prevent tampering and improve runtime safety.",
      "Continuous interface refreshes keep the experience modern and accessible."
    ],
    icon: CloudArrowUp
  },
  {
    title: "KYC confidence",
    description:
      "Identity verification flows protect sensitive documents while keeping distributors productive.",
    insights: [
      "Encrypted storage backed by regional privacy standards.",
      "Automated validation ensures onboarding stays fast and accurate.",
      "Granular permissions govern who can review, approve, or export KYC data."
    ],
    icon: Database
  },
  {
    title: "Multi-currency & multilingual reach",
    description:
      "Accept global payments and communicate in any market without rebuilding your stack.",
    insights: [
      "Gateway network supports cards, wallets, and bank transfers across currencies.",
      "Locale switching keeps content, pricing, and compliance aligned.",
      "AI-ready analytics reveal performance by region, language, and payment type."
    ],
    icon: Globe2
  },
  {
    title: "Automated backup cadence",
    description:
      "Safeguard every decision, payout, and document with automated, encrypted backups.",
    insights: [
      "RAM-level recovery minimises downtime after unexpected issues.",
      "Business intelligence tools visualise backup history and retention status.",
      "Disaster recovery playbooks keep leadership confident during audits."
    ],
    icon: CloudCheck
  }
];

const RESILIENCE_PATTERNS: ResiliencePattern[] = [
  {
    label: "Automate network marketing tasks",
    detail: "Replace manual work with orchestrated workflows for enrolments, payouts, and communications."
  },
  {
    label: "Secure growth without friction",
    detail: "Distributors gain fast access, while leadership receives continuous assurance that the platform is uncompromised."
  },
  {
    label: "Build trust with every interaction",
    detail: "From first login to global expansion, your brand shows up as reliable, responsive, and enterprise ready."
  }
];

const READINESS_STEPS: ReadinessStep[] = [
  {
    title: "Map critical journeys",
    description: "Document enrolment, payout, and replication workflows to prioritise the strongest protections."
  },
  {
    title: "Select authentication factors",
    description: "Pair passwords with OTP, certificates, or biometrics based on role, device, and regulatory need."
  },
  {
    title: "Align integrations",
    description: "Ensure CRM, finance, and marketing systems inherit identical security and logging policies."
  },
  {
    title: "Communicate the rollout",
    description: "Prepare education plans so distributors and admins adopt new safeguards without confusion."
  }
];

const PLATFORM_PILLS: string[] = [
  "Advanced reporting & anomaly dashboards",
  "Powerful email, SMS, and ticketing suite",
  "Laravel-secured authentication modules",
  "Dynamic compression and caching network",
  "Privilege management with granular audit",
  "Theme-changing controls with governance",
  "AI-ready insights for proactive decision-making",
  "Replicating websites and LCP management"
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Secure MLM Software Platform";
  const description =
    "Deploy Cloud MLM Software's secure MLM platform—layered authentication, resilient backups, and global payment readiness built for high-growth network marketing enterprises.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-feature/secure-mlm-software", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type SecureMlmSoftwarePageProps = {
  params: { lang: SupportedLocale };
};

export default function SecureMlmSoftwarePage({ params }: SecureMlmSoftwarePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const featuresHref = buildLocalizedPath("/features", locale);

  return (
    <div className="space-y-28 pb-28">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-50 via-white to-slate-100 py-24 text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_90%_20%,rgba(129,140,248,0.2),transparent_60%),radial-gradient(circle_at_20%_90%,rgba(148,163,184,0.2),transparent_55%)]" aria-hidden />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,0.48fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/60 bg-sky-500/10 px-4 py-1 text-sm font-semibold text-sky-700 dark:border-sky-400/70 dark:text-sky-100">
              <ShieldCheck className="h-4 w-4" aria-hidden />
              Secure MLM Software
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                The most secure MLM software for unstoppable network marketing growth.
              </h1>
              <p className="text-base text-slate-700 dark:text-slate-200/85">
                Safeguard identities, payouts, and replicated experiences with a platform engineered for enterprise resilience. Cloud MLM Software combines layered authentication, intelligent monitoring, and automated backups so you can grow globally without compromise.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-200/70">
                Every feature—wallets, e-commerce, payment gateways, and KYC—is wrapped in security-first design, giving your teams the confidence to innovate and scale.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Request a security consultation
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-200/60 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800/60">
                <Link href={demoHref}>
                  Explore the live demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <dl className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200/80 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/60">
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  Global uptime
                </dt>
                <dd className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">99.95%</dd>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">Backed by distributed infrastructure and resilient backups.</p>
              </div>
              <div className="rounded-3xl border border-slate-200/80 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/60">
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  Authentication layers
                </dt>
                <dd className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">5+</dd>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">From OTP and certificates to biometric-ready hardware add-ons.</p>
              </div>
              <div className="rounded-3xl border border-slate-200/80 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/60">
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  Markets served
                </dt>
                <dd className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">70+</dd>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">Multi-currency, multilingual experiences ready for worldwide rollout.</p>
              </div>
            </dl>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-lg backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/70">
            {HERO_FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="flex gap-4 rounded-2xl border border-slate-200/70 bg-white/80 p-5 dark:border-slate-700/70 dark:bg-slate-900/70">
                  <span className="mt-1 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/15 text-sky-700 dark:text-sky-100">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">{feature.title}</h2>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{feature.description}</p>
                  </div>
                </article>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Security architecture built for enterprise expectations.
          </h2>
          <p className="text-sm text-muted-foreground">
            Operate confidently across public networks, distributed teams, and fast-scaling business models. Each layer below relates directly to the protections that set Cloud MLM Software apart.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {SECURITY_LAYERS.map((layer) => {
            const Icon = layer.icon;
            return (
              <article key={layer.title} className="flex h-full flex-col gap-6 rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{layer.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{layer.summary}</p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {layer.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/15">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Secure MLM Software to automate network marketing tasks.
            </h2>
            <p className="text-sm text-muted-foreground">
              The right platform reduces manual effort, eliminates risky workarounds, and keeps momentum high. This is how Cloud MLM Software translates our legacy WordPress insights into today’s enterprise experience.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {RESILIENCE_PATTERNS.map((item) => (
                <li key={item.label} className="rounded-2xl border border-border/60 bg-background/80 p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/70">{item.label}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
          <blockquote className="rounded-3xl border border-primary/30 bg-primary/5 p-6 text-sm text-muted-foreground dark:bg-primary/10">
            “Security is not a bolt-on. It is the heartbeat of modern MLM growth. Our platform blends encryption, intelligent monitoring, and automation so your teams focus on relationships—not risk.”
          </blockquote>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {AUTOMATION_CAPABILITIES.map((capability) => {
            const Icon = capability.icon;
            return (
              <article key={capability.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{capability.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {capability.insights.map((insight) => (
                    <li key={insight} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" aria-hidden />
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,0.5fr)]">
        <div className="space-y-6 rounded-3xl border border-primary/30 bg-primary/5 p-6 shadow-sm dark:bg-primary/10">
          <h2 className="text-2xl font-semibold text-foreground">Readiness checklist before deployment.</h2>
          <p className="text-sm text-muted-foreground">
            Align leadership, compliance, and technology teams so every protection lands smoothly in-market.
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {READINESS_STEPS.map((step) => (
              <li key={step.title} className="rounded-2xl border border-border/60 bg-background/80 p-4">
                <p className="text-sm font-semibold text-foreground">{step.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <LineChart className="h-5 w-5 text-primary" aria-hidden />
              <h3 className="text-base font-semibold text-foreground">Security outcomes you can measure</h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Reduced fraud and support tickets through proactive monitoring.</li>
              <li>• Faster onboarding as KYC checks and approvals move in sync.</li>
              <li>• Stronger field confidence thanks to transparent, resilient operations.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border/70 bg-background/80 p-6 text-sm text-muted-foreground shadow-sm">
            Cloud MLM Software partners with your architects to create implementation roadmaps, training materials, and adoption playbooks—ensuring every market receives an experience that feels trustworthy and premium.
          </div>
        </div>
      </section>

      <section className="container space-y-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Platform capabilities reinforcing your secure stack.
          </h2>
          <p className="text-sm text-muted-foreground">
            Each capability below works with the secure MLM core to deliver brand-safe, high-performing digital experiences.
          </p>
        </div>
        <ul className="flex flex-wrap gap-3">
          {PLATFORM_PILLS.map((pill) => (
            <li
              key={pill}
              className="rounded-full border border-border/60 bg-background/80 px-4 py-2 text-sm text-muted-foreground shadow-sm"
            >
              {pill}
            </li>
          ))}
        </ul>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/15 via-background to-primary/10 p-10 shadow-sm dark:via-slate-950">
          <div className="absolute -left-24 top-10 h-48 w-48 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute -right-16 bottom-0 h-44 w-44 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-900/30" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.35fr)]">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to launch the industry’s most secure MLM software?
              </h2>
              <p className="text-sm text-muted-foreground">
                Share your current environment or invite us to run a discovery sprint. We will deliver blueprints, proof-of-concept experiences, and rollout strategies that balance speed with protection.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href={contactHref}>
                    Talk to our platform team
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
                  <Link href={featuresHref}>
                    Explore more features
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-primary/30 bg-background/80 p-6 shadow-sm dark:border-primary/40 dark:bg-slate-950/70">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/70">
                Launch checklist
              </p>
              <div className="mt-4 space-y-4 text-sm text-muted-foreground">
                <p>✓ Assess legacy systems and data migration scope.</p>
                <p>✓ Finalise governance for wallets, payouts, and KYC workflows.</p>
                <p>✓ Define success metrics—uptime, response SLAs, adoption milestones.</p>
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                With your insight, we craft bespoke roadmaps and adoption toolkits that accelerate rollout and maximise stakeholder trust.
              </p>
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
