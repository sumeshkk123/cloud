import * as React from "react";
import { cn } from "@/lib/utils";
import * as RemixIcon from "@remixicon/react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "outline" | "secondary";
  icon?: React.ComponentType<{ className?: string }>;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", children, icon: Icon = RemixIcon.RiCloudFill, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-2 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] transition-all",
          {
            "text-primary": variant === "default",
            "text-foreground": variant === "outline",
            "text-primary/80": variant === "secondary",
          },
          className
        )}
        {...props}
      >
        <Icon
          className={cn(
            "h-3.5 w-3.5 transition-all",
            {
              "text-primary": variant === "default",
              "text-foreground": variant === "outline",
              "text-primary/80": variant === "secondary",
            }
          )}
        />
        <span>{children}</span>
      </span>
    );
  }
);
Badge.displayName = "Badge";

export { Badge };
