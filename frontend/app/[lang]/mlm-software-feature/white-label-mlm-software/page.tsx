import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, BadgeCheck, Palette, ShieldCheck, Sparkles } from "lucide-react";
import {
  Diamond,
  Factory,
  GlobeHemisphereEast,
  Handshake,
  RocketLaunch,
  SealCheck
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroBullet = {
  title: string;
  description: string;
  icon: IconType;
};

type HeroMetric = {
  label: string;
  value: string;
};

type Benefit = {
  title: string;
  body: string;
  icon: IconType;
};

type ReliabilityPoint = {
  title: string;
  description: string;
  emphasis: string;
};

type ReadinessItem = {
  title: string;
  detail: string;
};

const HERO_BULLETS: HeroBullet[] = [
  {
    title: "Brand the entire workspace",
    description: "Apply your logos, colour system, and language so distributors immerse in your brand from the first login.",
    icon: Palette
  },
  {
    title: "Launch without re-building",
    description: "Leverage our pre-engineered platform, automation, and security to go live in weeks instead of developing from scratch.",
    icon: RocketLaunch
  },
  {
    title: "Scale across markets",
    description: "Roll out to every geography with multi-currency support, multilingual UX, and device-responsive layouts.",
    icon: GlobeHemisphereEast
  },
  {
    title: "Governance you can trust",
    description: "Audit-ready permissions, compliance tooling, and encryption keep your data protected as the network grows.",
    icon: ShieldCheck
  }
];

const HERO_METRICS: HeroMetric[] = [
  {
    label: "Typical branded deployment",
    value: "4–6 weeks"
  },
  {
    label: "Brand kits & domains supported",
    value: "Unlimited"
  },
  {
    label: "Interface languages available",
    value: "40+"
  }
];

const BENEFITS: Benefit[] = [
  {
    title: "Customisable branding",
    body: "Present Cloud MLM Software as your own product with bespoke portals, customer journeys, and collateral-ready assets.",
    icon: Handshake
  },
  {
    title: "Cost & time efficiency",
    body: "Sidestep the engineering expense of building and maintaining a complex MLM core while still delivering a premium experience.",
    icon: Factory
  },
  {
    title: "Scalable flexibility",
    body: "Add compensation plans, replicate websites, and connect external tools at the pace your organisation demands.",
    icon: Diamond
  },
  {
    title: "Compliance & security",
    body: "Benefit from hardened authentication, role-based access, and regional governance standards within the white-label licence.",
    icon: SealCheck
  }
];

const RELIABILITY_POINTS: ReliabilityPoint[] = [
  {
    title: "Safeguard your reputation",
    description:
      "Every interaction your customers see reflects your brand promise. We ensure the underlying infrastructure delivers consistent quality, performance, and support across every touchpoint.",
    emphasis:
      "Your clients associate the service with your name, so reliability and satisfaction become non-negotiable advantages."
  },
  {
    title: "Build on proven foundations",
    description:
      "Customise the MLM framework to suit your team, comp plans, and market positioning without reinventing the operational backbone.",
    emphasis:
      "Organisations tap into our battle-tested processes and evolve them as their own, converting years of product investment into an instant head start."
  },
  {
    title: "Monetise faster",
    description:
      "Offer products and services under your label while relying on a platform already tuned for onboarding, payouts, and ongoing engagement.",
    emphasis:
      "White labelling is how global brands accelerate go-to-market motions—share reports, launch campaigns, and support leaders without waiting on new development cycles."
  }
];

const READINESS_ITEMS: ReadinessItem[] = [
  {
    title: "Document your brand playbook",
    detail: "Logo variations, colour palettes, typography, messaging pillars, and tone of voice guidelines ensure the rollout mirrors your identity."
  },
  {
    title: "Map the customer journeys",
    detail: "Clarify how prospects, distributors, and administrators should experience the portal so our team can configure role-specific pathways."
  },
  {
    title: "Align compliance stakeholders",
    detail: "Capture legal, finance, and IT expectations for data residency, auditing, and security so governance aligns from day one."
  },
  {
    title: "Prioritise integration touchpoints",
    detail: "List the CRMs, payment gateways, and analytics tools that need to exchange data with the platform to maintain operational continuity."
  }
];

const FEATURE_TAGS: string[] = [
  "Highly extensible",
  "In-built e-wallet",
  "Multilingual translational system",
  "Multi currency system",
  "Great support",
  "Easy navigation",
  "Support & ticket module",
  "SMS integration (international & national)",
  "Clean interface & easy to use",
  "Mobile friendly and responsive",
  "Improved page speed",
  "Dynamic compression system",
  "Minified source & resources",
  "Backend caching technology",
  "Powerful email system",
  "Secure authentication",
  "Strong backup system",
  "Payment gateway options",
  "Replicating website",
  "LCP pages management",
  "OpenCart, WordPress & Drupal APIs",
  "Magento integration",
  "Advanced reporting",
  "Auto responder system"
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "White Label MLM Software | Cloud MLM Software";
  const description =
    "Launch a fully branded MLM platform without starting from scratch. Cloud MLM Software delivers white label control, compliance, and scalability for modern direct selling enterprises.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-feature/white-label-mlm-software", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type WhiteLabelMlmSoftwarePageProps = {
  params: { lang: SupportedLocale };
};

export default function WhiteLabelMlmSoftwarePage({
  params
}: WhiteLabelMlmSoftwarePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-sky-50 via-white to-violet-50 py-24 text-slate-900 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.28),transparent_55%),radial-gradient(circle_at_85%_30%,rgba(129,140,248,0.24),transparent_55%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.2),transparent_60%)] dark:bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.35),transparent_55%),radial-gradient(circle_at_85%_30%,rgba(129,140,248,0.3),transparent_55%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.25),transparent_60%)]"
          aria-hidden
        />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] lg:items-center">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-sky-50/80 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-sky-700 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-100">
              <Sparkles className="h-4 w-4" />
              White label mlm software
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Present a fully branded MLM experience without rebuilding the core platform
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-200">
                Deliver a corporate-grade interface, automation, and analytics engine that looks and feels like your own software. Cloud MLM Software provides the white label backbone so your organisation can focus on distribution strategy, customer loyalty, and rapid expansion.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-sky-600 text-white hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400">
                <Link href={contactHref}>
                  Speak with a product strategist
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-sky-200 bg-white/90 text-sky-700 hover:bg-sky-50 dark:border-sky-500/30 dark:bg-transparent dark:text-sky-100 dark:hover:bg-sky-500/10"
              >
                <Link href={demoHref}>Launch the demo workspace</Link>
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-sky-200/70 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-none">
                <p className="text-xs font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-200">Deployment stats</p>
                <dl className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {HERO_METRICS.map((metric) => (
                    <div key={metric.label} className="flex flex-col">
                      <dt className="font-medium text-slate-500 dark:text-slate-300">{metric.label}</dt>
                      <dd className="text-base font-semibold text-slate-900 dark:text-white">{metric.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-none">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-300">Why leaders choose our white label</p>
                <ul className="mt-4 space-y-4">
                  {HERO_BULLETS.map((bullet) => (
                    <li key={bullet.title} className="flex gap-3">
                      <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-200">
                        <bullet.icon className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-semibold text-slate-900 dark:text-white">{bullet.title}</p>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{bullet.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="relative isolate overflow-hidden rounded-3xl border border-slate-200/70 bg-white/85 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-900/70 dark:shadow-none">
            <div className="absolute inset-x-8 top-8 -z-10 h-48 rounded-3xl bg-gradient-to-br from-sky-500/15 via-slate-200/40 to-transparent blur-2xl dark:from-sky-500/20 dark:via-slate-700/40" aria-hidden />
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-300">From the Cloud MLM Software team</p>
            <blockquote className="mt-4 space-y-4">
              <p className="text-lg text-slate-700 dark:text-slate-200">
                “White label is about confidence. Your distributors see your brand, while our infrastructure delivers the stability, analytics, and automation you promised.”
              </p>
              <footer className="text-sm text-slate-500 dark:text-slate-300">– Delivery & Success Office</footer>
            </blockquote>
            <div className="mt-6 rounded-2xl border border-sky-200/70 bg-sky-50/70 p-5 text-slate-700 dark:border-sky-500/40 dark:bg-sky-500/10 dark:text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-200">Retention insight</p>
              <p className="mt-2 text-sm leading-6">
                Reduce distributor churn by keeping them inside your ecosystem—from onboarding to payouts—without referencing third-party vendors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)]">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-600 dark:border-slate-700 dark:text-slate-200">
            <ShieldCheck className="h-4 w-4" />
            Definition & context
          </span>
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-slate-900/70 dark:shadow-none">
            <h2 className="text-balance text-3xl font-semibold tracking-tight">
              What makes Cloud MLM Software a true white label solution?
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              A white label product allows you to present a service built by trusted specialists as your own. We create and maintain the engine—then hand you the keys so it becomes indistinguishable from a proprietary platform in the eyes of your distributors and customers.
            </p>
            <p className="mt-4 text-base text-muted-foreground">
              You dictate the branding, messaging, and customer experience while we continue to enhance the technology, security, and integrations behind the scenes.
            </p>
            <div className="mt-6 rounded-2xl border border-sky-200/70 bg-sky-50/70 p-6 dark:border-sky-500/30 dark:bg-sky-500/10">
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-200">Key outcome</p>
              <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
                Your organisation retains full brand ownership while delivering an enterprise-ready MLM experience backed by Cloud MLM Software expertise.
              </p>
            </div>
          </article>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {BENEFITS.map((benefit) => (
            <article
              key={benefit.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/70 dark:shadow-none"
            >
              <div className="absolute -right-10 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-sky-100/40 blur-3xl transition group-hover:scale-110 dark:bg-sky-500/20" aria-hidden />
              <benefit.icon className="h-8 w-8 text-sky-600 dark:text-sky-300" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">{benefit.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{benefit.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-slate-100 py-20 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-600 dark:border-slate-700 dark:text-slate-200">
              <BadgeCheck className="h-4 w-4" />
              Brand assurance
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight">
              Protect loyalty by pairing your brand with our operational backbone
            </h2>
            <div className="space-y-6">
              {RELIABILITY_POINTS.map((point) => (
                <article key={point.title} className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-none">
                  <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-300">
                    {point.title}
                  </p>
                  <p className="mt-3 text-sm text-slate-700 dark:text-slate-200">{point.description}</p>
                  <p className="mt-3 text-sm font-medium text-slate-900 dark:text-white">{point.emphasis}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/60 bg-white/90 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-900/70 dark:shadow-none">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-300">Go-to-market accelerator</p>
            <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-200">
              Launch marketing campaigns, performance reports, and replicated websites under your banner while the platform manages enrolment, payouts, and communication flows.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-200">
              Maintain parity with the most demanding industries by tapping into our continuous optimisation roadmap.
            </p>
            <div className="mt-6 rounded-2xl border border-sky-200/70 bg-sky-50/70 p-6 dark:border-sky-500/30 dark:bg-sky-500/10">
              <p className="text-xs font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-200">Need investment details?</p>
              <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
                Explore tailored pricing packages to understand licence tiers, support levels, and onboarding options for your organisation.
              </p>
              <Button asChild variant="secondary" size="sm" className="mt-4 bg-sky-600 text-white hover:bg-sky-500 dark:bg-sky-500 dark:text-slate-900">
                <Link href={pricingHref}>
                  View pricing options
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-600 dark:border-slate-700 dark:text-slate-200">
            <RocketLaunch className="h-4 w-4" />
            White label readiness checklist
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight">
            Prepare your organisation for a brand-first rollout
          </h2>
          <p className="mx-auto max-w-3xl text-base text-muted-foreground">
            Align brand, operations, and governance teams around a shared launch plan. Completing these steps keeps your transformation on schedule and ensures the experience matches your promise.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {READINESS_ITEMS.map((item, index) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/70 dark:shadow-none"
            >
              <div className="absolute right-6 top-6 text-5xl font-bold text-slate-100 dark:text-white/5" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </div>
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-300">{item.title}</p>
              <p className="mt-3 text-sm text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container space-y-8">
        <div className="space-y-3 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-600 dark:border-slate-700 dark:text-slate-200">
            <BadgeCheck className="h-4 w-4" />
            Platform capabilities
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight">
            Enterprise features included in the white label stack
          </h2>
        </div>
        <ul className="flex flex-wrap justify-center gap-3">
          {FEATURE_TAGS.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200"
            >
              <BadgeCheck className="h-4 w-4 text-sky-600 dark:text-sky-300" />
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <section className="container overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-600 via-sky-500 to-indigo-500 p-10 text-white shadow-xl dark:border-slate-800">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.35fr)] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/80">Take the next step</p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight">
              See how fast your brand can take ownership of a mission-critical MLM platform
            </h2>
            <p className="text-base leading-7 text-white/90">
              Our consultants guide you through brand configuration, data migration, and launch communications so the rollout is seamless for every stakeholder.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" variant="secondary" className="bg-white text-sky-700 hover:bg-slate-100">
              <Link href={contactHref}>
                Plan your white label launch
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-transparent text-white hover:bg-white/10">
              <Link href={demoHref}>Explore the interactive demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: SupportedLocale): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
