import type { ComponentType } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModulePrimaryCardProps {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  bullets: string[];
  className?: string;
}

export function ModulePrimaryCard({
  icon: Icon,
  title,
  description,
  bullets,
  className,
}: ModulePrimaryCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm",
        className
      )}
    >
      <div className="flex flex-col gap-3">
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon className="h-7 w-7" aria-hidden />
        </span>
        <div>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2">
            <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
