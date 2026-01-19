import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  badge?: string | null;
  heading?: string | React.ReactNode | null;
  description?: string | null;
  centered?: boolean;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full";
  headingAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  headingClassName?: string;
}

const SectionTitle = React.forwardRef<HTMLDivElement, SectionTitleProps>(
  ({ className, badge, heading, description, centered = true, maxWidth = "5xl", headingAs = "h2", headingClassName, ...props }, ref) => {
    const maxWidthClass = {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      full: "max-w-full",
    }[maxWidth];

    const isHeadingString = typeof heading === "string";

    return (
      <div
        ref={ref}
        className={cn(
          "space-y-4",
          centered && "text-center",
          centered && maxWidthClass && `mx-auto ${maxWidthClass}`,
          className
        )}
        {...props}
      >
        {badge ? (
          <Badge variant="default">
            {badge}
          </Badge>
        ) : null}
        {heading ? (
          isHeadingString ? (
            <Typography as={headingAs} variant={headingAs === "h1" ? "h1" : "h2"} className={cn("capitalize", headingClassName)}>
              {heading}
            </Typography>
          ) : (
            <Typography as={headingAs} variant={headingAs === "h1" ? "h1" : "h2"} className={cn(headingClassName)}>
              {heading}
            </Typography>
          )
        ) : null}
        {description ? (
          <Typography
            variant="p"
            className={cn(
              "text-base leading-7 text-muted-foreground",
              centered && "mx-auto max-w-3xl"
            )}
          >
            {description}
          </Typography>
        ) : null}
      </div>
    );
  }
);
SectionTitle.displayName = "SectionTitle";

export { SectionTitle };
