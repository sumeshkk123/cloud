import type { Metadata } from "next";
import Link from "next/link";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  DownloadCloud,
  FileText,
  ShieldCheck
} from "lucide-react";

export const dynamic = "force-static";

type Stat = {
  label: string;
  value: string;
  detail: string;
};

type Category = {
  id: "product" | "compliance" | "enablement";
  title: string;
  description: string;
  documents: Array<{ name: string; href: string }>;
};

type WorkflowStep = {
  title: string;
  description: string;
};

type Faq = {
  question: string;
  answer: string;
};

const HERO_STATS: Stat[] = [
  {
    label: "Documents available",
    value: "1200+",
    detail: "Product, compliance, and enablement assets updated every quarter."
  },
  {
    label: "Languages covered",
    value: "18",
    detail: "Localized PDFs, decks, and templates for global teams."
  },
  {
    label: "Average refresh cadence",
    value: "30 updates",
    detail: "New or revised documents released each quarter."
  }
];

const CATEGORIES: Category[] = [
  {
    id: "product",
    title: "Product & platform",
    description: "Datasheets and architecture guides for Cloud MLM Software capabilities.",
    documents: [
      { name: "Platform overview", href: "/downloads/cloud-mlm-platform-overview.pdf" },
      { name: "Module catalogue", href: "/downloads/module-catalogue.pdf" }
    ]
  },
  {
    id: "compliance",
    title: "Compliance & governance",
    description: "Policy templates, security summaries, and regulatory briefings.",
    documents: [
      { name: "Compliance readiness pack", href: "/downloads/compliance-readiness-pack.pdf" },
      { name: "Security controls summary", href: "/downloads/security-controls.pdf" }
    ]
  },
  {
    id: "enablement",
    title: "Enablement & success",
    description: "Playbooks, ROI guides, and implementation checklists for your teams.",
    documents: [
      { name: "Executive ROI guide", href: "/downloads/executive-roi-guide.pdf" },
      { name: "Implementation playbook", href: "/downloads/implementation-playbook.pdf" }
    ]
  }
];

const WORKFLOW: WorkflowStep[] = [
  {
    title: "Discover",
    description: "Filter documents by product, region, and role to find the asset that fits your goal."
  },
  {
    title: "Collaborate",
    description: "Share links with stakeholders or request localized versions for new markets."
  },
  {
    title: "Action",
    description: "Use templates and checklists to accelerate launches, audits, and enablement."
  }
];

const FAQS: Faq[] = [
  {
    question: "How do I request a document that isn’t listed?",
    answer:
      "Submit a request through your customer success manager or the contact form. We usually respond within one business day."
  },
  {
    question: "Can documents be localized for my team?",
    answer:
      "Yes. Localisation requests trigger our translation workflow with reviewer approvals before publication."
  },
  {
    question: "Are these documents kept up to date?",
    answer:
      "Product, compliance, and success teams refresh assets every quarter or whenever major changes occur."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Cloud MLM Software Documents";
  const description =
    "Download product guides, compliance packs, and enablement playbooks for Cloud MLM Software.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/documents", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type DocumentsPageProps = {
  params: { lang: SupportedLocale };
};

export default function DocumentsPage({ params }: DocumentsPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-24 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(56,189,248,0.18),transparent_42%),radial-gradient(circle_at_88%_-10%,rgba(16,185,129,0.18),transparent_55%)]" />
        <div className="container space-y-12">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <DownloadCloud className="h-4 w-4" aria-hidden />
              Document library
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Access the latest Cloud MLM Software documents in one place.
            </h1>
            <p className="text-lg text-muted-foreground">
              Product datasheets, compliance packs, and enablement playbooks are updated regularly so your teams always work with approved guidance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Request additional assets
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <dl className="grid gap-6 md:grid-cols-3">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <dt className="text-sm font-medium text-muted-foreground">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-foreground">{stat.value}</dd>
                <p className="mt-2 text-xs text-muted-foreground">{stat.detail}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Document categories</h2>
          <p className="text-sm text-muted-foreground">
            Download the assets that support discovery, due diligence, and enablement across your organisation.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CATEGORIES.map((category) => {
            const Icon = category.id === "product" ? FileText : category.id === "compliance" ? ShieldCheck : DownloadCloud;
            return (
              <article key={category.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {category.documents.map((doc) => (
                    <li key={doc.name}>
                      <a className="inline-flex items-center gap-2 text-primary hover:underline" href={doc.href} target="_blank" rel="noopener noreferrer">
                        {doc.name}
                        <ArrowUpRight className="h-4 w-4" aria-hidden />
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How customers use the library</h2>
            <p className="text-sm text-muted-foreground">
              Start with the right document, collaborate with stakeholders, and turn guidance into action.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {WORKFLOW.map((step) => (
              <article key={step.title} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground">
            Answers for teams exploring Cloud MLM Software documentation.
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Need something specific?</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Let us know what you’re planning and we’ll assemble the right templates, guides, and compliance packs for your next initiative.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Contact the documentation team
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
