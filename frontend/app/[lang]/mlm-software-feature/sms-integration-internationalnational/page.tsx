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
  Megaphone,
  MessageCircle,
  Globe2,
  Infinity,
  Network,
  PhoneCall,
  ShieldCheck
} from "lucide-react";
import {
  CellSignalFull,
  CloudCheck,
  PlugsConnected,
  RocketLaunch
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroHighlight = {
  title: string;
  description: string;
  icon: IconType;
};

type IntegrationLayer = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type DeliveryPattern = {
  label: string;
  detail: string;
};

type CapabilityCard = {
  title: string;
  body: string;
  insight: string;
  icon: IconType;
};

type ReadinessStep = {
  title: string;
  description: string;
};

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    title: "Global reach in seconds",
    description: "Trigger SMS journeys for every timezone with smart routing and carrier-grade uptime.",
    icon: Globe2
  },
  {
    title: "Two-way conversations",
    description: "Shortcodes, reply handling, and WhatsApp handoffs keep members and prospects engaged.",
    icon: MessageCircle
  },
  {
    title: "Compliance assured",
    description: "Consent management, localisation, and audit-ready logs safeguard your brand reputation.",
    icon: ShieldCheck
  }
];

const INTEGRATION_LAYERS: IntegrationLayer[] = [
  {
    title: "Flexible interfaces for every workflow",
    summary:
      "Connect your CRMs, ERPs, and eCommerce platforms through purpose-built interfaces tailored to teams across the organisation.",
    bullets: [
      "Bulk send hub with campaign presets and translation memory.",
      "Android companion app for on-device broadcasting to regional lists.",
      "Spreadsheet plugin for ops teams who live in sheets but need instant sends."
    ],
    icon: Network
  },
  {
    title: "Developer-first architecture",
    summary:
      "Our HTTP gateway and SDKs drop neatly into your existing stack so automation never stalls.",
    bullets: [
      "RESTful APIs with rate limiting, retries, and delivery receipts.",
      "Webhook callbacks map responses into your CRM or support desk in real time.",
      "Sandboxes replicate carrier logic for safe testing before launch."
    ],
    icon: PlugsConnected
  },
  {
    title: "Intelligent messaging governance",
    summary:
      "Every send respects consent, localisation, and regulatory nuance with no manual overhead.",
    bullets: [
      "Automated quiet hours aligned to regional rules.",
      "Dynamic sender ID assignment for market-specific compliance.",
      "Opt-in tracking tied to enrolment journeys, ticketing, and payouts."
    ],
    icon: CloudCheck
  }
];

const DELIVERY_PATTERNS: DeliveryPattern[] = [
  {
    label: "Instant onboarding",
    detail: "Welcome new distributors with dynamic sequences covering credentials, next steps, and coaching resources."
  },
  {
    label: "Revenue-driving nudges",
    detail: "Push promotion reminders, rank progress, and cart recovery flows directly from your data sources."
  },
  {
    label: "Operational resilience",
    detail: "Notify teams about payouts, compliance checks, or support escalations without leaving your existing tools."
  }
];

const CAPABILITY_CARDS: CapabilityCard[] = [
  {
    title: "HTTP & webhook orchestration",
    body: "Tie real-time triggers to enrolments, volume milestones, or help-desk updates with our responsive gateway.",
    insight: "Ideal for automating daily progress reports and urgent alerts across your entire network.",
    icon: Megaphone
  },
  {
    title: "Shortcode & lead capture plugins",
    body: "Embed two-way SMS experiences into landing pages, kiosks, or events while keeping consent synced.",
    insight: "Perfect for campaigns that need instant follow-up and routing to the right distributor.",
    icon: PhoneCall
  },
  {
    title: "Bulk messaging studio",
    body: "Craft and schedule multilingual broadcasts with template libraries, audience filters, and A/B testing.",
    insight: "Scale seasonal promotions and recognition programs without manual list juggling.",
    icon: RocketLaunch
  }
];

const READINESS_STEPS: ReadinessStep[] = [
  {
    title: "Audit communication journeys",
    description: "List the enrolment, support, and revenue triggers that benefit from instant messaging."
  },
  {
    title: "Define consent governance",
    description: "Align opt-in tracking, quiet hours, and localisation rules across all regions."
  },
  {
    title: "Connect data sources",
    description: "Plug in CRM, payments, and marketing platforms so messages stay timely and contextual."
  },
  {
    title: "Educate the field",
    description: "Provide playbooks showing when to rely on SMS, WhatsApp, or email for the best outcomes."
  }
];

const PLATFORM_PILLS: string[] = [
  "Advanced reporting & delivery analytics",
  "Auto-responder and AI-ready segmentation",
  "Secure authentication & role controls",
  "Dynamic compression for lightning-fast loads",
  "Multilingual, multi-currency readiness",
  "Ticketing, email, and chat escalation",
  "Theme changing with brand governance",
  "Replicating websites & LCP optimisation"
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "SMS Integration (International/National) for MLM Software";
  const description =
    "Integrate international and national SMS with Cloud MLM Software. Automate messaging, drive engagement, and keep every distributor informed with secure, global-ready APIs.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-feature/sms-integration-internationalnational", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type SmsIntegrationPageProps = {
  params: { lang: SupportedLocale };
};

export default function SmsIntegrationPage({ params }: SmsIntegrationPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const featuresHref = buildLocalizedPath("/features", locale);

  return (
    <div className="space-y-28 pb-28">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-[#f0f9ff] via-white to-[#eef2ff] py-24 text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_5%_15%,rgba(59,130,246,0.32),transparent_55%),radial-gradient(circle_at_85%_20%,rgba(129,140,248,0.24),transparent_60%),radial-gradient(circle_at_20%_85%,rgba(125,211,252,0.18),transparent_60%)]" aria-hidden />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,0.48fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-300/60 bg-sky-500/10 px-4 py-1 text-sm font-semibold text-sky-700 dark:border-sky-400/70 dark:text-sky-100">
              <CellSignalFull className="h-4 w-4" aria-hidden />
              SMS Integration (International/National)
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Orchestrate international and national SMS that keep your network in sync.
              </h1>
              <p className="text-base text-slate-700 dark:text-slate-200/85">
                Cloud MLM Software delivers carrier-grade messaging infrastructure so you can automate enrolment journeys, revenue nudges, and compliance alerts. Manage everything from your existing applications while we handle routing, deliverability, and governance.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-200/70">
                Whether you send from spreadsheets, CRMs, or custom apps, our API-first approach keeps every message secure, contextual, and on brand.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Plan an integration workshop
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-200/60 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800/60">
                <Link href={demoHref}>
                  See messaging in the live demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-lg backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/70">
            {HERO_HIGHLIGHTS.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="flex gap-4 rounded-2xl border border-slate-200/70 bg-white/80 p-5 dark:border-slate-700/70 dark:bg-slate-900/70">
                  <span className="mt-1 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/15 text-sky-700 dark:text-sky-100">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">{item.title}</h2>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
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
            Integration layers engineered for scale.
          </h2>
          <p className="text-sm text-muted-foreground">
            Turn SMS into a dependable extension of your daily operations. Our interfaces, APIs, and automation logic eliminate manual effort while keeping distributors connected worldwide.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {INTEGRATION_LAYERS.map((layer) => {
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
                  {layer.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/15">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Automate network marketing communication with confidence.
          </h2>
          <p className="text-sm text-muted-foreground">
            From onboarding to promotions, SMS is the glue that keeps global distributors aligned. These delivery patterns translate legacy content into today’s proactive messaging playbook.
          </p>
          <ul className="space-y-3">
            {DELIVERY_PATTERNS.map((pattern) => (
              <li
                key={pattern.label}
                className="rounded-2xl border border-border/60 bg-background/80 p-4 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/70">
                  {pattern.label}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{pattern.detail}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-primary/30 bg-primary/5 p-6 text-sm text-muted-foreground shadow-sm dark:bg-primary/10">
          “Integrating SMS into your MLM stack is about meeting members where they are. Cloud MLM Software synchronises your data, consent models, and campaign logic so every message drives momentum rather than noise.”
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Capabilities that keep messaging fast, personal, and measurable.
          </h2>
          <p className="text-sm text-muted-foreground">
            Pick the modules that match your growth goals. Each integrates directly with Cloud MLM Software’s secure backbone.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {CAPABILITY_CARDS.map((capability) => {
            const Icon = capability.icon;
            return (
              <article key={capability.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{capability.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{capability.body}</p>
                <p className="text-xs text-muted-foreground">{capability.insight}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,0.52fr)_minmax(0,0.48fr)]">
        <div className="space-y-6 rounded-3xl border border-primary/30 bg-primary/5 p-6 shadow-sm dark:bg-primary/10">
          <h2 className="text-2xl font-semibold text-foreground">Readiness checklist before rollout.</h2>
          <p className="text-sm text-muted-foreground">
            Gather the right information and stakeholders so SMS becomes a dependable part of your omnichannel strategy.
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
              <Infinity className="h-5 w-5 text-primary" aria-hidden />
              <h3 className="text-base font-semibold text-foreground">Sustained outcomes</h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Faster onboarding timelines and reduced support tickets.</li>
              <li>• Higher promotion engagement with automated multilingual reminders.</li>
              <li>• Clear audit trails showing consent, content, and delivery performance.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border/70 bg-background/80 p-6 text-sm text-muted-foreground shadow-sm">
            Our messaging strategists partner with your marketing, compliance, and IT leaders to map adoption plans, rollout cadences, and educational resources tailored to each region.
          </div>
        </div>
      </section>

      <section className="container space-y-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Platform capabilities that elevate every SMS programme.
          </h2>
          <p className="text-sm text-muted-foreground">
            Cloud MLM Software unifies communication, analytics, and security so your SMS strategy scales alongside the business.
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
          <div className="absolute -right-16 bottom-0 h-44 w-44 rounded-full bg-sky-200/30 blur-3xl dark:bg-slate-900/30" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.35fr)]">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to automate SMS that move your MLM forward?
              </h2>
              <p className="text-sm text-muted-foreground">
                Show us your current messaging stack or invite us to run discovery sessions. We will tailor blueprints, prototypes, and rollout plans that blend speed with governance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href={contactHref}>
                    Connect with our messaging team
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
                Activation checklist
              </p>
              <div className="mt-4 space-y-4 text-sm text-muted-foreground">
                <p>✓ Document critical SMS use cases and success metrics.</p>
                <p>✓ Align data retention, consent, and localisation policies.</p>
                <p>✓ Prepare internal comms so distributors know how SMS supports their goals.</p>
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                With these insights, we deliver adoption toolkits, training sessions, and performance dashboards tuned to your go-to-market plans.
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
