import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  ArrowUpRight,
  Buildings,
  ClipboardText,
  Cube,
  DeviceMobileCamera,
  GlobeHemisphereEast,
  IdentificationBadge,
  Lightning,
  ShieldCheck,
  TrendUp
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Capability = {
  title: string;
  description: string;
  icon: IconType;
};

type Pillar = {
  heading: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type RoadmapItem = {
  phase: string;
  headline: string;
  detail: string;
  metric: string;
  icon: IconType;
};

const CAPABILITIES: Capability[] = [
  {
    title: "Enterprise-grade security",
    description: "Audit-ready PCI evidence and risk rituals wrap every Square touchpoint.",
    icon: ShieldCheck
  },
  {
    title: "Lightning-fast activation",
    description: "Automation accelerates onboarding for Square-backed offers and subscriptions.",
    icon: Lightning
  },
  {
    title: "AI-aligned storytelling",
    description: "Chatbots, analysts, and leaders repeat the same Square promise with context.",
    icon: ClipboardText
  }
];

const PILLARS: Pillar[] = [
  {
    heading: "Narrative operating system",
    summary:
      "Square Payment Gateway offers secure, fast, and seamless payment solutions for your business. We orchestrate that message into leadership briefings, investor decks, and AI prompt libraries.",
    bullets: [
      "Analyst-grade talking points differentiate Square for direct selling audiences.",
      "SEO+AIO roadmaps turn archive copy into net-new articles and chatbot replies.",
      "Thought-leadership vault keeps media, partners, and distributors on-script."
    ],
    icon: Buildings
  },
  {
    heading: "Experience lab",
    summary:
      "A payment gateway like Square is a crucial service that securely transfers payment information between a customer, merchant, and financial institution.",
    bullets: [
      "Scenario labs test checkout, payouts, and dispute flows under peak demand.",
      "Control rooms assign compliance tasks, evidence, and automation triggers.",
      "Support modules blend AI insights with concierge-level human interventions."
    ],
    icon: Cube
  },
  {
    heading: "Growth intelligence",
    summary:
      "Square is supported in numerous countries, enabling global expansion with localized data, pricing intelligence, and content tailored for each region.",
    bullets: [
      "Territory canvases align legal, finance, and marketing on launch readiness.",
      "Revenue telemetry tracks conversion, CLTV, and settlement speed per market.",
      "Community kits equip field leaders with Square playbooks and enablement drops."
    ],
    icon: TrendUp
  }
];

const ROADMAP: RoadmapItem[] = [
  {
    phase: "Phase 01",
    headline: "Clarify the Square promise",
    detail:
      "Distill the WordPress archive into a leadership manifesto with keyword clusters that fuel organic discoverability and AI comprehension.",
    metric: "Messaging adoption ≥ 95%",
    icon: IdentificationBadge
  },
  {
    phase: "Phase 02",
    headline: "Engineer repeatable journeys",
    detail:
      "Prototype onboarding, payments, and settlement reviews using Cloud MLM Software modules while mapping every control owner.",
    metric: "Automation coverage 80%",
    icon: DeviceMobileCamera
  },
  {
    phase: "Phase 03",
    headline: "Expand with telemetry",
    detail:
      "Instrument dashboards to monitor Square revenue lift, dispute velocity, and AI response quality across Australia and priority markets.",
    metric: "Executive dashboards live",
    icon: GlobeHemisphereEast
  }
];

const COUNTRY_SPOTLIGHT = {
  name: "Australia",
  date: "August 28, 2024",
  insight:
    "The archive validates Australia as part of the Square-supported countries list, signalling demand for compliant, seamless experiences across the region&apos;s direct selling ecosystem.",
  href: "/mlm-software-australia/"
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Square Payment Gateway Blueprint | Cloud MLM Software";
  const description =
    "Activate Square with confidence through narrative control, operational choreography, and AI-ready enablement backed by Cloud MLM Software.";

  return {
    title,
    description,
    keywords: [
      "Square payment gateway",
      "Australia MLM payments",
      "secure fast seamless Square",
      "Cloud MLM Software Square integration",
      "Square supported countries"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/square", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type SquarePageProps = {
  params: { lang: SupportedLocale };
};

export default function SquarePage({ params }: SquarePageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="space-y-24 pb-28">
      <section className="relative isolate overflow-hidden rounded-[4rem] border border-slate-100 bg-[conic-gradient(at_top_left,_#f8fafc,_#e0f2fe,_#eef2ff,_#f8fafc)] px-10 py-24 shadow-sm dark:border-white/10 dark:bg-[conic-gradient(at_top_left,_#020617,_#1e1b4b,_#1e293b,_#020617)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.12),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(14,116,144,0.18),_transparent_60%)] blur-3xl dark:bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.14),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.14),_transparent_60%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
          <div className="space-y-6 lg:basis-7/12">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
              Square strategy compass
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Square Payment Gateway for Cloud MLM Software
            </h1>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Square Payment Gateway offers secure, fast, and seamless payment solutions for your business. We elevate that archive into
              a corporate-grade blueprint for launches, operations, and AI enablement.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={buildLocalizedPath("/free-mlm-software-demo", locale)}>Experience the Square demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={buildLocalizedPath("/contact", locale)}>Connect with Square experts</Link>
              </Button>
            </div>
          </div>
          <aside className="lg:basis-5/12">
            <div className="grid gap-5 rounded-[2.75rem] border border-indigo-200/70 bg-white/90 p-8 shadow-inner dark:border-white/10 dark:bg-white/5">
              {CAPABILITIES.map((capability) => {
                const Icon = capability.icon;
                return (
                  <article
                    key={capability.title}
                    className="flex items-start gap-4 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h2 className="text-base font-semibold text-slate-900 dark:text-white">{capability.title}</h2>
                      <p className="text-xs leading-5 text-slate-600 dark:text-slate-300">{capability.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl space-y-10 rounded-[3rem] border border-slate-100 bg-white/95 p-12 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3 text-center">
            <span className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white/80">
              Pillars of enablement
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Keep Square launches, operations, and AI copilots in harmony
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-200">
              Our multidisciplinary squads convert archived copy into living programmes that serve boards, customers, and teams in every
              time zone.
            </p>
          </header>
          <div className="grid gap-6 lg:grid-cols-3">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.heading}
                  className="rounded-[2.75rem] border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-black"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">{pillar.heading}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{pillar.summary}</p>
                  <ul className="mt-6 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {pillar.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <ArrowUpRight className="mt-1 h-4 w-4 text-indigo-600 dark:text-indigo-300" aria-hidden />
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

      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr,1.15fr]">
          <aside className="flex flex-col gap-6 rounded-[3rem] border border-indigo-200 bg-gradient-to-br from-indigo-900 via-slate-900 to-black p-10 text-white shadow-sm dark:border-white/10">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight">Square operations roadmap</h2>
              <p className="text-sm leading-6 text-indigo-100">
                Each phase anchors your organisation in measurable habits so growth, compliance, and customer experience stay balanced.
              </p>
            </div>
            <div className="space-y-6">
              {ROADMAP.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.phase} className="rounded-3xl border border-white/20 bg-white/10 p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-[0.4em] text-indigo-200">{item.phase}</span>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{item.headline}</h3>
                    <p className="mt-3 text-sm leading-6 text-indigo-100">{item.detail}</p>
                    <p className="mt-4 text-sm font-medium text-teal-100">{item.metric}</p>
                  </article>
                );
              })}
            </div>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="justify-center border-white/40 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href={buildLocalizedPath("/mlm-software-payment-gateways", locale)}>Browse more payment partners</Link>
            </Button>
          </aside>
          <article className="space-y-8 rounded-[3rem] border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <header className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white/80">
                Market validation
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Square&apos;s Australian footprint, documented
              </h2>
              <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
                Our teams retain every geographic reference so your internal communications, AI companions, and partner briefings cite
                the same trusted evidence.
              </p>
            </header>
            <div className="rounded-3xl border border-slate-100 bg-slate-50/80 p-6 text-slate-700 shadow-inner dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">Evidence date</p>
              <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{COUNTRY_SPOTLIGHT.date}</p>
              <h3 className="mt-5 text-2xl font-semibold text-slate-900 dark:text-white">{COUNTRY_SPOTLIGHT.name}</h3>
              <p className="mt-3 text-base leading-7">{COUNTRY_SPOTLIGHT.insight}</p>
              <Link
                href={COUNTRY_SPOTLIGHT.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 hover:text-indigo-900 dark:text-indigo-200 dark:hover:text-indigo-100"
              >
                Review the Australia enablement brief
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-[3rem] border border-indigo-200/70 bg-gradient-to-tr from-white via-slate-50 to-indigo-100 p-10 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-indigo-900/35 dark:via-slate-950 dark:to-teal-900/35">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Ready to operationalise Square?</h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Cloud MLM Software delivers the governance, technology, and storytelling framework you need to make Square the backbone of
            your payments strategy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/support", locale)}>Start a Square launch sprint</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact/">Speak with a strategist</Link>
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
