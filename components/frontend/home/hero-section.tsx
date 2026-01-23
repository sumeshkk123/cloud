import type { Locale } from "@/i18n-config";
import type { HomepageContent } from "@/types/homepage";
import type { CmsLink, LanguageOption, NavItem } from "@/types/global";
import { PageTitle } from "@/components/frontend/common/page-title";
import { Button } from "@/components/ui/button";
import { HeroStats } from "./hero-stats";
import { HeroPlatformSnapshot } from "./hero-platform-snapshot";
import { HeroPhoneCta } from "./hero-phone-cta";
import { localizedHref } from "./utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type HeroSectionProps = {
  locale: Locale;
  data: HomepageContent["hero"];
  siteName: string;
  navItems: NavItem[];
  headerCta?: CmsLink | null;
  languageLabel?: string | null;
  languageAriaLabel?: string | null;
  languageOptions: LanguageOption[];
};

export function HeroSection({
  locale,
  data,
  siteName,
  navItems,
  headerCta,
  languageLabel,
  languageAriaLabel,
  languageOptions
}: HeroSectionProps) {
  // Parse title to extract highlight text
  // Expected format: "Best MLM Software for smarter multi-level marketing businesses"
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

  const titleParts = data?.title ? parseTitle(data.title) : { highlightText: data?.title || 'MLM Software' };

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
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left relative z-10">
            {/* Use PageTitle component from HeroSection */}
            <div className="space-y-8 w-full">
              <div className="space-y-8 w-full">
                <PageTitle
                  badgeText={data?.badgeLabel || undefined}
                  beforeText={titleParts.beforeText}
                  highlightText={titleParts.highlightText}
                  afterText={titleParts.afterText}
                  description={data?.description || undefined}
                  centered={false}
                  disableHighlight={false}
                  as="h1"
                  headingClassName="text-white"
                  className="[&_p]:text-gray-400"
                />
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                {data?.primaryCta && (
                  <Button
                    asChild
                    size="lg"
                    className="group rounded-xl px-6 py-6 text-base font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <Link href={localizedHref(locale, data.primaryCta.href)}>
                      {data.primaryCta.label}
                      <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
                    </Link>
                  </Button>
                )}
                {data?.secondaryCta && (
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="group rounded-xl border-2 px-6 py-6 text-base font-semibold transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary/5 border-white/20 text-white hover:text-white"
                  >
                    <Link href={localizedHref(locale, data.secondaryCta.href)}>
                      {data.secondaryCta.label}
                      <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
                    </Link>
                  </Button>
                )}
              </div>

              {/* Phone CTA - kept separate */}
              {data?.phoneCta && (
                <div className="mt-4">
                  <HeroPhoneCta phoneCta={data.phoneCta} />
                </div>
              )}

              {/* Stats Section - kept separate */}
              {data?.outcomesLabel && data?.stats && data.stats.length > 0 && (
                <HeroStats outcomesLabel={data.outcomesLabel} stats={data.stats} />
              )}
            </div>
          </div>

          {/* Platform Snapshot Card - kept separate */}
          <div className="relative z-10">
            <HeroPlatformSnapshot features={data?.features} />
          </div>
        </div>
      </div>
    </section>
  );
}
