import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";

type HeroMetric = {
  label: string;
  value: string;
  detail: string;
};

interface FeaturesHeroSectionProps {
  metrics: HeroMetric[];
  contactHref: string;
  demoHref: string;
}

export function FeaturesHeroSection({
  metrics,
  contactHref,
  demoHref
}: FeaturesHeroSectionProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border/60 bg-background">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10" />
      </div>

      {/* Floating orbs */}
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container relative py-32">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Custom Badge with Sparkles icon */}
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary backdrop-blur-sm">
                <Sparkles className="h-4 w-4" aria-hidden />
                Platform overview
              </div>

              <SectionTitle
                badge={null}
                heading={
                  <>
                    Build, automate, and scale{" "}
                    <span className="relative inline-block">
                      <span className="relative z-10 bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
                        modern direct selling
                      </span>
                      <span className="absolute bottom-0 left-0 h-3 w-full bg-primary/20 -rotate-1" />
                    </span>{" "}
                    experiences from one platform.
                  </>
                }
                description="Cloud MLM Software unifies compensation, commerce, enablement, compliance, and AI copilots so every team—from executives to distributors—works from the same truth."
                centered={false}
                headingAs="h1"
                headingClassName="text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl"
                className="!space-y-6"
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="group rounded-xl px-6 py-6 text-base font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <Link href={contactHref}>
                  Request a platform walkthrough
                  <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group rounded-xl border-2 px-6 py-6 text-base font-semibold transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary/5">
                <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                  Explore the live demo
                  <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Metrics */}
          <div className="space-y-6">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-primary/40 hover:bg-card hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-primary/60">{metric.label}</dt>
                    <dd className="mt-2 text-3xl font-bold text-foreground">{metric.value}</dd>
                    <p className="mt-2 text-sm text-muted-foreground">{metric.detail}</p>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Check className="h-6 w-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
