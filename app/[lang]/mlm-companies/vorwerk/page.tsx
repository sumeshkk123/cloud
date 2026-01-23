import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { buildLocalizedPath } from "@/lib/locale-links";
import { isSupportedLocale } from "@/lib/i18n-utils";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  ArrowRight,
  ArrowUpRight,
  ChefHat,
  Factory,
  Gem,
  Globe,
  Hammer,
  Layers,
  MapPin,
  Sparkles,
  Users
} from "lucide-react";
import { ChartLineUp, ChatsCircle, ClipboardText, Handshake, Storefront, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type ProductSuite = {
  title: string;
  description: string;
  proof: string;
  icon: IconType;
};

type FieldMoment = {
  stage: string;
  focus: string;
  enablement: string;
  icon: IconType;
};

type CloudPlayCard = {
  title: string;
  description: string;
  impact: string;
  icon: IconType;
};

const CORE_METRICS: Metric[] = [
  {
    label: "Global revenue",
    value: "$4.30B",
    detail: "Premium appliances, beauty, flooring, and financial services fuel sustainable growth.",
    icon: ChartLineUp
  },
  {
    label: "Founded",
    value: "1883 legacy",
    detail: "Family-owned innovation with 140+ years of direct selling heritage.",
    icon: Factory
  },
  {
    label: "Employees",
    value: "12,972 experts",
    detail: "Manufacturing, R&D, and experience teams stretching from Europe to the Americas.",
    icon: Users
  },
  {
    label: "Compensation",
    value: "Single-level plan",
    detail: "Party plan storytelling backed by host rewards, bonuses, and recognition tracks.",
    icon: ClipboardText
  },
  {
    label: "Primary markets",
    value: "U.S. • Mexico • Europe",
    detail: "Localized demos adapt for every cultural audience while protecting the brand voice.",
    icon: Globe
  }
];

const PRODUCT_SUITES: ProductSuite[] = [
  {
    title: "Kobold homecare engineering",
    description:
      "Smart cleaning systems with high-efficiency filtration, modular attachments, and digital maintenance prompts.",
    proof: "Live demos highlight superior suction, allergy protection, and lifetime service guarantees.",
    icon: Sparkles
  },
  {
    title: "Thermomix culinary intelligence",
    description:
      "All-in-one cooking experiences that blend guided recipes, IoT integrations, and meal community inspiration.",
    proof: "Members unlock chef-level results through intuitive screens, AI recipe updates, and savings calculators.",
    icon: ChefHat
  },
  {
    title: "Twercs makerspace",
    description:
      "Portable toolkits that activate creative DIY moments at parties, pop-up workshops, and community hubs.",
    proof: "Rechargeable, ready-to-use tools reduce setup friction and keep hosts confident during demos.",
    icon: Hammer
  },
  {
    title: "Jafra beauty collective",
    description:
      "High-performing skincare, fragrance, and color lines crafted with European labs and inclusive shade ranges.",
    proof: "Consultants cross-sell self-care rituals that elevate average order values and retention.",
    icon: Gem
  },
  {
    title: "Financial & interiors",
    description:
      "akf bank financing, flooring solutions, and service subscriptions extend value beyond the main catalogues.",
    proof: "Bundled offers help households modernize homes and spread investments over flexible terms.",
    icon: Layers
  }
];

const FIELD_MOMENTS: FieldMoment[] = [
  {
    stage: "Host immersive gatherings",
    focus:
      "Invites transform living rooms into brand stages with cross-category storytelling and sensory touchpoints.",
    enablement: "Event kits, host incentives, and compliance-ready scripts orchestrated from one dashboard.",
    icon: ChatsCircle
  },
  {
    stage: "Demonstrate hero products",
    focus:
      "Blend Kobold cleaning trials, Thermomix tastings, and beauty rituals so guests experience the lifestyle.",
    enablement: "Mobile checklists, content microsites, and augmented overlays keep demos precise and inspiring.",
    icon: Storefront
  },
  {
    stage: "Curate ongoing membership",
    focus:
      "Follow up with recipes, maintenance reminders, and curated bundles that celebrate every household milestone.",
    enablement: "Automated replenishment paths, loyalty scoring, and refer-a-host journeys sustain momentum.",
    icon: UsersThree
  }
];

const CLOUD_PLAYS: CloudPlayCard[] = [
  {
    title: "Demo orchestration studio",
    description:
      "Plan cross-category parties with smart agendas, compliance guardrails, and effortless host coaching.",
    impact: "Boost average event revenue while reducing prep time for every consultant.",
    icon: Sparkles
  },
  {
    title: "Thermomix insights hub",
    description:
      "Connect cook-along data, recipe performance, and appliance diagnostics to trigger timely outreach.",
    impact: "Keeps households engaged and unlocks upsell for accessories and services.",
    icon: ChefHat
  },
  {
    title: "Kobold service command",
    description:
      "Automates maintenance alerts, filter subscriptions, and technician scheduling across regions.",
    impact: "Protects product lifetime value and sustains customer satisfaction metrics.",
    icon: Handshake
  },
  {
    title: "Global compliance navigator",
    description:
      "Monitors regional regulations, disclosure standards, and party plan policies in every market.",
    impact: "Gives field leaders a single source of truth and protects the brand from risk.",
    icon: ClipboardText
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Vorwerk Direct Selling Enablement Blueprint";
  const description =
    "Explore Vorwerk’s heritage of party plan innovation and how Cloud MLM Software elevates Kobold, Thermomix, and Jafra experiences with data-driven enablement.";
  const keywords = [
    "Vorwerk direct selling strategy",
    "Kobold Thermomix party plan software",
    "Vorwerk consultant enablement",
    "Cloud MLM Software Vorwerk solutions",
    "Direct sales automation for Vorwerk"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/vorwerk", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type VorwerkPageProps = {
  params: { lang: SupportedLocale };
};

export default function VorwerkPage({ params }: VorwerkPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const servicesHref = buildLocalizedPath("/services", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const indexHref = buildLocalizedPath("/mlm-companies", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-slate-950 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.28),transparent_55%),radial-gradient(circle_at_85%_30%,rgba(134,239,172,0.25),transparent_58%),radial-gradient(circle_at_50%_85%,rgba(196,181,253,0.2),transparent_52%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/50 bg-emerald-500/10 px-4 py-1 text-sm font-semibold tracking-wide text-emerald-100">
              Vorwerk • Heritage direct selling
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Craft premium experiences from kitchens to couture with data-guided party plans.
            </h1>
            <p className="text-base text-emerald-50/80">
              Vorwerk’s family of brands—from Kobold cleaning systems and Thermomix culinary labs to Twercs tools, Email Tea
              makers, Jafra cosmetics, and akf bank solutions—thrives on immersive, relationship-driven selling. Pair those moments
              with automation that keeps every host confident and every guest delighted.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={demoHref}>
                  Tour the party plan cockpit
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-emerald-200/60 text-emerald-100 hover:bg-emerald-500/10">
                <Link href={pricingHref}>
                  Build a regional rollout
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-emerald-100 underline underline-offset-4 hover:bg-white/10">
                <Link href={indexHref}>
                  Return to MLM company index
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="space-y-3 text-sm text-emerald-50/80">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-200" aria-hidden />
                Wuppertal, Germany • Serving the United States, Mexico, and Europe
              </p>
              <p>
                “Every Vorwerk gathering should feel bespoke—layering data, design, and hospitality so guests become lifelong
                members.”
              </p>
            </div>
          </div>
          <aside className="grid gap-5 rounded-3xl border border-white/15 bg-white/5 p-8 shadow-xl backdrop-blur">
            <div className="space-y-2 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">Key metrics</p>
              <h2 className="text-2xl font-semibold text-white">Vorwerk growth pulse</h2>
            </div>
            <div className="grid gap-4">
              {CORE_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-black/20 p-4 text-left shadow-sm transition hover:-translate-y-1 hover:border-emerald-200/40 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-emerald-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-100/80">{metric.label}</p>
                        <p className="text-lg font-semibold text-white">{metric.value}</p>
                      </div>
                    </div>
                    <p className="text-sm text-emerald-50/80">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 rounded-3xl border border-border/60 bg-background/95 p-10 shadow-sm dark:border-border/40 dark:bg-slate-950/80 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What does Vorwerk offer?</h2>
            <p className="text-base text-muted-foreground">
              The Vorwerk family blends world-class appliances, beauty innovations, and financial services to serve modern
              households. Kobold vacuum systems, Thermomix kitchen intelligence, Twercs portable maker tools, and Email Tea makers
              sit alongside Jafra cosmetics, Vorwerk flooring, and akf bank solutions—delivering a holistic lifestyle portfolio.
            </p>
            <p className="text-base text-muted-foreground">
              Consultants tailor the mix to local preferences, guiding guests through tactile product journeys and authentic
              storytelling. The result: elevated party plan experiences that inspire repeat purchasing and long-term loyalty.
            </p>
          </div>
          <div className="grid gap-4 rounded-3xl border border-primary/10 bg-primary/5 p-6 dark:border-primary/10 dark:bg-primary/10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80 dark:text-primary/70">Primary focus</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                Premium appliances, beauty, and lifestyle services curated for every guest persona.
              </li>
              <li className="flex items-start gap-2">
                <Users className="mt-1 h-4 w-4 text-primary" aria-hidden />
                Hosts and consultants collaborate to deliver live experiences backed by digital coaching.
              </li>
              <li className="flex items-start gap-2">
                <ClipboardText className="mt-1 h-4 w-4 text-primary" aria-hidden />
                Single-level compensation optimises simplicity, transparency, and compliance.
              </li>
            </ul>
            <div>
              <Button asChild variant="secondary">
                <Link href={servicesHref}>
                  Discover enablement services
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-4 text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-border/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Product constellations
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Signature suites powering every Vorwerk gathering
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            Blend Kobold performance, Thermomix inspiration, and Jafra self-care into dynamic showcases that convert guests into
            members.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PRODUCT_SUITES.map((suite) => {
            const Icon = suite.icon;
            return (
              <article
                key={suite.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/80"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{suite.title}</h3>
                  <p className="text-sm text-muted-foreground">{suite.description}</p>
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                  {suite.proof}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
          <div className="space-y-4 rounded-3xl border border-border/60 bg-background p-8 shadow-sm dark:border-border/40 dark:bg-slate-950/80">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Field moments that matter</h2>
            <p className="text-sm text-muted-foreground">
              Consistency across hosts, regions, and brands is vital. Empower every consultant with frameworks that spark delight
              and protect compliance in equal measure.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 hidden border-l border-primary/30 md:block" aria-hidden />
            <div className="space-y-6">
              {FIELD_MOMENTS.map((moment, index) => {
                const Icon = moment.icon;
                return (
                  <article
                    key={moment.stage}
                    className="relative grid gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75 md:grid-cols-[auto_1fr]"
                  >
                    <div className="flex items-center gap-4 md:flex-col md:items-start">
                      <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Step {index + 1}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{moment.stage}</h3>
                      <p className="text-sm text-muted-foreground">{moment.focus}</p>
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                        {moment.enablement}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10 rounded-3xl border border-border/60 bg-background p-10 shadow-sm dark:border-border/40 dark:bg-slate-950/85">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,0.5fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Cloud MLM Software plays</h2>
            <p className="text-sm text-muted-foreground">
              Translate Vorwerk’s craftsmanship into modern, AI-ready operations that honour legacy while accelerating growth.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Architect my Vorwerk roadmap
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href={demoHref}>
                  Schedule a guided demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {CLOUD_PLAYS.map((play) => {
              const Icon = play.icon;
              return (
                <article
                  key={play.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/80"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
                    <p className="text-sm text-muted-foreground">{play.description}</p>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {play.impact}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

