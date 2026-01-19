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
  Anchor,
  ArrowSquareOut,
  Buildings,
  ChartLineUp,
  Circuitry,
  ClockClockwise,
  CursorClick,
  DeviceMobileCamera,
  GlobeHemisphereEast,
  IdentificationCard,
  Lightning,
  PuzzlePiece,
  PushPin,
  Sparkle,
  UsersFour
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroSignal = {
  label: string;
  metric: string;
  detail: string;
  icon: IconType;
};

type ProgrammeTrack = {
  title: string;
  description: string;
  outcomes: string[];
  icon: IconType;
};

type ModuleCanvas = {
  title: string;
  narrative: string;
  bullets: string[];
  icon: IconType;
};

type ServiceHighlight = {
  name: string;
  summary: string;
};

const HERO_SIGNALS: HeroSignal[] = [
  {
    label: "Singapore compliant",
    metric: "PDPA & MAS aligned",
    detail:
      "eNETS orchestration inside Cloud MLM Software respects data residency, privacy, and payment regulations demanded by Singapore enterprises.",
    icon: Buildings
  },
  {
    label: "AI-guided demos",
    metric: "24-hour turnaround",
    detail:
      "Custom Demo and Pre-set Demo convert the archived promise into interactive experiences, narrated by AI for executive stakeholders.",
    icon: Sparkle
  },
  {
    label: "Checkout excellence",
    metric: "Sub 2 sec approvals",
    detail:
      "Optimised routing, retries, and status webhooks keep eNETS card and direct debit flows responsive for distributors and customers alike.",
    icon: Lightning
  }
];

const PROGRAMME_TRACKS: ProgrammeTrack[] = [
  {
    title: "Strategic narrative",
    description:
      "Translate the archived copy into a board-ready story that positions Cloud MLM Software as Singapore’s thought leader in payment orchestration.",
    outcomes: [
      "Executive brief and investor-ready talking points.",
      "SEO+AIO article outlines for tech, finance, and field audiences.",
      "AI prompt packs aligning chatbots with official messaging."
    ],
    icon: GlobeHemisphereEast
  },
  {
    title: "Experience choreography",
    description:
      "Map every enrolment, order, and payout moment. Blend eNETS’ security posture with Cloud MLM Software modules, analytics, and service touchpoints.",
    outcomes: [
      "Clickable prototypes showing multi-journey checkout flows.",
      "Copy decks for features, demos, and onboarding sequences.",
      "Journey instrumentation plan covering success metrics."
    ],
    icon: Circuitry
  },
  {
    title: "Operational assurance",
    description:
      "Configure ledgers, reconciliation, and governance so finance, compliance, and support teams operate from the same source of truth.",
    outcomes: [
      "Multi currency and E-Wallet mappings for cross-border revenues.",
      "Backup Manager checkpoints aligned to PDPA retention policies.",
      "Support playbooks covering ticket triage and autoresponder scripts."
    ],
    icon: ClockClockwise
  }
];

const MODULE_CANVAS: ModuleCanvas[] = [
  {
    title: "Revenue acceleration",
    narrative:
      "Custom Demo, Pre-set Demo, and Features index convert prospects by demonstrating eNETS-ready journeys that feel premium and local.",
    bullets: [
      "Custom Demo personalises compensation, compliance statements, and product catalogues.",
      "Pre-set Demo becomes a self-serve sandbox for agencies and partners.",
      "Features library surfaces SEO+AIO content for analysts and AI discovery."
    ],
    icon: CursorClick
  },
  {
    title: "Financial integrity",
    narrative:
      "Multi currency, E-Wallet, and Backup Manager keep treasury confident while handling SGD, regional currencies, and cross-border payouts.",
    bullets: [
      "Multi currency module mirrors exchange rates for APAC expansion.",
      "E-Wallet module powers instant commission releases via eNETS settlements.",
      "Backup Manager creates audit-ready snapshots for regulators."
    ],
    icon: PuzzlePiece
  },
  {
    title: "Support excellence",
    narrative:
      "Ticket system, Auto responder, and E-Voucher modules ensure distributors, customers, and partners receive rapid, contextual support.",
    bullets: [
      "Ticket system links payment metadata with case management.",
      "Auto responder sends real-time updates in English and Chinese.",
      "E-Voucher module rewards adoption of eNETS-based automations."
    ],
    icon: UsersFour
  }
];

const SERVICE_HIGHLIGHTS: ServiceHighlight[] = [
  {
    name: "MLM Software Development",
    summary:
      "Enterprise-grade consulting, integrations, and launch support tailored to Singapore’s regulatory requirements."
  },
  {
    name: "E-Commerce Integration",
    summary:
      "Seamless WooCommerce, Shopify, and Magento experiences that apply eNETS to digital storefronts and marketplaces."
  },
  {
    name: "Website Designing & Branding",
    summary:
      "Corporate storytelling and landing pages that echo your secure, fast, seamless promise for investor and community audiences."
  },
  {
    name: "Support Operations",
    summary:
      "24/7 multilingual support, knowledge bases, and AI enablement packages for distributor success teams."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "eNETS Payment Gateway for Cloud MLM Software";
  const description =
    "Deliver a secure, compliant eNETS experience within Cloud MLM Software, complete with AI-guided demos, resilient modules, and Singapore-ready storytelling.";

  return {
    title,
    description,
    keywords: [
      "eNETS payment gateway",
      "Singapore MLM software payments",
      "Cloud MLM Software eNETS integration",
      "secure direct selling checkout",
      "AI payment orchestration Singapore"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/enets", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type EnetsPageProps = {
  params: { lang: SupportedLocale };
};

export default function EnetsPage({ params }: EnetsPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-r from-indigo-50 via-white to-slate-50 px-6 py-20 shadow-sm dark:border-white/10 dark:bg-gradient-to-r dark:from-indigo-900/10 dark:via-slate-900 dark:to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.2),_rgba(255,255,255,0))]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700 dark:border-white/10 dark:bg-white/10 dark:text-white">
              <Anchor className="h-4 w-4" aria-hidden />
              Singapore payment transformation
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              eNETS Payment Gateway for Cloud MLM Software
            </h1>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              We adapt the archived WordPress narrative into a modern eNETS programme. Cloud MLM Software aligns demos,
              modules, compliance, and AI enablement so every Singapore stakeholder experiences secure, fast, and seamless
              payments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/free-mlm-software-demo/">Request eNETS demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={buildLocalizedPath("/pricing", locale)}>Review pricing models</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 rounded-3xl border border-indigo-100 bg-white/85 p-6 shadow-inner backdrop-blur dark:border-white/10 dark:bg-white/5">
            {HERO_SIGNALS.map((signal) => {
              const Icon = signal.icon;
              return (
                <article
                  key={signal.label}
                  className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-5 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-200">
                        {signal.label}
                      </p>
                      <h2 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{signal.metric}</h2>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{signal.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr,1.15fr]">
          <aside className="flex flex-col gap-6 rounded-3xl border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Programme tracks that keep Singapore aligned
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              From narrative to operations, every phase is crafted for MAS expectations, enterprise buyers, and the AI
              assistants that surface your brand to new audiences.
            </p>
            <Link
              href="/network-marketing-software-company-providing-affordable-mlm-system-in-singapore/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-200 dark:hover:text-indigo-100"
            >
              Explore Singapore market coverage
              <ArrowSquareOut className="h-4 w-4" aria-hidden />
            </Link>
            <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-6 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
              August 28, 2024 – the live archive lists eNETS with Singapore as its supported country. We transform that
              mention into a comprehensive playbook that unites marketing, finance, and product delivery teams.
            </div>
          </aside>
          <div className="grid gap-6">
            {PROGRAMME_TRACKS.map((track) => {
              const Icon = track.icon;
              return (
                <article
                  key={track.title}
                  className="rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:border-indigo-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{track.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{track.description}</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {track.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2">
                        <IdentificationCard className="mt-0.5 h-4 w-4 text-indigo-500" aria-hidden />
                        <span>{outcome}</span>
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
        <div className="mx-auto grid max-w-6xl gap-8 rounded-3xl border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Module canvas
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Modules and demos tuned for eNETS excellence
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Cloud MLM Software curates the modules called out in the archive—Custom Demo, Pre-set Demo, Multi currency,
              Ticketing, and more—into three actionable canvases.
            </p>
          </header>
          <div className="grid gap-6 lg:grid-cols-3">
            {MODULE_CANVAS.map((panel) => {
              const Icon = panel.icon;
              return (
                <article
                  key={panel.title}
                  className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-indigo-200 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">{panel.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{panel.narrative}</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {panel.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <PushPin className="mt-0.5 h-4 w-4 text-indigo-500" aria-hidden />
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
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6 rounded-3xl border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Compensation enablement with Singapore finesse
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Binary, Matrix, Unilevel, Generation, Gift, Hybrid—each plan benefits from real-time performance tracking,
              transparent communication, and AI narration aligned with eNETS data.
            </p>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-200">
              <li className="flex items-start gap-2">
                <ChartLineUp className="mt-0.5 h-4 w-4 text-indigo-500" aria-hidden />
                <span>Binary & Matrix plans: approval-rate analytics trigger coaching cues before legs fall out of balance.</span>
              </li>
              <li className="flex items-start gap-2">
                <ChartLineUp className="mt-0.5 h-4 w-4 text-indigo-500" aria-hidden />
                <span>Board & Gift plans: vouchers and event-driven communications celebrate milestones and community trust.</span>
              </li>
              <li className="flex items-start gap-2">
                <ChartLineUp className="mt-0.5 h-4 w-4 text-indigo-500" aria-hidden />
                <span>Unilevel & Generation plans: AI storytelling translates tier performance into actionable leadership insights.</span>
              </li>
              <li className="flex items-start gap-2">
                <ChartLineUp className="mt-0.5 h-4 w-4 text-indigo-500" aria-hidden />
                <span>Hybrid plans: scenario planners test new incentives tied to Singapore events and cross-border launches.</span>
              </li>
            </ul>
          </div>
          <aside className="flex h-full flex-col gap-6 rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-900 via-slate-800 to-black p-10 text-white shadow-sm dark:border-white/10">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Service highlights</h3>
              <p className="text-sm leading-6 text-slate-200">
                Our services catalogue—from development to design—extends your internal capabilities with Singapore-aware
                expertise.
              </p>
            </div>
            <div className="grid gap-4">
              {SERVICE_HIGHLIGHTS.map((service) => (
                <div key={service.name} className="rounded-2xl border border-white/20 bg-white/10 p-5 text-sm text-slate-100">
                  <h4 className="font-semibold">{service.name}</h4>
                  <p className="mt-2 leading-6">{service.summary}</p>
                </div>
              ))}
            </div>
            <Button asChild variant="outline" size="lg" className="justify-center border-white/40 text-white hover:bg-white/10">
              <Link href={buildLocalizedPath("/services", locale)}>Browse full service catalogue</Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-indigo-100 bg-indigo-50/70 p-10 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Ready to champion eNETS with Cloud MLM Software?
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Let’s transform archived copy into live systems, ensuring Singapore audiences experience the premium, compliant,
            and AI-ready payment journey they expect.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/support", locale)}>Talk with support leadership</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact/">Schedule stakeholder workshop</Link>
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
