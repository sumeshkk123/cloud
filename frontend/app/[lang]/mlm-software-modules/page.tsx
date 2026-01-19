import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

type IconType = ComponentType<{ className?: string }>;

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Building2,
  ClipboardCheck,
  Globe2,
  Layers,
  LineChart,
  Megaphone,
  PackageSearch,
  Puzzle,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";

export const dynamic = "force-static";

const HERO_STATS = [
  { label: "Configurable modules", value: "56+" },
  { label: "Integration partners", value: "35+" },
  { label: "Markets served", value: "100+" }
];

type ModuleCard = {
  title: string;
  description: string;
  bullets: string[];
  href: string;
  icon: IconType;
};

const PRIMARY_MODULES: ModuleCard[] = [
  {
    title: "Commission engine",
    description:
      "Automate complex plan logic, qualification rules, and payout schedules with audit-ready controls and sandbox testing.",
    bullets: [
      "Support binary, unilevel, matrix, board, hybrid, and pools",
      "Preview run results before payroll closes",
      "Export GL-ready statements and tax documents"
    ],
    href: "/mlm-software/commission-module/",
    icon: Layers
  },
  {
    title: "Distributor CRM",
    description:
      "Track leads, onboarding stages, compliance, and coaching tasks in one workspace connected to replicated sites.",
    bullets: [
      "Automations for welcome, nurture, and reactivation",
      "Role-aware dashboards for upline coaching",
      "Built-in ticketing and knowledge base"
    ],
    href: "/mlm-crm/",
    icon: Users
  },
  {
    title: "Marketing automation",
    description:
      "Orchestrate campaigns, funnels, and content libraries with AI-assisted copy and real-time attribution.",
    bullets: [
      "Journey builder with email, SMS, and push",
      "Template library for promotions and launches",
      "Embedded analytics for enrollments and LTV"
    ],
    href: "/mlm-business-marketing/",
    icon: Megaphone
  },
  {
    title: "Commerce & fulfillment",
    description:
      "Connect storefronts, manage autoship, and orchestrate global inventory with unified product and tax controls.",
    bullets: [
      "Sync Shopify, WooCommerce, Magento, and OpenCart",
      "Regional pricing, vouchers, and bundles",
      "Warehouse, pick-pack, and logistics tracking"
    ],
    href: "/mlm-software/ecommerce/",
    icon: PackageSearch
  }
];

type ModuleCategory = {
  title: string;
  description: string;
  icon: IconType;
  modules: Array<{ name: string; blurb: string; href?: string }>;
};

const MODULE_CATEGORIES: ModuleCategory[] = [
  {
    title: "Compensation & finance",
    description:
      "Design, calculate, and reconcile payouts with configurable rules, fraud controls, and finance exports.",
    icon: Layers,
    modules: [
      {
        name: "Plan studio",
        blurb: "Model and iterate plan logic with simulation and approvals for every market.",
        href: "/mlm-software-feature/highly-extensible"
      },
      {
        name: "Payout automation",
        blurb: "Schedule weekly, monthly, and bonus runs with e-wallet, card, or wire settlement.",
        href: "/mlm-software-feature/payment-processing-system-automatic-manual"
      },
      {
        name: "Wallet & ledger",
        blurb: "Give members instant access to earnings, transfers, and statement history.",
        href: "/mlm-software-feature/in-built-e-wallet"
      },
      {
        name: "Tax & compliance",
        blurb: "Automate VAT, GST, 1099/K-1, and regional withholding with document workflows.",
        href: "/mlm-software-feature/payment-gateway"
      }
    ]
  },
  {
    title: "Field experience",
    description:
      "Empower distributors with mobile-first tools for onboarding, support, and community growth.",
    icon: Users,
    modules: [
      {
        name: "Replicated sites",
        blurb: "Launch SEO-friendly personal storefronts with localized content and compliance guidelines.",
        href: "/mlm-software-feature/replicating-website"
      },
      {
        name: "Learning journeys",
        blurb: "Deliver onboarding, rank playbooks, and credentialing with progress tracking.",
        href: "/mlm-software-feature/easy-navigation"
      },
      {
        name: "Support desk",
        blurb: "Centralize tickets, SLAs, and knowledge bases for members and customers.",
        href: "/mlm-software-feature/support-ticket-system-module"
      },
      {
        name: "Task & recognition",
        blurb: "Automate coaching tasks, shout-outs, and leaderboards inside the distributor app.",
        href: "/mlm-software-feature/powerfully-responsive"
      }
    ]
  },
  {
    title: "Marketing & growth",
    description:
      "Attract, convert, and nurture customers and prospects with coordinated messaging.",
    icon: Megaphone,
    modules: [
      {
        name: "Campaign automation",
        blurb: "Build cross-channel journeys with AI copy, segmentation, and goal tracking.",
        href: "/mlm-business-marketing/"
      },
      {
        name: "Lead capture pages",
        blurb: "Spin up landing pages, track conversions, and route leads to mentors automatically.",
        href: "/mlm-software-feature/lcp-pages-management"
      },
      {
        name: "Event & webinar hub",
        blurb: "Promote events, manage RSVPs, and share recordings to keep momentum high.",
        href: "/mlm-software-feature/white-label-mlm-software"
      },
      {
        name: "Content library",
        blurb: "Publish compliant assets, scripts, and social media kits for every segment.",
        href: "/mlm-software-feature/theme-changing-options"
      }
    ]
  },
  {
    title: "Commerce & logistics",
    description:
      "Operate global storefronts, inventory, and fulfillment from a unified control center.",
    icon: Boxes,
    modules: [
      {
        name: "Product information management",
        blurb: "Manage SKUs, kits, and bundles with localized pricing and taxes.",
        href: "/mlm-software/ecommerce/"
      },
      {
        name: "Inventory & warehouse",
        blurb: "Optimize stock, transfers, and pick-pack workflows across regions.",
        href: "/mlm-software-feature/backup-manager"
      },
      {
        name: "Autoship & subscriptions",
        blurb: "Automate replenishment with flexible intervals, rewards, and retention offers.",
        href: "/mlm-software-feature/multi-currency-system"
      },
      {
        name: "Order orchestration",
        blurb: "Route fulfillment, returns, and exceptions with carrier integrations and SLAs.",
        href: "/mlm-software-feature/e-voucher-generator/"
      }
    ]
  },
  {
    title: "Compliance & security",
    description:
      "Protect your brand with proactive compliance, document workflows, and secure infrastructure.",
    icon: ShieldCheck,
    modules: [
      {
        name: "KYC & document vault",
        blurb: "Collect, approve, and renew documents with automated reminders and audit trails.",
        href: "/mlm-software-feature/secure-authentication-system"
      },
      {
        name: "Field communication guardrails",
        blurb: "Monitor replicated sites, social sharing, and promotions for policy alignment.",
        href: "/mlm-software-feature/secure-mlm-software"
      },
      {
        name: "Risk monitoring",
        blurb: "Flag anomalies, fraud, and duplicate activity with machine learning and rules.",
        href: "/mlm-software-feature/dynamic-compression-system"
      },
      {
        name: "Backup & recovery",
        blurb: "Stay resilient with encrypted backups, georedundancy, and rapid restore runbooks.",
        href: "/mlm-software-feature/strong-backup-system"
      }
    ]
  },
  {
    title: "Insights & planning",
    description:
      "Give executives and field leaders real-time analytics to drive smarter decisions.",
    icon: LineChart,
    modules: [
      {
        name: "Performance dashboards",
        blurb: "Visualize KPIs for revenue, rank, retention, and customer growth in one view.",
        href: "/mlm-software-feature/advanced-reporting-system"
      },
      {
        name: "Forecasting & goals",
        blurb: "Set targets, model scenarios, and track progress with live updates.",
        href: "/mlm-plan/"
      },
      {
        name: "Data exports & BI",
        blurb: "Feed your warehouse, Tableau, or Power BI with governed datasets and APIs.",
        href: "/mlm-software-feature/backend-caching-technology"
      },
      {
        name: "AI insights",
        blurb: "Predict churn, spotlight leaders, and recommend next-best actions with machine learning.",
        href: "/mlm-software-feature/ai-smart-recruiter"
      }
    ]
  }
];

type Spotlight = {
  title: string;
  description: string;
  bullets: string[];
  href: string;
  icon: IconType;
};

const MODULE_SPOTLIGHTS: Spotlight[] = [
  {
    title: "AI-assisted distributor journeys",
    description:
      "Blend onboarding, coaching, and recognition flows that adapt to behavior, rank, and region so every member knows their next step.",
    bullets: [
      "Dynamic checklists tied to compensation milestones",
      "Personalized content and training recommendations",
      "Leader dashboards for coaching insights"
    ],
    href: "/mlm-software-feature/ai-features",
    icon: Sparkles
  },
  {
    title: "Global commerce hub",
    description:
      "Coordinate products, pricing, fulfillment, and localized promotions across direct-to-consumer and replicated storefronts.",
    bullets: [
      "Launch kits, bundles, and flash sales in minutes",
      "Connect ERP, 3PL, and tax partners via APIs",
      "Automate compliance by market and product"
    ],
    href: "/network-marketing-software/",
    icon: Globe2
  },
  {
    title: "Finance-grade compliance",
    description:
      "Combine fraud detection, document workflows, and advanced reporting so finance and legal teams stay audit ready.",
    bullets: [
      "Identity verification and sanction screening",
      "Automated 1099/Tx filings and statements",
      "Complete audit logs for every payout and change"
    ],
    href: "/mlm-software-feature/secure-mlm-software",
    icon: ShieldCheck
  }
];

const IMPLEMENTATION_STEPS = [
  {
    title: "Module discovery",
    description: "We map your current stack, gaps, and growth targets to curate the right mix of modules.",
    icon: Puzzle
  },
  {
    title: "Configuration sprint",
    description: "Our specialists configure data models, automations, branding, and integrations in iterative cycles.",
    icon: ClipboardCheck
  },
  {
    title: "Launch enablement",
    description: "We deliver administrator training, field rollout kits, and run end-to-end UAT before go-live.",
    icon: BadgeCheck
  },
  {
    title: "Scale and optimize",
    description: "Quarterly reviews uncover new automation, plan updates, and regional expansion opportunities.",
    icon: Building2
  }
];

const MODULE_FAQS = [
  {
    question: "How do I choose which modules to launch first?",
    answer:
      "We conduct a discovery workshop to map your compensation plan, sales model, and legacy stack. From there we recommend a phased roadmap that balances quick wins with long-term scalability."
  },
  {
    question: "Can modules be rolled out to specific regions?",
    answer:
      "Yes. Every module supports market-by-market enablement, so you can pilot in one country and expand with localized content, currencies, and tax rules when ready."
  },
  {
    question: "Do the modules integrate with our existing commerce or CRM?",
    answer:
      "Cloud MLM Software ships with REST APIs, webhooks, and prebuilt connectors for leading commerce, CRM, ERP, and marketing platforms to keep data unified."
  },
  {
    question: "What kind of training is included?",
    answer:
      "Admins receive configuration labs, knowledge base access, and office hours. Distributors get mobile-first onboarding, campaigns, and template kits tailored to their role."
  },
  {
    question: "Can we white-label the modules?",
    answer:
      "Absolutely. Branding, domains, language packs, and even replicated sites can be aligned to your corporate or partner identity."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Software Modules | Cloud MLM Software";
  const description =
    "Explore 56+ configurable MLM software modules covering compensation, commerce, marketing, compliance, and analytics. Build a tailored platform for your network marketing brand.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-modules", locale)
    }
  };
}

export default function ModulesPage({ params }: { params: { lang: SupportedLocale } }) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = "/pricing/";
  const demoHref = "/free-mlm-software-demo/";

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-violet-50 via-white to-sky-50 py-24 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900/40">
        <div className="container relative">
          <div className="max-w-4xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" aria-hidden />
              Modular MLM platform
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Configure the exact MLM software modules your field needs to grow.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Mix and match compensation, commerce, marketing, compliance, and analytics modules to build a unified platform that scales with every market launch.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Talk to a module specialist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={pricingHref} target="_blank" rel="noopener noreferrer">
                  View pricing
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href={demoHref}>
                  Watch module demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <dl className="mt-14 grid gap-6 sm:grid-cols-3">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border/60 bg-white/80 p-6 text-center shadow-sm backdrop-blur dark:bg-slate-900/70"
              >
                <dt className="text-sm font-medium uppercase tracking-wide text-muted-foreground">{stat.label}</dt>
                <dd className="mt-2 text-3xl font-semibold text-foreground">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Start with the essentials, scale with confidence
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Every deployment includes a curated mix of core modules. Add specialized capabilities as you expand into new regions, business models, or product lines.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PRIMARY_MODULES.map((module) => (
            <article
              key={module.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <module.icon className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-foreground">{module.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{module.description}</p>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {module.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={module.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
              >
                Explore module
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A full catalog of modules for every team
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Choose from functional domains to assemble the perfect toolkit for finance, operations, marketing, and field leadership.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {MODULE_CATEGORIES.map((category) => (
            <article
              key={category.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <category.icon className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {category.modules.map((module) => (
                  <li key={module.name}>
                    <div className="font-semibold text-foreground">{module.name}</div>
                    <p className="text-muted-foreground/90">
                      {module.blurb}
                      {module.href ? (
                        <>
                          {" "}
                          <Link
                            href={module.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary transition hover:text-primary/80"
                          >
                            Learn more
                          </Link>
                        </>
                      ) : null}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="container space-y-10">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Spotlight: modules in action</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Layer advanced capabilities to solve high-impact scenarios for launches, expansions, and revenue acceleration.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {MODULE_SPOTLIGHTS.map((spotlight) => (
              <article
                key={spotlight.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <spotlight.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-foreground">{spotlight.title}</h3>
                <p className="text-sm text-muted-foreground">{spotlight.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {spotlight.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={spotlight.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
                >
                  See how it works
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How we roll out your module stack</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Our specialists pair proven implementation playbooks with AI-powered tooling to configure, launch, and optimize your module mix.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {IMPLEMENTATION_STEPS.map((step) => (
            <article
              key={step.title}
              className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <step.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Answers to the most common questions from teams planning their Cloud MLM Software module rollout.
          </p>
        </div>
        <div className="space-y-4">
          {MODULE_FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-foreground">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-sm text-primary transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="container flex flex-col items-center gap-6 rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-12 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to design your module roadmap?</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Partner with our implementation strategists to prioritize the modules that deliver the fastest impact for your network.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Schedule a planning session
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={demoHref}>
                Browse demo environments
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
