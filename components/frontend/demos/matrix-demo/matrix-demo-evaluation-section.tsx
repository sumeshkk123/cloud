import { ArrowRight, GaugeCircle, Network } from "lucide-react";

export function MatrixDemoEvaluationSection({
  bullets,
}: {
  bullets: string[];
}) {
  return (
    <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
      <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What you’ll evaluate during the demo</h2>
          <p className="text-sm text-muted-foreground">
            From spill-over logic to integrations, the walkthrough proves how Cloud MLM Software keeps your matrix programme adaptable and compliant.
          </p>
          <div className="space-y-3 text-sm text-muted-foreground">
            {bullets.map((item) => (
              <p key={item} className="flex items-start gap-2">
                <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="grid gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Network className="h-5 w-5" aria-hidden />
            </span>
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-foreground">E-commerce and wallet integration</h3>
              <p className="text-sm text-muted-foreground">
                Understand how carts, loyalty wallets, and subscription products connect to matrix genealogy and payouts.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <GaugeCircle className="h-5 w-5" aria-hidden />
            </span>
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-foreground">Compliance guardrails</h3>
              <p className="text-sm text-muted-foreground">
                Walk through configurable policies that manage holding periods, auto-ship requirements, and regulator-friendly reporting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

