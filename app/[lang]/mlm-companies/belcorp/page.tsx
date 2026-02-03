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
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  FlaskConical,
  Gavel,
  Globe2,
  GraduationCap,
  Lightbulb,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import {
  ArrowBendUpRight,
  ChartLineUp,
  GlobeHemisphereWest,
  Handshake,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type CompanyFact = {
  label: string;
  value: string;
  detail: string;
};

type VisionPillar = {
  title: string;
  description: string;
  proof: string;
  icon: IconType;
};

type TimelineEvent = {
  era: string;
  headline: string;
  detail: string;
};

type CompensationElement = {
  title: string;
  description: string;
  highlight: string;
  icon: IconType;
};

type SuccessStory = {
  title: string;
  description: string;
  metric: string;
  proof: string;
  icon: IconType;
};

type Innovation = {
  title: string;
  description: string;
  proof: string;
  icon: IconType;
};

type ReputationSignal = {
  title: string;
  detail: string;
  evidence: string;
  icon: IconType;
};

type Critique = {
  title: string;
  description: string;
  mitigation: string;
  source: string;
  icon: IconType;
};

type TrustScore = {
  title: string;
  score: string;
  insight: string;
  methodology: string;
};

const PRIMARY_TRUST_SCORE = {
  score: 64,
  label: "Overall trust score",
  summary: "Balances regional compliance history, women-centered programmes, and ongoing digital modernisation signals."
};

type NewsItem = {
  title: string;
  source: string;
  date: string;
  summary: string;
  url: string;
};

type CloudPlay = {
  title: string;
  description: string;
  icon: IconType;
};

const COMPANY_FACTS: CompanyFact[] = [
  {
    label: "Revenue",
    value: "$1.0B",
    detail: "2021 global revenue reported in DSN’s Global 100 list, placing Belcorp 18th worldwide (Direct Selling News — Global 100 Lists)."
  },
  {
    label: "Founded",
    value: "1988",
    detail: "Eduardo Belmont launched Belcorp after parting ways with his brother to scale the L’BEL, Ésika, and Cyzone brands (Gestión — De socios a competidores directos, Feb 2024)."
  },
  {
    label: "Footprint",
    value: "14 countries",
    detail: "Belcorp delivers beauty experiences via direct sales, online, and retail stores across Latin America (Belcorp corporate site — We promote beauty to achieve personal fulfillment)."
  },
  {
    label: "Women empowered",
    value: "12k+ in 2024",
    detail: "The Mujeres Sin Límites Digital programme has coached over 12,000 entrepreneurs across seven countries with university partners (Fundación Belcorp — Mujeres Sin Límites impact report 2024)."
  }
];

const VISION_PILLARS: VisionPillar[] = [
  {
    title: "Purpose-driven beauty",
    description:
      "Belcorp’s mantra—‘We promote beauty to achieve personal fulfillment’—keeps product storytelling centred on identity, confidence, and social mobility.",
    proof: "Belcorp corporate site — We promote beauty to achieve personal fulfillment.",
    icon: Lightbulb
  },
  {
    title: "Entrepreneur equity",
    description:
      "Women without Limits cohorts blend leadership training, soft skills, and business management so consultants grow under their own terms.",
    proof: "Fundación Belcorp — Mujeres Sin Límites Digital impact report 2024.",
    icon: UsersThree
  },
  {
    title: "Omnichannel agility",
    description:
      "Direct sales, digital catalogues, Mi Tienda Online, and owned retail stores work together to meet clients wherever they shop.",
    proof: "Belcorp corporate site — Our business model spans direct, online, and physical channels.",
    icon: GlobeHemisphereWest
  },
  {
    title: "Governance as brand value",
    description:
      "Published codes on ethics, anti-corruption, and supplier conduct keep the value proposition tied to trust—not just trend-driven launches.",
    proof: "Belcorp corporate site — Code of ethics, anti-corruption, and child labour policies.",
    icon: ShieldCheck
  }
];

const STORY_ARC: TimelineEvent[] = [
  {
    era: "1988",
    headline: "Belcorp is born in Lima",
    detail:
      "Eduardo Belmont founded Belcorp after parting ways with his brother, building a new house for L’BEL, Ésika, and Cyzone (Gestión — De socios a competidores directos)."
  },
  {
    era: "2003",
    headline: "Ebel Paris ruling sharpens compliance",
    detail:
      "Yanbal’s successful complaint in Colombia over the Ebel Paris name pushed Belcorp to double down on truthful origin claims and legal vetting (Gestión — De socios a competidores directos)."
  },
  {
    era: "2019",
    headline: "Global scale validated",
    detail:
      "Belcorp landed #12 on DSN’s Global 100 with $1.17B in 2019 revenue, underscoring its Latin American reach (Direct Selling News — Global 100 Lists)."
  },
  {
    era: "2021",
    headline: "Data mesh overhaul reduces incidents",
    detail:
      "Belcorp’s AWS engineering sprint cut Spark incidents by up to 75% and trimmed EMR costs by ~40%, energising analytics for the field (AWS Big Data Blog — How Belcorp decreased cost)."
  },
  {
    era: "2024–2025",
    headline: "AI support and women’s programmes scale",
    detail:
      "Jessica, the WhatsApp AI assistant, resolved more than 2M queries with 75% self-service while Mujeres Sin Límites added rural pilots in Colombia and plans for Peru and Mexico (Direct Selling News — Belcorp Debuts AI Chatbot Jessica; Fundación Belcorp — Mujeres Sin Límites)."
  }
];

const COMPENSATION_ELEMENTS: CompensationElement[] = [
  {
    title: "Catalogue retail earnings",
    description:
      "Consultants buy at wholesale and sell with flexible pricing, keeping 20–40% gross margin when they work the printed campaigns.",
    highlight: "UneteABelcorp.com details catalogue discounts between 20% and 40% for every order.",
    icon: Handshake
  },
  {
    title: "Mi Tienda Online commissions",
    description:
      "Digital storefronts let consultants fulfil nationwide orders while Belcorp handles logistics, paying 20% commission on each online sale.",
    highlight: "Mi Tienda Online promises 20% commission without leaving home (UneteABelcorp.com — Cómo vender).",
    icon: Globe2
  },
  {
    title: "Kickstart kits & onboarding offers",
    description:
      "Every new consultant accesses a subsidised kit plus a Start Programme that bundles free and discounted hero products to accelerate repeat orders.",
    highlight: "Programa de Inicio delivers exclusive offers and free products for early cycles (UneteABelcorp.com — Beneficios).",
    icon: ArrowBendUpRight
  },
  {
    title: "Progressive bonuses & recognition",
    description:
      "Sales bonuses, rank incentives, and community recognition (Diamante, Gran Brillante, etc.) reward consistent volume and leadership duplication.",
    highlight: "Field testimonials describe bonus ladders and rank celebrations, reinforcing culture beyond retail margins (UneteABelcorp.com — Comunidad).",
    icon: ChartLineUp
  }
];

const SUCCESS_STORIES: SuccessStory[] = [
  {
    title: "Mujeres Sin Límites momentum",
    description:
      "Two-phase digital cohorts, co-created with universities, boosted confidence, leadership, and business skills for thousands of consultants in 2024.",
    metric: "12k+ women trained across 7 countries",
    proof: "Fundación Belcorp — Mujeres Sin Límites Digital impact report 2024",
    icon: GraduationCap
  },
  {
    title: "Consultant resilience showcases",
    description:
      "Stories like Korina in Mexico—17 years balancing motherhood and business—illustrate attainable, long-term income when community systems are used.",
    metric: "17 years sustaining a family business",
    proof: "UneteABelcorp.com — Testimonio de Korina (México)",
    icon: BadgeCheck
  },
  {
    title: "Specialty retail complements the field",
    description:
      "Belcorp now operates 42 specialty beauty stores in Peru, supporting consultants with experiential spaces amid a flood of competing imports.",
    metric: "42 Belcorp-owned stores in Peru (2025)",
    proof: "Gestión — Llegaron 350 marcas de belleza al Perú (Sept 2025)",
    icon: Globe2
  }
];

const INNOVATION_SIGNALS: Innovation[] = [
  {
    title: "Jessica AI concierge",
    description:
      "WhatsApp-based conversational AI delivers product guidance, inventory checks, and campaign updates with 75% case deflection.",
    proof: "Direct Selling News — Belcorp Debuts AI Chatbot Jessica (March 2024)",
    icon: Sparkles
  },
  {
    title: "Data mesh cost discipline",
    description:
      "EMR managed scaling, Spark tuning, and monitoring layers cut incidents by 75% and lowered billing up to 40% in 2021.",
    proof: "AWS Big Data Blog — How Belcorp decreased cost and improved reliability (Dec 2021)",
    icon: FlaskConical
  },
  {
    title: "Cruelty-free testing playbook",
    description:
      "Alternative testing methodologies are replacing animal studies, reinforcing clean beauty claims across Ésika, Cyzone, and L’BEL.",
    proof: "Gestión — Día Internacional de la Belleza: Belcorp y su metodología de testeo (Sept 2023)",
    icon: Globe2
  }
];

const REPUTATION_SIGNALS: ReputationSignal[] = [
  {
    title: "Ethics & risk transparency",
    detail:
      "Belcorp publishes updated codes on ethics, anti-corruption, sustainability, and child labour diligence for all markets.",
    evidence: "Belcorp.biz — Code of Ethics 2025, anti-corruption and child labour due diligence documents.",
    icon: ShieldCheck
  },
  {
    title: "Regional DSA alignment",
    detail:
      "Public links to ACOVEDI, CAPEVEDI, ANDI, and AEVD codes show alignment with Latin American direct selling standards.",
    evidence: "Belcorp.biz — Regional association codes referenced in governance footer.",
    icon: CheckCircle2
  },
  {
    title: "Safe-portal escalation channels",
    detail:
      "Consumer complaints, supplier portals, and Libros de Reclamaciones are centralised through the Belcorp Safe Portal for oversight.",
    evidence: "Belcorp.biz — Safe portal, Libro de Reclamaciones, and ARCO rights resources.",
    icon: Gavel
  }
];

const CRITICAL_WATCHPOINTS: Critique[] = [
  {
    title: "Brand-origin scrutiny",
    description:
      "The 2003 Ebel Paris dispute proved how quickly competitors can challenge brand positioning when origin claims are ambiguous.",
    mitigation: "Bake legal reviews into every naming/packaging sprint and trace claims back to documented sourcing.",
    source: "Gestión — De socios a competidores directos",
    icon: Gavel
  },
  {
    title: "Crowded beauty aisles",
    description:
      "Peru alone welcomed 350 new beauty brands in 2025, leaving Belcorp with 42 specialty stores battling larger retail budgets.",
    mitigation: "Arm consultants with hyperlocal data, exclusive bundles, and digital storytelling to defend market share.",
    source: "Gestión — Llegaron 350 marcas de belleza al Perú",
    icon: AlertTriangle
  },
  {
    title: "Data-platform dependency",
    description:
      "Before the 2021 AWS overhaul, Belcorp wrestled with incident spikes and runaway EMR costs—proof the analytics stack needs constant tuning.",
    mitigation: "Keep performance observability, rollback routines, and cost dashboards active alongside AI deployments.",
    source: "AWS Big Data Blog — How Belcorp decreased cost and improved reliability",
    icon: ShieldCheck
  }
];

const TRUST_SCORES: TrustScore[] = [
  {
    title: "Governance maturity",
    score: "66/100",
    insight:
      "Accessible codes of ethics, anti-corruption, and child labour diligence boost confidence, though past naming disputes prove vigilance is mandatory.",
    methodology: "Weighted on published policies, dispute history, and alignment with regional DSA standards."
  },
  {
    title: "Field sentiment",
    score: "62/100",
    insight:
      "Empowerment programmes and consultant success stories build loyalty, yet a crowded beauty market keeps retention pressure high.",
    methodology: "Blend of programme reach, testimonial depth, and market-competition indicators."
  },
  {
    title: "Digital adaptability",
    score: "64/100",
    insight:
      "AI concierge and AWS-driven analytics cuts show tech ambition, but sustaining gains requires ongoing monitoring of incidents and cost baselines.",
    methodology: "Assessed via digital innovation cadence, incident history, and investment transparency."
  }
];

const NEWS_HEADLINES: NewsItem[] = [
  {
    title: "Belcorp debuts AI chatbot Jessica",
    source: "Direct Selling News",
    date: "March 12, 2024",
    summary:
      "Conversational AI on WhatsApp resolved 75% of two million inquiries and is scaling to additional departments.",
    url: "https://www.directsellingnews.com/2024/03/12/belcorp-debuts-ai-chatbot-jessica/"
  },
  {
    title: "Belcorp pushes cruelty-free testing methods",
    source: "Gestión",
    date: "September 12, 2023",
    summary:
      "Corporate sustainability leaders highlight the shift from animal testing to innovative lab methodologies across brands.",
    url: "https://gestion.pe/tendencias/dia-internacional-de-la-belleza-belcorp-y-su-metodologia-de-testeo-para-marcas-de-cosmeticos-esika-cyzone-industria-cosmetica-noticia/"
  },
  {
    title: "Peru’s beauty market floods with 350 new brands",
    source: "Gestión",
    date: "September 25, 2025",
    summary:
      "Industry analysts note specialty retail growth, citing Belcorp’s 42 stores amid fierce competition from Asian entrants.",
    url: "https://gestion.pe/economia/empresas/llegaron-350-marcas-de-belleza-al-peru-corea-india-o-china-quien-lleva-la-delantera-noticia/"
  }
];

const CLOUD_ROADMAP: CloudPlay[] = [
  {
    title: "Regulatory launchpad",
    description:
      "Localise codes of ethics, child-labour diligence, and complaint workflows so every new market mirrors Belcorp’s governance footprint.",
    icon: ShieldCheck
  },
  {
    title: "Comp plan digital twin",
    description:
      "Model catalogue margins, online commissions, and bonus ladders to keep promises aligned with actual sell-through data.",
    icon: ChartLineUp
  },
  {
    title: "AI ops enablement",
    description:
      "Prototype WhatsApp bots, escalation logic, and knowledge bases before deploying Jessica-style support to your own field.",
    icon: Sparkles
  },
  {
    title: "Impact intelligence",
    description:
      "Consolidate Mujeres Sin Límites-style training metrics, ESG pledges, and retail benchmarks into executive dashboards.",
    icon: GlobeHemisphereWest
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Belcorp Trust & Compensation Insights";
  const description =
    "Analyse Belcorp’s purpose-led brand story, compensation levers, digital innovation, critiques, and trust score outlook to inform your next beauty expansion.";
  const keywords = [
    "Belcorp trust insights",
    "Belcorp MLM analysis",
    "Belcorp compensation plan",
    "Cloud MLM Software trust advisory",
    "Latin America cosmetic direct selling review"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/belcorp", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type BelcorpPageProps = {
  params: { lang: SupportedLocale };
};

export default function BelcorpPage({ params }: BelcorpPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const trustScoreHref = "#trust-score";
  const timelineHref = "#timeline";
  const trustSnapshotHref = "#trust-insights";
  const trustFill = `${PRIMARY_TRUST_SCORE.score}%`;

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-primary/40 bg-gradient-to-br from-[#5a2d8a]/15 via-white to-[#f06292]/12 py-20 dark:border-primary/30 dark:from-slate-900 dark:via-slate-950 dark:to-fuchsia-950/35">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(90,45,138,0.35),transparent_55%),radial-gradient(circle_at_82%_28%,rgba(240,98,146,0.28),transparent_60%),radial-gradient(circle_at_52%_84%,rgba(90,45,138,0.22),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.75fr)]">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-4 py-1 text-sm font-semibold text-slate-900 backdrop-blur dark:border-white/20 dark:bg-white/10 dark:text-white">
              Purpose: Beauty that powers personal fulfillment
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Inside Belcorp — trust & growth insights for Latin beauty entrepreneurs.
              </h1>
              <p className="text-base text-slate-700 dark:text-slate-200/80">
                Assess how Belcorp’s purpose-led storytelling, omnichannel field model, and digital transformation agenda shape due diligence. Review company facts, history, payout levers, successes, risk factors, and current headlines—then translate the lessons into your own launch blueprint.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={trustScoreHref}>
                  Trust score outlook
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={timelineHref}>
                  Explore milestones
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/20 dark:text-foreground">
                <Link href={trustSnapshotHref}>
                  Review trust signals
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="underline-offset-4">
                <Link href={contactHref}>
                  Talk to our specialists
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="relative grid gap-6 rounded-3xl border border-white/40 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-white/15 dark:bg-slate-950/70">
            <div className="absolute -right-10 top-14 h-28 w-28 rounded-full bg-[#5a2d8a]/20 blur-3xl" aria-hidden />
            <div className="absolute bottom-0 left-8 h-20 w-20 translate-y-1/2 rounded-full bg-[#f06292]/30 blur-3xl dark:bg-[#f06292]/40" aria-hidden />
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col justify-between gap-5 rounded-3xl border border-primary/20 bg-gradient-to-br from-white via-rose-50 to-white p-6 shadow-sm dark:border-primary/30 dark:from-slate-950 dark:via-primary/10 dark:to-slate-950">
                <div className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">Trust score outlook</h2>
                  <p className="text-sm text-muted-foreground">Aggregated view of compliance posture, sentiment stability, and opportunity realism.</p>
                </div>
                <div className="relative mx-auto flex h-32 w-32 items-center justify-center">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `conic-gradient(#0ea5e9 ${trustFill}, rgba(148,163,184,0.2) ${trustFill})`
                    }}
                    aria-hidden
                  />
                  <div className="absolute inset-[10px] rounded-full bg-white shadow-[inset_0_10px_25px_-20px_rgba(15,23,42,0.45)] dark:bg-slate-950" aria-hidden />
                  <div className="absolute inset-0 rounded-full blur-xl bg-sky-200/30 dark:bg-sky-900/30" aria-hidden />
                  <div className="relative text-center">
                    <span className="text-3xl font-semibold text-foreground">{PRIMARY_TRUST_SCORE.score}</span>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">/100</p>
                  </div>
                </div>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <p>{PRIMARY_TRUST_SCORE.label}</p>
                  <p>{PRIMARY_TRUST_SCORE.summary}</p>
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-foreground">Strategic snapshot</h2>
                <p className="text-sm text-muted-foreground">
                  Anchor diligence on Belcorp’s scale, regional footprint, and empowerment commitments before replicating the playbook.
                </p>
                <div className="grid gap-4">
                  {COMPANY_FACTS.slice(0, 2).map((fact) => (
                    <article
                      key={fact.label}
                      className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm dark:border-border/40 dark:bg-slate-900/60"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                        {fact.label}
                      </span>
                      <span className="text-2xl font-semibold text-foreground">{fact.value}</span>
                      <p className="text-xs text-muted-foreground">{fact.detail}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {COMPANY_FACTS.slice(2).map((fact) => (
                <article
                  key={fact.label}
                  className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm dark:border-border/40 dark:bg-slate-900/60"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {fact.label}
                  </span>
                  <span className="text-2xl font-semibold text-foreground">{fact.value}</span>
                  <p className="text-xs text-muted-foreground">{fact.detail}</p>
                </article>
              ))}
            </div>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm text-muted-foreground dark:border-primary/30 dark:bg-primary/10">
              Purpose-led storytelling, women-first enablement, and data-driven support keep Belcorp’s beauty house relevant amid fast-moving competition.
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Purpose pillars in action</h2>
          <p className="text-sm text-muted-foreground">
            Use Belcorp’s purpose, empowerment agenda, and omnichannel playbook as reference points for your own governance and enablement design.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {VISION_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 p-6 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-primary/15"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground">{pillar.description}</p>
                </div>
                <p className="text-xs uppercase tracking-wide text-primary/80 dark:text-primary/70">{pillar.proof}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="timeline" className="relative scroll-mt-32 border-y border-border/60 bg-gradient-to-br from-primary/5 via-background to-emerald-50 py-20 dark:border-border/40 dark:from-primary/10 dark:via-slate-950 dark:to-emerald-950/40">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/20 via-transparent to-transparent opacity-70 dark:from-primary/25" aria-hidden />
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Timeline of resilience</h2>
            <p className="text-sm text-muted-foreground">
              Follow the inflection points that shaped Belcorp’s compliance muscles, digital shifts, and empowerment narrative.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)]">
            <div className="rounded-3xl border border-primary/30 bg-primary/5 p-6 text-sm text-muted-foreground dark:border-primary/40 dark:bg-primary/10">
              A founder split, legal lessons, data overhauls, and AI adoption forged a playbook for modernising beauty-led direct sales.
            </div>
            <div className="space-y-8">
              {STORY_ARC.map((event) => (
                <article
                  key={event.era}
                  className="grid gap-2 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">{event.era}</span>
                  <h3 className="text-lg font-semibold text-foreground">{event.headline}</h3>
                  <p className="text-sm text-muted-foreground">{event.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Compensation breakdown</h2>
          <p className="text-sm text-muted-foreground">
            Map catalogue margins, digital commissions, and recognition ladders so earnings stay tied to verified product movement.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {COMPENSATION_ELEMENTS.map((element) => {
            const Icon = element.icon;
            return (
              <article
                key={element.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 p-6 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-primary/10"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{element.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{element.description}</p>
                <div className="rounded-2xl border border-primary/30 bg-primary/5 p-3 text-xs text-primary dark:border-primary/40 dark:bg-primary/10">
                  {element.highlight}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Success stories</h2>
          <p className="text-sm text-muted-foreground">
            Highlight the empowerment wins, consultant resilience, and retail moves that sustain Belcorp’s momentum.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {SUCCESS_STORIES.map((story) => {
            const Icon = story.icon;
            return (
              <article
                key={story.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 p-6 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-primary/10"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{story.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{story.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">{story.metric}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">Proof: {story.proof}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Innovation signals</h2>
          <p className="text-sm text-muted-foreground">
            Track the data, AI, and R&D bets that keep Belcorp’s consultants supported and brand promises credible.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {INNOVATION_SIGNALS.map((signal) => {
            const Icon = signal.icon;
            return (
              <article
                key={signal.title}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground">{signal.title}</h3>
                    <p className="text-xs text-primary/80 dark:text-primary/70">{signal.proof}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{signal.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="trust-insights" className="container space-y-12 scroll-mt-32">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Trust & reputation signals</h2>
          <p className="text-sm text-muted-foreground">
            Validate the brand with third-party accreditations, customer protections, and impact transparency.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {REPUTATION_SIGNALS.map((signal) => {
            const Icon = signal.icon;
            return (
              <article
                key={signal.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{signal.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{signal.detail}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">Evidence: {signal.evidence}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section id="trust-score" className="container space-y-12 scroll-mt-32">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Trust score snapshot</h2>
          <p className="text-sm text-muted-foreground">
            Translate due diligence findings into advisory scores so stakeholders can gauge confidence levels and mitigation priorities.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {TRUST_SCORES.map((score) => (
            <article
              key={score.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 p-6 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-primary/10"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-foreground">{score.title}</h3>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary dark:border-primary/40 dark:bg-primary/15">
                  {score.score}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{score.insight}</p>
              <span className="text-xs uppercase tracking-wide text-muted-foreground">Methodology: {score.methodology}</span>
            </article>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          Scores are advisory estimates to support trust and risk workshops; combine them with current legal counsel guidance and market-specific compliance reviews.
        </p>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Challenges, critics, and lessons</h2>
          <p className="text-sm text-muted-foreground">
            Understand where Belcorp faces pressure so you can design proactive guardrails for your own build.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CRITICAL_WATCHPOINTS.map((critique) => {
            const Icon = critique.icon;
            return (
              <article
                key={critique.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 p-6 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-primary/10"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{critique.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{critique.description}</p>
                <div className="rounded-2xl border border-primary/30 bg-primary/5 p-3 text-xs text-primary dark:border-primary/40 dark:bg-primary/10">
                  Mitigation: {critique.mitigation}
                </div>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">Source: {critique.source}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Recent headlines to monitor</h2>
          <p className="text-sm text-muted-foreground">
            Keep leadership, compliance, and marketing teams aligned with the latest external coverage.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {NEWS_HEADLINES.map((news) => (
            <article
              key={news.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
            >
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wide text-muted-foreground">{news.source}</span>
                <h3 className="text-lg font-semibold text-foreground">{news.title}</h3>
                <p className="text-xs text-primary/80 dark:text-primary/70">{news.date}</p>
              </div>
              <p className="text-sm text-muted-foreground">{news.summary}</p>
              <Button asChild variant="ghost" className="justify-start px-0 text-sm">
                <Link href={news.url} target="_blank" rel="nofollow noopener noreferrer">
                  View coverage
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-primary/40 bg-gradient-to-br from-[#5a2d8a]/12 via-background to-[#f06292]/12 py-20 dark:border-primary/30 dark:from-[#5a2d8a]/20 dark:via-slate-950 dark:to-[#f06292]/25">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(90,45,138,0.25),transparent_55%),radial-gradient(circle_at_78%_30%,rgba(240,98,146,0.28),transparent_60%)]" aria-hidden />
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              How Cloud MLM Software helps
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Build Belcorp-grade discipline—without inheriting its complexity.
            </h2>
            <p className="text-sm text-muted-foreground">
              Launch or modernise a beauty brand with regulatory readiness, comp-plan modelling, AI support, and impact tracking built in from day one.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={pricingHref}>
                  Review solution tiers
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/20 dark:text-foreground">
                <Link href={contactHref}>
                  Start a tailored blueprint
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4">
            {CLOUD_ROADMAP.map((play) => {
              const Icon = play.icon;
              return (
                <article
                  key={play.title}
                  className="flex flex-col gap-3 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{play.description}</p>
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
