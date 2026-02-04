import { Target } from "lucide-react";

type Goal = { order: string; title: string; description: string };

const STRATEGIC_GOALS: Goal[] = [
  {
    order: "01",
    title: "Deliver measurable outcomes",
    description:
      "Design compensation, onboarding, and retention flows that improve distributor productivity and customer lifetime value."
  },
  {
    order: "02",
    title: "Advance Cloud MLM Software",
    description:
      "Continuously invest in product engineering, automation, and UX so upgrades feel effortless for every client."
  },
  {
    order: "03",
    title: "Champion regulated growth",
    description:
      "Embed compliance, audit trails, and tax localisation to keep expansion programmes fully governed."
  },
  {
    order: "04",
    title: "Scale global partnerships",
    description:
      "Expand our ecosystem of payments, logistics, and cloud partners to accelerate multi-country rollouts."
  }
];

export function AboutCompanyGoalsSection() {
  return (
    <section className="container space-y-10">
      <div className="max-w-3xl space-y-4">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Strategic goals that guide every engagement
        </h2>
        <p className="text-sm text-muted-foreground">
          These priorities ensure each implementation of Cloud MLM Software remains aligned to stakeholder vision and
          ready for future expansion.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {STRATEGIC_GOALS.map((goal) => (
          <article
            key={goal.order}
            className="relative overflow-hidden rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
          >
            <span className="absolute -top-10 -right-4 text-7xl font-bold text-primary/10" aria-hidden>
              {goal.order}
            </span>
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <Target className="h-4 w-4" aria-hidden />
                Goal {goal.order}
              </span>
              <h3 className="text-xl font-semibold text-foreground">{goal.title}</h3>
              <p className="text-sm text-muted-foreground">{goal.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
