'use client';

import { useRef, useState, useEffect } from "react";
import type { HomepageContent } from "@/types/homepage";
import { SectionTitle } from "@/components/ui/section-title";
import { TestimonialCard } from "@/components/common/testimonial-card";
import { InfoCtaBox } from "@/components/ui/info-cta-box";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function TestimonialsSection({ data }: { data: HomepageContent["testimonials"] }) {
  const reviewTags = data?.tags ?? [];
  const testimonials = (data?.items ?? []).slice(0, 9); // Limit to 9 items
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const firstCard = container.querySelector('article');
    if (!firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap = 24; // gap-6 = 24px
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = container;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    // Initial check after render
    const timer = setTimeout(() => {
      handleScroll();
    }, 100);

    window.addEventListener('resize', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleScroll);
    };
  }, [testimonials]);


  const initials = (name: string) =>
    name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (
    <section className="relative overflow-hidden py-20 ">
      <div
        className="absolute inset-0 -z-20 bg-gradient-to-b from-[hsl(var(--background))] via-[hsl(var(--muted))] to-[hsl(var(--background))] dark:from-slate-950 dark:via-slate-900/80 dark:to-slate-950"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_15%,rgba(59,130,246,0.12),transparent_55%),radial-gradient(circle_at_85%_20%,rgba(37,99,235,0.1),transparent_50%),radial-gradient(circle_at_50%_90%,rgba(16,185,129,0.1),transparent_60%)] dark:bg-[radial-gradient(circle_at_10%_15%,rgba(96,165,250,0.18),transparent_55%),radial-gradient(circle_at_85%_20%,rgba(59,130,246,0.14),transparent_50%),radial-gradient(circle_at_50%_90%,rgba(45,212,191,0.12),transparent_60%)]"
        aria-hidden
      />
      <div className="container space-y-12">
        <SectionTitle
          badge={data?.badgeLabel}
          heading={data?.heading}
          description={data?.description}
          maxWidth="3xl"
        />


        <div className="relative px-12">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={cn(
              "absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 p-2 shadow-lg transition-all hover:bg-background disabled:opacity-0 disabled:pointer-events-none",
              "-translate-x-2"
            )}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>

          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={cn(
              "absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 p-2 shadow-lg transition-all hover:bg-background disabled:opacity-0 disabled:pointer-events-none",
              "translate-x-2"
            )}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>

          {/* Slider Container */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{
              scrollSnapType: 'x mandatory',
              scrollPadding: '0 3rem',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {testimonials.map((testimonial, index) => {
              const name = testimonial.author ?? (testimonial as any).name ?? "";
              const company = testimonial.company ?? (testimonial as any).company ?? "";
              const rating = testimonial.rating ?? 4.8;
              const avatar = testimonial.avatar;
              const platform = testimonial.platform ?? (testimonial as any).platform ?? "";
              const href = testimonial.href ?? (testimonial as any).href ?? "";

              return (
                <TestimonialCard
                  key={`${name}-${testimonial.role ?? ""}-${platform}`}
                  name={name}
                  role={testimonial.role}
                  company={company}
                  avatar={avatar}
                  quote={testimonial.quote}
                  rating={rating}
                  platform={platform}
                  href={href}
                />
              );
            })}
          </div>
        </div>

        <InfoCtaBox
          icon={Sparkles}
          text={
            <>
              See what our customers are saying about Cloud MLM Software. Read more testimonials and success stories.
            </>
          }
          buttonText="Explore more testimonials"
          buttonHref="/testimonials"
        />
      </div>
    </section>
  );
}
