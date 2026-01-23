import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const ctaButtonVariants = cva(
  "inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold shadow-md transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-primary",
        secondary:
          "border border-border/70 bg-background/80 text-foreground shadow-sm hover:border-primary hover:text-primary focus-visible:outline-primary",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface CtaButtonProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    VariantProps<typeof ctaButtonVariants> {
  href: string;
  children: React.ReactNode;
}

const CtaButton = React.forwardRef<HTMLAnchorElement, CtaButtonProps>(
  ({ className, variant, href, children, ...props }, ref) => {
    return (
      <Link
        href={href}
        ref={ref}
        className={cn(ctaButtonVariants({ variant }), className)}
        {...props}
      >
        {children}
      </Link>
    );
  }
);
CtaButton.displayName = "CtaButton";

export { CtaButton, ctaButtonVariants };
