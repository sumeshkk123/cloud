import type { Locale } from "@/i18n-config";
import type { HomepageContent } from "@/types/homepage";
import { SectionTitle } from "@/components/ui/section-title";
import { DemoCard } from "@/components/frontend/common/demo-card";
import { getRemixIcon } from "./utils/remix-icon-resolver";
import { MlmSoftwareDemoList } from "./mlm-software-demo-list";
import { Section } from "@/components/ui/section";

export function MlmSoftwareDemo({ locale, data }: { locale: Locale; data: HomepageContent["demoSection"] & Partial<HomepageContent["featureSection"]> }) {
  // Feature section data (for cards)
  const featureCards = (data as any)?.cards ?? [];

  return (
    <>
      {/* Feature Cards Section */}
      {featureCards.length > 0 && (
        <Section variant="gradient" padding="lg" containerClassName="space-y-12 !pb-4">
          <SectionTitle
            badge={(data as any)?.badge}
            heading={(data as any)?.heading}
            description={(data as any)?.description}
            maxWidth="5xl"
          />
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((card: any) => {
              const Icon = getRemixIcon(card.icon);
              return (
                <DemoCard
                  key={card.title}
                  className="h-full"
                  icon={Icon}
                  title={card.title}
                  points={card.points}
                  readMoreHref="/free-mlm-software-demo/"
                />
              );
            })}
          </div>
          <MlmSoftwareDemoList locale={locale} data={data} />

        </Section>
      )}


    </>
  );
}
