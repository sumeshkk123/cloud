import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { Award, TrendingUp } from "lucide-react";
import type { MlmCompanyContent } from "./types";

interface MlmCompanyAchievementsSectionProps {
  content: MlmCompanyContent;
}

export function MlmCompanyAchievementsSection({ content }: MlmCompanyAchievementsSectionProps) {
  return (
    <Section variant="gradient" padding="lg">
      <div className="container space-y-12">
        <SectionTitle
          heading={content.achievements.heading}
          description={content.achievements.description}
          maxWidth="3xl"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {content.achievements.items.map((achievement, index) => (
            <div key={index} className="flex gap-6 rounded-2xl border border-border/60 bg-card p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                {achievement.year ? (
                  <Typography variant="h6" className="text-primary font-bold">
                    {achievement.year}
                  </Typography>
                ) : (
                  <Award className="h-6 w-6 text-primary" />
                )}
              </div>
              <div className="space-y-2">
                <Typography as="h3" variant="h6" className="font-semibold">
                  {achievement.title}
                </Typography>
                <Typography as="p" variant="small" textColor="muted">
                  {achievement.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
