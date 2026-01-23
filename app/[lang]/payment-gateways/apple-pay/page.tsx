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
  AppleLogo,
  ArrowSquareOut,
  ChartLineUp,
  CreditCard,
  DeviceMobile,
  Fingerprint,
  GlobeHemisphereWest,
  Lightning,
  ShieldCheck,
  Sparkle,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroSignal = {
  title: string;
  stat: string;
  detail: string;
  icon: IconType;
};

type ExperienceBlock = {
  title: string;
  narrative: string;
  highlights: string[];
  icon: IconType;
};

type TimelineItem = {
  step: string;
  focus: string;
  detail: string;
  icon: IconType;
};

type PersonaCard = {
  persona: string;
  mandate: string;
  aiAssist: string;
  icon: IconType;
};

const HERO_SIGNALS: HeroSignal[] = [
  {
    title: "Checkout uplift",
    stat: "+32% mobile conversions",
    detail: "Express Apple Pay flows reduce friction for enrolment, kit purchases, and renewals.",
    icon: DeviceMobile
  },
  {
    title: "Security confidence",
    stat: "Biometric-first",
    detail: "Face ID and Touch ID verification tie into Cloud MLM Software&apos;s compliance story.",
    icon: Fingerprint
  },
  {
    title: "Operational clarity",
    stat: "Realtime telemetry",
    detail: "Finance and product leaders get live insight on authorisations, retries, and regional adoption.",
    icon: ChartLineUp
  }
];

const EXPERIENCE_BLOCKS: ExperienceBlock[] = [
  {
    title: "Intent-driven discovery",
    narrative:
      "We evolved the WordPress-era modules and services into modern Apple Pay storytelling tailored to high-growth brands.",
    highlights: [
      "Personalised landing paths highlight Apple Pay, subscriptions, and loyalty benefits per persona.",
      "AI writes copy variations optimised for Safari, mobile app, and iPad experiences.",
      "Demo environments simulate distributor and customer journeys so decision makers preview the impact."
    ],
    icon: Sparkle
  },
  {
    title: "Checkout choreography",
    narrative:
      "Cloud MLM Software unifies multi-currency, ticketing, e-wallet, and backup modules into a polished Apple Pay flow.",
    highlights: [
      "One-touch payments trigger commission, inventory, and CRM updates without manual intervention.",
      "Fallback logic offers branded card capture or alternative wallets when Apple Pay is unavailable.",
      "AI copilots monitor decline reasons and recommend optimisation experiments."
    ],
    icon: CreditCard
  },
  {
    title: "Governance & storytelling",
    narrative:
      "Thought leadership positions your brand as the authority on privacy-first payments within direct selling.",
    highlights: [
      "Executive dashboards frame compliance posture, settlement windows, and growth KPIs.",
      "Marketing receives AI outlines for blogs, analyst briefings, and partner enablement.",
      "Customer success gains insight into adoption trends with scripts tailored to each region."
    ],
    icon: ShieldCheck
  }
];

const TIMELINE_ITEMS: TimelineItem[] = [
  {
    step: "Phase 01",
    focus: "Narrative alignment",
    detail:
      "Audit historical content and map it to Apple Pay&apos;s brand expectations, security narrative, and customer delight.",
    icon: Sparkle
  },
  {
    step: "Phase 02",
    focus: "Integration fabric",
    detail:
      "Connect Apple Pay JS, Payment Request APIs, and Cloud MLM Software modules with observability and alerting.",
    icon: Lightning
  },
  {
    step: "Phase 03",
    focus: "Enablement & launch",
    detail:
      "Train revenue, finance, and support teams with AI-backed playbooks, demos, and FAQ banks.",
    icon: UsersThree
  },
  {
    step: "Phase 04",
    focus: "Optimisation & scale",
    detail:
      "Test messaging, cohorts, and incentives while safeguarding privacy and regional compliance.",
    icon: ChartLineUp
  }
];

const PERSONA_CARDS: PersonaCard[] = [
  {
    persona: "Revenue leadership",
    mandate: "Unlock faster conversions and higher average order value across devices.",
    aiAssist:
      "AI summarises funnel performance, competitor benchmarks, and drafts board-ready growth narratives.",
    icon: ChartLineUp
  },
  {
    persona: "Finance & compliance",
    mandate: "Maintain transparent reconciliation, dispute management, and privacy audits.",
    aiAssist:
      "Automated evidence kits and variance alerts keep executives informed with minimal manual effort.",
    icon: ShieldCheck
  },
  {
    persona: "Customer experience",
    mandate: "Deliver consistent support in chat, phone, and mobile app with complete context.",
    aiAssist:
      "Unified profiles blend Apple Pay token data, orders, and sentiment with guidance on next-best actions.",
    icon: DeviceMobile
  },
  {
    persona: "Product & engineering",
    mandate: "Launch new experiments while keeping integrations resilient and performant.",
    aiAssist:
      "Observability copilots surface latency spikes, API updates, and prioritised remediation tasks.",
    icon: Lightning
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Apple Pay Integration for Cloud MLM Software";
  const description =
    "Deliver Apple Pay journeys inside Cloud MLM Software with biometric confidence, AI storytelling, and unified operations.";

  return {
    title,
    description,
    keywords: [
      "Apple Pay payment gateway",
      "Cloud MLM Software Apple Pay",
      "biometric checkout for MLM",
      "AI payment optimisation",
      "direct selling mobile payments"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/apple-pay", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ApplePayPageProps = {
  params: { lang: SupportedLocale };
};

export default function ApplePayPage({ params }: ApplePayPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-slate-50 to-zinc-100 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(circle_at_88%_12%,rgba(79,70,229,0.18),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(148,163,184,0.16),transparent_60%)]" />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.52fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              Apple Pay excellence
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Biometric-fast payments for modern network marketing brands.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              Cloud MLM Software evolves the archived modules, plans, and services into a refined Apple Pay experience.
              Human teams and AI assistants gain clarity, speed, and trust across every touchpoint.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Connect with Apple Pay strategists
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/40 text-primary hover:bg-primary/10 dark:border-white/40 dark:text-white dark:hover:bg-white/10"
              >
                <Link href={demoHref}>
                  Experience live demo
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 blur-2xl">
              <div className="h-full w-full rounded-3xl bg-gradient-to-br from-slate-300/25 via-indigo-300/20 to-zinc-300/20 dark:from-slate-400/20 dark:via-indigo-400/20 dark:to-zinc-400/20" />
            </div>
            <div className="relative flex flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur-sm dark:border-white/15 dark:bg-white/10">
              {HERO_SIGNALS.map((signal) => {
                const Icon = signal.icon;
                return (
                  <div key={signal.title} className="flex items-center gap-5 rounded-2xl border border-border/40 bg-white/80 p-4 shadow-sm dark:border-white/20 dark:bg-white/5">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                        {signal.title}
                      </p>
                      <p className="text-lg font-semibold text-foreground dark:text-white">{signal.stat}</p>
                      <p className="text-xs text-muted-foreground dark:text-white/70">{signal.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-14">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            Experience blocks tailored for Apple Pay + Cloud MLM Software
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Each block transforms the archived content into actionable strategies for today&apos;s leadership teams.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {EXPERIENCE_BLOCKS.map((block) => {
            const Icon = block.icon;
            return (
              <article
                key={block.title}
                className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div className="pointer-events-none absolute inset-x-6 top-5 h-24 rounded-3xl bg-gradient-to-br from-slate-200/25 via-indigo-200/20 to-zinc-200/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-foreground dark:text-white">{block.title}</h3>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{block.narrative}</p>
                  <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                    {block.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-primary dark:text-indigo-200" aria-hidden />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-white via-slate-50 to-zinc-100 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/15 via-transparent to-transparent dark:from-white/10" />
        <div className="container space-y-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
                Launch roadmap with biometric precision
              </h2>
              <p className="text-base text-muted-foreground dark:text-white/80">
                The archived module list becomes a four-phase execution plan tuned to Apple Pay success.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link href={modulesHref}>
                Review module catalogue
                <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {TIMELINE_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.step}
                  className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-sm dark:border-white/15 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                        {item.step}
                      </p>
                      <p className="text-sm font-semibold text-foreground dark:text-white">{item.focus}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{item.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            Persona copilots built for Apple Pay
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Every team receives guidance, automation, and insight tailored to their Apple Pay responsibilities.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PERSONA_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.persona}
                className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                    {card.persona}
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-foreground dark:text-white">Mandate</h3>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{card.mandate}</p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground dark:text-white">AI assist</h4>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{card.aiAssist}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-slate-200/35 via-indigo-200/30 to-zinc-200/30 px-6 py-16 shadow-xl dark:border-white/15 dark:from-slate-300/20 dark:via-indigo-400/20 dark:to-zinc-400/20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.45),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground/70 dark:text-white/80">
              Intelligence runway
            </p>
            <h2 className="text-3xl font-semibold text-primary-foreground dark:text-white">
              Keep Apple Pay momentum aligned across humans and AI copilots.
            </h2>
            <p className="max-w-lg text-base text-primary-foreground/80 dark:text-white/80">
              Cloud MLM Software weaves payment telemetry, customer sentiment, and compliance signals into narratives
              ready for leadership briefings, marketing content, and automated assistants.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 dark:bg-white dark:text-primary">
                <Link href={contactHref}>
                  Book implementation workshop
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/60 text-primary-foreground hover:bg-white/20 dark:text-white"
              >
                <Link href={demoHref}>
                  Explore the biometrics demo
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="flex flex-col gap-4 rounded-2xl border border-primary/30 bg-white/85 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <AppleLogo className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Brand-safe storytelling</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                AI curates talking points that align with Apple brand guidelines while showcasing your differentiators.
              </p>
            </article>
            <article className="flex flex-col gap-4 rounded-2xl border border-primary/30 bg-white/85 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <GlobeHemisphereWest className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Regional optimisation</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Insights highlight adoption patterns by country, device, and channel to guide marketing investments.
              </p>
            </article>
            <article className="flex flex-col gap-4 rounded-2xl border border-primary/30 bg-white/85 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <CreditCard className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Payment health radar</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Monitoring reveals decline codes, retry success, and issuer performance so teams take action fast.
              </p>
            </article>
            <article className="flex flex-col gap-4 rounded-2xl border border-primary/30 bg-white/85 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <Lightning className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Innovation cue cards</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Actionable recommendations keep voice commerce, subscriptions, and loyalty experiments on track.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
