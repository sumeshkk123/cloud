import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  ArrowSquareOut,
  Lightning,
  NotePencil,
  NewspaperClipping,
  ShareNetwork,
  TrendUp
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type Article = {
  title: string;
  excerpt: string;
  tags: string[];
  cta: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
};

const ARTICLES: Article[] = [
  {
    title: "Scaling PayPal onboarding for global distributors",
    excerpt:
      "Translate the WordPress archive promise—secure, fast, seamless—into an education series that removes friction for every market you serve.",
    tags: ["Onboarding", "Distributor CX", "Localization"],
    cta: "Plan onboarding sprint",
    href: "#onboarding",
    icon: NewspaperClipping
  },
  {
    title: "AI copilots for PayPal governance",
    excerpt:
      "Equip AI assistants and human analysts with shared playbooks that keep risk, compliance, and finance aligned across continents.",
    tags: ["AI enablement", "Compliance", "Risk"],
    cta: "Preview AI playbooks",
    href: "#ai-governance",
    icon: ShareNetwork
  },
  {
    title: "Campaign analytics for PayPal promotions",
    excerpt:
      "Leverage the custom demo and preset demo archives to run time-boxed campaigns, quantify impact, and inform leadership decisions.",
    tags: ["Growth", "Campaigns", "Analytics"],
    cta: "Design a growth experiment",
    href: "#campaigns",
    icon: TrendUp
  },
  {
    title: "Lightning-fast support rituals",
    excerpt:
      "Convert support tickets, e-wallet modules, and knowledge bases into quick-resolution rituals that uphold PayPal&apos;s brand promise.",
    tags: ["Support", "Operations", "Knowledge"],
    cta: "Refresh support rituals",
    href: "#support",
    icon: Lightning
  },
  {
    title: "Thought leadership studio for PayPal markets",
    excerpt:
      "Use the archive&apos;s global country list to craft insight stories for Spain, Sri Lanka, South Africa, and beyond.",
    tags: ["Content", "Leadership", "Global reach"],
    cta: "Launch a content drop",
    href: "#thought-leadership",
    icon: NotePencil
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "PayPal Insights Library – Page 4 | Cloud MLM Software";
  const description =
    "Continue your PayPal payment gateway journey with curated articles, AI-ready playbooks, and global growth ideas from Cloud MLM Software.";

  return {
    title,
    description,
    keywords: [
      "PayPal insights",
      "PayPal payment gateway articles",
      "Cloud MLM Software PayPal resources",
      "PayPal AI enablement",
      "global payment strategy"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/paypal/page/4", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PayPalArchivePageProps = {
  params: { lang: SupportedLocale };
};

export default function PayPalArchivePage({ params }: PayPalArchivePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-slate-50 to-sky-100/30 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.24),_transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.2),_transparent_45%)] dark:bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.18),_transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.22),_transparent_45%)]" />
        <div className="container relative space-y-8">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700 dark:border-sky-200/40 dark:bg-white/10 dark:text-sky-100">
              PayPal insights — page 4
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              The evolving Playbook for PayPal inside Cloud MLM Software.
            </h1>
            <p className="max-w-2xl text-base text-slate-700 dark:text-white/80">
              The WordPress archive continues here: curated analysis, AI strategies, and expansion prompts that build on the
              secure, fast, seamless DNA preserved across earlier pages.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Brief our PayPal editors
                <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-sky-500/40 text-sky-700 hover:bg-sky-500/10 dark:border-sky-200/40 dark:text-sky-100 dark:hover:bg-sky-200/10"
            >
              <Link href={demoHref}>
                Watch insights demo
                <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Featured articles from the archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            Each article below modernises the legacy PayPal archive into actionable guidance for today&apos;s leadership, growth,
            and operations teams.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {ARTICLES.map((article) => {
            const Icon = article.icon;
            return (
              <article
                key={article.title}
                className="flex h-full flex-col gap-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-700 dark:bg-sky-500/20 dark:text-sky-100">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{article.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-white/70">{article.excerpt}</p>
                  <ul className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-200">
                    {article.tags.map((tag) => (
                      <li key={tag} className="rounded-full border border-sky-200 bg-sky-100 px-3 py-1 dark:border-sky-200/40 dark:bg-white/10">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <Button
                    asChild
                    variant="secondary"
                    className="bg-sky-600 text-white hover:bg-sky-700 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
                  >
                    <Link href={article.href}>
                      {article.cta}
                      <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                    </Link>
                  </Button>
                  <ArrowSquareOut className="h-5 w-5 text-sky-600 dark:text-sky-200" aria-hidden />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-sky-200/60 bg-gradient-to-br from-white via-sky-50 to-white p-10 shadow-lg dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-sky-950/40 dark:to-slate-950">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Need a bespoke PayPal editorial sprint?
              </h2>
              <p className="text-base text-slate-600 dark:text-white/70">
                We repackage legacy content, run fresh interviews, and feed AI copilots so every stakeholder receives on-brand
                PayPal guidance.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Book editorial workshop
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-sky-500/40 text-sky-700 hover:bg-sky-500/10 dark:border-sky-200/40 dark:text-sky-100 dark:hover:bg-sky-200/10"
              >
                <Link href={demoHref}>
                  Explore insights demo
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
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
