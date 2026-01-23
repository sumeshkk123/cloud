import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "group gap-4 relative overflow-hidden rounded-2xl bg-card transition-all duration-500",
            "border border-border/40",
            "hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2",
            className
        )}
        {...props}
    >
        <div className="absolute bottom-0 right-0 h-20 w-20 translate-x-1/2 translate-y-1/2 rounded-full bg-primary/5 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative z-10">{children}</div>
    </div>
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex flex-col space-y-1.5 p-6", className)}
        {...props}
    />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn(
            "text-2xl font-semibold leading-none tracking-tight",
            className
        )}
        {...props}
    />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
    />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex items-center p-6 pt-0", className)}
        {...props}
    />
));
CardFooter.displayName = "CardFooter";

const CardIcon = React.forwardRef<
    HTMLSpanElement,
    React.HTMLAttributes<HTMLSpanElement> & {
        icon: React.ComponentType<{ className?: string }>;
    }
>(({ className, icon: Icon, ...props }, ref) => (
    <div className="relative inline-flex">
        {/* <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" /> */}
        <span
            ref={ref}
            className={cn(
                "relative flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground",
                className
            )}
            {...props}
        >
            <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 group-hover:[transform:rotateY(180deg)]" />
        </span>
    </div>
));
CardIcon.displayName = "CardIcon";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardIcon };
