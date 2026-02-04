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
  Headset,
  LifeBuoy,
  ShieldCheck,
  Gauge,
  Workflow
} from "lucide-react";

export const dynamic = "force-static";

const PILLARS = [
  {
    title: "Security",
    description:
      "There are many MLM Software available in the market now, but the real fact is that many of those software are vulnerable to people with some brain. What if there is still SQL injection that can be done within a software? too risky right? but the thing is, there are software with such vulnerabilities still open. Before buying an MLM Software , Choose the best. Cloud MLM software is version managed and tested before its all releases and we have a bug tracking system.",
    icon: ShieldCheck
  },
  {
    title: "Scalability",
    description:
      "Always choose highly scalable software. Being a small network, with less members you may not find any issues with your MLM Software. But when your network grows, and resources are used than the normal, if you find that your application is too slow, or damaged, that would be a pain. Always choose high-quality, framework-managed software. Cloud MLM Software is built-in LARAVEL, a framework that is highly scalable, and with a high rate of performance.",
    icon: Workflow
  },
  {
    title: "Speed",
    description:
      "Speed matters! Think you are a visitor/user of your MLM Software, and it takes much time to load. You will be extremely dissatisfied right? So Speed is an essential thing that should be included in the making of MLM Software. There might be a large number of scripts and files to be received by a web browser, and MLM Software should be processing it away it gets compressed, minified, and gzipped before it sends to the browser. Cloud MLM Software makes it the fastest loading time for your software. We have gathered the best techniques and ideas to bring up a much faster MLM software than the traditional ones.",
    icon: Gauge
  },
  {
    title: "Support",
    description:
      "An MLM software with no support, it should be rejected. because managing MLM Software requires some technical knowledge and consultation for plans and software management. Without proper support and care your MLM business may fall behind. Choose MLM Software with support. Support is an essential thing for MLM Software. Cloud MLM Software team works in a basis that our customers should be treated the way they wish. Our 24X7 support team will be assisting you throughout the project development and after launching the software for 6 months.",
    icon: Headset
  }
];

const CONCLUSION_PARAGRAPH =
  "When selecting MLM software for your company remember to prioritize features like scalability, customization, and security. Evaluate the service provider’s reliability, service support and the integration capabilities. Its recommended that the software aligns your business model and has an user friendly interface. A thorough MLM Software demo and clear pricing structure are essential to make an informed decision that will support your business growth and success in the competitive MLM landscape.";

const AUTHOR = {
  name: "Experienced Research Analyst",
  bio: "Experienced Research Analyst with in-depth knowledge of the MLM industry, including emerging trends and innovative strategies. Passionate about utilizing technology to drive growth and optimize business processes. Adept at analyzing market dynamics, delivering actionable insights, and staying ahead of industry developments."
};

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Things to Remember When Choosing MLM Software for Your Business";
  const description =
    "Review the must-have qualities—security, scalability, speed, and support—before selecting MLM software so your business scales safely.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/things-to-remember-when-choosing-mlm-software-for-your-business", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ThingsToRememberPageProps = {
  params: { lang: SupportedLocale };
};

export default function ThingsToRememberWhenChoosingMlmSoftwarePage({ params }: ThingsToRememberPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-100 via-white to-slate-100 shadow-2xl dark:border-emerald-500/40 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.24),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(148,163,184,0.28),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_65%),radial-gradient(circle_at_bottom_right,rgba(148,163,184,0.16),transparent_70%)]" />
        <div className="relative grid gap-12 px-6 py-20 sm:px-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] xl:px-20">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:border-emerald-500/40 dark:bg-slate-900/70 dark:text-emerald-200">
              <LifeBuoy className="h-4 w-4" aria-hidden />
              Buyer checklist
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              Things to remember when choosing MLM software for your business
            </h1>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Before you sign on the dotted line, scrutinize the four dimensions that keep network marketing platforms resilient—security,
              scalability, speed, and support.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-emerald-600 px-6 py-2 text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400"
              >
                <Link href={contactHref}>
                  Connect with experts
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-emerald-200 bg-white/80 px-6 py-2 text-emerald-700 transition hover:bg-emerald-100 dark:border-emerald-500/40 dark:bg-slate-900/60 dark:text-emerald-200 dark:hover:bg-slate-800"
              >
                <Link href={demoHref}>Launch free demo</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-5 rounded-3xl border border-white/70 bg-white/80 p-8 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-slate-900/70">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Why due diligence matters</p>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              Vulnerabilities, sluggish performance, and limited support can undo a promising MLM launch. Use this checklist to evaluate vendors
              before you commit.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-6 lg:grid-cols-2">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="flex h-full flex-col justify-between rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="space-y-4">
                <pillar.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{pillar.title}</h2>
                <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">{pillar.description}</p>
              </div>
              <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-400 to-slate-400" />
            </div>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-100 via-white to-emerald-50 p-8 shadow-xl dark:border-emerald-500/40 dark:from-emerald-900/40 dark:via-slate-900 dark:to-slate-950">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Conclusion</h2>
          <p className="mt-4 text-sm leading-6 text-slate-700 dark:text-slate-200">{CONCLUSION_PARAGRAPH}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-8 shadow-xl dark:border-slate-700 dark:bg-slate-900/70">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">About The Author</p>
          <p className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{AUTHOR.name}</p>
          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{AUTHOR.bio}</p>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

