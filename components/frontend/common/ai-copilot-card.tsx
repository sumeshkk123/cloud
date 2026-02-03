import * as React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import { Card, CardIcon } from "@/components/ui/card";

export interface AiCopilotCardProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    variant?: "default" | "highlighted";
}

const AiCopilotCard = React.forwardRef<HTMLDivElement, AiCopilotCardProps>(
    (
        {
            className,
            icon: Icon,
            title,
            description,
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
                        ? "border-primary/30 bg-primary text-primary-foreground "
                        : "bg-gradient-to-br from-background via-background to-primary/5 transition-all duration-500",
                    className
                )}
                {...props}
            >
                <div className="flex  gap-6 items-center">
                    <CardIcon
                        icon={Icon}
                        className={cn(
                            isHighlighted ? "text-primary-foreground" : "text-primary"
                        )}
                    />
                    <div className="space-y-2">
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

                        <Typography
                            variant="p"
                            className={cn(
                                "leading-6 !text-sm",
                                isHighlighted ? "text-primary-foreground/90" : "text-muted-foreground"
                            )}
                        >
                            {description}
                        </Typography>
                    </div>
                </div>
            </Card>
        );
    }
);
AiCopilotCard.displayName = "AiCopilotCard";

export { AiCopilotCard };