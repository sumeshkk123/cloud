"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BarChart3,
  GaugeCircle,
  Layers,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";

type MatrixPlanSimulatorProps = {
  className?: string;
};

type TimelineStep = {
  title: string;
  description: string;
  hint: string;
  icon: typeof Users;
};

const MATRIX_WIDTH_OPTIONS = [2, 3, 4] as const;
const MATRIX_DEPTH_OPTIONS = [6, 8, 10] as const;
const MONTHLY_ENTRANT_OPTIONS = [80, 150, 240] as const;
const PACK_VALUE_OPTIONS = [150, 220, 320] as const;

const numberFormatter = new Intl.NumberFormat("en-US");
const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});
const percentFormatter = new Intl.NumberFormat("en-US", {
  style: "percent",
  maximumFractionDigits: 0
});

export default function MatrixPlanSimulator({ className }: MatrixPlanSimulatorProps) {
  const [width, setWidth] = useState<number>(MATRIX_WIDTH_OPTIONS[1]);
  const [depth, setDepth] = useState<number>(MATRIX_DEPTH_OPTIONS[1]);
  const [monthlyEntrants, setMonthlyEntrants] = useState<number>(MONTHLY_ENTRANT_OPTIONS[1]);
  const [packValue, setPackValue] = useState<number>(PACK_VALUE_OPTIONS[1]);

  const stats = useMemo(() => {
    let totalSlots = 0;
    const levelCapacity: number[] = [];
    for (let level = 0; level < depth; level += 1) {
      const capacity = Math.pow(width, level);
      levelCapacity.push(capacity);
      totalSlots += capacity;
    }

    const cycleMonths = depth <= 6 ? 3 : depth === 8 ? 4 : 5;
    const projectedFill = Math.min(totalSlots, monthlyEntrants * cycleMonths);
    const fillPercent = Math.round((projectedFill / totalSlots) * 100);

    let remaining = projectedFill;
    let completedLevels = 0;
    for (const capacity of levelCapacity) {
      if (remaining >= capacity) {
        completedLevels += 1;
        remaining -= capacity;
      } else {
        break;
      }
    }
    const depthCoverage = Math.round((completedLevels / depth) * 100);

    const spilloverWindow = Math.max(0, projectedFill - (width + Math.pow(width, 2)));
    const payoutVolume = projectedFill * packValue;
    const leadershipPool = payoutVolume * 0.08;
    const compressionSavings = Math.max(0, totalSlots - projectedFill) * packValue * 0.05;

    const oversightLevel = fillPercent >= 85 ? "Audit-ready" : fillPercent >= 65 ? "Monitor closely" : "Build momentum";
    const confidenceMessage =
      fillPercent >= 85
        ? "Trigger regulator pre-checks and prep leadership release."
        : fillPercent >= 65
          ? "Healthy fill rate—keep enablement cadences running."
          : "Accelerate acquisition and coaching to protect depth.";

    const retentionRate = Math.min(94, 76 + Math.round(fillPercent / 3));
    const complianceReviews = Math.max(3, Math.round(projectedFill * 0.06));

    const timeline: TimelineStep[] = [
      {
        title: "Matrix ignition",
        description: `${numberFormatter.format(monthlyEntrants)} entrants per month fill the top ${completedLevels || 1} levels.`,
        hint: "Verify onboarding, ID, and payment status before level locks in.",
        icon: Users
      },
      {
        title: "Spillover automation",
        description: `${numberFormatter.format(spilloverWindow)} placements queue for spillover distribution.`,
        hint: "Coaching alerts fire to the sponsors receiving each placement.",
        icon: Layers
      },
      {
        title: "Compliance release",
        description: `${currencyFormatter.format(payoutVolume)} pending with ${complianceReviews} reviews in progress.`,
        hint: "Finance finalises reserves and supporting evidence before payout.",
        icon: ShieldCheck
      }
    ];

    return {
      totalSlots,
      projectedFill,
      fillPercent,
      depthCoverage,
      spilloverWindow,
      payoutVolume,
      leadershipPool,
      compressionSavings,
      oversightLevel,
      confidenceMessage,
      retentionRate,
      complianceReviews,
      timeline
    };
  }, [depth, monthlyEntrants, packValue, width]);

  return (
    <div
      className={cn(
        "grid h-full gap-6 rounded-[34px] border border-border/50 bg-white/85 p-6 shadow-xl backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:border-white/15 dark:bg-slate-900/80",
        className
      )}
    >
      <div className="space-y-2">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary dark:bg-white/10 dark:text-white">
          Matrix plan simulator
        </span>
        <h3 className="text-2xl font-semibold text-foreground dark:text-white">Forecast your forced matrix health.</h3>
        <p className="text-xs text-muted-foreground dark:text-white/70">
          Adjust width, depth, monthly entrants, and pack value to preview spillover, payouts, and compliance cadence.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <ControlGroup
          label="Matrix width"
          options={MATRIX_WIDTH_OPTIONS}
          formatOption={(value) => `${value} frontline slots`}
          selected={width}
          onSelect={setWidth}
        />
        <ControlGroup
          label="Matrix depth"
          options={MATRIX_DEPTH_OPTIONS}
          formatOption={(value) => `${value} levels`}
          selected={depth}
          onSelect={setDepth}
        />
        <ControlGroup
          label="Monthly entrants"
          options={MONTHLY_ENTRANT_OPTIONS}
          formatOption={(value) => `${numberFormatter.format(value)} joins`}
          selected={monthlyEntrants}
          onSelect={setMonthlyEntrants}
        />
        <ControlGroup
          label="Average pack value"
          options={PACK_VALUE_OPTIONS}
          formatOption={(value) => currencyFormatter.format(value)}
          selected={packValue}
          onSelect={setPackValue}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <StatCard
          icon={Layers}
          label="Capacity filled"
          primary={`${stats.fillPercent}% of ${numberFormatter.format(stats.totalSlots)} slots`}
          secondary={`Depth coverage ${stats.depthCoverage}%`}
        />
        <StatCard
          icon={BarChart3}
          label="Total payout preview"
          primary={currencyFormatter.format(stats.payoutVolume)}
          secondary={`${currencyFormatter.format(stats.leadershipPool)} leadership pool | ${currencyFormatter.format(stats.compressionSavings)} compression reserve`}
        />
        <StatCard
          icon={GaugeCircle}
          label="Spillover ready"
          primary={`${numberFormatter.format(stats.spilloverWindow)} placements`}
          secondary={`Retention outlook ${stats.retentionRate}% active`}
        />
        <StatCard
          icon={ShieldCheck}
          label="Compliance cadence"
          primary={stats.oversightLevel}
          secondary={`${stats.complianceReviews} reviews queued — ${stats.confidenceMessage}`}
        />
      </div>

      <div className="space-y-4 rounded-3xl border border-border/50 bg-background/80 p-5 dark:border-white/10 dark:bg-slate-950/60">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h4 className="text-sm font-semibold text-foreground">Execution timeline</h4>
            <p className="text-xs text-muted-foreground">Shareable snapshot for finance, compliance, and field leadership.</p>
          </div>
          <Sparkles className="h-5 w-5 text-primary" aria-hidden />
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.timeline.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="flex h-full flex-col gap-3 rounded-2xl border border-border/50 bg-background/60 p-4 dark:border-white/10">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <div className="space-y-1">
                  <h5 className="text-sm font-semibold text-foreground">{step.title}</h5>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>
                <p className="text-xs text-muted-foreground">{step.hint}</p>
              </article>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-dashed border-primary/40 bg-primary/5 p-4 text-sm text-primary dark:border-white/40 dark:text-white">
        <span>Export this scenario to align field enablement, finance reserves, and compliance reviews.</span>
        <Button variant="outline" size="sm" className="border-primary/40 text-primary hover:bg-primary/10 dark:border-white/50 dark:text-white">
          Share scenario
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
        </Button>
      </div>
    </div>
  );
}

type ControlGroupProps<T extends number> = {
  label: string;
  options: readonly T[];
  formatOption: (value: T) => string;
  selected: T;
  onSelect: (value: T) => void;
};

function ControlGroup<T extends number>({ label, options, formatOption, selected, onSelect }: ControlGroupProps<T>) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <Button
            key={option}
            type="button"
            variant={option === selected ? "default" : "outline"}
            size="sm"
            className={cn(
              "rounded-full border border-primary/40",
              option === selected
                ? "bg-primary text-primary-foreground hover:bg-primary/80"
                : "text-primary hover:bg-primary/10 dark:text-white"
            )}
            onClick={() => onSelect(option)}
          >
            {formatOption(option)}
          </Button>
        ))}
      </div>
    </div>
  );
}

type StatCardProps = {
  icon: typeof Users;
  label: string;
  primary: string;
  secondary: string;
};

function StatCard({ icon: Icon, label, primary, secondary }: StatCardProps) {
  return (
    <article className="flex h-full flex-col gap-3 rounded-3xl border border-border/50 bg-background/80 p-5 shadow-sm dark:border-white/10 dark:bg-slate-950/60">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{label}</h4>
      <p className="text-lg font-semibold text-foreground dark:text-white">{primary}</p>
      <p className="text-xs text-muted-foreground dark:text-white/70">{secondary}</p>
    </article>
  );
}
