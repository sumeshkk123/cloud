import type { Locale } from "@/i18n-config";
import type { HomepageContent } from "@/types/homepage";
import Link from "next/link";
import { Package } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { InfoCtaBox } from "@/components/ui/info-cta-box";
import { IndustryCard } from "@/components/common/industry-card";
import { getRemixIcon } from "./utils/remix-icon-resolver";
import { localizedHref } from "./utils";

export function IndustriesSection({ locale, data }: { locale: Locale; data: HomepageContent["industrySection"] }) {
  const solutions = (data?.solutions ?? []).slice(0, 6);
  const focusTags = data?.focusTags ?? [];
  return (
    <section className="relative overflow-hidden pt-24 pb-24">
      <div className="absolute inset-0 -z-20" aria-hidden />
      <div className="container space-y-12">
        <SectionTitle
          badge={data?.badge}
          heading={data?.heading}
          description={data?.description}
          maxWidth="5xl"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((industry) => {
            const Icon = getRemixIcon(industry.icon);
            return (
              <IndustryCard
                key={industry.title}
                icon={Icon}
                title={industry.title}
                description={industry.description}
                href={localizedHref(locale, industry.href)}
              />
            );
          })}
        </div>

        {focusTags.length > 0 ? (
          <div className="flex flex-wrap items-center justify-center gap-3">
            {focusTags.map((tag) => {
              // Create a slug from the tag for the URL
              const tagSlug = tag.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
              return (
                <Link
                  key={tag}
                  href={localizedHref(locale, `/industries/${tagSlug}`)}
                  className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold uppercase tracking-wide shadow-sm transition-all hover:bg-primary/20 hover:border-primary/30 hover:shadow-md"
                >
                  {tag}
                </Link>
              );
            })}
          </div>
        ) : null}

        <InfoCtaBox
          icon={Package}
          text={
            <>
              Tap into curated feature packs and regulatory presets built with leaders across direct selling, wellness, and finance.
            </>
          }
          buttonText="Explore all modules"
          buttonHref={localizedHref(locale, "/industries")}
        />
      </div>
    </section>
  );
}
