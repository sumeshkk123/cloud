import Link from "next/link";
import { Star, Quote, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SmartImage } from "@/components/ui/smart-image";

export interface TestimonialCardProps {
  name: string;
  role: string;
  company?: string;
  avatar?: string | null;
  quote: string;
  rating?: number;
  platform?: string;
  href?: string;
  variant?: "default" | "highlighted";
}

const TestimonialCard = ({
  name,
  role,
  company,
  avatar,
  quote,
  rating,
  platform,
  href,
  variant = "default",
  ...props
}: TestimonialCardProps & React.HTMLAttributes<HTMLElement>) => {
  const isHighlighted = variant === "highlighted";

  const renderStars = (ratingValue: number | undefined) => {
    const value = ratingValue ?? 4.8;
    const filled = Math.round(value);
    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${index < filled ? "text-yellow-400 fill-yellow-400" : "text-yellow-400/30"}`}
            fill={index < filled ? "currentColor" : "none"}
            strokeWidth={index < filled ? 0 : 1.5}
          />
        ))}
        <span className="ml-1 text-xs font-semibold text-muted-foreground">{value.toFixed(1)}</span>
      </div>
    );
  };

  // Check if this is in a carousel (has scrollSnapAlign) or grid layout
  const isCarousel = props.style?.scrollSnapAlign !== undefined;
  
  return (
    <article
      className={cn(
        "relative h-full overflow-hidden rounded-[32px] border border-border/40 bg-card/95 p-6 transition hover:border-primary/60 hover:shadow-[0_45px_110px_-65px_rgba(37,99,235,0.35)]",
        // For carousel: responsive widths to show different counts on different screens
        // Mobile: 1 card (full width minus padding and gaps)
        // Tablet: 2 cards (half width minus padding and gaps)
        // Desktop: 3 cards (third width minus padding and gaps)
        isCarousel 
          ? "shrink-0 w-[calc(100%-2rem)] sm:w-[calc((100%-2rem-1.5rem)/2)] lg:w-[calc((100%-2rem-3rem)/3)] min-w-[280px] sm:min-w-[300px] md:min-w-[320px]" 
          : "w-full",
        isHighlighted && "border-primary/60 bg-primary/5"
      )}
      style={props.style}
      {...props}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <SmartImage
            src={avatar}
            fallback="https://businessmlmsoftware.com/uploads/testimonial-1768210302477-jlxmvd1qle.webp"
            alt={name || "Testimonial"}
            width={56}
            height={56}
            className="h-14 w-14 rounded-2xl object-cover"
          />
          <div>
            <p className={cn(
              "text-sm font-semibold",
              isHighlighted ? "text-primary-foreground" : "text-foreground"
            )}>
              {name}
            </p>
            <p className={cn(
              "text-xs",
              isHighlighted ? "text-primary-foreground/80" : "text-muted-foreground"
            )}>
              {role}
              {company ? `, ${company}` : null}
            </p>
          </div>
        </div>
        <div className="text-right">
          {rating !== undefined && renderStars(rating)}
          {platform ? (
            href ? (
              <Link href={href} className={cn("inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80", rating !== undefined && "mt-1")}>
                {platform}
              </Link>
            ) : (
              <span className={cn("inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground", rating !== undefined && "mt-1")}>{platform}</span>
            )
          ) : null}
        </div>
      </div>
      <p className={cn(
        "mt-4 flex items-start gap-2 text-sm leading-6",
        isHighlighted ? "text-primary-foreground/90" : "text-muted-foreground"
      )}>
        <Quote className="mt-1 h-5 w-5 flex-none text-primary/60" />
        <span>{quote}</span>
      </p>
      {href ? (
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary transition hover:text-primary/80"
        >
          Read more <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      ) : null}
    </article>
  );
};

TestimonialCard.displayName = "TestimonialCard";

export { TestimonialCard };