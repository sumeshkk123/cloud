"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  DollarSign,
  GaugeCircle,
  LineChart,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users
} from "lucide-react";

type GrowthPlanSimulatorProps = {
  className?: string;
};

type TimelineStep = {
  title: string;
  description: string;
  hint: string;
  icon: typeof Users;
};

const TEAM_SIZE_OPTIONS = [150, 300, 600] as const;
const GROWTH_RATE_OPTIONS = [0.35, 0.6, 0.95] as const;
const AVG_VOLUME_OPTIONS = [160, 220, 300] as const;
const BONUS_RATE_OPTIONS = [0.08, 0.12, 0.16] as const;

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

const percentageFormatter = new Intl.NumberFormat("en-US", {
  style: "percent",
  maximumFractionDigits: 0
});

export default function GrowthPlanSimulator({ className }: GrowthPlanSimulatorProps) {
  const [teamSize, setTeamSize] = useState<number>(TEAM_SIZE_OPTIONS[1]);
  const [growthRate, setGrowthRate] = useState<number>(GROWTH_RATE_OPTIONS[1]);
  const [avgVolume, setAvgVolume] = useState<number>(AVG_VOLUME_OPTIONS[1]);
  const [bonusRate, setBonusRate] = useState<number>(BONUS_RATE_OPTIONS[1]);

  const stats = useMemo(() => {
    const newAssociates = Math.round(teamSize * growthRate);
    const totalAssociates = teamSize + newAssociates;
    const retentionRate = Math.min(0.92, 0.68 + growthRate * 0.12);
    const retainedAssociates = Math.round(totalAssociates * retentionRate);
    const grossVolume = retainedAssociates * avgVolume;
    const basePayoutRate = 0.27 + growthRate * 0.05;
    const basePayout = grossVolume * basePayoutRate;
    const growthBonusPool = grossVolume * bonusRate;
    const totalPayout = basePayout + growthBonusPool;
    const forecastedCash = totalPayout * 0.9;
    const retentionPercent = Math.round(retentionRate * 100);

    const oversightLevel = growthRate > 0.8 || bonusRate > 0.14 ? "Heightened review" : growthRate > 0.55 ? "Standard cadence" : "Momentum build";
    const confidenceMessage =
      growthRate > 0.8
        ? "Aggressive cycle—schedule compliance and cash-flow reviews."
        : growthRate > 0.55
          ? "On pace for accelerated growth with manageable oversight."
          : "Invest in enablement to unlock the next tier.";

    const timeline: TimelineStep[] = [
      {
        title: "Activate baseline",
        description: `${teamSize.toLocaleString()} associates complete onboarding and orientation.`,
        hint: "Confirm documentation and starter orders before entering the growth lane.",
        icon: Users
      },
      {
        title: "Checkpoint validation",
        description: `${newAssociates.toLocaleString()} new joins push growth to ${percentageFormatter.format(growthRate)}.`,
        hint: "AI forecasts highlight cohorts needing coaching or compliance support.",
        icon: TrendingUp
      },
      {
        title: "Payout readiness",
        description: `${currencyFormatter.format(totalPayout)} pending release after reserves and QA.`,
        hint: "Finance and compliance sign off via automated approvals and audit trails.",
        icon: ShieldCheck
      }
    ];

    return {
      newAssociates,
      totalAssociates,
      retainedAssociates,
      grossVolume,
      basePayout,
      growthBonusPool,
      totalPayout,
      forecastedCash,
      retentionPercent,
      oversightLevel,
      confidenceMessage,
      timeline
    };
  }, [teamSize, growthRate, avgVolume, bonusRate]);

  return (
    <div
      className={cn(
        "grid h-full gap-6 rounded-[34px] border border-border/50 bg-white/85 p-6 shadow-xl backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:border-white/15 dark:bg-slate-900/80",
        className
      )}
    >
      <div className="space-y-2">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary dark:bg-white/10 dark:text-white">
          Growth plan simulator
        </span>
        <h3 className="text-2xl font-semibold text-foreground dark:text-white">Project your next growth cycle.</h3>
        <p className="text-xs text-muted-foreground dark:text-white/70">
          Adjust team size, growth targets, and bonuses to preview payouts, retention, and oversight signals.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <ControlGroup
          label="Core team size"
          options={TEAM_SIZE_OPTIONS}
          formatOption={(value) => `${value.toLocaleString()} associates`}
          selected={teamSize}
          onSelect={setTeamSize}
        />
        <ControlGroup
          label="Growth rate target"
          options={GROWTH_RATE_OPTIONS}
          formatOption={(value) => percentageFormatter.format(value)}
          selected={growthRate}
          onSelect={setGrowthRate}
        />
        <ControlGroup
          label="Average monthly volume"
          options={AVG_VOLUME_OPTIONS}
          formatOption={(value) => currencyFormatter.format(value)}
          selected={avgVolume}
          onSelect={setAvgVolume}
        />
        <ControlGroup
          label="Leadership bonus rate"
          options={BONUS_RATE_OPTIONS}
          formatOption={(value) => percentageFormatter.format(value)}
          selected={bonusRate}
          onSelect={setBonusRate}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <StatCard
          icon={LineChart}
          label="Growth projection"
          primary={`${(stats.totalAssociates).toLocaleString()} associates`}
          secondary={`${stats.newAssociates.toLocaleString()} new | ${stats.retentionPercent}% retained`}
        />
        <StatCard
          icon={DollarSign}
          label="Total payout preview"
          primary={currencyFormatter.format(stats.totalPayout)}
          secondary={`${currencyFormatter.format(stats.basePayout)} base + ${currencyFormatter.format(stats.growthBonusPool)} growth bonuses`}
        />
        <StatCard
          icon={GaugeCircle}
          label="Available cash after reserves"
          primary={currencyFormatter.format(stats.forecastedCash)}
          secondary="Assumes 10% compliance & reinvestment holdback"
        />
        <StatCard
          icon={ShieldCheck}
          label="Oversight level"
          primary={stats.oversightLevel}
          secondary={stats.confidenceMessage}
        />
      </div>

      <div className="space-y-4 rounded-3xl border border-border/50 bg-background/80 p-5 dark:border-white/10 dark:bg-slate-950/60">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h4 className="text-sm font-semibold text-foreground">Execution timeline</h4>
            <p className="text-xs text-muted-foreground">Shareable with finance, compliance, and field leadership.</p>
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
        <span>
          Export this scenario to align forecasts, enablement, and compliance workflows in minutes.
        </span>
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
