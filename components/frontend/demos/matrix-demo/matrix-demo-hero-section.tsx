import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

import type { DemoHighlight } from "./matrix-demo-content";

interface MatrixDemoHeroSectionProps {
  contactHref: string;
  calculatorHref: string;
  highlights: DemoHighlight[];
}

export function MatrixDemoHeroSection({ contactHref, calculatorHref, highlights }: MatrixDemoHeroSectionProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-900 py-20 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgba(99,102,241,0.25),transparent_48%),radial-gradient(circle_at_82%_20%,rgba(56,189,248,0.22),transparent_55%)]" />
      <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,0.55fr)]">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-300/50 bg-violet-400/10 px-4 py-1 text-sm font-semibold text-violet-100">
            Guided matrix playthrough
          </span>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Experience spill-over automation and payouts inside the matrix MLM demo.
          </h1>
          <p className="text-base text-slate-200/85">
            “The width of a matrix plan is fixed—fill each position correctly and spill-over rewards the next distributor in line.” Our sandbox shows exactly how Cloud MLM Software enforces that promise, connects to commerce, and keeps every level compliant.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
              <Link href={contactHref}>
                Book the live demo
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-violet-200/60 text-violet-100 hover:bg-violet-400/10">
              <Link href={calculatorHref}>
                Model payouts first
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>

        <aside className="grid gap-4 rounded-3xl border border-white/15 bg-white/5 p-6 shadow-lg backdrop-blur">
          {highlights.map((highlight) => {
            const Icon = highlight.icon;
            return (
              <article key={highlight.title} className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-400/20 text-violet-100">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h2 className="text-sm font-semibold text-slate-100">{highlight.title}</h2>
                </div>
                <p className="text-xs text-slate-200/80">{highlight.description}</p>
              </article>
            );
          })}

          <span className="sr-only">
            <ShieldCheck className="h-0 w-0" aria-hidden />
          </span>
        </aside>
      </div>
    </section>
  );
}

