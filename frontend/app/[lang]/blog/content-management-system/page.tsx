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
  ClipboardList,
  Globe,
  Layers3,
  LayoutDashboard,
  PenSquare,
  Plug,
  Shield,
  Spline,
  Users
} from "lucide-react";
import {
  Browsers,
  Cloud,
  Cube,
  Gear,
  Keyhole,
  Notepad,
  Swatches,
  Tag
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type UseCase = {
  title: string;
  detail: string;
  icon: IconType;
};

type Module = {
  name: string;
  summary: string;
  icon: IconType;
};

type Principle = {
  name: string;
  description: string;
  icon: IconType;
};

const METRICS: Metric[] = [
  {
    label: "CMS deployments managed",
    value: "320+",
    description: "MLM enterprises using Cloud MLM Software to orchestrate content across markets.",
    icon: LayoutDashboard
  },
  {
    label: "Content updates processed monthly",
    value: "1.2M",
    description: "Announcements, product pages, and training assets published without developer queues.",
    icon: PenSquare
  },
  {
    label: "Markets localised",
    value: "54",
    description: "Multilingual content and regulatory updates maintained from a single CMS console.",
    icon: Globe
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Centralised control panel",
    description:
      "Mirror the original article’s emphasis on administrative oversight with a UI that lets headquarters coordinate every page, popup, and news update.",
    bullets: [
      "Activate or pause promotional popups in real time.",
      "Publish announcements, achiever spotlights, and compliance notices instantly.",
      "Update location details and contact centres with audit history."
    ],
    icon: LayoutDashboard
  },
  {
    title: "Content-first marketing engine",
    description:
      "SEO demands constant freshness. A CMS gives marketers freedom to update copy, imagery, and storytelling without touching layouts.",
    bullets: [
      "Swap hero stories, add testimonials, or rewrite FAQs within minutes.",
      "Keep pace with search algorithm changes by refreshing structured content.",
      "Sync blogs, landing pages, and replicated sites with unified assets."
    ],
    icon: ClipboardList
  },
  {
    title: "Modular extensibility",
    description:
      "Beyond pages and links, today’s CMS orchestrates banners, forums, document hubs, and more through configurable modules.",
    bullets: [
      "Toggle forums, knowledge bases, and media libraries by market needs.",
      "Manage banner rotations, campaign tags, and category hierarchies centrally.",
      "Integrate AI assistants to guide editors with tone and compliance checks."
    ],
    icon: Layers3
  }
];

const USE_CASES: UseCase[] = [
  {
    title: "Web-based editing",
    detail:
      "Administrators log in through the browser, edit sections inline, and preview changes before publishing—no HTML required.",
    icon: Browsers
  },
  {
    title: "MLM-tailored governance",
    detail:
      "Define content owners for each rank or market while keeping brand guardianship under central control.",
    icon: Shield
  },
  {
    title: "Always-on support",
    detail:
      "Cloud MLM Software teams provide 24/7 assistance, training, and release management so your CMS never stalls.",
    icon: Users
  }
];

const MODULES: Module[] = [
  {
    name: "Content Management Application (CMA)",
    summary:
      "Empower webmasters and market leaders to refresh copy, media, and navigation structures without relying on developers.",
    icon: Notepad
  },
  {
    name: "Content Delivery Application (CDA)",
    summary:
      "Transform approved updates into live pages instantly while maintaining responsive layouts and accessibility.",
    icon: Cloud
  },
  {
    name: "Extended marketing suite",
    summary:
      "Banner, email, and category managers keep campaigns, forums, and document hubs aligned with your growth goals.",
    icon: Tag
  }
];

const PRINCIPLES: Principle[] = [
  {
    name: "Customisable templates",
    description:
      "Leverage reusable blocks and skins to maintain brand consistency while tailoring layouts for products, testimonies, and market launches.",
    icon: Swatches
  },
  {
    name: "Access control",
    description:
      "Role-based permissions keep sensitive content restricted, allowing regional teams to contribute without risking core messaging.",
    icon: Keyhole
  },
  {
    name: "Integrations and automation",
    description:
      "Connect the CMS to CRMs, analytics, and AI assistants so every update improves personalisation and reporting.",
    icon: Plug
  },
  {
    name: "Flexible authoring",
    description:
      "Inline editors and scheduled publishing ensure news, trainings, and product launches hit the right audience at the right moment.",
    icon: Spline
  },
  {
    name: "Governed asset libraries",
    description:
      "Store photos, certificates, documents, and multimedia in versioned repositories that track who updated what and when.",
    icon: Cube
  },
  {
    name: "Scalable architecture",
    description:
      "Handle surges in traffic, multi-country rollouts, and disaster recovery with cloud-native deployments and proactive monitoring.",
    icon: Gear
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Content Management System";
  const description =
    "Discover how Cloud MLM Software’s CMS keeps marketing agile, compliant, and data-driven for multi-level marketing organisations.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/content-management-system", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type CmsPageProps = {
  params: { lang: SupportedLocale };
};

export default function CmsPage({ params }: CmsPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-lime-50 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(20,184,166,0.24),transparent_60%),radial-gradient(circle_at_82%_24%,rgba(132,204,22,0.22),transparent_60%),radial-gradient(circle_at_70%_78%,rgba(14,165,233,0.18),transparent_60%)]" />
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
                Platform operations · CMS excellence
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">Content management system</h1>
              <p className="text-lg text-slate-700">
                The original Cloud MLM Software article celebrated CMS flexibility, SEO readiness, and administrative control. This updated
                edition modernises that narrative for AI-assisted, multi-market organisations.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild className="bg-teal-600 text-white hover:bg-teal-500">
                  <Link href={demoHref}>
                    Explore CMS workspace
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-100">
                  <Link href={contactHref}>
                    Consult our CMS architects
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl shadow-teal-100">
              {METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-lime-100"
                >
                  <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-teal-600">
                    <metric.icon className="h-5 w-5 text-teal-500" aria-hidden />
                    {metric.label}
                  </div>
                  <p className="text-3xl font-semibold text-slate-900">{metric.value}</p>
                  <p className="mt-2 text-sm text-slate-600">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900">CMS pillars for modern MLM programmes</h2>
          <p className="mt-4 text-lg text-slate-600">
            Translate the original blog’s insights into practical guardrails that keep content agile, compliant, and inspiring.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-100"
            >
              <pillar.icon className="h-10 w-10 text-teal-500" aria-hidden />
              <h3 className="mt-6 text-xl font-semibold text-slate-900">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{pillar.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                {pillar.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-4 w-4 text-lime-400" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-lime-50 to-teal-50 p-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-slate-900">Core use cases for your content team</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Whether you are managing replicated websites or corporate hubs, these use cases capture the value of web-based CMS operations
                highlighted in the original post.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {USE_CASES.map((useCase) => (
                <div key={useCase.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <useCase.icon className="h-8 w-8 text-teal-500" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{useCase.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{useCase.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                CMS architecture
              </span>
              <h2 className="text-2xl font-semibold text-slate-900">Three modules that power your CMS</h2>
              <p className="text-sm text-slate-600">
                The CMA and CDA duo from the legacy article still matter—paired now with marketing extensions that automate every touchpoint.
              </p>
            </div>
            <div className="grid gap-4">
              {MODULES.map((module) => (
                <div key={module.name} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                  <div className="flex items-center gap-3">
                    <module.icon className="h-6 w-6 text-teal-500" aria-hidden />
                    <h3 className="text-lg font-semibold text-slate-900">{module.name}</h3>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{module.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-teal-200 bg-gradient-to-r from-teal-50 via-white to-lime-50 p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,300px),minmax(0,1fr)] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900">Principles for sustainable CMS operations</h2>
              <p className="text-sm text-slate-600">
                Implement these principles to maintain agility, data integrity, and brand consistency as your MLM business scales.
              </p>
              <Button asChild variant="outline" className="border-teal-300 text-teal-700 hover:bg-teal-100">
                <Link href={pricingHref}>
                  Assess CMS rollout services
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {PRINCIPLES.map((principle) => (
                <div key={principle.name} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <principle.icon className="h-7 w-7 text-teal-500" aria-hidden />
                  <h3 className="mt-3 text-base font-semibold text-slate-900">{principle.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-teal-200 bg-gradient-to-br from-teal-100 via-white to-lime-50 p-10 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">Ready to command your content with confidence?</h2>
            <p className="text-lg text-slate-600">
              Cloud MLM Software brings together governance, automation, and creativity so your CMS stays ahead of market and regulatory change.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-teal-600 text-white hover:bg-teal-500">
                <Link href={demoHref}>
                  Book a CMS strategy session
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-teal-300 text-teal-700 hover:bg-teal-100">
                <Link href={contactHref}>
                  Connect with our consultants
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
