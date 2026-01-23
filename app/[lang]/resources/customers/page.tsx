import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  BarChart3,
  Building2,
  CheckCircle2,
  Globe2,
  Handshake,
  Headset,
  LineChart,
  Rocket,
  ShieldCheck,
  Users
} from "lucide-react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";

export const dynamic = "force-static";

type IconComponent = LucideIcon;

type CustomerMetric = {
  label: string;
  value: string;
};

type CustomerSegment = {
  title: string;
  description: string;
  icon: IconComponent;
  priorities: string[];
};

type OutcomeTheme = {
  title: string;
  description: string;
  icon: IconComponent;
  highlights: string[];
};

type SuccessStory = {
  customer: string;
  summary: string;
  outcomes: string[];
  href: string;
  badge: string;
};

type PartnershipProgram = {
  title: string;
  description: string;
  icon: IconComponent;
  details: string[];
};

type CustomerFaq = {
  question: string;
  answer: string;
};

const CUSTOMER_METRICS: CustomerMetric[] = [
  { label: "Enterprise programmes launched", value: "320+" },
  { label: "Monthly commission volume automated", value: "$1.4B" },
  { label: "Markets supported", value: "45" }
];

const CUSTOMER_SEGMENTS: CustomerSegment[] = [
  {
    title: "Global direct selling enterprises",
    description: "Modernise multi-market programmes with unified technology and governance.",
    icon: Building2,
    priorities: [
      "Run regionalised compensation, tax, and regulatory controls",
      "Launch new product lines with integrated commerce and logistics",
      "Consolidate analytics for executives, finance, and field leadership"
    ]
  },
  {
    title: "High-growth scale-ups",
    description: "Accelerate from startup to enterprise with scalable tooling and playbooks.",
    icon: Rocket,
    priorities: [
      "Introduce enterprise-grade compliance without slowing innovation",
      "Automate payouts, incentives, and customer journeys end-to-end",
      "Expand into new geographies with localisation templates"
    ]
  },
  {
    title: "Consumer brands entering MLM",
    description: "Transform established brands into omnichannel direct selling experiences.",
    icon: Globe2,
    priorities: [
      "Design compensation frameworks aligned to brand positioning",
      "Connect e-commerce, retail, and field systems for single view of customer",
      "Enable field teams with guided selling and content delivery"
    ]
  }
];

const OUTCOME_THEMES: OutcomeTheme[] = [
  {
    title: "Operational resilience",
    description: "Customers depend on Cloud MLM Software for mission-critical availability and governance.",
    icon: ShieldCheck,
    highlights: [
      "99.98% uptime delivered across multi-cloud deployments",
      "ISO 27001 aligned processes with quarterly audits",
      "Disaster recovery drills rehearsed with customer programme offices"
    ]
  },
  {
    title: "Revenue acceleration",
    description: "Data-driven insights help corporate and field teams capture growth faster.",
    icon: BarChart3,
    highlights: [
      "Executive dashboards combining revenue, churn, and cohort analytics",
      "Field enablement journeys that increase rank advancement by 26%",
      "Campaign orchestration that lifts customer retention by up to 18%"
    ]
  },
  {
    title: "Frictionless compliance",
    description: "Legal, finance, and audit teams stay ahead of regulatory change.",
    icon: LineChart,
    highlights: [
      "Automated jurisdictional tax, invoicing, and product governance",
      "Incident response playbooks co-created with customer counsel",
      "Audit evidence packaged for regulators and assurance partners"
    ]
  }
];

const SUCCESS_STORIES: SuccessStory[] = [
  {
    customer: "WellnessWave International",
    summary: "Migrated seven legacy systems into a unified Cloud MLM Software stack within 12 weeks, supporting launch across APAC and Europe.",
    outcomes: [
      "30% reduction in payout reconciliation time",
      "Unified analytics for 28 country leadership teams",
      "Regulatory approvals secured across EU markets"
    ],
    href: "/case-study/wellnesswave-expansion/",
    badge: "CASE STUDY"
  },
  {
    customer: "NovaTech Labs",
    summary: "High-growth digital wellness brand scaled to 500K distributors with automated onboarding, coaching, and ecommerce.",
    outcomes: [
      "Onboarding NPS improved from 42 to 68",
      "50% faster product launch cycles",
      "Mobile engagement up 34% within first quarter"
    ],
    href: "/case-study/novatech-scale/",
    badge: "VIDEO STORY"
  },
  {
    customer: "Heritage Naturals",
    summary: "Family-owned nutraceutical brand adopted Cloud MLM Software to modernise operations and pass regulatory audits across North America.",
    outcomes: [
      "CSA and FTC compliance evidence consolidated in days not weeks",
      "Inventory accuracy increased to 99.3%",
      "Finance close cycle reduced by 4 business days"
    ],
    href: "/case-study/heritage-naturals-governance/",
    badge: "SPOTLIGHT"
  }
];

const PARTNERSHIP_PROGRAMS: PartnershipProgram[] = [
  {
    title: "Customer success office",
    description: "Dedicated strategists, product specialists, and support engineers aligned to each account.",
    icon: Handshake,
    details: [
      "Quarterly business reviews with roadmap alignment",
      "Executive sponsor engagement for escalation and advocacy",
      "Shared scorecards tracking KPIs and adoption milestones"
    ]
  },
  {
    title: "Premier support & assurance",
    description: "Follow-the-sun operations teams protect mission-critical programmes around the clock.",
    icon: Headset,
    details: [
      "24/7 multilingual support with industry-certified specialists",
      "Proactive monitoring and automated incident response",
      "Compliance concierge for audits, attestations, and regulator requests"
    ]
  },
  {
    title: "Innovation councils",
    description: "Cross-customer communities shape the Cloud MLM Software product roadmap.",
    icon: Award,
    details: [
      "Executive councils by region and industry",
      "Design partner cohorts for emerging capabilities",
      "Shared playbooks and reference architectures"
    ]
  }
];

const CUSTOMER_FAQS: CustomerFaq[] = [
  {
    question: "How does Cloud MLM Software onboard enterprise customers?",
    answer:
      "We assign a multi-disciplinary programme team covering strategy, solution architecture, data, compliance, and change management. Engagements follow the Cloud Launch Framework with discovery, design, implementation, and enablement phases." 
  },
  {
    question: "What level of customisation can customers expect?",
    answer:
      "Customers can configure compensation, commerce, analytics, and integrations using modular services. When required, our engineering teams deliver custom extensions governed by shared SDLC and security practices." 
  },
  {
    question: "How are success metrics tracked post-launch?",
    answer:
      "Joint scorecards track revenue, retention, operational efficiency, compliance status, and customer experience. These metrics feed quarterly business reviews and drive continuous improvement roadmaps." 
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Customer Success Stories | Cloud MLM Software";
  const description =
    "See how enterprises, scale-ups, and consumer brands use Cloud MLM Software to modernise operations, accelerate growth, and stay compliant.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/resources/customers", locale)
    }
  };
}

type CustomersPageProps = {
  params: { lang: SupportedLocale };
};

export default function CustomersPage({ params }: CustomersPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const resourcesHref = buildLocalizedPath("/resources", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="border-b border-border/60 bg-gradient-to-br from-slate-100 via-white to-primary/10 py-24 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900/40">
        <div className="container space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-primary">
            <ShieldCheck size={16} aria-hidden /> Customer success
          </span>
          <div className="max-w-4xl space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Trusted by global MLM enterprises, scale-ups, and category-defining consumer brands.
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover how Cloud MLM Software partners with customer teams to deliver resilient operations, accelerate revenue, and keep every market compliant.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href={demoHref}>
                Explore the platform
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={contactHref}>
                Speak with customer success
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="hover:bg-primary/10">
              <Link href={resourcesHref}>
                Review more resources
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {CUSTOMER_METRICS.map((metric) => (
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Who we partner with</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Every programme is tailored to the operating model, growth targets, and governance requirements of our customers.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CUSTOMER_SEGMENTS.map((segment) => {
            const Icon = segment.icon;

            return (
              <article key={segment.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  <Icon size={18} aria-hidden /> Segment
                </span>
                <h3 className="text-lg font-semibold text-foreground">{segment.title}</h3>
                <p className="text-sm text-muted-foreground">{segment.description}</p>
                <ul className="mt-2 space-y-3 text-sm text-muted-foreground">
                  {segment.priorities.map((priority) => (
                    <li key={priority} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="mt-0.5 text-primary" aria-hidden />
                      <span>{priority}</span>
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Outcomes our customers achieve</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Cloud MLM Software programmes are measured against resilience, growth, and compliance objectives agreed with every customer.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {OUTCOME_THEMES.map((theme) => {
            const Icon = theme.icon;

            return (
              <article key={theme.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  <Icon size={18} aria-hidden /> Outcome focus
                </span>
                <h3 className="text-lg font-semibold text-foreground">{theme.title}</h3>
                <p className="text-sm text-muted-foreground">{theme.description}</p>
                <ul className="mt-2 space-y-3 text-sm text-muted-foreground">
                  {theme.highlights.map((highlight) => (
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Recent customer stories</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Explore how Cloud MLM Software helps organisations modernise technology, empower teams, and expand into new markets.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {SUCCESS_STORIES.map((story) => (
            <article key={story.customer} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                {story.badge}
              </span>
              <h3 className="text-lg font-semibold text-foreground">{story.customer}</h3>
              <p className="text-sm text-muted-foreground">{story.summary}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {story.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="mt-0.5 text-primary" aria-hidden />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="ghost" className="mt-auto justify-start px-0 text-primary">
                <Link href={story.href} target="_blank" rel="noopener noreferrer">
                  View story
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Programmes that support every customer</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Beyond the platform, Cloud MLM Software provides partnership models that align to the scale and complexity of your organisation.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PARTNERSHIP_PROGRAMS.map((program) => {
            const Icon = program.icon;

            return (
              <article key={program.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  <Icon size={18} aria-hidden /> Partnership
                </span>
                <h3 className="text-lg font-semibold text-foreground">{program.title}</h3>
                <p className="text-sm text-muted-foreground">{program.description}</p>
                <ul className="mt-2 space-y-3 text-sm text-muted-foreground">
                  {program.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="mt-0.5 text-primary" aria-hidden />
                      <span>{detail}</span>
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Answers for leaders evaluating Cloud MLM Software as their enterprise partner.
          </p>
        </div>
        <div className="space-y-4">
          {CUSTOMER_FAQS.map((faq) => (
            <article key={faq.question} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="container flex flex-col items-center gap-6 rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-12 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to design your next chapter with Cloud MLM Software?</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Partner with our customer success teams to map your roadmap, access reference architectures, and connect with peers who have transformed their programmes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Schedule a consultation
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={demoHref}>
                See customer workflows
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
