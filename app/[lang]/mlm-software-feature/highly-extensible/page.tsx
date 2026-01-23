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
  Braces,
  Gauge,
  Globe,
  Layers,
  Puzzle,
  Sparkles,
  Workflow
} from "lucide-react";
import {
  Browsers,
  CirclesThreePlus,
  PaintBrushBroad,
  PlugsConnected,
  ShieldCheckered
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroFeature = {
  title: string;
  description: string;
  icon: IconType;
};

type ExtensibilityPillar = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type ConfigurationStream = {
  phase: string;
  headline: string;
  description: string;
  focus: string;
  icon: IconType;
};

type IntegrationCapability = {
  title: string;
  description: string;
  tags: string[];
  icon: IconType;
};

type LaunchStep = {
  step: string;
  title: string;
  description: string;
  outcomes: string[];
};

const HERO_FEATURES: HeroFeature[] = [
  {
    title: "Custom plan logic",
    description:
      "Model binary, matrix, unilevel, board, or hybrid rules with governance controls ready for enterprise audits.",
    icon: Puzzle
  },
  {
    title: "Global-ready experiences",
    description:
      "Launch multilingual and multi-currency journeys with regional compliance guardrails baked in from day one.",
    icon: Globe
  },
  {
    title: "Modular growth foundation",
    description:
      "Introduce e-wallets, ticketing, vouchers, and analytics modules without rewriting your core interface.",
    icon: Layers
  }
];

const EXTENSIBILITY_PILLARS: ExtensibilityPillar[] = [
  {
    title: "Architecture for evolving strategies",
    summary: "Your plan, your software—refine compensation logic as often as the business demands.",
    bullets: [
      "Version binary, generation, or custom plans and validate them inside simulation sandboxes.",
      "Reconfigure rank rules, payouts, and bonus logic without downtime or disruptive releases.",
      "Anchor every change to traceable approvals so compliance teams stay in the loop."
    ],
    icon: Braces
  },
  {
    title: "Interface control for every audience",
    summary: "Deliver unique layouts for admin, field, and investor views without branching the codebase.",
    bullets: [
      "Deploy multiple skins and palettes, letting brand teams refresh colour systems per market.",
      "Blend dashboards, cards, and widgets to match each persona’s workflow priorities.",
      "Orchestrate responsive breakpoints so tablet, mobile, and desktop sessions feel native."
    ],
    icon: PaintBrushBroad
  },
  {
    title: "Operations built to scale",
    summary: "Resilient infrastructure keeps support, finance, and leadership aligned as you grow.",
    bullets: [
      "Bundle e-wallet, e-voucher, and ticketing extensions with secure role-based access.",
      "Activate social sharing, replicated sites, and onboarding assistants in one click.",
      "Leverage automated backups and authentication hardening to keep data safe worldwide."
    ],
    icon: ShieldCheckered
  }
];

const CONFIGURATION_STREAMS: ConfigurationStream[] = [
  {
    phase: "Vision workshops",
    headline: "Translate ambition into technical reality",
    description:
      "Co-design sessions capture how your compensation, branding, and compliance rules should behave across channels.",
    focus:
      "We map distributor journeys, admin oversight, and financial checkpoints so nothing is left to guesswork.",
    icon: Sparkles
  },
  {
    phase: "Experience design",
    headline: "Craft differentiated interfaces for every role",
    description:
      "Wireframes evolve into production-ready layouts—admin, member, and executive dashboards each get bespoke treatment.",
    focus:
      "Navigation shortcuts, skin toggles, and multilingual copy are planned before the first release.",
    icon: Browsers
  },
  {
    phase: "Scale enablement",
    headline: "Launch, iterate, and expand with confidence",
    description:
      "Agile releases add integrations, analytics, and automation as your field organisation grows.",
    focus:
      "Change logs, education plans, and support workflows keep global teams aligned post go-live.",
    icon: CirclesThreePlus
  }
];

const INTEGRATION_CAPABILITIES: IntegrationCapability[] = [
  {
    title: "Financial agility",
    description:
      "Support complex payout scenarios with multi-currency wallets, automated commissions, and secure payment gateways.",
    tags: ["Multi-currency", "E-wallet", "Automated payouts"],
    icon: Gauge
  },
  {
    title: "Collaboration fabric",
    description:
      "Ticketing, announcements, and replicating websites keep distributors connected to HQ in real time.",
    tags: ["Ticket system", "Replicated sites", "24/7 support"],
    icon: Workflow
  },
  {
    title: "E-commerce synergy",
    description:
      "Plug into Shopify, WooCommerce, Magento, or custom storefronts with tested API blueprints.",
    tags: ["Platform integrations", "Headless ready", "Inventory sync"],
    icon: PlugsConnected
  },
  {
    title: "Growth accelerators",
    description:
      "Campaign templates, social share tools, and AI-ready analytics prime every market for expansion.",
    tags: ["Social lead capture", "Launch playbooks", "Insight dashboards"],
    icon: Layers
  }
];

const LAUNCH_STEPS: LaunchStep[] = [
  {
    step: "01",
    title: "Blueprint & validate",
    description:
      "Audit your current stack, gather plan requirements, and agree on extensibility priorities.",
    outcomes: ["Compensation model canvas", "Data flow architecture", "Risk and compliance checklist"]
  },
  {
    step: "02",
    title: "Compose the experience",
    description:
      "Assemble reusable UI blocks, configure automations, and orchestrate multilingual content.",
    outcomes: ["Persona-specific dashboards", "Workflow automation scripts", "Content localisation kit"]
  },
  {
    step: "03",
    title: "Enable & expand",
    description:
      "Launch with training, analytics, and feedback loops so teams can iterate with evidence.",
    outcomes: ["Success metrics dashboard", "Field enablement assets", "Post-launch optimisation roadmap"]
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Highly Extensible MLM Software";
  const description =
    "Reimagine your MLM operations with Cloud MLM Software's highly extensible platform—custom plans, modular interfaces, and integrations built for global scale.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-feature/highly-extensible", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type HighlyExtensiblePageProps = {
  params: { lang: SupportedLocale };
};

export default function HighlyExtensiblePage({ params }: HighlyExtensiblePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const featuresHref = buildLocalizedPath("/features", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden py-24">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_4%_12%,rgba(59,130,246,0.15),transparent_55%),radial-gradient(circle_at_85%_20%,rgba(14,165,233,0.2),transparent_50%),radial-gradient(circle_at_12%_75%,rgba(16,185,129,0.2),transparent_52%)] dark:bg-[radial-gradient(circle_at_4%_12%,rgba(125,211,252,0.2),transparent_55%),radial-gradient(circle_at_85%_20%,rgba(129,140,248,0.3),transparent_52%),radial-gradient(circle_at_12%_75%,rgba(45,212,191,0.25),transparent_55%)]"
          aria-hidden
        />
        <div className="container relative grid gap-16 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)]">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary dark:border-primary/60 dark:bg-primary/15">
              <Sparkles className="h-4 w-4" aria-hidden />
              Highly Extensible Platform
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Highly extensible MLM software engineered for bold growth targets.
              </h1>
              <p className="text-base text-muted-foreground">
                Transform the legacy WordPress promise—“It’s your idea, your software”—into a modern, enterprise-ready reality. Design custom plans, ship differentiated interfaces, and plug in the modules your global field force needs without compromise.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Design my extensible roadmap
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/10 dark:border-primary/50"
              >
                <Link href={demoHref}>
                  Explore the live demo
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <dl className="grid gap-6 text-sm sm:grid-cols-3">
              <div className="rounded-2xl border border-border/60 bg-background/80 p-5 shadow-sm backdrop-blur">
                <dt className="font-semibold text-foreground">56+ supporting modules</dt>
                <dd className="mt-2 text-muted-foreground">
                  Expand with calculators, e-learning, marketing funnels, and emerging tools as your strategy evolves.
                </dd>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/80 p-5 shadow-sm backdrop-blur">
                <dt className="font-semibold text-foreground">24×7 specialist support</dt>
                <dd className="mt-2 text-muted-foreground">
                  Lean on Cloud MLM experts for migrations, audits, and urgent configuration changes around the clock.
                </dd>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/80 p-5 shadow-sm backdrop-blur">
                <dt className="font-semibold text-foreground">Plan mastery across models</dt>
                <dd className="mt-2 text-muted-foreground">
                  Binary, matrix, unilevel, board, and hybrid frameworks ship with testing playbooks and governance.
                </dd>
              </div>
            </dl>
          </div>

          <aside className="grid gap-4">
            {HERO_FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="group relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 p-6 shadow-sm"
                >
                  <div className="absolute right-6 top-6 h-14 w-14 rounded-full bg-primary/10 blur-2xl transition-opacity duration-500 group-hover:opacity-80" aria-hidden />
                  <div className="relative flex gap-4">
                    <span className="mt-1 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-base font-semibold text-foreground">{feature.title}</h2>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Extensibility pillars tailored to your network marketing vision
          </h2>
          <p className="text-sm text-muted-foreground">
            Direct from the original Cloud MLM feature page, these pillars are reimagined for a composable Next.js experience. Every component remains dark and light mode friendly while delivering the professionalism global brands expect.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {EXTENSIBILITY_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-5 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 text-primary">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/15">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{pillar.summary}</p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span aria-hidden>•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-background to-background dark:from-primary/20" aria-hidden />
        <div className="container space-y-12 py-20">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Configuration streams that keep every team in sync
            </h2>
            <p className="text-sm text-muted-foreground">
              Workshops, design sprints, and enablement programmes ensure extensibility never sacrifices clarity. Each stream brings structure to your rollout while preserving creative freedom.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {CONFIGURATION_STREAMS.map((stream) => {
              const Icon = stream.icon;
              return (
                <article
                  key={stream.phase}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm backdrop-blur"
                >
                  <div className="flex items-center justify-between text-sm font-semibold text-primary">
                    <span className="uppercase tracking-[0.35em] text-primary/80">{stream.phase}</span>
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{stream.headline}</h3>
                  <p className="text-sm text-muted-foreground">{stream.description}</p>
                  <p className="text-sm font-medium text-foreground">{stream.focus}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Integration-ready from marketing to finance
          </h2>
          <p className="text-sm text-muted-foreground">
            Connect critical modules the moment you need them. The Cloud MLM ecosystem keeps your distributors engaged, your accountants confident, and your leadership informed.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {INTEGRATION_CAPABILITIES.map((capability) => {
            const Icon = capability.icon;
            return (
              <article
                key={capability.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 text-primary">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/15">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{capability.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
                <div className="flex flex-wrap gap-2">
                  {capability.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary dark:border-primary/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 via-background to-primary/5 p-10 shadow-sm dark:via-slate-950">
          <div className="absolute -left-24 top-10 h-48 w-48 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute -right-16 bottom-6 h-56 w-56 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-900/30" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Launch with a blueprint that scales on day one
              </h2>
              <p className="text-sm text-muted-foreground">
                Adopt the Cloud MLM enablement programme to merge extensibility with disciplined delivery. Share your requirements and we will craft a phased roadmap that keeps stakeholders confident and adoption high.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href={pricingHref}>
                    Review pricing options
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
                  <Link href={featuresHref}>
                    Explore more features
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-primary/30 bg-background/85 p-6 shadow-sm backdrop-blur dark:border-primary/40 dark:bg-slate-950/70">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/70">Launch blueprint</p>
              <div className="space-y-6">
                {LAUNCH_STEPS.map((step) => (
                  <div key={step.step} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-primary/80">{step.step}</span>
                      <span className="text-sm font-semibold text-foreground">{step.title}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                    <ul className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                      {step.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="rounded-full border border-border/60 bg-background px-3 py-1 dark:border-border/40"
                        >
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
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

