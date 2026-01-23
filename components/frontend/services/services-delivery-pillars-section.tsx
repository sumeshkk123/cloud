import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import type { ComponentType } from "react";

type DeliveryPillar = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

interface ServicesDeliveryPillarsSectionProps {
  pillars: DeliveryPillar[];
}

export function ServicesDeliveryPillarsSection({ pillars }: ServicesDeliveryPillarsSectionProps) {
  return (
    <Section padding="lg" variant="secondary">
      <SectionTitle
        badge="Delivery"
        heading="Delivery pillars that keep programmes on track"
        description="Every engagement pairs strategic leadership with disciplined execution so you can ship confidently without surprises."
        maxWidth="3xl"
      />
      <div className="grid gap-6 md:grid-cols-3 mt-6">
        {pillars.map((pillar) => (
          <article
            key={pillar.title}
            className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <pillar.icon className="h-6 w-6" aria-hidden />
            </span>
            <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
            <p className="text-sm text-muted-foreground">{pillar.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
