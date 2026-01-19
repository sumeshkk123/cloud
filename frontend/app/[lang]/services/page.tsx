import type { Metadata } from "next";
import Image from "next/image";
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
  ClipboardList,
  Code,
  Headset,
  Plug,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Workflow
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type ServiceCategory = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
  href?: string;
};

type DeliveryPillar = {
  title: string;
  description: string;
  icon: IconType;
};

type EngagementModel = {
  title: string;
  description: string;
  outcomes: string[];
};

type ServiceDetail = {
  title: string;
  highlight: string;
  description: string;
  benefitsTitle: string;
  benefits: string[];
  href: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

const HERO_STATS = [
  { label: "Projects delivered", value: "320+" },
  { label: "Launch specialists", value: "85" },
  { label: "Markets supported", value: "45" }
];

const SERVICE_TAGS = [
  "MLM software development",
  "E-commerce integration",
  "WooCommerce integration",
  "Opencart development",
  "Magento development",
  "Website designing",
  "Web development",
  "Bitcoin cryptocurrency MLM",
  "Shopify integration"
];

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    title: "Implementation consulting",
    description:
      "Workshop compensation, product, and customer journeys with senior strategists aligned to your launch milestones.",
    bullets: [
      "Discovery sessions with finance, ops, and field leadership",
      "Plan health checks and readiness scorecards",
      "Localized go-live playbooks for each market"
    ],
    icon: ClipboardList,
    href: "/mlm-consulting/"
  },
  {
    title: "Custom software development",
    description:
      "Extend Cloud MLM Software with bespoke portals, data pipelines, and integrations built by our product engineers.",
    bullets: [
      "Distributor and customer portal enhancements",
      "Automations across finance, logistics, and CX systems",
      "Secure data services with long-term maintainability"
    ],
    icon: Code,
    href: "/mlm-software/"
  },
  {
    title: "Integration & automation",
    description:
      "Connect ERPs, tax services, and marketing platforms to orchestrate data flows across your direct selling stack.",
    bullets: [
      "Prebuilt connectors for commerce, CRM, and payment partners",
      "Event-driven workflows with audit-ready logging",
      "API governance and monitoring dashboards"
    ],
    icon: Plug,
    href: "/integrations/"
  },
  {
    title: "Compliance & risk management",
    description:
      "Align every launch with regulatory requirements through documentation, monitoring, and plan adjustments.",
    bullets: [
      "FTC, DSA, and regional direct selling reviews",
      "Marketing and communication policy guardrails",
      "Fraud detection modelling and remediation"
    ],
    icon: ShieldCheck,
    href: "/mlm-consulting/"
  },
  {
    title: "Managed support operations",
    description:
      "Keep momentum post-launch with multilingual support, release management, and enablement resources.",
    bullets: [
      "24/7 support desk with escalation playbooks",
      "Release governance and regression coordination",
      "Training assets for administrators and field coaches"
    ],
    icon: Headset,
    href: "/mlm-support/"
  },
  {
    title: "Growth marketing programs",
    description:
      "Drive acquisition and retention with campaign strategy, content execution, and conversion optimisation.",
    bullets: [
      "Journey design across email, SMS, and social",
      "Localized content creation and asset management",
      "Performance analytics and creative experiments"
    ],
    icon: TrendingUp,
    href: "/mlm-business-marketing/"
  }
];

const DELIVERY_PILLARS: DeliveryPillar[] = [
  {
    title: "Strategy & alignment",
    description: "We facilitate workshops to align corporate, field, and compliance teams around measurable outcomes.",
    icon: Users
  },
  {
    title: "Technical excellence",
    description: "Engineers follow secure SDLC practices with peer reviews, automated checks, and documentation.",
    icon: Code
  },
  {
    title: "Operational readiness",
    description: "Change management plans cover training, communication, and support so launches stay on schedule.",
    icon: Workflow
  }
];

const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    title: "Launch accelerator",
    description: "Four-to-six week engagements to deliver new compensation plans, modules, or market expansions.",
    outcomes: [
      "Prioritized backlog and milestone roadmap",
      "Configured environments with tested integrations",
      "Enablement kits for administrators and field leaders"
    ]
  },
  {
    title: "Co-managed delivery",
    description: "Flexible retainer pairing your internal team with Cloud MLM specialists for ongoing innovation.",
    outcomes: [
      "Shared sprint planning and release cadences",
      "Cross-functional squads spanning product, data, and QA",
      "Quarterly business reviews with KPI dashboards"
    ]
  },
  {
    title: "Managed services",
    description: "Dedicated operations covering hosting, support, and continuous optimisation for enterprise programmes.",
    outcomes: [
      "24/7 incident response and SLA-backed support",
      "Governed change control and compliance reporting",
      "Proactive enhancement roadmap aligned to growth goals"
    ]
  }
];

const SERVICE_FAQS = [
  {
    question: "Can you work alongside our existing development or agency partners?",
    answer:
      "Yes. We regularly embed with internal IT, marketing agencies, and consultant networks. Engagement models include shared tooling, joint sprint ceremonies, and defined ownership matrices to avoid duplication."
  },
  {
    question: "How quickly can you help us launch a new market or product line?",
    answer:
      "Most market launches move from discovery to go-live within six weeks. Timeline depends on integrations, regulatory approvals, and localization requirements. We map critical paths during the kickoff workshop."
  },
  {
    question: "Do you support compliance reviews and legal documentation?",
    answer:
      "Our compliance team partners with your counsel to review compensation plans, replicated sites, and marketing assets. We produce documentation packs, risk assessments, and regulator-ready audit logs."
  },
  {
    question: "What does onboarding look like for managed services?",
    answer:
      "We run an operational audit, establish communication cadences, and set up monitoring across infrastructure, payouts, and support queues. Transition plans ensure continuity for distributors and customers."
  }
];

const SERVICE_DETAILS: ServiceDetail[] = [
  {
    title: "MLM software development",
    highlight: "Custom mobile and web experiences for every distributor tier",
    description:
      "We design and ship multi-platform MLM applications that keep admins, field leaders, and customers connected. From genealogy dashboards to commission tracking, every workflow is tuned to your compensation rules and branding standards.",
    benefitsTitle: "Why brands choose our development squad",
    benefits: [
      "Tailored feature roadmaps mapped to your product and compensation strategy",
      "Cross-platform delivery spanning iOS, Android, and responsive web portals",
      "Live data pipelines for instant rank, payout, and performance insights"
    ],
    href: "/mlm-software/",
    image: {
      src: "/wp-content/uploads/2024/08/USERDB_Cloudtheme.webp",
      alt: "Team collaborating on an MLM platform dashboard",
      width: 780,
      height: 480
    }
  },
  {
    title: "E-commerce integration",
    highlight: "Unified storefronts with real-time inventory and order visibility",
    description:
      "Connect your Cloud MLM stack to leading commerce platforms so members can shop, manage autoship, and redeem rewards in one place. We orchestrate product catalogs, taxation, and settlement end-to-end.",
    benefitsTitle: "Integration outcomes",
    benefits: [
      "Bi-directional sync across products, inventory, and order status",
      "Single sign-on journeys so members never leave your branded portal",
      "Revenue analytics covering web, mobile, and replicated sites"
    ],
    href: "/services/e-commerce-integration/",
    image: {
      src: "/wp-content/uploads/2024/08/opencartservice.webp",
      alt: "Illustration of ecommerce integrations for direct selling",
      width: 780,
      height: 480
    }
  },
  {
    title: "WooCommerce integration",
    highlight: "WordPress-native commerce tailored for field promotions",
    description:
      "Leverage WooCommerce for rapid campaign rollouts while keeping genealogy, enrollments, and payouts inside Cloud MLM Software. We engineer deep plugins, automation, and analytics that respect MLM policies.",
    benefitsTitle: "What’s included",
    benefits: [
      "Product and customer sync with customizable hooks",
      "Automated workflows for enrollments, loyalty, and fulfilment",
      "Storefront themes optimised for replicated sites and mobile"
    ],
    href: "/services/wordpress-integration-in-cloud-mlm-software/",
    image: {
      src: "/wp-content/uploads/2024/10/wordpress-web-development.webp",
      alt: "WooCommerce storefront mockups",
      width: 780,
      height: 480
    }
  },
  {
    title: "Opencart development",
    highlight: "Modular commerce builds for international expansion",
    description:
      "Our Opencart specialists craft bespoke experiences with custom modules, payment adapters, and logistics integrations. We ensure every market launch inherits your MLM compliance guardrails.",
    benefitsTitle: "Delivery highlights",
    benefits: [
      "Custom extensions for enrollment packs, rewards, and subscriptions",
      "Certified connectors for payment gateways, shipping, and tax authorities",
      "Ongoing optimisation covering performance, security, and UX"
    ],
    href: "/services/opencart-development/",
    image: {
      src: "/wp-content/uploads/2024/08/opencar-innerpage.webp",
      alt: "Opencart storefront for an MLM brand",
      width: 780,
      height: 480
    }
  },
  {
    title: "Magento development",
    highlight: "Enterprise storefronts with governed MLM extensions",
    description:
      "Harness Adobe Commerce to launch high-volume stores with advanced merchandising, personalisation, and headless commerce APIs that flow into Cloud MLM Software.",
    benefitsTitle: "Key capabilities",
    benefits: [
      "Custom modules for enrollment journeys, PV/CV tracking, and leader incentives",
      "Seamless ERP, tax, and fulfillment integrations",
      "Performance tuning and observability for global traffic surges"
    ],
    href: "/services/magento-development/",
    image: {
      src: "/wp-content/uploads/2024/08/majento3.webp",
      alt: "Magento commerce dashboards",
      width: 780,
      height: 480
    }
  },
  {
    title: "Website designing",
    highlight: "Brand-forward experiences that convert prospects and customers",
    description:
      "Our designers create multilanguage, accessibility-first sites that tell your brand story and guide every persona to the right funnel. Each layout is optimised for SEO and direct selling compliance.",
    benefitsTitle: "Design deliverables",
    benefits: [
      "Persona-driven UX mapped to distributor and customer journeys",
      "Design systems ready for marketing, onboarding, and replicated sites",
      "Responsive layouts tuned for mobile-first engagement"
    ],
    href: "/services/website-designing/",
    image: {
      src: "/wp-content/uploads/2024/08/websitemenu.webp",
      alt: "Website design concepts for an MLM launch",
      width: 780,
      height: 480
    }
  },
  {
    title: "Web development",
    highlight: "Secure, scalable portals powering every stakeholder journey",
    description:
      "Beyond storefronts, we deliver administrative consoles, replicated sites, community portals, and analytics hubs engineered for resilience and speed.",
    benefitsTitle: "Engineering focus",
    benefits: [
      "Modern architectures with caching, CDN, and edge security",
      "Component libraries that accelerate future feature drops",
      "Continuous delivery workflows with automated QA and monitoring"
    ],
    href: "/services/web-development/",
    image: {
      src: "/wp-content/uploads/2024/08/webdevservcintro.webp",
      alt: "Developers collaborating on web applications",
      width: 780,
      height: 480
    }
  },
  {
    title: "Bitcoin cryptocurrency MLM software",
    highlight: "Blockchain-ready payouts and incentive management",
    description:
      "Launch cryptocurrency-driven MLM programmes with audit trails, wallet management, and compliance workflows built on secure blockchain integrations.",
    benefitsTitle: "Platform strengths",
    benefits: [
      "On-chain transparency for transactions, bonuses, and transfers",
      "Real-time dashboards highlighting wallet balances and tax obligations",
      "Scalable architecture ready for new tokens, regions, and regulations"
    ],
    href: "/cryptocurrency-mlm-software/",
    image: {
      src: "/wp-content/uploads/2024/08/cryptointro.webp",
      alt: "Cryptocurrency themed illustration with network nodes",
      width: 780,
      height: 480
    }
  },
  {
    title: "Shopify integration",
    highlight: "Direct selling journeys powered by Shopify’s ecosystem",
    description:
      "Blend Shopify storefronts with MLM capabilities so every promotion, reorder, and subscription feeds your compensation engine without manual work.",
    benefitsTitle: "Integration essentials",
    benefits: [
      "Catalog, pricing, and inventory sync across multiple locales",
      "Marketing automation tie-ins covering email, SMS, and push",
      "Performance dashboards tracking conversion, AOV, and retention"
    ],
    href: "/services/shopify-integration-in-cloud-mlm-software/",
    image: {
      src: "/wp-content/uploads/2024/08/shopify.webp",
      alt: "Shopify integration for MLM brands",
      width: 780,
      height: 480
    }
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Services | Cloud MLM Software";
  const description =
    "Partner with Cloud MLM Software for consulting, development, integrations, compliance, and managed services tailored to direct selling enterprises.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/services", locale)
    }
  };
}

type ServicesPageProps = {
  params: { lang: SupportedLocale };
};

export default function ServicesPage({ params }: ServicesPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = "/mlm-software/";
  const supportHref = "/customer-success/";

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-emerald-50 via-white to-sky-50 py-24 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900/40">
        <div className="container relative">
          <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,420px)] md:items-center">
            <div className="max-w-4xl">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                <Sparkles className="h-4 w-4" aria-hidden />
                Full-service delivery for direct selling teams
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Launch, scale, and optimise your MLM programme with a specialist partner.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                Consultants, engineers, and compliance experts work as one team to accelerate implementations, modernise legacy systems, and keep global operations running smoothly.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <Link href={contactHref}>
                    Talk to a services lead
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                    Explore platform capabilities
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="lg">
                  <Link href={supportHref} target="_blank" rel="noopener noreferrer">
                    Review success services
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden overflow-hidden rounded-3xl border border-border/60 bg-background/40 shadow-sm md:block">
              <Image
                src="/wp-content/uploads/2024/08/ServicesBanner.webp"
                alt="Cloud MLM services banner"
                width={900}
                height={643}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
          <dl className="mt-14 grid gap-6 sm:grid-cols-3">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-border/60 bg-background p-6 text-center shadow-sm">
                <dt className="text-sm font-medium text-muted-foreground">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-foreground">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Service practices that meet every stage of growth</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Mix and match consulting, engineering, and managed support to deliver programs that fit your compensation plan, regions, and customer experience goals.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SERVICE_CATEGORIES.map((service) => (
            <article
              key={service.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <service.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              {service.href ? (
                <Link
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
                >
                  Learn more
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-8">
        <div className="grid gap-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Service catalogue highlights</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Explore the specialist practices available on demand. Each engagement blends strategy, engineering, and managed operations so your brand can launch faster without compromising compliance.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {SERVICE_TAGS.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-border/60 bg-muted/40 px-4 py-2 text-sm font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Delivery pillars that keep programmes on track</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Every engagement pairs strategic leadership with disciplined execution so you can ship confidently without surprises.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {DELIVERY_PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <pillar.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-16">
        {SERVICE_DETAILS.map((service, index) => (
          <article
            key={service.title}
            className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center"
          >
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                {service.highlight}
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-foreground sm:text-3xl">
                {service.title}
              </h3>
              <p className="mt-4 text-base text-muted-foreground">{service.description}</p>
              <p className="mt-6 text-sm font-semibold text-foreground">{service.benefitsTitle}</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-6 w-fit" variant="outline">
                <Link href={service.href} target="_blank" rel="noopener noreferrer">
                  Explore more
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className={index % 2 === 1 ? "lg:order-1" : ""}>
              <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/40 shadow-sm">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  width={service.image.width}
                  height={service.image.height}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="container space-y-10">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Engagement models tailored to your team</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Choose the level of partnership that matches your internal capacity and transformation goals.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {ENGAGEMENT_MODELS.map((model) => (
            <article
              key={model.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm"
            >
              <h3 className="text-xl font-semibold text-foreground">{model.title}</h3>
              <p className="text-sm text-muted-foreground">{model.description}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {model.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2">
                    <BarChart3 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Answers to the most common questions from leaders weighing Cloud MLM Software as their services partner.
          </p>
        </div>
        <div className="space-y-4">
          {SERVICE_FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-foreground">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-sm text-primary transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="container flex flex-col items-center gap-6 rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-12 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to co-create your next milestone?</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Engage Cloud MLM Software to accelerate delivery, modernise infrastructure, and delight your field with every release.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Schedule a strategy session
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                Review case studies
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
