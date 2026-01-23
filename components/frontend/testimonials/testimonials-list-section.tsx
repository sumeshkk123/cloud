'use client';

import { useState, useEffect } from "react";
import { TestimonialCard } from "@/components/frontend/common/testimonial-card";
import type { Locale } from "@/i18n-config";
import { getTestimonialsContent } from "@/lib/testimonials";

interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  image?: string;
  locale: string;
}

interface TestimonialsListSectionProps {
  locale: Locale;
}

export function TestimonialsListSection({ locale }: TestimonialsListSectionProps) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const t = getTestimonialsContent(locale);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/testimonials?locale=${encodeURIComponent(locale)}`, {
          cache: 'no-store',
        });
        if (response.ok) {
          const data = await response.json();
          setTestimonials(Array.isArray(data) ? data : []);
        } else {
          setTestimonials([]);
        }
      } catch (error) {
        setTestimonials([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, [locale]);

  if (isLoading) {
    return (
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10 py-24">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-64 animate-pulse rounded-3xl border border-border/60 bg-background" />
          ))}
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return (
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10 py-24">
        <div className="text-center py-12">
          <p className="text-muted-foreground">{t.listSection.noTestimonials}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10 py-24">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            role={testimonial.role || ""}
            avatar={testimonial.image}
            quote={testimonial.content}
          />
        ))}
      </div>
    </section>
  );
}
