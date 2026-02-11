import * as React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import { ReadMoreButton } from "@/components/ui/read-more-button";
import { BulletList } from "@/components/ui/bullet-list";

export interface FeatureCardProps extends React.HTMLAttributes<HTMLElement> {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href: string;
  buttonText?: string;
  bullets?: string[];
}

const FeatureCard = React.forwardRef<HTMLElement, FeatureCardProps>(
  (
    {
      className,
      icon: Icon,
      title,
      description,
      href,
      buttonText = "Explore more",
      bullets,
      ...props
    },
    ref
  ) => {
    return (
      <article
        ref={ref as any}
        className={cn(
          "group relative flex gap-2 overflow-hidden rounded-3xl border-b border-primary/70 p-6 text-left  transition-all duration-300",
          "h-auto lg:h-full",
          "hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl hover:bg-background",
          "border-b-border/40 ",
          className
        )}
        {...props}
      >
        {/* Icon - Left aligned */}
        <div className="flex-shrink-0">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 group-hover:[transform:rotateY(180deg)]" />
          </div>
        </div>

        {/* Content - Right side */}
        <div className="flex flex-1 flex-col gap-2">
          {/* Title */}
          <Typography
            as="h3"
            variant="h5"
            className="font-semibold"
          >
            {title}
          </Typography>

          {/* Description */}
          <Typography variant="p" textColor="muted" className="text-sm leading-6">
            {description}
          </Typography>

          {/* Bullet List */}
          {bullets && bullets.length > 0 && (
            <div className="my-2">
              <BulletList items={bullets} variant="compact" />
            </div>
          )}

          {/* Read More button */}
          <div className="mt-auto pt-2">
            <ReadMoreButton href={href} variant="default">
              {buttonText}
            </ReadMoreButton>
          </div>
        </div>
      </article>
    );
  }
);
FeatureCard.displayName = "FeatureCard";

export { FeatureCard };
