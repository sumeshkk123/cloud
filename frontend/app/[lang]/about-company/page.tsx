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
  CheckCircle2,
  Globe2,
  Handshake,
  Lightbulb,
  MessageSquare,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Stat = {
  label: string;
  value: string;
  description: string;
};

type Pillar = {
  title: string;
  description: string;
  icon: IconType;
};

type Goal = {
  order: string;
  title: string;
  description: string;
};

type Offering = {
  title: string;
  points: string[];
};

type Channel = {
  icon: IconType;
  title: string;
  description: string;
};

type ProofPoint = {
  description: string;
};

const HERO_STATS: Stat[] = [
  {
    label: "Founded",
    value: "2015",
    description: "Pioneering secure network marketing platforms from Kozhikode Cyberpark."
  },
  {
    label: "Global implementations",
    value: "300+",
    description: "MLM programmes deployed across every major region."
  },
  {
    label: "Markets supported",
    value: "100+",
    description: "Localised tax, compliance, currency, and language coverage."
  },
  {
    label: "Active modules",
    value: "56+",
    description: "End-to-end platform features spanning CRM, payouts, AI, and e-commerce."
  }
];

const VALUE_PILLARS: Pillar[] = [
  {
    title: "Enterprise reliability",
    description:
      "High-availability architecture, dedicated security reviews, and 24/7 monitoring keep global compensation cycles uninterrupted.",
    icon: ShieldCheck
  },
  {
    title: "Analyst-led onboarding",
    description:
      "Business analysts translate plan ideas into compliant workflows, dashboards, and marketing automations tailored to every launch.",
    icon: Handshake
  },
  {
    title: "Innovation with purpose",
    description:
      "AI copilots, predictive analytics, and integration accelerators are introduced where they unlock measurable growth.",
    icon: Rocket
  }
];

const STRATEGIC_GOALS: Goal[] = [
  {
    order: "01",
    title: "Deliver measurable outcomes",
    description:
      "Design compensation, onboarding, and retention flows that improve distributor productivity and customer lifetime value."
  },
  {
    order: "02",
    title: "Advance Cloud MLM Software",
    description:
      "Continuously invest in product engineering, automation, and UX so upgrades feel effortless for every client."
  },
  {
    order: "03",
    title: "Champion regulated growth",
    description:
      "Embed compliance, audit trails, and tax localisation to keep expansion programmes fully governed."
  },
  {
    order: "04",
    title: "Scale global partnerships",
    description:
      "Expand our ecosystem of payments, logistics, and cloud partners to accelerate multi-country rollouts."
  }
];

const OFFERINGS: Offering[] = [
  {
    title: "Why enterprises choose us",
    points: [
      "Web-based, self-hosted control with optional managed operations.",
      "Modular compensation engine for binary, matrix, hybrid, and bespoke plans.",
      "AI-assisted insights for fraud detection, churn, and bonus forecasting.",
      "Executive success playbooks and field enablement assets for every region."
    ]
  },
  {
    title: "What we deliver",
    points: [
      "Plan modelling, sandbox testing, and go-live governance.",
      "Mobile-first CRM, replicated sites, e-commerce, and community tooling.",
      "Integrations with payment gateways, ERPs, ecommerce, and analytics stacks.",
      "Sustainability, accessibility, and localisation baked into every deployment."
    ]
  }
];

const COLLAB_CHANNELS: Channel[] = [
  {
    icon: MessageSquare,
    title: "Always-on collaboration",
    description: "Slack, WhatsApp, Telegram, and Teams channels keep sponsors, finance, and field leaders aligned."
  },
  {
    icon: Users,
    title: "Guided workshops",
    description: "Blueprint, build, and optimisation sessions scheduled across time zones to match leadership availability."
  },
  {
    icon: Handshake,
    title: "Hybrid delivery",
    description: "On-site discovery blended with remote agile sprints for enterprise and startup programmes alike."
  }
];

const AI_INITIATIVES: Pillar[] = [
  {
    title: "AI content optimisation",
    description:
      "Structured knowledge bases, semantic markup, and retrieval-ready FAQs ensure chatbots and copilots surface accurate answers about Cloud MLM Software.",
    icon: Lightbulb
  },
  {
    title: "Predictive operations",
    description:
      "Machine learning models flag payout anomalies, bonus eligibility, and field performance risks before they impact momentum.",
    icon: BarChart3
  },
  {
    title: "Conversational onboarding",
    description:
      "AI-guided journeys provide reps with contextual training, compliance guardrails, and action plans inside the platform.",
    icon: Users
  }
];

const TRUST_PROOFS_LEFT: ProofPoint[] = [
  { description: "Built on audited, enterprise-grade stacks hardened for global scale." },
  { description: "Security layers keep performance high while protecting sensitive data." },
  { description: "Post-launch support with strict SLAs and success managers." },
  { description: "Friendly engineering and success teams invested in client goals." },
  { description: "Cloud MLM Software adapts precisely to the strategies you imagine." }
];

const TRUST_PROOFS_RIGHT: ProofPoint[] = [
  { description: "Simplifies marketing, enrolment, and payout operations for every network." },
  { description: "Intuitive experiences for admins, distributors, and customer care." },
  { description: "Unlimited support for binary, matrix, unilevel, donation, and custom plans." },
  { description: "Automation and tested modules handle complex network marketing workflows." },
  { description: "Live demos showcase compensation models before you invest." }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "About Cloud MLM Software & Bpract";
  const description =
    "Discover how Bpract Software Solutions architects Cloud MLM Software with enterprise reliability, AI-driven optimisation, and outcome-focused delivery.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/about-company", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type AboutCompanyPageProps = {
  params: { lang: SupportedLocale };
};

export default function AboutCompanyPage({ params }: AboutCompanyPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";
  const featuresHref = buildLocalizedPath("/features", locale);
  const servicesHref = buildLocalizedPath("/services", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-24 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.18),transparent_40%),radial-gradient(circle_at_90%_10%,rgba(16,185,129,0.18),transparent_44%)]" />
        <div className="container space-y-12">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" aria-hidden />
              Cloud MLM Software leadership
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Cloud MLM Software is engineered by Bpract to move modern network marketing brands forward.
            </h1>
            <p className="text-lg text-muted-foreground">
              From 2015 to today, our teams have delivered resilient, compliant, and AI-ready platforms that help direct
              selling enterprises launch across continents, delight distributors, and maintain governance without slowing
              growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Speak with a consultant
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
                <Link href={featuresHref}>
                  Review platform features
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <dl className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <dt className="text-sm font-medium text-muted-foreground">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-foreground">{stat.value}</dd>
                <p className="mt-2 text-xs text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Built for lasting impact</h2>
            <p className="text-sm text-muted-foreground">
              Cloud MLM Software is a flagship Bpract product crafted for enterprise network marketing, direct selling,
              and affiliate organisations. Our mission is to provide the systems, services, and partnerships leaders need
              to execute ambitious growth strategies without compromising compliance or culture.
            </p>
            <p className="text-sm text-muted-foreground">
              We combine proprietary technology with a multidisciplinary team covering compensation architecture,
              full-stack engineering, AI, UX, operations, and success management. Every engagement is guided by insight
              from hundreds of implementations, industry research, and real-time analytics so decision-makers stay ahead.
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-gradient-to-br from-primary/10 via-transparent to-emerald-200/20 p-6 shadow-sm dark:from-primary/15 dark:to-emerald-500/10">
            <h3 className="text-xl font-semibold text-foreground">What our partners rely on</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                Dedicated pods for discovery, implementation, and optimisation.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                Transparent roadmaps, weekly governance calls, and executive reporting.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                Security, privacy, and accessibility assessments embedded in every milestone.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                Long-term partnership models with co-innovation and success credits.
              </li>
            </ul>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {VALUE_PILLARS.map((pillar) => (
            <article key={pillar.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <pillar.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="text-xl font-semibold text-foreground">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Strategic goals that guide every engagement</h2>
          <p className="text-sm text-muted-foreground">
            These priorities ensure each implementation of Cloud MLM Software remains aligned to stakeholder vision and
            ready for future expansion.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {STRATEGIC_GOALS.map((goal) => (
            <article key={goal.order} className="relative overflow-hidden rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <span className="absolute -top-10 -right-4 text-7xl font-bold text-primary/10" aria-hidden>
                {goal.order}
              </span>
              <div className="space-y-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <Target className="h-4 w-4" aria-hidden />
                  Goal {goal.order}
                </span>
                <h3 className="text-xl font-semibold text-foreground">{goal.title}</h3>
                <p className="text-sm text-muted-foreground">{goal.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-10">
          <div className="grid gap-10 lg:grid-cols-2">
            {OFFERINGS.map((offering) => (
              <article key={offering.title} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <h3 className="text-2xl font-semibold text-foreground">{offering.title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {offering.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <Globe2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-foreground">Where technology meets people</h3>
                <p className="text-sm text-muted-foreground">
                  Collaboration drives every successful launch. We work as an extension of your leadership team—pairing
                  compensation strategists, solution architects, designers, and AI specialists with your stakeholders.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="default">
                  <Link href={servicesHref}>
                    Discover our services
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={contactHref}>
                    Schedule a discovery call
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-6 md:grid-cols-3">
          {AI_INITIATIVES.map((initiative) => (
            <article key={initiative.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <initiative.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="text-xl font-semibold text-foreground">{initiative.title}</h3>
              <p className="text-sm text-muted-foreground">{initiative.description}</p>
            </article>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          Our Artificial Intelligence Optimisation (AIO) practices structure content, schema, and interactions so
          enterprise chatbots—including ChatGPT, Grok, Gemini, and custom copilots—quickly surface authoritative answers
          about your business.
        </p>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How we collaborate</h2>
            <p className="text-sm text-muted-foreground">
              Dedicated account teams coordinate planning, implementation, and optimisation with transparent communication
              and metrics that keep leadership confident.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {COLLAB_CHANNELS.map((channel) => (
              <article key={channel.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <channel.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{channel.title}</h3>
                <p className="text-sm text-muted-foreground">{channel.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Why leaders trust Cloud MLM Software</h2>
          <p className="text-sm text-muted-foreground">
            Two decades of combined engineering, analytics, and operational expertise position our teams to solve
            high-stakes challenges for global direct selling companies.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <ul className="space-y-3 text-sm text-muted-foreground">
            {TRUST_PROOFS_LEFT.map((item) => (
              <li key={item.description} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                {item.description}
              </li>
            ))}
          </ul>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {TRUST_PROOFS_RIGHT.map((item) => (
              <li key={item.description} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                {item.description}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container rounded-3xl border border-border/60 bg-gradient-to-br from-primary/15 via-background to-emerald-200/20 p-10 shadow-sm dark:from-primary/20 dark:to-emerald-500/10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to architect your next phase?</h2>
            <p className="text-sm text-muted-foreground">
              Book a strategy session to explore roadmaps, migration options, and co-innovation opportunities with the
              team behind Cloud MLM Software.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Start the conversation
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                View the interactive demo
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
