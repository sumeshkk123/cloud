import type { ComponentType } from "react";
import { Handshake, MessageSquare, Users } from "lucide-react";

type Channel = { icon: ComponentType<{ className?: string }>; title: string; description: string };

const COLLAB_CHANNELS: Channel[] = [
  {
    icon: MessageSquare,
    title: "Always-on collaboration",
    description:
      "Slack, WhatsApp, Telegram, and Teams channels keep sponsors, finance, and field leaders aligned."
  },
  {
    icon: Users,
    title: "Guided workshops",
    description:
      "Blueprint, build, and optimisation sessions scheduled across time zones to match leadership availability."
  },
  {
    icon: Handshake,
    title: "Hybrid delivery",
    description:
      "On-site discovery blended with remote agile sprints for enterprise and startup programmes alike."
  }
];

export function AboutCompanyCollaborationSection() {
  return (
    <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
      <div className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How we collaborate</h2>
          <p className="text-sm text-muted-foreground">
            Dedicated account teams coordinate planning, implementation, and optimisation with transparent communication
            and metrics that keep leadership confident.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {COLLAB_CHANNELS.map((channel) => {
            const Icon = channel.icon;
            return (
              <article
                key={channel.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{channel.title}</h3>
                <p className="text-sm text-muted-foreground">{channel.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
