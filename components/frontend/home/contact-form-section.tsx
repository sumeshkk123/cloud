'use client';

import type { Locale } from "@/i18n-config";
import type { HomepageContent } from "@/types/homepage";
import { ContactForm } from "@/components/frontend/common/contact-form";
import Image from "next/image";
import { Section } from "@/components/ui/section";

export function ContactFormSection({ locale, data }: { locale: Locale; data: HomepageContent["contact"] }) {
  const handleSubmit = (formData: { name: string; email: string; country: string; phone: string; message: string }) => {
    console.log('Contact form submitted:', formData);
    // TODO: Implement form submission logic
    // You can add API call here to submit the form data
  };

  return (
    <Section variant="gradient-dark" padding="xl" className="relative overflow-hidden bg-slate-950" containerClassName="relative">
      {/* Map Background - 80% width */}
      <div className="absolute left-0 top-0 h-full w-[80%] opacity-20">
        <div className="relative h-full w-full">
          <Image
            src="/images/home/map.svg"
            alt="Global MLM Software Coverage - Network Marketing Platform Available Worldwide"
            fill
            className="object-cover"
            priority
          />

          {/* Decorative Curved Lines */}
          <div className="absolute top-0 left-0 w-64 h-64">
            <svg className="w-full h-full opacity-20" viewBox="0 0 200 200">
              <path d="M0,100 Q50,50 100,100 T200,100" stroke="rgb(167, 243, 208)" strokeWidth="2" fill="none" />
              <path d="M0,120 Q60,80 120,120 T200,120" stroke="rgb(167, 243, 208)" strokeWidth="2" fill="none" />
            </svg>
          </div>

          {/* Location Markers */}
          {/* USA Marker */}
          <div className="absolute top-[35%] left-[25%] z-10">
            <div className="relative">
              <div className="absolute inset-0 animate-ping">
                <div className="h-4 w-4 rounded-full bg-white opacity-75"></div>
              </div>
              <div className="relative h-4 w-4 rounded-full bg-white shadow-lg"></div>
            </div>
          </div>

          {/* Europe Marker */}
          <div className="absolute top-[30%] left-[48%] z-10">
            <div className="relative">
              <div className="absolute inset-0 animate-ping">
                <div className="h-4 w-4 rounded-full bg-white opacity-75"></div>
              </div>
              <div className="relative h-4 w-4 rounded-full bg-white shadow-lg"></div>
            </div>
          </div>

          {/* South America/Brazil Marker */}
          <div className="absolute top-[55%] left-[30%] z-10">
            <div className="relative">
              <div className="absolute inset-0 animate-ping">
                <div className="h-4 w-4 rounded-full bg-white opacity-75"></div>
              </div>
              <div className="relative h-4 w-4 rounded-full bg-white shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="relative w-full max-w-2xl">
          {/* Background with less opacity */}
          <div className="absolute inset-0 bg-slate-800/40 backdrop-blur-sm rounded-2xl"></div>
          <div className="relative w-full z-10 p-8">
            <ContactForm
              badge="GET IN TOUCH"
              heading="Drop Us a Line."
              headingHighlight="Line."
              onSubmit={handleSubmit}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
