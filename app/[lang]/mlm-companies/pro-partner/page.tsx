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
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Beaker,
  BrainCircuit,
  Factory,
  FlaskConical,
  Globe2,
  Microscope,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TestTube
} from "lucide-react";
import { ChartLineUp, Handshake, Lightning, UsersFour, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type SciencePillar = {
  title: string;
  description: string;
  emphasis: string;
  icon: IconType;
};

type PartnerEnabler = {
  title: string;
  summary: string;
  proof: string;
  icon: IconType;
};

type PlatformCapability = {
  title: string;
  description: string;
  payoff: string;
  icon: IconType;
};

const PRO_PARTNER_METRICS: Metric[] = [
  {
    label: "Revenue",
    value: "$246M+",
    detail: "Certified nutraceutical leader recognised across Taiwan and Asia.",
    icon: BarChart3
  },
  {
    label: "Founded",
    value: "1993 · Taipei",
    detail: "Three decades of science-led product development and clinical partnerships.",
    icon: Factory
  },
  {
    label: "Consultant network",
    value: "Regional wellness specialists",
    detail: "Educators and health advocates guiding personalised supplementation journeys.",
    icon: UsersFour
  },
  {
    label: "Primary market",
    value: "Asia",
    detail: "Anchored in Taiwan with expansion into Southeast Asia and digital-first communities.",
    icon: Globe2
  },
  {
    label: "Product expertise",
    value: "Health care & nutrition",
    detail: "Flagship immunity, metabolic, and holistic well-being programmes.",
    icon: Stethoscope
  },
  {
    label: "Sales motion",
    value: "Guided consultations",
    detail: "Person-to-person coaching, supported by hybrid events and virtual clinics.",
    icon: Handshake
  }
];

const SCIENCE_PILLARS: SciencePillar[] = [
  {
    title: "Clinical credibility",
    description:
      "Pro-Partner relies on rigorous lab testing, national certifications, and award-winning product breakthroughs to earn trust.",
    emphasis: "Consultants translate scientific insights into everyday wellness routines clients can rely on.",
    icon: Microscope
  },
  {
    title: "Holistic formulation",
    description:
      "Product lines integrate traditional nourishment with modern bioscience, tackling immunity, energy, and longevity in one ecosystem.",
    emphasis: "Nutrition plans are tailored to lifestyle, climate, and health goals for measurable outcomes.",
    icon: FlaskConical
  },
  {
    title: "Recognition & impact",
    description:
      "Industry awards and community programmes showcase Pro-Partner’s dedication to elevating public health across Asia.",
    emphasis: "Social proof amplifies brand equity and keeps advocates proud to represent the mission.",
    icon: Sparkles
  }
];

const PARTNER_ENABLERS: PartnerEnabler[] = [
  {
    title: "Science-backed onboarding",
    summary:
      "Hybrid academies equip distributors with compliance-ready scripts, nutrition education, and diagnostic storytelling.",
    proof: "Graduates shorten their ramp-up time with interactive simulations and AI-generated follow-up plans.",
    icon: BrainCircuit
  },
  {
    title: "Consultation mastery",
    summary:
      "Mobile playbooks centralise symptom checklists, ingredient libraries, and comparison tools for on-the-spot coaching.",
    proof: "Leaders report higher conversion when every recommendation is tied to data-rich assessments.",
    icon: Beaker
  },
  {
    title: "Momentum intelligence",
    summary:
      "Real-time dashboards display progression, retention, and recognition signals so mentors can intervene early.",
    proof: "Predictive alerts surface at-risk teams and highlight best practices for emerging markets.",
    icon: Lightning
  }
];

const CLOUD_PRO_PARTNER_CAPABILITIES: PlatformCapability[] = [
  {
    title: "Precision wellness blueprints",
    description:
      "Fuse consultation notes, lab inputs, and purchase history to generate AI-assisted supplement and lifestyle plans.",
    payoff: "Deliver medical-grade clarity while keeping advisors focused on compassionate client care.",
    icon: ChartLineUp
  },
  {
    title: "Regulatory-ready operations",
    description:
      "Automate documentation, certifications, and ingredient disclosures for every market without slowing launch cycles.",
    payoff: "Scale responsibly across Southeast Asia with confidence in compliance and traceability.",
    icon: ShieldCheck
  },
  {
    title: "Integrated research pipeline",
    description:
      "Centralise R&D feedback loops, clinical trial data, and product education updates for corporate and field teams.",
    payoff: "Keep distributors synced with the latest breakthroughs and keep innovation stories consistent.",
    icon: TestTube
  },
  {
    title: "Always-on community support",
    description:
      "Power multilingual knowledge hubs, mentorship pods, and wellness challenge automation from one platform.",
    payoff: "Extend Pro-Partner’s culture of empowerment into every device, event, and region.",
    icon: UsersThree
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Pro-Partner MLM Company Profile & Science-Driven Enablement";
  const description =
    "Explore how Pro-Partner pairs clinical-grade wellness with relationship-first selling—and discover how Cloud MLM Software powers diagnostics, compliance, and consultant success across Asia.";
  const keywords = [
    "Pro-Partner MLM review",
    "Taiwan wellness direct sales",
    "Pro-Partner consultant tools",
    "Cloud MLM Software for nutraceutical brands",
    "AI health consultation platform"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/pro-partner", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ProPartnerPageProps = {
  params: { lang: SupportedLocale };
};

export default function ProPartnerPage({ params }: ProPartnerPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-[#f3fff7] via-[#f0f8ff] to-[#eef9ff] py-20 dark:border-border/40 dark:from-slate-950/70 dark:via-slate-950 dark:to-cyan-950/50">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_12%_22%,rgba(34,197,94,0.18),transparent_55%),radial-gradient(circle_at_82%_30%,rgba(56,189,248,0.18),transparent_60%),radial-gradient(circle_at_48%_85%,rgba(37,99,235,0.18),transparent_65%)]"
          aria-hidden
        />
        <div className="container relative z-10 grid gap-16 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.58fr)]">
          <div className="space-y-10">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-200">
              <span className="rounded-full border border-emerald-200/60 bg-white/80 px-4 py-1 shadow-sm backdrop-blur dark:border-white/20 dark:bg-slate-950/60">
                Clinical wellness leader
              </span>
              <span className="rounded-full border border-cyan-200/60 bg-cyan-50/80 px-4 py-1 text-cyan-600 shadow-sm backdrop-blur dark:border-cyan-400/40 dark:bg-cyan-900/40 dark:text-cyan-200">
                Asia-wide community
              </span>
              <span className="rounded-full border border-blue-200/60 bg-blue-50/80 px-4 py-1 text-blue-600 shadow-sm backdrop-blur dark:border-blue-400/40 dark:bg-blue-900/40 dark:text-blue-200">
                Science-first storytelling
              </span>
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Pro-Partner: precision wellness, empowered consultants, and a healthier tomorrow for Asia.
              </h1>
              <p className="text-base text-muted-foreground">
                Pro-Partner elevates health journeys with clinically validated supplements and compassionate advisors. Cloud MLM Software becomes
                the digital backbone—keeping diagnostics organised, compliance watertight, and every consultant supported at scale.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Architect your Pro-Partner platform
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={pricingHref}>
                  Explore pricing models
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="hover:bg-emerald-100/60 dark:hover:bg-emerald-500/20">
                <Link href={demoHref}>
                  See an AI health consult demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute inset-0 -z-10 rounded-[3rem] border border-emerald-200/70 bg-white/85 shadow-[0_48px_120px_-70px_rgba(56,189,248,0.4)] backdrop-blur dark:border-white/15 dark:bg-slate-950/80" aria-hidden />
            <div className="relative grid gap-5 rounded-[2.6rem] p-8">
              {PRO_PARTNER_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex flex-col gap-3 rounded-3xl border border-transparent bg-gradient-to-r from-white/95 via-white/80 to-white/60 p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300/70 hover:shadow-lg dark:from-slate-900/85 dark:via-slate-900/60 dark:to-slate-900/30"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">{metric.label}</h2>
                    </div>
                    <p className="text-xl font-semibold text-foreground">{metric.value}</p>
                    <p className="text-sm text-muted-foreground">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-10 rounded-[3rem] border border-border/60 bg-gradient-to-br from-background to-emerald-50/60 p-10 shadow-lg shadow-emerald-100/40 dark:border-border/40 dark:from-slate-950 dark:to-slate-950/70">
        <div className="space-y-4 md:max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 dark:border-emerald-400/40 dark:bg-emerald-900/40 dark:text-emerald-200">
            Science pillars
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Research-driven credibility anchors every Pro-Partner story.
          </h2>
          <p className="text-sm text-muted-foreground">
            From lab breakthroughs to community wellness impact, Pro-Partner’s legacy stands on tangible results. Cloud MLM Software curates and
            scales those stories so every advisor can speak with authority.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {SCIENCE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-emerald-200/40 bg-background/95 p-6 transition hover:-translate-y-1 hover:border-emerald-400/70 hover:shadow-xl dark:border-emerald-400/30 dark:bg-slate-950/85"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
                <p className="text-xs font-medium text-emerald-600 dark:text-emerald-200">{pillar.emphasis}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-background via-background to-cyan-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-cyan-900/40">
        <div
          className="absolute inset-x-0 top-16 h-60 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_65%)] blur-3xl dark:opacity-70"
          aria-hidden
        />
        <div className="container relative z-10 grid gap-10 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,0.55fr)]">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/60 bg-cyan-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:border-cyan-400/40 dark:bg-cyan-900/40 dark:text-cyan-200">
              Consultant enablement
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Equip every advisor with confident, compliant, and caring consultation flows.
            </h2>
            <p className="text-sm text-muted-foreground">
              Cloud MLM Software turns complex product science into actionable guidance so Pro-Partner’s community can scale impact without losing
              the human touch.
            </p>
          </div>
          <div className="rounded-[2.5rem] border border-border/50 bg-white/85 p-8 shadow-lg shadow-cyan-200/40 backdrop-blur dark:border-border/40 dark:bg-slate-950/85 dark:shadow-cyan-900/40">
            <ul className="space-y-6">
              {PARTNER_ENABLERS.map((enabler) => {
                const Icon = enabler.icon;
                return (
                  <li key={enabler.title} className="flex gap-4">
                    <span className="mt-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-cyan-100 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-200">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{enabler.title}</h3>
                      <p className="text-sm text-muted-foreground">{enabler.summary}</p>
                      <p className="rounded-2xl border border-cyan-200/60 bg-cyan-50/70 p-4 text-xs text-cyan-600 dark:border-cyan-400/30 dark:bg-cyan-900/40 dark:text-cyan-200">
                        {enabler.proof}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary dark:border-primary/40 dark:bg-primary/15">
            Cloud MLM Software advantage
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Build a compliant, insight-rich ecosystem that keeps Pro-Partner at the forefront of wellness innovation.
          </h2>
          <p className="text-sm text-muted-foreground">
            With Cloud MLM Software, leadership gains visibility, researchers stay connected to the field, and consultants deliver bespoke care
            grounded in data.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {CLOUD_PRO_PARTNER_CAPABILITIES.map((capability) => {
            const Icon = capability.icon;
            return (
              <article
                key={capability.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/50 bg-background/95 p-6 shadow-md transition hover:border-primary/50 hover:shadow-xl dark:border-border/40 dark:bg-slate-950/85"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{capability.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
                <p className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-xs text-primary dark:border-primary/30 dark:bg-primary/10">
                  {capability.payoff}
                </p>
              </article>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href={modulesHref}>
              Review health-tech modules
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={contactHref}>
              Shape your expansion plan
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
