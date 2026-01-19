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
  Activity,
  ArrowRight,
  ArrowUpRight,
  Atom,
  BarChart3,
  Building2,
  FlaskConical,
  Globe2,
  HeartPulse,
  Lightbulb,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";
import { Cpu, Handshake, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Snapshot = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Innovation = {
  title: string;
  description: string;
  proof: string;
  icon: IconType;
};

type Ecosystem = {
  title: string;
  insight: string;
  evidence: string;
  icon: IconType;
};

type PlatformCapability = {
  title: string;
  description: string;
  action: string;
  icon: IconType;
};

const NU_SKIN_SNAPSHOT: Snapshot[] = [
  {
    label: "Global revenue",
    value: "$2.68B",
    detail: "Ranked #7 on the DSN Global 100 with diversified beauty and wellness lines.",
    icon: BarChart3
  },
  {
    label: "Founded",
    value: "1984",
    detail: "Four decades pioneering ageLOC science and people-first entrepreneurship.",
    icon: Lightbulb
  },
  {
    label: "Headquarters",
    value: "Provo, Utah",
    detail: "Global headquarters orchestrating research, manufacturing, and charitable impact.",
    icon: MapPin
  },
  {
    label: "Primary market",
    value: "China",
    detail: "Market-leading presence with digital-first storytelling and compliance rigor.",
    icon: Globe2
  },
  {
    label: "Team",
    value: "4,600 employees",
    detail: "Scientists, technologists, and field enablement teams across 50+ markets.",
    icon: Users
  },
  {
    label: "Compensation",
    value: "Multi-level innovation",
    detail: "Customer-centric plan balancing retail, subscription, and leadership incentives.",
    icon: ShieldCheck
  },
  {
    label: "Product focus",
    value: "Beauty · Wellness · Devices",
    detail: "Anti-aging skincare, nutrition, and personal care infused with patented technology.",
    icon: Sparkles
  },
  {
    label: "Sales method",
    value: "Person-to-person + social commerce",
    detail: "Brand Affiliates leverage digital communities and immersive events worldwide.",
    icon: Handshake
  }
];

const INNOVATION_PILLARS: Innovation[] = [
  {
    title: "ageLOC® science",
    description: "Genetic expression research targets the sources of aging rather than surface symptoms.",
    proof: "Proprietary ageLOC ingredients appear across hero devices, serums, and nutrition stacks.",
    icon: Atom
  },
  {
    title: "Beauty and wellness devices",
    description: "Handheld systems integrate IoT features and personalised programs for home treatments.",
    proof: "LumiSpa and ageLOC Boost deliver spa-grade experiences with measurable outcomes.",
    icon: Activity
  },
  {
    title: "Force for Good initiatives",
    description: "Corporate philanthropy and sustainability commitments elevate brand reputation.",
    proof: "Nu Skin donates millions through the Nourish the Children program and eco commitments.",
    icon: HeartPulse
  }
];

const ECOSYSTEM_STACK: Ecosystem[] = [
  {
    title: "Science-backed products",
    insight: "R&D teams translate human genomics into daily routines that customers can trust.",
    evidence: "Over 75 in-house scientists and global innovation centres support launches.",
    icon: FlaskConical
  },
  {
    title: "Digital social commerce",
    insight: "Brand Affiliates build omnichannel communities across live streaming, apps, and events.",
    evidence: "Region-specific platforms nurture compliance while preserving authenticity.",
    icon: Cpu
  },
  {
    title: "Purpose-driven culture",
    insight: "Service projects and sustainable sourcing resonate with modern consumers.",
    evidence: "Force for Good awards and impact reports reinforce the mission-led story.",
    icon: Building2
  }
];

const CLOUD_ENABLERS: PlatformCapability[] = [
  {
    title: "AI-personalised customer journeys",
    description: "Mirror Nu Skin’s consultative experience with dynamic product pairings and regimen coaching.",
    action: "Leverage predictive insights to recommend the next best device, serum, or supplement.",
    icon: Sparkles
  },
  {
    title: "Real-time compensation visibility",
    description: "Model multi-leg requirements, subs IDs, and social commerce bonuses without spreadsheets.",
    action: "Provide leaders and affiliates with dashboards that build trust while ensuring compliance.",
    icon: ShieldCheck
  },
  {
    title: "Global compliance guardrails",
    description: "Automate region-specific policies, disclosures, and data residency controls.",
    action: "Launch new markets as confidently as Nu Skin’s China playbook.",
    icon: Globe2
  },
  {
    title: "Impact and sustainability reporting",
    description: "Track philanthropic hours, donations, and ESG targets in the same platform.",
    action: "Showcase purpose-led metrics alongside sales momentum to attract mission-driven talent.",
    icon: HeartPulse
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Nu Skin MLM Company Insights";
  const description =
    "Unpack Nu Skin’s $2.68B powerhouse—ageLOC innovation, social commerce, and global stewardship—and explore how Cloud MLM Software scales similar vision-driven enterprises.";
  const keywords = [
    "Nu Skin MLM review",
    "Nu Skin compensation plan",
    "Nu Skin ageLOC innovation",
    "Cloud MLM Software for beauty brands",
    "AI MLM platform for Nu Skin affiliates"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/nu-skin", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type NuSkinPageProps = {
  params: { lang: SupportedLocale };
};

export default function NuSkinPage({ params }: NuSkinPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-primary/30 bg-gradient-to-br from-[#000f24] via-[#0b1d3d] to-[#0f2f46] py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(59,130,246,0.28),transparent_55%),radial-gradient(circle_at_78%_32%,rgba(34,211,238,0.25),transparent_60%),radial-gradient(circle_at_52%_82%,rgba(16,185,129,0.2),transparent_65%)]" aria-hidden />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,0.55fr)]">
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
              <span className="rounded-full border border-white/25 bg-white/10 px-4 py-1">Rank #7 · Global 100</span>
              <span className="rounded-full border border-white/25 bg-white/10 px-4 py-1">ageLOC innovation</span>
            </div>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Nu Skin: science-backed beauty, social commerce mastery, and purpose-driven leadership.
              </h1>
              <p className="text-base text-slate-200/80">
                From Provo to 50+ markets, Nu Skin empowers Brand Affiliates with anti-aging technology, lifestyle devices, and a culture that
                celebrates impact. Their success marries cutting-edge R&D with compliant social selling playbooks.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={contactHref}>
                  Plan your growth with us
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                <Link href={pricingHref}>
                  View platform pricing
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-cyan-200 hover:bg-cyan-300/10">
                <Link href={demoHref}>
                  Request AI-enabled demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute inset-0 -z-10 rounded-[36px] border border-white/20 bg-white/5 shadow-[0_40px_80px_-50px_rgba(14,165,233,0.6)] backdrop-blur" aria-hidden />
            <div className="relative grid gap-6 rounded-[32px] border border-white/20 bg-white/10 p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">Company snapshot</span>
              <div className="grid gap-4 sm:grid-cols-2">
                {NU_SKIN_SNAPSHOT.slice(0, 4).map((item) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.label} className="flex flex-col gap-3 rounded-3xl border border-white/15 bg-black/30 p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-wide text-cyan-100/80">{item.label}</span>
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-100">
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                      </div>
                      <p className="text-2xl font-semibold text-white">{item.value}</p>
                      <p className="text-xs text-slate-200/70">{item.detail}</p>
                    </article>
                  );
                })}
              </div>
              <div className="grid gap-4 rounded-3xl border border-white/15 bg-black/20 p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-white/80">Operational DNA</h2>
                {NU_SKIN_SNAPSHOT.slice(4).map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-100">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">{item.value}</p>
                        <p className="text-xs text-slate-200/70">{item.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Innovation pillars powering Nu Skin</h2>
          <p className="text-sm text-muted-foreground">
            Patented science and purpose-led initiatives underpin the brand’s massive global footprint. Each breakthrough strengthens trust with
            customers and Brand Affiliates alike.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {INNOVATION_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background p-6 transition hover:border-primary/40 hover:shadow-lg dark:border-primary/30 dark:from-primary/10 dark:via-slate-950 dark:to-slate-950"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/15 dark:text-primary-foreground">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
                <p className="rounded-2xl border border-primary/20 bg-primary/10 p-4 text-xs text-primary dark:border-primary/30 dark:bg-primary/15 dark:text-primary-foreground">
                  {pillar.proof}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-primary/5 via-background to-sky-50 py-20 dark:border-border/40 dark:from-primary/10 dark:via-slate-950 dark:to-slate-950/60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_72%_72%,rgba(16,185,129,0.18),transparent_55%)]" aria-hidden />
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ecosystem advantages that sustain momentum</h2>
            <p className="text-sm text-muted-foreground">
              From product labs to social commerce infrastructure, Nu Skin’s ecosystem demonstrates what’s possible when innovation and purpose
              operate in sync.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {ECOSYSTEM_STACK.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/95 p-6 shadow-sm transition hover:border-primary/40 hover:shadow-md dark:border-border/40 dark:bg-slate-950/80"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/15 dark:text-primary-foreground">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.insight}</p>
                  <p className="text-xs font-medium text-primary/80 dark:text-primary/70">{item.evidence}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Cloud MLM Software: your partner in scaling Nu Skin-like excellence</h2>
          <p className="text-sm text-muted-foreground">
            Adopt an AI-ready platform crafted for visionary MLM enterprises. Cloud MLM Software keeps your brand compliant, data-driven, and
            human-centred—no matter how ambitious your roadmap becomes.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {CLOUD_ENABLERS.map((capability) => {
            const Icon = capability.icon;
            return (
              <article
                key={capability.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/50 bg-background/95 p-6 shadow-sm transition hover:border-primary/50 hover:shadow-md dark:border-border/40 dark:bg-slate-950/80"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{capability.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
                <p className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-xs text-primary dark:border-primary/30 dark:bg-primary/10">
                  {capability.action}
                </p>
              </article>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href={modulesHref}>
              Explore intelligent modules
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={contactHref}>
              Architect your impact plan
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

