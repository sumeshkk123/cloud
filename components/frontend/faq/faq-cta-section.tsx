import { GradientCtaSection } from "@/components/frontend/common/gradient-cta-section";

interface FaqCtaSectionProps {
  contactHref: string;
  resourcesHref: string;
}

export function FaqCtaSection({ contactHref, resourcesHref }: FaqCtaSectionProps) {
  return (
    <GradientCtaSection
      title="Still have questions?"
      description="Our specialists can walk through your roadmap, integrations, and change management plans in detail."
      primaryButton={{ text: "Schedule a Q&A session", href: contactHref }}
      primaryButtonOpensDemoModal={true}
      secondaryButton={{ text: "Browse the knowledge base", href: resourcesHref }}
      trustIndicators={["200+ FAQs Answered", "< 24h Response Time", "Expert Support Team"]}
    />
  );
}
