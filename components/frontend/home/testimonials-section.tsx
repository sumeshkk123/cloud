'use client';

import { useRef, useState, useEffect } from "react";
import type { HomepageContent } from "@/types/homepage";
import type { Locale } from "@/i18n-config";
import { SectionTitle } from "@/components/ui/section-title";
import { TestimonialCard } from "@/components/frontend/common/testimonial-card";
import { InfoCtaBox } from "@/components/ui/info-cta-box";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getTestimonialsContent } from "@/lib/testimonials";

interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  image?: string;
  locale: string;
}

interface TestimonialsSectionProps {
  data: HomepageContent["testimonials"];
  locale: Locale;
}

export function TestimonialsSection({ data, locale }: TestimonialsSectionProps) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const t = getTestimonialsContent(locale);

  // Fetch testimonials from API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/testimonials?locale=${encodeURIComponent(locale)}`, {
          cache: 'no-store',
        });
        if (response.ok) {
          const fetchedData = await response.json();
          const fetchedTestimonials = Array.isArray(fetchedData) ? fetchedData : [];
          // Limit to maximum 9 testimonials for home page
          const limitedTestimonials = fetchedTestimonials.slice(0, 9);
          setTestimonials(limitedTestimonials);
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

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const cards = container.querySelectorAll('article');
    if (cards.length === 0) return;

    // Determine how many cards to show based on screen width
    const containerWidth = container.getBoundingClientRect().width;
    let cardsToShow = 1; // Mobile default
    if (containerWidth >= 1024) {
      cardsToShow = 3; // Desktop (xl and above)
    } else if (containerWidth >= 768) {
      cardsToShow = 2; // Tablet (md to lg)
    }

    // Calculate the width of cards + gaps
    const firstCard = cards[0] as HTMLElement;
    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap = 24; // gap-6 = 24px
    const scrollAmount = (cardWidth + gap) * cardsToShow; // Scroll by the number of cards to show

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
  }, [testimonials, isLoading]);


  if (isLoading) {
    return (
      <section className="relative overflow-hidden py-20">
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
            <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="w-[calc(100%-3rem)] md:w-[calc(50%-0.75rem)] xl:w-[calc(33.333%-1rem)] shrink-0 animate-pulse rounded-3xl border border-border/60 bg-background p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-12 w-12 bg-muted rounded-full shrink-0" />
                    <div className="flex-1 space-y-2">
                      <div className="h-5 bg-muted rounded w-2/3" />
                      <div className="h-4 bg-muted rounded w-1/2" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded w-full" />
                    <div className="h-4 bg-muted rounded w-5/6" />
                    <div className="h-4 bg-muted rounded w-4/5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

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

        {testimonials.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">{t.homeSection.noTestimonials}</p>
          </div>
        ) : (
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={cn(
                "absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 p-2 shadow-lg transition-all hover:bg-background disabled:opacity-0 disabled:pointer-events-none",
              )}
              aria-label={t.homeSection.previousAriaLabel}
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>

            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={cn(
                "absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 p-2 shadow-lg transition-all hover:bg-background disabled:opacity-0 disabled:pointer-events-none",
              )}
              aria-label={t.homeSection.nextAriaLabel}
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>

            {/* Slider Container */}
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-4"
              style={{
                scrollSnapType: 'x mandatory',
                scrollPaddingLeft: '1rem',
                scrollPaddingRight: '1rem',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  name={testimonial.name}
                  role={testimonial.role || ""}
                  avatar={testimonial.image}
                  quote={testimonial.content}
                  style={{ scrollSnapAlign: 'start' }}
                />
              ))}
            </div>
          </div>
        )}

        <InfoCtaBox
          icon={Sparkles}
          text={
            <>
              {t.homeSection.infoBoxText}
            </>
          }
          buttonText={t.homeSection.exploreButton}
          buttonHref="/testimonials"
        />
      </div>
    </section>
  );
}
