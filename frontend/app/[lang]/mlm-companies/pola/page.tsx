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
  ArrowUpRight,
  Building2,
  Diamond,
  Droplets,
  Flower2,
  Gem,
  Globe2,
  Leaf,
  Palette,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";
import { ChartLineUp, Handshake, Sparkle, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type SignatureExperience = {
  title: string;
  description: string;
  emphasis: string;
  icon: IconType;
};

type ConsultantProgram = {
  title: string;
  summary: string;
  proof: string;
  icon: IconType;
};

type PlatformCapability = {
  title: string;
  description: string;
  payoff: string;
  icon: IconType;
};

const POLA_METRICS: Metric[] = [
  {
    label: "Revenue",
    value: "$1.24B+",
    detail: "Heritage Japanese cosmetics business supporting multi-generational beauty rituals.",
    icon: Diamond
  },
  {
    label: "Founded",
    value: "1929 · Shinobu Suzuki",
    detail: "Nearly a century of research shaping prestige skincare and holistic wellness.",
    icon: Building2
  },
  {
    label: "Consultant community",
    value: "1,326+ employees",
    detail: "Beauty directors and advisors delivering concierge skincare journeys.",
    icon: Users
  },
  {
    label: "Primary market",
    value: "Japan & APAC",
    detail: "Digitally expanding while honouring Pola’s salon-grade service culture.",
    icon: Globe2
  },
  {
    label: "Product portfolio",
    value: "Skincare · Personal care · Nutrition",
    detail: "Award-winning B.A, Wrinkle Shot, and inner beauty supplements.",
    icon: Flower2
  },
  {
    label: "Sales motion",
    value: "Personal consultations",
    detail: "Skin diagnostics, tailored regimens, and high-touch follow up experiences.",
    icon: Handshake
  }
];

const POLA_SIGNATURE_EXPERIENCES: SignatureExperience[] = [
  {
    title: "Artistry backed by science",
    description:
      "Pola’s laboratories pioneer cutting-edge active ingredients, blending Japanese botanicals with patented delivery systems.",
    emphasis: "Consultants translate research into rituals, giving clients confidence in every recommendation.",
    icon: Sparkles
  },
  {
    title: "Skin stories made personal",
    description:
      "Heritage skin analysis methods, digital profiling, and atelier experiences make every routine bespoke.",
    emphasis: "Beauty directors curate regimens that respond to climate, lifestyle, and evolving goals.",
    icon: Palette
  },
  {
    title: "Holistic glow-up philosophy",
    description:
      "Skincare, personal care, and nutrition programmes are choreographed to support inner and outer radiance.",
    emphasis: "Seasonal journeys keep clients engaged while reinforcing long-term loyalty and referrals.",
    icon: Leaf
  }
];

const POLA_CONSULTANT_PROGRAMMES: ConsultantProgram[] = [
  {
    title: "Salon-grade onboarding",
    summary:
      "Immersive academies blend beauty science, consultative selling, and brand storytelling in hybrid formats.",
    proof: "Graduates report faster client acquisition thanks to guided consult scripts and service playbooks.",
    icon: UsersThree
  },
  {
    title: "Relationship-led retention",
    summary:
      "Signature Pola Beauty Directors nurture clients through events, self-care journals, and subscription curation.",
    proof: "Membership data shows higher reorder value when advisors automate follow-ups and milestone gifting.",
    icon: Handshake
  },
  {
    title: "Recognition for artisanship",
    summary:
      "Progressive rewards celebrate education milestones, innovation in client care, and community leadership.",
    proof: "Data-backed recognition frameworks keep rising leaders engaged while protecting brand consistency.",
    icon: Sparkle
  }
];

const CLOUD_POLA_CAPABILITIES: PlatformCapability[] = [
  {
    title: "AI-powered skin intelligence",
    description:
      "Blend consultation data, diagnostic imagery, and purchase history to generate regimen blueprints instantly.",
    payoff: "Deliver couture recommendations at scale while maintaining the intimacy Pola clients expect.",
    icon: ChartLineUp
  },
  {
    title: "Hyper-personal nurture journeys",
    description:
      "Automate cultural moments, seasonal check-ins, and ingredient education across LINE, email, and studio touchpoints.",
    payoff: "Keep high-value clients engaged with thoughtful, compliant messaging that feels handcrafted.",
    icon: Droplets
  },
  {
    title: "Operational excellence toolkit",
    description:
      "Unify inventory, appointment scheduling, subscription management, and performance dashboards in one hub.",
    payoff: "Free beauty directors to focus on artistry while leaders gain visibility into every boutique community.",
    icon: Gem
  },
  {
    title: "Cross-border compliance guardrails",
    description:
      "Localise compensation plans, tax documentation, and product claims as Pola scales throughout APAC and beyond.",
    payoff: "Expand gracefully into new markets with smart workflows that adapt to regulatory nuance.",
    icon: ShieldCheck
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Pola MLM Company Spotlight & Luxury Skincare Enablement";
  const description =
    "Discover how Pola combines Japanese skincare heritage with relationship-first selling—and how Cloud MLM Software elevates diagnostics, consultant excellence, and global expansion.";
  const keywords = [
    "Pola MLM review",
    "Pola beauty consultant program",
    "Japanese skincare direct sales",
    "Cloud MLM Software for cosmetics brands",
    "AI skin analysis platform"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/pola", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PolaPageProps = {
  params: { lang: SupportedLocale };
};

export default function PolaPage({ params }: PolaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-[#fff7fb] via-[#f3f5ff] to-[#eefcff] py-20 dark:border-border/40 dark:from-slate-950/70 dark:via-slate-950 dark:to-indigo-950/60">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_12%_22%,rgba(236,72,153,0.18),transparent_55%),radial-gradient(circle_at_80%_28%,rgba(14,116,144,0.18),transparent_60%),radial-gradient(circle_at_45%_88%,rgba(99,102,241,0.2),transparent_65%)]"
          aria-hidden
        />
        <div className="container relative z-10 grid gap-16 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.55fr)]">
          <div className="space-y-10">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary/70 dark:text-primary/60">
              <span className="rounded-full border border-primary/30 bg-white/80 px-4 py-1 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-950/60">
                Japanese luxury skincare
              </span>
              <span className="rounded-full border border-rose-200/50 bg-rose-50/80 px-4 py-1 text-rose-500 shadow-sm backdrop-blur dark:border-rose-400/30 dark:bg-rose-900/40 dark:text-rose-200">
                Personalised consultations
              </span>
              <span className="rounded-full border border-indigo-200/50 bg-indigo-50/80 px-4 py-1 text-indigo-500 shadow-sm backdrop-blur dark:border-indigo-300/40 dark:bg-indigo-900/40 dark:text-indigo-200">
                90+ years of innovation
              </span>
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Pola: bespoke beauty artistry, precision science, and community-led wellness journeys.
              </h1>
              <p className="text-base text-muted-foreground">
                Pola’s consultants elevate every skincare ritual through diagnostics, craftsmanship, and generational trust. Together they
                deliver luminous routines backed by award-winning research—and they partner with Cloud MLM Software to keep each relationship
                personal even as the brand scales worldwide.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Design your Pola-ready platform
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={pricingHref}>
                  Review investment tiers
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="hover:bg-primary/10 dark:hover:bg-primary/20">
                <Link href={demoHref}>
                  Experience an AI-led demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute left-6 top-8 -z-10 h-[85%] w-[90%] rounded-[3rem] border border-primary/30 bg-white/85 shadow-[0_48px_120px_-70px_rgba(56,189,248,0.45)] backdrop-blur dark:border-white/10 dark:bg-slate-950/80" aria-hidden />
            <div className="relative grid gap-6 rounded-[2.8rem] p-8">
              {POLA_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex flex-col gap-3 rounded-3xl border border-transparent bg-gradient-to-r from-white/90 via-white/70 to-white/40 p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg dark:from-slate-900/80 dark:via-slate-900/60 dark:to-slate-900/30"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/15 dark:text-primary-foreground">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">{metric.label}</h2>
                    </div>
                    <p className="text-xl font-semibold text-foreground">{metric.value}</p>
                    <p className="text-sm text-muted-foreground">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container grid gap-10 rounded-[3rem] border border-border/60 bg-gradient-to-br from-background to-primary/5 p-10 shadow-lg shadow-primary/10 dark:border-border/40 dark:from-slate-950 dark:to-slate-950/70">
        <div className="space-y-4 md:max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary dark:border-primary/40 dark:bg-primary/15">
            Signature experiences
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Heritage craft meets tomorrow’s skincare expectations.
          </h2>
          <p className="text-sm text-muted-foreground">
            Pola’s ateliers and advisors deliver immersive, personalised rituals. Our platform extends that intimacy with data-informed actions,
            ensuring every interaction feels thoughtful, relevant, and distinctly Pola.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {POLA_SIGNATURE_EXPERIENCES.map((experience) => {
            const Icon = experience.icon;
            return (
              <article
                key={experience.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-primary/20 bg-background/95 p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl dark:border-primary/30 dark:bg-slate-950/85"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{experience.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{experience.description}</p>
                <p className="text-xs font-medium text-primary/80 dark:text-primary/70">{experience.emphasis}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-background via-background to-rose-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-rose-900/40">
        <div
          className="absolute inset-x-0 top-1/3 h-64 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.18),transparent_65%)] blur-3xl dark:opacity-70"
          aria-hidden
        />
        <div className="container relative z-10 grid gap-10 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-200/60 bg-rose-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-rose-500 dark:border-rose-400/40 dark:bg-rose-900/40 dark:text-rose-200">
              Consultant excellence
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Empower every Pola Beauty Director with data-rich, human-centred enablement.
            </h2>
            <p className="text-sm text-muted-foreground">
              Strengthen one-on-one relationships, upscale atelier experiences, and honour the artistry that keeps Pola revered across Japan and
              emerging APAC markets.
            </p>
          </div>
          <div className="rounded-[2.5rem] border border-border/50 bg-white/85 p-8 shadow-lg shadow-rose-200/40 backdrop-blur dark:border-border/40 dark:bg-slate-950/85 dark:shadow-rose-900/40">
            <ul className="space-y-6">
              {POLA_CONSULTANT_PROGRAMMES.map((program) => {
                const Icon = program.icon;
                return (
                  <li key={program.title} className="flex gap-4">
                    <span className="mt-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-rose-100 text-rose-500 dark:bg-rose-900/60 dark:text-rose-200">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{program.title}</h3>
                      <p className="text-sm text-muted-foreground">{program.summary}</p>
                      <p className="rounded-2xl border border-rose-200/60 bg-rose-50/70 p-4 text-xs text-rose-600 dark:border-rose-400/40 dark:bg-rose-900/40 dark:text-rose-200">
                        {program.proof}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary dark:border-primary/40 dark:bg-primary/15">
            Cloud MLM Software advantage
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Build a digitally fluent, artisan-first ecosystem for Pola’s next century.
          </h2>
          <p className="text-sm text-muted-foreground">
            Cloud MLM Software extends Pola’s legacy with precision tooling, automated compliance, and AI-assisted service journeys—ensuring
            every global expansion feels as meticulous as a flagship atelier visit.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {CLOUD_POLA_CAPABILITIES.map((capability) => {
            const Icon = capability.icon;
            return (
              <article
                key={capability.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/50 bg-background/95 p-6 shadow-md transition hover:border-primary/50 hover:shadow-xl dark:border-border/40 dark:bg-slate-950/85"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{capability.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
                <p className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-xs text-primary dark:border-primary/30 dark:bg-primary/10">
                  {capability.payoff}
                </p>
              </article>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href={modulesHref}>
              Explore cosmetics-ready modules
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={contactHref}>
              Architect your Pola rollout
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

