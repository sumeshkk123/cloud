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
  BarChart3,
  LifeBuoy,
  ShieldCheck,
  TicketCheck,
  Workflow
} from "lucide-react";
import {
  ChatsCircle,
  ClockCountdown,
  CloudArrowUp,
  GearSix,
  Lightning,
  Notebook,
  ShieldStar
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroHighlight = {
  title: string;
  description: string;
  icon: IconType;
};

type FeatureCluster = {
  title: string;
  description: string;
  points: string[];
  icon: IconType;
};

type WorkflowStage = {
  stage: string;
  summary: string;
  detail: string;
  icon: IconType;
};

type OutcomeSignal = {
  heading: string;
  narrative: string;
  icon: IconType;
};

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    title: "Queue visibility in real time",
    description:
      "Interactive dashboards surface ticket volumes, wait times, and exception trends so support leaders respond before service levels slip.",
    icon: BarChart3
  },
  {
    title: "Multi-channel intake, one workspace",
    description:
      "Email, web forms, and phone call notes convert into structured tickets with attachments, comments, and audit trails in seconds.",
    icon: CloudArrowUp
  },
  {
    title: "Governed collaboration",
    description:
      "Role-aware permissions, customer-specific queues, and Drupal-native search keep data secure while keeping specialists aligned.",
    icon: ShieldCheck
  }
];

const FEATURE_CLUSTERS: FeatureCluster[] = [
  {
    title: "Ticket intelligence & analytics",
    description:
      "Every ticket is a data asset. Cloud MLM Software visualises workloads and responses so you understand where support energy is invested.",
    points: [
      "Chart-driven dashboards illustrate ticket flow, SLA adherence, and backlog health.",
      "Attach tickets directly to client profiles to see commercial context alongside support history.",
      "Status and priority automation keeps high-impact requests in focus and eliminates duplicate follow-ups.",
      "Ticket bodies and updates live as structured nodes, making historical reporting effortless."
    ],
    icon: TicketCheck
  },
  {
    title: "Automated communications",
    description:
      "Accelerate resolution while maintaining a human tone with adaptive notifications and knowledge surface areas.",
    points: [
      "Trigger email notices for new, updated, or dormant tickets so no request ages unnoticed.",
      "Enable customers to submit updates — with files — directly from their inbox and auto-create accounts when needed.",
      "Serve predefined solutions, FAQs, and self-help content inside every response thread.",
      "Preserve feedback and article ratings to refine macros, scripts, and templates over time."
    ],
    icon: LifeBuoy
  },
  {
    title: "Operational governance",
    description:
      "Large-scale MLM organisations require consistency. Permissions, audit trails, and collaboration tools are embedded in the module.",
    points: [
      "Assign queues, workflows, and vocabulary per region while keeping a single global knowledge base.",
      "Search powered by Drupal ensures agents only see tickets and articles they are authorised to access.",
      "Support unlimited customer structures with bespoke access levels for field leaders, franchisees, and vendors.",
      "Log time spent, attachments, and internal remarks for compliance-ready reporting."
    ],
    icon: BadgeCheck
  }
];

const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    stage: "Capture & classify",
    summary: "Unify every channel into a disciplined intake queue",
    detail:
      "Emails, self-service forms, and hotline notes convert into structured records with automatic categorisation, priorities, and customer linkage.",
    icon: Workflow
  },
  {
    stage: "Adaptive triage",
    summary: "Focus teams on the moments that matter",
    detail:
      "Notifications highlight aged or escalated tickets while collaborative charts show who is available to engage right now.",
    icon: ClockCountdown
  },
  {
    stage: "Resolution workspace",
    summary: "Empower analysts with playbooks, assets, and context",
    detail:
      "Self-help libraries, preserved feedback, and file adapters sit beside ticket threads so specialists craft informed responses in fewer touches.",
    icon: Notebook
  },
  {
    stage: "Continuous improvement",
    summary: "Report, learn, and refine the experience",
    detail:
      "Time tracking, rating capture, and granular exports give leadership the insight to evolve processes and replicate best practice globally.",
    icon: GearSix
  }
];

const OUTCOME_SIGNALS: OutcomeSignal[] = [
  {
    heading: "Empowered distributors and customers",
    narrative:
      "Knowledge bases, multilingual replies, and embedded self-help mean field teams find answers instantly and engage support only when necessary.",
    icon: ChatsCircle
  },
  {
    heading: "Leadership-ready transparency",
    narrative:
      "Consistent reporting on ticket sources, turnaround, and satisfaction equips executives with proof of service quality and compliance control.",
    icon: ShieldStar
  },
  {
    heading: "Scale with confidence",
    narrative:
      "The module comfortably handles growing customer structures, franchise models, and partner ecosystems without fragmenting data governance.",
    icon: Lightning
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Support Ticket System Module | Cloud MLM Software";
  const description =
    "Deliver enterprise-grade support for your MLM network. Cloud MLM Software unifies tickets, analytics, and automation so teams resolve every inquiry with speed and accountability.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-feature/support-ticket-system-module", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type SupportTicketSystemModulePageProps = {
  params: { lang: SupportedLocale };
};

export default function SupportTicketSystemModulePage({
  params
}: SupportTicketSystemModulePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const featuresHref = buildLocalizedPath("/features", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-24 text-slate-900 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.25),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(79,70,229,0.2),transparent_55%),radial-gradient(circle_at_30%_85%,rgba(14,165,233,0.2),transparent_55%)] dark:bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,0.4),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(79,70,229,0.35),transparent_55%),radial-gradient(circle_at_30%_85%,rgba(14,165,233,0.35),transparent_60%)]"
          aria-hidden
        />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-100">
              <TicketCheck className="h-4 w-4" />
              Support ticket system module
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Resolve MLM support cases with an AI-ready ticketing backbone
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-200">
                Cloud MLM Software centralises every inquiry, automates follow-ups, and equips agents with knowledge so customers feel heard on the first reply. The result: faster resolutions, higher satisfaction, and leadership visibility across your entire network.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="gap-2 bg-blue-600 text-white hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400">
                <Link href={contactHref}>
                  Speak to a support strategist
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-blue-200 bg-white text-blue-700 hover:bg-blue-50 dark:border-blue-500/30 dark:bg-transparent dark:text-blue-100 dark:hover:bg-blue-500/10"
              >
                <Link href={demoHref}>
                  Request live showcase
                </Link>
              </Button>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {HERO_HIGHLIGHTS.map((highlight) => (
                <li
                  key={highlight.title}
                  className="flex items-start gap-3 rounded-2xl border border-blue-200/60 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-none"
                >
                  <highlight.icon className="mt-1 h-6 w-6 text-blue-600 dark:text-blue-300" />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{highlight.title}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{highlight.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative isolate flex flex-col gap-6 rounded-3xl border border-blue-200/70 bg-white/80 p-6 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-900/60 dark:shadow-none">
            <div className="absolute inset-x-8 top-8 -z-10 h-[280px] rounded-3xl bg-gradient-to-br from-blue-500/15 via-sky-400/15 to-transparent blur-2xl" aria-hidden />
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">Service desk snapshot</p>
              <p className="text-lg text-slate-700 dark:text-slate-200">
                &ldquo;Our ticketing command centre shows the full journey&mdash;from intake to resolution&mdash;so every leader knows where attention is required right now.&rdquo;
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-300">
                – Cloud MLM Software Delivery Team
              </p>
            </div>
            <div className="rounded-2xl border border-blue-200/60 bg-blue-50/80 p-5 text-slate-800 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-slate-100">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-200">In numbers</p>
              <dl className="mt-4 grid gap-4 text-sm">
                <div className="flex justify-between">
                  <dt className="text-slate-600 dark:text-slate-300">Active queues monitored</dt>
                  <dd className="font-semibold text-slate-900 dark:text-white">40+</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-600 dark:text-slate-300">Automated notifications</dt>
                  <dd className="font-semibold text-slate-900 dark:text-white">15 per workflow</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-600 dark:text-slate-300">Knowledge articles linked</dt>
                  <dd className="font-semibold text-slate-900 dark:text-white">250+</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="container grid gap-12 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-600 dark:border-slate-700 dark:text-slate-200">
            <ShieldCheck className="h-4 w-4" />
            Enterprise support intelligence
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            The ticket system module turns service data into strategic insight
          </h2>
          <p className="text-base text-muted-foreground">
            Built as a native extension of Cloud MLM Software, the module eliminates fragmented mailboxes and ad-hoc spreadsheets. Your teams gain a governed workspace to triage, collaborate, and measure outcomes across every market you serve.
          </p>
          <p className="text-base text-muted-foreground">
            We engineered the experience with global MLM operations in mind—whether you are scaling franchise networks, direct selling partners, or hybrid compensation models.
          </p>
          <div className="rounded-2xl border border-blue-200/60 bg-blue-50/60 p-6 dark:border-blue-500/30 dark:bg-blue-500/10">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-200">Quick win</p>
            <p className="mt-3 text-sm text-slate-700 dark:text-slate-200">
              Activate the ticket system alongside your migration and we will import historic request logs, map customer hierarchies, and configure alerts from day one.
            </p>
          </div>
        </div>
        <div className="grid gap-6">
          {FEATURE_CLUSTERS.map((cluster) => (
            <article
              key={cluster.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/60 dark:shadow-none"
            >
              <div className="absolute -right-12 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-blue-100/40 blur-3xl transition group-hover:scale-[1.2] dark:bg-blue-500/20" aria-hidden />
              <cluster.icon className="h-8 w-8 text-blue-600 dark:text-blue-300" />
              <h3 className="mt-4 text-xl font-semibold text-foreground">{cluster.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{cluster.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {cluster.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border/70 bg-muted/40 py-20">
        <div className="container space-y-14">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-background px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground dark:border-slate-700">
              <Workflow className="h-4 w-4" />
              Operational blueprint
            </span>
            <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              A support journey designed for quick resolution and lasting loyalty
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Every stage blends automation with human empathy. Distributors receive answers faster, while leadership gains the evidence required for continuous improvement.
            </p>
          </div>
          <div className="relative grid gap-10 lg:grid-cols-4">
            <div className="absolute inset-y-0 left-[12.5%] hidden w-px bg-gradient-to-b from-blue-500/50 via-transparent to-transparent lg:block" aria-hidden />
            <div className="absolute inset-y-0 left-[37.5%] hidden w-px bg-gradient-to-b from-blue-500/50 via-transparent to-transparent lg:block" aria-hidden />
            <div className="absolute inset-y-0 left-[62.5%] hidden w-px bg-gradient-to-b from-blue-500/50 via-transparent to-transparent lg:block" aria-hidden />
            {WORKFLOW_STAGES.map((stage, index) => (
              <article
                key={stage.stage}
                className="relative rounded-3xl border border-slate-200/70 bg-background/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/40"
              >
                <div className="flex items-center gap-3 text-sm font-semibold text-muted-foreground">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-200">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <stage.icon className="h-5 w-5 text-blue-600 dark:text-blue-200" />
                  <span className="uppercase tracking-widest">{stage.stage}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{stage.summary}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{stage.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container grid gap-12 lg:grid-cols-[minmax(0,0.52fr)_minmax(0,0.48fr)] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-600 dark:border-slate-700 dark:text-slate-200">
            <LifeBuoy className="h-4 w-4" />
            Outcomes you can prove
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Support excellence that strengthens retention and trust
          </h2>
          <p className="text-base text-muted-foreground">
            Cloud MLM Software’s ticket system is powered by a resilient open-source engine—secure, extensible, and adaptable to the look and feel of your brand. It is engineered for AI-readiness so modern chatbots and assistants can surface relevant tickets without compromising governance.
          </p>
          <p className="text-base text-muted-foreground">
            Whether you operate in one market or twenty, the module scales with your organisation, offering consistent experiences in every language and region.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href={contactHref}>
                Plan your rollout
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-500/30 dark:text-blue-100 dark:hover:bg-blue-500/10">
              <Link href={featuresHref}>
                Explore more features
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
        <div className="grid gap-6">
          {OUTCOME_SIGNALS.map((signal) => (
            <article
              key={signal.heading}
              className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/60 dark:shadow-none"
            >
              <signal.icon className="h-8 w-8 text-blue-600 dark:text-blue-300" />
              <h3 className="mt-4 text-xl font-semibold text-foreground">{signal.heading}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{signal.narrative}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 rounded-3xl border border-blue-200/60 bg-blue-50/50 p-10 shadow-sm dark:border-blue-500/30 dark:bg-blue-500/10">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-blue-900 dark:text-blue-100">
              Ready to modernise your support experience?
            </h2>
            <p className="text-base text-blue-800/80 dark:text-blue-100/80">
              Bring your existing customer service data and we will configure the support ticket system module with dashboards, notifications, and workflows tailored to your organisation.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-blue-600 text-white hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400">
              <Link href={contactHref}>
                Book a working session
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-blue-200 bg-white text-blue-700 hover:bg-blue-100 dark:border-blue-500/30 dark:bg-transparent dark:text-blue-100 dark:hover:bg-blue-500/10"
            >
              <Link href={demoHref}>See the module in action</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
