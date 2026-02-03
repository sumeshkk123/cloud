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
    <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
      <div className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            From blueprint to growth in four milestones
          </h2>
          <p className="text-sm text-muted-foreground">
            Our delivery framework keeps finance, compliance, and field leaders aligned at every checkpoint.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-4">
          {milestones.map((milestone) => (
            <article key={milestone.stage} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                {milestone.stage}
              </span>
              <h3 className="text-lg font-semibold text-foreground">{milestone.title}</h3>
              <p className="text-sm text-muted-foreground">{milestone.description}</p>
              <p className="text-xs uppercase tracking-wide text-primary">Outcome</p>
              <p className="text-sm text-muted-foreground">{milestone.outcome}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
