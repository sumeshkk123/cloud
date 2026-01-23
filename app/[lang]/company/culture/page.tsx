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
  HeartHandshake,
  Lightbulb,
  Sparkles,
  Users
} from "lucide-react";

export const dynamic = "force-static";

type Pillar = {
  title: string;
  description: string;
};

type Ritual = {
  title: string;
  description: string;
};

type WorkspaceHighlight = {
  title: string;
  description: string;
};

type CommunityInitiative = {
  title: string;
  description: string;
};

const CULTURE_PILLARS: Pillar[] = [
  {
    title: "Mentorship mindset",
    description: "Experienced teammates buddy with new hires through Bpract Academy, sharing best practices and feedback from day one."
  },
  {
    title: "Learning in the open",
    description: "Guilds for engineering, design, AI, and delivery meet monthly to demo experiments, swaps tips, and level up together."
  },
  {
    title: "Balanced pace",
    description: "We plan realistically, protect focus time, and ensure every launch includes recovery days and retrospectives."
  }
];

const RITUALS: Ritual[] = [
  {
    title: "Weekly stand-ups",
    description: "Cross-functional check-ins align product, design, engineering, and success teams on active goals."
  },
  {
    title: "Friday demos",
    description: "Squads showcase progress, celebrate wins, and invite feedback from peers and leadership."  
  },
  {
    title: "Learning lunches",
    description: "Short sessions covering new frameworks, AI tooling, and customer success lessons."
  },
  {
    title: "Quarterly retros",
    description: "We review delivery patterns, celebrate achievements, and refine our playbooks together."
  }
];

const WORKSPACE: WorkspaceHighlight[] = [
  {
    title: "Kozhikode Cyberpark",
    description: "Teams collaborate from KSITIL SEZ with collaboration zones, focus pods, and well-equipped meeting rooms."
  },
  {
    title: "Hybrid flexibility",
    description: "Blend office collaboration with remote focus days so you can plan life and deep work effectively."
  },
  {
    title: "Always-on support",
    description: "24/7 helpdesk, wellness check-ins, and community channels ensure every teammate feels supported."
  }
];

const COMMUNITY: CommunityInitiative[] = [
  {
    title: "Bpract Academy",
    description: "Mentorship-powered internship cohorts help aspiring developers and designers grow into full-time roles."
  },
  {
    title: "Tech outreach",
    description: "Workshops and webinars with local colleges encourage practical learning and entrepreneurship."
  },
  {
    title: "Community giving",
    description: "We support local initiatives and disaster relief efforts, matching employee contributions."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Life at Bpract Software Solutions";
  const description =
    "Discover the culture at Bpract Software Solutions: mentorship, collaboration, community programmes, and the rituals that shape Cloud MLM Software.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/company/culture", locale)
    }
  };
}

type CulturePageProps = {
  params: { lang: SupportedLocale };
};

export default function CulturePage({ params }: CulturePageProps) {
  const locale = resolveLocale(params.lang);
  const careersHref = buildLocalizedPath("/company/careers", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="border-b border-border/60 bg-gradient-to-br from-violet-50 via-white to-emerald-50 py-24 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-4xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" aria-hidden />
              Life at Bpract
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              A culture built on mentorship, shared learning, and practical innovation.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Cloud MLM Software is shaped by people who stay curious, collaborate openly, and look out for one another. Here’s how we keep the work meaningful and the environment supportive.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={careersHref}>
                  Browse careers
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="mailto:[email protected]">
                  Say hello
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Our culture pillars</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {CULTURE_PILLARS.map((pillar) => (
            <article key={pillar.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Users className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="text-xl font-semibold text-foreground">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Rituals that keep us close</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {RITUALS.map((ritual) => (
            <article key={ritual.title} className="rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{ritual.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{ritual.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Where we work best</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {WORKSPACE.map((item) => (
            <article key={item.title} className="rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Community and outreach</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {COMMUNITY.map((initiative) => (
            <article key={initiative.title} className="rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{initiative.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{initiative.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="container flex flex-col items-center gap-6 rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-12 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">See yourself here?</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Browse our open roles or send your resume to [email protected]. We’d love to learn how you’d help shape Cloud MLM Software.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href={careersHref}>
                View open roles
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="mailto:[email protected]">
                Say hello
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
