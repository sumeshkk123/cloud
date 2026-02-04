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
  ClipboardText,
  Compass,
  GlobeHemisphereEast,
  Handshake,
  Lightning,
  Megaphone,
  ShieldCheck,
  StackSimple,
  UsersThree,
  Waveform
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroHighlight = {
  title: string;
  detail: string;
  icon: IconType;
};

type GatewayCanvas = {
  name: string;
  narrative: string;
  focus: string;
  icon: IconType;
};

type ModuleDeck = {
  label: string;
  description: string;
  icon: IconType;
  accent: string;
};

type ExecutionRoute = {
  phase: string;
  summary: string;
  icon: IconType;
};

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    title: "WordPress fidelity",
    detail:
      "Ways to accept payments from MLM Software in People’s Democratic Republic of Rwanda – RW remains untouched to honour the original promise.",
    icon: ShieldCheck
  },
  {
    title: "Gateway availability",
    detail: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree continue to serve Rwanda.",
    icon: ChartLineUp
  },
  {
    title: "Enterprise continuity",
    detail:
      "Cloud MLM Software already supports leading organisations; Rwanda gains telemetry, automation, and regionalised storytelling.",
    icon: Buildings
  }
];

const GATEWAY_CANVAS: GatewayCanvas[] = [
  {
    name: "PayPal — diaspora link",
    narrative: "Connect Kigali, diaspora hubs, and regional partners with transparent settlements.",
    focus: "Multi currency module reconciles RWF, USD, EUR, and GBP with automated variance checks.",
    icon: StackSimple
  },
  {
    name: "Amazon Pay — digital retail",
    narrative: "Empower ecommerce sellers, wellness brands, and education providers with frictionless checkout.",
    focus: "Auto responder keeps bilingual onboarding, replenishment, and compliance cycles active.",
    icon: Megaphone
  },
  {
    name: "PayU — regional expansion",
    narrative: "Link East Africa with global payment rails through unified routing intelligence.",
    focus: "Ticket system documents PSP updates, tax requirements, and partner escalations.",
    icon: ClipboardText
  },
  {
    name: "Stripe — innovation runway",
    narrative: "Prototype AI-led services, digital academies, and incentive programmes safely.",
    focus: "Telemetry tracks webhook events, conversion analytics, and experiment briefs.",
    icon: Waveform
  },
  {
    name: "Authorize.Net — global bridge",
    narrative: "Connect North American acquiring with Rwanda’s governance expectations.",
    focus: "KYC documentation vault keeps contracts, IDs, and regulatory approvals in one workspace.",
    icon: Compass
  },
  {
    name: "Braintree — incentive engine",
    narrative: "Align events, ecommerce, and field promotions with measurement discipline.",
    focus: "E-wallet and e-voucher modules manage payouts and rewards with audit-ready trails.",
    icon: Handshake
  }
];

const MODULE_DECK: ModuleDeck[] = [
  {
    label: "Multi currency module",
    description: "Present local and foreign currencies while automating reconciliation tasks.",
    icon: GlobeHemisphereEast,
    accent: "bg-emerald-500/15 text-emerald-900 dark:bg-emerald-500/20 dark:text-emerald-100"
  },
  {
    label: "Ticket system module",
    description: "Route PSP cases, compliance requests, and distributor care with SLA insights.",
    icon: ClipboardText,
    accent: "bg-amber-500/15 text-amber-900 dark:bg-amber-500/20 dark:text-amber-100"
  },
  {
    label: "Auto responder",
    description: "Deliver bilingual journeys for onboarding, retention, and promotion cycles.",
    icon: Megaphone,
    accent: "bg-sky-500/15 text-sky-900 dark:bg-sky-500/20 dark:text-sky-100"
  },
  {
    label: "Emails hub",
    description: "Align marketing, operational, and executive communications with analytics.",
    icon: UsersThree,
    accent: "bg-indigo-500/15 text-indigo-900 dark:bg-indigo-500/20 dark:text-indigo-100"
  },
  {
    label: "KYC documentation",
    description: "Centralise identity records, contracts, and regulatory evidence securely.",
    icon: ClipboardText,
    accent: "bg-blue-500/15 text-blue-900 dark:bg-blue-500/20 dark:text-blue-100"
  },
  {
    label: "E-wallet & e-voucher",
    description: "Track payouts and rewards with maker-checker governance and audit logs.",
    icon: StackSimple,
    accent: "bg-rose-500/15 text-rose-900 dark:bg-rose-500/20 dark:text-rose-100"
  }
];

const EXECUTION_ROUTES: ExecutionRoute[] = [
  {
    phase: "Carry forward WordPress promise",
    summary: "Hero text, gateway listings, and module references remain unchanged for trust and SEO continuity.",
    icon: ShieldCheck
  },
  {
    phase: "Activate telemetry",
    summary: "Dashboards and anomaly detection spotlight gateway performance and compliance posture weekly.",
    icon: Lightning
  },
  {
    phase: "Align collaboration",
    summary: "Ticket, email, and documentation workflows connect finance, legal, and distributor enablement teams.",
    icon: Buildings
  },
  {
    phase: "Scale regional playbooks",
    summary: "Insights expand into Kenya, Uganda, and Tanzania with shared governance.",
    icon: Compass
  }
];

export const metadata: Metadata = {
  title: "Rwanda MLM Payment Gateways | Cloud MLM Software",
  description:
    "Modernise Rwanda’s MLM payment gateways with PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, and Braintree backed by analytics and governance.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/rwanda"
  },
  openGraph: {
    title: "Rwanda MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People’s Democratic Republic of Rwanda – RW, elevated for leadership clarity."
  }
};

type RwandaPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function RwandaPaymentGatewayPage({ params }: RwandaPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const servicesHref = buildLocalizedPath("/services", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-100 via-white to-sky-100 py-20 dark:from-slate-950 dark:via-emerald-950/40 dark:to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(45,212,191,0.24),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.2),transparent_60%),radial-gradient(circle_at_58%_80%,rgba(14,165,233,0.15),transparent_65%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-white/75 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700 shadow-sm dark:border-emerald-300/40 dark:bg-white/10 dark:text-emerald-100">
              Ways to accept payments · Rwanda (RW)
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Rwanda payment gateways with visibility and velocity
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Rwanda – RW stays front and
                centre while the experience grows into a data-informed, collaborative hub.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Connect with our Africa desk
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-emerald-500/40 text-emerald-700 hover:bg-emerald-400/10 dark:border-emerald-300/40 dark:text-emerald-100"
              >
                <Link href={demoHref}>
                  Review live demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5">
            {HERO_HIGHLIGHTS.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <article
                  key={highlight.title}
                  className="rounded-3xl border border-emerald-500/25 bg-white/75 p-6 backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-base font-semibold text-foreground">{highlight.title}</h2>
                      <p className="text-sm text-muted-foreground">{highlight.detail}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Gateway canvas grounded in WordPress
          </h2>
          <p className="text-sm text-muted-foreground">
            Cloud MLM Software has already built great systems for the greatest companies. The availability of the
            payment gateways supported for People’s Democratic Republic of Rwanda – RW evolves into evidence-rich
            narratives for leadership.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_CANVAS.map((entry) => {
            const Icon = entry.icon;
            return (
              <article
                key={entry.name}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 transition hover:-translate-y-1 hover:border-emerald-500/40 dark:border-white/10"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-100">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{entry.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{entry.narrative}</p>
                <p className="text-sm font-medium text-foreground">{entry.focus}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-900 to-slate-950 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_18%,rgba(52,211,153,0.32),transparent_45%),radial-gradient(circle_at_85%_25%,rgba(56,189,248,0.25),transparent_55%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Module deck powering Rwanda</h2>
            <p className="max-w-3xl text-sm text-white/75">
              Multi currency, ticket system, auto responder, emails, KYC documentation, and e-wallet/e-voucher modules
              form a unified operating layer.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MODULE_DECK.map((module) => {
              const Icon = module.icon;
              return (
                <article key={module.label} className="h-full rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${module.accent}`}>
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-white">{module.label}</h3>
                  </div>
                  <p className="mt-3 text-sm text-white/80">{module.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Execution routes for leadership clarity
          </h2>
          <p className="text-sm text-muted-foreground">
            Each phase links the preserved WordPress content to operational governance and East African expansion.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {EXECUTION_ROUTES.map((route) => {
            const Icon = route.icon;
            return (
              <article
                key={route.phase}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-100">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{route.phase}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{route.summary}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container overflow-hidden rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-emerald-100 via-white to-sky-100 p-10 dark:border-emerald-300/40 dark:from-slate-950 dark:via-emerald-950/40 dark:to-slate-950">
        <div className="grid gap-8 lg:grid-cols-[1fr,0.9fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Build Rwanda’s payment gateway intelligence
            </h2>
            <p className="text-sm text-muted-foreground">
              Partner with Cloud MLM Software to combine WordPress continuity with analytics, collaboration, and East
              African expansion playbooks.
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
              className="gap-2 border-emerald-500/40 text-emerald-700 hover:bg-emerald-400/10 dark:border-emerald-300/40 dark:text-emerald-100"
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

