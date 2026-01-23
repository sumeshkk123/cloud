"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Activity,
  ArrowRight,
  Gift,
  GaugeCircle,
  LineChart,
  PiggyBank,
  ShieldCheck,
  Users
} from "lucide-react";

type GiftPlanSimulatorProps = {
  className?: string;
};

type TimelineStep = {
  label: string;
  value: string;
  hint: string;
  highlighted?: boolean;
};

const CONTRIBUTION_TIERS = [100, 250, 500] as const;
const DONOR_COHORTS = [60, 120, 200] as const;
const RECYCLING_RATES = [0.35, 0.5, 0.65] as const;

const ADMIN_FEE_RATE = 0.08;

export default function GiftPlanSimulator({ className }: GiftPlanSimulatorProps) {
  const [tier, setTier] = useState<number>(CONTRIBUTION_TIERS[1]);
  const [donors, setDonors] = useState<number>(DONOR_COHORTS[1]);
  const [recycleRate, setRecycleRate] = useState<number>(RECYCLING_RATES[1]);
  const [avgBonus, setAvgBonus] = useState<number>(180);

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
    const totalContributions = tier * donors;
    const adminReserve = Math.round(totalContributions * ADMIN_FEE_RATE);
    const giftPool = totalContributions - adminReserve;
    const recycledDonors = Math.round(donors * recycleRate);
    const recycledValue = recycledDonors * tier;
    const newDonorRequirement = Math.max(donors - recycledDonors, 0);
    const payoutPool = giftPool + recycledValue;
    const beneficiaryBonus = Math.round(payoutPool / Math.max(donors, 1) + avgBonus);
    const complianceScore = Math.min(100, Math.round(65 + recycleRate * 25 + avgBonus / 4));
    const completionDays = Math.max(7, Math.round(12 + donors / 15));

    const timeline: TimelineStep[] = [
      {
        label: "Total contributions",
        value: formatter.format(totalContributions),
        hint: `${donors.toLocaleString()} donors at ${formatter.format(tier)} each.`,
        highlighted: true
      },
      {
        label: "Gift pool",
        value: formatter.format(giftPool),
        hint: `${Math.round((1 - ADMIN_FEE_RATE) * 100)}% goes directly to beneficiaries.`
      },
      {
        label: "Recycled donors",
        value: recycledDonors.toLocaleString() + " participants",
        hint: `${Math.round(recycleRate * 100)}% reinvestment keeps the cycle funded.`
      },
      {
        label: "Beneficiary bonus",
        value: formatter.format(beneficiaryBonus),
        hint: "Average payout per beneficiary including loyalty bonuses."
      }
    ];

    return {
      totalContributions,
      adminReserve,
      giftPool,
      recycledDonors,
      recycledValue,
      newDonorRequirement,
      payoutPool,
      beneficiaryBonus,
      complianceScore,
      completionDays,
      timeline
    };
  }, [avgBonus, donors, formatter, recycleRate, tier]);

  const sliderDisplay = formatter.format(avgBonus);

  return (
    <div
      className={cn(
        "flex h-full flex-col gap-6 rounded-3xl border border-border/60 bg-background/95 p-6 shadow-2xl backdrop-blur-xl dark:border-white/15 dark:bg-white/5",
        className
      )}
    >
      <header className="space-y-1">
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">Gift plan simulator</span>
        <h3 className="text-xl font-semibold text-foreground dark:text-white">
          Visualise gift cycles, reinvestment, and beneficiary outcomes before launch.
        </h3>
      </header>

      <div className="grid gap-4">
        <div className="grid gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Contribution tier</span>
          <div className="flex flex-wrap gap-2">
            {CONTRIBUTION_TIERS.map((option) => (
              <Button
                key={option}
                type="button"
                variant={option === tier ? "default" : "outline"}
                size="sm"
                onClick={() => setTier(option)}
              >
                {formatter.format(option)}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Donors this cycle</span>
          <div className="flex flex-wrap gap-2">
            {DONOR_COHORTS.map((option) => (
              <Button
                key={option}
                type="button"
                variant={option === donors ? "default" : "outline"}
                size="sm"
                onClick={() => setDonors(option)}
              >
                {option.toLocaleString()}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Reinvestment rate</span>
          <div className="flex flex-wrap gap-2">
            {RECYCLING_RATES.map((option) => (
              <Button
                key={option}
                type="button"
                variant={option === recycleRate ? "default" : "outline"}
                size="sm"
                onClick={() => setRecycleRate(option)}
              >
                {Math.round(option * 100)}%
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wide text-muted-foreground">
            <span>Loyalty bonus (USD)</span>
            <span className="text-foreground dark:text-white">{sliderDisplay}</span>
          </div>
          <input
            type="range"
            min={120}
            max={320}
            step={10}
            value={avgBonus}
            onChange={(event) => setAvgBonus(Number(event.target.value))}
            className="h-1 w-full cursor-pointer appearance-none rounded-full bg-primary/30 accent-primary"
            aria-label="Average loyalty bonus"
          />
        </div>
      </div>

      <div className="relative grid gap-4 rounded-2xl border border-border/60 bg-muted/30 p-4 dark:border-white/10 dark:bg-white/5">
        <GiftPlanDistribution
          totalContributions={stats.totalContributions}
          adminReserve={stats.adminReserve}
          giftPool={stats.giftPool}
          payoutPool={stats.payoutPool}
          formatter={formatter}
        />
        <p className="text-xs text-muted-foreground">
          Understand how contributions flow between reserves, beneficiary payouts, and recycled gifts.
        </p>
      </div>

      <dl className="grid gap-3 rounded-2xl border border-border/60 bg-background/80 p-4 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <LineChart className="h-4 w-4 text-primary" aria-hidden />
            Total contributions
          </div>
          <span className="text-sm font-semibold text-foreground dark:text-white">{formatter.format(stats.totalContributions)}</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <PiggyBank className="h-4 w-4 text-primary" aria-hidden />
            Beneficiary bonus
          </div>
          <span className="text-sm font-semibold text-foreground dark:text-white">{formatter.format(stats.beneficiaryBonus)}</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <GaugeCircle className="h-4 w-4 text-primary" aria-hidden />
            Compliance score
          </div>
          <span className="text-sm font-semibold text-foreground dark:text-white">{stats.complianceScore}%</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Activity className="h-4 w-4 text-primary" aria-hidden />
            Cycle completion (days)
          </div>
          <span className="text-sm font-semibold text-foreground dark:text-white">{stats.completionDays}</span>
        </div>
      </dl>

      <div className="grid gap-3">
        {stats.timeline.map((step) => (
          <div
            key={step.label}
            className={cn(
              "flex items-start gap-3 rounded-3xl border border-border/60 p-3 text-sm dark:border-white/10",
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

type GiftPlanDistributionProps = {
  totalContributions: number;
  adminReserve: number;
  giftPool: number;
  payoutPool: number;
  formatter: Intl.NumberFormat;
};

function GiftPlanDistribution({ totalContributions, adminReserve, giftPool, payoutPool, formatter }: GiftPlanDistributionProps) {
  return (
    <div className="space-y-4">
      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Contribution allocation</p>
      <div className="grid gap-2 text-xs text-muted-foreground">
        <div className="flex items-center justify-between">
          <span>Total contributions</span>
          <span className="text-sm font-semibold text-foreground dark:text-white">{formatter.format(totalContributions)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Administrative reserve</span>
          <span className="text-sm font-semibold text-foreground dark:text-white">{formatter.format(adminReserve)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Gift pool (initial)</span>
          <span className="text-sm font-semibold text-foreground dark:text-white">{formatter.format(giftPool)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Total payout pool</span>
          <span className="text-sm font-semibold text-foreground dark:text-white">{formatter.format(payoutPool)}</span>
        </div>
      </div>
    </div>
  );
}
