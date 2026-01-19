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
  Blocks,
  Globe2,
  LayoutDashboard,
  Megaphone,
  PenTool,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";
import { Devices, RocketLaunch } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type ValueProp = {
  title: string;
  description: string;
  icon: IconType;
};

type ServiceStream = {
  title: string;
  detail: string;
  highlights: string[];
};

type DeliveryStep = {
  name: string;
  focus: string;
  timeframe: string;
};

type Guideline = {
  title: string;
  tip: string;
};

const VALUE_PROPS: ValueProp[] = [
  {
    title: "Brand-led digital experiences",
    description:
      "Design systems grounded in your identity to deliver cohesive journeys for customers, promoters, and prospects.",
    icon: LayoutDashboard
  },
  {
    title: "Conversion-ready infrastructure",
    description:
      "Accessibility, performance, and SEO are built in—ensuring your web presence ranks and converts globally.",
    icon: ShieldCheck
  },
  {
    title: "Growth intelligence baked in",
    description:
      "Analytics, marketing automation, and experimentation frameworks surface insights your leadership can act on.",
    icon: Sparkles
  },
  {
    title: "Global-first localisation",
    description:
      "Multilingual content, regulatory guardrails, and device-responsive design support every market you operate in.",
    icon: Globe2
  }
];

const SERVICE_STREAMS: ServiceStream[] = [
  {
    title: "Experience & content design",
    detail:
      "Craft storytelling that positions your company as an innovation leader while guiding visitors toward action.",
    highlights: [
      "UX research, wireframes, and interactive prototypes aligned to buyer journeys.",
      "Component libraries and design tokens for consistent, rapid iteration.",
      "Long-form content and landing pages optimised for SEO and AIO discoverability."
    ]
  },
  {
    title: "Platform engineering",
    detail:
      "Build modular web foundations that connect seamlessly with Cloud MLM Software, CRMs, and analytics stacks.",
    highlights: [
      "Headless CMS implementations with governance and workflow automation.",
      "API integrations for calculators, enrolment, support desks, and learning portals.",
      "Security hardening with monitoring, backup, and incident playbooks."
    ]
  },
  {
    title: "Growth operations",
    detail:
      "Enable marketing, sales, and field teams with data-driven tooling that keeps audiences engaged post-launch.",
    highlights: [
      "Marketing automation flows, nurture sequences, and AI-generated insights.",
      "Localization frameworks for rapid campaign rollout across new markets.",
      "Training assets and documentation for internal teams and channel partners."
    ]
  }
];

const DELIVERY_STEPS: DeliveryStep[] = [
  {
    name: "Discover & align",
    focus:
      "Run strategic workshops, analyse analytics, and synthesise market research to build a north-star digital vision.",
    timeframe: "Weeks 1-2"
  },
  {
    name: "Design & build",
    focus:
      "Parallel design sprints and engineering cycles with usability testing, code reviews, and automation pipelines.",
    timeframe: "Weeks 3-8"
  },
  {
    name: "Launch & optimise",
    focus:
      "Staged rollouts, experimentation roadmaps, and continuous content optimisation drive adoption and conversion.",
    timeframe: "Weeks 9-12+"
  }
];

const PARTNER_GUIDELINES: Guideline[] = [
  {
    title: "Clarify goals & budget early",
    tip: "We co-create a prioritised roadmap that balances quick wins with foundational investments."
  },
  {
    title: "Demand measurable outcomes",
    tip: "Dashboards, KPIs, and success metrics are defined up front so you can report impact to stakeholders."
  },
  {
    title: "Plan for continuous evolution",
    tip: "We deliver enablement, documentation, and training so your team can iterate confidently post-launch."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Web Development Services for MLM Enterprises | Cloud MLM Software";
  const description =
    "Elevate your MLM brand online with Cloud MLM Software’s web development services. Strategy-led design, modular engineering, and growth operations for corporate, distributor, and customer journeys.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/services/web-development", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type WebDevelopmentPageProps = {
  params: { lang: SupportedLocale };
};

export default function WebDevelopmentPage({ params }: WebDevelopmentPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const servicesHref = buildLocalizedPath("/services", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/50 bg-gradient-to-br from-slate-50 via-white to-emerald-50 px-6 py-20 shadow-sm dark:from-slate-950 dark:via-slate-950 dark:to-emerald-950 sm:px-12">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_15%,rgba(16,185,129,0.18),transparent_45%),radial-gradient(circle_at_80%_15%,rgba(59,130,246,0.16),transparent_50%),radial-gradient(circle_at_55%_85%,rgba(236,72,153,0.12),transparent_55%)]" />
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-300">
              Web innovation studio
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Build a modern web presence that proves your MLM leadership.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground">
              Cloud MLM Software’s cross-functional teams design and develop responsive, conversion-driven websites that
              showcase your brand, empower distributors, and attract customers. We translate strategy into digital
              experiences that deliver measurable growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Plan my web project
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={servicesHref}>
                  Explore our services
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="grid gap-4 rounded-3xl border border-border/50 bg-white/80 p-6 shadow-lg backdrop-blur dark:bg-slate-950/70">
            {VALUE_PROPS.map((prop) => {
              const Icon = prop.icon;
              return (
                <article
                  key={prop.title}
                  className="flex gap-4 rounded-2xl border border-border/40 bg-muted/40 p-5 dark:border-slate-800 dark:bg-slate-900/70"
                >
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-300">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-1.5">
                    <h2 className="text-sm font-semibold text-foreground">{prop.title}</h2>
                    <p className="text-xs text-muted-foreground">{prop.description}</p>
                  </div>
                </article>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Service streams designed for enterprise-grade delivery
          </h2>
          <p className="text-sm text-muted-foreground">
            Each engagement blends strategic insight with executional excellence, giving your teams a single partner for
            design, engineering, and growth.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {SERVICE_STREAMS.map((stream) => (
            <article
              key={stream.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-border/40 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:bg-slate-950/75"
            >
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-emerald-500" aria-hidden />
                <h3 className="text-lg font-semibold text-foreground">{stream.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{stream.detail}</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {stream.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <PenTool className="mt-1 h-4 w-4 text-emerald-500" aria-hidden />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,280px)_1fr]">
          <aside className="rounded-3xl border border-border/40 bg-white/80 p-6 shadow-sm dark:bg-slate-950/75">
            <div className="space-y-3">
              <Devices className="h-6 w-6 text-emerald-500" aria-hidden />
              <h2 className="text-xl font-semibold text-foreground">Execution framework</h2>
              <p className="text-sm text-muted-foreground">
                Every project follows a transparent cadence with clearly defined owners, documentation, and go-live
                playbooks.
              </p>
            </div>
          </aside>
          <ol className="space-y-6">
            {DELIVERY_STEPS.map((step, index) => (
              <li
                key={step.name}
                className="relative rounded-3xl border border-border/40 bg-white/90 p-6 shadow-sm dark:bg-slate-950/75"
              >
                <span className="absolute -left-4 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-500/40 bg-white text-lg font-semibold text-emerald-600 shadow-sm dark:bg-slate-950">
                  {index + 1}
                </span>
                <div className="pl-6">
                  <h3 className="text-lg font-semibold text-foreground">{step.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.focus}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    <Blocks className="h-4 w-4" aria-hidden />
                    {step.timeframe}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Choosing the right partner matters
          </h2>
          <p className="text-sm text-muted-foreground">
            We help you navigate vendor selection and internal alignment with a consultative approach rooted in
            transparency.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PARTNER_GUIDELINES.map((guideline) => (
            <article
              key={guideline.title}
              className="flex h-full flex-col gap-3 rounded-3xl border border-border/40 bg-white/90 p-6 shadow-sm dark:bg-slate-950/75"
            >
              <Megaphone className="h-5 w-5 text-emerald-500" aria-hidden />
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {guideline.title}
              </h3>
              <p className="text-sm text-muted-foreground">{guideline.tip}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container overflow-hidden rounded-3xl border border-border/50 bg-slate-900 text-white shadow-sm dark:border-slate-800">
        <div className="grid gap-10 px-6 py-16 sm:px-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to modernise your digital footprint?
            </h2>
            <p className="text-sm text-slate-200">
              We combine storytelling, engineering, and operations to deliver websites that inspire trust and drive
              action. Let’s build your next release together.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="default" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link href={contactHref}>
                  Talk to web experts
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10">
                <Link href={servicesHref}>
                  Review service catalogue
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-4 rounded-3xl border border-white/20 bg-white/10 p-6">
            <div className="flex items-center gap-3">
              <RocketLaunch className="h-6 w-6 text-white" aria-hidden />
              <h3 className="text-lg font-semibold">Launch support & enablement</h3>
            </div>
            <p className="text-sm text-slate-100">
              Receive hypercare, measurement dashboards, and documentation that keep internal teams confident long after
              go-live.
            </p>
          </aside>
        </div>
      </section>
    </div>
  );
}
