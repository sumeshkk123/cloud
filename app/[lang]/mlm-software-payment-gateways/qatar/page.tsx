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
  Cpu,
  GlobeHemisphereEast,
  Handshake,
  Lightning,
  MapTrifold,
  Megaphone,
  ShieldCheck,
  StackSimple,
  UsersThree,
  Waveform
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroTile = {
  heading: string;
  detail: string;
  icon: IconType;
};

type GatewayMatrix = {
  name: string;
  narrative: string;
  focus: string;
  icon: IconType;
};

type ModuleLayer = {
  title: string;
  summary: string;
  icon: IconType;
  accent: string;
};

type ExecutionChannel = {
  title: string;
  description: string;
  icon: IconType;
};

const HERO_TILES: HeroTile[] = [
  {
    heading: "Hero statement intact",
    detail:
      "Ways to accept payments from MLM Software in People’s Democratic Republic of Qatar – QA remains the guiding promise.",
    icon: ShieldCheck
  },
  {
    heading: "Gateway portfolio",
    detail: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree tuned for Qatar’s growth corridors.",
    icon: ChartLineUp
  },
  {
    heading: "Enterprise continuity",
    detail:
      "Cloud MLM Software already serves global innovators—Qatar gains AI telemetry, regional nuance, and executive playbooks.",
    icon: Buildings
  }
];

const GATEWAY_MATRIX: GatewayMatrix[] = [
  {
    name: "PayPal — cross-border reach",
    narrative: "Reconcile GCC and global diaspora payments with treasury-grade visibility.",
    focus: "Multi currency controls monitor QAR, USD, EUR, and GBP flows for finance leaders.",
    icon: StackSimple
  },
  {
    name: "Amazon Pay — ecommerce velocity",
    narrative: "Support premium retail, wellness, and gifting brands expanding from Doha.",
    focus: "Auto responder and emails modules deliver bilingual journeys for high-value members.",
    icon: Megaphone
  },
  {
    name: "PayU — regional hub expansion",
    narrative: "Link Qatar’s distributors with partners across MENA, India, and Europe.",
    focus: "Ticket workflows catalogue PSP guidance, VAT evidence, and compliance approvals.",
    icon: ClipboardText
  },
  {
    name: "Stripe — innovation lab",
    narrative: "Pilot AI-driven services, subscriptions, and virtual events without compliance friction.",
    focus: "Backup intelligence and anomaly detection keep experiments auditable for leadership.",
    icon: Waveform
  },
  {
    name: "Authorize.Net — US partnerships",
    narrative: "Blend North American acquiring relationships with Qatar’s regulatory expectations.",
    focus: "KYC documentation vault centralises contracts, IDs, and supervisory signoffs.",
    icon: Compass
  },
  {
    name: "Braintree — experiential loyalty",
    narrative: "Align live hospitality, sports sponsorships, and ecommerce experiences.",
    focus: "E-wallet and e-voucher modules produce trackable incentives with governance layers.",
    icon: Handshake
  }
];

const MODULE_LAYERS: ModuleLayer[] = [
  {
    title: "Multi currency module",
    summary: "Present QAR, USD, and EUR pricing while automating FX reconciliations and alerts.",
    icon: GlobeHemisphereEast,
    accent: "bg-purple-500/15 text-purple-900 dark:bg-purple-500/20 dark:text-purple-100"
  },
  {
    title: "Ticket system",
    summary: "Route compliance, PSP, and distributor needs with SLA dashboards.",
    icon: ClipboardText,
    accent: "bg-amber-500/15 text-amber-900 dark:bg-amber-500/20 dark:text-amber-100"
  },
  {
    title: "Auto responder",
    summary: "Deliver Arabic and English communications across onboarding and retention.",
    icon: Megaphone,
    accent: "bg-rose-500/15 text-rose-900 dark:bg-rose-500/20 dark:text-rose-100"
  },
  {
    title: "Emails hub",
    summary: "Campaign, transactional, and executive updates align in one analytics layer.",
    icon: UsersThree,
    accent: "bg-cyan-500/15 text-cyan-900 dark:bg-cyan-500/20 dark:text-cyan-100"
  },
  {
    title: "KYC documentation",
    summary: "Secure vault keeps regulator-ready records for every distributor and partner.",
    icon: ClipboardText,
    accent: "bg-blue-500/15 text-blue-900 dark:bg-blue-500/20 dark:text-blue-100"
  },
  {
    title: "E-wallet & e-voucher",
    summary: "Instant payouts and rewards run with maker-checker governance and audit trails.",
    icon: StackSimple,
    accent: "bg-fuchsia-500/15 text-fuchsia-900 dark:bg-fuchsia-500/20 dark:text-fuchsia-100"
  }
];

const EXECUTION_CHANNELS: ExecutionChannel[] = [
  {
    title: "Anchor WordPress fidelity",
    description:
      "Hero language and module lists port over without deviation, preserving SEO trust and stakeholder recognition.",
    icon: ShieldCheck
  },
  {
    title: "Instrument AI telemetry",
    description: "Dashboards, insights, and anomaly alerts highlight gateway performance and compliance posture.",
    icon: Cpu
  },
  {
    title: "Codify collaboration",
    description: "Ticket, email, and documentation workflows align finance, legal, and distributor enablement.",
    icon: Lightning
  },
  {
    title: "Expand GCC playbooks",
    description: "Insights extend into Saudi Arabia, UAE, and wider MENA markets with shared governance.",
    icon: MapTrifold
  }
];

export const metadata: Metadata = {
  title: "Qatar MLM Payment Gateways | Cloud MLM Software",
  description:
    "Modernise Qatar’s MLM payment gateways with PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, and Braintree supported by analytics and governance.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/qatar"
  },
  openGraph: {
    title: "Qatar MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People’s Democratic Republic of Qatar – QA, now paired with AI telemetry and executive alignment."
  }
};

type QatarPageProps = {
  params: { lang: SupportedLocale };
};

export default function QatarPaymentGatewayPage({ params }: QatarPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const servicesHref = buildLocalizedPath("/services", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-slate-900 to-black py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(192,132,252,0.35),transparent_45%),radial-gradient(circle_at_82%_25%,rgba(96,165,250,0.25),transparent_60%),radial-gradient(circle_at_55%_75%,rgba(244,114,182,0.22),transparent_65%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white">
              Ways to accept payments · Qatar (QA)
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Qatar MLM payment gateways with boardroom-ready insight
              </h1>
              <p className="max-w-3xl text-base text-white/80">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Qatar – QA remains the
                hero line, now surrounded by depth, analytics, and guidance for decision-makers.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-white/90">
                <Link href={contactHref}>
                  Engage with our Doha team
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-white/40 text-white hover:bg-white/15"
              >
                <Link href={demoHref}>
                  Explore live demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5">
            {HERO_TILES.map((tile) => {
              const Icon = tile.icon;
              return (
                <article
                  key={tile.heading}
                  className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-base font-semibold">{tile.heading}</h2>
                      <p className="text-sm text-white/80">{tile.detail}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Gateway narratives refined for Qatar
            </h2>
            <p className="text-sm text-muted-foreground">
              Cloud MLM Software has already built great systems for the greatest companies. The availability of the
              payment gateways supported for People’s Democratic Republic of Qatar – QA is honoured and amplified with
              governance-driven storytelling.
            </p>
            <div className="rounded-3xl border border-border/50 bg-background/70 p-6 dark:border-white/15 dark:bg-white/5">
              <p className="text-sm text-muted-foreground">
                Each gateway receives a mission, supporting evidence, and a focus area tailored to Qatar’s economic
                vision.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={servicesHref}>
                  Review integration pathways
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-border text-foreground hover:bg-foreground/10 dark:border-white/15"
              >
                <Link href={pricingHref}>
                  Download pricing brief
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-6">
            {GATEWAY_MATRIX.map((entry) => {
              const Icon = entry.icon;
              return (
                <article
                  key={entry.name}
                  className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:border-purple-500/40 dark:border-white/10"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10 text-purple-700 dark:bg-purple-500/15 dark:text-purple-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground">{entry.name}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{entry.narrative}</p>
                  <p className="mt-4 text-sm font-medium text-foreground">{entry.focus}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-purple-100 via-white to-slate-100 py-20 dark:from-slate-950 dark:via-purple-950/40 dark:to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_25%,rgba(192,132,252,0.22),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.2),transparent_60%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Modules in formation</h2>
            <p className="max-w-3xl text-sm text-muted-foreground">
              Multi currency, ticket system, auto responder, emails, KYC documentation, and e-wallet/e-voucher flows
              compose a layered operations stack for Qatar.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MODULE_LAYERS.map((layer) => {
              const Icon = layer.icon;
              return (
                <article key={layer.title} className="rounded-3xl border border-border/50 bg-background/80 p-6 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${layer.accent}`}>
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground">{layer.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{layer.summary}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Execution channels for leadership clarity
          </h2>
          <p className="text-sm text-muted-foreground">
            Board-level audiences receive staged guidance on how this migration sustains Qatar’s diversification
            strategy.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {EXECUTION_CHANNELS.map((channel) => {
            const Icon = channel.icon;
            return (
              <article
                key={channel.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10 text-purple-700 dark:bg-purple-500/15 dark:text-purple-100">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{channel.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{channel.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container overflow-hidden rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-100 via-white to-slate-100 p-10 dark:border-purple-300/30 dark:from-slate-950 dark:via-purple-950/40 dark:to-slate-950">
        <div className="grid gap-8 lg:grid-cols-[1fr,0.9fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Build Qatar’s payment gateway intelligence
            </h2>
            <p className="text-sm text-muted-foreground">
              Collaborate with Cloud MLM Software to combine WordPress fidelity, AI telemetry, and GCC expansion
              playbooks into one experience.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href={contactHref}>
                Schedule a leadership workshop
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 border-purple-500/40 text-purple-700 hover:bg-purple-500/10 dark:border-purple-300/40 dark:text-purple-100">
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

