import { GradientCtaSection } from "@/components/frontend/common/gradient-cta-section";

interface IndustriesCtaSectionProps {
  contactHref: string;
  storiesHref: string;
}

export function IndustriesCtaSection({ contactHref, storiesHref }: IndustriesCtaSectionProps) {
  return (
    <GradientCtaSection
      title="Ready to craft your next industry playbook?"
      description="Assemble your cross-functional team for a strategy workshop that captures launch goals, compliance guardrails, and the customer experience you want to deliver. We'll translate that into an executable roadmap with measurable checkpoints."
      primaryButton={{ text: "Schedule my session", href: contactHref }}
      secondaryButton={{ text: "Review customer stories", href: storiesHref }}
      trustIndicators={["Quick implementation", "Expert consultation", "Proven results"]}
    />
  );
}
