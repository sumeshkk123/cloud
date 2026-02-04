import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import PricingEstimator from "./pricing-estimator";

interface PricingEstimatorSectionProps {
  contactHref: string;
  demoHref: string;
}

export function PricingEstimatorSection({ contactHref, demoHref }: PricingEstimatorSectionProps) {
  return (
    <Section variant="default" padding="lg" id="pricing-builder">
      <div className="container space-y-12">
        <SectionTitle
          heading="Build your scenario, then share it with a pricing advisor"
          description="The estimator models licence, support, integrations, and accelerators in real time. Save scenarios, export summaries, and hand them directly to our pricing team for validation."
          maxWidth="3xl"
        />
        <PricingEstimator contactHref={contactHref} demoHref={demoHref} />
      </div>
    </Section>
  );
}
