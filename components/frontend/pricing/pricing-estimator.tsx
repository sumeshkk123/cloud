"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  BarChart,
  Check,
  PenLine,
  RefreshCcw,
  Settings2,
  Sparkles,
  Target,
  Wallet,
  X,
  Copy,
  Mail
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PLAN_OPTIONS = [
  {
    id: "startup",
    label: "Startup Accelerator",
    base: 18000,
    description: "Launch programme for a single compensation plan",
    highlight: "Essential",
    includedMarkets: 1
  },
  {
    id: "professional",
    label: "Professional Suite",
    base: 32000,
    description: "Robust platform with multi-market and multi-language support",
    highlight: "Most popular",
    includedMarkets: 2
  },
  {
    id: "enterprise",
    label: "Enterprise Platinum",
    base: 55000,
    description: "Fully custom solution with global governance and advanced integrations",
    highlight: "Custom-built",
    includedMarkets: 3
  }
] as const;

const DISTRIBUTOR_LEVELS = [
  {
    id: "standard",
    label: "Up to 5k distributors",
    cost: 0,
    note: "Included"
  },
  {
    id: "pro",
    label: "Up to 25k distributors",
    cost: 5000,
    note: "+$5k one-time"
  },
  {
    id: "elite",
    label: "50k+ distributors",
    cost: 12000,
    note: "+$12k one-time"
  }
] as const;

const SUPPORT_PLANS = [
  {
    id: "standard",
    label: "Standard Support",
    cost: 0,
    detail: "Email and helpdesk support during business hours for 90 days."
  },
  {
    id: "premium",
    label: "Premium Support",
    cost: 4500,
    detail: "Dedicated account manager with 24/7 priority support for six months."
  },
  {
    id: "enterprise",
    label: "Enterprise Support",
    cost: 9500,
    detail: "On-site and remote expert team with quarterly business reviews for one year."
  }
] as const;

const INTEGRATION_TIERS = [
  {
    id: "basic",
    label: "Basic Integrations",
    detail: "Standard payment gateways and basic API access",
    icon: "/icons/integration-standard.svg",
    base: 3000,
    perMarket: 1500,
    automationRate: 1000
  },
  {
    id: "advanced",
    label: "Advanced Integrations",
    detail: "Full API access, custom webhooks, and advanced payment systems",
    icon: "/icons/integration-advanced.svg",
    base: 7500,
    perMarket: 2500,
    automationRate: 1800
  },
  {
    id: "custom",
    label: "Custom Integrations",
    detail: "Bespoke development for any third-party system, ERP, or CRM",
    icon: "/icons/integration-enterprise.svg",
    base: 11000,
    perMarket: 3200,
    automationRate: 2500
  }
] as const;

const OPTIONAL_ADDONS = [
  {
    id: "mobile-app",
    label: "Mobile App for iOS/Android",
    description: "Distributor and customer-facing mobile applications.",
    cost: 7500
  },
  {
    id: "ecom",
    label: "Integrated E-commerce Module",
    description: "Shopping cart, inventory, and order management system.",
    cost: 5000
  },
  {
    id: "analytics",
    label: "Advanced Analytics & Reporting",
    description: "Custom dashboards and BI tools for revenue and performance analysis.",
    cost: 4000
  }
] as const;

const DATA_MIGRATION_COST = 3500;
const AUTOMATION_JOURNEY_MAX = 10;
const MARKET_MAX = 10;

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

export type PricingEstimatorProps = {
  contactHref: string;
  demoHref: string;
};

export default function PricingEstimator({ contactHref, demoHref }: PricingEstimatorProps) {
  const [scenarioName, setScenarioName] = useState("Global rollout scenario");
  const [selectedPlan, setSelectedPlan] = useState<(typeof PLAN_OPTIONS)[number]>(PLAN_OPTIONS[1]);
  const [selectedDistributorLevel, setSelectedDistributorLevel] = useState<(typeof DISTRIBUTOR_LEVELS)[number]>(DISTRIBUTOR_LEVELS[1]);
  const [selectedSupport, setSelectedSupport] = useState<(typeof SUPPORT_PLANS)[number]>(SUPPORT_PLANS[0]);
  const [integrationTier, setIntegrationTier] = useState<(typeof INTEGRATION_TIERS)[number]>(INTEGRATION_TIERS[1]);
  const [markets, setMarkets] = useState(3);
  const [automationJourneys, setAutomationJourneys] = useState(4);
  const [includeDataMigration, setIncludeDataMigration] = useState(true);
  const [selectedAddOns, setSelectedAddOns] = useState(new Set(["mobile-app", "ecom"]));
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState("");

  const totals = useMemo(() => {
    const addOnCost = OPTIONAL_ADDONS.reduce((sum, addOn) => {
      return selectedAddOns.has(addOn.id) ? sum + addOn.cost : sum;
    }, 0);

    const extraMarkets = Math.max(0, markets - selectedPlan.includedMarkets);
    const integrationBase = integrationTier.base;
    const integrationMarketCost = extraMarkets * integrationTier.perMarket;
    const automationCost = automationJourneys * integrationTier.automationRate;
    const fieldTeamCost = selectedDistributorLevel.cost;
    const supportCost = selectedSupport.cost;
    const dataMigrationCost = includeDataMigration ? DATA_MIGRATION_COST : 0;

    const subtotal =
      selectedPlan.base +
      integrationBase +
      integrationMarketCost +
      automationCost +
      supportCost +
      fieldTeamCost +
      dataMigrationCost +
      addOnCost;

    const contingency = Math.round(subtotal * 0.07);
    const total = subtotal + contingency;
    const monthly = Math.round(total / 12);

    return {
      subtotal,
      integrationBase,
      integrationMarketCost,
      automationCost,
      supportCost,
      fieldTeamCost,
      dataMigrationCost,
      addOnCost,
      contingency,
      total,
      monthly
    };
  }, [
    automationJourneys,
    includeDataMigration,
    integrationTier,
    markets,
    selectedAddOns,
    selectedDistributorLevel,
    selectedPlan,
    selectedSupport
  ]);

  function toggleAddOn(id: string) {
    setSelectedAddOns((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  const generateEmailContent = () => {
    const addOnLabels = selectedAddOns.size > 0
      ? Array.from(selectedAddOns).map(id => OPTIONAL_ADDONS.find(addon => addon.id === id)?.label).filter(Boolean).join(', ')
      : 'None';

    const emailBody = `Hello Cloud MLM Software Advisor,

I'm reaching out to share a pricing scenario I created using your online estimator. Please find the detailed breakdown below for your review.

---
SCENARIO SUMMARY
- Scenario Name: ${scenarioName}
- Estimated Total Investment: ${formatCurrency(totals.total)}
- Monthly Equivalent: ${formatCurrency(totals.monthly)}
- Project Contingency: ${formatCurrency(totals.contingency)}

---
SELECTED OPTIONS
- Base Programme: ${selectedPlan.label}
  - Price: ${formatCurrency(selectedPlan.base)}
  - Description: ${selectedPlan.description}
  
- Distributor Tier: ${selectedDistributorLevel.label}
  - Price: ${selectedDistributorLevel.cost === 0 ? "Included" : formatCurrency(selectedDistributorLevel.cost)}
  
- Support Plan: ${selectedSupport.label}
  - Price: ${selectedSupport.cost === 0 ? "Included" : formatCurrency(selectedSupport.cost)}
  
- Integration Tier: ${integrationTier.label}
  - Price: ${formatCurrency(integrationTier.base)} Base
  - Additional Markets: ${markets} (${formatCurrency(totals.integrationMarketCost)})
  - Custom Workflows: ${automationJourneys} (${formatCurrency(totals.automationCost)})
  
- Optional Accelerators: ${addOnLabels}
  
- Legacy Data Migration: ${includeDataMigration ? `Yes (${formatCurrency(DATA_MIGRATION_COST)})` : 'No'}

---
CALCULATION BREAKDOWN
- Programme Base: ${formatCurrency(selectedPlan.base)}
- Field Team Tier: ${formatCurrency(totals.fieldTeamCost)}
- Support Plan: ${formatCurrency(totals.supportCost)}
- Integration Foundation: ${formatCurrency(totals.integrationBase)}
- Additional Markets: ${formatCurrency(totals.integrationMarketCost)}
- Custom Workflows: ${formatCurrency(totals.automationCost)}
- Acceleration Packs: ${formatCurrency(totals.addOnCost)}
- Data Migration Support: ${formatCurrency(totals.dataMigrationCost)}

- Subtotal: ${formatCurrency(totals.subtotal)}
- 7% Contingency: ${formatCurrency(totals.contingency)}
- Total Investment: ${formatCurrency(totals.total)}

I look forward to discussing this scenario with you further.

Best regards,
[Your Name]
[Your Company]
[Your Contact Information]`;

    return emailBody;
  };

  const handleShareClick = () => {
    setIsPopupOpen(true);
    setCopySuccess("");
  };

  const handleSendEmail = () => {
    const subject = `Cloud MLM Software Pricing Scenario: ${scenarioName}`;
    const body = generateEmailContent();
    window.open(
      `mailto:sales@cloudmlmsoftware.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    );
  };

  const handleCopyText = async () => {
    const textToCopy = generateEmailContent();
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess("Copied!");
    } catch (err) {
      setCopySuccess("Failed to copy.");
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <>
      <div className="space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500">
              Scenario name
            </p>
            <div className="flex items-center gap-2">
              <PenLine className="h-4 w-4 text-slate-400 dark:text-slate-500" aria-hidden />
              <input
                value={scenarioName}
                onChange={(event) => setScenarioName(event.target.value)}
                className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-sky-500 dark:focus:ring-sky-500/40"
                placeholder="Name your pricing scenario"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-sky-500 dark:text-sky-300" aria-hidden />
              Estimator updates totals in real time
            </div>
            <div className="hidden items-center gap-2 md:flex">
              <Wallet className="h-3.5 w-3.5 text-emerald-500 dark:text-emerald-300" aria-hidden />
              All figures are one-time licence costs
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,800px)_minmax(0,1fr)]">
          <div className="space-y-6">
            <section className="space-y-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500">
                    Base programme
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Choose the licence tier that matches your rollout ambition.
                  </p>
                </div>
                <BarChart className="h-5 w-5 text-sky-500 dark:text-sky-300" aria-hidden />
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {PLAN_OPTIONS.map((plan) => (
                  <button
                    type="button"
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan)}
                    className={cn(
                      "flex h-full flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:border-sky-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-900",
                      selectedPlan.id === plan.id &&
                        "border-sky-400 bg-sky-50/60 shadow-lg dark:border-sky-500/70 dark:bg-sky-500/10"
                    )}
                  >
                    <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase text-slate-400 dark:text-slate-500">
                      <Target className="h-3.5 w-3.5" aria-hidden /> {plan.highlight}
                    </span>
                    <span className="text-lg font-semibold text-slate-900 dark:text-white">{plan.label}</span>
                    <span className="text-sm text-slate-600 dark:text-slate-300">{plan.description}</span>
                    <span className="mt-auto text-sm font-semibold text-slate-900 dark:text-sky-200">
                      {formatCurrency(plan.base)}
                    </span>
                  </button>
                ))}
              </div>
            </section>

            <section className="space-y-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500">
                    Support & integration posture
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Scale service depth and automation complexity.
                  </p>
                </div>
                <Settings2 className="h-5 w-5 text-sky-500 dark:text-sky-300" aria-hidden />
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {SUPPORT_PLANS.map((plan) => (
                  <button
                    type="button"
                    key={plan.id}
                    onClick={() => setSelectedSupport(plan)}
                    className={cn(
                      "flex h-full flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:border-emerald-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-900",
                      selectedSupport.id === plan.id &&
                        "border-emerald-400 bg-emerald-50/60 shadow-lg dark:border-emerald-500/70 dark:bg-emerald-500/10"
                    )}
                  >
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">{plan.label}</span>
                    <span className="text-xs text-slate-600 dark:text-slate-300">{plan.detail}</span>
                    <span className="mt-auto text-sm font-semibold text-slate-900 dark:text-emerald-200">
                      {plan.cost === 0 ? "Included" : formatCurrency(plan.cost)}
                    </span>
                  </button>
                ))}
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {INTEGRATION_TIERS.map((tier) => (
                  <button
                    type="button"
                    key={tier.id}
                    onClick={() => setIntegrationTier(tier)}
                    className={cn(
                      "flex h-full flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:border-sky-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-900",
                      integrationTier.id === tier.id &&
                        "border-sky-400 bg-sky-50/60 shadow-lg dark:border-sky-500/70 dark:bg-sky-500/10"
                    )}
                  >
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                      <Image src={tier.icon} width={24} height={24} alt="" className="h-6 w-6" />
                      {tier.label}
                    </span>
                    <span className="text-xs text-slate-600 dark:text-slate-300">{tier.detail}</span>
                    <span className="mt-auto text-sm font-semibold text-slate-900 dark:text-sky-200">
                      {formatCurrency(tier.base)} base
                    </span>
                  </button>
                ))}
              </div>
            </section>

            <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="grid gap-3 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="flex items-center justify-between text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">
                    Markets
                    <span className="text-slate-900 dark:text-slate-100">{markets}</span>
                  </label>
                  <input
                    type="range"
                    min={selectedPlan.includedMarkets}
                    max={MARKET_MAX}
                    value={markets}
                    onChange={(event) => setMarkets(Number(event.target.value))}
                    className="h-2 w-full cursor-pointer rounded-full bg-slate-200 accent-sky-500 dark:bg-slate-700 dark:accent-sky-400"
                  />
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {selectedPlan.includedMarkets} market included. Each additional market adds integration effort.
                  </p>
                </div>
                <div className="space-y-2">
                  <label className="flex items-center justify-between text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">
                    Custom workflows
                    <span className="text-slate-900 dark:text-slate-100">{automationJourneys}</span>
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={AUTOMATION_JOURNEY_MAX}
                    value={automationJourneys}
                    onChange={(event) => setAutomationJourneys(Number(event.target.value))}
                    className="h-2 w-full cursor-pointer rounded-full bg-slate-200 accent-emerald-500 dark:bg-slate-700 dark:accent-emerald-400"
                  />
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Automation covers lifecycle triggers, commissions, and field rep workflows.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500">
                  Field team size
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {DISTRIBUTOR_LEVELS.map((level) => (
                    <button
                      type="button"
                      key={level.id}
                      onClick={() => setSelectedDistributorLevel(level)}
                      className={cn(
                        "flex h-full flex-col gap-1 rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:border-sky-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-900",
                        selectedDistributorLevel.id === level.id &&
                          "border-emerald-400 bg-emerald-50/60 shadow-lg dark:border-emerald-500/70 dark:bg-emerald-500/10"
                      )}
                    >
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">{level.label}</span>
                      <span className="text-xs text-slate-600 dark:text-slate-300">{level.note}</span>
                      <span className="mt-auto text-sm font-semibold text-slate-900 dark:text-emerald-200">
                        {level.cost === 0 ? "Included" : formatCurrency(level.cost)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500">
                  Optional Accelerators
                </p>
                <div className="space-y-2">
                  {OPTIONAL_ADDONS.map((addOn) => (
                    <button
                      type="button"
                      key={addOn.id}
                      onClick={() => toggleAddOn(addOn.id)}
                      className={cn(
                        "flex w-full items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:border-sky-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-900",
                        selectedAddOns.has(addOn.id) &&
                          "border-sky-400 bg-sky-50/60 shadow-lg dark:border-sky-500/70 dark:bg-sky-500/10"
                      )}
                    >
                      <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-500 transition dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300">
                        {selectedAddOns.has(addOn.id) ? <Check className="h-3.5 w-3.5" aria-hidden /> : <Sparkles className="h-3.5 w-3.5" aria-hidden />}
                      </span>
                      <span className="flex-1 space-y-1">
                        <span className="flex flex-col text-sm text-slate-900 dark:text-white">
                          <span className="font-semibold">{addOn.label}</span>
                          <span className="text-xs font-normal text-slate-600 dark:text-slate-300">{addOn.description}</span>
                        </span>
                      </span>
                      <span className="text-sm font-semibold text-slate-900 dark:text-sky-200">
                        {formatCurrency(addOn.cost)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-700 dark:bg-slate-900/60">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500">
                    Legacy Data Migration
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Initial data audit, cleansing, and secure import validation.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIncludeDataMigration((value) => !value)}
                  className={cn(
                    "rounded-full border px-3 py-1 text-xs font-semibold uppercase transition",
                    includeDataMigration
                      ? "border-emerald-400 bg-emerald-50 text-emerald-600 dark:border-emerald-500/70 dark:bg-emerald-500/10 dark:text-emerald-200"
                      : "border-slate-300 bg-white text-slate-500 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                  )}
                >
                  {includeDataMigration ? "Included" : `Add ${formatCurrency(DATA_MIGRATION_COST)}`}
                </button>
              </div>
            </section>
          </div>

          <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-sky-100 dark:border-slate-800 dark:bg-slate-900 lg:sticky lg:top-24 lg:h-fit">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4 dark:border-slate-800">
              <div>
                <p className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500">
                  Investment total
                </p>
                <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">{formatCurrency(totals.total)}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Includes 7% project contingency ({formatCurrency(totals.contingency)}).
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 px-4 py-2 text-right text-xs text-slate-600 dark:bg-slate-900/60 dark:text-slate-300">
                <p className="font-semibold uppercase ">Monthly equivalent</p>
                <p className="text-base font-semibold text-slate-900 dark:text-white">{formatCurrency(totals.monthly)}</p>
              </div>
            </div>

            <dl className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center justify-between">
                <dt>Programme base</dt>
                <dd>{formatCurrency(selectedPlan.base)}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Support plan</dt>
                <dd>{formatCurrency(totals.supportCost)}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Integration foundation</dt>
                <dd>{formatCurrency(totals.integrationBase)}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Additional markets</dt>
                <dd>{formatCurrency(totals.integrationMarketCost)}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Custom workflows</dt>
                <dd>{formatCurrency(totals.automationCost)}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Field team tier</dt>
                <dd>{formatCurrency(totals.fieldTeamCost)}</dd>
              </div>
              {includeDataMigration ? (
                <div className="flex items-center justify-between">
                  <dt>Data migration support</dt>
                  <dd>{formatCurrency(totals.dataMigrationCost)}</dd>
                </div>
              ) : null}
              <div className="flex items-center justify-between">
                <dt>Acceleration packs</dt>
                <dd>{formatCurrency(totals.addOnCost)}</dd>
              </div>
            </dl>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300">
              <p className="font-semibold uppercase text-slate-500 dark:text-slate-400">
                Scenario notes
              </p>
              <p className="mt-2">
                {selectedPlan.label} with {markets} market{markets > 1 ? "s" : ""}, {automationJourneys} custom workflow
                {automationJourneys !== 1 ? "s" : ""}, and {selectedSupport.label.toLowerCase()}. Customize or remove items to align with your business priorities.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button onClick={handleShareClick} size="sm">
                Share with pricing advisor
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Button>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <Link href={demoHref}>
                  Save scenario in portal
                  <RefreshCcw className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Your advisor will validate assumptions, align integrations, and provide contracting documentation based on this scenario.
            </p>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsPopupOpen(false);
            }
          }}
        >
          <div className="relative w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Share Your Pricing Scenario</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                A detailed summary has been generated for you. You can either send it to your dedicated advisor via email or copy the text to share it manually.
              </p>
              <div className="max-h-96 overflow-y-auto rounded-xl bg-slate-50 p-4 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                <pre className="whitespace-pre-wrap font-sans leading-relaxed">
                  {generateEmailContent()}
                </pre>
              </div>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-3">
                  <Button onClick={handleSendEmail}>
                    <Mail className="mr-2 h-4 w-4" /> Send Email
                  </Button>
                  <Button onClick={handleCopyText} variant="secondary">
                    <Copy className="mr-2 h-4 w-4" /> Copy to Clipboard
                  </Button>
                  <Button onClick={() => setIsPopupOpen(false)} variant="ghost" className="text-slate-600 dark:text-slate-400">
                    Cancel
                  </Button>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Alternatively, you can manually email this summary to: {" "}
                  <a href="mailto:sales@cloudmlmsoftware.com" className="font-semibold text-sky-600 hover:underline dark:text-sky-400">
                    sales@cloudmlmsoftware.com
                  </a>
                </p>
              </div>
              {copySuccess && (
                <p className="mt-2 text-sm text-emerald-600 dark:text-emerald-400">{copySuccess}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}