import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const viewAllButtonVariants = cva(
  "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-md transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
  {
    variants: {
      variant: {
        default:
          "text-primary hover:text-primary/80",
        centered:
          "text-primary hover:text-primary/80",
        primary:
          "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-primary",
        secondary:
          "border border-border/70 bg-background/80 text-foreground shadow-sm hover:border-primary hover:text-primary focus-visible:outline-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ViewAllButtonProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    VariantProps<typeof viewAllButtonVariants> {
  href: string;
  children?: React.ReactNode;
  center?: boolean;
}

const ViewAllButton = React.forwardRef<HTMLAnchorElement, ViewAllButtonProps>(
  ({ className, href, children = "Explore all", variant = "default", center, ...props }, ref) => {
    return (
      <div className={cn(center && "text-center")}>
        <Link
          href={href}
          ref={ref}
          className={cn(viewAllButtonVariants({ variant }), className)}
          {...props}
        >
          {children}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    );
  }
);
ViewAllButton.displayName = "ViewAllButton";

export { ViewAllButton, viewAllButtonVariants };
