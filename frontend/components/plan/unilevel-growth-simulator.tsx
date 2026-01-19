"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  CalendarRange,
  LineChart,
  Network,
  Sparkles,
  Users
} from "lucide-react";

type UnilevelGrowthSimulatorProps = {
  className?: string;
};

const DIRECT_ENROLLEES = [60, 140, 260] as const;
const ACTIVATION_RATES = [0.55, 0.68, 0.82] as const;
const LEVEL_DEPTHS = [3, 4, 5] as const;

const AVG_ORDER_MIN = 60;
const AVG_ORDER_MAX = 220;
const AVG_ORDER_STEP = 10;

export default function UnilevelGrowthSimulator({
  className
}: UnilevelGrowthSimulatorProps) {
  const [directEnrollees, setDirectEnrollees] = useState<(typeof DIRECT_ENROLLEES)[number]>(DIRECT_ENROLLEES[1]);
  const [activationRate, setActivationRate] = useState<(typeof ACTIVATION_RATES)[number]>(ACTIVATION_RATES[1]);
  const [levelDepth, setLevelDepth] = useState<(typeof LEVEL_DEPTHS)[number]>(LEVEL_DEPTHS[1]);
  const [avgOrderValue, setAvgOrderValue] = useState<number>(140);

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
    const activePromoters = Math.round(directEnrollees * activationRate);
    const downlineMultiplier = 1 + levelDepth * 0.7;
    const monthlyTeamVolume = activePromoters * avgOrderValue * downlineMultiplier;
    const commissionPool = monthlyTeamVolume * 0.27;
    const leadershipOverrides = monthlyTeamVolume * 0.08;
    const retentionRate = Math.min(0.94, 0.74 + activationRate * 0.25);
    const onboardingVelocity = Math.round(directEnrollees * 1.6);
    const cycleDays = 30;

    const metrics = [
      {
        label: "Active promoters",
        value: numberFormatter.format(activePromoters),
        detail: "Direct enrollees meeting personal volume after onboarding and coaching.",
        icon: Users
      },
      {
        label: "Monthly team volume",
        value: currencyFormatter.format(monthlyTeamVolume),
        detail: "Aggregate unilevel volume generated across paid levels this cycle.",
        icon: BarChart3
      },
      {
        label: "Commission pool",
        value: currencyFormatter.format(commissionPool),
        detail: "Projected payouts reserved for unilevel depth, generation bonuses, and incentives.",
        icon: LineChart
      },
      {
        label: "Leadership overrides",
        value: currencyFormatter.format(leadershipOverrides),
        detail: "Budget for rank incentives, lifestyle pools, and matching bonuses.",
        icon: Sparkles
      }
    ] as const;

    const timeline = [
      {
        title: "Week 1 – Recruit & align",
        detail: `Enable ${numberFormatter.format(onboardingVelocity)} warm prospects with onboarding journeys, ensuring activation rate targets of ${percentFormatter.format(activationRate)} are met.`,
        icon: Network
      },
      {
        title: "Week 2 – Deepen engagement",
        detail: `Coach sponsors to build depth ${levelDepth} levels down with playbooks, while marketing automations boost reorders to ${currencyFormatter.format(avgOrderValue)} per promoter.`,
        icon: Sparkles
      },
      {
        title: "Week 3 – Measure & adjust",
        detail: `Finance reviews ${currencyFormatter.format(commissionPool)} commission pool readiness; compliance clears overrides before payout.`,
        icon: BarChart3
      },
      {
        title: "Week 4 – Optimise",
        detail: `Leaders track retention at ${percentFormatter.format(retentionRate)} and redeploy campaigns to segments that need reinforcement.`,
        icon: CalendarRange
      }
    ] as const;

    return {
      activePromoters,
      monthlyTeamVolume,
      commissionPool,
      leadershipOverrides,
      retentionRate,
      onboardingVelocity,
      cycleDays,
      metrics,
      timeline
    };
  }, [activationRate, avgOrderValue, currencyFormatter, directEnrollees, levelDepth, numberFormatter, percentFormatter]);

  const sliderLabel = useMemo(
    () => currencyFormatter.format(avgOrderValue),
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
          Unilevel growth planner
        </p>
        <h3 className="text-xl font-semibold text-foreground dark:text-white">
          Model recruitment velocity, depth-driven volume, and payout reserves.
        </h3>
        <p className="text-sm text-muted-foreground dark:text-white/70">
          Adjust direct enrolments, activation health, and level depth to forecast how Cloud MLM Software keeps unilevel organisations predictable.
        </p>
      </header>

      <div className="grid gap-5">
        <div className="grid gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Direct enrollees / month</span>
          <div className="flex flex-wrap gap-2">
            {DIRECT_ENROLLEES.map((option) => (
              <Button
                key={option}
                type="button"
                size="sm"
                variant={option === directEnrollees ? "default" : "outline"}
                onClick={() => setDirectEnrollees(option)}
              >
                {numberFormatter.format(option)}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Activation rate</span>
          <div className="flex flex-wrap gap-2">
            {ACTIVATION_RATES.map((option) => (
              <Button
                key={option}
                type="button"
                size="sm"
                variant={option === activationRate ? "default" : "outline"}
                onClick={() => setActivationRate(option)}
              >
                {percentFormatter.format(option)}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Paid depth</span>
          <div className="flex flex-wrap gap-2">
            {LEVEL_DEPTHS.map((option) => (
              <Button
                key={option}
                type="button"
                size="sm"
                variant={option === levelDepth ? "default" : "outline"}
                onClick={() => setLevelDepth(option)}
              >
                {option} levels
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
            min={AVG_ORDER_MIN}
            max={AVG_ORDER_MAX}
            step={AVG_ORDER_STEP}
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
            {outcome.cycleDays}-day cadence
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
          Cloud MLM Software monitors activation velocity, depth health, and churn risk so unilevel organisations can prioritise coaching and compliance before growth stalls.
        </div>
      </div>
    </div>
  );
}
