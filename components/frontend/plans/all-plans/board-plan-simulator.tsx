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
  Users
} from "lucide-react";

type BoardPlanSimulatorProps = {
  className?: string;
};

type TimelineStep = {
  label: string;
  value: string;
  hint: string;
  highlighted?: boolean;
};

const BOARD_CAPACITIES = [6, 9, 14] as const;
const ACTIVE_PROMOTERS = [90, 180, 260] as const;
const REENTRY_RATES = [0.3, 0.45, 0.6] as const;

const SUBSCRIPTION_CONFIG = {
  min: 80,
  max: 240,
  step: 10
};

const BOARD_PAYOUT_FACTOR = 0.4;

export default function BoardPlanSimulator({ className }: BoardPlanSimulatorProps) {
  const [boardSize, setBoardSize] = useState<number>(BOARD_CAPACITIES[1]);
  const [promoters, setPromoters] = useState<number>(ACTIVE_PROMOTERS[1]);
  const [reentryRate, setReentryRate] = useState<number>(REENTRY_RATES[1]);
  const [avgPackValue, setAvgPackValue] = useState<number>(140);

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
    const entrantsPerCycle = boardSize;
    const cyclesCompleted = boardSize === 0 ? 0 : Math.floor(promoters / boardSize);
    const seatsFilled = Math.min(promoters, boardSize * cyclesCompleted + (promoters % boardSize));
    const fillRate = boardSize === 0 ? 0 : Math.round((seatsFilled / boardSize) * 100);
    const payoutPool = Math.round(cyclesCompleted * boardSize * avgPackValue * BOARD_PAYOUT_FACTOR);
    const reentries = Math.max(Math.round(cyclesCompleted * reentryRate * boardSize), 0);
    const queueDepth = Math.max(promoters - cyclesCompleted * boardSize - reentries, 0);
    const complianceReviews = Math.max(Math.round(promoters * 0.12), 5);
    const cycleDays = Math.max(5, Math.round(10 + (boardSize - 6) * 1.5));

    const timeline: TimelineStep[] = [
      {
        label: "Boards completed",
        value: cyclesCompleted + " cycles",
        hint: entrantsPerCycle + " members per cycle with auto-promotion and re-entry.",
        highlighted: true
      },
      {
        label: "Payout pool",
        value: formatter.format(payoutPool),
        hint: "Calculated at " + Math.round(BOARD_PAYOUT_FACTOR * 100) + "% of board value.",
        highlighted: true
      },
      {
        label: "Re-entries queued",
        value: reentries.toLocaleString() + " promoters",
        hint: Math.round(reentryRate * 100) + "% re-entry rate applied after cycle completion."
      },
      {
        label: "Waiting queue",
        value: queueDepth.toLocaleString() + " promoters",
        hint: "Promoters awaiting placement into the next board rotation."
      }
    ];

    return {
      cyclesCompleted,
      fillRate,
      payoutPool,
      reentries,
      queueDepth,
      complianceReviews,
      cycleDays,
      timeline
    };
  }, [avgPackValue, boardSize, formatter, promoters, reentryRate]);

  const sliderDisplay = formatter.format(avgPackValue);

  return (
    <div
      className={cn(
        "flex h-full flex-col gap-6 rounded-3xl border border-border/60 bg-background/95 p-6 shadow-2xl backdrop-blur-xl dark:border-white/15 dark:bg-white/5",
        className
      )}
    >
      <header className="space-y-1">
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">Board plan simulator</span>
        <h3 className="text-xl font-semibold text-foreground dark:text-white">
          Forecast board fills, re-entries, and payouts before every rotation.
        </h3>
      </header>

      <div className="grid gap-4">
        <div className="grid gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Board capacity</span>
          <div className="flex flex-wrap gap-2">
            {BOARD_CAPACITIES.map((option) => (
              <Button
                key={option}
                type="button"
                variant={option === boardSize ? "default" : "outline"}
                size="sm"
                onClick={() => setBoardSize(option)}
              >
                {option} seats
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
                variant={option === promoters ? "default" : "outline"}
                size="sm"
                onClick={() => setPromoters(option)}
              >
                {option.toLocaleString()}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Re-entry rate</span>
          <div className="flex flex-wrap gap-2">
            {REENTRY_RATES.map((option) => (
              <Button
                key={option}
                type="button"
                variant={option === reentryRate ? "default" : "outline"}
                size="sm"
                onClick={() => setReentryRate(option)}
              >
                {Math.round(option * 100)}%
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wide text-muted-foreground">
            <span>Average pack value (USD)</span>
            <span className="text-foreground dark:text-white">{sliderDisplay}</span>
          </div>
          <input
            type="range"
            min={SUBSCRIPTION_CONFIG.min}
            max={SUBSCRIPTION_CONFIG.max}
            step={SUBSCRIPTION_CONFIG.step}
            value={avgPackValue}
            onChange={(event) => setAvgPackValue(Number(event.target.value))}
            className="h-1 w-full cursor-pointer appearance-none rounded-full bg-primary/30 accent-primary"
            aria-label="Average pack value"
          />
        </div>
      </div>

      <div className="relative grid gap-4 rounded-2xl border border-border/60 bg-muted/30 p-4 dark:border-white/10 dark:bg-white/5">
        <BoardDistributionChart
          boardSize={boardSize}
          fillRate={stats.fillRate}
          reentries={stats.reentries}
          queueDepth={stats.queueDepth}
        />
        <p className="text-xs text-muted-foreground">
          See how each cycle fills, how many promoters re-enter, and how many remain queued for the next board.
        </p>
      </div>

      <dl className="grid gap-3 rounded-2xl border border-border/60 bg-background/80 p-4 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <LineChart className="h-4 w-4 text-primary" aria-hidden />
            Boards completed
          </div>
          <span className="text-sm font-semibold text-foreground dark:text-white">{stats.cyclesCompleted}</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4 text-primary" aria-hidden />
            Re-entries triggered
          </div>
          <span className="text-sm font-semibold text-foreground dark:text-white">{stats.reentries.toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <GaugeCircle className="h-4 w-4 text-primary" aria-hidden />
            Board fill rate
          </div>
          <span className="text-sm font-semibold text-foreground dark:text-white">{stats.fillRate}%</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Activity className="h-4 w-4 text-primary" aria-hidden />
            Compliance reviews
          </div>
          <span className="text-sm font-semibold text-foreground dark:text-white">{stats.complianceReviews}</span>
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
  );
}

type BoardDistributionChartProps = {
  boardSize: number;
  fillRate: number;
  reentries: number;
  queueDepth: number;
};

function BoardDistributionChart({ boardSize, fillRate, reentries, queueDepth }: BoardDistributionChartProps) {
  const fillLabel = "Boards filled " + fillRate + "%";

  return (
    <div className="space-y-4">
      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Cycle throughput</p>
      <div className="grid gap-2 text-xs text-muted-foreground">
        <div className="flex items-center justify-between">
          <span>Board capacity</span>
          <span className="text-sm font-semibold text-foreground dark:text-white">{boardSize} seats</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Fill rate</span>
          <span className="text-sm font-semibold text-foreground dark:text-white" aria-label={fillLabel}>
            {fillRate}%
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>Re-entries queued</span>
          <span className="text-sm font-semibold text-foreground dark:text-white">{reentries.toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Waiting queue</span>
          <span className="text-sm font-semibold text-foreground dark:text-white">{queueDepth.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
