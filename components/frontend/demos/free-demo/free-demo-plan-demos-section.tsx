"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, X } from "lucide-react";
import { ReadMoreButton } from "@/components/ui/read-more-button";
import type { PlanDemo } from "./free-demo-content";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { BulletList } from "@/components/ui/bullet-list";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/frontend/common/contact-form";
import { getContactContent } from "@/lib/contact";
import { cn } from "@/lib/utils";

export function FreeDemoPlanDemosSection({
  planDemos,
  exploreDemoLabel = "Explore Demo",
  bookYourDemoLabel = "Book Your Demo",
  demoFormBadge = "BOOK A DEMO",
  demoFormHeading = "Request Your Demo.",
  demoFormHeadingHighlight = "Demo.",
  locale = "en",
}: {
  planDemos: PlanDemo[];
  exploreDemoLabel?: string;
  bookYourDemoLabel?: string;
  demoFormBadge?: string;
  demoFormHeading?: string;
  demoFormHeadingHighlight?: string;
  locale?: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlanTitle, setSelectedPlanTitle] = useState<string | null>(null);
  const [selectedViewType, setSelectedViewType] = useState<"Admin" | "Distributor" | null>(null);

  const content = getContactContent(locale as import("@/i18n-config").Locale);
  const formTranslations = content.formSection;

  const openBookDemoModal = (planTitle: string, viewType: "Admin" | "Distributor") => {
    setSelectedPlanTitle(planTitle);
    setSelectedViewType(viewType);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlanTitle(null);
    setSelectedViewType(null);
  };

  const handleSubmit = async (formData: { name: string; email: string; country: string; phone: string; message: string }) => {
    const source = selectedPlanTitle && selectedViewType
      ? `demo-${selectedPlanTitle} (${selectedViewType} view)`
      : "demo";
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        source,
        sourceSite: process.env.NEXT_PUBLIC_CONTACT_WEBSITE || "Cloud MLM",
        locale,
      }),
    });
    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error || "Failed to submit");
    }
    closeModal();
  };

  return (
    <>
      <Section
        variant="primary"
        padding="lg"
        className="relative isolate !overflow-visible"
        containerClassName="space-y-6"
      >
        <div className="absolute inset-0 -z-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10" />
        </div>
        <div className="absolute left-1/4 top-1/4 -z-10 h-72 w-72 animate-pulse rounded-full bg-primary/20 blur-3xl" />
        <div
          className="absolute bottom-1/4 right-1/4 -z-10 h-96 w-96 animate-pulse rounded-full bg-blue-500/20 blur-3xl"
          style={{ animationDelay: "1s" }}
        />

        <SectionTitle
          badge="Plan demos"
          heading="Drill into live plan demos"
          description="Preview administrator and distributor workflows for the most-requested compensation plans. Launch the sandbox or book a guided session to see them populated with your products and payout rules."
          centered={true}
          maxWidth="3xl"
        />

        <div className="divide-y divide-border/60 pt-4">
          {planDemos.map((plan, index) => (
            <article
              key={plan.title}
              className={cn("grid gap-8 py-10 md:grid-cols-[1fr_500px]", index === 0 && "pt-0")}
            >
              <Card className="space-y-5">
                <CardContent className="space-y-2">
                  <Typography as="h3" variant="h4" className="tracking-tight">
                    {plan.title}
                  </Typography>
                </CardContent>
                <CardContent className="space-y-4">
                  {[plan.admin, plan.user].map((profile) => {
                    const viewType: "Admin" | "Distributor" = profile.title === plan.admin.title ? "Admin" : "Distributor";
                    return (
                      <details
                        key={`${plan.title}-${profile.title}`}
                        className="group rounded-2xl border border-border/50 bg-background/60 p-5 text-left transition"
                        open={profile.title === plan.admin.title}
                      >
                        <summary className="cursor-pointer list-none text-base font-semibold text-foreground bg-primary/5 px-5 py-3 rounded-xl">
                          <span className="flex items-center justify-between gap-4">
                            <span className="min-w-0">
                              <Typography as="span" variant="small" className="font-semibold text-foreground">
                                {profile.title}
                              </Typography>
                            </span>
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 ease-in-out group-open:rotate-45">
                              <Plus className="h-4 w-4" />
                            </span>
                          </span>
                        </summary>
                        <div className="mt-3 space-y-3 text-sm text-muted-foreground">
                          <Typography as="p" variant="p" className="leading-relaxed py-3 text-md">
                            {profile.description}
                          </Typography>
                          <BulletList items={profile.bullets} variant="compact" />
                          <div className="flex flex-wrap gap-3 pt-2">
                            <ReadMoreButton
                              href="https://demo.cloudmlmsoftware.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              variant="primary"
                              className="rounded-full px-6 py-3"
                            >
                              {exploreDemoLabel}
                            </ReadMoreButton>
                            <ReadMoreButton
                              onClick={() => openBookDemoModal(plan.title, viewType)}
                              variant="outline"
                              className="rounded-full px-6 py-3"
                            >
                              {bookYourDemoLabel}
                            </ReadMoreButton>
                          </div>
                        </div>
                      </details>
                    );
                  })}
                </CardContent>
              </Card>
              <div className="flex items-center justify-center sticky top-12 self-start">
                <div className="flex w-full items-center justify-center overflow-hidden rounded-2xl border border-border/60 bg-background p-10">
                  <Image
                    src={plan.image}
                    alt={plan.imageAlt}
                    width={plan.width}
                    height={plan.height}
                    className="h-auto w-full max-h-[200px] object-contain"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Book Your Demo modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="book-demo-modal-title"
        >
          <div
            className={cn(
              "w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl",
              "bg-[#0D1C3D]",
              "animate-in fade-in zoom-in-95 duration-200"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/20 bg-[#0D1C3D] p-6">
              <div>
                <h2 id="book-demo-modal-title" className="text-2xl font-bold text-white">
                  Book Your Demo
                </h2>
                <p className="mt-2 text-sm text-slate-300">
                  {selectedPlanTitle && selectedViewType
                    ? `Request a demo: ${selectedPlanTitle} (${selectedViewType} view)`
                    : "We will contact you soon to schedule your demo."}
                </p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="p-2 rounded-lg text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="rounded-2xl p-8">
                <ContactForm
                  badge=""
                  heading=""
                  headingHighlight=""
                  onSubmit={handleSubmit}
                  className="w-full"
                  translations={{
                    fields: formTranslations.fields,
                    submitButton: formTranslations.submitButton,
                    errors: formTranslations.errors,
                    successMessage: formTranslations.successMessage,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
