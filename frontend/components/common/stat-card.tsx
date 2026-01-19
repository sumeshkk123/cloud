import * as React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import { ReadMoreButton } from "@/components/ui/read-more-button";

export interface StatCardProps extends React.HTMLAttributes<HTMLElement> {
    icon: React.ComponentType<{ className?: string }>;
    value?: string;
    label: string;
    description: string;
    highlight?: string | null;
    readMoreHref?: string;
    variant?: "default" | "highlighted";
}

const StatCard = React.forwardRef<HTMLElement, StatCardProps>(
    (
        {
            className,
            icon: Icon,
            value,
            label,
            description,
            highlight,
            readMoreHref = "#",
            variant = "default",
            ...props
        },
        ref
    ) => {
        const isHighlighted = variant === "highlighted";


        return (
            <article
                ref={ref as any}
                className={cn(
                    "group flex flex-col gap-4 rounded-3xl  p-8 text-left transition-all duration-300",
                    "hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl",
                    isHighlighted
                        ? "border-primary/30 bg-primary text-primary-foreground hover:bg-primary/95"
                        : "bg-gradient-to-br from-background via-background to-primary/5 transition-all duration-500",
                    className
                )}
                {...props}
            >
                {/* Icon - left aligned, narrow Remix Icon, thin stroke */}
                <Icon
                    className={cn(
                        "h-16 w-16 transition-all duration-300 [&>path]:stroke-[0.5] [&>path]:fill-none [&>path]:stroke-current",
                        "group-hover:scale-x-[-1]",
                        isHighlighted ? "text-primary-foreground" : "text-primary"
                    )}
                />

                {/* Value - large number, left aligned */}
                {value && (
                    <Typography
                        as="div"
                        variant="h4"
                        className={isHighlighted ? "text-primary-foreground" : "text-foreground"}
                    >
                        {value}
                    </Typography>
                )}

                {/* Title */}
                <Typography
                    as="h3"
                    variant="h5"
                    className={cn(
                        "font-semibold",
                        isHighlighted ? "text-primary-foreground" : "text-foreground"
                    )}
                >
                    {label}
                </Typography>

                {/* Description */}
                <Typography
                    variant="p"
                    className={cn(
                        "leading-6",
                        isHighlighted ? "text-primary-foreground/90" : ""
                    )}
                >
                    {description}
                </Typography>

                {/* Highlight text */}
                {highlight && (
                    <Typography
                        variant="small"
                        className={cn(
                            isHighlighted
                                ? "text-primary-foreground/80"
                                : "text-muted-foreground/80"
                        )}
                    >
                        {highlight}
                    </Typography>
                )}

                {/* Read More button */}
                <div className="mt-auto">
                    <ReadMoreButton
                        href={readMoreHref}
                        variant={isHighlighted ? "highlighted" : "default"}
                    />
                </div>
            </article>
        );
    }
);
StatCard.displayName = "StatCard";

export { StatCard };
