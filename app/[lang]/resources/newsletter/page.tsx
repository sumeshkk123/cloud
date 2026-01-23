import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  BookOpen,
  CheckCircle2,
  LineChart,
  Mail,
  Megaphone,
  PenTool,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow
} from "lucide-react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";

export const dynamic = "force-static";

type IconComponent = LucideIcon;

type NewsletterMetric = {
  label: string;
  value: string;
};

type NewsletterPillar = {
  title: string;
  description: string;
  icon: IconComponent;
  bullets: string[];
};

type ContentStream = {
  title: string;
  description: string;
  icon: IconComponent;
  highlights: string[];
};

type AudienceSegment = {
  title: string;
  description: string;
  icon: IconComponent;
  needs: string[];
};

type DeliveryOperation = {
  title: string;
  description: string;
  icon: IconComponent;
  practices: string[];
};

type NewsletterAsset = {
  title: string;
  description: string;
  badge: string;
  href: string;
};

type NewsletterFaq = {
  question: string;
  answer: string;
};

const NEWSLETTER_METRICS: NewsletterMetric[] = [
  { label: "Enterprise subscribers", value: "12,500+" },
  { label: "Average open rate", value: "41%" },
  { label: "Markets covered", value: "45" }
];

const NEWSLETTER_PILLARS: NewsletterPillar[] = [
  {
    title: "Executive-grade intelligence",
    description:
      "Deliver strategic commentary, KPIs, and analyst notes that boards and revenue leaders rely on each month.",
    icon: BarChart3,
    bullets: [
      "Growth dashboards highlighting revenue, churn, and field performance",
      "Commentary from Cloud MLM Software strategists and partners",
      "C-level summaries optimised for rapid stakeholder consumption"
    ]
  },
  {
    title: "Operational enablement",
    description:
      "Equip product, data, and operations teams with actionable insights, templates, and best practices.",
    icon: Workflow,
    bullets: [
      "How-to guides, migration playbooks, and feature adoption tips",
      "Platform roadmap highlights with release management notes",
      "Links to sandboxes, webinars, and training assets"
    ]
  },
  {
    title: "Compliance & trust",
    description:
      "Surface regulatory updates, audit reminders, and trust signals that keep programmes compliant everywhere you operate.",
    icon: ShieldCheck,
    bullets: [
      "Global regulatory snapshots across FTC, DSA, GDPR, and tax",
      "Security and privacy posture updates with remediation guidance",
      "Incident response learnings and risk mitigation checklists"
    ]
  }
];

const CONTENT_STREAMS: ContentStream[] = [
  {
    title: "Strategy brief",
    description: "Monthly executive memo outlining macro trends and product vision alignment.",
    icon: Megaphone,
    highlights: [
      "Growth benchmarks across high-performing direct selling programmes",
      "AI, automation, and compensation innovations to watch",
      "Leadership actions for the upcoming quarter"
    ]
  },
  {
    title: "Product intelligence",
    description: "Deep dives on platform releases, configuration guidance, and customer stories.",
    icon: BookOpen,
    highlights: [
      "Release notes with impact by persona",
      "Configuration blueprints for new modules",
      "Success spotlights from launches and migrations"
    ]
  },
  {
    title: "Data & compliance watch",
    description: "Curated updates on regulations, data governance, and security posture.",
    icon: ShieldCheck,
    highlights: [
      "Regulatory calendar with upcoming deadlines",
      "Security advisories and recommended controls",
      "Checklist for audits, tax filings, and attestations"
    ]
  },
  {
    title: "Field enablement",
    description: "Practical frameworks, campaigns, and playbooks for distributor engagement.",
    icon: Users,
    highlights: [
      "Campaign kits with messaging, creative, and KPIs",
      "Behavioural nudges and gamification templates",
      "Enablement assets for onboarding and rank advancement"
    ]
  }
];

const AUDIENCE_SEGMENTS: AudienceSegment[] = [
  {
    title: "Executives & board",
    description: "Stay informed on KPIs, growth signals, and risk posture.",
    icon: Target,
    needs: [
      "Portfolio dashboards and C-level talking points",
      "Analyst commentary on market dynamics",
      "Forward-looking roadmap milestones"
    ]
  },
  {
    title: "Product & operations",
    description: "Translate roadmap insights into delivery action plans.",
    icon: Workflow,
    needs: [
      "Release guidance with adoption metrics",
      "Runbooks for migrations, launches, and feature rollouts",
      "Access to sandboxes, API updates, and integration notes"
    ]
  },
  {
    title: "Legal, finance & compliance",
    description: "Monitor regulatory changes, audits, and trust initiatives.",
    icon: ShieldCheck,
    needs: [
      "Regulation summaries with impact analysis",
      "Audit reminders and documentation trails",
      "Security and privacy certifications"
    ]
  },
  {
    title: "Field leadership",
    description: "Activate campaigns and coaching programmes faster.",
    icon: Users,
    needs: [
      "Enablement kits for promotions and incentives",
      "Field communications calendar",
      "Coaching prompts and success metrics"
    ]
  }
];

const DELIVERY_OPERATIONS: DeliveryOperation[] = [
  {
    title: "Editorial workflow",
    description: "Structured governance ensures every edition is accurate and on-brand.",
    icon: PenTool,
    practices: [
      "Topic backlog prioritised with stakeholder input",
      "Peer review process for data accuracy and tone",
      "Localized variants generated for priority markets"
    ]
  },
  {
    title: "Data automation",
    description: "Automated pipelines keep metrics, links, and recommendations fresh.",
    icon: LineChart,
    practices: [
      "Direct integrations with analytics and product telemetry",
      "Automated KPI snapshots with variance explains",
      "UTM tracking and performance measurement"
    ]
  },
  {
    title: "Distribution & compliance",
    description: "Deliver securely with segmentation, consent management, and archive policies.",
    icon: Mail,
    practices: [
      "Segmented sends by persona, region, and language",
      "Consent lifecycle and preference centre alignment",
      "Archived and auditable editions stored for regulators"
    ]
  },
  {
    title: "Engagement analytics",
    description: "Measure impact across stakeholders and iterate content with precision.",
    icon: BarChart3,
    practices: [
      "Engagement dashboards by segment and content type",
      "Quarterly insight reports shared with executives",
      "Benchmarking against SaaS and direct selling peers"
    ]
  }
];

const NEWSLETTER_ASSETS: NewsletterAsset[] = [
  {
    title: "Editorial calendar",
    description: "Quarterly roadmap covering themes, owners, and distribution dates.",
    badge: "CALENDAR",
    href: "mailto:[email protected]?subject=Request%20Newsletter%20Editorial%20Calendar"
  },
  {
    title: "Engagement analytics dashboard",
    description: "Sample Looker Studio dashboard template with subscriber KPIs and cohort analysis.",
    badge: "DASHBOARD",
    href: "mailto:[email protected]?subject=Request%20Newsletter%20Analytics%20Dashboard"
  },
  {
    title: "Persona messaging kit",
    description: "Messaging matrix covering executive, operations, compliance, and field personas.",
    badge: "PLAYBOOK",
    href: "mailto:[email protected]?subject=Request%20Newsletter%20Messaging%20Kit"
  }
];

const NEWSLETTER_FAQS: NewsletterFaq[] = [
  {
    question: "How often is the Cloud MLM Software newsletter published?",
    answer:
      "A comprehensive edition ships monthly, with rapid advisories issued when major regulatory or product updates occur."
  },
  {
    question: "Can we personalise the newsletter for different stakeholder groups?",
    answer:
      "Yes. Editions are segmented by persona, region, and language. We can incorporate custom CTAs, spotlights, and KPI overlays for your organisation."
  },
  {
    question: "What happens after we subscribe?",
    answer:
      "You'll receive a welcome kit, access to the archive, and a dedicated point of contact to align content with your governance processes."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Software Newsletter Hub | Cloud MLM Software";
  const description =
    "Stay ahead of MLM Software strategy with enterprise-grade insights, product intelligence, and compliance updates curated for Cloud MLM Software stakeholders.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/resources/newsletter", locale)
    }
  };
}

type NewsletterPageProps = {
  params: { lang: SupportedLocale };
};

export default function NewsletterPage({ params }: NewsletterPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const resourcesHref = buildLocalizedPath("/resources", locale);
  const subscribeHref = "/newsletter/";

  return (
    <div className="space-y-24 pb-24">
      <section className="border-b border-border/60 bg-gradient-to-br from-slate-100 via-white to-primary/10 py-24 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900/40">
        <div className="container space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-primary">
            <Sparkles size={16} aria-hidden /> Newsletter hub
          </span>
          <div className="max-w-4xl space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              MLM intelligence, enablement, and compliance updates for every Cloud MLM stakeholder.
            </h1>
            <p className="text-lg text-muted-foreground">
              Subscribe to the Cloud MLM Software newsletter for recurring insights on MLM software strategy that blend growth analytics, roadmap intelligence, and governance guidance for executives, operations, and field leaders across global programmes.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href={subscribeHref} target="_blank" rel="noopener noreferrer">
                Subscribe to the Cloud MLM Software newsletter
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={contactHref}>
                Speak with our editorial team
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="hover:bg-primary/10">
              <Link href={resourcesHref}>
                Explore additional resources
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {NEWSLETTER_METRICS.map((metric) => (
              <div key={metric.label} className="rounded-3xl border border-border/60 bg-background/80 p-6 text-left shadow-sm">
                <p className="text-3xl font-semibold text-foreground">{metric.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Why MLM leaders rely on the newsletter</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Every issue is structured around three pillars that keep enterprise stakeholders informed, empowered, and compliant.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {NEWSLETTER_PILLARS.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article key={pillar.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  <Icon size={18} aria-hidden /> Strategic pillar
                </span>
                <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
                <ul className="mt-2 space-y-3 text-sm text-muted-foreground">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="mt-0.5 text-primary" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Core content streams in the newsletter</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Each edition blends strategic insights with tactical tooling so teams can act immediately.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {CONTENT_STREAMS.map((stream) => {
            const Icon = stream.icon;

            return (
              <article key={stream.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  <Icon size={18} aria-hidden /> Content stream
                </span>
                <h3 className="text-lg font-semibold text-foreground">{stream.title}</h3>
                <p className="text-sm text-muted-foreground">{stream.description}</p>
                <ul className="mt-2 space-y-3 text-sm text-muted-foreground">
                  {stream.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="mt-0.5 text-primary" aria-hidden />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Designed for every MLM stakeholder</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Segmented editions ensure each audience receives meaningful insights, tools, and next steps tailored to their mandate.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {AUDIENCE_SEGMENTS.map((segment) => {
            const Icon = segment.icon;

            return (
              <article key={segment.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  <Icon size={18} aria-hidden /> Audience
                </span>
                <h3 className="text-lg font-semibold text-foreground">{segment.title}</h3>
                <p className="text-sm text-muted-foreground">{segment.description}</p>
                <ul className="mt-2 space-y-3 text-sm text-muted-foreground">
                  {segment.needs.map((need) => (
                    <li key={need} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="mt-0.5 text-primary" aria-hidden />
                      <span>{need}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How we deliver every edition</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Proven editorial, automation, and compliance operations make the Cloud MLM Software newsletter a dependable source of truth.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {DELIVERY_OPERATIONS.map((operation) => {
            const Icon = operation.icon;

            return (
              <article key={operation.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  <Icon size={18} aria-hidden /> Operational excellence
                </span>
                <h3 className="text-lg font-semibold text-foreground">{operation.title}</h3>
                <p className="text-sm text-muted-foreground">{operation.description}</p>
                <ul className="mt-2 space-y-3 text-sm text-muted-foreground">
                  {operation.practices.map((practice) => (
                    <li key={practice} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="mt-0.5 text-primary" aria-hidden />
                      <span>{practice}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Supporting communication assets</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Request these companion materials to integrate the Cloud MLM Software newsletter into your governance and enablement workflows.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {NEWSLETTER_ASSETS.map((asset) => (
            <article key={asset.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                {asset.badge}
              </span>
              <h3 className="text-lg font-semibold text-foreground">{asset.title}</h3>
              <p className="text-sm text-muted-foreground">{asset.description}</p>
              <Button asChild variant="ghost" className="mt-auto justify-start px-0 text-primary">
                <Link href={asset.href}>Request asset</Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Here are the common questions we receive from enterprise stakeholders before subscribing to our Cloud MLM Software newsletter.
          </p>
        </div>
        <div className="space-y-4">
          {NEWSLETTER_FAQS.map((faq) => (
            <article key={faq.question} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="container flex flex-col items-center gap-6 rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-12 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to keep every stakeholder informed?</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Subscribe today or brief our editorial desk on your governance requirements. We ensure the Cloud MLM Software newsletter becomes the trusted communications channel for your organisation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href={subscribeHref} target="_blank" rel="noopener noreferrer">
                Subscribe for MLM updates
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={contactHref}>
                Request a private briefing
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
