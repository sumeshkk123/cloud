import type { Locale } from "@/i18n-config";
import type { HomepageContent } from "@/types/homepage";
import { SectionTitle } from "@/components/ui/section-title";
import { DemoCard } from "@/components/common/demo-card";
import { getRemixIcon } from "./utils/remix-icon-resolver";
import { MlmSoftwareDemoList } from "./mlm-software-demo-list";

export function MlmSoftwareDemo({ locale, data }: { locale: Locale; data: HomepageContent["demoSection"] & Partial<HomepageContent["featureSection"]> }) {
  // Feature section data (for cards)
  const featureCards = (data as any)?.cards ?? [];

  return (
    <>
      {/* Feature Cards Section */}
      {featureCards.length > 0 && (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-900 py-16">
          <div className="absolute inset-0 -z-20" aria-hidden />
          <div className="container space-y-12">
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
          </div>
          <MlmSoftwareDemoList locale={locale} data={data} />
        </section>
      )}


    </>
  );
}
