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
  ArrowUpRight,
  Bot,
  CalendarCheck,
  Clock,
  Headset,
  Mail,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Smile,
  Sparkles,
  Users
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Stat = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Channel = {
  title: string;
  description: string;
  actions: Array<{ label: string; href: string; external?: boolean; localize?: boolean }>;
  icon: IconType;
};

type Expertise = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Region = {
  region: string;
  city: string;
  focus: string;
  contact: string;
};

type AiAddition = {
  year: string;
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Faq = {
  question: string;
  answer: string;
};

const HERO_STATS: Stat[] = [
  {
    label: "Average first response",
    value: "< 2 hrs",
    detail: "Global success desk staffed across APAC, EMEA, and the Americas.",
    icon: Clock
  },
  {
    label: "Dedicated experts",
    value: "80+",
    detail: "Analysts, solution architects, and compliance specialists ready to collaborate.",
    icon: Users
  },
  {
    label: "Customer satisfaction",
    value: "4.9 / 5",
    detail: "Conversation ratings for support, onboarding, and advisory engagements.",
    icon: Smile
  },
  {
    label: "Copilot assistance",
    value: "2025",
    detail: "AI copilots summarise tickets and next steps for every engagement.",
    icon: Sparkles
  }
];

const CHANNELS: Channel[] = [
  {
    title: "Talk to sales",
    description: "Explore pricing, timelines, and a tailored product walkthrough with our consultants.",
    icon: PhoneCall,
    actions: [
      { label: "Book a strategy call", href: "https://calendly.com/cloudmlmsoftware/demo", external: true },
      { label: "Email sales", href: "mailto:[email protected]" }
    ]
  },
  {
    title: "Customer support",
    description: "Existing customers can raise tickets, access success resources, and schedule escalation reviews.",
    icon: Headset,
    actions: [
      { label: "Open a support ticket", href: "https://support.cloudmlmsoftware.com", external: true },
      { label: "Success desk playbooks", href: "/resources", localize: true }
    ]
  },
  {
    title: "Partner with us",
    description: "Technology and consulting partners collaborate with Cloud MLM Software across regions.",
    icon: ShieldCheck,
    actions: [
      { label: "Apply to the partner programme", href: "/partner-programme", external: true },
      { label: "Partner enablement hub", href: "/resources/customers", localize: true }
    ]
  }
];

const EXPERTISE: Expertise[] = [
  {
    title: "Solution architecture",
    description:
      "Plan migrations, custom modules, and compliance guardrails with architects who have delivered hundreds of deployments.",
    icon: CalendarCheck,
    bullets: [
      "Blueprint workshops tailored to compensation and geographic goals",
      "Integration strategy for ERP, CRM, tax, and payment ecosystems",
      "Performance and security reviews prior to launch"
    ]
  },
  {
    title: "Customer success",
    description:
      "Dedicated success managers guide adoption plans, knowledge programmes, and executive briefings.",
    icon: Headset,
    bullets: [
      "Quarterly business reviews with data-backed recommendations",
      "Enablement campaigns for field, corporate, and partner communities",
      "Health scoring dashboards and proactive escalation paths"
    ]
  },
  {
    title: "Advisory & innovation",
    description:
      "Strategists help shape AI roadmaps, expansion playbooks, and operational governance.",
    icon: Bot,
    bullets: [
      "AI readiness assessments and copilot training",
      "Market-entry analysis with regulatory summaries",
      "Change management programmes for enterprise rollouts"
    ]
  }
];

const REGIONS: Region[] = [
  {
    region: "APAC",
    city: "Kochi, India",
    focus: "Product engineering, success desk, and multilingual support.",
    contact: "+91 9567 728 766"
  },
  {
    region: "Middle East",
    city: "Dubai, UAE",
    focus: "Enterprise consulting, compliance, and partner enablement.",
    contact: "+971 4 123 4567"
  },
  {
    region: "North America",
    city: "Austin, USA",
    focus: "Strategic advisory, AI innovation, and executive workshops.",
    contact: "+1 512 555 0184"
  }
];

const AI_ADDITIONS: AiAddition[] = [
  {
    year: "2025",
    title: "Copilot-assisted engagements",
    description:
      "Every conversation is summarised by secure copilots that propose next actions and update shared workspaces.",
    icon: Bot,
    bullets: [
      "Instant recap emails with action items and owners",
      "Sentiment monitoring flags follow-up needs before escalation",
      "Ticket enrichment pre-fills diagnostics so specialists dive straight into solutions"
    ]
  },
  {
    year: "2024",
    title: "Unified telemetry & experimentation",
    description:
      "Support and sales interactions feed live dashboards for leadership, setting the stage for AI-driven service in 2025.",
    icon: Sparkles,
    bullets: [
      "Conversation analytics across voice, chat, and email",
      "Feature flags for pilot experiences with selected customer cohorts",
      "Quality assurance recordings tagged with compliance and data privacy notes"
    ]
  }
];

const FAQS: Faq[] = [
  {
    question: "What information should I include when contacting sales?",
    answer:
      "Share your programme size, existing technology stack, product catalogue, and launch goals. The more detail you provide, the more tailored your roadmap and budget guidance will be."
  },
  {
    question: "How quickly does the support desk respond?",
    answer:
      "Critical issues receive a response within 30 minutes. Standard requests are acknowledged in under two hours, with proactive updates until resolution."
  },
  {
    question: "Do you offer onsite or virtual workshops?",
    answer:
      "Yes. Our team delivers remote and onsite blueprint sessions, enablement tours, and executive briefings in coordination with your schedule and regional regulations."
  },
  {
    question: "Can partners access the same resources?",
    answer:
      "Certified partners receive enablement assets, technical sandboxes, and co-selling support through the partner success team and knowledge portal."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Contact Cloud MLM Software";
  const description =
    "Connect with Cloud MLM Software experts for sales, support, partner programmes, and AI innovation workshops.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/contact-us", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ContactUsPageProps = {
  params: { lang: SupportedLocale };
};

export default function ContactUsPage({ params }: ContactUsPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const resourcesHref = buildLocalizedPath("/resources", locale);
  const supportHref = "https://support.cloudmlmsoftware.com";

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-24 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.18),transparent_45%),radial-gradient(circle_at_88%_-6%,rgba(16,185,129,0.18),transparent_55%)]" />
        <div className="container space-y-12">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <Headset className="h-4 w-4" aria-hidden />
              Your success desk
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Let’s plan the next milestone for your MLM programme together.
            </h1>
            <p className="text-lg text-muted-foreground">
              Whether you are modernising compensation, launching new markets, or activating AI copilots, Cloud MLM Software experts are ready to collaborate. Share your goals and we will assemble the right team to respond.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Submit a project brief
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={supportHref} target="_blank" rel="noopener noreferrer">
                  Visit the support portal
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <dl className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {HERO_STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <dt className="mt-4 text-sm font-medium text-muted-foreground">{stat.label}</dt>
                  <dd className="mt-1 text-2xl font-semibold text-foreground">{stat.value}</dd>
                  <p className="mt-2 text-xs text-muted-foreground">{stat.detail}</p>
                </div>
              );
            })}
          </dl>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Choose the channel that fits your next conversation</h2>
          <p className="text-sm text-muted-foreground">
            We respond quickly across phone, email, and partner portals so you can keep momentum high.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CHANNELS.map((channel) => {
            const Icon = channel.icon;
            return (
              <article key={channel.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-foreground">{channel.title}</h3>
                <p className="text-sm text-muted-foreground">{channel.description}</p>
                <div className="space-y-2 text-sm">
                  {channel.actions.map((action) => {
                    const href = action.localize ? buildLocalizedPath(action.href, locale) : action.href;
                    return (
                      <div key={action.label}>
                        {action.external ? (
                          <a className="inline-flex items-center gap-2 text-primary hover:underline" href={href} target="_blank" rel="noopener noreferrer">
                            {action.label}
                            <ArrowUpRight className="h-4 w-4" aria-hidden />
                          </a>
                        ) : (
                          <Link className="inline-flex items-center gap-2 text-primary hover:underline" href={href}>
                            {action.label}
                            <ArrowUpRight className="h-4 w-4" aria-hidden />
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Experts aligned with every milestone</h2>
            <p className="text-sm text-muted-foreground">
              From architecture to AI innovation, our teams collaborate with yours using proven playbooks.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {EXPERTISE.map((area) => {
              const Icon = area.icon;
              return (
                <article key={area.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-foreground">{area.title}</h3>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {area.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <ShieldCheck className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Regional leadership ready to collaborate</h2>
          <p className="text-sm text-muted-foreground">
            Connect with the Cloud MLM Software office closest to your operations or emerging market.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {REGIONS.map((region) => (
            <article key={region.region} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-lg font-semibold text-foreground">{region.region}</h3>
              <p className="text-sm text-muted-foreground">{region.city}</p>
              <p className="text-sm text-muted-foreground">{region.focus}</p>
              <p className="text-xs uppercase tracking-wide text-primary">{region.contact}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-background py-20">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">From observability to copilot service</h2>
            <p className="text-sm text-muted-foreground">
              See how 2024 foundations now power AI-assisted engagements across every channel.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {AI_ADDITIONS.map((entry) => {
              const Icon = entry.icon;
              return (
                <article key={entry.year} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">{entry.year}</p>
                      <h3 className="text-lg font-semibold text-foreground">{entry.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{entry.description}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <ShieldCheck className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground">
            Quick answers for teams preparing the next Cloud MLM Software conversation.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {FAQS.map((faq) => (
            <article key={faq.question} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
              <p className="text-sm text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-10 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Let’s build the roadmap together</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Share your objectives and we will align Cloud MLM Software sales, success, and innovation specialists to respond with clarity and speed.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Submit your requirements
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={resourcesHref}>
                Browse resources
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="mailto:[email protected]">
                Email us directly
                <Mail className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
