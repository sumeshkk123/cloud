import type { HomepageContent } from "@/types/homepage";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Sparkles, TrendingUp, Shield, Zap } from "lucide-react";

export function AiToolsSection({ data }: { data: HomepageContent["aiHighlights"] }) {
  const highlights = data?.highlights ?? [];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-900 py-24">
      {/* Simplified background */}


      <div className="container relative">
        <div className="space-y-12">
          {/* Header */}
          <SectionTitle
            badge="AI automation"
            heading={data?.heading ?? "Reinvent MLM growth with an AI studio built to capture organic momentum, ensure compliance, and drive automation"}
            description={data?.description ?? "Cloud MLM's AI studio sits on top of your data to generate search-optimised knowledge bases, automate distributor coaching, and trigger compliant payouts-so marketing, operations, and finance play from the same cockpit."}
            centered
            maxWidth="5xl"
          />

          {/* Main Content Grid */}
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            {/* Left Column - Features */}
            <div className="space-y-6">
              {/* AI Playbook Card */}
              <Card className="border-border/50 ">
                <CardContent className="p-6">
                  <div className="space-y-4">

                    <Typography variant="h4" className="text-lg leading-tight tracking-tight ">Configure compensation, operations, and engagement from one modular platform</Typography>

                    <Typography variant="p" className="text-sm leading-7 text-muted-foreground">Select the building blocks you need today, add new experiences as you scale, and let automation carry the busy work.Select the building blocks you need today, add new experiences as you scale, and let automation carry the busy work.Select the building blocks you need today, add new experiences as you scale, and let automation carry the busy work.</Typography>
                  </div>
                </CardContent>

                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <Typography variant="small" className="font-semibold uppercase ">
                      AI playbook
                    </Typography>
                  </div>
                  <ol className="space-y-4">
                    <li className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                        1
                      </span>
                      <Typography variant="p" className="text-sm text-muted-foreground">
                        Draft search-friendly product, plan, and compliance copy in minutes.
                      </Typography>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                        2
                      </span>
                      <Typography variant="p" className="text-sm text-muted-foreground">
                        Predict churn, rank momentum, and field incentives with machine learning signals.
                      </Typography>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                        3
                      </span>
                      <Typography variant="p" className="text-sm text-muted-foreground">
                        Trigger AI-assisted workflows for onboarding, escalations, and payouts.
                      </Typography>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                        4
                      </span>
                      <Typography variant="p" className="text-sm text-muted-foreground">
                        Trigger AI-assisted workflows for onboarding, escalations, and payouts.
                      </Typography>
                    </li>
                  </ol>
                </CardContent>
              </Card>




            </div>

            {/* Right Column - Dashboard Preview */}
            <div className="space-y-6">


              {/* Results Card */}
              <Card className="border-border/50 bg-card">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <Typography variant="small" className="font-semibold uppercase">
                      Results marketers love
                    </Typography>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3 rounded-xl border border-border/50 bg-card px-4 py-3 shadow-sm">
                      <Typography variant="p" className="text-sm font-medium text-foreground">
                        Organic conversions
                      </Typography>
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200">
                        +42%
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3 rounded-xl border border-border/50 bg-card px-4 py-3 shadow-sm">
                      <Typography variant="p" className="text-sm font-medium text-foreground">
                        Manual tasks automated
                      </Typography>
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        71%
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3 rounded-xl border border-border/50 bg-card px-4 py-3 shadow-sm">
                      <Typography variant="p" className="text-sm font-medium text-foreground">
                        Compliance alerts resolved
                      </Typography>
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-400/20 dark:text-amber-200">
                        -63%
                      </span>
                    </div>

                  </div>
                </CardContent>
              </Card>
              {/* Generative Brief Card */}
              <Card className="border-border/50 bg-primary/10">
                <div className="border-b border-border/50 bg-card/30 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <Typography variant="small" className="font-semibold uppercase tracking-[0.35em] text-primary">
                      Generative brief
                    </Typography>
                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-200">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" /> Optimised
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="rounded-xl border border-border/60 bg-background px-4 py-3">
                      <Typography variant="p" className="text-sm text-foreground">
                        &ldquo;Draft a long-form blog on binary compensation plans focusing on Australia. Include schema markup, plan FAQs, and distributor success stories.&rdquo;
                      </Typography>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-xl border border-border/60 bg-card px-4 py-3">
                        <Typography variant="small" className="mb-1 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                          Search intent
                        </Typography>
                        <Typography variant="p" className="text-sm font-semibold text-foreground">
                          Transactional + Informational
                        </Typography>
                      </div>
                      <div className="rounded-xl border border-border/60 bg-card px-4 py-3">
                        <Typography variant="small" className="mb-1 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                          Schema
                        </Typography>
                        <Typography variant="p" className="text-sm font-semibold text-foreground">
                          FAQ, HowTo, Product
                        </Typography>
                      </div>

                    </div>
                  </div>
                </CardContent>
              </Card>



            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
