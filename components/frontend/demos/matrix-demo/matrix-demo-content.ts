import type { ComponentType } from "react";
import {
  GaugeCircle,
  Layers3,
  ShieldCheck,
  Workflow
} from "lucide-react";
import { ChartPie, ShoppingCartSimple, UsersFour } from "@phosphor-icons/react/dist/ssr";

type IconType = ComponentType<{ className?: string }>;

export type DemoHighlight = {
  title: string;
  description: string;
  icon: IconType;
};

export type Experience = {
  title: string;
  detail: string;
  icon: IconType;
};

export const DEMO_HIGHLIGHTS: DemoHighlight[] = [
  {
    title: "Matrix clarity",
    description:
      "Visualise fixed-width growth (2×2, 3×5, and beyond) with real spill-over examples so leaders understand downline momentum.",
    icon: Layers3
  },
  {
    title: "Integrated commerce",
    description:
      "Explore how the demo ties matrix enrolments to e-commerce carts, recurring orders, and automated ticketing flows.",
    icon: ShoppingCartSimple
  },
  {
    title: "Risk-free sandbox",
    description:
      "Test gateway connections, compliance guardrails, and spill-over rules before launch, guided by Cloud MLM specialists.",
    icon: ShieldCheck
  }
];

export const EXPERIENCES: Experience[] = [
  {
    title: "Admin cockpit",
    detail: "Configure width × depth, bonus pools, and spill-over preferences with real-time previews.",
    icon: Workflow
  },
  {
    title: "Distributor view",
    detail: "Show the genealogy explorer, rank progression, and automated notifications that keep teams energised.",
    icon: UsersFour
  },
  {
    title: "Analytics & finance",
    detail: "Review commission dashboards, churn alerts, and profitability trends across levels and markets.",
    icon: ChartPie
  }
];

export const EVALUATION_BULLETS: string[] = [
  "Explore spill-over handling when a sponsor fills their width and new sign-ups cascade to the next active member.",
  "See how rank upgrades trigger KYC verification, inventory rules, and automated communications.",
  "Review payment gateway workflows, order syncing, and ticketing integrations that keep operations smooth."
];

export const EVALUATION_CARDS = [
  {
    title: "E-commerce and wallet integration",
    description:
      "Understand how carts, loyalty wallets, and subscription products connect to matrix genealogy and payouts.",
    icon: "Network"
  },
  {
    title: "Compliance guardrails",
    description:
      "Walk through configurable policies that manage holding periods, auto-ship requirements, and regulator-friendly reporting.",
    icon: "GaugeCircle"
  }
] as const;

