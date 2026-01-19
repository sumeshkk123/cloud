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
  Camera,
  HeartHandshake,
  Palette,
  Sparkles,
  SwatchBook,
  Target,
  Wand2,
  Workflow
} from "lucide-react";
import { PaintBrushBroad } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Principle = {
  title: string;
  description: string;
  icon: IconType;
};

type Feature = {
  title: string;
  points: string[];
};

type Step = {
  name: string;
  description: string;
  deliverable: string;
};

type ServiceType = {
  title: string;
  description: string;
};

const DESIGN_PRINCIPLES: Principle[] = [
  {
    title: "Story-driven visuals",
    description:
      "Capture your brand narrative with layouts, imagery, and typography that convey leadership and trust.",
    icon: Camera
  },
  {
    title: "Experience without friction",
    description:
      "Optimise navigation, accessibility, and speed so visitors and distributors can act effortlessly across devices.",
    icon: Sparkles
  },
  {
    title: "Conversion-first mindset",
    description:
      "Align design, content, and automation to move audiences from awareness to enrolment and repeat purchases.",
    icon: Target
  },
  {
    title: "Collaboration at every step",
    description:
      "Co-create with your marketing, product, and compliance teams to ensure every screen delivers on stakeholder goals.",
    icon: HeartHandshake
  }
];

const SIGNATURE_FEATURES: Feature[] = [
  {
    title: "Responsive design excellence",
    points: [
      "Adaptive layouts tuned for desktop, mobile, and distributor apps.",
      "Design tokens and component libraries to accelerate new pages.",
      "High-performing imagery pipelines with automated optimisation."
    ]
  },
  {
    title: "Planning & wireframing discipline",
    points: [
      "Workshops, mood boards, and interactive prototypes to align vision.",
      "Information architecture shaped by customer and promoter research.",
      "UX testing loops to validate flows before development begins."
    ]
  },
  {
    title: "Performance-ready delivery",
    points: [
      "Structured page templates with SEO & AIO metadata baked in.",
      "Storytelling modules tailored to product launches and campaigns.",
      "Design QA and documentation that make handoffs effortless."
    ]
  }
];

const DESIGN_PROCESS: Step[] = [
  {
    name: "Discover & ideate",
    description:
      "Align on goals, audiences, and differentiators while gathering brand assets, analytics, and inspiration.",
    deliverable: "Creative brief & mood boards"
  },
  {
    name: "Prototype & iterate",
    description:
      "Translate insights into wireframes and high-fidelity concepts, validating with stakeholders and pilot users.",
    deliverable: "Interactive prototypes & style guide"
  },
  {
    name: "Launch & evolve",
    description:
      "Partner with engineers to implement pixel-perfect designs, then monitor engagement to prioritise enhancements.",
    deliverable: "Design system & optimisation roadmap"
  }
];

const SERVICE_TYPES: ServiceType[] = [
  {
    title: "Static & corporate sites",
    description: "Polished branding hubs communicating your mission, leadership, and compliance posture."
  },
  {
    title: "Dynamic, CMS-driven sites",
    description: "Headless and multi-language experiences updated in real time by marketing and field teams."
  },
  {
    title: "E-commerce storefronts",
    description: "Optimised product storytelling and checkout flows that sync with Cloud MLM Software automation."
  },
  {
    title: "Landing pages & funnels",
    description: "High-impact campaign pages, calculators, and enrolment journeys engineered to convert."
  },
  {
    title: "Redesign & refresh programmes",
    description: "Modernise legacy sites with refreshed UI, accessibility upgrades, and measurable performance gains."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Website Designing Services | Cloud MLM Software";
  const description =
    "Design responsive, high-performing websites that elevate your MLM brand. Cloud MLM Software crafts story-driven experiences with modern visuals, conversion optimisation, and ongoing evolution.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/services/website-designing", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type WebsiteDesigningPageProps = {
  params: { lang: SupportedLocale };
};

export default function WebsiteDesigningPage({ params }: WebsiteDesigningPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const servicesHref = buildLocalizedPath("/services", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/50 bg-gradient-to-br from-white via-rose-50 to-blue-50 px-6 py-20 shadow-sm dark:from-slate-950 dark:via-slate-950 dark:to-blue-950 sm:px-12">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_10%,rgba(236,72,153,0.18),transparent_45%),radial-gradient(circle_at_80%_12%,rgba(59,130,246,0.16),transparent_48%),radial-gradient(circle_at_55%_85%,rgba(244,114,182,0.12),transparent_60%)]" />
        <div className="mx-auto grid max-w-5xl gap-10 text-center">
          <div className="space-y-6">
            <span className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              Design-led growth partner
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Elevate your digital presence with immersive, high-performing design.
            </h1>
            <p className="mx-auto max-w-3xl text-base text-muted-foreground">
              Cloud MLM Software crafts visually stunning, conversion-focused websites for MLM leaders. We blend research,
              creativity, and technical rigour so every pixel advances your brand story and drives measurable results.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Book a design consultation
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={servicesHref}>
                View all services
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Design principles that put your audience first
          </h2>
          <p className="text-sm text-muted-foreground">
            From first impression to final conversion, every element is purposeful—rooted in data, storytelling, and the
            needs of your customers and promoters.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {DESIGN_PRINCIPLES.map((principle) => {
            const Icon = principle.icon;
            return (
              <article
                key={principle.title}
                className="flex gap-4 rounded-3xl border border-border/40 bg-white/90 p-6 shadow-sm dark:bg-slate-950/75"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground">{principle.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
          <aside className="space-y-6 rounded-3xl border border-border/40 bg-white/80 p-6 shadow-sm dark:bg-slate-950/75">
            <div className="flex items-center gap-3">
              <SwatchBook className="h-6 w-6 text-primary" aria-hidden />
              <h2 className="text-xl font-semibold text-foreground">What sets our design team apart</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              We move beyond templates—tailoring design systems that express your unique value proposition while staying
              easy to evolve.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Palette className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Brand guardianship from colour science to content tone and motion.</span>
              </li>
              <li className="flex items-start gap-3">
                <Workflow className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Seamless collaboration with your developers, marketers, and leadership teams.</span>
              </li>
              <li className="flex items-start gap-3">
                <Wand2 className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Creative experimentation backed by analytics, user testing, and AI-driven insights.</span>
              </li>
            </ul>
            <Button asChild size="lg" variant="secondary">
              <Link href={contactHref}>
                Request a design audit
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
          <div className="grid gap-6">
            {SIGNATURE_FEATURES.map((feature) => (
              <article key={feature.title} className="rounded-3xl border border-border/40 bg-white/90 p-8 shadow-sm dark:bg-slate-950/75">
                <div className="flex items-center gap-3">
                  <PaintBrushBroad className="h-6 w-6 text-primary" aria-hidden />
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Our collaborative design process
          </h2>
          <p className="text-sm text-muted-foreground">
            Transparency and iteration guarantee the final experience resonates with every audience segment.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {DESIGN_PROCESS.map((step, index) => (
            <article
              key={step.name}
              className="relative flex h-full flex-col gap-4 rounded-3xl border border-border/40 bg-white/90 p-6 shadow-sm dark:bg-slate-950/75"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-lg font-semibold text-primary">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold text-foreground">{step.name}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Deliverable: {step.deliverable}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Designing for every use case
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
            Whether you need a new build, a refresh, or campaign-specific assets, our team delivers polished visuals that
            perform.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {SERVICE_TYPES.map((service) => (
            <article
              key={service.title}
              className="flex h-full flex-col gap-3 rounded-3xl border border-border/40 bg-white/90 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:bg-slate-950/75"
            >
              <h3 className="text-base font-semibold text-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container overflow-hidden rounded-3xl border border-border/50 bg-slate-900 text-white shadow-sm dark:border-slate-800">
        <div className="grid gap-10 px-6 py-16 sm:px-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Let’s craft the next chapter of your brand.
            </h2>
            <p className="text-sm text-slate-200">
              Partner with our creative strategists and designers to build a website that attracts, educates, and converts
              while showcasing your authority in the MLM industry.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="default" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link href={contactHref}>
                  Start with a creative workshop
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10">
                <Link href={servicesHref}>
                  Review service catalogue
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-4 rounded-3xl border border-white/20 bg-white/10 p-6">
            <div className="flex items-center gap-3">
              <PaintBrushBroad className="h-6 w-6 text-white" aria-hidden />
              <h3 className="text-lg font-semibold">Design system guardians</h3>
            </div>
            <p className="text-sm text-slate-100">
              We maintain component libraries, brand guidelines, and collaboration rituals so your teams can iterate with
              confidence long after launch.
            </p>
          </aside>
        </div>
      </section>
    </div>
  );
}
