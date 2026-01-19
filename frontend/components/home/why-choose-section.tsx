import Image from "next/image";
import Link from "next/link";
import type { HomepageContent } from "@/types/homepage";
import { resolveIcon } from "./utils";
import { Compass, ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { ReadMoreButton } from "@/components/ui/read-more-button";
import { Typography } from "@/components/ui/typography";
import { Card, CardIcon } from "@/components/ui/card";
import { AiCopilotCard } from "@/components/common/ai-copilot-card";
import type { Locale } from "@/i18n-config";

export function WhyChooseSection({ locale, data }: { locale?: Locale; data: HomepageContent["whyChoose"] }) {
  const reasons = data?.reasons ?? [];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-900 py-24">
      <div className="container">
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-[0.6fr_0.4fr] lg:items-start">

          <div className="space-y-8">
            {/* Header Section */}
            <div className="space-y-6">
              <SectionTitle
                badge={data?.badge}
                heading={data?.heading}
                description={data?.description}
                centered={false}
                maxWidth="full"
              />
            </div>

            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                width={800}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>

            {/* CTA Card */}
            <div className="rounded-3xl border border-primary/30 bg-primary/95 dark:bg-[hsl(221.2,83.2%,53.3%)]/95 p-8 shadow-lg">
              <Typography
                as="h3"
                variant="h4"
                className="mb-4 font-semibold text-primary-foreground"
              >
                Partner with Cloud MLM Software & take your brand to the next level.
              </Typography>
              <Link
                href="#"
                className="group inline-flex items-center gap-2 text-primary-foreground font-semibold transition-colors hover:text-primary-foreground/80"
              >
                Let's Talk Strategy
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Feature Cards */}
          <div className="space-y-6">
            {reasons.map((reason) => {
              const Icon = resolveIcon(reason.icon, Compass);
              return (
                <AiCopilotCard
                  key={reason.title}
                  icon={Icon}
                  title={reason.title}
                  description={reason.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
