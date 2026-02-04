import Link from "next/link";
import { ArrowUpRight, Newspaper, Rss, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";

interface PressReleaseCtaSectionProps {
  locale: Locale;
}

export function PressReleaseCtaSection({ locale }: PressReleaseCtaSectionProps) {
  const newsletterHref = buildLocalizedPath("/resources/newsletter", locale);

  return (
    <section className="border-y border-border/60 bg-muted/30 py-20 dark:bg-slate-950/40">
      <div className="container grid gap-10 lg:grid-cols-3">
        <article className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Newspaper className="h-6 w-6" aria-hidden />
          </span>
          <h3 className="text-lg font-semibold text-foreground">Executive quotes on call</h3>
          <p className="text-sm text-muted-foreground">
            Schedule interviews with our executive leadership, compensation scientists, or product strategists for your next feature.
          </p>
        </article>
        <article className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Sparkles className="h-6 w-6" aria-hidden />
          </span>
          <h3 className="text-lg font-semibold text-foreground">Analyst-ready materials</h3>
          <p className="text-sm text-muted-foreground">
            Access briefing decks, platform demos, and roadmap synopses designed for researchers and evaluation committees.
          </p>
        </article>
        <article className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Rss className="h-6 w-6" aria-hidden />
          </span>
          <h3 className="text-lg font-semibold text-foreground">Subscribe for updates</h3>
          <p className="text-sm text-muted-foreground">
            Join our newsroom mailing list for embargoed releases, event invites, and quarterly insights.
          </p>
          <Button asChild>
            <Link href={newsletterHref}>
              Subscribe now
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </article>
      </div>
    </section>
  );
}
