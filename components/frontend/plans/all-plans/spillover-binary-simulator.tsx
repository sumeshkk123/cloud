"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowLeftRight,
  BarChart3,
  CalendarRange,
  PieChart,
  ShieldCheck,
  TrendingUp,
  Users
} from "lucide-react";

type SpilloverBinarySimulatorProps = {
  className?: string;
};

const PAIR_REQUIREMENTS = [150, 300, 450] as const; // volume per leg to trigger a pair
const ACTIVE_PROMOTERS = [180, 320, 520] as const; // promoters producing volume this cycle
const SPILLOVER_SUPPORT = [0.18, 0.28, 0.38] as const; // portion of recruits placed by upline spillover

const AVERAGE_ORDER_MIN = 80;
const AVERAGE_ORDER_MAX = 220;
const AVERAGE_ORDER_STEP = 10;

export default function SpilloverBinarySimulator({ className }: SpilloverBinarySimulatorProps) {
  const [pairRequirement, setPairRequirement] = useState<(typeof PAIR_REQUIREMENTS)[number]>(PAIR_REQUIREMENTS[1]);
  const [promoters, setPromoters] = useState<(typeof ACTIVE_PROMOTERS)[number]>(ACTIVE_PROMOTERS[1]);
  const [spilloverRatio, setSpilloverRatio] = useState<(typeof SPILLOVER_SUPPORT)[number]>(SPILLOVER_SUPPORT[1]);
  const [avgOrderValue, setAvgOrderValue] = useState<number>(150);

  const currencyFormatter = useMemo(
    () =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
      }),
    []
  );

  const numberFormatter = useMemo(
    () =>
      new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 0
      }),
    []
  );

  const percentFormatter = useMemo(
    () =>
      new Intl.NumberFormat("en-US", {
        style: "percent",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }),
    []
  );

  const outcome = useMemo(() => {
    const totalVolume = promoters * avgOrderValue;
    const weakLegBaseShare = 0.44;
    const spilloverLift = (spilloverRatio - SPILLOVER_SUPPORT[0]) / (SPILLOVER_SUPPORT[SPILLOVER_SUPPORT.length - 1] - SPILLOVER_SUPPORT[0] || 1);
    const weakLegShare = Math.min(0.52, weakLegBaseShare + spilloverLift * 0.08);
    const strongLegShare = 1 - weakLegShare;

    const weakLegVolume = totalVolume * weakLegShare;
    const strongLegVolume = totalVolume * strongLegShare;

    const matchedPairs = Math.floor(weakLegVolume / pairRequirement);
    const payoutPerPair = pairRequirement * 0.12;
    const grossPayout = matchedPairs * payoutPerPair;
    const carryOverVolume = strongLegVolume - matchedPairs * pairRequirement;
    const spilloverPlacements = Math.round(promoters * spilloverRatio);

    const flushRisk = Math.max(0, carryOverVolume / strongLegVolume);
    const cycleDays = 14; // typical binary payout cadence in days

    const metrics = [
      {
        label: "Matched pairs",
        value: numberFormatter.format(matchedPairs),
        detail: "Pairs triggered this cycle after spillover support balances weak legs.",
        icon: ArrowLeftRight
      },
      {
        label: "Commission pool",
        value: currencyFormatter.format(grossPayout),
        detail: "Projected binary payouts allocated at 12% of paired volume.",
        icon: BarChart3
      },
      {
        label: "Carry-over volume",
        value: currencyFormatter.format(Math.max(0, carryOverVolume)),
        detail: "Volume retained on the power leg for future cycles once binary is balanced.",
        icon: TrendingUp
      },
      {
        label: "Spillover placements",
        value: numberFormatter.format(spilloverPlacements),
        detail: "Members placed by upline leaders to reinforce weaker legs.",
        icon: Users
      }
    ] as const;

    const timeline = [
      {
        title: "Days 1-3 – Forecast & align",
        detail: `Evaluate ${numberFormatter.format(promoters)} active promoters and confirm ${percentFormatter.format(spilloverRatio)} spillover support to protect the weak leg.`,
        icon: PieChart
      },
      {
        title: "Days 4-7 – Placement sprint",
        detail: `Leaders place ${numberFormatter.format(spilloverPlacements)} spillover members with guardrails to avoid cross-leg conflicts and maintain compliance evidence.`,
        icon: ArrowLeftRight
      },
      {
        title: "Days 8-11 – Compliance sweep",
        detail: `Finance validates binary receipts, taxes, and KYC before releasing ${currencyFormatter.format(grossPayout * 0.85)} in fast-start commissions.`,
        icon: ShieldCheck
      },
      {
        title: "Days 12-14 – Optimise & coach",
        detail: `Monitor carry-over risk at ${percentFormatter.format(flushRisk)} and route coaching nudges where weak-leg volume needs reinforcement.`,
        icon: CalendarRange
      }
    ] as const;

    return {
      totalVolume,
      weakLegVolume,
      strongLegVolume,
      matchedPairs,
      grossPayout,
      carryOverVolume,
      spilloverPlacements,
      flushRisk,
      metrics,
      timeline,
      cycleDays
    };
  }, [avgOrderValue, currencyFormatter, numberFormatter, pairRequirement, percentFormatter, promoters, spilloverRatio]);

  const sliderLabel = useMemo(
    () => `${currencyFormatter.format(avgOrderValue)} avg order`,
    [avgOrderValue, currencyFormatter]
  );

  return (
    <div
      className={cn(
        "grid h-full w-full gap-6 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-lg backdrop-blur dark:border-white/10",
        className
      )}
    >
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary dark:text-primary/80">
          Spillover binary planner
        </p>
        <h3 className="text-xl font-semibold text-foreground dark:text-white">
          Model spillover support, binary volume balance, and payout risk.
        </h3>
        <p className="text-sm text-muted-foreground dark:text-white/70">
          Choose pair thresholds, active promoter volume, and spillover reinforcement to see how Cloud MLM Software steadies the weak leg and protects payouts.
        </p>
      </header>

      <div className="grid gap-5">
        <div className="grid gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Pair requirement</span>
          <div className="flex flex-wrap gap-2">
            {PAIR_REQUIREMENTS.map((option) => (
              <Button
                key={option}
                type="button"
                size="sm"
                variant={option === pairRequirement ? "default" : "outline"}
                onClick={() => setPairRequirement(option)}
              >
                {currencyFormatter.format(option)} / leg
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Active promoters</span>
          <div className="flex flex-wrap gap-2">
            {ACTIVE_PROMOTERS.map((option) => (
              <Button
                key={option}
                type="button"
                size="sm"
                variant={option === promoters ? "default" : "outline"}
                onClick={() => setPromoters(option)}
              >
                {numberFormatter.format(option)} members
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Spillover support</span>
          <div className="flex flex-wrap gap-2">
            {SPILLOVER_SUPPORT.map((option) => (
              <Button
                key={option}
                type="button"
                size="sm"
                variant={option === spilloverRatio ? "default" : "outline"}
                onClick={() => setSpilloverRatio(option)}
              >
                {percentFormatter.format(option)}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wide text-muted-foreground">
            <span>Average order value</span>
            <span className="text-foreground dark:text-white">{sliderLabel}</span>
          </div>
          <input
            type="range"
            min={AVERAGE_ORDER_MIN}
            max={AVERAGE_ORDER_MAX}
            step={AVERAGE_ORDER_STEP}
            value={avgOrderValue}
            onChange={(event) => setAvgOrderValue(Number(event.target.value))}
            className="h-1 w-full cursor-pointer appearance-none rounded-full bg-primary/30 accent-primary"
          />
        </div>
      </div>

      <div className="grid gap-5">
        <div className="grid gap-3 sm:grid-cols-2">
          {outcome.metrics.map((metric) => (
            <article
              key={metric.label}
              className="flex gap-3 rounded-2xl border border-border/50 bg-muted/40 p-4 dark:border-white/10 dark:bg-white/5"
            >
              <metric.icon className="mt-1 h-5 w-5 text-primary" aria-hidden />
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{metric.label}</p>
                <p className="text-lg font-semibold text-foreground dark:text-white">{metric.value}</p>
                <p className="text-xs text-muted-foreground dark:text-white/70">{metric.detail}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <CalendarRange className="h-4 w-4" aria-hidden />
            {outcome.cycleDays}-day binary cycle
          </div>
          <div className="grid gap-3">
            {outcome.timeline.map((step) => (
              <article
                key={step.title}
                className="rounded-2xl border border-border/40 bg-background/70 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-3">
                  <step.icon className="mt-1 h-5 w-5 text-primary" aria-hidden />
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-foreground dark:text-white">{step.title}</p>
                    <p className="text-xs text-muted-foreground dark:text-white/70">{step.detail}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-primary/30 bg-primary/10 p-4 text-xs text-primary dark:border-white/10 dark:bg-white/10 dark:text-white">
          Cloud MLM Software continuously monitors weak-leg health, spillover fairness, and carry-over thresholds so compliance teams can intervene before flush rules cut commissions.
        </div>
      </div>
    </div>
  );
}
