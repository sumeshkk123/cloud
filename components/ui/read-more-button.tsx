import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ReadMoreButtonProps
    extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
    href?: string;
    children?: React.ReactNode;
    variant?: "default" | "highlighted" | "primary" | "outline";
}

const ReadMoreButton = React.forwardRef<HTMLAnchorElement | HTMLButtonElement, ReadMoreButtonProps>(
    ({ className, href, children = "Read More", variant = "default", onClick, ...props }, ref) => {
        const isHighlighted = variant === "highlighted";
        const isPrimary = variant === "primary";
        const isOutline = variant === "outline";
        const baseClass = cn(
            "read-more-button group/btn relative inline-flex items-center gap-2 overflow-hidden text-sm font-medium transition-colors",
            isPrimary
                ? "bg-primary text-primary-foreground shadow hover:!text-primary"
                : isOutline
                    ? "border-2 border-primary bg-transparent font-semibold text-primary shadow hover:bg-primary hover:!text-primary-foreground"
                    : isHighlighted
                        ? "text-primary-foreground hover:text-primary-foreground/80"
                        : "text-foreground hover:text-primary",
            className
        );
        const content = (
            <>
                <span className="relative inline-block h-[1.5em] overflow-hidden">
                    <span className="read-more-text-current inline-block transition-all duration-700 ease-in-out font-semibold group-hover/btn:-translate-y-full group-hover/btn:opacity-0">
                        {children}
                    </span>
                    <span className="read-more-text-new absolute left-0 top-0 inline-block w-full translate-y-full opacity-0 transition-all duration-700 ease-in-out font-semibold group-hover/btn:translate-y-0 group-hover/btn:opacity-100">
                        {children}
                    </span>
                </span>
                <span
                    className={cn(
                        "read-more-icon inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover/btn:rotate-45 [&_svg]:transition-colors",
                        isPrimary
                            ? "bg-primary-foreground/20 text-white group-hover/btn:bg-white group-hover/btn:text-primary"
                            : isOutline
                                ? "bg-primary/20 text-primary group-hover/btn:bg-white group-hover/btn:text-primary"
                                : isHighlighted
                                    ? "bg-foreground dark:bg-black text-primary dark:text-white group-hover/btn:bg-primary group-hover/btn:text-primary"
                                    : "bg-foreground text-background"
                    )}
                >
                    <ArrowUpRight className="h-4 w-4" />
                </span>
            </>
        );

        if (href != null && href !== "") {
            return (
                <Link href={href} ref={ref as React.Ref<HTMLAnchorElement>} className={baseClass} {...props}>
                    {content}
                </Link>
            );
        }

        return (
            <button
                type="button"
                ref={ref as React.Ref<HTMLButtonElement>}
                className={baseClass}
                onClick={onClick as React.MouseEventHandler<HTMLButtonElement> | undefined}
                {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
            >
                {content}
            </button>
        );
    }
);
ReadMoreButton.displayName = "ReadMoreButton";

export { ReadMoreButton };
