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
  BarChart3,
  CalendarRange,
  ClipboardCheck,
  Compass,
  GaugeCircle,
  Globe,
  HelpCircle,
  LineChart,
  PartyPopper,
  Rocket,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Users
} from "lucide-react";
import PartyPlanSimulator from "@/components/plan/party-plan-simulator";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
};

type Pillar = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Example = {
  title: string;
  baseline: string;
  insight: string;
  icon: IconType;
};

type Pattern = {
  title: string;
  description: string;
  icon: IconType;
};

type Mechanic = {
  title: string;
  summary: string;
  outcomes: string[];
  icon: IconType;
};

type Journey = {
  stage: string;
  description: string;
  focus: string;
  icon: IconType;
};

type RoadmapStep = {
  phase: string;
  duration: string;
  activities: string[];
  icon: IconType;
};

type Guardrail = {
  region: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Faq = {
  question: string;
  answer: string;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Hybrid party conversion",
    value: "46% buyers",
    detail: "Median conversion across 18,000 US and ANZ parties orchestrated with Cloud MLM Software in 2024."
  },
  {
    label: "Encore booking velocity",
    value: "2.3 future parties",
    detail: "Average follow-up parties booked per 10 live events once host concierge automation is enabled."
  },
  {
    label: "Commission close-out",
    value: "24-hour compliance",
    detail: "Typical window to reconcile host credits, tax documents, and commission approvals across US, CA, and AU."
  },
  {
    label: "Field satisfaction",
    value: "+61 NPS",
    detail: "Consultant sentiment after activating mobile party workflows, analytics, and AI nudges."
  }
];

const MECHANICS: Mechanic[] = [
  {
    title: "Retail & host economics",
    summary: "Balance retail margin, host credits, and point volume thresholds in one compensation spine.",
    outcomes: [
      "Align PV/BV accrual with real-time order capture from home, virtual, and hybrid parties.",
      "Auto-calc host rewards, half-price items, and referral coupons without spreadsheets.",
      "Protect retail profit with caps on discounts and minimum advertised pricing checks."
    ],
    icon: ShoppingBag
  },
  {
    title: "Sponsor overrides & pacing",
    summary: "Link party productivity to team overrides, fast-start bonuses, and recognition.",
    outcomes: [
      "Tie leader rewards to qualified parties held, average order value, and team attendance streaks.",
      "Trigger badges when consultants hit multi-board thresholds or rebooking targets.",
      "Blend personal retail with binary or unilevel volumes without breaking compliance."
    ],
    icon: Users
  },
  {
    title: "Compliance guardrails",
    summary: "Bake disclosures, consent, and documentation into every event workflow.",
    outcomes: [
      "Serve FTC, DSA, and TGA-aligned talk tracks plus product disclaimers inside presenter mode.",
      "Log opt-ins, recorded live streams, and purchase receipts for every attendee.",
      "Route escalations to legal when claims, testimonials, or third-party venues need approval."
    ],
    icon: ShieldCheck
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Experiences that convert",
    description:
      "Design in-person, hybrid, or social parties with curated content, sampling kits, and frictionless checkout.",
    bullets: [
      "Template invites, RSVPs, and host coaching journeys for consistent brand energy.",
      "Sync inventory forecasts and sample kits to prevent stockouts on hero products.",
      "Capture in-party polls and wishlists to personalise post-event offers."
    ],
    icon: PartyPopper
  },
  {
    title: "Alignment across teams",
    description:
      "Give product, compliance, and finance leaders a shared timeline for every host program.",
    bullets: [
      "Surface ingredient statements and regulated claims inside the presenter experience.",
      "Automate tax receipts, host 1099/T4A/BAS obligations, and payout approvals.",
      "Share live dashboards with finance, supply chain, and field development simultaneously."
    ],
    icon: ClipboardCheck
  },
  {
    title: "Data-led expansion",
    description: "Use analytics to guide field coaching, marketing budgets, and product bundles.",
    bullets: [
      "Compare conversion, rebooking, and recruiting by region, segment, or product line.",
      "Monitor party cadence versus retention to refine minimum activity policies.",
      "Feed AI-driven coaching nudges into consultant and leader mobile apps."
    ],
    icon: BarChart3
  }
];

const GUARDRAILS: Guardrail[] = [
  {
    region: "United States & Canada",
    summary: "Keep FTC, DSA, TCPA, and CASL compliance visible at every stage.",
    bullets: [
      "Auto-insert 2024 FTC earnings disclosures and DSA Canada policies in presentations.",
      "Track invitation consent and suppression lists across SMS, email, and social messaging.",
      "Generate state-by-state sales tax, 1099-NEC, and T4A exports in a single click."
    ],
    icon: ShieldCheck
  },
  {
    region: "United Kingdom & EU",
    summary: "Respect ASA/CAP advertising codes, GDPR, and Digital Services Act requirements.",
    bullets: [
      "Embed mandatory disclaimers, allergen callouts, and price transparency prompts.",
      "Store consent and objection logs with audit trails linked to each attendee.",
      "Support multi-language scripts and right-to-be-forgotten workflows for EU guests."
    ],
    icon: ClipboardCheck
  },
  {
    region: "Australia & APAC",
    summary: "Match ACCC, PDPA, and regional tax expectations while scaling internationally.",
    bullets: [
      "Localise disclaimers for TGA wellness and cosmetics guidance in AU and SG.",
      "Map GST/BAS reporting with bank-ready payout files in AUD and SGD.",
      "Coordinate venue permissions, hybrid streaming policies, and translation governance."
    ],
    icon: Globe
  }
];

const EXAMPLES: Example[] = [
  {
    title: "US wellness relaunch",
    baseline:
      "Hybrid pop-up plus livestream, 18 guests, $120 median basket, four-tier host credit structure.",
    insight:
      "Simulator highlights reorder windows and follow-up cadences to reach $18K retail in the first 30 days while protecting cash flow.",
    icon: CalendarRange
  },
  {
    title: "UK beauty compliance reset",
    baseline:
      "ASA and CAP oversight, two host tiers, digital party forms, and stricter product language controls.",
    insight:
      "Cloud MLM Software injects required disclaimers, tracks consent logs, and alerts legal when messaging drifts off-script.",
    icon: ShieldCheck
  },
  {
    title: "APAC expansion sprint",
    baseline:
      "Singapore and Australia pilot, 40 consultants, mixed currency orders, and COD fallback in select suburbs.",
    insight:
      "Real-time analytics compare AUD/SGD margins, GST compliance, and bilingual asset usage to inform scale-up decisions.",
    icon: Globe
  }
];

const BLUEPRINT: Pattern[] = [
  {
    title: "Event operations cockpit",
    description:
      "Centralise host scheduling, checklists, sample kit logistics, and venue management inside one workspace.",
    icon: Settings2
  },
  {
    title: "Revenue intelligence",
    description:
      "Dashboards track party GMV, booking pipelines, and sponsorship conversion versus plan targets.",
    icon: LineChart
  },
  {
    title: "Field enablement engine",
    description:
      "Mobile apps deliver scripts, AI prompts, and automation to consultants, hosts, and coaches in real time.",
    icon: Sparkles
  }
];

const JOURNEYS: Journey[] = [
  {
    stage: "Guest to customer",
    description: "Invites, pre-party quizzes, and QR checkout flows turn curiosity into confident purchases.",
    focus: "Guests receive curated carts, payment plans, and post-party reminders tuned to their interests.",
    icon: Compass
  },
  {
    stage: "Host to advocate",
    description: "Host onboarding crafts agendas, tracks rewards, and nudges rebooking before the event ends.",
    focus: "Hosts see live progress, share approved assets, and unlock tiered perks for encore parties.",
    icon: PartyPopper
  },
  {
    stage: "Consultant to leader",
    description: "Leaders access dashboards, compliance alerts, and coaching playbooks to grow depth.",
    focus: "Field development teams spot party gaps, retention risk, and promotion readiness instantly.",
    icon: Rocket
  }
];

const ROADMAP: RoadmapStep[] = [
  {
    phase: "Discovery & modelling",
    duration: "Weeks 1-2",
    activities: [
      "Audit legacy party data, host incentives, and product mix to define success metrics.",
      "Model retail, host credit, and team override interactions inside the compensation blueprint.",
      "Align regional compliance needs spanning FTC, DSA Canada, ASA/CAP, ACCC, and PDPA."
    ],
    icon: CalendarRange
  },
  {
    phase: "Configuration & pilot",
    duration: "Weeks 3-4",
    activities: [
      "Build event workflows, payment integrations, and simulator dashboards for pilot teams.",
      "Run play tests with top leaders to validate rewards, disclosures, and nurture sequences.",
      "Confirm taxation, inventory, and CRM hand-offs across the tech stack."
    ],
    icon: Settings2
  },
  {
    phase: "Enablement & scale",
    duration: "Weeks 5-6",
    activities: [
      "Launch field training, certification paths, and knowledge base content.",
      "Publish executive scorecards, AI coaching nudges, and marketing automations.",
      "Stand up hypercare support while transitioning to business-as-usual governance."
    ],
    icon: Rocket
  }
];

const CTA_POINTS: string[] = [
  "Launch host-centric workflows with compliance-ready scripts and checklists.",
  "Unify party orders, e-commerce sales, and field commissions in one ledger.",
  "Surface AI-guided coaching prompts based on simulator and dashboard signals.",
  "Scale internationally with multi-currency payouts, tax docs, and privacy controls."
];

const FAQS: Faq[] = [
  {
    question: "How does Cloud MLM Software support hybrid (in-person + virtual) parties?",
    answer:
      "We combine live event scheduling with streaming integrations, QR checkout, and post-party funnels so guests on-site or online enjoy the same curated experience and compliance coverage."
  },
  {
    question: "Can host credits and consultant commissions run simultaneously without manual overrides?",
    answer:
      "Yes. Host rewards, half-price items, and consultant bonuses post in real time using shared PV/BV rules, ensuring retail profit and sponsor overrides stay balanced."
  },
  {
    question: "What safeguards keep testimonials and income claims compliant?",
    answer:
      "Content guardrails enforce approved language, require proof uploads for testimonials, and escalate flagged clips or captions to legal before they can be reused."
  },
  {
    question: "How quickly can we expand to new markets once the party plan is live?",
    answer:
      "Our localisation toolkit covers currencies, tax formats, privacy requirements, and translation workflows so you can deploy to new regions in weeks, not quarters."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Party Plan MLM Plan";
  const description =
    "Explore the party plan MLM blueprint with Cloud MLM Software—host economics, compliance guardrails, and data-backed field enablement.";

  return {
    title,
    description,
    keywords: [
      "Party plan MLM plan",
      "Party plan compensation software",
      "Cloud MLM Software",
      "Host rewards automation",
      "Direct selling party plan"
    ],
    alternates: {
      canonical: buildLocalizedPath("/mlm-plan/mlm-party-plan", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PartyPlanPageProps = {
  params: { lang: SupportedLocale };
};

export default function PartyPlanPage({ params }: PartyPlanPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const calculatorHref = buildLocalizedPath("/party-plan-mlm-calculator", locale);
  const demoHref = buildLocalizedPath("/mlm-party-plan-software-demo", locale);
  const plansHref = buildLocalizedPath("/mlm-plans", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-rose-50 via-white to-amber-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(236,72,153,0.16),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(217,119,6,0.18),transparent_60%),radial-gradient(circle_at_30%_85%,rgba(59,130,246,0.16),transparent_65%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(380px,620px)] lg:items-stretch">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              MLM plan deep dive
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Party Plan MLM Plan — Cloud MLM Software’s expert deep dive into host-led growth.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              Translate the classic party plan into a data-backed revenue engine. Cloud MLM Software unifies host rewards, retail sales, team overrides, and compliance workflows so every celebration scales with confidence. Use the simulator to test scenarios before your next launch.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href={contactHref}>
                  Talk to a party plan strategist
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/40 text-primary hover:bg-primary/10 dark:border-white/40 dark:text-white dark:hover:bg-white/10"
              >
                <Link href={calculatorHref}>
                  Open the party plan calculator
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {HERO_METRICS.map((metric) => (
                <article
                  key={metric.label}
                  className="rounded-3xl border border-border/60 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-white/15 dark:bg-white/10"
                >
                  <p className="text-sm uppercase tracking-wide text-muted-foreground dark:text-white/70">{metric.label}</p>
                  <p className="mt-2 text-3xl font-semibold text-foreground dark:text-white">{metric.value}</p>
                  <p className="mt-3 text-sm text-muted-foreground dark:text-white/70">{metric.detail}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="relative">
            <PartyPlanSimulator className="h-full lg:w-[clamp(420px,48vw,660px)] lg:translate-x-12 xl:translate-x-16 lg:rounded-[34px] lg:shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Party plan mechanics that honour hosts, guests, and leaders
          </h2>
          <p className="text-sm text-muted-foreground">
            Craft compensation that blends retail profit, host rewards, and leadership incentives without sacrificing compliance or cash flow.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {MECHANICS.map((mechanic) => {
            const Icon = mechanic.icon;
            return (
              <article
                key={mechanic.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{mechanic.title}</h3>
                <p className="text-sm text-muted-foreground">{mechanic.summary}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {mechanic.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2">
                      <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Foundations to keep product, compliance, and field teams united
          </h2>
          <p className="text-sm text-muted-foreground">
            Shared tooling keeps every stakeholder aligned on experience design, regulatory expectations, and growth priorities.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Regulatory guardrails built into the party workflow
            </h2>
            <p className="text-sm text-muted-foreground">
              Regional policies shift quickly. Cloud MLM Software keeps disclosures, privacy preferences, and taxation synced without slowing the field.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {GUARDRAILS.map((guardrail) => {
              const Icon = guardrail.icon;
              return (
                <article
                  key={guardrail.region}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground">{guardrail.region}</h3>
                    <p className="text-sm text-muted-foreground">{guardrail.summary}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {guardrail.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                        <span>{bullet}</span>
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Interactive plan examples</h2>
          <p className="text-sm text-muted-foreground">
            Stress-test varying regions, product mixes, and host incentives before launch. Pair the simulator with our{" "}
            <Link href={calculatorHref} className="text-primary underline underline-offset-4">
              party plan calculator
            </Link>{" "}
            and the{" "}
            <Link href={demoHref} className="text-primary underline underline-offset-4">
              live software demo
            </Link>{" "}
            to see these scenarios in action.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {EXAMPLES.map((example) => {
            const Icon = example.icon;
            return (
              <article
                key={example.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{example.title}</h3>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Baseline</p>
                <p className="text-sm text-muted-foreground">{example.baseline}</p>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">What Cloud MLM Software reveals</p>
                <p className="text-sm text-muted-foreground">{example.insight}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Journey clarity from first invite to leadership mastery
          </h2>
          <p className="text-sm text-muted-foreground">
            Keep guests, hosts, consultants, and executives in lockstep with transparent data and guided enablement.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {JOURNEYS.map((journey) => {
            const Icon = journey.icon;
            return (
              <article
                key={journey.stage}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-foreground">{journey.stage}</h3>
                  <p className="text-sm text-muted-foreground">{journey.description}</p>
                </div>
                <p className="text-sm font-medium text-foreground">Focus</p>
                <p className="text-sm text-muted-foreground">{journey.focus}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Implementation roadmap to launch and scale the party plan
          </h2>
          <p className="text-sm text-muted-foreground">
            Structured phases align stakeholders, validate compliance, and prepare the field for sustainable growth.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {ROADMAP.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.phase}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{step.phase}</h3>
                  <span className="text-xs font-medium uppercase tracking-wide text-primary">{step.duration}</span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {step.activities.map((activity) => (
                    <li key={activity} className="flex items-start gap-2">
                      <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Operational blueprint for ongoing optimisation
          </h2>
          <p className="text-sm text-muted-foreground">
            Combine automation, analytics, and enablement in a single spine ready for founders, finance, and regulators.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {BLUEPRINT.map((pattern) => {
            const Icon = pattern.icon;
            return (
              <article
                key={pattern.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{pattern.title}</h3>
                <p className="text-sm text-muted-foreground">{pattern.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground">
            Answers to the questions founders, finance leaders, and compliance officers ask before committing to a party plan rollout.
          </p>
        </div>
        <div className="grid gap-4">
          {FAQS.map((faq) => (
            <article
              key={faq.question}
              className="flex flex-col gap-2 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                  <HelpCircle className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-gradient-to-br from-primary/10 via-background to-background py-20 dark:from-primary/10">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              How Cloud MLM Software helps
            </h2>
            <p className="text-sm text-muted-foreground">
              Partner with Cloud MLM Software to launch a compliant party plan that excites the field, safeguards governance, and scales across regions.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {CTA_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Schedule a blueprint workshop
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={pricingHref}>
                  Review pricing options
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Want to compare additional models? Visit our{" "}
              <Link href={plansHref} className="text-primary underline underline-offset-4">
                MLM plan library
              </Link>{" "}
              for companion calculators and design guidance.
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold text-foreground">Launch readiness checklist</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Disclosures, consent, and tax documentation automated per jurisdiction.</span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Dashboards track party GMV, rebooking, and recruiting momentum in real time.</span>
              </li>
              <li className="flex items-start gap-2">
                <GaugeCircle className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Field alerts keep consultants on pace for activity minimums and recognition.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
