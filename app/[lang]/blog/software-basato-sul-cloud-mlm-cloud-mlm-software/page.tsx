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
  Cloud,
  Cpu,
  Database,
  Gauge,
  Layers,
  ShieldCheck
} from "lucide-react";
import { CloudArrowUp, GlobeHemisphereEast, Lightning } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

const INTRO_PARAGRAPH =
  "C loud MLM based software attracts new investors with its high scalability and security capabilities. The digital world has really gone to Cloud, to make things faster and safer. A recent study shows that cloud-based MLM software will dominate over other MLM software technologies in the coming days, due to its ability to sign up, and secure data on backed-up cloud services . Using the latest technologies to create and integrate cloud-based services, Cloud MLM software has proven that technology is a success and is the future of affiliate marketing software.";

const QUESTION_PARAGRAPHS = [
  "Yes, you might ask “Why to use cloud services for our project when there are several traditional ways to continue?”",
  "Let’s see why cloud-based MLM software is fashionable these days and what are the differences between fashionable and traditional ways."
];

type Feature = {
  title: string;
  summary: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

const FEATURES: Feature[] = [
  {
    title: "Highest level of performance",
    summary:
      "Highest level of performance As cloud technology relies on cloud computing it delivers high performance that ensures multiple systems.",
    description: "As cloud technology relies on cloud computing it delivers high performance that ensures multiple systems.",
    icon: Gauge
  },
  {
    title: "Redundant data storage​",
    summary:
      "Redundant data storage​ Do not worry about losing your data, even one of the disks can not load the data, will take advantage of another system, so the uptime is guaranteed 24X7.",
    description:
      "Do not worry about losing your data, even one of the disks can not load the data, will take advantage of another system, so the uptime is guaranteed 24X7.",
    icon: Database
  },
  {
    title: "Dedicated resources for the software structure​",
    summary:
      "Dedicated resources for the software structure​ There is no sharing of resources sharing with others, just for you. This includes RAM and CPU and other resources according to the plans.",
    description:
      "There is no sharing of resources sharing with others, just for you. This includes RAM and CPU and other resources according to the plans.",
    icon: Cpu
  },
  {
    title: "Redundant and distributed hardware and software​",
    summary:
      "Redundant and distributed hardware and software​ There will be no flaws in the software and hardware features that could happen in traditional systems. Because the cloud functions as a single system but with multiple physical systems, the data and hardware are interconnected to ensure that there are no hardware or software failures.",
    description:
      "There will be no flaws in the software and hardware features that could happen in traditional systems. Because the cloud functions as a single system but with multiple physical systems, the data and hardware are interconnected to ensure that there are no hardware or software failures.",
    icon: Layers
  },
  {
    title: "Pay for what you use",
    summary:
      "Pay for what you use Start from simple plans to the biggest ones as your success and money comes. Scale your use and pay for what you use.",
    description: "Start from simple plans to the biggest ones as your success and money comes. Scale your use and pay for what you use.",
    icon: Lightning
  },
  {
    title: "Security",
    summary:
      "Security The main attractive feature of cloud hosting is that your insurance and sessions are isolated. The data is not lost and does not share the system with multiple hosting accounts. The cloud-based MLM software is formed on the basis that it avoids data loss and high-level security layers. Developed and scaled by the largest number of tests and modifications, cloud-based MLM software gets its brand at the highest level of its type.",
    description:
      "The main attractive feature of cloud hosting is that your insurance and sessions are isolated. The data is not lost and does not share the system with multiple hosting accounts. The cloud-based MLM software is formed on the basis that it avoids data loss and high-level security layers. Developed and scaled by the largest number of tests and modifications, cloud-based MLM software gets its brand at the highest level of its type.",
    icon: ShieldCheck
  }
];

const CTA_HEADING =
  "If you want to try out the advantage of using the cloud-based MLM software , send us an email and we will get back to you shortly.";

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
  const title = "Software Basato sul Cloud MLM - Cloud MLM Software";
  const description =
    "Explore why cloud-based MLM software delivers performance, redundancy, and security advantages over traditional deployments.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/software-basato-sul-cloud-mlm-cloud-mlm-software", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type CloudBlogPageProps = {
  params: { lang: SupportedLocale };
};

export default function SoftwareBasatoSulCloudMlmCloudMlmSoftwarePage({ params }: CloudBlogPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-cyan-100 shadow-2xl dark:border-sky-500/30 dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.25),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.16),transparent_65%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.18),transparent_72%)]" />
        <div className="relative grid gap-10 px-6 py-20 sm:px-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:px-20">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700 dark:border-sky-500/40 dark:bg-slate-900/70 dark:text-sky-200">
              <Cloud className="h-4 w-4" aria-hidden />
              Cloud-native advantage
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              Software basato sul Cloud MLM? Ecco perché il futuro è già qui
            </h1>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">{INTRO_PARAGRAPH}</p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-sky-600 px-6 py-2 text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400"
              >
                <Link href={contactHref}>
                  Plan a cloud migration
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-sky-200 bg-white/80 px-6 py-2 text-sky-700 transition hover:bg-sky-100 dark:border-sky-500/40 dark:bg-slate-900/60 dark:text-sky-200 dark:hover:bg-slate-800"
              >
                <Link href={demoHref}>View SaaS demo</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/70 bg-white/70 p-8 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-slate-900/70">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Why use services in the cloud?</p>
            <div className="space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {QUESTION_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-6 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex h-full flex-col justify-between rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="space-y-4">
                <feature.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{feature.title}</h2>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{feature.summary}</p>
                <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">{feature.description}</p>
              </div>
              <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400" />
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-100 via-white to-sky-50 p-8 shadow-xl dark:border-sky-500/40 dark:from-sky-900/40 dark:via-slate-900 dark:to-slate-950">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700 dark:border-sky-500/40 dark:bg-slate-900/70 dark:text-sky-200">
                <CloudArrowUp className="h-4 w-4" aria-hidden />
                Always-ready infrastructure
              </span>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">{CTA_HEADING}</p>
            </div>
            <Button
              asChild
              className="rounded-full bg-sky-600 px-6 py-2 text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400"
            >
              <Link href={contactHref}>
                Email Cloud MLM Software
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">About The Author</p>
          <p className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{AUTHOR.name}</p>
          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{AUTHOR.bio}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1 dark:border-slate-700 dark:bg-slate-900">
              <GlobeHemisphereEast className="h-4 w-4" aria-hidden />
              Global uptime
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1 dark:border-slate-700 dark:bg-slate-900">
              <ShieldCheck className="h-4 w-4" aria-hidden />
              Enterprise security
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

