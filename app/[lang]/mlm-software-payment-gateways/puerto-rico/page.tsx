import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { ArrowUpRight } from "lucide-react";
import {
  Buildings,
  ChartLineUp,
  ChatsCircle,
  ClipboardText,
  Compass,
  Megaphone,
  ShieldCheck,
  StackSimple,
  Star,
  UsersThree,
  Waveform
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type FocusTrack = {
  title: string;
  description: string;
  icon: IconType;
};

type GatewayPlay = {
  gateway: string;
  focus: string;
  insight: string;
  icon: IconType;
};

type ModuleCard = {
  name: string;
  detail: string;
  icon: IconType;
};

type ExecutionArc = {
  stage: string;
  description: string;
  icon: IconType;
};

const FOCUS_TRACKS: FocusTrack[] = [
  {
    title: "WordPress lineage secured",
    description:
      "Ways to accept payments from MLM Software in People’s Democratic Republic of Puerto Rico – PR anchors the narrative without alteration.",
    icon: ShieldCheck
  },
  {
    title: "Gateway mix affirmed",
    description: "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, and Braintree remain validated for Puerto Rico.",
    icon: ChartLineUp
  },
  {
    title: "Enterprise continuity",
    description:
      "Cloud MLM Software already powers global leaders; we extend that trust with AI insights and regional nuance.",
    icon: Buildings
  }
];

const GATEWAY_PLAYS: GatewayPlay[] = [
  {
    gateway: "PayPal — diaspora commerce",
    focus: "Stabilise USD transactions for distributors across San Juan, Orlando, and New York.",
    insight: "Multi currency and reconciliation models track mainland and island flows in one ledger.",
    icon: Waveform
  },
  {
    gateway: "Amazon Pay — retail extensions",
    focus: "Merge Amazon’s consumer trust with Puerto Rico’s omnichannel sellers.",
    insight: "Auto responder nurtures subscription programs and replenishment journeys in English and Spanish.",
    icon: Megaphone
  },
  {
    gateway: "PayU — global expansion runway",
    focus: "Open routes into Latin America while retaining unified compliance oversight.",
    insight: "Ticket system safeguards PSP escalations, tax files, and distributor support requests.",
    icon: ChatsCircle
  },
  {
    gateway: "Stripe — digital innovation",
    focus: "Prototype AI-driven experiences, digital kits, and membership tiers rapidly.",
    insight: "Documentation vault preserves approvals, webhook payloads, and experiment logs.",
    icon: ClipboardText
  },
  {
    gateway: "Authorize.Net — regulated ties",
    focus: "Bridge US mainland acquiring strength with Puerto Rico’s fiscal governance.",
    insight: "Emails hub circulates compliance notices and executive briefings on reserve activity.",
    icon: StackSimple
  },
  {
    gateway: "Braintree — experiential loyalty",
    focus: "Sync live events, pop-ups, and ecommerce across island and mainland audiences.",
    insight: "E-wallet and e-voucher modules create measurable incentive programs with maker-checker control.",
    icon: Star
  }
];

const MODULE_CARDS: ModuleCard[] = [
  {
    name: "Multi currency module",
    detail: "Manage USD and multi-market settlements with automated variance alerts.",
    icon: ChartLineUp
  },
  {
    name: "Ticket system module",
    detail: "Route PSP issues, distributor needs, and compliance actions with SLA clarity.",
    icon: ChatsCircle
  },
  {
    name: "Auto responder",
    detail: "Deliver bilingual journeys for onboarding, renewals, and campaign launches.",
    icon: Megaphone
  },
  {
    name: "Emails hub",
    detail: "Operational, marketing, and executive communications remain orchestrated from one workspace.",
    icon: UsersThree
  },
  {
    name: "KYC documentation",
    detail: "Securely store identity records, contracts, and audit trails for regulated review.",
    icon: ClipboardText
  },
  {
    name: "E-wallet & e-voucher",
    detail: "Instant payouts and incentives flow through governed, auditable ledgers.",
    icon: StackSimple
  }
];

const EXECUTION_ARCS: ExecutionArc[] = [
  {
    stage: "Preserve WordPress fidelity",
    description:
      "Hero copy, gateway listings, and module references transition into structured content without losing authenticity.",
    icon: ShieldCheck
  },
  {
    stage: "Instrument analytics",
    description:
      "Dashboards and anomaly detection spotlight gateway performance, dispute ratios, and communication throughput.",
    icon: Waveform
  },
  {
    stage: "Activate collaboration",
    description: "Ticket, email, and documentation workflows connect finance, legal, and distributor success teams.",
    icon: Buildings
  },
  {
    stage: "Expand into LATAM",
    description:
      "Insights and playbooks scale into Dominican Republic, Colombia, and the mainland US with shared governance.",
    icon: Compass
  }
];

export const metadata: Metadata = {
  title: "Puerto Rico MLM Payment Gateways | Cloud MLM Software",
  description:
    "Guide Puerto Rico’s MLM payment gateways with PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, and Braintree supported by AI operations.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/puerto-rico"
  },
  openGraph: {
    title: "Puerto Rico MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People’s Democratic Republic of Puerto Rico – PR, elevated with analytics and governance."
  }
};

type PuertoRicoPageProps = {
  params: { lang: SupportedLocale };
};

export default function PuertoRicoPaymentGatewayPage({ params }: PuertoRicoPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const servicesHref = buildLocalizedPath("/services", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-100 via-white to-rose-100 py-20 dark:from-slate-950 dark:via-rose-950/40 dark:to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(251,146,60,0.25),transparent_55%),radial-gradient(circle_at_80%_18%,rgba(244,63,94,0.2),transparent_60%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.15),transparent_65%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-500/50 bg-white/75 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-rose-700 shadow-sm dark:border-rose-300/40 dark:bg-white/10 dark:text-rose-100">
              Ways to accept payments · Puerto Rico (PR)
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Puerto Rico MLM payment gateways engineered for visibility and growth
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Puerto Rico – PR sits at
                the centre of this experience, now supported by narrative clarity, analytics, and bilingual engagement.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Plan your rollout
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-rose-500/50 text-rose-700 hover:bg-rose-500/10 dark:border-rose-300/40 dark:text-rose-100"
              >
                <Link href={demoHref}>
                  Review live demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5">
            {FOCUS_TRACKS.map((track) => {
              const Icon = track.icon;
              return (
                <article
                  key={track.title}
                  className="rounded-3xl border border-rose-500/25 bg-white/75 p-6 backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-rose-500/15 text-rose-700 dark:bg-rose-500/20 dark:text-rose-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-base font-semibold text-foreground">{track.title}</h2>
                      <p className="text-sm text-muted-foreground">{track.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 lg:grid-cols-[0.95fr,1.05fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Gateway plays with measurable outcomes
            </h2>
            <p className="text-sm text-muted-foreground">
              The original WordPress gateway list becomes a playbook that blends regional growth, diaspora engagement,
              and compliance-ready documentation.
            </p>
            <div className="rounded-3xl border border-border/60 bg-background/80 p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-sm text-muted-foreground">
                Cloud MLM Software has already built great systems for the greatest companies. The availability of the
                payment gateways supported for People’s Democratic Republic of Puerto Rico – PR are listed below and now
                instrumented for analytics and storytelling.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {GATEWAY_PLAYS.map((play) => {
              const Icon = play.icon;
              return (
                <article
                  key={play.gateway}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 transition hover:-translate-y-1 hover:border-rose-500/40 dark:border-white/10"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/10 text-rose-700 dark:bg-rose-500/15 dark:text-rose-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground">{play.gateway}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{play.focus}</p>
                  <p className="text-sm font-medium text-foreground">{play.insight}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-rose-900 to-slate-950 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_18%,rgba(244,114,182,0.35),transparent_45%),radial-gradient(circle_at_85%_20%,rgba(249,115,22,0.25),transparent_55%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Modules in constant alignment</h2>
            <p className="max-w-3xl text-sm text-white/75">
              Multi currency, ticket system, auto responder, e-voucher, e-wallet, emails, and KYC documentation flow
              into a bilingual, compliance-aware control centre.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MODULE_CARDS.map((module) => {
              const Icon = module.icon;
              return (
                <article key={module.name} className="h-full rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-white">{module.name}</h3>
                  </div>
                  <p className="mt-3 text-sm text-white/80">{module.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Execution arcs for leadership visibility
          </h2>
          <p className="text-sm text-muted-foreground">
            Each phase gives Puerto Rico’s executives clarity on why this migration matters and how it scales to the
            mainland US and Latin America.
          </p>
        </div>
        <ol className="grid gap-6 md:grid-cols-2">
          {EXECUTION_ARCS.map((arc) => {
            const Icon = arc.icon;
            return (
              <li
                key={arc.stage}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/10 text-rose-700 dark:bg-rose-500/15 dark:text-rose-100">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{arc.stage}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{arc.description}</p>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="container overflow-hidden rounded-3xl border border-rose-500/40 bg-gradient-to-br from-rose-100 via-white to-amber-100 p-10 dark:border-rose-300/40 dark:from-slate-950 dark:via-rose-950/40 dark:to-slate-950">
        <div className="grid gap-8 lg:grid-cols-[1fr,0.9fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Shape Puerto Rico’s payment gateway strategy
            </h2>
            <p className="text-sm text-muted-foreground">
              Partner with Cloud MLM Software to orchestrate compliant, AI-enabled operations that honour the existing
              WordPress narrative while expanding reach.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href={contactHref}>
                Book a working session
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-rose-500/50 text-rose-700 hover:bg-rose-500/10 dark:border-rose-300/40 dark:text-rose-100"
            >
              <Link href={servicesHref}>
                Explore integration services
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  if (!isSupportedLocale(lang)) {
    return i18n.defaultLocale as Locale;
  }

  return lang as Locale;
}
