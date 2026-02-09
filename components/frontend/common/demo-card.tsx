import * as React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import { Card, CardIcon } from "@/components/ui/card";
import { BulletList } from "@/components/ui/bullet-list";

export interface DemoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description?: string;
  points?: string[];
  variant?: "default" | "highlighted";
}

const DemoCard = React.forwardRef<HTMLDivElement, DemoCardProps>(
  (
    {
      className,
      icon: Icon,
      title,
      description,
      points,
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
          "group p-8",
          isHighlighted
            ? "border-primary/30 bg-primary text-primary-foreground hover:bg-primary/95"
            : "bg-gradient-to-br from-background via-background to-primary/5 transition-all duration-500",
          className
        )}
        {...props}
      >
        <div className="flex h-full flex-col gap-4">
          <CardIcon
            icon={Icon}
            className={cn(
              isHighlighted ? "text-primary-foreground" : "text-primary"
            )}
          />

          <Typography
            as="h3"
            variant="h5"
            className={cn(
              "font-semibold",
              isHighlighted ? "text-primary-foreground" : "text-foreground"
            )}
          >
            {title}
          </Typography>

          {description && (
            <Typography
              as="p"
              variant="small"
              textColor="muted"
              className="leading-relaxed"
            >
              {description}
            </Typography>
          )}

          {points && points.length > 0 && (
            <BulletList
              items={points}
              className={cn(
                "mt-2 space-y-2",
                isHighlighted && "[&_li_span:last-child]:!text-primary-foreground/90"
              )}
            />
          )}
        </div>
      </Card>
    );
  }
);
DemoCard.displayName = "DemoCard";

export { DemoCard };