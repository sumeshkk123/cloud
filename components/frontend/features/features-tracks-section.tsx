import { Bot, Globe2, ShieldCheck, Workflow } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { BulletList } from "@/components/ui/bullet-list";

type FeatureTrack = {
  title: string;
  description: string;
  highlights: string[];
  icon: "platform" | "automation" | "governance" | "ai";
};

interface FeaturesTracksSectionProps {
  tracks: FeatureTrack[];
}

export function FeaturesTracksSection({ tracks }: FeaturesTracksSectionProps) {
  return (
    <Section id="feature-tracks" variant="gradient" padding="xl" className="relative isolate !overflow-visible">
      <div className="space-y-12">
        <SectionTitle
          badge="Platform tracks"
          heading="Four tracks powering Cloud MLM Software"
          description="Each track combines configurable modules, automation, and governance so you can tailor the platform to your organisation."
          centered={true}
          maxWidth="3xl"
        />

        <div className="mx-auto container">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-4">
            {tracks.map((track) => {
              const Icon =
                track.icon === "platform"
                  ? Globe2
                  : track.icon === "automation"
                    ? Workflow
                    : track.icon === "governance"
                      ? ShieldCheck
                      : Bot;

              return (
                <div
                  key={track.title}
                  className="relative rounded-2xl border border-border/40 bg-background  p-6 sm:p-8"
                >
                  {/* Not a card: use a subtle divider-based layout with an accent rail */}
                  <div className="relative grid gap-6 ">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                        <Icon className="h-6 w-6" aria-hidden />
                      </div>
                      <div className="min-w-0 space-y-2">
                        <Typography as="h3" variant="h4" className="tracking-tight">
                          {track.title}
                        </Typography>
                        <Typography as="p" variant="p" textColor="muted" className="text-sm leading-relaxed">
                          {track.description}
                        </Typography>
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-start">
                      <div className="space-y-3">
                        <Typography as="p" variant="small" textColor="muted" className="uppercase tracking-wider">
                          What you get
                        </Typography>
                        <BulletList items={track.highlights} variant="compact" />
                      </div>
                      <div className="hidden sm:block">
                        <div className="h-full w-px bg-gradient-to-b from-transparent via-border to-transparent" aria-hidden />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
