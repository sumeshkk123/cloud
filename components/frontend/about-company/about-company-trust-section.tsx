import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { BulletList } from "@/components/ui/bullet-list";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getAboutCompanyContent } from "@/lib/about-company";
import type { Locale } from "@/i18n-config";

interface AboutCompanyTrustSectionProps {
  locale: Locale;
}

export function AboutCompanyTrustSection({ locale }: AboutCompanyTrustSectionProps) {
  const content = getAboutCompanyContent(locale).trust;
  return (
    <Section variant="primary" padding="lg">
      <div className="space-y-10">
          <SectionTitle
            badge={content.badge}
            heading={content.heading}
            description={content.description}
            maxWidth="3xl"
            centered
          />
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <Typography as="p" variant="small" textColor="muted" className="uppercase tracking-wider">
                {content.whatYouGetLabel}
              </Typography>
            </CardHeader>
            <CardContent className="pt-0">
              <BulletList items={content.leftPoints} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Typography as="p" variant="small" textColor="muted" className="uppercase tracking-wider">
                {content.whatYouGetLabel}
              </Typography>
            </CardHeader>
            <CardContent className="pt-0">
              <BulletList items={content.rightPoints} />
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
