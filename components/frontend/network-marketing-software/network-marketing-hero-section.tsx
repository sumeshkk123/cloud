import { Users } from "lucide-react";
import { HeroSection } from "@/components/frontend/common/hero-section";
import type { Locale } from "@/i18n-config";
import { getPageTitle } from "@/lib/api/page-titles";
import { getNetworkMarketingSoftwareContent } from "@/lib/network-marketing-software";

interface NetworkMarketingHeroSectionProps {
  locale: Locale;
  demoHref: string;
  contactHref: string;
  consultingHref: string;
  pageTitleData?: Awaited<ReturnType<typeof getPageTitle>> | null;
}

export async function NetworkMarketingHeroSection({
  locale,
  demoHref,
  contactHref,
  consultingHref,
  pageTitleData: propPageTitleData,
}: NetworkMarketingHeroSectionProps) {
  const pageTitleData = propPageTitleData ?? (await getPageTitle("network-marketing-software", locale));
  const c = getNetworkMarketingSoftwareContent(locale).hero;

  const badgeText = pageTitleData?.pagePill ?? c.badge;
  const title = pageTitleData?.title ?? c.title;
  const description = pageTitleData?.sectionSubtitle ?? c.description;

  const statsCard = (
    <div className="relative space-y-6 rounded-3xl border border-border/60 bg-card/80 p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between text-xs uppercase text-muted-foreground">
        <span>{c.statsCard.title}</span>
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold text-primary">
          <Users className="h-3.5 w-3.5" aria-hidden />
          {c.statsCard.subtitle}
        </span>
      </div>
      <div className="grid gap-4 rounded-2xl border border-border/60 bg-muted/40 p-4 text-sm text-muted-foreground">
        {c.statsCard.stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="group flex items-center justify-between transition-transform hover:scale-105">
              <span className="flex items-center gap-3 font-semibold text-foreground">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 border border-primary/30 transition-all group-hover:bg-primary/20">
                  <Icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-x-[-1]" aria-hidden />
                </div>
                {stat.label}
              </span>
              <span>{stat.value}</span>
            </div>
          );
        })}
      </div>
      <p className="text-xs text-muted-foreground">{c.statsCard.footer}</p>
    </div>
  );

  return (
    <HeroSection
      badgeText={badgeText}
      highlightText={title}
      description={description}
      primaryCta={{ label: c.primaryCta, href: demoHref }}
      secondaryCta={{ label: c.secondaryCta, href: consultingHref }}
      rightSlot={statsCard}
      centered={false}
      disableHighlight={false}
    />
  );
}
