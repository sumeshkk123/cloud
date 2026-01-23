import * as React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import { ReadMoreButton } from "@/components/ui/read-more-button";
import { Card, CardIcon } from "@/components/ui/card";

export interface PlanFeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    summary?: string;
    description?: string;
    highlights?: string[];
    planType?: string;
    readMoreHref?: string;
    variant?: "default" | "highlighted";
}

const PlanFeatureCard = React.forwardRef<HTMLDivElement, PlanFeatureCardProps>(
    (
        {
            className,
            icon: Icon,
            title,
            summary,
            description,
            highlights,
            planType,
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
                    "group p-6",
                    isHighlighted
                        ? "border-primary/30 bg-primary text-primary-foreground hover:bg-primary/95"
                        : "bg-gradient-to-br from-background via-background to-primary/5 transition-all duration-500",
                    className
                )}
                {...props}
            >
                <div className="flex h-full flex-col gap-4">
                    {/* Header with icon and title/summary */}
                    <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                            <CardIcon
                                icon={Icon}
                                className={cn(
                                    isHighlighted ? "text-primary-foreground" : "text-primary"
                                )}
                            />
                            <div>
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
                                {summary && (
                                    <Typography
                                        variant="small"
                                        className={cn(
                                            "mt-1",
                                            isHighlighted ? "text-primary-foreground/90" : "text-muted-foreground"
                                        )}
                                    >
                                        {summary}
                                    </Typography>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        {description && (
                            <Typography
                                variant="p"
                                className={cn(
                                    "!leading-7 tracking-tight !text-sm",
                                    isHighlighted ? "text-primary-foreground/90" : "text-muted-foreground"
                                )}
                            >
                                {description}
                            </Typography>
                        )}
                    </div>

                    {/* Highlights/Badges */}
                    {highlights && highlights.length > 0 && (
                        <div className="flex flex-wrap gap-2 my-2">
                            {highlights.map((highlight, index) => {
                                // Truncate long highlights to keep them short
                                const shortHighlight = highlight.length > 25 ? highlight.substring(0, 22) + '...' : highlight;
                                return (
                                    <span
                                        key={index}
                                        className={cn(
                                            "rounded-full border px-3 py-2 text-xs",
                                            isHighlighted
                                                ? "border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground"
                                                : "border-primary/20 bg-primary/10 text-muted-foreground"
                                        )}
                                    >
                                        {shortHighlight}
                                    </span>
                                );
                            })}
                        </div>
                    )}

                    {/* Footer */}
                    <div className="mt-auto flex items-center justify-between gap-4 border-t border-border/50 pt-4">
                        {planType && (
                            <Typography
                                variant="small"
                                className={cn(
                                    isHighlighted ? "text-primary-foreground/80" : "text-muted-foreground"
                                )}
                            >
                                Plan type: <span className={cn(
                                    "font-semibold",
                                    isHighlighted ? "text-primary-foreground" : "text-foreground"
                                )}>{planType}</span>
                            </Typography>
                        )}
                        <ReadMoreButton
                            href={readMoreHref}
                            variant={isHighlighted ? "highlighted" : "default"}
                        >
                            Explore details
                        </ReadMoreButton>
                    </div>
                </div>
            </Card>
        );
    }
);
PlanFeatureCard.displayName = "PlanFeatureCard";

export { PlanFeatureCard };