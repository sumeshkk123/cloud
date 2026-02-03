import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";

type Milestone = {
  stage: string;
  title: string;
  description: string;
  outcome: string;
};

interface FeaturesMilestonesSectionProps {
  milestones: Milestone[];
}

export function FeaturesMilestonesSection({ milestones }: FeaturesMilestonesSectionProps) {
  return (
    <Section id="delivery-milestones" variant="gradient" padding="xl" className="relative isolate !overflow-visible">
      <div className="space-y-12">
        <SectionTitle
          badge="Delivery milestones"
          heading="From blueprint to growth in four milestones"
          description="Our delivery framework keeps finance, compliance, and field leaders aligned at every checkpoint."
          centered={true}
          maxWidth="3xl"
        />

        <div className="mx-auto container">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-4">
            {milestones.map((milestone) => (
              <div
                key={milestone.stage}
                className="relative rounded-2xl border border-border/40 bg-background p-6 sm:p-8"
              >
                <div className="relative grid gap-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                      <span className="text-base font-semibold" aria-hidden>
                        {milestone.stage}
                      </span>
                    </div>
                    <div className="min-w-0 space-y-2">
                      <Typography as="h3" variant="h5" className="tracking-tight">
                        {milestone.title}
                      </Typography>
                      <Typography as="p" variant="p" textColor="muted" className="text-sm leading-relaxed">
                        {milestone.description}
                      </Typography>
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-start">
                    <div className="space-y-3">
                      <Typography as="p" variant="small" textColor="muted" className="uppercase tracking-wider">
                        Outcome
                      </Typography>
                      <Typography as="p" variant="p" textColor="muted" className="text-sm leading-relaxed">
                        {milestone.outcome}
                      </Typography>
                    </div>
                    <div className="hidden sm:block">
                      <div className="h-full w-px bg-gradient-to-b from-transparent via-border to-transparent" aria-hidden />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
