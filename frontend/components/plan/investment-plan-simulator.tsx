"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Activity,
  ArrowRight,
  GaugeCircle,
  LineChart,
  PiggyBank,
  ShieldCheck,
  TrendingUp,
  Users
} from "lucide-react";

type InvestmentPlanSimulatorProps = {
  className?: string;
};

type TimelineStep = {
  label: string;
  value: string;
  hint: string;
  highlighted?: boolean;
};

type ReturnSplit = {
  investors: number;
  field: number;
  company: number;
};

type InvestmentStats = {
  tier: number;
  investors: number;
  roiWindow: number;
  capitalRaised: number;
  projectedRevenue: number;
  projectedReturn: number;
  monthlyPayout: number;
  riskReserve: number;
  fieldBonusPool: number;
  investorProfitPool: number;
  companyRetention: number;
  activationRate: number;
  complianceReviews: number;
  timeline: TimelineStep[];
  split: ReturnSplit;
};

const INVESTMENT_TIERS = [500, 1000, 2500] as const;
const INVESTOR_COUNTS = [200, 400, 650] as const;
const ROI_WINDOWS = [6, 12, 18] as const;
const ROI_RATE_MAP: Record<number, number> = {
  6: 0.18,
  12: 0.32,
  18: 0.46
};
const RETURN_SPLIT: ReturnSplit = {
  investors: 45,
  field: 30,
  company: 25
};

export default function InvestmentPlanSimulator({ className }: InvestmentPlanSimulatorProps) {
  const [tier, setTier] = useState<number>(INVESTMENT_TIERS[1]);
  const [investors, setInvestors] = useState<number>(INVESTOR_COUNTS[1]);
  const [roiWindow, setRoiWindow] = useState<number>(ROI_WINDOWS[1]);
  const [avgSubscription, setAvgSubscription] = useState<number>(120);

  const formatter = useMemo(
    () =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
      }),
    []
  );

  const stats = useMemo<InvestmentStats>(() => {
    const capitalRaised = tier * investors;
    const roiRate = ROI_RATE_MAP[roiWindow] ?? 0.25;
    const activationRate = Math.min(100, Math.round(62 + avgSubscription / 4));
    const projectedRevenue = capitalRaised + investors * avgSubscription * (roiWindow / 3);
    const projectedReturnNominal = Math.round(capitalRaised * (1 + roiRate));
    const projectedReturn = Math.max(projectedReturnNominal, 0);
    const profitPool = Math.max(projectedReturn - capitalRaised, 0);

    const investorProfitPool = Math.round((profitPool * RETURN_SPLIT.investors) / 100);
    const fieldBonusPool = Math.round((profitPool * RETURN_SPLIT.field) / 100);
    const companyRetention = Math.max(profitPool - investorProfitPool - fieldBonusPool, 0);
    const riskReserve = Math.round(capitalRaised * 0.12);
    const monthlyPayout = roiWindow === 0 ? 0 : Math.round(investorProfitPool / roiWindow);
    const complianceReviews = Math.max(Math.round(investors * 0.18), 8);

    const timeline: TimelineStep[] = [
      {
        label: "Capital raised",
        value: formatter.format(capitalRaised),
        hint: `${investors.toLocaleString()} contributors at ${formatter.format(tier)} each.`,
        highlighted: true
      },
      {
        label: "Projected return",
        value: formatter.format(projectedReturn),
        hint: `${Math.round(roiRate * 100)}% ROI over ${roiWindow} months.`,
        highlighted: true
      },
      {
        label: "Monthly investor payout",
        value: formatter.format(monthlyPayout),
        hint: `Disbursed across ${roiWindow} settlement periods.`
      },
      {
        label: "Risk reserve",
        value: formatter.format(riskReserve),
        hint: "Locked for liquidity, claw-backs, and audit remediation."
      },
      {
        label: "Active subscription attach",
        value: `${activationRate}% adoption`,
        hint: `${formatter.format(avgSubscription)} average subscription uplift factored into compliance model.`
      }
    ];

    return {
      tier,
      investors,
      roiWindow,
      capitalRaised,
      projectedRevenue,
      projectedReturn,
      monthlyPayout,
      riskReserve,
      fieldBonusPool,
      investorProfitPool,
      companyRetention,
      activationRate,
      complianceReviews,
      timeline,
      split: RETURN_SPLIT
    };
  }, [avgSubscription, formatter, investors, roiWindow, tier]);

  const sliderDisplay = formatter.format(avgSubscription);

  return (
    <div
      className={cn(
        "flex h-full flex-col gap-6 rounded-3xl border border-border/60 bg-background/95 p-6 shadow-2xl backdrop-blur-xl dark:border-white/15 dark:bg-white/5",
        className
      )}
    >
      <header className="space-y-1">
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">Investment plan simulator</span>
        <h3 className="text-xl font-semibold text-foreground dark:text-white">
          Visualise investor returns, compliance buffers, and field incentives before launch.
        </h3>
      </header>

      <div className="grid gap-4">
        <div className="grid gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Investment tier</span>
          <div className="flex flex-wrap gap-2">
            {INVESTMENT_TIERS.map((option) => (
              <Button
                key={option}
                type="button"
                variant={option === stats.tier ? "default" : "outline"}
                size="sm"
                onClick={() => setTier(option)}
              >
                {formatter.format(option)}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Active investors</span>
          <div className="flex flex-wrap gap-2">
            {INVESTOR_COUNTS.map((option) => (
              <Button
                key={option}
                type="button"
                variant={option === stats.investors ? "default" : "outline"}
                size="sm"
                onClick={() => setInvestors(option)}
              >
                {option.toLocaleString()}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">ROI window</span>
          <div className="flex flex-wrap gap-2">
            {ROI_WINDOWS.map((option) => (
              <Button
                key={option}
                type="button"
                variant={option === stats.roiWindow ? "default" : "outline"}
                size="sm"
                onClick={() => setRoiWindow(option)}
              >
                {option} months
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wide text-muted-foreground">
            <span>Average subscription uplift (USD)</span>
            <span className="text-foreground dark:text-white">{sliderDisplay}</span>
          </div>
          <input
            type="range"
            min={80}
            max={240}
            step={10}
            value={avgSubscription}
            onChange={(event) => setAvgSubscription(Number(event.target.value))}
            className="h-1 w-full cursor-pointer appearance-none rounded-full bg-primary/30 accent-primary"
            aria-label="Average monthly subscription uplift"
          />
        </div>
      </div>

      <div className="relative grid gap-4 rounded-2xl border border-border/60 bg-muted/30 p-4 dark:border-white/10 dark:bg-white/5">
        <ReturnDistribution
          split={stats.split}
          investorAmount={stats.investorProfitPool}
          fieldAmount={stats.fieldBonusPool}
          companyAmount={stats.companyRetention}
          formatter={formatter}
        />
        <p className="text-xs text-muted-foreground">
          Align profit sharing across investors, field leaders, and corporate reserves before finalising compensation rules.
        </p>
      </div>

      <dl className="grid gap-3 rounded-2xl border border-border/60 bg-background/80 p-4 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <PiggyBank className="h-4 w-4 text-primary" aria-hidden />
            Capital raised
          </div>
          <span className="text-sm font-semibold text-foreground dark:text-white">{formatter.format(stats.capitalRaised)}</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <LineChart className="h-4 w-4 text-primary" aria-hidden />
            Projected return
          </div>
          <span className="text-sm font-semibold text-foreground dark:text-white">{formatter.format(stats.projectedReturn)}</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <TrendingUp className="h-4 w-4 text-primary" aria-hidden />
            Monthly investor payout
          </div>
          <span className="text-sm font-semibold text-foreground dark:text-white">{formatter.format(stats.monthlyPayout)}</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" aria-hidden />
            Risk reserve
          </div>
          <span className="text-sm font-semibold text-foreground dark:text-white">{formatter.format(stats.riskReserve)}</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Activity className="h-4 w-4 text-primary" aria-hidden />
            Compliance reviews
          </div>
          <span className="text-sm font-semibold text-foreground dark:text-white">{stats.complianceReviews}</span>
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

type ReturnDistributionProps = {
  split: ReturnSplit;
  investorAmount: number;
  fieldAmount: number;
  companyAmount: number;
  formatter: Intl.NumberFormat;
};

function ReturnDistribution({ split, investorAmount, fieldAmount, companyAmount, formatter }: ReturnDistributionProps) {
  const segments = [
    {
      key: "investors",
      label: "Investor profit share",
      percent: split.investors,
      amount: investorAmount,
      className: "bg-emerald-500/80 dark:bg-emerald-500/60",
      dotClass: "bg-emerald-500"
    },
    {
      key: "field",
      label: "Field bonus pool",
      percent: split.field,
      amount: fieldAmount,
      className: "bg-sky-500/80 dark:bg-sky-500/60",
      dotClass: "bg-sky-500"
    },
    {
      key: "company",
      label: "Company retention",
      percent: split.company,
      amount: companyAmount,
      className: "bg-purple-500/80 dark:bg-purple-500/60",
      dotClass: "bg-purple-500"
    }
  ];

  const totalPercent = segments.reduce((acc, segment) => acc + segment.percent, 0) || 1;

  return (
    <div className="space-y-4">
      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        Profit allocation across stakeholders
      </p>
      <div className="flex h-12 overflow-hidden rounded-full border border-border/60 bg-background/80 dark:border-white/10 dark:bg-white/5">
        {segments.map((segment) => {
          const width = (segment.percent / totalPercent) * 100;
          if (width <= 0) {
            return null;
          }

          return (
            <div
              key={segment.key}
              style={{ width: `${width}%` }}
              className={`${segment.className} h-full flex-none`}
              aria-label={`${segment.label} ${segment.percent}%`}
            />
          );
        })}
      </div>
      <div className="grid gap-2 text-xs text-muted-foreground">
        {segments.map((segment) => (
          <div key={segment.key} className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-2">
              <span className={`h-2.5 w-2.5 rounded-full ${segment.dotClass}`} aria-hidden />
              {segment.label}
            </span>
            <span className="text-sm font-semibold text-foreground dark:text-white">
              {formatter.format(segment.amount)} ({segment.percent}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
