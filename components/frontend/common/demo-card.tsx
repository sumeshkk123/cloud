import * as React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import { ReadMoreButton } from "@/components/ui/read-more-button";
import { Card, CardIcon } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export interface DemoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  points?: string[];
  readMoreHref?: string;
  variant?: "default" | "highlighted";
}

const DemoCard = React.forwardRef<HTMLDivElement, DemoCardProps>(
  (
    {
      className,
      icon: Icon,
      title,
      points,
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

          {points && points.length > 0 && (
            <ul className="mt-2 space-y-2">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
                    aria-hidden
                  />
                  <Typography
                    variant="small"
                    className={cn(
                      "text-muted-foreground",
                      isHighlighted && "text-primary-foreground/90"
                    )}
                  >
                    {point}
                  </Typography>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-auto">
            <ReadMoreButton
              href={readMoreHref}
              variant={isHighlighted ? "highlighted" : "default"}
            >
              Explore more
            </ReadMoreButton>
          </div>
        </div>
      </Card>
    );
  }
);
DemoCard.displayName = "DemoCard";

export { DemoCard };