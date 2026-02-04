import type { Locale } from "@/i18n-config";
import type { HomepageContent } from "@/types/homepage";
import type { DemoItemRecord } from "@/lib/api/demo-items";
import { SectionTitle } from "@/components/ui/section-title";
import { DemoCard } from "@/components/frontend/common/demo-card";
import { resolveIcon } from "./utils";
import { MlmSoftwareDemoList } from "./mlm-software-demo-list";
import { Section } from "@/components/ui/section";
import { listDemoItems } from "@/lib/api/demo-items";
import { Rocket } from "lucide-react";

const DEMO_SECTION_FALLBACK = {
  badgeLabel: "Demo experiences",
  heading: "Explore the platform on your terms",
  description:
    "Book a guided walkthrough, launch the sandbox, or download technical documentation. We'll tailor the experience to your teams.",
};

type MlmSoftwareDemoProps = {
  locale: Locale;
  data: HomepageContent["demoSection"] & Partial<HomepageContent["featureSection"]>;
  /** When provided, use these items instead of fetching (e.g. from home page). */
  demoItems?: DemoItemRecord[];
};

export async function MlmSoftwareDemo({ locale, data, demoItems: demoItemsProp }: MlmSoftwareDemoProps) {
  let demoItems: DemoItemRecord[] = [];
  if (demoItemsProp !== undefined) {
    demoItems = Array.isArray(demoItemsProp) ? demoItemsProp : [];
  } else {
    try {
      demoItems = await listDemoItems(locale);
      if (demoItems.length === 0 && locale !== "en") {
        demoItems = await listDemoItems("en");
      }
    } catch (err) {
      console.error("[MlmSoftwareDemo] listDemoItems failed:", err);
    }
  }

  const homePageDemos =
    demoItems.filter((item) => (item as { showOnHomePage?: boolean }).showOnHomePage === true);
  const demosToShow = (homePageDemos.length > 0 ? homePageDemos : demoItems.slice(0, 4)).slice(0, 4);

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
      {demoCards.length > 0 && (
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
      )}
      <MlmSoftwareDemoList locale={locale} data={{ ...data, ...sectionData }} />
    </Section>
  );
}
