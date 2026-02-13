"use client";

import { X } from "lucide-react";
import { ContactForm } from "@/components/frontend/common/contact-form";
import { getContactContent } from "@/lib/contact";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n-config";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

/** Format phone for wa.me: digits only, no + */
function phoneToWhatsAppHref(phone: string): string {
  const digits = phone.replace(/\s+/g, "").replace(/[^0-9]/g, "");
  return `https://wa.me/${digits}`;
}

export interface ProjectBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Page/source name sent to contact API (e.g. "contact", "services", "mlm-software-modules") */
  source: string;
  /** Optional notes for the submission (e.g. "Enquiry from services page") */
  notes?: string;
  /** Optional page path for admin (e.g. "/mlm-software-payment-gateways/algeria"); appended to notes as "Page: {sourcePage}" */
  sourcePage?: string;
  locale?: string;
  onSuccess?: (message: string) => void;
  onError?: (message: string) => void;
}

const DEFAULT_PHONE = "+91 85901 37114";

export function ProjectBriefModal({
  isOpen,
  onClose,
  source,
  notes,
  sourcePage,
  locale = "en",
  onSuccess,
  onError,
}: ProjectBriefModalProps) {
  if (!isOpen) return null;

  const content = getContactContent(locale as Locale);
  const formTranslations = content.formSection;
  const phoneNumber =
    content.businessInfoSection?.phoneSupport?.detail ?? DEFAULT_PHONE;
  const whatsappHref = phoneToWhatsAppHref(phoneNumber);

  const handleSubmit = async (formData: {
    name: string;
    email: string;
    country: string;
    phone: string;
    message: string;
  }) => {
    try {
      const combinedNotes = [notes, sourcePage ? `Page: ${sourcePage}` : null].filter(Boolean).join(" · ") || undefined;
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source,
          notes: combinedNotes,
          sourceSite:
            typeof process !== "undefined" && process.env.NEXT_PUBLIC_CONTACT_WEBSITE
              ? process.env.NEXT_PUBLIC_CONTACT_WEBSITE
              : "Cloud MLM",
          locale,
        }),
      });
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Failed to submit");
      }
      const successMessage = formTranslations.successMessage ?? "Message sent successfully.";
      onSuccess?.(successMessage);
      onClose();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to submit. Please try again.";
      onError?.(message);
      throw err;
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-brief-modal-title"
    >
      <div
        className={cn(
          "w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl",
          "bg-[#0D1C3D]",
          "animate-in fade-in zoom-in-95 duration-200"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <Section padding="none" className="sticky top-0 z-10 border-b border-white/20 bg-[#0D1C3D]" containerClassName="!max-w-full px-6 py-6">
          <div className="flex items-start justify-between gap-4">
            <SectionTitle
              badge={content.projectBriefModal.badge}
              heading={content.projectBriefModal.heading}
              centered={false}
              maxWidth="full"
              headingAs="h2"
              headingClassName="text-2xl font-bold text-white capitalize"
              id="project-brief-modal-title"
            />
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-slate-300 hover:bg-white/10 hover:text-white transition-colors shrink-0"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </Section>

        <Section padding="none" className="bg-transparent" containerClassName="!max-w-full px-6 py-6 space-y-6">
          <Card className="border-white/10 bg-white/5 hover:shadow-none hover:translate-y-0">
            <CardContent className="flex flex-wrap items-center gap-6 p-6">
              <a
                href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-slate-200 hover:text-white transition-colors"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </span>
                <Typography as="span" variant="p" className="font-medium text-slate-200 hover:text-white">
                  {phoneNumber}
                </Typography>
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-200 hover:text-white transition-colors"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#25D366]/20 text-[#25D366]">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <Typography as="span" variant="p" className="font-medium text-white">
                  WhatsApp
                </Typography>
                <Typography as="span" variant="small" className="text-slate-400">
                  {phoneNumber}
                </Typography>
              </a>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/5 hover:shadow-none hover:translate-y-0">
            <CardContent className="p-6">
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
            </CardContent>
          </Card>
        </Section>
      </div>
    </div>
  );
}
