import { Handshake, MessageSquare, Users, type LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";
import { getAboutCompanyContent } from "@/lib/about-company";
import type { Locale } from "@/i18n-config";

const ICON_MAP: Record<string, LucideIcon> = {
  messageSquare: MessageSquare,
  users: Users,
  handshake: Handshake,
};

interface AboutCompanyCollaborationSectionProps {
  locale: Locale;
}

export function AboutCompanyCollaborationSection({ locale }: AboutCompanyCollaborationSectionProps) {
  const content = getAboutCompanyContent(locale).collaboration;
  return (
    <Section variant="gradient" padding="lg">
      <div className="space-y-10">
        <SectionTitle
          badge={content.badge}
          heading={content.heading}
          description={content.description}
          maxWidth="3xl"
          centered
        />
        <div className="grid gap-6 md:grid-cols-3">
          {content.channels.map((channel) => {
            const Icon = ICON_MAP[channel.iconKey] ?? MessageSquare;
            return (
              <Card key={channel.title} className="flex h-full flex-col">
                <CardHeader className="space-y-4">
                  <CardIcon icon={Icon} aria-hidden />
                  <CardTitle>{channel.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <Typography as="p" variant="small" textColor="muted" className="leading-relaxed">
                    {channel.description}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
