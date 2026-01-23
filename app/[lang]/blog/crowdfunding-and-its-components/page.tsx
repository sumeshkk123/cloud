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
  BadgeCheck,
  Coins,
  Gauge,
  Gift,
  Handshake,
  Layers,
  Scale,
  Sparkle,
  Users,
  Zap
} from "lucide-react";
import {
  Chats,
  Cube,
  GlobeHemisphereEast,
  Heart,
  MegaphoneSimple,
  ShieldCheck,
  Target
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Model = {
  name: string;
  description: string;
  idealFor: string;
  icon: IconType;
};

type Component = {
  name: string;
  detail: string;
  icon: IconType;
};

type Checklist = {
  title: string;
  items: string[];
  icon: IconType;
};

const METRICS: Metric[] = [
  {
    label: "Global crowdfunding volume",
    value: "$17B+",
    description: "Estimates from industry trackers highlight momentum across regions and sectors.",
    icon: GlobeHemisphereEast
  },
  {
    label: "Average campaign duration",
    value: "30–45 days",
    description: "Most projects run time-boxed sprints to capture urgency and maintain focus.",
    icon: Gauge
  },
  {
    label: "Cloud MLM platform launch time",
    value: "2 weeks",
    description: "Typical timeframe to configure campaign templates, payment rails, and reporting.",
    icon: Zap
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Campaign storytelling",
    description:
      "Successful campaigns begin with a clear narrative that explains the vision, audience, and value proposition.",
    bullets: [
      "Illustrate the problem, solution, and impact in under two minutes.",
      "Use visuals, prototypes, or testimonials to build credibility.",
      "Set transparent funding goals and explain how capital will be used."
    ],
    icon: MegaphoneSimple
  },
  {
    title: "Backer engagement",
    description:
      "Crowdfunding thrives when supporters feel connected to outcomes. Offer feedback loops, updates, and recognition.",
    bullets: [
      "Respond to questions quickly and acknowledge contributions publicly.",
      "Share milestones, stretch goals, and behind-the-scenes stories.",
      "Offer tiers that balance exclusivity with inclusivity."
    ],
    icon: Chats
  },
  {
    title: "Compliance and trust",
    description:
      "Platforms must respect legal frameworks, secure transactions, and protect community data to safeguard every pledge.",
    bullets: [
      "Implement KYC, AML, and tax reporting aligned to your markets.",
      "Use secure payment gateways with audit-ready logs.",
      "Maintain transparent policies on refunds, delivery risks, and fees."
    ],
    icon: ShieldCheck
  }
];

const MODELS: Model[] = [
  {
    name: "Reward crowdfunding",
    description:
      "Supporters pledge funds for non-financial perks—exclusive releases, event access, or experiences that celebrate early belief.",
    idealFor: "Creative projects, product launches, event-driven campaigns.",
    icon: Gift
  },
  {
    name: "Debt crowdfunding",
    description:
      "Businesses borrow from the crowd and repay with interest, offering community members a predictable return.",
    idealFor: "Companies with proven cash flows seeking flexible financing.",
    icon: Coins
  },
  {
    name: "Equity crowdfunding",
    description:
      "Investors receive a small ownership stake, sharing in long-term upside as the company grows.",
    idealFor: "Growth-stage ventures ready to share equity with their community.",
    icon: Handshake
  },
  {
    name: "Donation crowdfunding",
    description:
      "Individuals or organisations raise funds for social, charitable, or emergency causes with no expectation of financial reward.",
    idealFor: "Non-profits, community initiatives, personal or humanitarian projects.",
    icon: Heart
  }
];

const COMPONENTS: Component[] = [
  {
    name: "Campaign hub",
    detail:
      "A landing page that summarises the idea, showcases media, and states the funding target, timeline, and stretch goals.",
    icon: Cube
  },
  {
    name: "Backers",
    detail:
      "People who pledge capital, share feedback, and amplify the campaign across their networks. Their trust is your currency.",
    icon: Users
  },
  {
    name: "Funding goal",
    detail:
      "The amount required to execute the next milestone—set it realistically and explain how funds translate into impact.",
    icon: Target
  },
  {
    name: "Reward structure",
    detail:
      "Tiers and incentives that acknowledge support. Keep logistics achievable and timelines transparent to sustain goodwill.",
    icon: Sparkle
  }
];

const CHECKLISTS: Checklist[] = [
  {
    title: "Platform evaluation",
    items: [
      "Compare fee structures, payout schedules, and geographic availability.",
      "Verify the platform’s legal licences and data protection policies.",
      "Confirm support for your campaign type—tech, charity, creative, or equity."
    ],
    icon: Layers
  },
  {
    title: "Risk management",
    items: [
      "Prepare contingency plans in case suppliers or timelines slip.",
      "Document how you’ll handle refunds or partial fulfilment scenarios.",
      "Track communications for regulatory audits or investor follow-ups."
    ],
    icon: Scale
  },
  {
    title: "Community readiness",
    items: [
      "Warm up your network before launch; early momentum drives algorithmic visibility.",
      "Schedule updates and storytelling beats across email and social.",
      "Create shareable assets that ambassadors can post within minutes."
    ],
    icon: BadgeCheck
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Crowdfunding and its Components";
  const description =
    "Understand crowdfunding models, core components, and platform considerations with Cloud MLM Software’s modernised guide.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/crowdfunding-and-its-components", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type CrowdfundingPageProps = {
  params: { lang: SupportedLocale };
};

export default function CrowdfundingPage({ params }: CrowdfundingPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-sky-50 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(244,114,182,0.25),transparent_60%),radial-gradient(circle_at_82%_24%,rgba(56,189,248,0.24),transparent_60%),radial-gradient(circle_at_70%_78%,rgba(34,197,94,0.18),transparent_60%)]" />
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-rose-600">
                Funding innovation · Community capital
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                Crowdfunding and its components
              </h1>
              <p className="text-lg text-slate-700">
                Crowdfunding gives entrepreneurs, creatives, and change-makers a runway powered by community belief. This refreshed guide builds on
                our original article to share models, guardrails, and playbooks for modern campaigns.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild className="bg-rose-600 text-white hover:bg-rose-500">
                  <Link href={demoHref}>
                    Explore crowdfunding templates
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-100">
                  <Link href={contactHref}>
                    Talk to a launch advisor
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl shadow-rose-100">
              {METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-100"
                >
                  <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-rose-600">
                    <metric.icon className="h-5 w-5 text-rose-500" aria-hidden />
                    {metric.label}
                  </div>
                  <p className="text-3xl font-semibold text-slate-900">{metric.value}</p>
                  <p className="mt-2 text-sm text-slate-600">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Three pillars for standout campaigns</h2>
          <p className="mt-4 text-lg text-slate-600">
            Keep storytelling, engagement, and compliance front and centre to honour backer trust and meet your funding goal.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-100"
            >
              <pillar.icon className="h-10 w-10 text-rose-500" aria-hidden />
              <h3 className="mt-6 text-xl font-semibold text-slate-900">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{pillar.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                {pillar.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-4 w-4 text-sky-400" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-sky-50 to-rose-50 p-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-slate-900">Choose the crowdfunding model that fits</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                We simplify the four models referenced in the original article with modern use cases and guidance on where each shines.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {MODELS.map((model) => (
                <div key={model.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <model.icon className="h-8 w-8 text-rose-500" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{model.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{model.description}</p>
                  <div className="mt-3 rounded-2xl bg-rose-50/70 p-4 text-xs font-semibold uppercase tracking-wide text-rose-600">
                    Ideal for · {model.idealFor}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                Campaign anatomy
              </span>
              <h2 className="text-2xl font-semibold text-slate-900">Core components that power momentum</h2>
              <p className="text-sm text-slate-600">
                Every successful crowdfunding run rests on these building blocks. Treat them as your blueprint for launch readiness.
              </p>
            </div>
            <div className="grid gap-4">
              {COMPONENTS.map((component) => (
                <div key={component.name} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                  <div className="flex items-center gap-3">
                    <component.icon className="h-6 w-6 text-rose-500" aria-hidden />
                    <h3 className="text-lg font-semibold text-slate-900">{component.name}</h3>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{component.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-rose-200 bg-gradient-to-r from-rose-50 via-white to-sky-50 p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,300px),minmax(0,1fr)] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900">Checklists before you press launch</h2>
              <p className="text-sm text-slate-600">
                The original article urged caution around platform selection and fraud risk. These checklists translate those warnings into actionable
                safeguards.
              </p>
              <Button asChild variant="outline" className="border-rose-300 text-rose-700 hover:bg-rose-100">
                <Link href={pricingHref}>
                  Compare crowdfunding services
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {CHECKLISTS.map((checklist) => (
                <div key={checklist.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex items-center gap-3">
                    <checklist.icon className="h-7 w-7 text-rose-500" aria-hidden />
                    <h3 className="text-base font-semibold text-slate-900">{checklist.title}</h3>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {checklist.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <ArrowRight className="mt-1 h-4 w-4 text-sky-400" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-100 via-white to-sky-100 p-10 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">Ready to rally your community?</h2>
            <p className="text-lg text-slate-600">
              Cloud MLM Software empowers your crowdfunding lifecycle with compliant payments, marketing automation, and analytics built for repeatable
              success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-rose-600 text-white hover:bg-rose-500">
                <Link href={demoHref}>
                  Plan your next campaign
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-rose-300 text-rose-700 hover:bg-rose-100">
                <Link href={contactHref}>
                  Partner with our strategists
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
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
