import { Check, Bot, Globe2, ShieldCheck, Workflow } from "lucide-react";

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
    <section className="container space-y-12">
      <div className="max-w-3xl space-y-4">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Four tracks powering Cloud MLM Software
        </h2>
        <p className="text-sm text-muted-foreground">
          Each track combines configurable modules, automation, and governance so you can tailor the platform to your organisation.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {tracks.map((track) => (
          <article key={track.title} className="relative overflow-hidden rounded-3xl border border-border/60 bg-background p-8 shadow-sm">
            <div className="absolute inset-0 pointer-events-none opacity-30">
              {track.icon === "platform" ? <Globe2 className="absolute -right-12 -top-12 h-48 w-48 text-primary" aria-hidden /> : null}
              {track.icon === "automation" ? <Workflow className="absolute -right-10 -top-10 h-48 w-48 text-primary" aria-hidden /> : null}
              {track.icon === "governance" ? <ShieldCheck className="absolute -right-10 -top-10 h-48 w-48 text-primary" aria-hidden /> : null}
              {track.icon === "ai" ? <Bot className="absolute -right-10 -top-10 h-48 w-48 text-primary" aria-hidden /> : null}
            </div>
            <div className="relative space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">{track.title}</h3>
              <p className="text-sm text-muted-foreground">{track.description}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {track.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary" aria-hidden />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
