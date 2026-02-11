import { Section } from "@/components/ui/section";
import { CountriesByContinentAccordion } from "@/components/frontend/countries-availability/countries-by-continent-accordion";
import type { PaymentGatewaysListContent } from "@/lib/payment-gateways-list-content";

export interface PaymentGatewaysCountriesSectionProps {
  basePath: string;
  content: PaymentGatewaysListContent;
}

export function PaymentGatewaysCountriesSection({ basePath, content }: PaymentGatewaysCountriesSectionProps) {
  return (
    <Section padding="lg" variant="gradient">
      <div className="container">
        <CountriesByContinentAccordion
          basePath={basePath}
          sectionTitle={content.countriesSection.sectionTitle}
          sectionDescription={content.countriesSection.sectionDescription}
          badge={content.countriesSection.badge}
          countriesCountLabel={content.countriesSection.countriesCountLabel}
          continentNames={content.continentNames}
        />
      </div>
    </Section>
  );
}
