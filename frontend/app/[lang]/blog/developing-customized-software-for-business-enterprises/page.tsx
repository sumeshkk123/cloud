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
  ClipboardCheck,
  Cog,
  Layers,
  LayoutGrid,
  LifeBuoy,
  ListChecks,
  Rocket,
  Users,
  Workflow
} from "lucide-react";
import {
  Brain,
  ChartBar,
  ChartLineUp,
  Cube,
  Handshake,
  Notebook,
  ShieldCheck
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type ValuePoint = {
  title: string;
  description: string;
  icon: IconType;
};

type Step = {
  title: string;
  summary: string;
  deliverables: string[];
  icon: IconType;
};

type Enablement = {
  title: string;
  detail: string;
  icon: IconType;
};

const METRICS: Metric[] = [
  {
    label: "Projects delivered",
    value: "850+",
    description: "Custom builds shipped by Cloud MLM Software across enterprise and scale-ups.",
    icon: Rocket
  },
  {
    label: "Average discovery duration",
    value: "3 weeks",
    description: "Time spent gathering requirements, mapping integrations, and aligning stakeholders.",
    icon: Notebook
  },
  {
    label: "Client satisfaction",
    value: "4.8 / 5",
    description: "Post-launch sentiment measured across support, quality, and collaboration.",
    icon: ChartBar
  }
];

const VALUE_POINTS: ValuePoint[] = [
  {
    title: "Strategic alignment",
    description:
      "Custom software keeps your infrastructure tuned to business goals—whether you’re scaling an MLM network or modernising legacy operations.",
    icon: Brain
  },
  {
    title: "Operational resilience",
    description:
      "Tailored systems reduce manual work, integrate with existing stacks, and adapt faster to market or regulatory change.",
    icon: Workflow
  },
  {
    title: "Growth readiness",
    description:
      "Purpose-built platforms let teams experiment, launch new markets, and refine compensation or commerce experiences without disruption.",
    icon: ChartLineUp
  }
];

const STEPS: Step[] = [
  {
    title: "1. Collect requirements",
    summary:
      "Facilitated workshops capture business context, user personas, technical constraints, and desired outcomes—mirroring the article’s call for deep discovery.",
    deliverables: [
      "Stakeholder interviews and process walkthroughs",
      "Preliminary system architecture sketches",
      "Risk and dependency log"
    ],
    icon: Users
  },
  {
    title: "2. Analyse and plan",
    summary:
      "Draft solution blueprints, prioritise features, and model integration pathways. Transparency keeps everyone aligned before code begins.",
    deliverables: [
      "Functional specification and user stories",
      "Integration catalogue with API requirements",
      "Implementation roadmap with milestones"
    ],
    icon: ClipboardCheck
  },
  {
    title: "3. Finalise scope & contract",
    summary:
      "Confirm scope, teams, timelines, and service levels. Contracts codify responsibilities, accelerating approvals and budget planning.",
    deliverables: [
      "Signed statement of work with acceptance criteria",
      "Resource plan for development, QA, DevOps, and success",
      "Change management playbook"
    ],
    icon: Handshake
  },
  {
    title: "4. Assemble squads",
    summary:
      "Specialist teams handle application development, CMS, e-commerce, analytics, and infrastructure in parallel—exactly as the original article outlined.",
    deliverables: [
      "Cross-functional squad charters",
      "Tooling setup for code, design, and collaboration",
      "Definition of done for each workstream"
    ],
    icon: Layers
  },
  {
    title: "5. Execute in phases",
    summary:
      "Major capabilities land in phase one, with subsequent waves refining integrations, automation, and optimisation—keeping value visible throughout.",
    deliverables: [
      "Sprint plans with demo cadence",
      "Integrated test suites and QA reports",
      "Stakeholder reviews and sign-off checkpoints"
    ],
    icon: ListChecks
  },
  {
    title: "6. Launch and support",
    summary:
      "Development transitions into monitoring, enhancement, and 24/7 support. Clients always have a team on call for training or incident response.",
    deliverables: [
      "Runbooks, documentation, and knowledge base articles",
      "Hypercare schedule with dedicated support engineers",
      "Continuous improvement backlog"
    ],
    icon: LifeBuoy
  }
];

const ENABLEMENT: Enablement[] = [
  {
    title: "Design systems & prototyping",
    detail: "Ensure every interface feels cohesive, accessible, and conversion-focused before development begins.",
    icon: LayoutGrid
  },
  {
    title: "Security & compliance readiness",
    detail: "Embed privacy-by-design, role-based access, and audit logging to satisfy enterprise stakeholders.",
    icon: ShieldCheck
  },
  {
    title: "Data migration & integration",
    detail: "Plan how legacy data, payment gateways, and third-party services will connect to the new platform.",
    icon: Cube
  },
  {
    title: "Change management",
    detail: "Train teams, create release notes, and manage communications so adoption stays smooth.",
    icon: Cog
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Developing Customized Software for Business Enterprises";
  const description =
    "Follow Cloud MLM Software’s end-to-end approach for designing, building, and supporting bespoke enterprise software.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/developing-customized-software-for-business-enterprises", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type CustomSoftwarePageProps = {
  params: { lang: SupportedLocale };
};

export default function CustomSoftwarePage({ params }: CustomSoftwarePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(59,130,246,0.25),transparent_60%),radial-gradient(circle_at_82%_22%,rgba(16,185,129,0.24),transparent_60%),radial-gradient(circle_at_70%_78%,rgba(99,102,241,0.18),transparent_60%)]" />
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                Product delivery · Enterprise build
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                Developing customised software for business enterprises
              </h1>
              <p className="text-lg text-slate-700">
                Your infrastructure should evolve with your strategy. Building on our original article, this guide reveals how Cloud MLM Software
                plans, executes, and supports bespoke platforms that keep enterprises competitive.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild className="bg-blue-600 text-white hover:bg-blue-500">
                  <Link href={demoHref}>
                    Explore delivery playbooks
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-100">
                  <Link href={contactHref}>
                    Schedule a discovery call
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl shadow-blue-100">
              {METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-100"
                >
                  <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-blue-600">
                    <metric.icon className="h-5 w-5 text-blue-500" aria-hidden />
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
          <h2 className="text-3xl font-semibold text-slate-900">Why custom software accelerates enterprises</h2>
          <p className="mt-4 text-lg text-slate-600">
            Increase efficiency, resilience, and growth by tailoring platforms to your organisation rather than forcing teams into rigid tools.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {VALUE_POINTS.map((point) => (
            <article
              key={point.title}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100"
            >
              <point.icon className="h-10 w-10 text-blue-500" aria-hidden />
              <h3 className="mt-6 text-xl font-semibold text-slate-900">{point.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{point.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-emerald-50 to-blue-50 p-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-slate-900">Our six-phase delivery framework</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Each phase mirrors the process described in the original blog—now augmented with modern deliverables that keep teams confident every step
                of the way.
              </p>
              <Button asChild variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                <Link href={pricingHref}>
                  Review engagement models
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {STEPS.map((step) => (
                <div key={step.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <step.icon className="h-8 w-8 text-blue-500" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{step.summary}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {step.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <ArrowRight className="mt-1 h-4 w-4 text-emerald-400" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
                Enablement toolkit
              </span>
              <h2 className="text-2xl font-semibold text-slate-900">Supporting capabilities for a smooth launch</h2>
              <p className="text-sm text-slate-600">
                Beyond coding, these enablers keep projects resilient—meeting the article’s call for planning, team coordination, and support readiness.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {ENABLEMENT.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                  <div className="flex items-center gap-3">
                    <item.icon className="h-6 w-6 text-blue-500" aria-hidden />
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-100 via-white to-emerald-50 p-10 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">Let’s build what your strategy demands</h2>
            <p className="text-lg text-slate-600">
              Cloud MLM Software partners with enterprises to design, deliver, and optimise customised platforms—from compensation engines to customer
              portals and beyond.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-blue-600 text-white hover:bg-blue-500">
                <Link href={demoHref}>
                  Request a tailored walkthrough
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                <Link href={contactHref}>
                  Connect with delivery experts
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
