import Image from "next/image";
import Link from "next/link";
import type { HomepageContent } from "@/types/homepage";
import { Typography } from "@/components/ui/typography";
import { StatCard } from "@/components/common/stat-card";
import { SectionTitle } from "@/components/ui/section-title";
import { getRemixIcon } from "./utils/remix-icon-resolver";
import { toAbsoluteUrl } from "@/lib/media";
import { SmartImage } from "@/components/ui/smart-image";
import { Star, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

export function MomentumStatsSection({
  data,
  trustBadges
}: {
  data: HomepageContent["momentumStats"];
  trustBadges?: HomepageContent["trustBadges"];
}) {
  const stats = data?.stats ?? [];
  const trustItems = trustBadges?.items ?? [];

  const renderBadgeStars = (rating: number) => (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={cn(
            "h-3 w-3 transition-colors",
            index < Math.round(rating)
              ? "text-yellow-400 fill-yellow-400 dark:text-yellow-500 dark:fill-yellow-500"
              : "text-yellow-400/30 fill-yellow-400/20 dark:text-yellow-500/30 dark:fill-yellow-500/20"
          )}
          strokeWidth={index < Math.round(rating) ? 0 : 1.5}
        />
      ))}
      <span className="ml-1.5 text-xs font-semibold text-foreground">{rating.toFixed(1)}</span>
    </div>
  );

  return (
    <section className="relative overflow-hidden pt-24 pb-24">
      <div className="absolute inset-0 -z-20" aria-hidden />
      <div className="container space-y-6">
        <SectionTitle
          badge={data?.badgeLabel}
          heading={data?.heading}
          description={data?.description}
        />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 pt-4">
          {stats.map((stat, index) => {
            const Icon = getRemixIcon(stat.icon);
            // Make the second card (index 1) have a primary background like the teal card in screenshot
            const isHighlighted = index === 1;

            return (
              <StatCard
                key={stat.label}
                icon={Icon}
                value={stat.value}
                label={stat.label}
                description={stat.description}
                highlight={stat.highlight}
                readMoreHref="#"
                variant={isHighlighted ? "highlighted" : "default"}
              />
            );
          })}
        </div>

        {/* Analyst recognition section - below the stats cards */}
        {trustItems.length > 0 && (
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {trustItems.map((badge) => (
                <Link
                  key={badge.name}
                  href={badge.href}
                  className="group relative flex flex-col gap-4 rounded-2xl bg-primary/10 dark:bg-gray-900 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-primary/15 dark:hover:bg-primary/25"
                >
                  {/* Logo */}
                  <div className="flex justify-center">
                    <div className="relative h-12 w-auto">
                      <SmartImage
                        src={badge.logo}
                        alt={badge.name}
                        width={160}
                        height={60}
                        className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 dark:brightness-0 dark:invert"
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
                    className="text-center text-foreground leading-relaxed"
                  >
                    {badge.quote}
                  </Typography>
                </Link>
              ))}
            </div>


          </div>
        )}
      </div>
    </section>
  );
}
