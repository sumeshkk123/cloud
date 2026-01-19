import Link from "next/link";

import type { SupportedLocale } from "@/config/site";
import type { ProductCardSummary } from "@/types/content";
import { buildLocalizedPath } from "@/lib/locale-links";
import { Button } from "@/components/ui/button";

type ProductCardProps = {
  locale: SupportedLocale;
  product: ProductCardSummary;
  ctaLabel: string;
  badge: string;
};

export function ProductCard({ locale, product, ctaLabel, badge }: ProductCardProps) {
  return (
    <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/60 bg-card/80 p-8 shadow-[0_25px_60px_rgba(15,23,42,0.08)] transition duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[0_35px_90px_rgba(56,189,248,0.22)] dark:bg-card/70">
      <span
        className="absolute inset-x-0 top-0 h-1 opacity-0 transition group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(90deg, rgba(56,189,248,0.7) 0%, rgba(129,140,248,0.7) 100%)"
        }}
      />
      <div className="space-y-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary">
          {product.name}
        </span>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold leading-tight text-foreground">
            {product.tagline}
          </h3>
          <p className="text-sm text-muted-foreground">{product.description}</p>
        </div>
        <ul className="space-y-3 text-sm">
          {product.highlights.slice(0, 2).map((highlight) => (
            <li
              key={highlight.title}
              className="flex gap-2 rounded-2xl bg-primary/5 p-3 text-muted-foreground transition group-hover:bg-primary/10"
            >
              <span
                className="mt-2 inline-flex h-2 w-2 flex-none rounded-full bg-primary/80"
                aria-hidden
              />
              <span>
                <span className="font-semibold text-foreground/90">
                  {highlight.title}
                </span>
                <span className="text-muted-foreground"> — {highlight.description}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10 flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {badge}
        </span>
        <Button
          asChild
          variant="outline"
          className="border-primary/30 bg-card text-primary transition group-hover:border-primary group-hover:bg-primary/10"
        >
          <Link href={buildLocalizedPath(`/products/${product.slug}`, locale)}>{ctaLabel}</Link>
        </Button>
      </div>
    </article>
  );
}
