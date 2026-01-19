import { FeatureCardGrid, type FeatureHighlight } from "./feature-card-grid";

interface FeatureSectionProps {
  id: string;
  badge: string;
  heading: string;
  description: string;
  items: FeatureHighlight[];
  columns?: string;
}

export function FeatureSection({
  id,
  badge,
  heading,
  description,
  items,
  columns = "md:grid-cols-3"
}: FeatureSectionProps) {
  return (
    <section id={id} className="container space-y-8">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">{badge}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          {description}
        </p>
      </div>
      <FeatureCardGrid items={items} columns={columns} />
    </section>
  );
}
