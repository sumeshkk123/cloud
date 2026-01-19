import * as React from "react";
import { cn } from "@/lib/utils";

export interface BulletListProps extends React.HTMLAttributes<HTMLUListElement> {
    items: string[];
    variant?: "default" | "compact";
}

const BulletList = React.forwardRef<HTMLUListElement, BulletListProps>(
    ({ className, items, variant = "default", ...props }, ref) => {
        return (
            <ul
                ref={ref}
                className={cn(
                    "space-y-3 text-sm text-muted-foreground",
                    variant === "compact" && "space-y-2",
                    className
                )}
                {...props}
            >
                {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <svg
                                className="h-3.5 w-3.5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                aria-hidden="true"
                            >
                                <path d="M5 12l5 5L20 7" />
                            </svg>
                        </span>
                        <span className="text-foreground/80">{item}</span>
                    </li>
                ))}
            </ul>
        );
    }
);
BulletList.displayName = "BulletList";

export { BulletList };
