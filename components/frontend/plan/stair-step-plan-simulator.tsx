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

type StairStepPlanSimulatorProps = {
  className?: string;
};

type TimelineStep = {
  title: string;
  description: string;
  hint: string;
  icon: typeof Users;
};

const BREAKAWAY_OPTIONS = [3, 4, 5] as const;
const FRONTLINE_OPTIONS = [6, 9, 12] as const;
const LEG_VOLUME_OPTIONS = [12000, 18000, 24000] as const;
const ENROLMENT_OPTIONS = [18, 32, 48] as const;

const numberFormatter = new Intl.NumberFormat("en-US");
const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

export default function StairStepPlanSimulator({ className }: StairStepPlanSimulatorProps) {
  const [breakawayRequirement, setBreakawayRequirement] = useState<number>(BREAKAWAY_OPTIONS[1]);
  const [frontlineCount, setFrontlineCount] = useState<number>(FRONTLINE_OPTIONS[1]);
  const [legVolume, setLegVolume] = useState<number>(LEG_VOLUME_OPTIONS[1]);
  const [newEnrolments, setNewEnrolments] = useState<number>(ENROLMENT_OPTIONS[1]);

  const stats = useMemo(() => {
    const overrideRate = breakawayRequirement === 3 ? 0.08 : breakawayRequirement === 4 ? 0.09 : 0.11;
    const emergingLegs = Math.min(frontlineCount, breakawayRequirement + Math.round(newEnrolments / 12));
    const foundationLegs = Math.max(frontlineCount - emergingLegs, 0);

    const managedVolume = emergingLegs * legVolume;
    const developingVolume = foundationLegs * legVolume * 0.45;
    const onboardingVolume = newEnrolments * 320;
    const totalGroupVolume = Math.round(managedVolume + developingVolume + onboardingVolume);

    const overridePayout = Math.round(totalGroupVolume * overrideRate);
    const leadershipPool = Math.round(totalGroupVolume * 0.04);
    const coachingHours = Math.max(8, Math.round(frontlineCount * 1.5 + newEnrolments * 0.5));
    const breakawayGap = Math.max(breakawayRequirement - emergingLegs, 0);
    const breakawayStatus = breakawayGap === 0 ? "Ready to break away" : `${breakawayGap} leg${breakawayGap === 1 ? "" : "s"} to qualify`;
    const complianceReviews = Math.max(3, Math.round(totalGroupVolume / 9000));
    const cycleDays = breakawayRequirement === 5 ? 42 : breakawayRequirement === 4 ? 36 : 30;
    const retentionRate = Math.min(95, 74 + emergingLegs * 2 + Math.round(newEnrolments / 6));
    const velocityScore = newEnrolments >= 40 ? "High momentum" : newEnrolments >= 28 ? "Steady climb" : "Needs activation";

    const timeline: TimelineStep[] = [
      {
        title: "Frontline pacing",
        description: `${numberFormatter.format(frontlineCount)} legs active, ${numberFormatter.format(emergingLegs)} manager-ready.`,
        hint: "Coach rising leaders to sustain personal and group volume for three periods.",
        icon: Users
      },
      {
        title: "Breakaway validation",
        description: `${complianceReviews} compliance reviews queued before override release.`,
        hint: "AML, KYC, and receipt evidence attached automatically via compliance workspace.",
        icon: ShieldCheck
      },
      {
        title: "Leadership payout",
        description: `${currencyFormatter.format(overridePayout)} projected override ready on day ${cycleDays}.`,
        hint: `Finance reserves ${currencyFormatter.format(leadershipPool)} for leadership pool distribution.`,
        icon: BarChart3
      }
    ];

    return {
      emergingLegs,
      breakawayStatus,
      overridePayout,
      totalGroupVolume,
      leadershipPool,
      coachingHours,
      complianceReviews,
      cycleDays,
      retentionRate,
      velocityScore,
      onboardingVolume,
      timeline
    };
  }, [breakawayRequirement, frontlineCount, legVolume, newEnrolments]);

  return (
    <div
      className={cn(
        "grid h-full gap-6 rounded-[34px] border border-border/50 bg-white/85 p-6 shadow-xl backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:border-white/15 dark:bg-slate-900/80",
        className
      )}
    >
      <div className="space-y-2">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary dark:bg-white/10 dark:text-white">
          Stair-step plan simulator
        </span>
        <h3 className="text-2xl font-semibold text-foreground dark:text-white">Stress-test your breakaway cadence.</h3>
        <p className="text-xs text-muted-foreground dark:text-white/70">
          Calibrate breakaway requirements, leg productivity, and enrolment pace to preview overrides, compliance load, and enablement needs.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <ControlGroup
          label="Breakaway requirement"
          options={BREAKAWAY_OPTIONS}
          formatOption={(value) => `${value} legs at manager+`}
          selected={breakawayRequirement}
          onSelect={setBreakawayRequirement}
        />
        <ControlGroup
          label="Active frontline legs"
          options={FRONTLINE_OPTIONS}
          formatOption={(value) => `${value} personally enrolled`}
          selected={frontlineCount}
          onSelect={setFrontlineCount}
        />
        <ControlGroup
          label="Average leg monthly CV"
          options={LEG_VOLUME_OPTIONS}
          formatOption={(value) => currencyFormatter.format(value)}
          selected={legVolume}
          onSelect={setLegVolume}
        />
        <ControlGroup
          label="New enrolments / month"
          options={ENROLMENT_OPTIONS}
          formatOption={(value) => `${numberFormatter.format(value)} joins`}
          selected={newEnrolments}
          onSelect={setNewEnrolments}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <StatCard
          icon={Target}
          label="Breakaway readiness"
          primary={`${stats.emergingLegs}/${breakawayRequirement} qualified`}
          secondary={stats.breakawayStatus}
        />
        <StatCard
          icon={BarChart3}
          label="Override projection"
          primary={currencyFormatter.format(stats.overridePayout)}
          secondary={`${currencyFormatter.format(stats.totalGroupVolume)} group CV | ${currencyFormatter.format(stats.leadershipPool)} leadership pool`}
        />
        <StatCard
          icon={TrendingUp}
          label="Field momentum"
          primary={stats.velocityScore}
          secondary={`${numberFormatter.format(newEnrolments)} enrolments/month | retention outlook ${stats.retentionRate}%`}
        />
        <StatCard
          icon={ShieldCheck}
          label="Compliance & enablement"
          primary={`${stats.complianceReviews} reviews | ${stats.cycleDays}-day cycle`}
          secondary={`Coaching bandwidth ${stats.coachingHours} hrs | onboarding ${currencyFormatter.format(stats.onboardingVolume)}`}
        />
      </div>

      <div className="space-y-4 rounded-3xl border border-border/50 bg-background/80 p-5 dark:border-white/10 dark:bg-slate-950/60">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h4 className="text-sm font-semibold text-foreground">Execution timeline</h4>
            <p className="text-xs text-muted-foreground">Share across compliance, finance, and field leadership for coordinated action.</p>
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
        <span>Export this forecast to keep field enablement, finance reserves, and compliance workflows aligned.</span>
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
