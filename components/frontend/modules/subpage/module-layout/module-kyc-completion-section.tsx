"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import type { ModuleKycCompletionSection } from "./types";

interface ModuleKycCompletionSectionProps {
  content: ModuleKycCompletionSection;
}

export function ModuleKycCompletionSection({ content }: ModuleKycCompletionSectionProps) {
  const { titleLine1, titleLine2, profileImageSrc } = content;

  return (
    <Section variant="default" padding="lg" className="bg-muted/40">
      <div className="mx-auto max-w-4xl space-y-12 text-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {titleLine1}
          </h2>
          <p className="mt-1 text-2xl font-medium text-muted-foreground sm:text-3xl">
            {titleLine2}
          </p>
        </div>

        <div className="relative flex min-h-[280px] items-center justify-center">
          {/* Left card: PDF document */}
          <Card className="absolute left-0 top-1/2 z-10 w-[200px] -translate-y-1/2 -rotate-6 border bg-card shadow-lg sm:left-4 sm:w-[220px] md:left-8">
            <div className="relative p-4">
              <span className="inline-block rounded bg-red-600 px-2 py-0.5 text-xs font-medium text-white">
                PDF
              </span>
              <div className="mt-3 space-y-1 text-left text-xs text-muted-foreground">
                <p className="font-medium text-foreground">Adobe Acrobat PDF Files</p>
                <p>Create, edit, and sign PDFs...</p>
              </div>
              <CheckCircle
                className="absolute bottom-2 right-2 h-10 w-10 text-emerald-500"
                aria-hidden
              />
            </div>
          </Card>

          {/* Middle card: Verified profile */}
          <Card className="relative z-20 w-[200px] -translate-y-2 border bg-card shadow-xl sm:w-[220px]">
            <div className="flex flex-col items-center p-4">
              <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-border bg-muted">
                <Image
                  src={profileImageSrc}
                  alt="Verified member"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <span className="mt-3 inline-block rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                Verified
              </span>
            </div>
          </Card>

          {/* Right card: Invoice */}
          <Card className="absolute right-0 top-1/2 z-10 w-[200px] -translate-y-1/2 rotate-6 border bg-card shadow-lg sm:right-4 sm:w-[220px] md:right-8">
            <div className="relative p-4 text-left">
              <div className="mb-2 flex items-center gap-1">
                <span className="h-4 w-4 rounded bg-gradient-to-br from-orange-400 to-red-500" />
                <span className="text-xs font-medium text-foreground">Brand Name</span>
              </div>
              <div className="space-y-0.5 text-xs text-muted-foreground">
                <p>Invoice # · Date · QTY</p>
                <p>Sub Total · Tax</p>
                <p className="font-medium text-foreground">Total Amount ($200.00)</p>
              </div>
              <CheckCircle
                className="absolute bottom-2 right-2 h-10 w-10 text-emerald-500"
                aria-hidden
              />
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
