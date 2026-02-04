import type { Locale } from "@/i18n-config";
import type { HomepageContent } from "@/types/homepage";
import { SectionTitle } from "@/components/ui/section-title";
import { MlmSoftwareDemoList } from "./mlm-software-demo-list";
import { MlmSoftwareDemoCards } from "./mlm-software-demo-cards";
import { Section } from "@/components/ui/section";

const DEMO_SECTION_FALLBACK = {
  badgeLabel: "Demo experiences",
  heading: "Explore the platform on your terms",
  description:
    "Book a guided walkthrough, launch the sandbox, or download technical documentation. We'll tailor the experience to your teams.",
};

type MlmSoftwareDemoProps = {
  locale: Locale;
  data: HomepageContent["demoSection"] & Partial<HomepageContent["featureSection"]>;
};

export function MlmSoftwareDemo({ locale, data }: MlmSoftwareDemoProps) {
  const sectionData = {
    badgeLabel: data?.badgeLabel ?? (data as any)?.badge ?? DEMO_SECTION_FALLBACK.badgeLabel,
    heading: data?.heading ?? (data as any)?.heading ?? DEMO_SECTION_FALLBACK.heading,
    description: data?.description ?? (data as any)?.description ?? DEMO_SECTION_FALLBACK.description,
  };

  return (
    <Section variant="gradient" padding="lg" containerClassName="space-y-12 !pb-4">
      <SectionTitle
        badge={sectionData.badgeLabel}
        heading={sectionData.heading}
        description={sectionData.description}
        maxWidth="5xl"
      />
      <MlmSoftwareDemoCards locale={locale} />
      <MlmSoftwareDemoList locale={locale} data={{ ...data, ...sectionData }} />
    </Section>
  );
}
