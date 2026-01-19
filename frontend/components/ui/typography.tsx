import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva("", {
    variants: {
        variant: {
            h1: "text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl",
            h2: "text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl",
            h3: "text-xl font-semibold leading-tight tracking-tight sm:text-2xl lg:text-3xl",
            h4: "text-lg font-semibold leading-tight tracking-tight sm:text-xl lg:text-2xl",
            h5: "text-lg font-semibold leading-tight tracking-tight sm:text-lg xl:text-xl",
            h6: "text-base font-semibold leading-tight tracking-tight sm:text-lg lg:text-xl",
            p: "text-base leading-relaxed",
            lead: "text-lg leading-relaxed sm:text-xl",
            small: "text-sm leading-relaxed",
            muted: "text-sm text-muted-foreground",
        },
        textColor: {
            default: "text-foreground",
            muted: "text-muted-foreground",
            white: "text-white",
            primary: "text-primary",
        },
    },
    defaultVariants: {
        variant: "p",
        textColor: "default",
    },
});

export interface TypographyProps
    extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof typographyVariants> {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
    ({ className, variant, textColor, as, children, ...props }, ref) => {
        // Determine the element based on variant if 'as' is not provided
        const Component =
            as ||
            (variant?.startsWith("h")
                ? (`h${variant.slice(1)}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6")
                : variant === "lead" || variant === "small" || variant === "muted"
                    ? "p"
                    : "p");

        return React.createElement(
            Component,
            {
                ref: ref as any,
                className: cn(
                    typographyVariants({
                        variant: variant as any,
                        textColor: textColor as "default" | "muted" | "white" | "primary" | null | undefined
                    }),
                    className
                ),
                ...props,
            },
            children
        );
    }
);
Typography.displayName = "Typography";

export { Typography, typographyVariants };
