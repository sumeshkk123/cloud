import { Check } from "lucide-react";

type SuccessProgram = {
  title: string;
  description: string;
  bullets: string[];
};

interface FeaturesSuccessProgramsSectionProps {
  programs: SuccessProgram[];
}

export function FeaturesSuccessProgramsSection({ programs }: FeaturesSuccessProgramsSectionProps) {
  return (
    <section id="success-programs" className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
      <div className="container space-y-10">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Programmes that ensure adoption</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Expert teams walk with you from planning to optimisation
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Combine implementation governance, enablement, and ongoing growth analytics so your organisation keeps realising value long after go-live.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((program) => (
            <article key={program.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <div>
                <h3 className="text-xl font-semibold text-foreground">{program.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{program.description}</p>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {program.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
