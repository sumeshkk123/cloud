"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle,
  LockSimple,
  WarningCircle,
  XCircle,
  CaretDown,
  Copy,
  Download,
  X
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
// Assuming you have a formatCurrency utility
// import { formatCurrency } from "path/to/your/formatCurrency-utility"; 

// --- Type Definitions ---
type PricingItem = {
  name: string;
  price: number;
  category: string;
  description: string;
  features: string[];
};

type PricingData = {
  plans: PricingItem[];
  addOns: PricingItem[];
};

type Step = "form" | "otp" | "verified";
type EmailAudience = "advisor" | "stakeholder";

const COUNTRIES = [
  "United States",
  "United Kingdom",
  "Australia",
  "Canada",
  "United Arab Emirates",
  "India",
  "Singapore",
  "Malaysia",
  "Philippines",
  "Other",
];

const initialForm = {
  name: "",
  contact: "",
  email: "",
  country: "",
};

// Simple formatCurrency utility if not already imported
function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

export default function PricingAccessSection() {
  const [step, setStep] = useState<Step>("form");
  const [form, setForm] = useState(initialForm);
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pricingData, setPricingData] = useState<PricingData | null>(null);
  const [selectedPlans, setSelectedPlans] = useState<string[]>([]);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [planLimitNotice, setPlanLimitNotice] = useState<string | null>(null);
  const [isMobilePanelOpen, setIsMobilePanelOpen] = useState(false);
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState("");
  const [emailAudience, setEmailAudience] = useState<EmailAudience>("advisor");

  const isFormValid = useMemo(() => {
    return (
      form.name.trim().length > 1 &&
      form.contact.trim().length >= 6 &&
      /.+@.+\..+/.test(form.email.trim()) &&
      form.country.trim().length > 0
    );
  }, [form]);

  const resetSelections = useCallback(() => {
    setSelectedPlans([]);
    setSelectedAddOns([]);
    setPlanLimitNotice(null);
  }, []);

  const fetchPricingData = useCallback(async (signal?: AbortSignal) => {
    try {
      setError(null);
      const response = await fetch("/api/pricing/items", {
        method: "GET",
        signal,
        credentials: "include",
        cache: "no-store",
      });
      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        if (response.status === 401) {
          setStep("form");
          setPricingData(null);
          resetSelections();
          throw new Error(result?.error ?? "Verification required. Please submit your details again.");
        }
        throw new Error(result?.error ?? "Unable to fetch pricing data.");
      }
      const result = (await response.json()) as { data?: PricingData };
      if (result?.data) {
        resetSelections();
        setPricingData(result.data);
      }
    } catch (err) {
      if (err instanceof Error) {
        setMessage(null);
        setError(err.message);
      }
    }
  }, [resetSelections]);

  useEffect(() => {
    const controller = new AbortController();
    async function checkVerification() {
      try {
        const response = await fetch("/api/pricing/status", {
          signal: controller.signal,
          credentials: "include",
        });
        const result = (await response.json()) as { verified?: boolean };
        if (result?.verified) {
          setStep("verified");
          await fetchPricingData(controller.signal);
        }
      } catch (err) {
        // ignore aborted or network errors for initial check
      }
    }
    checkVerification();
    return () => controller.abort();
  }, [fetchPricingData]);

  async function handleSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isFormValid || isLoading) {
      return;
    }
    setIsLoading(true);
    setError(null);
    setMessage(null);

    try {
      const response = await fetch("/api/pricing/request-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          name: form.name.trim(),
          contact: form.contact.trim(),
          email: form.email.trim(),
          country: form.country.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error ?? "Unable to send OTP. Please try again.");
      }

      setMessage(result?.message ?? "OTP sent successfully. Check your email inbox.");
      setStep("otp");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to request OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleVerifyOtp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!otp.trim() || isLoading) {
      return;
    }

    setIsLoading(true);
    setError(null);
    setMessage(null);

    try {
      const response = await fetch("/api/pricing/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          email: form.email.trim(),
          otp: otp.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error ?? "Invalid OTP. Please retry.");
      }

      setMessage(result?.message ?? "Verification successful.");
      setStep("verified");
      setOtp("");
      await fetchPricingData();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Verification failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  const planOptions = useMemo(() => pricingData?.plans ?? [], [pricingData]);
  const addOnOptions = useMemo(() => pricingData?.addOns ?? [], [pricingData]);

  const selectedPlanItems = useMemo(() => {
    return planOptions.filter((plan) => selectedPlans.includes(plan.name));
  }, [planOptions, selectedPlans]);

  const selectedAddonItems = useMemo(() => {
    return addOnOptions.filter((addon) => selectedAddOns.includes(addon.name));
  }, [addOnOptions, selectedAddOns]);

  const totalInvestment = useMemo(() => {
    return (
      selectedPlanItems.reduce((acc, item) => acc + item.price, 0) +
      selectedAddonItems.reduce((acc, item) => acc + item.price, 0)
    );
  }, [selectedPlanItems, selectedAddonItems]);

  const groupedAddOns = useMemo(() => {
    return addOnOptions.reduce<Record<string, PricingItem[]>>((acc, item) => {
      const key = item.category || "Additional Enhancements";
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, {});
  }, [addOnOptions]);

  const hasSelection = selectedPlanItems.length + selectedAddonItems.length > 0;
  const planLimitReached = selectedPlans.length >= 2;

  const handlePlanToggle = (plan: PricingItem) => {
    setSelectedPlans((prev) => {
      const exists = prev.includes(plan.name);
      if (exists) {
        setPlanLimitNotice(null);
        return prev.filter((name) => name !== plan.name);
      }
      if (prev.length >= 2) {
        setPlanLimitNotice("You can pin up to two primary plans in a single quote. Remove one to add another.");
        return prev;
      }
      setPlanLimitNotice(null);
      return [...prev, plan.name];
    });
  };

  const handleAddonToggle = (addon: PricingItem) => {
    setSelectedAddOns((prev) => {
      const exists = prev.includes(addon.name);
      if (exists) {
        return prev.filter((name) => name !== addon.name);
      }
      return [...prev, addon.name];
    });
  };

  const handleExportPdf = async () => {
    if (!hasSelection) {
      setPlanLimitNotice("Select at least one plan or add-on to generate your PDF quote.");
      return;
    }

    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const marginX = 56;
    const marginY = 56;
    let cursorY = marginY;

    const palette = {
      brandHeader: [12, 74, 110] as [number, number, number],
      brandSky: [14, 165, 233] as [number, number, number],
      brandAccent: [59, 130, 246] as [number, number, number],
      planStroke: [2, 132, 199] as [number, number, number],
      addonStroke: [217, 119, 6] as [number, number, number],
      addonFill: [254, 226, 178] as [number, number, number],
      textMain: [30, 41, 59] as [number, number, number],
      textMuted: [100, 116, 139] as [number, number, number],
    } as const;

    const applyFill = (color: [number, number, number]) => doc.setFillColor(color[0], color[1], color[2]);
    const applyStroke = (color: [number, number, number]) => doc.setDrawColor(color[0], color[1], color[2]);
    const applyText = (color: [number, number, number]) => doc.setTextColor(color[0], color[1], color[2]);

    const ensureSpace = (height = 0) => {
      if (cursorY + height > pageHeight - marginY) {
        doc.addPage();
        cursorY = marginY;
      }
    };

    const currency = (value: number) => `$${value.toLocaleString(undefined, { minimumFractionDigits: 0 })}`;

    const referenceId = `Q-${Date.now().toString().slice(-6)}`;
    const generatedOn = new Date().toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    applyFill(palette.brandHeader);
    doc.rect(0, 0, pageWidth, 120, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(26);
    doc.setTextColor(255, 255, 255);
    doc.text("Cloud MLM Software", marginX, 54);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text("Pricing quotation", marginX, 80);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text(generatedOn, pageWidth - marginX, 54, { align: "right" });
    doc.setFont("helvetica", "normal");
    doc.text(referenceId, pageWidth - marginX, 74, { align: "right" });
    doc.text("Prepared by Cloud MLM Software", pageWidth - marginX, 94, { align: "right" });

    cursorY = 140;

    const cardWidth = pageWidth - marginX * 2;
    const summaryHeight = 130;
    ensureSpace(summaryHeight + 24);

    doc.setFillColor(246, 249, 255);
    doc.roundedRect(marginX, cursorY, cardWidth, summaryHeight, 18, 18, "F");
    doc.setDrawColor(214, 230, 254);
    doc.roundedRect(marginX, cursorY, cardWidth, summaryHeight, 18, 18, "S");

    applyText(palette.textMain);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Prepared for", marginX + 24, cursorY + 34);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text(form.name ? form.name : "Prospective client", marginX + 24, cursorY + 54);
    doc.text(form.email || "sales@cloudmlmsoftware.com", marginX + 24, cursorY + 72);
    doc.text(form.country ? form.country : "Country to be confirmed", marginX + 24, cursorY + 90);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    applyText(palette.brandAccent);
    doc.text("Estimated investment", marginX + cardWidth - 24, cursorY + 34, { align: "right" });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(26);
    doc.text(currency(totalInvestment), marginX + cardWidth - 24, cursorY + 68, { align: "right" });

    doc.setFont("helvetica", "italic");
    doc.setFontSize(10);
    applyText(palette.textMuted);
    doc.text(
      "Quote includes implementation sprints, validation workshops, and concierge success management.",
      marginX + cardWidth - 24,
      cursorY + 96,
      { align: "right", maxWidth: 220 }
    );

    cursorY += summaryHeight + 32;

    const addSectionHeading = (title: string, subtitle?: string) => {
      ensureSpace(50);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(16);
      applyText(palette.textMain);
      doc.text(title, marginX, cursorY);
      cursorY += 20;

      if (subtitle) {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(11);
        applyText(palette.textMuted);
        const lines = doc.splitTextToSize(subtitle, cardWidth);
        doc.text(lines, marginX, cursorY);
        cursorY += lines.length * 14 + 8;
      }
    };

    const addLineItem = (item: PricingItem, primary: boolean) => {
      const headerFill = primary ? palette.brandSky : palette.addonFill;
      const strokeColor = primary ? palette.planStroke : palette.addonStroke;
      const headerText: [number, number, number] = primary ? [255, 255, 255] : palette.addonStroke;
      const tagText = primary ? "Primary plan investment" : item.category || "Add-on module";

      const descriptionLines = doc.splitTextToSize(item.description, cardWidth - 44);
      const featureLines = item.features
        .slice(0, 6)
        .flatMap((feature) => doc.splitTextToSize(`• ${feature}`, cardWidth - 64));

      const blockHeight = 140 + descriptionLines.length * 14 + featureLines.length * 12;

      ensureSpace(blockHeight + 16);

      applyFill(headerFill);
      doc.roundedRect(marginX, cursorY, cardWidth, 52, 14, 14, "F");
      doc.setFillColor(255, 255, 255);
      doc.rect(marginX, cursorY + 52, cardWidth, blockHeight - 52, "F");

      applyStroke(strokeColor);
      doc.roundedRect(marginX, cursorY, cardWidth, blockHeight, 14, 14, "S");

      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      applyText(headerText);
      doc.text(item.name, marginX + 24, cursorY + 32);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.text(tagText, marginX + 24, cursorY + 46);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text(currency(item.price), marginX + cardWidth - 24, cursorY + 36, { align: "right" });

      let blockCursor = cursorY + 74;
      applyText(palette.textMain);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      descriptionLines.forEach((line: string) => {
        doc.text(line, marginX + 24, blockCursor);
        blockCursor += 14;
      });

      blockCursor += 6;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      applyText(palette.textMain);
      doc.text("Key deliverables", marginX + 24, blockCursor);
      blockCursor += 16;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      applyText(palette.textMuted);
      featureLines.forEach((line) => {
        doc.text(line, marginX + 30, blockCursor);
        blockCursor += 12;
      });

      blockCursor += 10;
      doc.setFont("helvetica", "italic");
      doc.setFontSize(10);
      applyText(palette.textMuted);
      doc.text(
        primary
          ? "Includes solution architecture, data migration prep, and governance reviews."
          : "Add-on pricing can be phased by milestone once a primary plan is confirmed.",
        marginX + 24,
        blockCursor,
        { maxWidth: cardWidth - 48 }
      );

      cursorY += blockHeight + 20;
    };

    if (selectedPlanItems.length > 0) {
      addSectionHeading(
        "Primary plan selection",
        "Configurations aligned to your current compensation model and launch velocity."
      );
      selectedPlanItems.forEach((plan) => addLineItem(plan, true));
    }

    if (selectedAddonItems.length > 0) {
      addSectionHeading(
        "Enhancement modules",
        "Optional integrations, automation packs, and experience upgrades to phase with your rollout."
      );
      selectedAddonItems.forEach((addon) => addLineItem(addon, false));
    }

    ensureSpace(100);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    applyText(palette.textMain);
    doc.text("Next steps", marginX, cursorY);
    cursorY += 18;

    const nextSteps = [
      "Share this quotation with finance and leadership stakeholders.",
      "Book a pricing alignment workshop to map integrations and payment milestones.",
      "Authorise the rollout to schedule implementation sprints and data migration activities."
    ];

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    applyText(palette.textMuted);
    nextSteps.forEach((step, index) => {
      ensureSpace(24);
      doc.text(`${index + 1}. ${step}`, marginX, cursorY, { maxWidth: cardWidth });
      cursorY += 18;
    });

    ensureSpace(60);
    doc.setDrawColor(226, 232, 240);
    doc.line(marginX, cursorY, pageWidth - marginX, cursorY);
    cursorY += 20;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    applyText(palette.textMuted);
    doc.text(
      "Cloud MLM Software • sales@cloudmlmsoftware.com • +91 85901 37114",
      marginX,
      cursorY
    );
    cursorY += 14;
    doc.text(
      "Quotation valid for 30 days. Final investment subject to agreed implementation scope and data migration complexity.",
      marginX,
      cursorY,
      { maxWidth: cardWidth }
    );

    doc.save(`cloud-mlm-pricing-${referenceId}.pdf`);
  };

  const handleOpenQuotePopup = () => {
    if (totalInvestment > 0) {
      setIsQuotePopupOpen(true);
      setCopySuccess("");
    } else {
      setPlanLimitNotice("Select at least one plan or add-on to generate your quote.");
    }
  };

  const handleCopyQuote = async () => {
    const textToCopy = generateQuoteContent(emailAudience);
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess("Copied to clipboard!");
    } catch (err) {
      setCopySuccess("Failed to copy.");
      console.error("Failed to copy text: ", err);
    }
  };

  const generateQuoteContent = (audience: EmailAudience) => {
    const plansSummary = selectedPlanItems.map(plan => `  - ${plan.name}: ${formatCurrency(plan.price)}`).join('\n');
    const addonsSummary = selectedAddonItems.map(addon => `  - ${addon.name}: ${formatCurrency(addon.price)}`).join('\n');

    if (audience === 'advisor') {
      return `Hello Cloud MLM Software Advisor,

I've prepared a custom quotation for a prospective client using your pricing builder. Please find the detailed summary below for review and next steps.

---
QUOTE SUMMARY
Total Estimated Investment: ${formatCurrency(totalInvestment)}
Selected Plans:
${plansSummary}
Selected Add-ons:
${addonsSummary}
---
The client is interested in discussing the following:
1. Validating assumptions and finalizing project scope.
2. Aligning on an implementation timeline and payment milestones.

Please let me know the best next steps.

Best regards,
[Your Name]
[Client Company]`;
    }

    // Default to stakeholder content
    return `Hello Team,

I've put together a preliminary investment scenario for our new Cloud MLM Software platform. This quote is based on our current business requirements and is ready for your review.

---
INVESTMENT OVERVIEW
- Total Estimated Investment: ${formatCurrency(totalInvestment)}
- Key Selection: ${selectedPlanItems.map(p => p.name).join(' & ')}
- Additional Modules: ${selectedAddonItems.length > 0 ? selectedAddonItems.map(a => a.name).join(', ') : 'None'}
---
Next Steps:
1. Review the attached PDF quotation.
2. We'll book a follow-up call with the Cloud MLM Software team to align on the final project scope and contract details.
3. Your feedback is welcome as we move this forward for approval.

Please let me know if you have any questions.

Best regards,
[Your Name]
`;
  };

  const showVerifiedView = step === "verified" && Boolean(pricingData);

  const PlaceholderSvg = () => (
    <svg
      className="h-full w-full animate-pulse text-slate-200 dark:text-slate-700"
      viewBox="0 0 400 300"
      preserveAspectRatio="none"
    >
      <rect x="0" y="0" rx="4" ry="4" width="200" height="12" />
      <rect x="0" y="24" rx="4" ry="4" width="120" height="8" />
      <rect x="290" y="0" rx="4" ry="4" width="110" height="12" />
      
      <rect x="0" y="60" rx="8" ry="8" width="400" height="80" />
      <rect x="20" y="75" rx="4" ry="4" width="180" height="10" />
      <rect x="20" y="95" rx="4" ry="4" width="300" height="8" />
      <rect x="300" y="75" rx="4" ry="4" width="80" height="10" />

      <rect x="0" y="150" rx="8" ry="8" width="400" height="80" />
      <rect x="20" y="165" rx="4" ry="4" width="180" height="10" />
      <rect x="20" y="185" rx="4" ry="4" width="300" height="8" />
      <rect x="300" y="165" rx="4" ry="4" width="80" height="10" />

      <rect x="0" y="240" rx="8" ry="8" width="400" height="80" />
      <rect x="20" y="255" rx="4" ry="4" width="180" height="10" />
      <rect x="20" y="275" rx="4" ry="4" width="300" height="8" />
      <rect x="300" y="255" rx="4" ry="4" width="80" height="10" />
    </svg>
  );

  return (
    <>
      <section
        id="pricing-access"
        className="relative overflow-hidden bg-slate-50/90 py-20 transition-colors dark:bg-slate-950/70 !mt-0"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 bg-gradient-to-br from-sky-300/25 via-emerald-200/20 to-transparent blur-3xl" />
          <div className="absolute bottom-10 left-6 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl" />
          <div className="absolute -right-24 top-16 h-64 w-64 rounded-full bg-emerald-200/20 blur-3xl" />
          <svg
            className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 text-sky-300/40"
            viewBox="0 0 600 600"
            fill="none"
          >
            <circle cx="300" cy="300" r="220" stroke="currentColor" strokeDasharray="10 18" strokeWidth="1.2" />
            <path
              d="M150 360c36-36 96-96 150-96s114 54 150 90c58 58 130-30 130-30"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M240 220h80v80h-80z"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.8"
            />
            <path d="M360 200l20 20-20 20-20-20z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" opacity="0.8" />
          </svg>
        </div>
        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-white/70 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-600 shadow-sm dark:border-sky-500/40 dark:bg-slate-900/80 dark:text-sky-200">
              Secured access workspace
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Unlock the full pricing catalogue
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {showVerifiedView
                ? "Build a tailored investment scenario by selecting the plans and add-ons below. Download the generated PDF to share with finance, leadership, or prospective investors."
                : "Submit your details to receive a one-time password via email. Once verified, you can review the latest module pricing and export-ready data curated for enterprise evaluations."}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-2">
                <LockSimple className="h-4 w-4 text-sky-500 dark:text-sky-300" aria-hidden /> OTP gated access
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500 dark:text-emerald-300" aria-hidden /> PDF quote export
              </span>
              <span className="inline-flex items-center gap-2">
                <ArrowUpRight className="h-4 w-4 text-slate-500 dark:text-slate-300" aria-hidden /> Advisor handoff ready
              </span>
            </div>
          </div>

          {message && (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 dark:border-emerald-500/60 dark:bg-emerald-500/10 dark:text-emerald-200">
              <div className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-5 w-5" aria-hidden />
                <span>{message}</span>
              </div>
            </div>
          )}
          {planLimitNotice && (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:border-amber-500/60 dark:bg-amber-500/10 dark:text-amber-200">
              <div className="flex items-start gap-2">
                <WarningCircle className="mt-0.5 h-5 w-5" weight="fill" aria-hidden />
                <span>{planLimitNotice}</span>
              </div>
            </div>
          )}
          {error && (
            <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700 dark:border-rose-500/60 dark:bg-rose-500/10 dark:text-rose-200">
              <div className="flex items-start gap-2">
                <WarningCircle className="mt-0.5 h-5 w-5" weight="fill" aria-hidden />
                <span>{error}</span>
              </div>
            </div>
          )}

          {showVerifiedView ? (
            <>
              <div className="grid gap-8 lg:grid-cols-[minmax(0,360px)_minmax(0,360px)_minmax(240px,1fr)]">
                <div>
                  <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <header className="flex items-center justify-between border-b border-slate-200 pb-3 dark:border-slate-800">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Select MLM plans</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Choose up to two core programmes.</p>
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">Catalogue</span>
                    </header>
                    <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200/60 bg-white/60 dark:border-slate-800/60 dark:bg-slate-900/40">
                      <div className="flex max-h-[540px] flex-col gap-3 overflow-y-auto p-2 pr-3">
                        {planOptions.map((plan) => {
                          const isSelected = selectedPlans.includes(plan.name);
                          const isDisabled = planLimitReached && !isSelected;
                          return (
                            <article
                              key={plan.name}
                              className={cn(
                                "flex flex-col gap-3 rounded-2xl border p-4 transition-all",
                                isSelected
                                  ? "border-sky-400 bg-sky-50/70 shadow-sm dark:border-sky-500/40 dark:bg-sky-500/10"
                                  : "border-slate-200 bg-white hover:border-sky-300 dark:border-slate-700 dark:bg-slate-900",
                                isDisabled && "pointer-events-none opacity-60"
                              )}
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div className="space-y-1">
                                  <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-50">{plan.name}</h4>
                                  <p className="text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400">{plan.category}</p>
                                </div>
                                <p className="text-right text-lg font-semibold text-slate-900 dark:text-slate-100">${plan.price.toLocaleString()}</p>
                              </div>
                              <p className="text-xs text-slate-600 dark:text-slate-300">{plan.description}</p>
                              <ul className="space-y-1 text-xs text-slate-500 dark:text-slate-300">
                                {plan.features.slice(0, 3).map((feature) => (
                                  <li key={`${plan.name}-feature-${feature}`} className="flex items-start gap-1.5">
                                    <CheckCircle className="mt-0.5 h-3.5 w-3.5 text-sky-500" aria-hidden />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                              <Button
                                type="button"
                                size="sm"
                                variant={isSelected ? "outline" : "default"}
                                className={cn("mt-2 w-full", isSelected && "border-slate-400 text-slate-900 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-100")}
                                disabled={isDisabled}
                                onClick={() => handlePlanToggle(plan)}
                              >
                                {isSelected ? "Remove" : "Add plan"}
                              </Button>
                            </article>
                          );
                        })}
                      </div>
                    </div>
                  </section>
                </div>

                <div>
                  <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <header className="flex items-center justify-between border-b border-slate-200 pb-3 dark:border-slate-800">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Select add-ons & customization</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Layer integrations, automation, and experience upgrades.</p>
                      </div>
                    </header>
                    <div className="mt-4 space-y-6 max-h-[540px] overflow-y-auto pr-3">
                      {Object.entries(groupedAddOns).map(([category, items]) => (
                        <div key={category} className="space-y-3">
                          <h4 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">{category}</h4>
                          <div className="space-y-3">
                            {items.map((addon) => {
                              const isSelected = selectedAddOns.includes(addon.name);
                              return (
                                <article
                                  key={addon.name}
                                  className={cn(
                                    "flex flex-col gap-3 rounded-2xl border p-4 transition-all",
                                    isSelected
                                      ? "border-amber-400 bg-amber-50/70 shadow-sm dark:border-amber-500/40 dark:bg-amber-500/10"
                                      : "border-slate-200 bg-white hover:border-amber-300 dark:border-slate-700 dark:bg-slate-900"
                                  )}
                                >
                                  <div className="flex items-start justify-between gap-3">
                                    <div className="space-y-1">
                                      <h5 className="text-sm font-semibold text-slate-900 dark:text-slate-50">{addon.name}</h5>
                                      <p className="text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400">{addon.category}</p>
                                    </div>
                                    <p className="text-right text-lg font-semibold text-slate-900 dark:text-slate-100">${addon.price.toLocaleString()}</p>
                                  </div>
                                  <p className="text-xs text-slate-600 dark:text-slate-300">{addon.description}</p>
                                  <ul className="space-y-1 text-xs text-slate-500 dark:text-slate-300">
                                    {addon.features.slice(0, 3).map((feature) => (
                                      <li key={`${addon.name}-feature-${feature}`} className="flex items-start gap-1.5">
                                        <CheckCircle className="mt-0.5 h-3.5 w-3.5 text-emerald-500" aria-hidden />
                                        <span>{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                  <Button
                                    type="button"
                                    size="sm"
                                    variant={isSelected ? "outline" : "secondary"}
                                    className={cn("mt-2 w-full", isSelected
                                      ? "border-slate-400 text-slate-900 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-100"
                                      : "bg-emerald-100 text-emerald-900 hover:bg-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-200")}
                                    onClick={() => handleAddonToggle(addon)}
                                  >
                                    {isSelected ? "Remove" : "Add add-on"}
                                  </Button>
                                </article>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                <aside className="hidden lg:flex">
                  <div className="sticky top-8 w-full space-y-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-xl dark:border-slate-800 dark:bg-slate-900">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Quote summary</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Download or share with procurement.</p>
                      </div>
                      {resetSelections && hasSelection && (
                        <button
                          type="button"
                          onClick={resetSelections}
                          className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
                        >
                          Reset
                        </button>
                      )}
                    </div>
                    <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
                      {[...selectedPlanItems, ...selectedAddonItems].length === 0 ? (
                        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/70 px-4 py-6 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-300">
                          <LockSimple className="mx-auto h-7 w-7 text-slate-400 dark:text-slate-500" />
                          <p className="mt-2">Add a plan to start estimating.</p>
                        </div>
                      ) : (
                        <ul className="space-y-3">
                          {selectedPlanItems.map((plan) => (
                            <li key={`summary-plan-${plan.name}`} className="rounded-2xl border border-sky-400 bg-sky-50/70 p-4 dark:border-sky-500/40 dark:bg-slate-900/60">
                              <div className="flex items-start justify-between gap-3">
                                <div>
                                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">{plan.name}</p>
                                  <p className="text-[11px] uppercase tracking-wide text-sky-600 dark:text-sky-300">Core plan</p>
                                </div>
                                <div className="text-right">
                                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">${plan.price.toLocaleString()}</p>
                                  <button
                                    type="button"
                                    onClick={() => handlePlanToggle(plan)}
                                    className="text-[11px] font-semibold uppercase tracking-[0.3em] text-rose-600 hover:text-rose-500 dark:text-rose-300"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </li>
                          ))}
                          {selectedAddonItems.map((addon) => (
                            <li key={`summary-addon-${addon.name}`} className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-950">
                              <div className="flex items-start justify-between gap-3">
                                <div>
                                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">{addon.name}</p>
                                  <p className="text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400">{addon.category}</p>
                                </div>
                                <div className="text-right">
                                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">${addon.price.toLocaleString()}</p>
                                  <button
                                    type="button"
                                    onClick={() => handleAddonToggle(addon)}
                                    className="text-[11px] font-semibold uppercase tracking-[0.3em] text-rose-600 hover:text-rose-500 dark:text-rose-300"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="space-y-2 rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 dark:border-slate-700 dark:bg-slate-900/40">
                      <div className="flex items-center justify-between text-lg font-semibold text-slate-900 dark:text-slate-100">
                        <span>Total estimated</span>
                        <span>{formatCurrency(totalInvestment)}</span>
                      </div>
                      <Button type="button" size="sm" disabled={!hasSelection} onClick={handleOpenQuotePopup} className="w-full">
                        Share Quote
                      </Button>
                    </div>
                  </div>
                </aside>
              </div>

              <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 p-4 shadow-2xl backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/95 lg:hidden">
                <div className="flex items-center justify-between" onClick={() => setIsMobilePanelOpen(!isMobilePanelOpen)}>
                  <span className="text-lg font-bold text-slate-900 dark:text-slate-50">Total: {formatCurrency(totalInvestment)}</span>
                  <CaretDown className={cn("transition-transform", isMobilePanelOpen && "rotate-180")} />
                </div>
                {isMobilePanelOpen && (
                  <div className="mt-4 space-y-3">
                    <ul className="space-y-2">
                      {selectedPlanItems.map((plan) => (
                        <li key={`mobile-plan-${plan.name}`} className="flex items-center justify-between rounded-2xl bg-sky-50 px-3 py-2 text-sm font-semibold text-slate-700 dark:bg-slate-900/60 dark:text-slate-200">
                          <span>{plan.name}</span>
                          <span>{formatCurrency(plan.price)}</span>
                        </li>
                      ))}
                      {selectedAddonItems.map((addon) => (
                        <li key={`mobile-addon-${addon.name}`} className="flex items-center justify-between rounded-2xl bg-amber-50 px-3 py-2 text-sm font-semibold text-slate-700 dark:bg-slate-900/60 dark:text-slate-200">
                          <span>{addon.name}</span>
                          <span>{formatCurrency(addon.price)}</span>
                        </li>
                      ))}
                    </ul>
                    <Button onClick={handleOpenQuotePopup} disabled={!hasSelection} className="w-full">
                      Share Quote
                    </Button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="grid gap-12 lg:grid-cols-[minmax(0,420px)_minmax(0,500px)] lg:items-start lg:justify-items-center">
              <div className="mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:p-7">
                {step === "form" ? (
                  <form onSubmit={handleSubmitForm} className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Secure Access</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        Enter your details to receive a one-time verification code via email.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="pricing-name">
                          Full name
                        </label>
                        <input
                          id="pricing-name"
                          type="text"
                          autoComplete="name"
                          required
                          value={form.name}
                          onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                          className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-50"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="pricing-contact">
                          Contact number
                        </label>
                        <input
                          id="pricing-contact"
                          type="tel"
                          autoComplete="tel"
                          required
                          value={form.contact}
                          onChange={(e) => setForm((prev) => ({ ...prev, contact: e.target.value }))}
                          className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-50"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="pricing-email">
                          Business email
                        </label>
                        <input
                          id="pricing-email"
                          type="email"
                          autoComplete="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                          className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-50"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="pricing-country">
                          Country
                        </label>
                        <select
                          id="pricing-country"
                          required
                          value={form.country}
                          onChange={(e) => setForm((prev) => ({ ...prev, country: e.target.value }))}
                          className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-50"
                        >
                          <option value="" disabled>
                            Select your country
                          </option>
                          {COUNTRIES.map((country) => (
                            <option key={country} value={country}>
                              {country}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <Button type="submit" size="lg" disabled={!isFormValid || isLoading} className="w-full">
                      {isLoading ? "Sending code..." : "Send verification code"}
                    </Button>
                    <p className="text-xs text-center text-slate-500 dark:text-slate-400">
                      We use this information to tailor follow-up conversations.
                    </p>
                  </form>
                ) : (
                  <form onSubmit={handleVerifyOtp} className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Enter Verification Code</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        We just sent a 6-digit code to <span className="font-semibold">{form.email}</span>.
                      </p>
                    </div>
                    <input
                      type="text"
                      inputMode="numeric"
                      autoComplete="one-time-code"
                      maxLength={6}
                      required
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ""))}
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-center text-lg tracking-[0.4em] text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-950 dark:text-sky-100"
                    />
                    <div className="flex gap-3">
                      <Button type="submit" className="flex-1" size="lg" disabled={otp.length !== 6 || isLoading}>
                        {isLoading ? "Verifying..." : "Verify code"}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        disabled={isLoading}
                        onClick={() => setStep("form")}
                        className="flex-1 border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-900/60"
                      >
                        Back
                      </Button>
                    </div>
                  </form>
                )}
              </div>

              <aside className="relative hidden w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-lg backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/60 lg:flex">
                <div className="pointer-events-none absolute -top-24 left-16 h-48 w-48 rounded-full bg-sky-300/20 blur-3xl" />
                <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl" />
                {showVerifiedView ? (
                  <div className="relative space-y-5 text-slate-600 dark:text-slate-300">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">Pricing preview</span>
                      <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500 shadow-sm dark:border-slate-600 dark:bg-slate-900/70 dark:text-slate-300">
                        <LockSimple className="h-3.5 w-3.5" weight="bold" aria-hidden /> Locked
                      </span>
                    </div>
                    <div className="space-y-3 opacity-90">
                      <div className="rounded-2xl border border-slate-200/70 bg-white/90 p-4 shadow-sm dark:border-slate-700/50 dark:bg-slate-900/70">
                        <div className="flex items-center justify-between text-sm font-semibold text-slate-700 dark:text-slate-200">
                          Launch Lab
                          <span className="text-slate-500">$28k</span>
                        </div>
                        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                          Pilot compensation, portals, analytics starter pack.
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-200/70 bg-white/90 p-4 shadow-sm dark:border-slate-700/50 dark:bg-slate-900/70">
                        <div className="flex items-center justify-between text-sm font-semibold text-slate-700 dark:text-slate-200">
                          Growth Engine
                          <span className="text-slate-500">$48k</span>
                        </div>
                        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                          Automation journeys, tax & payment orchestration.
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-200/70 bg-white/90 p-4 shadow-sm dark:border-slate-700/50 dark:bg-slate-900/70">
                        <div className="flex items-center justify-between text-sm font-semibold text-slate-700 dark:text-slate-200">
                          Executive briefing pack
                          <span className="text-slate-500">+$3.6k</span>
                        </div>
                        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                          Board-ready analytics and procurement summary.
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2 rounded-2xl border border-slate-200 bg-white/90 p-4 text-sm shadow-sm dark:border-slate-700/50 dark:bg-slate-900/70">
                      <div className="flex items-center justify-between text-slate-700 dark:text-slate-200">
                        <span>Estimated total</span>
                        <span className="text-lg font-semibold text-slate-900 dark:text-white">$79,600</span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        Unlock access to download the detailed PDF and collaborate with our advisors.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full">
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center space-y-2 text-center">
                      <svg
                        className="h-12 w-12 text-slate-400 dark:text-slate-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        fill="currentColor"
                      >
                        <path d="M208 80h-4V48a48 48 0 0 0-96 0v32h-4a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h96a24 24 0 0 0 24-24V104a24 24 0 0 0-24-24Zm-92-32a28 28 0 0 1 56 0v32h-56Zm92 168a4 4 0 0 1-4 4h-96a4 4 0 0 1-4-4V104a4 4 0 0 1 4-4h96a4 4 0 0 1 4 4Z" />
                      </svg>
                      <span className="text-lg font-semibold text-slate-600 dark:text-slate-300">Locked</span>
                    </div>
                    <div className="pointer-events-none blur-sm opacity-90 transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                          <svg width="100" height="12" viewBox="0 0 100 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
                            <rect x="0" y="0" rx="2" ry="2" width="100" height="12" fill="currentColor" />
                          </svg>
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500 shadow-sm dark:border-slate-600 dark:bg-slate-900/70 dark:text-slate-300">
                          <LockSimple className="h-3.5 w-3.5" weight="bold" aria-hidden /> Locked
                        </span>
                      </div>
                      <div className="space-y-3 mt-5">
                        <div className="rounded-2xl border border-slate-200/70 bg-white/90 p-4 shadow-sm dark:border-slate-700/50 dark:bg-slate-900/70">
                          <div className="flex items-center justify-between text-sm font-semibold text-slate-700 dark:text-slate-200">
                            <svg width="120" height="10" viewBox="0 0 120 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
                              <rect x="0" y="0" rx="2" ry="2" width="120" height="10" fill="currentColor" />
                            </svg>
                            <svg width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
                              <rect x="0" y="0" rx="2" ry="2" width="40" height="10" fill="currentColor" />
                            </svg>
                          </div>
                          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                            <svg width="220" height="8" viewBox="0 0 220 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
                              <rect x="0" y="0" rx="2" ry="2" width="220" height="8" fill="currentColor" />
                            </svg>
                          </p>
                        </div>
                        <div className="rounded-2xl border border-slate-200/70 bg-white/90 p-4 shadow-sm dark:border-slate-700/50 dark:bg-slate-900/70">
                          <div className="flex items-center justify-between text-sm font-semibold text-slate-700 dark:text-slate-200">
                            <svg width="120" height="10" viewBox="0 0 120 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
                              <rect x="0" y="0" rx="2" ry="2" width="120" height="10" fill="currentColor" />
                            </svg>
                            <svg width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
                              <rect x="0" y="0" rx="2" ry="2" width="40" height="10" fill="currentColor" />
                            </svg>
                          </div>
                          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                            <svg width="220" height="8" viewBox="0 0 220 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
                              <rect x="0" y="0" rx="2" ry="2" width="220" height="8" fill="currentColor" />
                            </svg>
                          </p>
                        </div>
                        <div className="rounded-2xl border border-slate-200/70 bg-white/90 p-4 shadow-sm dark:border-slate-700/50 dark:bg-slate-900/70">
                          <div className="flex items-center justify-between text-sm font-semibold text-slate-700 dark:text-slate-200">
                            <svg width="120" height="10" viewBox="0 0 120 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
                              <rect x="0" y="0" rx="2" ry="2" width="120" height="10" fill="currentColor" />
                            </svg>
                            <svg width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
                              <rect x="0" y="0" rx="2" ry="2" width="40" height="10" fill="currentColor" />
                            </svg>
                          </div>
                          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                            <svg width="220" height="8" viewBox="0 0 220 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
                              <rect x="0" y="0" rx="2" ry="2" width="220" height="8" fill="currentColor" />
                            </svg>
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2 mt-5 rounded-2xl border border-slate-200 bg-white/90 p-4 text-sm shadow-sm dark:border-slate-700/50 dark:bg-slate-900/70">
                        <div className="flex items-center justify-between text-slate-700 dark:text-slate-200">
                          <span>
                            <svg width="100" height="10" viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
                              <rect x="0" y="0" rx="2" ry="2" width="100" height="10" fill="currentColor" />
                            </svg>
                          </span>
                          <span className="text-lg font-semibold text-slate-900 dark:text-white">
                            <svg width="70" height="16" viewBox="0 0 70 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
                              <rect x="0" y="0" rx="2" ry="2" width="70" height="16" fill="currentColor" />
                            </svg>
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          <svg width="200" height="8" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
                            <rect x="0" y="0" rx="2" ry="2" width="200" height="8" fill="currentColor" />
                          </svg>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </aside>
            </div>
          )}
        </div>
      </section>

      {isQuotePopupOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsQuotePopupOpen(false);
            }
          }}
        >
          <div className="relative w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
            <button
              onClick={() => setIsQuotePopupOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Your Quotation Summary</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                You can download a PDF of your personalized quote or copy the details to share manually.
              </p>
              
              <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 dark:bg-slate-800">
                <button
                  className={cn(
                    "flex-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                    emailAudience === "advisor"
                      ? "bg-white shadow text-slate-900 dark:bg-slate-950 dark:text-slate-50"
                      : "text-slate-500 hover:bg-white/50 dark:text-slate-400 dark:hover:bg-slate-700"
                  )}
                  onClick={() => setEmailAudience("advisor")}
                >
                  To be sent to CloudMLMSoftware team
                </button>
                <button
                  className={cn(
                    "flex-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                    emailAudience === "stakeholder"
                      ? "bg-white shadow text-slate-900 dark:bg-slate-950 dark:text-slate-50"
                      : "text-slate-500 hover:bg-white/50 dark:text-slate-400 dark:hover:bg-slate-700"
                  )}
                  onClick={() => setEmailAudience("stakeholder")}
                >
                  To be sent to stakeholders
                </button>
              </div>

              <div className="max-h-96 overflow-y-auto rounded-xl bg-slate-50 p-4 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                <pre className="whitespace-pre-wrap font-sans leading-relaxed">
                  {generateQuoteContent(emailAudience)}
                </pre>
              </div>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-3">
                  <Button onClick={() => {
                    handleExportPdf();
                    setIsQuotePopupOpen(false);
                  }}>
                    <Download className="mr-2 h-4 w-4" /> Download PDF
                  </Button>
                  <Button onClick={handleCopyQuote} variant="secondary">
                    <Copy className="mr-2 h-4 w-4" /> Copy to Clipboard
                  </Button>
                  <Button onClick={() => setIsQuotePopupOpen(false)} variant="ghost" className="text-slate-600 dark:text-slate-400">
                    Cancel
                  </Button>
                </div>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                  You can also manually email this summary to: {" "}
                  <a href="mailto:sales@cloudmlmsoftware.com" className="font-semibold text-sky-600 hover:underline dark:text-sky-400">
                    sales@cloudmlmsoftware.com
                  </a>
                </p>
                {copySuccess && (
                  <p className="mt-2 text-sm text-emerald-600 dark:text-emerald-400">{copySuccess}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}