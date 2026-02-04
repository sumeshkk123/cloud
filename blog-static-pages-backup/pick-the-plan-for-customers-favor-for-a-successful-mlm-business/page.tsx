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
  Compass,
  Handshake,
  LayoutDashboard,
  Lightbulb,
  LineChart,
  MapPin,
  Sparkles,
  Target,
  Users
} from "lucide-react";
import {
  ChartLineUp,
  CirclesThreePlus,
  MagnifyingGlass,
  Path,
  SealCheck,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Insight = {
  title: string;
  description: string;
  icon: IconType;
};

type Step = {
  title: string;
  stage: string;
  description: string;
  icon: IconType;
};

type PlanProfile = {
  name: string;
  promise: string;
  customerFit: string;
  icon: IconType;
};

type BlueprintItem = {
  title: string;
  detail: string;
  icon: IconType;
};

const HERO_PARAGRAPH =
  "Modern multi-level marketing spans boutique startups to global brands, all experimenting with uni-level, binary, board, monoline, party-plan, and hybrid commissions. The programs that keep accelerating are the ones tuned to customer expectations before the first payout is issued.";

const HERO_FEATURES: Insight[] = [
  {
    title: "Customer listening loops",
    description: "Capture product adoption signals, feedback, and cancellations early so compensation stays aligned with real buying behavior.",
    icon: MagnifyingGlass
  },
  {
    title: "Empowered field teams",
    description: "Equip distributors with consultative scripts, objection handling, and local stories that reinforce trust at every touchpoint.",
    icon: UsersThree
  },
  {
    title: "Transparent earnings story",
    description: "Present payouts, caps, and timelines clearly—customers and regulators expect clarity before commitment.",
    icon: SealCheck
  }
];

const CUSTOMER_FOUNDATIONS: Insight[] = [
  {
    title: "Make customer favour the north star",
    description:
      "Stronger relationships unlock referrals, higher order values, and predictable retention. Prioritising customer satisfaction makes every MLM initiative more resilient.",
    icon: Handshake
  },
  {
    title: "Blend data with empathy",
    description:
      "Market research reveals gaps, yet it is the day-to-day conversations that surface preferences, cultural nuances, and objections worth solving.",
    icon: Lightbulb
  },
  {
    title: "Design plans around value",
    description:
      "When compensation mirrors what customers genuinely love—quality, experience, community—the sales cycle shortens and loyalty compounds.",
    icon: ChartLineUp
  }
];

const DISCOVERY_STEPS: Step[] = [
  {
    title: "Map the audience universe",
    stage: "Segment",
    description:
      "Cluster markets by demographics, digital maturity, lifestyle goals, and pain points to uncover distinct customer personas.",
    icon: MapPin
  },
  {
    title: "Shadow top distributors",
    stage: "Observe",
    description:
      "Join customer calls, track repeated questions, and capture stories that reveal what customers value about your offer.",
    icon: Users
  },
  {
    title: "Prototype value exchanges",
    stage: "Design",
    description:
      "Model bonuses, product bundles, and onboarding paths that reward real usage—and validate them with pilot groups.",
    icon: Sparkles
  },
  {
    title: "Continuously refine payouts",
    stage: "Optimise",
    description:
      "Review field data monthly, rebalance thresholds, and keep messaging current so expectations always match delivery.",
    icon: Target
  }
];

const PLAN_PROFILES: PlanProfile[] = [
  {
    name: "Binary plan",
    promise: "Simple two-leg structure with rapid duplication and balanced enrolments.",
    customerFit:
      "Best when customers expect fast mentorship, streamlined onboarding, and clarity across both legs of the tree.",
    icon: LayoutDashboard
  },
  {
    name: "Monoline plan",
    promise: "Single horizontal genealogy creates equal opportunity and predictable payouts.",
    customerFit:
      "Ideal for audiences drawn to fairness, transparency, and clear promotion milestones without structural complexity.",
    icon: LineChart
  },
  {
    name: "Australian X-up plan",
    promise: "Strategic pass-up model keeps rewards flowing to leaders who coach effectively.",
    customerFit:
      "Resonates in regions that celebrate mentorship and team growth over individual winning.",
    icon: Compass
  },
  {
    name: "Generation plan",
    promise: "Depth-driven bonuses recognise leaders who nurture multi-tier performance.",
    customerFit:
      "Perfect for markets where customers expect premium advisory experiences and layered product expertise.",
    icon: CirclesThreePlus
  },
  {
    name: "Party plan",
    promise: "Immersive events and shared experiences turn social gatherings into conversions.",
    customerFit:
      "Excels with lifestyle buyers who prefer demonstrations, sampling, and collaborative purchasing decisions.",
    icon: Sparkles
  },
  {
    name: "Breakaway plan",
    promise: "Allows rising leaders to spin out while keeping support from their original upline.",
    customerFit:
      "Rewarding when customers value entrepreneurial independence but still want access to premium support teams.",
    icon: Path
  }
];

const REGION_TAKEAWAYS: Insight[] = [
  {
    title: "Local compliance matters",
    description:
      "Income disclosures, refund policies, and digital taxation law vary widely. Localise every plan document before launch.",
    icon: SealCheck
  },
  {
    title: "Cultural buying signals",
    description:
      "Binary plans thrive where teamwork is celebrated, while hybrid or party formats resonate in markets that value experiential shopping.",
    icon: Compass
  },
  {
    title: "Language and currency readiness",
    description:
      "Offer multilingual portals, regional pricing, and settlement options so customers feel understood from the first interaction.",
    icon: UsersThree
  }
];

const EXECUTION_BLUEPRINT: BlueprintItem[] = [
  {
    title: "Coach distributor storytelling",
    detail:
      "Provide playbooks that emphasise ethical claims, transparent earnings, and real customer success stories tailored to each persona.",
    icon: Users
  },
  {
    title: "Operationalise feedback loops",
    detail:
      "Use analytics dashboards and monthly councils to capture complaints, celebrate wins, and update compensation logic quickly.",
    icon: ChartLineUp
  },
  {
    title: "Automate governance and reporting",
    detail:
      "Automated alerts for unusual payouts, volume spikes, or compliance breaches protect customer experience and brand trust.",
    icon: SealCheck
  }
];

const CHECKLIST_ITEMS: Insight[] = [
  {
    title: "Distributor enablement",
    description: "Train your field on product mastery, ethical selling, and how to escalate customer insights.",
    icon: UsersThree
  },
  {
    title: "Experience design",
    description: "Align onboarding, loyalty perks, and recognition programs to the motivations surfaced during research.",
    icon: Sparkles
  },
  {
    title: "Data-informed iteration",
    description: "Review net promoter scores, product mix, and cohort retention each month to fine-tune the plan.",
    icon: ChartLineUp
  }
];

const AUTHOR = {
  name: "Edward",
  role: "Research Analyst, Cloud MLM Software",
  bio: "Experienced research analyst with deep knowledge of MLM trends, compensation innovation, and cross-industry technology adoption. Passionate about translating insights into scalable, customer-centric growth strategies."
};

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Pick the Plan for Customers' Favor for a Successful MLM Business";
  const description =
    "Learn how to evaluate MLM compensation plans through a customer-first lens—covering research workflows, regional insights, and activation tactics that keep Cloud MLM Software clients ahead.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/pick-the-plan-for-customers-favor-for-a-successful-mlm-business", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PickPlanPageProps = {
  params: { lang: SupportedLocale };
};

export default function PickPlanForCustomersPage({ params }: PickPlanPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-emerald-50/70 shadow-2xl dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.22),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.14),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_70%)]" />
        <div className="relative grid gap-12 px-6 py-20 sm:px-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:px-20">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:border-emerald-500/30 dark:bg-slate-900/70 dark:text-emerald-200">
              <CirclesThreePlus className="h-4 w-4" aria-hidden />
              Customer-first strategy
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              Pick the plan customers love—and your MLM momentum will follow
            </h1>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">{HERO_PARAGRAPH}</p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-emerald-600 px-6 py-2 text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400"
              >
                <Link href={contactHref}>
                  Talk to a strategist
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-emerald-200 bg-white/80 px-6 py-2 text-emerald-700 transition hover:bg-emerald-100 dark:border-emerald-500/40 dark:bg-slate-900/60 dark:text-emerald-200 dark:hover:bg-slate-800"
              >
                <Link href={demoHref}>Explore live demo</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/70 bg-white/70 p-8 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-slate-900/70">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Signals to monitor</p>
            <div className="space-y-5">
              {HERO_FEATURES.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4 rounded-2xl border border-slate-100/70 bg-white/70 p-4 dark:border-slate-700/60 dark:bg-slate-900/70">
                  <feature.icon className="mt-1 h-6 w-6 flex-shrink-0 text-emerald-600 dark:text-emerald-300" aria-hidden />
                  <div className="space-y-1.5">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{feature.title}</p>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
              <Handshake className="h-4 w-4 text-emerald-600 dark:text-emerald-300" aria-hidden />
              Customer favour as foundation
            </span>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Make every plan decision serve the customer first</h2>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              Picked well, a compensation plan becomes a promise: that your best customers will always have a thoughtful journey, credible
              advisors, and products that stay relevant. Picked poorly, it erodes trust before a relationship begins. The Cloud MLM Software
              playbook pairs analytics, human insight, and training to keep that promise intact.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {CUSTOMER_FOUNDATIONS.map((item) => (
              <div key={item.title} className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-emerald-400/20 blur-2xl dark:bg-emerald-500/10" />
                <item.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
                <p className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Discovery workflow</p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">Four-stage research loop that keeps plans relevant</h3>
          <div className="mt-8 grid gap-6 lg:grid-cols-4">
            {DISCOVERY_STEPS.map((step) => (
              <div key={step.title} className="flex flex-col gap-4 rounded-2xl border border-slate-200/70 bg-slate-50/70 p-6 dark:border-slate-700/70 dark:bg-slate-900/60">
                <div className="flex items-center gap-3">
                  <step.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
                  <span className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-200">{step.stage}</span>
                </div>
                <p className="text-base font-semibold text-slate-900 dark:text-white">{step.title}</p>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-200">
            <LayoutDashboard className="h-4 w-4" aria-hidden />
            Plan lineup
          </span>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Match each compensation structure to customer expectations</h2>
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
            Every Cloud MLM Software launch starts with a portfolio of plans, then narrows to the structure that mirrors how customers actually buy,
            learn, and stay. Use this cheat sheet to evaluate the major options.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {PLAN_PROFILES.map((plan) => (
            <div key={plan.name} className="flex h-full flex-col justify-between rounded-3xl border border-slate-100 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900/70">
              <div className="space-y-4">
                <plan.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
                <p className="text-xl font-semibold text-slate-900 dark:text-white">{plan.name}</p>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{plan.promise}</p>
              </div>
              <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4 dark:border-emerald-500/40 dark:bg-emerald-500/10">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-200">Customer fit</p>
                <p className="mt-2 text-sm leading-6 text-emerald-900 dark:text-emerald-100">{plan.customerFit}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-4 rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Regional intelligence</p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Adapting compensation to each market</h2>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              Regions differ on cultural norms, regulatory limits, and digital readiness. Map these nuances upfront to keep customers informed and
              regulators satisfied.
            </p>
            <div className="mt-4 space-y-4">
              {REGION_TAKEAWAYS.map((item) => (
                <div key={item.title} className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-slate-50/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/60">
                  <item.icon className="mt-1 h-5 w-5 text-emerald-600 dark:text-emerald-300" aria-hidden />
                  <div className="space-y-1.5">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</p>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-emerald-100/60 p-8 shadow-xl dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-emerald-900/30">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Execution blueprint</p>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Keep customer promises during rollout</h3>
            <div className="space-y-5">
              {EXECUTION_BLUEPRINT.map((item) => (
                <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-white/60 bg-white/80 p-5 shadow-md dark:border-white/10 dark:bg-slate-900/60">
                  <item.icon className="mt-1 h-6 w-6 flex-shrink-0 text-emerald-600 dark:text-emerald-300" aria-hidden />
                  <div className="space-y-1.5">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</p>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Build an always-on customer feedback flywheel</h2>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                Sustained growth in MLM comes from constant iteration. Treat every launch as a beta—capture insights, iterate payouts, and celebrate
                the stories that prove customer favour is more than a tagline.
              </p>
              <div className="space-y-4">
                {CHECKLIST_ITEMS.map((item) => (
                  <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 dark:border-slate-700/70 dark:bg-slate-900/60">
                    <item.icon className="mt-1 h-5 w-5 text-emerald-600 dark:text-emerald-300" aria-hidden />
                    <div className="space-y-1.5">
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</p>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-100 via-emerald-50 to-white p-6 shadow-lg dark:border-emerald-500/40 dark:from-emerald-900/40 dark:via-slate-900 dark:to-slate-950">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-200">Cloud MLM advantage</p>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">
                  Choose from binary, monoline, hybrid, and custom AI-assisted plans engineered by Cloud MLM Software strategists.
                </p>
                <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                  Our consultants help you launch fast, stay compliant, and scale with confidence—while your customers feel prioritised from day
                  one.
                </p>
              </div>
              <Button
                asChild
                className="mt-6 w-full rounded-full bg-emerald-600 py-2 text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400"
              >
                <Link href={contactHref}>
                  Schedule a working session
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">About the author</p>
          <p className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{AUTHOR.name}</p>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{AUTHOR.role}</p>
          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{AUTHOR.bio}</p>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
