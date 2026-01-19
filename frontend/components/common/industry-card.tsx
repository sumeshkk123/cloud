import * as React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import { ReadMoreButton } from "@/components/ui/read-more-button";

export interface IndustryCardProps extends React.HTMLAttributes<HTMLElement> {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href: string;
}

const IndustryCard = React.forwardRef<HTMLElement, IndustryCardProps>(
  (
    {
      className,
      icon: Icon,
      title,
      description,
      href,
      ...props
    },
    ref
  ) => {
    return (
      <article
        ref={ref as any}
        className={cn(
          "group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border p-8 text-left shadow-sm transition-all duration-300",
          "hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl",
          "border-border/40 bg-card/95",
          className
        )}
        {...props}
      >
        {/* Icon and Title in single row */}
        <div className="flex items-center gap-3">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300">
            <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-x-[-1]" />
          </div>
          <Typography
            as="h3"
            variant="h5"
            className="font-semibold text-sm flex-1"
          >
            {title}
          </Typography>
        </div>

        {/* Description */}
        <Typography variant="p" textColor="muted" className="flex-1  text-sm leading-6">
          {description}
        </Typography>

        {/* Read More button */}
        <div className="mt-auto">
          <ReadMoreButton href={href} variant="default">
            Explore more
          </ReadMoreButton>
        </div>
      </article>
    );
  }
);
IndustryCard.displayName = "IndustryCard";

export { IndustryCard };
