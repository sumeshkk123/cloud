import * as React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import { ReadMoreButton } from "@/components/ui/read-more-button";
import { Card, CardIcon } from "@/components/ui/card";

export interface IntegrationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  readMoreHref?: string;
  variant?: "default" | "highlighted";
}

const IntegrationCard = React.forwardRef<HTMLDivElement, IntegrationCardProps>(
  (
    {
      className,
      icon: Icon,
      title,
      description,
      readMoreHref = "#",
      variant = "default",
      ...props
    },
    ref
  ) => {
    const isHighlighted = variant === "highlighted";

    return (
      <Card
        ref={ref}
        className={cn(
          "group flex flex-col p-6 border-r border-b border-border/50 bg-card rounded-2xl backdrop-blur dark:bg-card/60",
          isHighlighted
            ? "border-primary/30 bg-primary/10"
            : "",
          className
        )}
        {...props}
      >
        <CardIcon
          icon={Icon}
          className={cn(
            isHighlighted ? "text-primary-foreground" : "text-primary"
          )}
        />

        <Typography
          variant="h5"
          className={cn(
            "mt-3 text-sm font-semibold",
            isHighlighted ? "text-primary-foreground" : "text-foreground"
          )}
        >
          {title}
        </Typography>

        <Typography
          variant="p"
          className={cn(
            "mt-2 text-sm",
            isHighlighted ? "text-primary-foreground/90" : "text-muted-foreground"
          )}
        >
          {description}
        </Typography>

        <div className="mt-4">
          <ReadMoreButton
            href={readMoreHref}
            variant={isHighlighted ? "highlighted" : "default"}
          >
            Explore more
          </ReadMoreButton>
        </div>
      </Card>
    );
  }
);
IntegrationCard.displayName = "IntegrationCard";

export { IntegrationCard };
