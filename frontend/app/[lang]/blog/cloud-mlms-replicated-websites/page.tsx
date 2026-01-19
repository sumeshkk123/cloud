import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe2, LayoutTemplate, MonitorSmartphone, Puzzle, Share2, ShieldCheck, Sparkles, Users } from "lucide-react";
import {
  Cloud,
  GlobeHemisphereEast,
  NotePencil,
  Path,
  Stack,
  Star,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type Concept = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Feature = {
  title: string;
  description: string;
  icon: IconType;
};

type Benefit = {
  statement: string;
  detail: string;
  icon: IconType;
};

type Advantage = {
  title: string;
  items: string[];
  icon: IconType;
};

const METRICS: Metric[] = [
  {
    label: "Replicated sites deployed",
    value: "150K+",
    description: "Distributors running personalised experiences via Cloud MLM Software worldwide.",
    icon: Globe2
  },
  {
    label: "Average launch time",
    value: "48 hours",
    description: "Spin up compliant replicated sites with branding, content, and tracking pre-configured.",
    icon: Sparkles
  },
  {
    label: "Content updates per month",
    value: "3.8M",
    description: "Local teams publish stories, promotions, and assets without developer intervention.",
    icon: NotePencil
  }
];

const CONCEPTS: Concept[] = [
  {
    title: "Why replication matters",
    description:
      "Yesterday’s growth depended solely on products and compensation; today it’s fuelled by replication that keeps your message consistent while empowering every distributor.",
    bullets: [
      "Launch national or global organisations directly from your home office.",
      "Blend promotion systems with modern technology to support every recruit.",
      "Give new members instant access to marketing-ready assets."
    ],
    icon: Stack
  },
  {
    title: "What a replicated site is",
    description:
      "A templated experience where HTML remains consistent while variables personalise content—names, bios, contact details, offers—for each distributor.",
    bullets: [
      "Unique URLs (e.g., `cloudmlmsoftware.com/{username}`) track referrals with precision.",
      "Content stays brand compliant while giving distributors a sense of ownership.",
      "Domain masking lets leaders map custom domains to their replicated site."
    ],
    icon: LayoutTemplate
  },
  {
    title: "How Cloud MLM elevates it",
    description:
      "A graphical editor, asset library, and role-based controls let administrators curate experiences while giving field teams intuitive tools.",
    bullets: [
      "Add photos, videos, testimonials, promotions, and feeds in minutes.",
      "Segment access levels so content stays relevant to role and market.",
      "Maintain oversight from a single strategy centre with audit trails."
    ],
    icon: MonitorSmartphone
  }
];

const FEATURES: Feature[] = [
  {
    title: "Real-time replication engine",
    description: "New signups receive fully branded sites instantly, complete with compliance-ready pages and conversion tracking.",
    icon: Cloud
  },
  {
    title: "Customisable capture pages",
    description: "Launch unlimited landing pages with easy HTML controls and embedded lead forms connected to your CRM.",
    icon: Share2
  },
  {
    title: "e-Wallet connectivity",
    description: "Route payouts earned via replicated sites straight into member wallets for reinvestment or withdrawals.",
    icon: Users
  },
  {
    title: "Performance analytics",
    description: "Give distributors dashboards that highlight visits, opt-ins, and sales so they can optimise messaging.",
    icon: Path
  }
];

const BENEFITS: Benefit[] = [
  {
    statement: "Preserve the distributor-first philosophy",
    detail:
      "Even when prospects sign up online, transactions stay linked to the referring distributor, ensuring recognition and commissions flow correctly.",
    icon: UsersThree
  },
  {
    statement: "Deliver always-on storytelling",
    detail:
      "Prospects move from curiosity to conversion without waiting for a live presentation, thanks to product explainers, policies, and applications embedded in every site.",
    icon: Star
  },
  {
    statement: "Accelerate approvals and oversight",
    detail:
      "Headquarters maintains final control over messaging while giving local teams the freedom to translate, adapt, and iterate content.",
    icon: ShieldCheck
  }
];

const ADVANTAGES: Advantage[] = [
  {
    title: "Growth accelerators",
    items: [
      "Create SEO-friendly URLs that surface differentiated pages in local search results.",
      "Empower affiliates to promote across social, email, and events with consistent assets.",
      "Increase lead capture by embedding personalised calls-to-action and calendars."
    ],
    icon: GlobeHemisphereEast
  },
  {
    title: "Operational simplicity",
    items: [
      "Manage thousands of sites from one console with bulk publishing and scheduled releases.",
      "Assign permissions based on rank, market, or team to keep experiences relevant.",
      "Integrate with payment gateways, CRMs, and marketing automation seamlessly."
    ],
    icon: Puzzle
  },
  {
    title: "Brand integrity",
    items: [
      "Lock down critical messaging while offering curated blocks distributors can personalise.",
      "Ensure imagery, testimonials, and offers remain compliant across regions.",
      "Audit changes with full version history and instant reversion controls."
    ],
    icon: Star
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Cloud MLM’s Replicated Websites";
  const description =
    "See how Cloud MLM Software builds compliant, customisable replicated websites that amplify every distributor’s reach while protecting your brand.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/cloud-mlms-replicated-websites", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ReplicatedSitesPageProps = {
  params: { lang: SupportedLocale };
};

export default function ReplicatedSitesPage({ params }: ReplicatedSitesPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-violet-50 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(14,165,233,0.24),transparent_55%),radial-gradient(circle_at_82%_22%,rgba(129,140,248,0.22),transparent_60%),radial-gradient(circle_at_70%_78%,rgba(34,197,94,0.18),transparent_60%)]" />
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
                Digital presence · Distributor success
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                Cloud MLM’s replicated websites
              </h1>
              <p className="text-lg text-slate-700">
                Replication has evolved from a nice-to-have to the heartbeat of modern MLM. This refreshed guide captures everything the
                original article championed—consistency, personalisation, and growth—now anchored in today’s design and technology standards.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild className="bg-sky-600 text-white hover:bg-sky-500">
                  <Link href={demoHref}>
                    Experience a replicated site tour
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-100">
                  <Link href={contactHref}>
                    Talk with our web strategists
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl shadow-sky-100">
              {METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-100"
                >
                  <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-sky-600">
                    <metric.icon className="h-5 w-5 text-sky-500" aria-hidden />
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
          <h2 className="text-3xl font-semibold text-slate-900">Replication reimagined</h2>
          <p className="mt-4 text-lg text-slate-600">
            Take the core concepts from the legacy article and apply them to a responsive, automation-friendly era.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {CONCEPTS.map((concept) => (
            <article
              key={concept.title}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-100"
            >
              <concept.icon className="h-10 w-10 text-sky-500" aria-hidden />
              <h3 className="mt-6 text-xl font-semibold text-slate-900">{concept.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{concept.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                {concept.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-4 w-4 text-emerald-400" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-violet-50 to-sky-50 p-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-slate-900">Features your distributors will love</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Automatic payouts, real-time signups, and analytics were celebrated in the original piece. We capture them here with a modern
                spin focused on usability and insight.
              </p>
              <Button asChild variant="outline" className="border-sky-300 text-sky-700 hover:bg-sky-100">
                <Link href={pricingHref}>
                  Review replication packages
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <feature.icon className="h-8 w-8 text-sky-500" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{feature.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
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
                Business impact
              </span>
              <h2 className="text-2xl font-semibold text-slate-900">Benefits echoed by thriving distributors</h2>
              <p className="text-sm text-slate-600">
                Cloud MLM Software brings the philosophy of “replicate to elevate” to life with outcomes that compound over time.
              </p>
            </div>
            <div className="grid gap-4">
              {BENEFITS.map((benefit) => (
                <div key={benefit.statement} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                  <div className="flex items-center gap-3">
                    <benefit.icon className="h-6 w-6 text-sky-500" aria-hidden />
                    <h3 className="text-lg font-semibold text-slate-900">{benefit.statement}</h3>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{benefit.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-sky-200 bg-gradient-to-r from-sky-50 via-white to-violet-50 p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,300px),minmax(0,1fr)] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900">Advantages that keep you competitive</h2>
              <p className="text-sm text-slate-600">
                SEO visibility, operational control, and brand integrity were highlighted in the original article. We distilled them into
                actionable advantages.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {ADVANTAGES.map((advantage) => (
                <div key={advantage.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex items-center gap-3">
                    <advantage.icon className="h-7 w-7 text-sky-500" aria-hidden />
                    <h3 className="text-base font-semibold text-slate-900">{advantage.title}</h3>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {advantage.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <ArrowRight className="mt-1 h-4 w-4 text-emerald-400" aria-hidden />
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
        <div className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-100 via-white to-violet-50 p-10 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">Ready to replicate success at scale?</h2>
            <p className="text-lg text-slate-600">
              Cloud MLM Software combines design, automation, and governance so every distributor website feels handcrafted and brand-safe.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-sky-600 text-white hover:bg-sky-500">
                <Link href={demoHref}>
                  Schedule a replication workshop
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-sky-300 text-sky-700 hover:bg-sky-100">
                <Link href={contactHref}>
                  Partner with our web team
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
