import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ReadMoreButtonProps
    extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
    href: string;
    children?: React.ReactNode;
    variant?: "default" | "highlighted";
}

const ReadMoreButton = React.forwardRef<HTMLAnchorElement, ReadMoreButtonProps>(
    ({ className, href, children = "Read More", variant = "default", ...props }, ref) => {
        const isHighlighted = variant === "highlighted";

        return (
            <Link
                href={href}
                ref={ref}
                className={cn(
                    "read-more-button group relative inline-flex items-center gap-2 overflow-hidden text-sm font-medium",
                    isHighlighted
                        ? "text-primary-foreground hover:text-primary-foreground/80"
                        : "text-foreground hover:text-primary",
                    className
                )}
                {...props}
            >
                {/* Text container with sliding animation */}
                <span className="relative inline-block h-[1.5em] overflow-hidden">
                    {/* Current text - moves up on hover */}
                    <span className="read-more-text-current inline-block transition-all duration-700 ease-in-out font-semibold group-hover:-translate-y-full group-hover:opacity-0">
                        {children}
                    </span>
                    {/* New text - appears from below on hover */}
                    <span className="read-more-text-new absolute left-0 top-0 inline-block w-full translate-y-full opacity-0 transition-all duration-700 ease-in-out font-semibold group-hover:translate-y-0 group-hover:opacity-100">
                        {children}
                    </span>
                </span>

                {/* Icon with rotation */}
                <span
                    className={cn(
                        "read-more-icon inline-flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-600 group-hover:rotate-45",
                        isHighlighted
                            ? "bg-foreground dark:bg-black text-primary dark:text-white"
                            : "bg-foreground text-background"
                    )}
                >
                    <ArrowUpRight className="h-4 w-4" />
                </span>
            </Link>
        );
    }
);
ReadMoreButton.displayName = "ReadMoreButton";

export { ReadMoreButton };
