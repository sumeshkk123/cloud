import * as React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";

export interface ClientMetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  description: string;
  variant?: "default" | "highlighted";
}

const ClientMetricCard = React.forwardRef<HTMLDivElement, ClientMetricCardProps>(
  (
    {
      className,
      value,
      label,
      description,
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
          "p-6",
          isHighlighted
            ? "border-primary/30 bg-primary text-primary-foreground hover:bg-primary/95"
            : "bg-gradient-to-br from-background via-background to-primary/5 transition-all duration-500",
          className
        )}
        {...props}
      >
        <Typography
          variant="h4"
          className={cn(
            "font-semibold",
            isHighlighted ? "text-primary-foreground" : "text-primary"
          )}
        >
          {value}
        </Typography>

        <Typography
          variant="h5"
          className={cn(
            "mt-2 font-semibold",
            isHighlighted ? "text-primary-foreground" : "text-foreground"
          )}
        >
          {label}
        </Typography>

        <Typography
          variant="p"
          className={cn(
            "mt-1 !text-sm leading-6",
            isHighlighted ? "text-primary-foreground/90" : "text-muted-foreground"
          )}
        >
          {description}
        </Typography>
      </Card>
    );
  }
);
ClientMetricCard.displayName = "ClientMetricCard";

export { ClientMetricCard };