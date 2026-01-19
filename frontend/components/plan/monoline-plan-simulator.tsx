"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BarChart3,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users
} from "lucide-react";

type MonolinePlanSimulatorProps = {
  className?: string;
};

type TimelineStep = {
  title: string;
  description: string;
  hint: string;
  icon: typeof Users;
};

const QUEUE_DEPTH_OPTIONS = [240, 360, 540] as const;
const DAILY_ENROLMENT_OPTIONS = [18, 28, 40] as const;
const PACK_VALUE_OPTIONS = [150, 240, 320] as const;
const REENTRY_RATE_OPTIONS = [0.12, 0.2, 0.28] as const;

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

export default function MonolinePlanSimulator({ className }: MonolinePlanSimulatorProps) {
  const [queueDepth, setQueueDepth] = useState<number>(QUEUE_DEPTH_OPTIONS[1]);
  const [dailyEnrolments, setDailyEnrolments] = useState<number>(DAILY_ENROLMENT_OPTIONS[1]);
  const [packValue, setPackValue] = useState<number>(PACK_VALUE_OPTIONS[1]);
  const [reentryRate, setReentryRate] = useState<number>(REENTRY_RATE_OPTIONS[1]);

  const stats = useMemo(() => {
    const cycleDays = Math.max(9, Math.round(queueDepth / Math.max(1, dailyEnrolments) * (1 - reentryRate * 0.35)));
    const weeklyThroughput = Math.round((dailyEnrolments + queueDepth * reentryRate / cycleDays) * 7);

    const monthlyVolume = dailyEnrolments * packValue * 30;
    const payoutVolume = Math.round(monthlyVolume * (1 + reentryRate * 0.4));
    const fastStartPool = Math.round(payoutVolume * 0.12);
    const loyaltyReserve = Math.round(payoutVolume * 0.05);

    const reentryPlacements = Math.round(queueDepth * reentryRate);
    const queueStability = reentryRate >= 0.25 ? "Breakaway-ready" : reentryRate >= 0.18 ? "Steady glide" : "Monitor churn";
    const retentionRate = Math.min(97, 78 + Math.round(reentryRate * 60));
    const complianceReviews = Math.max(6, Math.round(queueDepth * 0.04 + reentryPlacements * 0.25));

    const timeline: TimelineStep[] = [
      {
        title: "Queue ignition",
        description: `${numberFormatter.format(weeklyThroughput)} members cycle through the monoline each week.`,
        hint: "Track ID checks and payment clears before releasing payouts.",
        icon: Users
      },
      {
        title: "Re-entry unlock",
        description: `${numberFormatter.format(reentryPlacements)} legacy members re-enter to maintain pace.`,
        hint: "Retention journeys trigger automatically once re-entry is approved.",
        icon: Target
      },
      {
        title: "Compliance release",
        description: `${currencyFormatter.format(payoutVolume)} queued with ${complianceReviews} reviews in flight.`,
        hint: "Finance reconciles loyalty reserves and fast-start pools before disbursement.",
        icon: ShieldCheck
      }
    ];

    return {
      cycleDays,
      weeklyThroughput,
      payoutVolume,
      fastStartPool,
      loyaltyReserve,
      reentryPlacements,
      queueStability,
      retentionRate,
      complianceReviews,
      timeline
    };
  }, [dailyEnrolments, packValue, queueDepth, reentryRate]);

  return (
    <div
      className={cn(
        "grid h-full gap-6 rounded-[34px] border border-border/50 bg-white/85 p-6 shadow-xl backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:border-white/15 dark:bg-slate-900/80",
        className
      )}
    >
      <div className="space-y-2">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary dark:bg-white/10 dark:text-white">
          Monoline plan simulator
        </span>
        <h3 className="text-2xl font-semibold text-foreground dark:text-white">Forecast queue velocity and override health.</h3>
        <p className="text-xs text-muted-foreground dark:text-white/70">
          Adjust queue depth, intake pace, pack value, and re-entry rate to preview payouts, compliance workload, and retention impact.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <ControlGroup
          label="Queue depth"
          options={QUEUE_DEPTH_OPTIONS}
          formatOption={(value) => `${numberFormatter.format(value)} active positions`}
          selected={queueDepth}
          onSelect={setQueueDepth}
        />
        <ControlGroup
          label="Daily enrolments"
          options={DAILY_ENROLMENT_OPTIONS}
          formatOption={(value) => `${numberFormatter.format(value)} joins`}
          selected={dailyEnrolments}
          onSelect={setDailyEnrolments}
        />
        <ControlGroup
          label="Average pack value"
          options={PACK_VALUE_OPTIONS}
          formatOption={(value) => currencyFormatter.format(value)}
          selected={packValue}
          onSelect={setPackValue}
        />
        <ControlGroup
          label="Re-entry rate"
          options={REENTRY_RATE_OPTIONS}
          formatOption={(value) => percentFormatter.format(value)}
          selected={reentryRate}
          onSelect={setReentryRate}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <StatCard
          icon={Target}
          label="Queue readiness"
          primary={`${stats.queueStability}`}
          secondary={`${stats.reentryPlacements.toLocaleString()} re-entries | ${stats.cycleDays}-day cycle`}
        />
        <StatCard
          icon={BarChart3}
          label="Payout preview"
          primary={currencyFormatter.format(stats.payoutVolume)}
          secondary={`${currencyFormatter.format(stats.fastStartPool)} fast-start | ${currencyFormatter.format(stats.loyaltyReserve)} loyalty reserve`}
        />
        <StatCard
          icon={TrendingUp}
          label="Field momentum"
          primary={`Retention outlook ${stats.retentionRate}%`}
          secondary={`${numberFormatter.format(stats.weeklyThroughput)} members processed per week`}
        />
        <StatCard
          icon={ShieldCheck}
          label="Compliance load"
          primary={`${stats.complianceReviews} reviews pending`}
          secondary="Integrate AML, tax, and banking evidence before release"
        />
      </div>

      <div className="space-y-4 rounded-3xl border border-border/50 bg-background/80 p-5 dark:border-white/10 dark:bg-slate-950/60">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h4 className="text-sm font-semibold text-foreground">Execution timeline</h4>
            <p className="text-xs text-muted-foreground">Share this forecast with finance, compliance, and enablement.</p>
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
        <span>Export this scenario to align finance reserves, leader coaching, and compliance checkpoints.</span>
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
