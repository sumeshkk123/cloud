import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import PricingEstimator from "./pricing-estimator";

interface PricingEstimatorSectionProps {
  contactHref: string;
  demoHref: string;
}

export function PricingEstimatorSection({ contactHref, demoHref }: PricingEstimatorSectionProps) {
  return (
    <Section variant="gradient" padding="xl" id="pricing-builder">
      <div className="space-y-14 container">
        <SectionTitle
          badge="Pricing builder"
          heading="Build your scenario, then share it with a pricing advisor"
          description="The estimator models licence, support, integrations, and accelerators in real time. Save scenarios, export summaries, and hand them directly to our pricing team for validation."
          maxWidth="3xl"
        />
        <div className="relative overflow-hidden">
          <PricingEstimator contactHref={contactHref} demoHref={demoHref} />
        </div>
      </div>
    </Section>
  );
}
