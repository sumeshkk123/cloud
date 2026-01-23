"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Activity,
  ArrowRight,
  GaugeCircle,
  LineChart,
  ShieldCheck,
  TrendingUp,
  Users
} from "lucide-react";

type GenerationPlanSimulatorProps = {
  className?: string;
};

type TimelineStep = {
  label: string;
  value: string;
  hint: string;
  highlighted?: boolean;
};

type GenerationBreakdown = {
  generation: number;
  percentage: number;
  amount: number;
};

const GENERATION_OPTIONS = [4, 5, 6] as const;
const TEAM_VOLUME_OPTIONS = [12000, 22000, 36000] as const;
const BREAKAWAY_THRESHOLDS = [500, 800, 1000] as const;

const PERSONAL_VOLUME_RANGE = {
  min: 120,
  max: 320,
  step: 10
};

const BASE_PAYOUT_MAP: Record<number, number[]> = {
  4: [0.1, 0.06, 0.04, 0.03],
  5: [0.1, 0.07, 0.05, 0.03, 0.02],
  6: [0.1, 0.07, 0.05, 0.04, 0.025, 0.015]
};

function resolveLeadershipRate(threshold: number): number {
  if (threshold >= 1000) return 0.055;
  if (threshold >= 800) return 0.045;
  return 0.035;
}

export default function GenerationPlanSimulator({ className }: GenerationPlanSimulatorProps) {
  const [generations, setGenerations] = useState<number>(GENERATION_OPTIONS[1]);
  const [teamVolume, setTeamVolume] = useState<number>(TEAM_VOLUME_OPTIONS[1]);
  const [breakawayThreshold, setBreakawayThreshold] = useState<number>(BREAKAWAY_THRESHOLDS[1]);
  const [avgPersonalVolume, setAvgPersonalVolume] = useState<number>(180);

  const formatter = useMemo(
    () =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
      }),
    []
  );

  const stats = useMemo(() => {
    const payoutPercents = BASE_PAYOUT_MAP[generations];
    const leadershipRate = resolveLeadershipRate(breakawayThreshold);
    const perGeneration: GenerationBreakdown[] = payoutPercents.map((percentage, index) => ({
      generation: index + 1,
      percentage: Math.round(percentage * 1000) / 10,
      amount: Math.round(teamVolume * percentage)
    }));
    const generationPayout = perGeneration.reduce((sum, item) => sum + item.amount, 0);
    const leadershipBonus = Math.round(teamVolume * leadershipRate);
    const complianceScore = Math.min(100, Math.round(68 + leadershipRate * 400 + avgPersonalVolume / 5));
    const retentionRate = Math.min(100, Math.round(60 + avgPersonalVolume / 2));
    const activationRate = Math.min(100, Math.round(55 + (teamVolume / 1000) * 2));

    const timeline: TimelineStep[] = [
      {
        label: "Generation payouts",
        value: formatter.format(generationPayout),
        hint: "Total commissions across " + generations + " generations.",
        highlighted: true
      },
      {
        label: "Leadership bonus",
        value: formatter.format(leadershipBonus),
        hint: "Awarded when breakaway threshold reaches " + breakawayThreshold + " PV."
      },
      {
        label: "Activation rate",
        value: activationRate + "%",
        hint: "Predicted percentage of promoters meeting the personal volume goal."
      },
      {
        label: "Compliance health",
        value: complianceScore + "%",
        hint: "Represents AML/KYC and documentation readiness for payouts."
      }
    ];

    return {
      perGeneration,
      generationPayout,
      leadershipBonus,
      complianceScore,
      retentionRate,
      activationRate,
      timeline
    };
  }, [avgPersonalVolume, breakawayThreshold, formatter, generations, teamVolume]);

  const sliderDisplay = formatter.format(avgPersonalVolume);

  return (
    <div
      className={cn(
        "flex h-full flex-col gap-6 rounded-3xl border border-border/60 bg-background/95 p-6 shadow-2xl backdrop-blur-xl dark:border-white/15 dark:bg-white/5",
        className
      )}
    >
      <header className="space-y-1">
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">Generation plan simulator</span>
        <h3 className="text-xl font-semibold text-foreground dark:text-white">
          Model generational payouts, leadership bonuses, and compliance readiness.
        </h3>
      </header>

      <div className="grid gap-4">
        <div className="grid gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Generations paid</span>
          <div className="flex flex-wrap gap-2">
            {GENERATION_OPTIONS.map((option) => (
              <Button
                key={option}
                type="button"
                variant={option === generations ? "default" : "outline"}
                size="sm"
                onClick={() => setGenerations(option)}
              >
                {option} generations
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Monthly team volume</span>
          <div className="flex flex-wrap gap-2">
            {TEAM_VOLUME_OPTIONS.map((option) => (
              <Button
                key={option}
                type="button"
                variant={option === teamVolume ? "default" : "outline"}
                size="sm"
                onClick={() => setTeamVolume(option)}
              >
                {formatter.format(option)}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Breakaway threshold (PV)</span>
          <div className="flex flex-wrap gap-2">
            {BREAKAWAY_THRESHOLDS.map((option) => (
              <Button
                key={option}
                type="button"
                variant={option === breakawayThreshold ? "default" : "outline"}
                size="sm"
                onClick={() => setBreakawayThreshold(option)}
              >
                {option} PV
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wide text-muted-foreground">
            <span>Average personal volume (USD)</span>
            <span className="text-foreground dark:text-white">{sliderDisplay}</span>
          </div>
          <input
            type="range"
            min={PERSONAL_VOLUME_RANGE.min}
            max={PERSONAL_VOLUME_RANGE.max}
            step={PERSONAL_VOLUME_RANGE.step}
            value={avgPersonalVolume}
            onChange={(event) => setAvgPersonalVolume(Number(event.target.value))}
            className="h-1 w-full cursor-pointer appearance-none rounded-full bg-primary/30 accent-primary"
            aria-label="Average personal volume"
          />
        </div>
      </div>

      <div className="relative grid gap-4 rounded-2xl border border-border/60 bg-muted/30 p-4 dark:border-white/10 dark:bg-white/5">
        <GenerationBreakdownList breakdown={stats.perGeneration} formatter={formatter} />
        <p className="text-xs text-muted-foreground">
          Understand how each generation contributes to total payout and where leadership bonuses amplify returns.
        </p>
      </div>

      <dl className="grid gap-3 rounded-2xl border border-border/60 bg-background/80 p-4 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <LineChart className="h-4 w-4 text-primary" aria-hidden />
            Total generational payout
          </div>
          <span className="text-sm font-semibold text-foreground dark:text-white">{formatter.format(stats.generationPayout)}</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <TrendingUp className="h-4 w-4 text-primary" aria-hidden />
            Leadership bonus pool
          </div>
          <span className="text-sm font-semibold text-foreground dark:text-white">{formatter.format(stats.leadershipBonus)}</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Activity className="h-4 w-4 text-primary" aria-hidden />
            Activation rate
          </div>
          <span className="text-sm font-semibold text-foreground dark:text-white">{stats.activationRate}%</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4 text-primary" aria-hidden />
            Retention outlook
          </div>
          <span className="text-sm font-semibold text-foreground dark:text-white">{stats.retentionRate}%</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" aria-hidden />
            Compliance score
          </div>
          <span className="text-sm font-semibold text-foreground dark:text-white">{stats.complianceScore}%</span>
        </div>
      </dl>

      <div className="grid gap-3">
        {stats.timeline.map((step) => (
          <div
            key={step.label}
            className={cn(
              "flex items-start gap-3 rounded-2xl border border-border/60 p-3 text-sm dark:border-white/10",
              step.highlighted
                ? "bg-primary/10 text-foreground dark:bg-primary/20"
                : "bg-background/80 text-muted-foreground dark:bg-white/5"
            )}
          >
            <ArrowRight className="mt-1 h-4 w-4 text-primary" aria-hidden />
            <div>
              <p className="font-semibold">{step.value}</p>
              <p className="text-xs text-muted-foreground dark:text-white/70">{step.hint}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

type GenerationBreakdownListProps = {
  breakdown: GenerationBreakdown[];
  formatter: Intl.NumberFormat;
};

function GenerationBreakdownList({ breakdown, formatter }: GenerationBreakdownListProps) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Payout by generation</p>
      <div className="grid gap-2 text-xs text-muted-foreground">
        {breakdown.map((item) => (
          <div key={item.generation} className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm text-foreground dark:text-white">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                G{item.generation}
              </span>
              {item.percentage}%
            </span>
            <span className="text-sm font-semibold text-foreground dark:text-white">{formatter.format(item.amount)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
