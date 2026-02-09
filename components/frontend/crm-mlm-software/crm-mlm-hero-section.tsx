import { HeroSection } from "@/components/frontend/common/hero-section";
import type { Locale } from "@/i18n-config";
import { getPageTitle } from "@/lib/api/page-titles";
import { getCrmMlmSoftwareContent } from "@/lib/crm-mlm-software";

interface CrmMlmHeroSectionProps {
  locale: Locale;
  contactHref: string;
  demoHref: string;
  resourcesHref: string;
  pageTitleData?: Awaited<ReturnType<typeof getPageTitle>> | null;
}

export async function CrmMlmHeroSection({
  locale,
  contactHref,
  demoHref,
  resourcesHref,
  pageTitleData: propPageTitleData,
}: CrmMlmHeroSectionProps) {
  const pageTitleData = propPageTitleData ?? (await getPageTitle("crm-mlm-software", locale));
  const c = getCrmMlmSoftwareContent(locale).hero;

  const badgeText = pageTitleData?.pagePill ?? c.badge;
  const title = pageTitleData?.title ?? c.title;
  const description = pageTitleData?.sectionSubtitle ?? c.description;

  const statsSlot = (
    <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
      {c.stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="group relative flex flex-col gap-2 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition-transform hover:scale-[1.02]"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary">
              <Icon className="h-5 w-5 transition-transform duration-300 ease-out group-hover:text-white" aria-hidden />
            </span>
            <dt className="text-sm font-medium text-muted-foreground">{stat.label}</dt>
            <dd className="text-2xl font-semibold text-foreground">{stat.value}</dd>
            <p className="text-xs text-muted-foreground">{stat.detail}</p>
          </div>
        );
      })}
    </div>
  );

  return (
    <HeroSection
      badgeText={badgeText}
      highlightText={title}
      description={description}
      primaryCta={{ label: c.primaryCta, href: contactHref }}
      secondaryCta={{ label: c.secondaryCta, href: demoHref, external: true }}
      rightSlot={statsSlot}
      centered={false}
      disableHighlight={false}
    />
  );
}
