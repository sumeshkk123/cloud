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
  BarChart3,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Stat = {
  label: string;
  value: string;
  description: string;
};

type Value = {
  title: string;
  description: string;
  icon: IconType;
};

type Goal = {
  order: string;
  description: string;
};

type Reason = {
  description: string;
};

type Audience = {
  title: string;
  description: string;
};

type DeliveryStep = {
  title: string;
  description: string;
};

const HERO_STATS: Stat[] = [
  {
    label: "Years of experience",
    value: "8+",
    description: "Supporting network marketing brands since 2015"
  },
  {
    label: "Skilled professionals",
    value: "30+",
    description: "Developers, analysts, designers, and marketers"
  },
  {
    label: "Projects delivered",
    value: "300+",
    description: "Cloud MLM implementations across the globe"
  },
  {
    label: "Customer satisfaction",
    value: "100%",
    description: "Quality-first delivery and long-term support"
  }
];

const VALUES: Value[] = [
  {
    title: "Practical best practices",
    description: "Every project is architected with secure code, documentation, and proven delivery frameworks.",
    icon: ShieldCheck
  },
  {
    title: "Customer-first mindset",
    description: "We listen carefully, tailor compensation logic, and stay transparent from discovery to launch.",
    icon: HeartHandshake
  },
  {
    title: "Innovation that matters",
    description: "AI automation, integrations, and UX updates are introduced where they create measurable value.",
    icon: Lightbulb
  },
  {
    title: "Measured outcomes",
    description: "We benchmark success against lead generation, distributor retention, and revenue growth.",
    icon: BarChart3
  }
];

const GOALS: Goal[] = [
  {
    order: "01",
    description: "Deliver the best MLM software for businesses of any size or structure."
  },
  {
    order: "02",
    description: "Continuously explore new technologies that strengthen Cloud MLM Software."
  },
  {
    order: "03",
    description: "Remain the trusted MLM software development partner for the long term."
  },
  {
    order: "04",
    description: "Expand our support network to reach customers worldwide."
  }
];

const WHY_CHOOSE = [
  "Web-based, self-hosted Cloud MLM Software keeps you in control.",
  "Binary, matrix, unilevel, board, donation, and custom plans without limits.",
  "Dedicated business analysts clarify compensation and compliance questions.",
  "Cost-effective plan modelling that scales alongside your organisation."
];

const WHAT_WE_OFFER = [
  "Web-based MLM management platform",
  "Plan customisations without limits",
  "Compensation and business analysis support",
  "Affordable compensation and payout optimisation"
];

const MEETING_CHANNELS = [
  "We collaborate via WhatsApp, Telegram, Google Meet, Microsoft Teams, Zoom, and your preferred platforms.",
  "Guided plan sessions align Cloud MLM modules with onboarding, payouts, and analytics."
];

const WHO_WE_SERVE: Audience[] = [
  {
    title: "Enterprise marketing and operations teams",
    description:
      "Global organisations rely on Cloud MLM Software to coordinate launches, payouts, compliance, and reporting across markets."
  },
  {
    title: "Startup founders",
    description:
      "Emerging brands pair Cloud MLM with Bpract’s analysts to model plans, onboard the field, and scale without overspending."
  },
  {
    title: "Field leaders and distributors",
    description:
      "Mobile-first dashboards, replicating sites, and recognition automations keep teams engaged and compliant."
  }
];

const DELIVERY_STEPS: DeliveryStep[] = [
  {
    title: "Discovery and blueprint",
    description: "We map compensation, product, and compliance requirements, then define milestones with your stakeholders."
  },
  {
    title: "Configuration and automation",
    description: "Modules are tailored to your plan types with custom workflows, integrations, and branding."
  },
  {
    title: "Testing and enablement",
    description: "Sandbox simulations, content reviews, and training assets prepare the field and finance teams for launch."
  },
  {
    title: "Optimisation and support",
    description: "Post-launch analytics, AI enhancements, and managed services keep every market on track."
  }
];

const REASONS_LEFT: Reason[] = [
  { description: "We rely on top-tier technologies to build Cloud MLM Software." },
  { description: "Security layers keep performance high and data protected." },
  { description: "Responsive support continues long after deployment." },
  { description: "Friendly engineering and success teams focused on outcomes." },
  { description: "Customise Cloud MLM Software exactly as you imagine." }
];

const REASONS_RIGHT: Reason[] = [
  { description: "Cloud MLM Software simplifies online marketing and field operations." },
  { description: "Designed to stay intuitive for admins, distributors, and partners." },
  { description: "Unlimited plan support across binary, matrix, unilevel, donation, and more." },
  { description: "Tested modules and automation handle complex network marketing tasks." },
  { description: "Free demos showcase binary, matrix, and unilevel plans in action." }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "About Bpract Software Solutions";
  const description =
    "Learn how Bpract Software Solutions shapes Cloud MLM Software with practical best practices, innovative automation, and customer-first delivery.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/company/about", locale)
    }
  };
}

type AboutPageProps = {
  params: { lang: SupportedLocale };
};

export default function AboutPage({ params }: AboutPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";
  const brochureHref = "/documents/";

  return (
    <div className="space-y-24 pb-24">
      <section className="border-b border-border/60 bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-24 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-4xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" aria-hidden />
              Cloud MLM Software by Bpract
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Facts about Bpract Software Solutions and our flagship Cloud MLM Software platform.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Since 2015, Bpract Software Solutions LLP has delivered innovative network marketing technology from Kozhikode’s Cyberpark. Cloud MLM Software remains our flagship product—helping direct selling brands manage compensation, automation, and growth with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Talk to our team
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                  Try the demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href={brochureHref} target="_blank" rel="noopener noreferrer">
                  Download documents
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <dl className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-border/60 bg-background p-6 text-center shadow-sm">
                <dt className="text-sm font-medium text-muted-foreground">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-foreground">{stat.value}</dd>
                <p className="mt-2 text-xs text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="who-we-serve" className="container space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Who we serve
        </h2>
        <p className="text-sm text-muted-foreground">
          Cloud MLM Software adapts to the needs of enterprise marketing teams, startup founders, and the field leaders who drive every network.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {WHO_WE_SERVE.map((audience) => (
            <article key={audience.title} className="rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{audience.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{audience.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          About Cloud MLM Software
        </h2>
        <p className="text-sm text-muted-foreground">
          Cloud MLM Software offers a seamless experience for network marketing operators. With more than 56 supporting modules, it covers genealogy tracking, lead management, payouts, replicated sites, and analytics in one platform. Bpract’s teams analyse each client’s requirements and deliver secure, scalable solutions backed by responsive support.
        </p>
        <p className="text-sm text-muted-foreground">
          Whether you are launching a startup or modernising an established network, Cloud MLM Software provides the flexibility to manage complex compensation structures alongside the automations needed to keep distributors productive.
        </p>
      </section>

      <section id="inside-bpract" className="container space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Inside Bpract</h2>
        <p className="text-sm text-muted-foreground">
          Product squads, services pods, and support desks collaborate daily so Cloud MLM Software customers get answers fast. Teams across Kozhikode Cyberpark and remote hubs share progress openly, pairing experienced specialists with new talent from Bpract Academy.
        </p>
        <p className="text-sm text-muted-foreground">
          Transparent timelines, shared documentation, and weekly checkpoints keep everyone aligned while we handle configuration, automation, and optimisation behind the scenes.
        </p>
      </section>

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Our values</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {VALUES.map((value) => (
            <article key={value.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <value.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Goals that guide every engagement</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {GOALS.map((goal) => (
            <article key={goal.order} className="relative overflow-hidden rounded-3xl border border-border/60 bg-muted/40 p-8 text-left shadow-sm">
              <span className="absolute left-6 top-6 text-5xl font-bold text-primary/30">{goal.order}</span>
              <p className="text-sm text-muted-foreground">{goal.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Why brands choose Cloud MLM Software</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <ul className="space-y-3 text-sm text-muted-foreground">
            {WHY_CHOOSE.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {WHAT_WE_OFFER.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How we collaborate</h2>
        <div className="grid gap-4 text-sm text-muted-foreground">
          {MEETING_CHANNELS.map((item) => (
            <div key={item} className="flex items-start gap-2 rounded-3xl border border-border/60 bg-background p-4 shadow-sm">
              <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="delivery-playbook" className="container space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Delivery playbook</h2>
        <p className="text-sm text-muted-foreground">
          Our four-phase approach makes sure every Cloud MLM Software launch is planned, tested, and supported with confidence.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {DELIVERY_STEPS.map((step) => (
            <article key={step.title} className="rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          How we earned the title “Best MLM Software Development Company”
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <ul className="space-y-3 text-sm text-muted-foreground">
            {REASONS_LEFT.map((reason) => (
              <li key={reason.description} className="flex items-start gap-2">
                <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                <span>{reason.description}</span>
              </li>
            ))}
          </ul>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {REASONS_RIGHT.map((reason) => (
              <li key={reason.description} className="flex items-start gap-2">
                <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                <span>{reason.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12">
        <div className="container flex flex-col items-center gap-6 rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-12 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Purchase AI-powered Cloud MLM Software today
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Automate, manage, and grow your network with AI-driven tools, tested modules, and Bpract’s practical expertise.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/landing/mlm-software-service/">
                Buy now
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                Try the demo
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
