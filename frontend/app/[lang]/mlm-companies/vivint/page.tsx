import type { CSSProperties, ComponentType } from "react";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { buildLocalizedPath } from "@/lib/locale-links";
import { isSupportedLocale } from "@/lib/i18n-utils";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Building2,
  Home,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
  Wifi
} from "lucide-react";
import { ChartLineUp, ClipboardText, DeviceMobile, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type SmartMetric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type InnovationPillar = {
  title: string;
  description: string;
  proof: string;
  icon: IconType;
};

type FieldMotion = {
  stage: string;
  narrative: string;
  enablement: string;
  icon: IconType;
};

type Watchpoint = {
  title: string;
  risk: string;
  mitigation: string;
  icon: IconType;
};

type CloudPlay = {
  title: string;
  description: string;
  outcome: string;
  icon: IconType;
};

type CoreFact = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

const SMART_METRICS: SmartMetric[] = [
  {
    label: "Revenue mix",
    value: "$290M recurring",
    detail: "Monitoring subscriptions, premium installs, and device bundles sustain predictable growth.",
    icon: ChartLineUp
  },
  {
    label: "Households served",
    value: "570K+ homes",
    detail: "Customers across the United States and Canada rely on Vivint’s connected ecosystem.",
    icon: Home
  },
  {
    label: "Specialists",
    value: "5,000+ professionals",
    detail: "Consultants, technicians, and support talent deliver concierge smart home experiences.",
    icon: Users
  },
  {
    label: "Founded",
    value: "2010 rebrand",
    detail: "Transitioned from APX Alarm into a fully integrated smart home powerhouse.",
    icon: Building2
  },
  {
    label: "Sales method",
    value: "In-home consultations",
    detail: "Single-level compensation anchored in guided, person-to-person selling.",
    icon: ClipboardText
  }
];

const INNOVATION_PILLARS: InnovationPillar[] = [
  {
    title: "Connected living",
    description:
      "Smart security, cameras, sensors, lighting, and energy management within one intuitive app.",
    proof: "Vivint Smart Hub and app updates showcased at CES and industry events.",
    icon: Home
  },
  {
    title: "Professional design & service",
    description:
      "Consultative sales, custom installation, and 24/7 monitoring deliver peace of mind.",
    proof: "JD Power awards for customer satisfaction in professionally installed systems.",
    icon: ShieldCheck
  },
  {
    title: "Responsible growth",
    description:
      "Transparent pricing, FTC-compliant agreements, and sustainability initiatives support trust.",
    proof: "Public consumer protection settlements resolved with enhanced compliance programs.",
    icon: Sparkles
  }
];

const FIELD_MOTIONS: FieldMotion[] = [
  {
    stage: "Assess household lifestyles",
    narrative:
      "Consultants map family routines, property layouts, and security needs before recommending bundles.",
    enablement: "Digital property surveys, AR visualisation, and compliance-ready proposals.",
    icon: ClipboardText
  },
  {
    stage: "Deliver seamless installs",
    narrative:
      "Licensed technicians configure smart hubs, sensors, and voice integrations while educating customers.",
    enablement: "Install scheduling, quality checklists, and training workflows accessible via mobile.",
    icon: DeviceMobile
  },
  {
    stage: "Maintain proactive service",
    narrative:
      "Support teams monitor system health, push firmware updates, and resolve issues before they escalate.",
    enablement: "Remote diagnostics, customer satisfaction dashboards, and retention trigger alerts.",
    icon: UsersThree
  }
];

const WATCHPOINTS: Watchpoint[] = [
  {
    title: "Regulatory compliance",
    risk: "Door-to-door and phone sales face strict disclosure and cancellation requirements.",
    mitigation: "Embed e-contracts, cooling-off reminders, and audit trails for every transaction.",
    icon: ShieldCheck
  },
  {
    title: "On-time installations",
    risk: "Rapid growth can strain scheduling, risking customer satisfaction and churn.",
    mitigation: "Predict workload, optimise routing, and send proactive ETA communications.",
    icon: DeviceMobile
  },
  {
    title: "Data privacy",
    risk: "Smart home devices collect sensitive data that must stay secure and transparent.",
    mitigation: "Automate consent logs, encryption monitoring, and incident response playbooks.",
    icon: Wifi
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "Smart home design studio",
    description:
      "Guides consultants through risk assessments, bundle selections, and ROI storytelling with compliance guardrails.",
    outcome: "Elevates consultative sales and reduces proposal rework.",
    icon: Home
  },
  {
    title: "Install orchestration engine",
    description:
      "Syncs workforce availability, parts logistics, and customer communications in real time.",
    outcome: "Boosts first-time fix rates and customer satisfaction.",
    icon: DeviceMobile
  },
  {
    title: "CX & retention dashboard",
    description:
      "Aggregates Net Promoter scores, service tickets, and system health to prioritise outreach.",
    outcome: "Reduces churn and highlights cross-sell opportunities.",
    icon: UsersThree
  },
  {
    title: "Compliance command centre",
    description:
      "Tracks disclosures, cancellation periods, and regulatory updates across U.S. states and provinces.",
    outcome: "Protects the brand while empowering the field with clear guidance.",
    icon: ShieldCheck
  }
];

const CORE_FACTS: CoreFact[] = [
  {
    label: "Revenue",
    value: "$290M (est.)",
    description: "Anchored in subscription monitoring, professional installation, and smart device packages.",
    icon: ChartLineUp
  },
  {
    label: "Founded",
    value: "2010",
    description: "Rebranded from APX Alarm to deliver a unified smart home platform.",
    icon: Building2
  },
  {
    label: "Compensation structure",
    value: "Single-level plan",
    description: "Rewards verified installs, service quality, and referral-driven growth.",
    icon: Award
  },
  {
    label: "Employees",
    value: "5,000+ experts",
    description: "Engineers, installers, and customer success teams across North America.",
    icon: Users
  },
  {
    label: "Headquarters",
    value: "Provo, Utah",
    description: "Corporate campus connecting product, operations, and customer experience.",
    icon: MapPin
  },
  {
    label: "Primary market",
    value: "United States & Canada",
    description: "High adoption in suburban and urban households seeking reliable security.",
    icon: ShieldCheck
  },
  {
    label: "Product focus",
    value: "Home security & automation",
    description: "Smart hubs, cameras, sensors, and energy management in one intuitive app.",
    icon: Home
  },
  {
    label: "Sales method",
    value: "Person-to-person",
    description: "Consultative field teams design bespoke packages and handle onboarding.",
    icon: ClipboardText
  }
];

const PRIMARY_TRUST_SCORE = {
  score: 68,
  label: "Smart home trust index",
  summary: "Combines product reliability, service excellence, and regulatory maturity across Vivint’s footprint."
};

const GAUGE_STYLE: CSSProperties = {
  background: `conic-gradient(#38bdf8 ${PRIMARY_TRUST_SCORE.score * 3.6}deg, rgba(56, 189, 248, 0.25) 0deg)`
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Vivint Smart Home Experience Blueprint";
  const description =
    "Analyse how Vivint delivers award-winning smart home solutions and how Cloud MLM Software elevates consultative selling, installations, and compliance.";
  const keywords = [
    "Vivint smart home analysis",
    "Vivint direct sales strategy",
    "home automation revenue enablement",
    "smart security customer experience",
    "Cloud MLM Software smart home"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/vivint", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type VivintPageProps = {
  params: { lang: SupportedLocale };
};

export default function VivintPage({ params }: VivintPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const indexHref = buildLocalizedPath("/mlm-companies", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-950 via-sky-900 to-purple-900 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgba(56,189,248,0.32),transparent_55%),radial-gradient(circle_at_82%_28%,rgba(168,85,247,0.3),transparent_58%)]" />
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.55fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-300/50 bg-sky-500/10 px-4 py-1 text-sm font-semibold text-sky-100">
              Vivint • Smart Home Innovation
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Deliver intelligence, protection, and delight in every smart home experience.
            </h1>
            <p className="text-base text-sky-50/80">
              Vivint stands as one of North America’s premier home automation firms, pairing award-winning technology with
              concierge-level service. More than 5,000 specialists enhance security and automation for nearly 570,000 clients
              across the United States and Canada.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={demoHref}>
                  Explore the smart home cockpit
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-sky-200/60 text-sky-100 hover:bg-sky-500/10"
              >
                <Link href={pricingHref}>
                  Review technology bundles
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-sky-100 underline underline-offset-4 hover:bg-white/10">
                <Link href={indexHref}>
                  Return to MLM company index
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="space-y-2 text-sm text-sky-50/80">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-sky-200" aria-hidden />
                Provo, Utah • Serving the United States & Canada
              </p>
              <p>
                “Security, energy, and automation only shine when installations are flawless and service is proactive—technology
                with a human heartbeat.”
              </p>
            </div>
          </div>

          <aside className="grid gap-6 rounded-3xl border border-white/15 bg-white/5 p-8 shadow-xl backdrop-blur">
            <div className="flex flex-col items-center gap-5 rounded-2xl border border-white/25 bg-black/30 p-6 text-center">
              <div className="relative flex h-44 w-44 items-center justify-center rounded-full p-4" style={GAUGE_STYLE} aria-hidden>
                <div className="absolute inset-6 flex flex-col items-center justify-center rounded-full bg-black/40 text-center shadow-lg">
                  <span className="text-4xl font-semibold text-white">{PRIMARY_TRUST_SCORE.score}</span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-sky-100/80">
                    {PRIMARY_TRUST_SCORE.label}
                  </span>
                </div>
              </div>
              <p className="text-xs text-sky-50/80">{PRIMARY_TRUST_SCORE.summary}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {SMART_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex h-full flex-col gap-3 rounded-2xl border border-white/20 bg-black/30 p-4 shadow-sm transition hover:-translate-y-1 hover:bg-black/40"
                  >
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/20 text-sky-100">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-sky-100/80">{metric.label}</span>
                    </div>
                    <span className="text-lg font-semibold text-white">{metric.value}</span>
                    <p className="text-xs text-sky-50/80">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
          <article className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-white via-sky-50 to-slate-50 p-10 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
            <div className="pointer-events-none absolute -top-24 right-0 h-56 w-56 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-500/20" />
            <div className="pointer-events-none absolute -bottom-24 left-0 h-48 w-48 rounded-full bg-purple-200/40 blur-3xl dark:bg-purple-500/10" />
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary dark:border-primary/10 dark:bg-primary/15">
                Company snapshot
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Leading the way in home automation
              </h2>
              <p className="text-base text-muted-foreground">
                Vivint’s comprehensive product suite spans smart home security, energy management, and automation devices that keep
                households protected and effortlessly connected. Intuitive mobile and voice experiences give homeowners remote control
                and confidence from day one.
              </p>
              <p className="text-base text-muted-foreground">
                The company’s success is fuelled by obsessing over customer satisfaction. Highly trained professionals co-design each
                system, manage seamless installations, and deliver proactive follow-up—setting a high watermark for connected living
                in North America.
              </p>
            </div>
          </article>
          <div className="grid content-start gap-6">
            <div className="rounded-3xl border border-primary/25 bg-primary/5 p-6 text-sm text-primary dark:border-primary/15 dark:bg-primary/15">
              <p className="font-semibold">
                Single-level compensation thrives when every visit ends with a tailored, regulation-ready smart home plan.
              </p>
              <p className="mt-2 text-primary/80 dark:text-primary/70">
                Use Cloud MLM Software to keep disclosures, timelines, and personalised configurations in perfect sync.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {CORE_FACTS.map((fact) => {
                const Icon = fact.icon;
                return (
                  <article
                    key={fact.label}
                    className="group flex h-full flex-col gap-3 rounded-2xl border border-border/50 bg-background/95 p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary/20 dark:bg-primary/15">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{fact.label}</p>
                      <p className="text-lg font-semibold text-foreground">{fact.value}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{fact.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 rounded-3xl border border-primary/15 bg-gradient-to-br from-sky-50 via-white to-slate-50 p-10 dark:border-primary/10 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Innovation pillars that differentiate Vivint</h2>
            <p className="text-sm text-muted-foreground">
              Reinforce these themes in every consult, install, and service touchpoint to keep experiences premium.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {INNOVATION_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/70"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground">{pillar.description}</p>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {pillar.proof}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.6fr)]">
          <div className="space-y-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Field motions for smart home excellence</h2>
              <p className="text-sm text-muted-foreground">
                Align sales, installation, and service so every customer feels guided, protected, and delighted.
              </p>
            </div>
            <div className="space-y-5">
              {FIELD_MOTIONS.map((motion) => {
                const Icon = motion.icon;
                return (
                  <article
                    key={motion.stage}
                    className="flex gap-4 rounded-3xl border border-primary/20 bg-primary/5 p-5 dark:border-primary/15 dark:bg-primary/10"
                  >
                    <span className="mt-1 inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary shadow dark:bg-slate-950/60">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{motion.stage}</h3>
                      <p className="text-sm text-muted-foreground">{motion.narrative}</p>
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                        {motion.enablement}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Watchpoints to manage</h2>
              <p className="text-sm text-muted-foreground">
                Anticipate the realities of scaling high-touch smart home experiences across North America.
              </p>
            </div>
            <div className="space-y-5">
              {WATCHPOINTS.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="flex gap-4 rounded-3xl border border-primary/25 bg-primary/5 p-5 dark:border-primary/20 dark:bg-primary/10"
                  >
                    <span className="mt-1 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary shadow dark:bg-slate-950/60">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.risk}</p>
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                        {item.mitigation}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-8 rounded-3xl border border-border/60 bg-background p-10 shadow-sm dark:border-border/40 dark:bg-slate-950/80">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.6fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Cloud MLM Software plays for Vivint teams
            </h2>
            <p className="text-sm text-muted-foreground">
              Deliver technology that keeps consultants confident, technicians efficient, and customers amazed.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Architect my smart home rollout
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href={demoHref}>
                  Schedule a guided demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {CLOUD_PLAYS.map((play) => {
              const Icon = play.icon;
              return (
                <article
                  key={play.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
                  <p className="text-sm text-muted-foreground">{play.description}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {play.outcome}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
