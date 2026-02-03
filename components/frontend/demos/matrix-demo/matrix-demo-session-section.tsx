import type { Experience } from "./matrix-demo-content";

export function MatrixDemoSessionSection({ experiences }: { experiences: Experience[] }) {
  return (
    <section className="container space-y-12">
      <div className="max-w-3xl space-y-4">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What the guided session covers</h2>
        <p className="text-sm text-muted-foreground">
          Move through administrator, distributor, and finance lenses so every stakeholder understands how the platform supports them.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((experience) => {
          const Icon = experience.icon;
          return (
            <article key={experience.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-lg font-semibold text-foreground">{experience.title}</h3>
              <p className="text-sm text-muted-foreground">{experience.detail}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

