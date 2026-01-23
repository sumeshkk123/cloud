import type { Metadata } from "next";
import Link from "next/link";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles
} from "lucide-react";

export const dynamic = "force-static";

type Value = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

type Benefit = {
  title: string;
  description: string;
};

type Step = {
  step: string;
  title: string;
  description: string;
};

type FAQ = {
  question: string;
  answer: string;
};

const VALUES: Value[] = [
  {
    title: "Grow with mentorship",
    description: "Work alongside senior engineers, designers, and marketers who share feedback generously.",
    icon: Lightbulb
  },
  {
    title: "Be supported",
    description: "We keep workloads balanced, celebrate progress, and make sure you have time to recharge.",
    icon: HeartHandshake
  },
  {
    title: "Ship with quality",
    description: "Best practices, secure code, and thoughtful documentation guide the way we build.",
    icon: ShieldCheck
  }
];

const BENEFITS: Benefit[] = [
  {
    title: "Hybrid work flexibility",
    description: "Choose the mix of in-office collaboration at Kozhikode Cyberpark and remote focus days that works best for you."
  },
  {
    title: "Learning allowance",
    description: "Get access to courses, conferences, and certification reimbursements to keep your skills sharp."
  },
  {
    title: "Health & wellbeing",
    description: "Comprehensive medical coverage, wellness initiatives, and 24/7 support lines so you stay healthy."  
  },
  {
    title: "Career growth",
    description: "Clear progression paths, quarterly feedback sessions, and mentorship keep your growth on track."
  }
];

const HIRING_STEPS: Step[] = [
  {
    step: "01",
    title: "Share your resume",
    description: "Send us your CV, portfolio, or GitHub links with a quick note on what excites you about Bpract."
  },
  {
    step: "02",
    title: "Intro chat",
    description: "Meet with our talent team to discuss your experience, interests, location preferences, and timeline."
  },
  {
    step: "03",
    title: "Skills deep-dive",
    description: "We explore technical or domain skills with hands-on assessments or collaborative problem-solving sessions."
  },
  {
    step: "04",
    title: "Team conversation",
    description: "Talk with squad leads about how you collaborate, learn, and deliver great outcomes together."
  },
  {
    step: "05",
    title: "Offer & onboarding",
    description: "Receive a detailed offer, choose your start date, and get onboarded with mentors, resources, and a clear roadmap."
  }
];

const FAQS: FAQ[] = [
  {
    question: "How do I apply?",
    answer:
      "Email your resume, links, and a short introduction to [email protected]. We review every application and follow up within a few days."
  },
  {
    question: "Do you hire outside Kozhikode?",
    answer:
      "Yes. While many teammates work from our Kozhikode Cyberpark office, we support hybrid and remote roles across India and beyond."
  },
  {
    question: "What happens after I apply?",
    answer:
      "Our talent team schedules an intro chat to understand your goals, then we move through skills conversations, team interviews, and final offers."
  },
  {
    question: "Do you offer internships?",
    answer:
      "Absolutely. Bpract Academy runs internship and training programmes—reach out to learn about upcoming cohorts."
  }
];

const OPEN_ROLES = [
  {
    title: "Senior Full-Stack Engineer",
    location: "Kozhikode / Hybrid",
    description:
      "Build and scale Cloud MLM Software modules using modern JavaScript, API-first architectures, and secure coding practices.",
    href: "mailto:[email protected]?subject=Application:%20Senior%20Full-Stack%20Engineer"
  },
  {
    title: "Product Designer",
    location: "Remote (India)",
    description:
      "Craft intuitive MLM workflows, dashboards, and mobile experiences with research-backed design systems.",
    href: "mailto:[email protected]?subject=Application:%20Product%20Designer"
  },
  {
    title: "Digital Marketing Strategist",
    location: "Kozhikode / Remote",
    description:
      "Plan and execute omni-channel campaigns, content programmes, and automation that grow network marketing brands.",
    href: "mailto:[email protected]?subject=Application:%20Digital%20Marketing%20Strategist"
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Careers at Bpract Software Solutions";
  const description =
    "Explore careers at Bpract Software Solutions. Join the Cloud MLM Software team and grow with mentorship, hybrid flexibility, and industry-leading projects.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/company/careers", locale)
    }
  };
}

type CareersPageProps = {
  params: { lang: SupportedLocale };
};

export default function CareersPage({ params }: CareersPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="border-b border-border/60 bg-gradient-to-br from-emerald-50 via-white to-sky-50 py-24 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-4xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" aria-hidden />
              Careers at Bpract
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Join Cloud MLM Software and build tools that power global network marketing brands.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Bpract Software Solutions is home to builders who love solving complex problems, experimenting with new technology, and supporting each other. If you want to grow in a collaborative environment, we’d love to hear from you.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="mailto:[email protected]">
                  Email your resume
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="mailto:[email protected]">
                  Ask about internships
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="values" className="container space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          What it feels like to work here
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
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

      <section id="open-roles" className="container space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Open roles</h2>
        <p className="text-sm text-muted-foreground">
          Don’t see the right role? We’re always eager to meet curious, motivated people—send your resume and tell us how you’d like to contribute.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {OPEN_ROLES.map((role) => (
            <article key={role.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                <Briefcase className="h-4 w-4" aria-hidden />
                {role.location}
              </span>
              <h3 className="text-xl font-semibold text-foreground">{role.title}</h3>
              <p className="text-sm text-muted-foreground">{role.description}</p>
              <Button asChild variant="outline" className="mt-auto w-fit">
                <Link href={role.href}>
                  Apply now
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section id="benefits" className="container space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Why Bpract is a great place to grow</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {BENEFITS.map((benefit) => (
            <article key={benefit.title} className="rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="hiring-process" className="container space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Hiring process</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {HIRING_STEPS.map((step) => (
            <article key={step.step} className="relative overflow-hidden rounded-3xl border border-border/60 bg-muted/40 p-6 text-left shadow-sm">
              <span className="absolute left-6 top-6 text-4xl font-bold text-primary/30">{step.step}</span>
              <h3 className="mt-10 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="hiring-faq" className="container space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Hiring FAQ</h2>
        <div className="space-y-4">
          {FAQS.map((faq) => (
            <details key={faq.question} className="group rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition">
              <summary className="cursor-pointer list-none text-lg font-semibold text-foreground">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-sm text-primary transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="container flex flex-col items-center gap-6 rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-12 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to start your journey?</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Send your resume, portfolio, or GitHub link to [email protected] and tell us how you’d like to help shape Cloud MLM Software.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="mailto:[email protected]">
                Email the talent team
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={contactHref}>
                Connect with us
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
