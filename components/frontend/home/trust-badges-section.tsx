import Image from "next/image";
import Link from "next/link";
import type { HomepageContent } from "@/types/homepage";
import { toAbsoluteUrl } from "@/lib/media";
import { Star, Settings } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { SmartImage } from "@/components/ui/smart-image";

export function TrustBadgesSection({ data }: { data: HomepageContent["trustBadges"] }) {
  const items = data?.items ?? [];
  const renderBadgeStars = (rating: number) => (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={cn(
            "h-3 w-3 transition-colors",
            index < Math.round(rating) ? "text-primary-foreground fill-primary-foreground" : "text-primary-foreground/30"
          )}
          strokeWidth={index < Math.round(rating) ? 0 : 1.5}
        />
      ))}
      <span className="ml-1.5 text-xs font-semibold text-primary-foreground">{rating.toFixed(1)}</span>
    </div>
  );

  return (
    <section className="relative overflow-hidden pt-24 pb-24">
      <div className="absolute inset-0 -z-20" aria-hidden />
      <div className="container">
        {/* Main panel with teal background */}
        <div className="relative rounded-3xl bg-primary p-8 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {items.map((badge) => (
              <Link
                key={badge.name}
                href={badge.href}
                className="group relative flex flex-col gap-4 rounded-2xl border border-primary-foreground/20 bg-primary/80 p-6 transition-all duration-300 hover:bg-primary-foreground/10 hover:border-primary-foreground/30"
              >
                {/* Logo */}
                <div className="flex justify-center">
                  <div className="relative h-12 w-auto">
                    <SmartImage
                      src={badge.logo}
                      alt={badge.name}
                      width={160}
                      height={60}
                      className="h-12 w-auto object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Rating */}
                {badge.rating ? (
                  <div className="flex justify-center">
                    {renderBadgeStars(badge.rating)}
                  </div>
                ) : null}

                {/* Quote */}
                <Typography
                  variant="small"
                  className="text-center text-primary-foreground/90 leading-relaxed"
                >
                  {badge.quote}
                </Typography>
              </Link>
            ))}
          </div>

          {/* Decorative sidebar with gear icons */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-foreground/10 rounded-r-3xl flex flex-col items-center justify-center gap-3 py-8 opacity-50">
            {Array.from({ length: 8 }).map((_, index) => (
              <Settings
                key={index}
                className="h-4 w-4 text-primary-foreground/30 rotate-90"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
