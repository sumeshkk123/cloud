import Link from "next/link";

type FeatureSectionNavItem = {
  label: string;
  href: string;
};

interface FeaturesSectionNavProps {
  items: FeatureSectionNavItem[];
}

export function FeaturesSectionNav({ items }: FeaturesSectionNavProps) {
  return (
    <section className="container" aria-label="Feature section navigation">
      <div className="flex flex-wrap justify-center gap-3 rounded-full border border-border/60 bg-background/70 px-6 py-4 shadow-sm">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="inline-flex items-center rounded-full border border-border/50 px-3 py-2 text-sm font-semibold text-muted-foreground transition hover:border-primary/40 hover:text-primary"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
