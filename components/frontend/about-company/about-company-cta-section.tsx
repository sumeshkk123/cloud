import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AboutCompanyCtaSectionProps {
  contactHref: string;
  demoHref: string;
}

export function AboutCompanyCtaSection({ contactHref, demoHref }: AboutCompanyCtaSectionProps) {
  return (
    <section className="container rounded-3xl border border-border/60 bg-gradient-to-br from-primary/15 via-background to-emerald-200/20 p-10 shadow-sm dark:from-primary/20 dark:to-emerald-500/10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Ready to architect your next phase?
          </h2>
          <p className="text-sm text-muted-foreground">
            Book a strategy session to explore roadmaps, migration options, and co-innovation opportunities with the
            team behind Cloud MLM Software.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href={contactHref}>
              Start the conversation
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={demoHref} target="_blank" rel="noopener noreferrer">
              View the interactive demo
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
