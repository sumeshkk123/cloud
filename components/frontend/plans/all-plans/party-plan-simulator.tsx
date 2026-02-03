"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Activity,
  LineChart,
  PartyPopper,
  ShoppingBag,
  Users,
  UserPlus
} from "lucide-react";

type PartyPlanSimulatorProps = {
  className?: string;
};

type TimelineStep = {
  label: string;
  value: string;
  hint: string;
  highlighted?: boolean;
};

type FunnelStep = {
  label: string;
  value: string;
  hint: string;
  percent: number;
  highlighted?: boolean;
};

type ExperienceMode = {
  key: "social" | "product" | "business";
  label: string;
  buyerRate: number;
  avgOrder: number;
  reorderRate: number;
  hostConversionRate: number;
  recruitRate: number;
  description: string;
};

const PARTY_FREQUENCIES = [2, 3, 4] as const;
const ATTENDEE_COUNTS = [8, 12, 18] as const;

const EXPERIENCE_MODES: readonly ExperienceMode[] = [
  {
    key: "social",
    label: "Social sampling",
    buyerRate: 0.32,
    avgOrder: 68,
    reorderRate: 0.42,
    hostConversionRate: 0.24,
    recruitRate: 0.06,
    description: "Relaxed gatherings prioritising community and product discovery with curated bundles."
  },
  {
    key: "product",
    label: "Product showcase",
    buyerRate: 0.46,
    avgOrder: 94,
    reorderRate: 0.57,
    hostConversionRate: 0.29,
    recruitRate: 0.09,
    description: "Live demos and sampling stations that drive higher basket sizes and encore bookings."
  },
  {
    key: "business",
    label: "Business builder",
    buyerRate: 0.52,
    avgOrder: 118,
    reorderRate: 0.63,
    hostConversionRate: 0.34,
    recruitRate: 0.12,
    description: "Opportunity-focused events blending retail offers with onboarding pathways for future leaders."
  }
];

export default function PartyPlanSimulator({ className }: PartyPlanSimulatorProps) {
  const [cadence, setCadence] = useState<(typeof PARTY_FREQUENCIES)[number]>(3);
  const [attendees, setAttendees] = useState<(typeof ATTENDEE_COUNTS)[number]>(12);
  const [modeKey, setModeKey] = useState<ExperienceMode["key"]>("product");

  const mode = useMemo(() => EXPERIENCE_MODES.find((item) => item.key === modeKey) ?? EXPERIENCE_MODES[1], [modeKey]);

  const currencyFormatter = useMemo(
    () =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
      }),
    []
  );

  const percentFormatter = useMemo(
    () =>
      new Intl.NumberFormat("en-US", {
        style: "percent",
        maximumFractionDigits: 0
      }),
    []
  );

  const stats = useMemo(() => {
    const partiesPerMonth = cadence;
    const guestsPerParty = attendees;
    const totalGuests = partiesPerMonth * guestsPerParty;
    const invitesSent = Math.max(Math.round(totalGuests / 0.72), totalGuests);
    const buyers = Math.max(Math.round(totalGuests * mode.buyerRate), 0);
    const grossRetail = buyers * mode.avgOrder;
    const hostCredits = Math.round(grossRetail * 0.12);
    const fieldCommissions = Math.round(grossRetail * 0.27);
    const reorderForecast = Math.round(buyers * mode.avgOrder * mode.reorderRate * 0.6);
    const newHosts = Math.max(Math.round(totalGuests * mode.hostConversionRate), 0);
    const newConsultants = Math.max(Math.round(totalGuests * mode.recruitRate), 0);
    const avgPartySales = Math.round(grossRetail / partiesPerMonth);
    const prepWindow = Math.max(Math.round(18 - partiesPerMonth * 3), 6);
    const followUpWindow = Math.max(Math.round(6 + mode.reorderRate * 20), 9);

    const timeline: TimelineStep[] = [
      {
        label: "Prep window",
        value: `${prepWindow} days`,
        hint: "Average lead time from host booking to party night using automated checklists."
      },
      {
        label: "Party-day revenue",
        value: currencyFormatter.format(avgPartySales),
        hint: "Retail captured per party across similar experience types.",
        highlighted: true
      },
      {
        label: "Follow-up cadence",
        value: `${followUpWindow} days`,
        hint: "Time to close reorders, host credits, and compliance checks after the event."
      },
      {
        label: "New consultant onboarding",
        value: `${newConsultants.toLocaleString()} sign-ups`,
        hint: "Automated enrolment journeys triggered from the event dashboard."
      }
    ];

    const funnel: FunnelStep[] = [
      {
        label: "Invites confirmed",
        value: `${invitesSent.toLocaleString()} guests`,
        hint: "Set with SMS and email reminders tracked in Cloud MLM Software.",
        percent: 100
      },
      {
        label: "Guests attending",
        value: `${totalGuests.toLocaleString()} attendees`,
        hint: `${percentFormatter.format(totalGuests / invitesSent)} attendance rate benchmarked from 2024 hybrid party launches.`,
        percent: Math.min(Math.round((totalGuests / invitesSent) * 100), 100),
        highlighted: true
      },
      {
        label: "Purchasing guests",
        value: `${buyers.toLocaleString()} orders`,
        hint: `${percentFormatter.format(mode.buyerRate)} of attendees convert during the showcase.`,
        percent: invitesSent === 0 ? 0 : Math.min(Math.round((buyers / invitesSent) * 100), 100),
        highlighted: true
      },
      {
        label: "Follow-up parties booked",
        value: `${newHosts.toLocaleString()} hosts`,
        hint: `${percentFormatter.format(mode.hostConversionRate)} of attendees commit to future dates.`,
        percent: invitesSent === 0 ? 0 : Math.max(Math.round((newHosts / invitesSent) * 100), 2)
      },
      {
        label: "New consultants",
        value: `${newConsultants.toLocaleString()} leaders`,
        hint: `${percentFormatter.format(mode.recruitRate)} of guests advance into the business opportunity.`,
        percent: invitesSent === 0 ? 0 : Math.max(Math.round((newConsultants / invitesSent) * 100), 1)
      }
    ];

    return {
      partiesPerMonth,
      guestsPerParty,
      invitesSent,
      totalGuests,
      buyers,
      grossRetail,
      hostCredits,
      fieldCommissions,
      reorderForecast,
      newHosts,
      newConsultants,
      avgPartySales,
      timeline,
      funnel
    };
  }, [cadence, attendees, currencyFormatter, mode, percentFormatter]);

  const highlightCards = useMemo(
    () => [
      {
        icon: ShoppingBag,
        label: "Monthly retail volume",
        value: currencyFormatter.format(stats.grossRetail),
        hint: "Real-time sync with point-of-sale and e-commerce order capture."
      },
      {
        icon: LineChart,
        label: "Commission pool",
        value: currencyFormatter.format(stats.fieldCommissions),
        hint: "Assumes 27% aggregate field payout aligned with party velocity tiers."
      },
      {
        icon: PartyPopper,
        label: "Host rewards",
        value: currencyFormatter.format(stats.hostCredits),
        hint: "Calculated at 12% host credit, ready for automated issuance."
      },
      {
        icon: Activity,
        label: "Reorder forecast (60 days)",
        value: currencyFormatter.format(stats.reorderForecast),
        hint: `${percentFormatter.format(mode.reorderRate)} of buyers place a follow-up order with nurture journeys.`
      },
      {
        icon: Users,
        label: "Follow-up parties booked",
        value: `${stats.newHosts.toLocaleString()} future events`,
        hint: "Calendar sync and reminder workflows secure encore bookings."
      },
      {
        icon: UserPlus,
        label: "New consultants",
        value: `${stats.newConsultants.toLocaleString()} sign-ups`,
        hint: "Event dashboards surface prime prospects for sponsor follow-up."
      }
    ],
    [currencyFormatter, mode.reorderRate, percentFormatter, stats.fieldCommissions, stats.grossRetail, stats.hostCredits, stats.newConsultants, stats.newHosts, stats.reorderForecast]
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
          Party plan simulator
        </p>
        <h3 className="text-xl font-semibold text-foreground dark:text-white">
          Model host cadence, RSVPs, and payouts before you launch.
        </h3>
      </header>

      <div className="grid gap-4">
        <div className="grid gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Parties per consultant (monthly)
          </span>
          <div className="flex flex-wrap gap-2">
            {PARTY_FREQUENCIES.map((option) => (
              <Button
                key={option}
                type="button"
                variant={option === cadence ? "default" : "outline"}
                size="sm"
                onClick={() => setCadence(option)}
              >
                {`${option} parties`}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Average attendees per party
          </span>
          <div className="flex flex-wrap gap-2">
            {ATTENDEE_COUNTS.map((option) => (
              <Button
                key={option}
                type="button"
                variant={option === attendees ? "default" : "outline"}
                size="sm"
                onClick={() => setAttendees(option)}
              >
                {`${option} guests`}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Experience focus
          </span>
          <div className="flex flex-wrap gap-2">
            {EXPERIENCE_MODES.map((option) => (
              <Button
                key={option.key}
                type="button"
                variant={option.key === modeKey ? "default" : "outline"}
                size="sm"
                onClick={() => setModeKey(option.key)}
              >
                {option.label}
              </Button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">{mode.description}</p>
        </div>
      </div>

      <div className="grid gap-4 rounded-2xl border border-border/60 bg-muted/30 p-4 dark:border-white/10 dark:bg-white/5">
        <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Revenue snapshot</h4>
        <div className="grid gap-3 md:grid-cols-2">
          {highlightCards.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.label} className="flex flex-col gap-1 rounded-2xl border border-border/40 bg-background/80 p-3">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    <Icon className="h-4 w-4 text-primary" aria-hidden />
                    {card.label}
                  </span>
                </div>
                <span className="text-lg font-semibold text-foreground dark:text-white">{card.value}</span>
                <p className="text-xs text-muted-foreground">{card.hint}</p>
              </article>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-border/60 bg-muted/30 p-4 dark:border-white/10 dark:bg-white/5">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Event funnel</h4>
          <div className="mt-3 space-y-3">
            {stats.funnel.map((step) => (
              <div key={step.label} className="space-y-1">
                <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  <span>{step.label}</span>
                  <span className="text-foreground dark:text-white">{step.value}</span>
                </div>
                <div className="h-2 w-full rounded-full bg-border/50">
                  <div
                    className={cn(
                      "h-2 rounded-full bg-primary transition-all",
                      step.highlighted ? "bg-primary" : "bg-primary/70"
                    )}
                    style={{ width: `${Math.min(step.percent, 100)}%` }}
                  />
                </div>
                <p className="text-[11px] text-muted-foreground">{step.hint}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border/60 bg-muted/30 p-4 dark:border-white/10 dark:bg-white/5">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Operational timeline</h4>
          <div className="mt-3 space-y-3">
            {stats.timeline.map((step) => (
              <div
                key={step.label}
                className={cn(
                  "rounded-2xl border border-border/40 bg-background/80 p-3",
                  step.highlighted ? "border-primary/50" : ""
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {step.label}
                  </span>
                  <span className="text-sm font-semibold text-foreground dark:text-white">{step.value}</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{step.hint}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-xs text-muted-foreground">
        Benchmarks reflect 2024 Cloud MLM Software party plan launches across beauty, home goods, and wellness brands in the
        United States, Canada, Australia, and the UK.
      </p>
    </div>
  );
}
