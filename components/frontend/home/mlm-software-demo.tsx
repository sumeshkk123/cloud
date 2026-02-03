import type { Locale } from "@/i18n-config";
import type { HomepageContent } from "@/types/homepage";
import { SectionTitle } from "@/components/ui/section-title";
import { DemoCard } from "@/components/frontend/common/demo-card";
import { resolveIcon } from "./utils";
import { MlmSoftwareDemoList } from "./mlm-software-demo-list";
import { Section } from "@/components/ui/section";
import { listDemoItems } from "@/lib/api/demo-items";
import { Rocket } from "lucide-react";

export async function MlmSoftwareDemo({ locale, data }: { locale: Locale; data: HomepageContent["demoSection"] & Partial<HomepageContent["featureSection"]> }) {
  // Fetch demo items from database
  const demoItems = await listDemoItems(locale);

  // Filter to show only items with showOnHomePage = true when the field exists; otherwise show first 4
  const homePageDemos =
    demoItems.filter((item) => (item as { showOnHomePage?: boolean }).showOnHomePage === true);
  const demosToShow = (homePageDemos.length > 0 ? homePageDemos : demoItems.slice(0, 4)).slice(0, 4);

  // Transform demo items to card format
  // Limit adminDemoFeatures to 1
  const demoCards = demosToShow.map((item) => {
    const Icon = resolveIcon(item.icon, Rocket);
    const adminFeatures = Array.isArray(item.adminDemoFeatures)
      ? item.adminDemoFeatures.slice(0, 1).map(String)
      : item.adminDemoFeatures
        ? [String(item.adminDemoFeatures)].slice(0, 1)
        : [];

    return {
      icon: Icon,
      title: item.title ?? "",
      description: item.adminDemoTitle || "",
      points: adminFeatures,
    };
  });

  return (
    <>
      {/* Demo Cards Section */}
      {demoCards.length > 0 && (
        <Section variant="gradient" padding="lg" containerClassName="space-y-12 !pb-4">
          <SectionTitle
            badge={data?.badgeLabel ?? (data as any)?.badge}
            heading={data?.heading ?? (data as any)?.heading}
            description={data?.description ?? (data as any)?.description}
            maxWidth="5xl"
          />
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {demoCards.map((card, index) => (
              <DemoCard
                key={`${card.title}-${index}`}
                className="h-full"
                icon={card.icon}
                title={card.title}
                description={card.description}
                points={card.points}
              />
            ))}
          </div>
          <MlmSoftwareDemoList locale={locale} data={data} />
        </Section>
      )}
    </>
  );
}
