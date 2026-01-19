import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

export type FeatureHighlight = {
  title: string;
  description: string;
  bullets?: string[];
  href?: string;
};

interface FeatureCardGridProps {
  items: FeatureHighlight[];
  columns?: string;
}

export function FeatureCardGrid({
  items,
  columns = "md:grid-cols-3"
}: FeatureCardGridProps) {
  return (
    <div className={`grid gap-6 ${columns}`}>
      {items.map((item) => (
        <article
          key={item.title}
          className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm"
        >
          <div>
            <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
          </div>
          {item.bullets ? (
            <ul className="space-y-2 text-sm text-muted-foreground">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          ) : null}
          {item.href ? (
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
            >
              Learn more
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          ) : null}
        </article>
      ))}
    </div>
  );
}
