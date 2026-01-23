import type { Locale } from "@/i18n-config";
import type { HomepageContent } from "@/types/homepage";
import { Users } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { ClientMetricCard } from "@/components/frontend/common/client-metric-card";
import { ClientLogoDisplay } from "@/components/frontend/common/client-logo-display";
import { InfoCtaBox } from "@/components/ui/info-cta-box";
import { localizedHref } from "./utils";
import { Section } from "@/components/ui/section";

export function ClientsSection({
  locale,
  logos,
  data
}: { locale: Locale; logos: HomepageContent["hero"]["logos"]; data: HomepageContent["clients"] }) {
  const metrics = data?.metrics ?? [];
  const clientLogos = logos ?? [];
  return (
    <Section variant="gradient" padding="xl" containerClassName="">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-start">

        <div className="space-y-12">
          <SectionTitle
            badge={data?.badgeLabel ?? "Customer stories"}
            heading={data?.heading}
            description={data?.description}
            centered={false}
            maxWidth="full"
          />

          <div className="grid gap-6 sm:grid-cols-1 xl:grid-cols-2">
            {metrics.map((metric) => (
              <ClientMetricCard
                key={metric.label}
                value={metric.value}
                label={metric.label}
                description={metric.description}
              />
            ))}
          </div>

          {data?.primaryCta ? (
            <InfoCtaBox
              icon={Users}
              text={
                <>
                  {data?.footnote || "Trusted by 500+ MLM companies and 120K+ distributors worldwide."}
                </>
              }
              buttonText={data.primaryCta.label}
              buttonHref={localizedHref(locale, data.primaryCta.href)}
            />
          ) : null}
        </div>

        {/* Right Column: Sticky Logo Display */}
        <ClientLogoDisplay logos={clientLogos} />
      </div>
    </Section>
  );
}
