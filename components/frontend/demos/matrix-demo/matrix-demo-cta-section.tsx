import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function MatrixDemoCtaSection({ contactHref }: { contactHref: string }) {
  return (
    <section className="container">
      <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/5 via-background to-indigo-50 p-10 shadow-sm dark:border-primary/60 dark:from-primary/10 dark:via-slate-950 dark:to-indigo-950/40">
        <div className="absolute -left-16 -top-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl" aria-hidden />
        <div className="absolute bottom-0 right-0 h-60 w-60 translate-y-1/3 rounded-full bg-sky-200/25 blur-3xl dark:bg-sky-900/30" aria-hidden />
        <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to tailor the demo to your matrix rules?</h2>
            <p className="text-sm text-muted-foreground">
              Send us your width × depth configuration, current bonus tables, and integration needs. We’ll preload the sandbox so every stakeholder sees their reality reflected on screen.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-primary/40 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/50 dark:bg-slate-950/60">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">Schedule your personalised session</h3>
              <p className="text-sm text-muted-foreground">
                Expect agenda previews, data import guidance, and post-demo recommendations tailored to your launch timeline.
              </p>
            </div>
            <Button asChild>
              <Link href={contactHref}>
                Reserve the demo
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

