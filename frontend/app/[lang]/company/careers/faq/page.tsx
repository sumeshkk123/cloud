import type { Metadata } from "next";
import Link from "next/link";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";

export const dynamic = "force-static";

type FAQ = {
  question: string;
  answer: string;
};

type ResourceLink = {
  label: string;
  href: string;
};

const FAQS: FAQ[] = [
  {
    question: "How do I apply for a role at Bpract?",
    answer:
      "Email your resume, portfolio or GitHub links, and a short intro to [email protected]. Tell us which role you’re interested in and how you hope to contribute."
  },
  {
    question: "Do you support remote or hybrid work?",
    answer:
      "Yes. Many teammates collaborate from our Kozhikode Cyberpark office, and we also support hybrid and remote roles across India and other regions."
  },
  {
    question: "What is the interview process like?",
    answer:
      "After you apply, our talent team schedules a short introduction call to understand your goals. From there, we run skills conversations, collaborative exercises, and team interviews before extending offers."
  },
  {
    question: "Do you hire interns or entry-level talent?",
    answer:
      "Absolutely. Bpract Academy hosts training and internship cohorts. Email [email protected] to learn about upcoming opportunities."
  },
  {
    question: "Which tools and technologies will I use?",
    answer:
      "Teams work with modern JavaScript, TypeScript, Next.js, React Native, Laravel, automation platforms, and analytics stacks—depending on your discipline. We keep tooling current and reliable."
  },
  {
    question: "What benefits does Bpract provide?",
    answer:
      "We offer hybrid flexibility, learning allowances, health coverage, mentorship, and clear growth plans so you can build a fulfilling career while keeping life balanced."
  },
  {
    question: "How long does the hiring process take?",
    answer:
      "Most candidates complete the interview process within two to three weeks. We communicate timelines clearly at each step and move faster when needed."
  },
  {
    question: "Where can I learn more about company culture?",
    answer:
      "Visit /company/about to explore values, goals, and how we deliver Cloud MLM Software—then follow up with our talent team for specifics."
  }
];

const RESOURCE_LINKS: ResourceLink[] = [
  { label: "View open roles", href: "/company/careers#open-roles" },
  { label: "Life at Bpract", href: "/company/culture" },
  { label: "Our story", href: "/company/about" },
  { label: "Talk to the talent team", href: "mailto:[email protected]" }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Careers FAQ | Bpract Software Solutions";
  const description =
    "Find answers about working at Bpract Software Solutions: application process, remote options, benefits, and internships."
  ;

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/company/careers/faq", locale)
    }
  };
}

type CareersFaqPageProps = {
  params: { lang: SupportedLocale };
};

export default function CareersFaqPage({ params }: CareersFaqPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="border-b border-border/60 bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-24 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" aria-hidden />
              Careers FAQ
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Answers to common questions about joining Bpract Software Solutions.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Still curious after reading? Reach out to our talent team—they’re happy to guide you through the next steps.
            </p>
          </div>
        </div>
      </section>

      <section className="container space-y-6">
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

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Next steps
        </h2>
        <ul className="grid gap-4 text-sm text-muted-foreground md:grid-cols-2">
          {RESOURCE_LINKS.map((resource) => (
            <li key={resource.label} className="flex items-start gap-2 rounded-3xl border border-border/60 bg-background p-4 shadow-sm">
              <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
              <Link
                href={resource.href}
                target={resource.href.startsWith("http") ? "_blank" : undefined}
                rel={resource.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="transition hover:text-primary"
              >
                {resource.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="py-12">
        <div className="container flex flex-col items-center gap-6 rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-12 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Need a different answer?</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Email [email protected] or send us a message—our talent coordinators will respond quickly and help you plan the next step.
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
                Message us
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
