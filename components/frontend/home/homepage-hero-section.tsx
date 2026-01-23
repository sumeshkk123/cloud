import type { Locale } from "@/i18n-config";
import type { HomepageContent } from "@/types/homepage";
import type { PageTitleRecord } from "@/lib/api/page-titles";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { CtaButton } from "@/components/ui/cta-button";
import { BulletList } from "@/components/ui/bullet-list";
import { SmartImage } from "@/components/ui/smart-image";
import { PageTitle } from "@/components/frontend/common/page-title";
import { localizedHref } from "./utils";
import { getStatIcon, splitLabelIntoLines } from "./utils/stat-helpers";

type HomePageHeroSectionProps = {
  locale: Locale;
  data: HomepageContent["hero"];
  pageTitleData?: PageTitleRecord | null;
};

export function HomePageHeroSection({
  locale,
  data,
  pageTitleData
}: HomePageHeroSectionProps) {
  // Parse title to extract highlight text
  const parseTitle = (title: string): { beforeText?: string; highlightText: string; afterText?: string } => {
    const words = title.split(' ');

    // Look for "MLM Software" or "MLM" as highlight
    const highlightPhrases = ['MLM Software', 'MLM', 'software MLM', 'Software MLM'];

    // Try to find multi-word phrases first
    for (let i = 0; i < words.length - 1; i++) {
      const twoWords = `${words[i]} ${words[i + 1]}`;
      const threeWords = i < words.length - 2 ? `${words[i]} ${words[i + 1]} ${words[i + 2]}` : '';

      if (highlightPhrases.includes(threeWords)) {
        return {
          beforeText: i > 0 ? words.slice(0, i).join(' ') : undefined,
          highlightText: threeWords,
          afterText: i + 3 < words.length ? words.slice(i + 3).join(' ') : undefined,
        };
      }
      if (highlightPhrases.includes(twoWords)) {
        return {
          beforeText: i > 0 ? words.slice(0, i).join(' ') : undefined,
          highlightText: twoWords,
          afterText: i + 2 < words.length ? words.slice(i + 2).join(' ') : undefined,
        };
      }
    }

    // Fallback: use first word as highlight
    return {
      highlightText: words[0] || 'MLM',
      afterText: words.length > 1 ? words.slice(1).join(' ') : undefined,
    };
  };

  const displayTitle = pageTitleData?.title || data?.title || '';
  const displayDescription = pageTitleData?.sectionSubtitle || data?.description || '';
  const displayBadge = pageTitleData?.pagePill || data?.badgeLabel || '';

  const titleParts = displayTitle ? parseTitle(displayTitle) : { highlightText: displayTitle || 'MLM Software' };

  return (
    <section className="relative isolate pb-20 pt-6 rounded-3xl m-2">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-20 opacity-100 dark:opacity-100 overflow-hidden rounded-3xl"
        style={{
          backgroundImage: "url('/images/home/best-mlm-software.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
        aria-hidden
      />

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900/70 via-slate-900/60 to-slate-900/70 rounded-3xl" aria-hidden />

      <div className="container relative">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center px-4 pt-16">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
            <div className="space-y-6 w-full">
              <PageTitle
                badgeText={displayBadge || undefined}
                beforeText={titleParts.beforeText}
                highlightText={titleParts.highlightText}
                afterText={titleParts.afterText}
                description={displayDescription || undefined}
                centered={false}
                disableHighlight={false}
                as="h1"
                headingClassName="text-white break-words"
                className="[&_p]:text-gray-400"
              />
            </div>
            <div className="mt-8 flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-start">
              <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                {data?.primaryCta ? (
                  <CtaButton
                    href={localizedHref(locale, data.primaryCta.href)}
                    variant="primary"
                  >
                    {data.primaryCta.label}
                  </CtaButton>
                ) : null}
                {data?.secondaryCta ? (
                  <CtaButton
                    href={localizedHref(locale, data.secondaryCta.href)}
                    variant="secondary"
                  >
                    {data.secondaryCta.label}
                  </CtaButton>
                ) : null}
              </div>
              {data?.phoneCta ? (
                <a
                  href={data.phoneCta.href}
                  className="inline-flex items-center justify-center gap-3 rounded-full px-5 py-3 text-sm font-semibold text-foreground transition  bg-primary/10 hover:bg-primary/5 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012 4.18 2 2 0 014 2h3a2 2 0 012 1.72 12.44 12.44 0 00.7 2.73 2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 005.66 5.66l1.27-1.27a2 2 0 012.11-.45 12.44 12.44 0 002.73.7A2 2 0 0122 16.92z" />
                    </svg>
                  </span>
                  <span className="flex flex-col items-start leading-tight">
                    <span className="text-xs font-normal text-muted-foreground">{data.phoneCta.label}</span>
                    <span className="text-sm font-semibold text-white">{data.phoneCta.phoneDisplay}</span>
                  </span>
                </a>
              ) : null}
            </div>
            {data?.outcomesLabel && data?.stats && data.stats.length > 0 && (
              <div className="mt-10 w-full">
                <Typography variant="p" className="text-xs font-semibold uppercase  text-gray-400 mb-6">
                  {data.outcomesLabel}
                </Typography>
                <div className="relative grid grid-cols-2 sm:grid-cols-4 bg-dark-900 justify-center border-y border-dotted border-primary/40 py-2">
                  {data.stats.map((stat, index) => {
                    const Icon = getStatIcon(stat.iconName, stat.label);
                    const { firstLine, secondLine } = splitLabelIntoLines(
                      stat.label,
                      stat.firstLine,
                      stat.secondLine
                    );

                    return (
                      <div key={stat.label} className="group relative flex flex-col items-center gap-4 text-center py-6 transition-transform hover:scale-105">
                        {index > 0 && (
                          <div className="absolute left-0 top-0 bottom-0 w-px border-l border-dotted border-primary/40" />
                        )}
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 border border-primary/30 transition-all group-hover:bg-primary/20">
                          <Icon className="h-7 w-7 text-slate-300/90 transition-transform duration-300 group-hover:scale-x-[-1]" strokeWidth={1.5} />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-sm font-medium text-white leading-tight">{firstLine}</span>
                          {secondLine && (
                            <span className="text-sm font-medium text-white leading-tight">{secondLine}</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-border/30 bg-card text-foreground shadow-[0_40px_80px_-48px_rgba(15,23,42,0.45)]">
              <div className="flex items-center justify-between gap-4 px-6 pt-8">
                <Badge variant="default">
                  Platform snapshot
                </Badge>
                <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Real-time sync
                </span>
              </div>
              <div className="px-6">
                <Typography as="h2" variant="h2" className="">Launch boldly, scale globally</Typography>
                <Typography variant="p" className="mt-2 text-muted-foreground">
                  Blueprint payouts, onboard teams, and secure operations without slowing growth.
                </Typography>
              </div>
              {data?.features && Array.isArray(data.features) && data.features.length > 0 && (
                <div className="px-6">
                  <BulletList items={data.features} />
                </div>
              )}
              <div className="relative px-6 pb-8">
                <div className="relative overflow-hidden rounded-3xl border border-border/30 bg-muted/40 shadow-xl">
                  <SmartImage
                    src="/wp-content/uploads/2024/06/cloudDashboardDemo.webp"
                    alt="Cloud MLM dashboard"
                    width={600}
                    height={360}
                    className="w-full rounded-2xl border border-border/50 object-cover"
                  />
                  <div className="absolute bottom-4 left-4 rounded-2xl border border-border/50 bg-card/90 px-4 py-3 text-left shadow-sm">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-muted-foreground">AI signals</p>
                    <p className="text-sm font-semibold text-muted-foreground">Comp plan health: 98%</p>
                  </div>
                  <div className="absolute top-4 right-4 rounded-full bg-emerald-400 px-3 py-1 text-[11px] font-semibold text-emerald-950 shadow">
                    +4.6% growth
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
