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

type AustralianBinarySimulatorProps = {
  className?: string;
};

type TimelineStep = {
  label: string;
  value: string;
  hint: string;
  highlighted?: boolean;
};

type BalanceScenario = {
  label: string;
  bias: number; // percentage of total volume attributed to the power leg
};

const PAIR_REQUIREMENTS = [200, 300, 450] as const;
const DISTRIBUTOR_COUNTS = [180, 320, 520] as const;
const BALANCE_SCENARIOS: BalanceScenario[] = [
  { label: "Balanced teams", bias: 0.52 },
  { label: "Power leg surge", bias: 0.62 },
  { label: "New leg push", bias: 0.45 }
];

const SLIDER_CONFIG = {
  min: 120,
  max: 360,
  step: 10
};

const PAYOUT_RATE = 0.12;

export default function AustralianBinarySimulator({ className }: AustralianBinarySimulatorProps) {
  const [pairRequirement, setPairRequirement] = useState<number>(PAIR_REQUIREMENTS[1]);
  const [distributors, setDistributors] = useState<number>(DISTRIBUTOR_COUNTS[1]);
  const [avgOrderValue, setAvgOrderValue] = useState<number>(220);
  const [scenario, setScenario] = useState<BalanceScenario>(BALANCE_SCENARIOS[0]);

  const currencyFormatter = useMemo(
    () =>
      new Intl.NumberFormat("en-AU", {
        style: "currency",
        currency: "AUD",
        maximumFractionDigits: 0
      }),
    []
  );

  const stats = useMemo(() => {
    const totalVolume = distributors * avgOrderValue;
    const leftVolume = Math.round(totalVolume * scenario.bias);
    const rightVolume = Math.max(totalVolume - leftVolume, 0);
    const matchedVolume = Math.min(leftVolume, rightVolume);
    const matchedPairs =
      pairRequirement === 0 ? 0 : Math.max(Math.floor(matchedVolume / pairRequirement), 0);
    const payoutVolume = Math.round(matchedPairs * pairRequirement * PAYOUT_RATE);
    const carryOverVolume = Math.max(leftVolume, rightVolume) - matchedVolume;
    const flushRisk = totalVolume === 0 ? 0 : Math.min(Math.round((carryOverVolume / totalVolume) * 100), 100);
    const activationRate = Math.min(100, Math.round(58 + avgOrderValue / 3));
    const cycleDays = Math.max(Math.round(7 + pairRequirement / 35), 8);

    const timeline: TimelineStep[] = [
      {
        label: "Left leg volume",
        value: currencyFormatter.format(leftVolume),
        hint: "Includes spillover and sponsor-driven momentum on the power leg.",
        highlighted: true
      },
      {
        label: "Right leg volume",
        value: currencyFormatter.format(rightVolume),
        hint: "Shows production from the developing leg that drives matched cycles.",
        highlighted: true
      },
      {
        label: "Matched cycles",
        value: matchedPairs + " cycles",
        hint: pairRequirement + " PV pairing threshold with " + Math.round(PAYOUT_RATE * 100) + "% payout rate."
      },
      {
        label: "Carryover volume",
        value: currencyFormatter.format(carryOverVolume),
        hint: "Unmatched PV retained for the next cycle and monitored for flush risk."
      }
    ];

    return {
      leftVolume,
      rightVolume,
      matchedPairs,
      payoutVolume,
      carryOverVolume,
      flushRisk,
      activationRate,
      cycleDays,
      timeline
    };
  }, [avgOrderValue, currencyFormatter, distributors, pairRequirement, scenario.bias]);

  const sliderDisplay = currencyFormatter.format(avgOrderValue);

  return (
    <div
      className={cn(
        "flex h-full flex-col gap-6 rounded-3xl border border-border/60 bg-background/95 p-6 shadow-2xl backdrop-blur-xl dark:border-white/15 dark:bg-white/5",
        className
      )}
    >
      <header className="space-y-1">
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">Binary plan simulator</span>
        <h3 className="text-xl font-semibold text-foreground dark:text-white">
          Balance legs, predict payouts, and protect carryover reserves.
        </h3>
      </header>

      <div className="grid gap-4">
        <div className="grid gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Pairing threshold (PV)</span>
          <div className="flex flex-wrap gap-2">
            {PAIR_REQUIREMENTS.map((option) => (
              <Button
                key={option}
                type="button"
                variant={option === pairRequirement ? "default" : "outline"}
                size="sm"
                onClick={() => setPairRequirement(option)}
              >
                {option} PV
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Active distributors</span>
          <div className="flex flex-wrap gap-2">
            {DISTRIBUTOR_COUNTS.map((option) => (
              <Button
                key={option}
                type="button"
                variant={option === distributors ? "default" : "outline"}
                size="sm"
                onClick={() => setDistributors(option)}
              >
                {option.toLocaleString()}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Leg balance scenario</span>
          <div className="flex flex-wrap gap-2">
            {BALANCE_SCENARIOS.map((option) => (
              <Button
                key={option.label}
                type="button"
                variant={option.label === scenario.label ? "default" : "outline"}
                size="sm"
                onClick={() => setScenario(option)}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wide text-muted-foreground">
            <span>Average order value (AUD)</span>
            <span className="text-foreground dark:text-white">{sliderDisplay}</span>
          </div>
          <input
            type="range"
            min={SLIDER_CONFIG.min}
            max={SLIDER_CONFIG.max}
            step={SLIDER_CONFIG.step}
            value={avgOrderValue}
            onChange={(event) => setAvgOrderValue(Number(event.target.value))}
            className="h-1 w-full cursor-pointer appearance-none rounded-full bg-primary/30 accent-primary"
            aria-label="Average order value"
          />
        </div>
      </div>

      <div className="relative grid gap-4 rounded-2xl border border-border/60 bg-muted/30 p-4 dark:border-white/10 dark:bg-white/5">
        <BinaryDistributionChart
          leftVolume={stats.leftVolume}
          rightVolume={stats.rightVolume}
          matchedPairs={stats.matchedPairs}
          formatter={currencyFormatter}
        />
        <p className="text-xs text-muted-foreground">
          Visualise how leg production, matched cycles, and carryover reserves respond to distributor activity.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

        <dl className="grid gap-3 rounded-2xl border border-border/60 bg-background/80 p-4 dark:border-white/10 dark:bg-white/5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <LineChart className="h-4 w-4 text-primary" aria-hidden />
              Matched cycles
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">{stats.matchedPairs}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4 text-primary" aria-hidden />
              Activation rate
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">{stats.activationRate}%</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <TrendingUp className="h-4 w-4 text-primary" aria-hidden />
              Payout volume
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">{currencyFormatter.format(stats.payoutVolume)}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Activity className="h-4 w-4 text-primary" aria-hidden />
              Flush risk
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">{stats.flushRisk}%</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" aria-hidden />
              Cycle completion (days)
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">{stats.cycleDays}</span>
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
    </div>
  );
}

type BinaryDistributionChartProps = {
  leftVolume: number;
  rightVolume: number;
  matchedPairs: number;
  formatter: Intl.NumberFormat;
};

function BinaryDistributionChart({ leftVolume, rightVolume, matchedPairs, formatter }: BinaryDistributionChartProps) {
  const total = leftVolume + rightVolume || 1;
  const leftPercent = Math.round((leftVolume / total) * 100);
  const rightPercent = 100 - leftPercent;
  const leftWidth = leftPercent.toString() + "%";
  const rightWidth = rightPercent.toString() + "%";
  const leftLabel = "Left leg " + leftPercent + "% volume";
  const rightLabel = "Right leg " + rightPercent + "% volume";

  return (
    <div className="space-y-4">
      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Leg health snapshot</p>
      <div className="flex h-12 overflow-hidden rounded-full border border-border/60 bg-background/80 dark:border-white/10 dark:bg-white/5">
        <div
          className="flex h-full flex-none items-center justify-center bg-primary/20 text-xs font-semibold text-primary"
          style={{ width: leftWidth }}
          aria-label={leftLabel}
        >
          {leftPercent}%
        </div>
        <div
          className="flex h-full flex-1 items-center justify-center bg-primary/5 text-xs font-semibold text-primary"
          style={{ width: rightWidth }}
          aria-label={rightLabel}
        >
          {rightPercent}%
        </div>
      </div>
      <div className="grid gap-2 text-xs text-muted-foreground">
        <div className="flex items-center justify-between">
          <span>Left leg volume</span>
          <span className="text-sm font-semibold text-foreground dark:text-white">{formatter.format(leftVolume)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Right leg volume</span>
          <span className="text-sm font-semibold text-foreground dark:text-white">{formatter.format(rightVolume)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Matched cycles</span>
          <span className="text-sm font-semibold text-foreground dark:text-white">{matchedPairs}</span>
        </div>
      </div>
    </div>
  );
}
