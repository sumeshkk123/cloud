"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Activity,
  ArrowRight,
  GaugeCircle,
  LineChart,
  Rocket,
  Users
} from "lucide-react";

type PassUpFlowSimulatorProps = {
  className?: string;
  variant?: "pass-up" | "binary" | "auto-fill" | "click" | "crowd" | "emgoldex" | "gift";
};

type TimelineStep = {
  label: string;
  value: string;
  hint: string;
  highlighted?: boolean;
};

const PASS_UP_REQUIREMENTS = [1, 2, 3] as const;
const PASS_UP_PROMOTERS = [120, 240, 360] as const;

const BINARY_PAIR_REQUIREMENTS = [200, 300, 450] as const;
const BINARY_DISTRIBUTORS = [180, 360, 540] as const;

const AUTO_MATRIX_WIDTHS = [2, 3, 4] as const;
const AUTO_MATRIX_DEPTHS = [4, 5, 6] as const;
const AUTO_ENTRANT_RATES = [150, 240, 360, 480] as const;

const CLICK_PAYOUT_RATES = [0.35, 0.55, 0.75] as const;
const CLICK_PROMOTER_COUNTS = [150, 300, 600] as const;
const CLICK_TRAFFIC_SEGMENTS = [140, 220, 320, 420] as const; // average monthly clicks per affiliate

const CROWD_GOAL_OPTIONS = [50000, 100000, 180000] as const;
const CROWD_DONOR_COHORTS = [140, 260, 420] as const;
const CROWD_MATCHING_POOL = [5000, 12000, 20000] as const;
const EMGOLDEX_REENTRY_RATES = [0.25, 0.35, 0.45] as const;
const GOLD_TABLE_SLOTS = [8, 16, 32] as const;
const GOLD_BUYIN_PACKS = [450, 700, 1200] as const;
const GIFT_STAGE_LEVELS = [2, 3, 4] as const;
const GIFT_ACTIVE_CIRCLES = [40, 80, 140] as const;
const GIFT_HOLD_RATES = [0.05, 0.08, 0.12] as const;

type PassUpStats = {
  variant: "pass-up";
  passUpCount: number;
  passUpsRouted: number;
  ownedLegs: number;
  payoutVolume: number;
  coachingAlerts: number;
  cycleDays: number;
  timeline: TimelineStep[];
};

type BinaryStats = {
  variant: "binary";
  pairRequirement: number;
  leftVolume: number;
  rightVolume: number;
  matchedVolume: number;
  matchedPairs: number;
  payoutVolume: number;
  carryOverVolume: number;
  flushRisk: number;
  cycleDays: number;
  timeline: TimelineStep[];
};

type AutoFillStats = {
  variant: "auto-fill";
  matrixWidth: number;
  matrixDepth: number;
  matrixCapacity: number;
  cyclesCompleted: number;
  spilloverQueue: number;
  fillRate: number;
  payoutVolume: number;
  reentriesTriggered: number;
  cycleDays: number;
  timeline: TimelineStep[];
};

type ClickStats = {
  variant: "click";
  payoutRate: number;
  activePromoters: number;
  clicksPerPromoter: number;
  totalClicks: number;
  qualifyingClicks: number;
  conversions: number;
  conversionRate: number;
  grossPayout: number;
  revenue: number;
  roi: number;
  complianceReviews: number;
  cycleDays: number;
  timeline: TimelineStep[];
};

type CrowdStats = {
  variant: "crowd";
  campaignGoal: number;
  donorTeams: number;
  avgPledge: number;
  matchingPool: number;
  platformFeeRate: number;
  totalRaised: number;
  feeReserve: number;
  netPayoutPool: number;
  roi: number;
  complianceReviews: number;
  disbursementDays: number;
  timeline: TimelineStep[];
};

type EmgoldexStats = {
  variant: "emgoldex";
  boardSlots: number;
  buyIn: number;
  reinvestmentRate: number;
  cycleTime: number;
  expectedPayout: number;
  leadershipBonus: number;
  payoutPool: number;
  complianceReviews: number;
  timeline: TimelineStep[];
};

type GiftStats = {
  variant: "gift";
  stageCount: number;
  activeCircles: number;
  donorsProcessed: number;
  grossInflow: number;
  complianceHold: number;
  reentryReserve: number;
  netPayoutPool: number;
  flaggedReviews: number;
  payoutVelocity: number;
  timeline: TimelineStep[];
};

type SimulatorStats =
  | PassUpStats
  | BinaryStats
  | AutoFillStats
  | ClickStats
  | CrowdStats
  | EmgoldexStats
  | GiftStats;

type SimulatorCopy = {
  badge: string;
  title: string;
  requirementLabel: string;
  requirementOption: (value: number) => string;
  participantsLabel: string;
  participantsOption: (value: number) => string;
  sliderLabel: string;
  diagramCaption: string;
  extraControl?: {
    label: string;
    optionFormatter: (value: number) => string;
    options: readonly number[];
  };
};

export default function PassUpFlowSimulator({
  className,
  variant = "pass-up"
}: PassUpFlowSimulatorProps) {
  const [requirement, setRequirement] = useState<number>(() => {
    if (variant === "binary") {
      return BINARY_PAIR_REQUIREMENTS[1];
    }
    if (variant === "auto-fill") {
      return AUTO_MATRIX_WIDTHS[1];
    }
    if (variant === "click") {
      return CLICK_PAYOUT_RATES[1];
    }
    if (variant === "gift") {
      return GIFT_STAGE_LEVELS[1];
    }
    return PASS_UP_REQUIREMENTS[1];
  });
  const [participants, setParticipants] = useState<number>(() => {
    if (variant === "binary") {
      return BINARY_DISTRIBUTORS[1];
    }
    if (variant === "auto-fill") {
      return AUTO_MATRIX_DEPTHS[1];
    }
    if (variant === "click") {
      return CLICK_PROMOTER_COUNTS[1];
    }
    if (variant === "gift") {
      return GIFT_ACTIVE_CIRCLES[1];
    }
    return PASS_UP_PROMOTERS[1];
  });
  const [avgPackValue, setAvgPackValue] = useState<number>(() => {
    if (variant === "binary") {
      return 220;
    }
    if (variant === "auto-fill") {
      return 180;
    }
    if (variant === "click") {
      return 110;
    }
    if (variant === "crowd") {
      return 160;
    }
    if (variant === "emgoldex") {
      return 450;
    }
    if (variant === "gift") {
      return 180;
    }
    return 420;
  });
  const [autoEntrants, setAutoEntrants] = useState<number>(AUTO_ENTRANT_RATES[1]);
  const [clickTraffic, setClickTraffic] = useState<number>(CLICK_TRAFFIC_SEGMENTS[1]);
  const [crowdMatchingPool, setCrowdMatchingPool] = useState<number>(CROWD_MATCHING_POOL[1]);
  const [emgoldexReentryRate, setEmgoldexReentryRate] = useState<number>(0.35);
  const [giftHoldRate, setGiftHoldRate] = useState<number>(GIFT_HOLD_RATES[1]);

  const requirementOptions =
    variant === "binary"
      ? BINARY_PAIR_REQUIREMENTS
      : variant === "auto-fill"
        ? AUTO_MATRIX_WIDTHS
        : variant === "click"
          ? CLICK_PAYOUT_RATES
          : variant === "crowd"
            ? CROWD_GOAL_OPTIONS
            : variant === "emgoldex"
              ? GOLD_TABLE_SLOTS
              : variant === "gift"
                ? GIFT_STAGE_LEVELS
                : PASS_UP_REQUIREMENTS;

  const participantOptions =
    variant === "binary"
      ? BINARY_DISTRIBUTORS
      : variant === "auto-fill"
        ? AUTO_MATRIX_DEPTHS
        : variant === "click"
          ? CLICK_PROMOTER_COUNTS
          : variant === "crowd"
            ? CROWD_DONOR_COHORTS
            : variant === "emgoldex"
              ? GOLD_BUYIN_PACKS
              : variant === "gift"
                ? GIFT_ACTIVE_CIRCLES
                : PASS_UP_PROMOTERS;

  const sliderConfig =
    variant === "binary"
      ? { min: 120, max: 360, step: 10 }
      : variant === "auto-fill"
        ? { min: 120, max: 320, step: 10 }
        : variant === "click"
          ? { min: 60, max: 220, step: 10 }
          : variant === "crowd"
            ? { min: 80, max: 320, step: 10 }
            : variant === "emgoldex"
              ? { min: 350, max: 1500, step: 50 }
              : variant === "gift"
                ? { min: 90, max: 480, step: 10 }
                : { min: 250, max: 650, step: 10 };

  const formatter = useMemo(() => {
    const locale = variant === "pass-up" ? "en-AU" : "en-US";
    const currency = variant === "pass-up" ? "AUD" : "USD";
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      maximumFractionDigits: 0
    });
  }, [variant]);

  const usdFormatter = useMemo(
    () =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2
      }),
    []
  );

  const copy = useMemo<SimulatorCopy>(() => {
    if (variant === "binary") {
      return {
        badge: "Binary modelling",
        title: "Forecast leg matches, carryover, and payout velocity.",
        requirementLabel: "Pairing threshold (PV)",
        requirementOption: (value: number) => `${value} PV`,
        participantsLabel: "Active distributors this cycle",
        participantsOption: (value: number) => value.toString(),
        sliderLabel: "Average personal volume (USD)",
        diagramCaption:
          "Visualise the relationship between leg volume, matched cycles, and carryover before finalising binary edits."
      };
    }

    if (variant === "auto-fill") {
      return {
        badge: "Auto-fill matrix simulator",
        title: "Model how the forced matrix fills, cycles, and queues in real time.",
        requirementLabel: "Matrix width",
        requirementOption: (value: number) => `${value}-wide`,
        participantsLabel: "Matrix depth",
        participantsOption: (value: number) => `${value} levels`,
        sliderLabel: "Average product pack value (USD)",
        diagramCaption:
          "Track level saturation, queue health, and spillover before rolling auto-fill rules to the field.",
        extraControl: {
          label: "New entrants every 30 days",
          optionFormatter: (value: number) => `${value} members`,
          options: AUTO_ENTRANT_RATES
        }
      };
    }

    if (variant === "click") {
      return {
        badge: "Click marketing simulator",
        title: "Project pay-per-click throughput, payouts, and ROI.",
        requirementLabel: "Pay per click",
        requirementOption: (value: number) => usdFormatter.format(value),
        participantsLabel: "Active affiliates",
        participantsOption: (value: number) => value.toString(),
        sliderLabel: "Average order value (USD)",
        diagramCaption:
          "Visualise how verified clicks translate into payouts, conversions, and ROI before the campaign launches.",
        extraControl: {
          label: "Monthly clicks per affiliate",
          optionFormatter: (value: number) => `${value} clicks`,
          options: CLICK_TRAFFIC_SEGMENTS
        }
      };
    }

    if (variant === "crowd") {
      return {
        badge: "Crowd funding simulator",
        title: "Project pooled contributions, matching, and payout readiness.",
        requirementLabel: "Campaign goal",
        requirementOption: (value: number) => formatter.format(value),
        participantsLabel: "Active contributors",
        participantsOption: (value: number) => value.toString(),
        sliderLabel: "Average pledge (USD)",
        diagramCaption:
          "Track contribution flow, reserve requirements, and net payouts before launching a new crowd funding wave.",
        extraControl: {
          label: "Matching pool reserve",
          optionFormatter: (value: number) => formatter.format(value),
          options: CROWD_MATCHING_POOL
        }
      };
    }

    if (variant === "emgoldex") {
      return {
        badge: "Gold board simulator",
        title: "Model Emgoldex table progression, payouts, and reinvestment.",
        requirementLabel: "Board capacity",
        requirementOption: (value: number) => `${value} slots`,
        participantsLabel: "Buy-in amount",
        participantsOption: (value: number) => formatter.format(value),
        sliderLabel: "Average gold payout (USD)",
        diagramCaption:
          "Visualise how tables fill, reinvest, and award bonuses before adjusting your Emgoldex compensation rules.",
        extraControl: {
          label: "Re-entry rate",
          optionFormatter: (value: number) => `${Math.round(value * 100)}%`,
          options: EMGOLDEX_REENTRY_RATES
        }
      };
    }

    if (variant === "gift") {
      return {
        badge: "Gift circle simulator",
        title: "Model donation stages, reserves, and compliance holds before launch.",
        requirementLabel: "Gifting stages",
        requirementOption: (value: number) => `${value} stages`,
        participantsLabel: "Active circles",
        participantsOption: (value: number) => `${value} circles`,
        sliderLabel: "Average gift amount (USD)",
        diagramCaption:
          "Visualise how contributions, reserves, and holds move through each gifting stage to keep liquidity balanced.",
        extraControl: {
          label: "Compliance hold",
          optionFormatter: (value: number) => `${Math.round(value * 100)}%`,
          options: GIFT_HOLD_RATES
        }
      };
    }

    return {
      badge: "Pass-up flow simulator",
      title: "Visualise how enrolments travel through your Australian X-UP rules.",
      requirementLabel: "Pass-up requirement",
      requirementOption: (value: number) => `${value}-up`,
      participantsLabel: "Promoters entering queue",
      participantsOption: (value: number) => value.toString(),
      sliderLabel: "Average pack value (AUD)",
      diagramCaption:
        "Nodes highlight how many recruits pass upward versus stay with the enrolling promoter. Adjust the inputs to stress-test throughput before launch."
    };
  }, [usdFormatter, variant]);

  const extraControlValue =
    variant === "auto-fill"
      ? autoEntrants
      : variant === "click"
        ? clickTraffic
        : variant === "crowd"
          ? crowdMatchingPool
          : variant === "emgoldex"
            ? emgoldexReentryRate
            : variant === "gift"
              ? giftHoldRate
              : undefined;
  const extraControl = copy.extraControl;

  const stats = useMemo<SimulatorStats>(() => {
    if (variant === "binary") {
      const pairRequirement = requirement;
      const activeDistributors = participants;
      const totalVolume = activeDistributors * avgPackValue;
      const balanceBias =
        pairRequirement === 200 ? 0.56 : pairRequirement === 300 ? 0.6 : 0.64;
      const leftVolume = Math.round(totalVolume * balanceBias);
      const rightVolume = Math.max(Math.round(totalVolume - leftVolume), 0);
      const matchedVolume = Math.min(leftVolume, rightVolume);
      const matchedPairs =
        pairRequirement === 0 ? 0 : Math.max(Math.floor(matchedVolume / pairRequirement), 0);
      const payoutVolume = Math.round(matchedPairs * pairRequirement * 0.12);
      const carryOverVolume = Math.max(leftVolume, rightVolume) - matchedVolume;
      const flushRisk =
        totalVolume === 0 ? 0 : Math.min(Math.round((carryOverVolume / totalVolume) * 100), 100);
      const cycleDays = Math.max(Math.round(9 + pairRequirement / 40), 10);

      const timeline: TimelineStep[] = [
        {
          label: "Left leg volume",
          value: formatter.format(leftVolume),
          hint: "Spillover and sponsor activity forming the power leg."
        },
        {
          label: "Right leg volume",
          value: formatter.format(rightVolume),
          hint: "Team-driven profit leg momentum ready for matching.",
          highlighted: true
        },
        {
          label: "Matched cycles",
          value: `${matchedPairs} cycles`,
          hint: `${pairRequirement} PV threshold per cycle.`,
          highlighted: true
        },
        {
          label: "Carryover bank",
          value: formatter.format(carryOverVolume),
          hint: "Volume retained on the stronger leg awaiting balance."
        }
      ];

      return {
        variant: "binary",
        pairRequirement,
        leftVolume,
        rightVolume,
        matchedVolume,
        matchedPairs,
        payoutVolume,
        carryOverVolume,
        flushRisk,
        cycleDays,
        timeline
      };
    }

    if (variant === "auto-fill") {
      const matrixWidth = requirement;
      const matrixDepth = participants;
      const entrants = autoEntrants;
      const matrixCapacity =
        matrixWidth === 1
          ? matrixDepth
          : Math.max(
              Math.round((Math.pow(matrixWidth, matrixDepth) - 1) / (matrixWidth - 1)),
              matrixDepth
            );
      const seatsFilled = Math.min(entrants, matrixCapacity);
      const fillRate = matrixCapacity === 0 ? 0 : Math.round((seatsFilled / matrixCapacity) * 100);
      const cyclesCompleted = matrixCapacity === 0 ? 0 : Math.floor(entrants / matrixCapacity);
      const spilloverQueue = entrants - cyclesCompleted * matrixCapacity;
      const payoutVolume = Math.round(cyclesCompleted * matrixCapacity * avgPackValue * 0.4);
      const reentriesTriggered = Math.max(Math.round(cyclesCompleted * matrixWidth * 0.75), 0);
      const cycleDays = Math.max(
        Math.round((matrixCapacity / Math.max(entrants, 1)) * 30),
        4
      );

      const timeline: TimelineStep[] = [
        {
          label: "Matrix capacity",
          value: `${matrixCapacity} seats`,
          hint: "Total positions before a cycle closes."
        },
        {
          label: "Entrants processed",
          value: `${entrants} members`,
          hint: "New distributors auto-placed this period.",
          highlighted: true
        },
        {
          label: "Cycles completed",
          value: `${cyclesCompleted} cycles`,
          hint: "Full matrices closed and paid out.",
          highlighted: true
        },
        {
          label: "Spillover queue",
          value: `${spilloverQueue} waiting`,
          hint: "Members staged for the next matrix rotation."
        }
      ];

      return {
        variant: "auto-fill",
        matrixWidth,
        matrixDepth,
        matrixCapacity,
        cyclesCompleted,
        spilloverQueue,
        fillRate,
        payoutVolume,
        reentriesTriggered,
        cycleDays,
        timeline
      };
    }

    if (variant === "click") {
      const payoutRate = requirement;
      const activePromoters = participants;
      const clicksPerPromoter = clickTraffic;
      const totalClicks = activePromoters * clicksPerPromoter;
      const qualifyingClicks = Math.round(totalClicks * 0.92);
      const conversionRate = 0.024;
      const conversions = Math.round(qualifyingClicks * conversionRate);
      const grossPayout = Math.round(totalClicks * payoutRate);
      const revenue = Math.round(conversions * avgPackValue);
      const roi = grossPayout === 0 ? 0 : ((revenue - grossPayout) / grossPayout) * 100;
      const complianceReviews = Math.max(Math.round(totalClicks * 0.01), 12);
      const cycleDays = 30;

      const timeline: TimelineStep[] = [
        {
          label: "Network clicks processed",
          value: `${totalClicks.toLocaleString()} clicks`,
          hint: "Total tracked activity before fraud filters.",
          highlighted: true
        },
        {
          label: "Verified clicks",
          value: `${qualifyingClicks.toLocaleString()} approved`,
          hint: "After duplicate and bot suppression.",
          highlighted: true
        },
        {
          label: "Conversion events",
          value: `${conversions.toLocaleString()} orders`,
          hint: `At ${(conversionRate * 100).toFixed(1)}% conversion with current creatives.`
        },
        {
          label: "ROI margin",
          value: `${roi.toFixed(1)}% margin`,
          hint: "Revenue contribution compared with payouts."
        }
      ];

      return {
        variant: "click",
        payoutRate,
        activePromoters,
        clicksPerPromoter,
        totalClicks,
        qualifyingClicks,
        conversions,
        conversionRate,
        grossPayout,
        revenue,
        roi,
        complianceReviews,
        cycleDays,
        timeline
      };
    }

    if (variant === "crowd") {
      const campaignGoal = requirement;
      const donorTeams = participants;
      const avgPledge = avgPackValue;
      const matchingPool = crowdMatchingPool;
      const platformFeeRate = 0.08;
      const totalRaised = donorTeams * avgPledge + matchingPool;
      const feeReserve = Math.round(totalRaised * platformFeeRate);
      const netPayoutPool = Math.max(totalRaised - feeReserve, 0);
      const roi = campaignGoal === 0 ? 0 : ((netPayoutPool - campaignGoal) / campaignGoal) * 100;
      const complianceReviews = Math.max(Math.round(donorTeams * 0.12), 6);
      const disbursementDays = Math.max(12 + Math.round(matchingPool / 2500), 14);

      const timeline: TimelineStep[] = [
        {
          label: "Contributor pledges",
          value: formatter.format(donorTeams * avgPledge),
          hint: "Total raised directly from contributor activity.",
          highlighted: true
        },
        {
          label: "Matching pool",
          value: formatter.format(matchingPool),
          hint: "Corporate or leader-backed boosts applied to the campaign.",
          highlighted: true
        },
        {
          label: "Platform reserve",
          value: formatter.format(feeReserve),
          hint: `${(platformFeeRate * 100).toFixed(1)}% retained for processing, compliance, and refunds.`
        },
        {
          label: "Net disbursement",
          value: formatter.format(netPayoutPool),
          hint: "Funds cleared for beneficiaries once compliance checks pass."
        }
      ];

      return {
        variant: "crowd",
        campaignGoal,
        donorTeams,
        avgPledge,
        matchingPool,
        platformFeeRate,
        totalRaised,
        feeReserve,
        netPayoutPool,
        roi,
        complianceReviews,
        disbursementDays,
        timeline
      };
    }

    if (variant === "emgoldex") {
      const boardSlots = requirement;
      const buyIn = participants;
      const averagePayout = avgPackValue;
      const reentryRate = emgoldexReentryRate;
      const cycleTime = Math.max(Math.round(10 + boardSlots / 2), 8);
      const expectedPayout = Math.round(averagePayout * 8);
      const reinvestmentReserve = Math.round(expectedPayout * reentryRate);
      const leadershipBonus = Math.round(expectedPayout * 0.1);
      const payoutPool = expectedPayout - reinvestmentReserve + leadershipBonus;
      const complianceReviews = Math.max(Math.round(boardSlots * 0.15), 4);

      const timeline: TimelineStep[] = [
        {
          label: "Table capacity",
          value: `${boardSlots} entries`,
          hint: "Slots filled before payout triggers.",
          highlighted: true
        },
        {
          label: "Re-entry reserve",
          value: formatter.format(reinvestmentReserve),
          hint: `${Math.round(reentryRate * 100)}% recycled to keep the table moving.`,
          highlighted: true
        },
        {
          label: "Member payout",
          value: formatter.format(expectedPayout - reinvestmentReserve),
          hint: "Take-home value once reserves are allocated."
        },
        {
          label: "Leadership bonus",
          value: formatter.format(leadershipBonus),
          hint: "Reward for table captains and top enrollers."
        }
      ];

      return {
        variant: "emgoldex",
        boardSlots,
        buyIn,
        reinvestmentRate: reentryRate,
        cycleTime,
        expectedPayout,
        leadershipBonus,
        payoutPool,
        complianceReviews,
        timeline
      };
    }

    if (variant === "gift") {
      const stageCount = requirement;
      const activeCircles = participants;
      const donorsPerCircle = Math.max(stageCount * 4, 1);
      const donorsProcessed = Math.max(activeCircles * donorsPerCircle, 0);
      const grossInflow = Math.max(Math.round(donorsProcessed * avgPackValue), 0);
      const complianceHold = Math.round(grossInflow * giftHoldRate);
      const reentryReserve = Math.round(grossInflow * 0.18);
      const netPayoutPool = Math.max(grossInflow - complianceHold - reentryReserve, 0);
      const flaggedReviews = Math.max(Math.round(donorsProcessed * giftHoldRate * 0.35), 2);
      const payoutVelocity = Math.max(Math.round(10 + stageCount * 4 - activeCircles / 20), 6);

      const timeline: TimelineStep[] = [
        {
          label: "Donors processed",
          value: `${donorsProcessed.toLocaleString()} contributors`,
          hint: "Members completing gifts across all live circles.",
          highlighted: true
        },
        {
          label: "Compliance hold",
          value: formatter.format(complianceHold),
          hint: `${Math.round(giftHoldRate * 100)}% retained for AML and documentation.`
        },
        {
          label: "Community payouts ready",
          value: formatter.format(netPayoutPool),
          hint: "Net gifts scheduled for receivers after holds and reserves.",
          highlighted: true
        },
        {
          label: "Re-entry reserve",
          value: formatter.format(reentryReserve),
          hint: "Funds earmarked for re-gifts and hardship relief."
        }
      ];

      return {
        variant: "gift",
        stageCount,
        activeCircles,
        donorsProcessed,
        grossInflow,
        complianceHold,
        reentryReserve,
        netPayoutPool,
        flaggedReviews,
        payoutVelocity,
        timeline
      };
    }

    const passUpCount = requirement;
    const promoters = participants;
    const passUpRate = passUpCount / (passUpCount + 1);
    const passUpsRouted = Math.round(promoters * passUpRate);
    const ownedLegs = promoters - passUpsRouted;
    const payoutVolume = Math.round(ownedLegs * avgPackValue * 0.32);
    const coachingAlerts = Math.max(Math.round(passUpsRouted * 0.35), 10);
    const cycleDays = Math.max(7 + passUpCount * 3, 12);

    const timeline: TimelineStep[] = [
      {
        label: "Recruitment momentum",
        value: `${promoters} promoters`,
        hint: "Incoming members queued for qualification."
      },
      {
        label: `${passUpCount}-up hand-offs`,
        value: `${passUpsRouted} pass-ups`,
        hint: "Automatically transferred to sponsor until ownership criteria met.",
        highlighted: true
      },
      {
        label: "Owned legs",
        value: `${ownedLegs} legs secured`,
        hint: "Promoters now contributing to personal volume targets.",
        highlighted: true
      },
      {
        label: "Projected payout volume",
        value: formatter.format(payoutVolume),
        hint: "Aligned to 32% reward share after governance checks."
      }
    ];

    return {
      variant: "pass-up",
      passUpCount,
      passUpsRouted,
      ownedLegs,
      payoutVolume,
      coachingAlerts,
      cycleDays,
      timeline
    };
  }, [
    avgPackValue,
    autoEntrants,
    clickTraffic,
    crowdMatchingPool,
    emgoldexReentryRate,
    formatter,
    giftHoldRate,
    participants,
    requirement,
    variant
  ]);

  const sliderDisplayValue = useMemo(() => formatter.format(avgPackValue), [avgPackValue, formatter]);

  return (
    <div
      className={cn(
        "grid h-full w-full gap-6 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-lg backdrop-blur dark:border-white/10",
        className
      )}
    >
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary dark:text-primary/80">
          {copy.badge}
        </p>
        <h3 className="text-xl font-semibold text-foreground dark:text-white">{copy.title}</h3>
      </header>

      <div className="grid gap-4">
        <div className="grid gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {copy.requirementLabel}
          </span>
          <div className="flex flex-wrap gap-2">
            {requirementOptions.map((option) => (
              <Button
                key={option}
                type="button"
                variant={option === requirement ? "default" : "outline"}
                size="sm"
                onClick={() => setRequirement(option)}
              >
                {copy.requirementOption(option)}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {copy.participantsLabel}
          </span>
          <div className="flex flex-wrap gap-2">
            {participantOptions.map((option) => (
              <Button
                key={option}
                type="button"
                variant={option === participants ? "default" : "outline"}
                size="sm"
                onClick={() => setParticipants(option)}
              >
                {copy.participantsOption(option)}
              </Button>
            ))}
          </div>
        </div>

        {extraControl && extraControlValue !== undefined && (
          <div className="grid gap-2">
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {extraControl.label}
            </span>
            <div className="flex flex-wrap gap-2">
              {extraControl.options.map((option) => (
                <Button
                  key={option}
                  type="button"
                  variant={option === extraControlValue ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    if (variant === "auto-fill") {
                      setAutoEntrants(option);
                    }
                    if (variant === "click") {
                      setClickTraffic(option);
                    }
                    if (variant === "crowd") {
                      setCrowdMatchingPool(option);
                    }
                    if (variant === "emgoldex") {
                      setEmgoldexReentryRate(option);
                    }
                    if (variant === "gift") {
                      setGiftHoldRate(option);
                    }
                  }}
                >
                  {extraControl.optionFormatter(option)}
                </Button>
              ))}
            </div>
          </div>
        )}

        <div className="grid gap-2">
          <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wide text-muted-foreground">
            <span>{copy.sliderLabel}</span>
            <span className="text-foreground dark:text-white">{sliderDisplayValue}</span>
          </div>
          <input
            type="range"
            min={sliderConfig.min}
            max={sliderConfig.max}
            step={sliderConfig.step}
            value={avgPackValue}
            onChange={(event) => setAvgPackValue(Number(event.target.value))}
            className="h-1 w-full cursor-pointer appearance-none rounded-full bg-primary/30 accent-primary"
          />
        </div>
      </div>

      <div className="relative grid gap-4 rounded-2xl border border-border/60 bg-muted/30 p-4 dark:border-white/10 dark:bg-white/5">
        {stats.variant === "pass-up" && (
          <FlowDiagram
            passUps={stats.passUpsRouted}
            ownedLegs={stats.ownedLegs}
            passUpCount={requirement}
            promoters={participants}
          />
        )}
        {stats.variant === "binary" && (
          <BinaryFlowDiagram
            leftVolume={stats.leftVolume}
            rightVolume={stats.rightVolume}
            matchedVolume={stats.matchedVolume}
            pairRequirement={stats.pairRequirement}
            formatter={formatter}
          />
        )}
        {stats.variant === "auto-fill" && (
          <AutoFillDiagram
            width={stats.matrixWidth}
            depth={stats.matrixDepth}
            fillPercentage={Math.min(stats.fillRate, 100)}
            capacity={stats.matrixCapacity}
            spilloverQueue={stats.spilloverQueue}
          />
        )}
      {stats.variant === "click" && (
        <ClickFlowDiagram
          totalClicks={stats.totalClicks}
          qualifyingClicks={stats.qualifyingClicks}
          conversions={stats.conversions}
          conversionRate={stats.conversionRate}
        />
      )}
      {stats.variant === "emgoldex" && (
        <EmgoldexDiagram
          slots={stats.boardSlots}
          payout={stats.expectedPayout}
          reinvestmentRate={stats.reinvestmentRate}
          leadershipBonus={stats.leadershipBonus}
        />
      )}
        {stats.variant === "crowd" && (
          <CrowdFlowDiagram
            goal={stats.campaignGoal}
            raised={stats.totalRaised}
            net={stats.netPayoutPool}
            matching={stats.matchingPool}
          />
        )}
        {stats.variant === "gift" && (
          <GiftFlowDiagram
            stages={stats.stageCount}
            donors={stats.donorsProcessed}
            grossInflow={stats.grossInflow}
            complianceHold={stats.complianceHold}
            netPayout={stats.netPayoutPool}
            reserve={stats.reentryReserve}
            formatter={formatter}
          />
        )}
        <p className="text-xs text-muted-foreground">{copy.diagramCaption}</p>
      </div>

      {stats.variant === "pass-up" && (
        <dl className="grid gap-3 rounded-2xl border border-border/60 bg-background/80 p-4 dark:border-white/10 dark:bg-white/5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4 text-primary" aria-hidden />
              Pass-ups routed
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">{stats.passUpsRouted}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <GaugeCircle className="h-4 w-4 text-primary" aria-hidden />
              Cycle completion (days)
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">{stats.cycleDays}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <LineChart className="h-4 w-4 text-primary" aria-hidden />
              Payout volume
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">
              {formatter.format(stats.payoutVolume)}
            </span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Rocket className="h-4 w-4 text-primary" aria-hidden />
              Coaching nudges queued
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">{stats.coachingAlerts}</span>
          </div>
        </dl>
      )}

      {stats.variant === "binary" && (
        <dl className="grid gap-3 rounded-2xl border border-border/60 bg-background/80 p-4 dark:border-white/10 dark:bg-white/5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4 text-primary" aria-hidden />
              Matched cycles
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">{stats.matchedPairs}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <GaugeCircle className="h-4 w-4 text-primary" aria-hidden />
              Cycle completion (days)
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">{stats.cycleDays}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <LineChart className="h-4 w-4 text-primary" aria-hidden />
              Payout volume
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">
              {formatter.format(stats.payoutVolume)}
            </span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Activity className="h-4 w-4 text-primary" aria-hidden />
              Flush risk
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">{stats.flushRisk}%</span>
          </div>
        </dl>
      )}

      {stats.variant === "auto-fill" && (
        <dl className="grid gap-3 rounded-2xl border border-border/60 bg-background/80 p-4 dark:border-white/10 dark:bg-white/5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4 text-primary" aria-hidden />
              Cycles completed
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">{stats.cyclesCompleted}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <GaugeCircle className="h-4 w-4 text-primary" aria-hidden />
              Matrix fill rate
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">{stats.fillRate}%</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <LineChart className="h-4 w-4 text-primary" aria-hidden />
              Payout volume
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">
              {formatter.format(stats.payoutVolume)}
            </span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Rocket className="h-4 w-4 text-primary" aria-hidden />
              Re-entries triggered
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">{stats.reentriesTriggered}</span>
          </div>
        </dl>
      )}

      {stats.variant === "click" && (
        <dl className="grid gap-3 rounded-2xl border border-border/60 bg-background/80 p-4 dark:border-white/10 dark:bg-white/5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4 text-primary" aria-hidden />
              Network clicks
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">{stats.totalClicks.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Activity className="h-4 w-4 text-primary" aria-hidden />
              Gross payout
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">
              {formatter.format(stats.grossPayout)}
            </span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <LineChart className="h-4 w-4 text-primary" aria-hidden />
              Projected revenue
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">
              {formatter.format(stats.revenue)}
            </span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <GaugeCircle className="h-4 w-4 text-primary" aria-hidden />
              ROI margin
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">
              {`${stats.roi.toFixed(1)}%`}
            </span>
          </div>
        </dl>
      )}

      {stats.variant === "crowd" && (
        <dl className="grid gap-3 rounded-2xl border border-border/60 bg-background/80 p-4 dark:border-white/10 dark:bg-white/5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4 text-primary" aria-hidden />
              Contributors
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">{stats.donorTeams.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <GaugeCircle className="h-4 w-4 text-primary" aria-hidden />
              Campaign goal
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">{formatter.format(stats.campaignGoal)}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <LineChart className="h-4 w-4 text-primary" aria-hidden />
              Net payout pool
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">{formatter.format(stats.netPayoutPool)}</span>
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
              <Rocket className="h-4 w-4 text-primary" aria-hidden />
              ROI margin
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">{`${stats.roi.toFixed(1)}%`}</span>
          </div>
        </dl>
      )}

      {stats.variant === "gift" && (
        <dl className="grid gap-3 rounded-2xl border border-border/60 bg-background/80 p-4 dark:border-white/10 dark:bg-white/5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4 text-primary" aria-hidden />
              Active circles
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">{stats.activeCircles}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <GaugeCircle className="h-4 w-4 text-primary" aria-hidden />
              Cycle completion (days)
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">{stats.payoutVelocity}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <LineChart className="h-4 w-4 text-primary" aria-hidden />
              Net payout pool
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">{formatter.format(stats.netPayoutPool)}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Activity className="h-4 w-4 text-primary" aria-hidden />
              Compliance hold
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">{formatter.format(stats.complianceHold)}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Rocket className="h-4 w-4 text-primary" aria-hidden />
              Reviews flagged
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">{stats.flaggedReviews}</span>
          </div>
        </dl>
      )}

      {stats.variant === "emgoldex" && (
        <dl className="grid gap-3 rounded-2xl border border-border/60 bg-background/80 p-4 dark:border-white/10 dark:bg-white/5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4 text-primary" aria-hidden />
              Board slots
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">{stats.boardSlots}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <GaugeCircle className="h-4 w-4 text-primary" aria-hidden />
              Cycle time (days)
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">{stats.cycleTime}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <LineChart className="h-4 w-4 text-primary" aria-hidden />
              Net member payout
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">{formatter.format(stats.payoutPool)}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Activity className="h-4 w-4 text-primary" aria-hidden />
              Leadership bonus
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">{formatter.format(stats.leadershipBonus)}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Rocket className="h-4 w-4 text-primary" aria-hidden />
              Compliance reviews
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-white">{stats.complianceReviews}</span>
          </div>
        </dl>
      )}

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

type FlowDiagramProps = {
  passUps: number;
  ownedLegs: number;
  passUpCount: number;
  promoters: number;
};

function FlowDiagram({ passUps, ownedLegs, passUpCount, promoters }: FlowDiagramProps) {
  const total = promoters === 0 ? 1 : promoters;
  const passUpRatio = Math.min(passUps / total, 1);
  const ownedRatio = Math.min(ownedLegs / total, 1);
  const startX = 60;
  const endX = 320;
  const baseY = 140;
  const spacing = (endX - startX) / (passUpCount + 1);
  const arcHeight = 42;

  const nodes = Array.from({ length: passUpCount }, (_, index) => ({
    id: `pass-up-${index + 1}`,
    label: `Pass-up ${index + 1}`,
    ratioLabel: `${Math.round(passUpRatio * 100)}% routed`,
    x: startX + spacing * (index + 1),
    y: baseY
  }));
  const ownedNode = {
    id: "owned",
    label: "Owned",
    ratioLabel: `${Math.round(ownedRatio * 100)}% retained`,
    x: endX,
    y: baseY
  };

  return (
    <svg
      viewBox="0 0 380 240"
      className="w-full"
      role="img"
      aria-label="Pass-up flow visualisation"
    >
      <defs>
        <linearGradient id="flow-sponsor" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(191,219,254,0.6)" />
          <stop offset="100%" stopColor="rgba(167,243,208,0.6)" />
        </linearGradient>
        <linearGradient id="flow-owned" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(59,130,246,0.75)" />
          <stop offset="100%" stopColor="rgba(16,185,129,0.9)" />
        </linearGradient>
      </defs>
      <rect x="10" y="20" width="360" height="200" rx="28" fill="url(#flow-sponsor)" opacity="0.45" />
      <g stroke="rgba(148,163,184,0.45)" strokeWidth="2" strokeDasharray="6 8">
        <path d={`M${startX} ${baseY} L${endX} ${baseY}`} />
      </g>
      <circle cx={startX} cy={baseY} r={30} fill="white" opacity="0.92" />
      <text x={startX} y={baseY - 4} textAnchor="middle" fontSize="13" fontWeight="600" fill="#0f172a">
        Sponsor
      </text>
      <text x={startX} y={baseY + 14} textAnchor="middle" fontSize="11" fill="#334155">
        Origin
      </text>
      {[...nodes, ownedNode].map((node, index, array) => {
        const isOwned = node.id === "owned";
        const radius = isOwned ? 36 : 26;
        const fill = isOwned ? "url(#flow-owned)" : "white";
        const opacity = isOwned ? 0.98 : 0.9;
        const stroke = isOwned ? "rgba(15,23,42,0.15)" : "rgba(15,23,42,0.08)";

        const previous = index === 0 ? { x: startX, y: baseY } : array[index - 1];
        const controlLeft = previous.x + spacing / 2;
        const controlRight = node.x - spacing / 2;

        return (
          <g key={node.id}>
            {index >= 0 && (
              <path
                d={`M${previous.x} ${previous.y} C ${controlLeft} ${baseY - arcHeight}, ${controlRight} ${baseY - arcHeight}, ${node.x} ${node.y}`}
                fill="none"
                stroke="rgba(59,130,246,0.55)"
                strokeWidth={2.2}
                markerEnd="url(#arrowhead)"
              />
            )}
            <circle cx={node.x} cy={node.y} r={radius} fill={fill} opacity={opacity} stroke={stroke} strokeWidth={2} />
            <text x={node.x} y={node.y - 6} textAnchor="middle" fontSize={isOwned ? 13 : 12} fontWeight="600" fill={isOwned ? "#0f172a" : "#1e293b"}>
              {node.label}
            </text>
            <text x={node.x} y={node.y + 12} textAnchor="middle" fontSize={10} fill="#475569">
              {node.ratioLabel}
            </text>
          </g>
        );
      })}
      <defs>
        <marker
          id="arrowhead"
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L0,6 L6,3 z" fill="rgba(59,130,246,0.7)" />
        </marker>
      </defs>
    </svg>
  );
}

type BinaryFlowDiagramProps = {
  leftVolume: number;
  rightVolume: number;
  matchedVolume: number;
  pairRequirement: number;
  formatter: Intl.NumberFormat;
};

function BinaryFlowDiagram({
  leftVolume,
  rightVolume,
  matchedVolume,
  pairRequirement,
  formatter
}: BinaryFlowDiagramProps) {
  const maxVolume = Math.max(leftVolume, rightVolume, 1);
  const baseY = 200;
  const barWidth = 64;
  const maxBarHeight = 140;

  const leftHeight = Math.max((leftVolume / maxVolume) * maxBarHeight, 12);
  const rightHeight = Math.max((rightVolume / maxVolume) * maxBarHeight, 12);
  const matchedHeight = Math.max((matchedVolume / maxVolume) * maxBarHeight, 12);
  const carryoverLeft = Math.max(leftHeight - matchedHeight, 0);
  const carryoverRight = Math.max(rightHeight - matchedHeight, 0);
  const matchedPairs =
    pairRequirement === 0 ? 0 : Math.max(Math.floor(matchedVolume / pairRequirement), 0);

  const leftX = 56;
  const matchedX = 158;
  const rightX = 260;

  const leftTop = baseY - leftHeight;
  const matchedTop = baseY - matchedHeight;
  const rightTop = baseY - rightHeight;

  return (
    <svg viewBox="0 0 380 240" className="w-full" role="img" aria-label="Binary flow visualisation">
      <defs>
        <linearGradient id="binary-left" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(59,130,246,0.55)" />
          <stop offset="100%" stopColor="rgba(37,99,235,0.75)" />
        </linearGradient>
        <linearGradient id="binary-right" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(16,185,129,0.55)" />
          <stop offset="100%" stopColor="rgba(5,150,105,0.8)" />
        </linearGradient>
        <linearGradient id="binary-matched" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(14,165,233,0.65)" />
          <stop offset="100%" stopColor="rgba(99,102,241,0.8)" />
        </linearGradient>
      </defs>
      <rect x="20" y="24" width="340" height="190" rx="28" fill="rgba(15,23,42,0.05)" />

      <rect x={leftX} y={leftTop} width={barWidth} height={leftHeight} rx="14" fill="url(#binary-left)" />
      {carryoverLeft > 4 && (
        <rect
          x={leftX}
          y={leftTop}
          width={barWidth}
          height={carryoverLeft}
          rx="14"
          fill="rgba(59,130,246,0.25)"
        />
      )}

      <rect x={rightX} y={rightTop} width={barWidth} height={rightHeight} rx="14" fill="url(#binary-right)" />
      {carryoverRight > 4 && (
        <rect
          x={rightX}
          y={rightTop}
          width={barWidth}
          height={carryoverRight}
          rx="14"
          fill="rgba(16,185,129,0.25)"
        />
      )}

      <rect x={matchedX} y={matchedTop} width={barWidth} height={matchedHeight} rx="14" fill="url(#binary-matched)" />

      <path
        d={`M${leftX + barWidth / 2} ${leftTop} C ${leftX + barWidth / 2 + 24} ${leftTop - 40}, ${matchedX + barWidth / 2 - 24} ${matchedTop - 40}, ${matchedX + barWidth / 2} ${matchedTop}`}
        stroke="rgba(59,130,246,0.5)"
        strokeWidth={2.5}
        fill="none"
      />
      <path
        d={`M${rightX + barWidth / 2} ${rightTop} C ${rightX + barWidth / 2 - 24} ${rightTop - 40}, ${matchedX + barWidth / 2 + 24} ${matchedTop - 40}, ${matchedX + barWidth / 2} ${matchedTop}`}
        stroke="rgba(16,185,129,0.5)"
        strokeWidth={2.5}
        fill="none"
      />

      <text x={leftX + barWidth / 2} y={baseY + 18} textAnchor="middle" fontSize="11" fill="#1e293b">
        Left leg
      </text>
      <text x={leftX + barWidth / 2} y={baseY + 34} textAnchor="middle" fontSize="11" fontWeight={600} fill="#0f172a">
        {formatter.format(leftVolume)}
      </text>

      <text x={rightX + barWidth / 2} y={baseY + 18} textAnchor="middle" fontSize="11" fill="#1e293b">
        Right leg
      </text>
      <text x={rightX + barWidth / 2} y={baseY + 34} textAnchor="middle" fontSize="11" fontWeight={600} fill="#0f172a">
        {formatter.format(rightVolume)}
      </text>

      <text x={matchedX + barWidth / 2} y={matchedTop - 18} textAnchor="middle" fontSize="12" fontWeight={600} fill="#0f172a">
        {matchedPairs} cycles
      </text>
      <text x={matchedX + barWidth / 2} y={matchedTop - 4} textAnchor="middle" fontSize="10" fill="#475569">
        {pairRequirement} PV each
      </text>
      <text x={matchedX + barWidth / 2} y={baseY + 18} textAnchor="middle" fontSize="11" fill="#1e293b">
        Matched volume
      </text>
      <text x={matchedX + barWidth / 2} y={baseY + 34} textAnchor="middle" fontSize="11" fontWeight={600} fill="#0f172a">
        {formatter.format(matchedVolume)}
      </text>
    </svg>
  );
}

type AutoFillDiagramProps = {
  width: number;
  depth: number;
  fillPercentage: number;
  capacity: number;
  spilloverQueue: number;
};

function AutoFillDiagram({
  width,
  depth,
  fillPercentage,
  capacity,
  spilloverQueue
}: AutoFillDiagramProps) {
  const levelsToRender = Math.min(depth, 5);
  const filledSeats = Math.min(Math.round((fillPercentage / 100) * capacity), capacity);
  let remainingFilled = filledSeats;

  const rows = Array.from({ length: levelsToRender }, (_, index) => {
    const level = index + 1;
    const levelNodes = Math.max(Math.pow(width, index), 1);
    const filled = Math.min(remainingFilled, levelNodes);
    remainingFilled = Math.max(remainingFilled - filled, 0);
    const ratio = levelNodes === 0 ? 0 : filled / levelNodes;

    return {
      level,
      levelNodes,
      filled,
      ratio
    };
  });

  const hiddenLevels = Math.max(depth - levelsToRender, 0);

  return (
    <div className="space-y-3">
      {rows.map((row) => (
        <div key={row.level} className="space-y-1">
          <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
            <span>Level {row.level}</span>
            <span>
              {row.filled}/{row.levelNodes}
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 transition-all"
              style={{ width: `${Math.max(row.ratio * 100, row.filled > 0 ? 6 : 2)}%` }}
            />
          </div>
        </div>
      ))}
      {hiddenLevels > 0 && (
        <p className="text-[11px] italic text-muted-foreground">
          +{hiddenLevels} additional levels tracked in analytics.
        </p>
      )}
      <div className="rounded-xl border border-border/60 bg-background/80 p-3 text-xs dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-foreground">Queue health</span>
          <span className="text-muted-foreground">{Math.round(fillPercentage)}% filled</span>
        </div>
        <p className="mt-1 text-muted-foreground">
          {spilloverQueue} members waiting for the next auto-fill cycle once the matrix closes ({capacity}
          {" "}
          seats per cycle).
        </p>
      </div>
    </div>
  );
}

type CrowdFlowDiagramProps = {
  goal: number;
  raised: number;
  net: number;
  matching: number;
};

function CrowdFlowDiagram({ goal, raised, net, matching }: CrowdFlowDiagramProps) {
  const safeGoal = goal <= 0 ? 1 : goal;
  const totalProgress = Math.min((raised / safeGoal) * 100, 100);
  const netProgress = Math.min((net / safeGoal) * 100, 100);
  const matchingProgress = Math.min((matching / safeGoal) * 100, 100);

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
          <span>Campaign progress</span>
          <span>{totalProgress.toFixed(1)}%</span>
        </div>
        <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-green-400 to-lime-300"
            style={{ width: `${Math.max(totalProgress, 2)}%` }}
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
          <span>Net payout coverage</span>
          <span>{netProgress.toFixed(1)}%</span>
        </div>
        <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-sky-500 to-indigo-400"
            style={{ width: `${Math.max(netProgress, 2)}%` }}
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
          <span>Matching pool impact</span>
          <span>{matchingProgress.toFixed(1)}%</span>
        </div>
        <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
            style={{ width: `${Math.max(matchingProgress, matching > 0 ? 4 : 2)}%` }}
          />
        </div>
      </div>

      <p className="text-[11px] text-muted-foreground">
        Visualise how contributions, matching pools, and fees move the campaign toward its goal.
      </p>
    </div>
  );
}

type GiftFlowDiagramProps = {
  stages: number;
  donors: number;
  grossInflow: number;
  complianceHold: number;
  netPayout: number;
  reserve: number;
  formatter: Intl.NumberFormat;
};

function GiftFlowDiagram({
  stages,
  donors,
  grossInflow,
  complianceHold,
  netPayout,
  reserve,
  formatter
}: GiftFlowDiagramProps) {
  const safeInflow = grossInflow <= 0 ? 1 : grossInflow;
  const holdRatio = Math.min((complianceHold / safeInflow) * 100, 100);
  const netRatio = Math.min((netPayout / safeInflow) * 100, 100);
  const reserveRatio = Math.min((reserve / safeInflow) * 100, 100);
  const stageCompletion = Math.min((stages / 4) * 100, 100);

  return (
    <div className="space-y-3">
      <div>
        <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
          <span>Stage readiness</span>
          <span>{stageCompletion.toFixed(0)}%</span>
        </div>
        <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-fuchsia-400 via-purple-500 to-indigo-500"
            style={{ width: `${Math.max(stageCompletion, 6)}%` }}
          />
        </div>
      </div>

      <div className="rounded-xl border border-border/60 bg-background/80 p-3 text-xs dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-foreground">Contributors</span>
          <span className="text-muted-foreground">{donors.toLocaleString()} members</span>
        </div>
        <p className="mt-1 text-muted-foreground">
          Total donors engaged across all live circles based on your selected stages.
        </p>
      </div>

      <div className="space-y-2 text-xs text-muted-foreground">
        <div className="rounded-lg border border-border/60 bg-background/80 p-3 dark:border-white/10 dark:bg-white/5">
          <div className="flex items-center justify-between font-semibold text-foreground">
            <span>Net payout</span>
            <span>{formatter.format(netPayout)}</span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-500"
              style={{ width: `${Math.max(netRatio, 6)}%` }}
            />
          </div>
          <p className="mt-1">Funds ready for receivers after compliance and reserve allocations.</p>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <div className="rounded-lg border border-border/60 bg-background/80 p-3 dark:border-white/10 dark:bg-white/5">
            <p className="font-semibold text-foreground">Compliance hold</p>
            <p className="text-primary">{formatter.format(complianceHold)}</p>
            <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
                style={{ width: `${Math.max(holdRatio, 4)}%` }}
              />
            </div>
          </div>
          <div className="rounded-lg border border-border/60 bg-background/80 p-3 dark:border-white/10 dark:bg-white/5">
            <p className="font-semibold text-foreground">Re-entry reserve</p>
            <p className="text-primary">{formatter.format(reserve)}</p>
            <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-sky-400 to-blue-500"
                style={{ width: `${Math.max(reserveRatio, 4)}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type EmgoldexDiagramProps = {
  slots: number;
  payout: number;
  reinvestmentRate: number;
  leadershipBonus: number;
};

function EmgoldexDiagram({ slots, payout, reinvestmentRate, leadershipBonus }: EmgoldexDiagramProps) {
  const reinvestmentValue = payout * reinvestmentRate;
  const netValue = payout - reinvestmentValue;
  return (
    <div className="space-y-3">
      <div>
        <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
          <span>Table saturation</span>
          <span>{slots} slots</span>
        </div>
        <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500"
            style={{ width: `${Math.min((slots / 16) * 100, 100)}%` }}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
        <div className="rounded-lg border border-border/60 bg-background/80 p-3 dark:border-white/10 dark:bg-white/5">
          <p className="font-semibold text-foreground">Net payout</p>
          <p className="mt-1 text-primary">{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(netValue)}</p>
        </div>
        <div className="rounded-lg border border-border/60 bg-background/80 p-3 dark:border-white/10 dark:bg-white/5">
          <p className="font-semibold text-foreground">Reinvestment reserve</p>
          <p className="mt-1 text-primary">{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(reinvestmentValue)}</p>
        </div>
      </div>
      <div className="rounded-lg border border-border/60 bg-background/80 p-3 text-xs text-muted-foreground dark:border-white/10 dark:bg-white/5">
        <p className="font-semibold text-foreground">Leadership bonus</p>
        <p className="mt-1 text-primary">{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(leadershipBonus)}</p>
      </div>
    </div>
  );
}

type ClickFlowDiagramProps = {
  totalClicks: number;
  qualifyingClicks: number;
  conversions: number;
  conversionRate: number;
};

function ClickFlowDiagram({ totalClicks, qualifyingClicks, conversions, conversionRate }: ClickFlowDiagramProps) {
  const maxClicks = Math.max(totalClicks, 1);
  const verifiedRatio = qualifyingClicks / maxClicks;
  const conversionRatio = conversions / maxClicks;

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
          <span>Tracked activity</span>
          <span>{totalClicks.toLocaleString()} clicks</span>
        </div>
        <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300"
            style={{ width: "100%" }}
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
          <span>Verified clicks</span>
          <span>{qualifyingClicks.toLocaleString()} clicks</span>
        </div>
        <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-lime-300"
            style={{ width: `${Math.max(verifiedRatio * 100, qualifyingClicks > 0 ? 6 : 2)}%` }}
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
          <span>Conversions</span>
          <span>{conversions.toLocaleString()} orders</span>
        </div>
        <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-400"
            style={{ width: `${Math.max(conversionRatio * 100, conversions > 0 ? 4 : 2)}%` }}
          />
        </div>
        <p className="mt-1 text-[11px] text-muted-foreground">
          {(conversionRate * 100).toFixed(1)}% conversion after fraud and duplicate suppression.
        </p>
      </div>
    </div>
  );
}
