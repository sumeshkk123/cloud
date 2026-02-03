import { Check } from "lucide-react";

type PersonaFeature = {
  persona: string;
  role: string;
  summary: string;
  priorities: string[];
};

interface FeaturesPersonaSectionProps {
  personas: PersonaFeature[];
}

export function FeaturesPersonaSection({ personas }: FeaturesPersonaSectionProps) {
  return (
    <section id="persona-features" className="container space-y-10">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Built for every stakeholder</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Tailored workspaces and insights for each team you support
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          Executives, finance, technology, and field leaders gain focused tooling, dashboards, and automations without relying on spreadsheets.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {personas.map((persona) => (
          <article key={persona.persona} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-widest text-primary">{persona.role}</p>
              <h3 className="text-xl font-semibold text-foreground">{persona.persona}</h3>
              <p className="text-sm text-muted-foreground">{persona.summary}</p>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {persona.priorities.map((priority) => (
                <li key={priority} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                  <span>{priority}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
