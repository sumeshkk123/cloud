import { Check } from "lucide-react";

type FeatureBundle = {
  title: string;
  description: string;
  modules: string[];
  outcome: string;
};

interface FeaturesBundleSectionProps {
  bundles: FeatureBundle[];
}

export function FeaturesBundleSection({ bundles }: FeaturesBundleSectionProps) {
  return (
    <section id="feature-suite" className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
      <div className="container space-y-10">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Solution suites</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Choose the bundle that matches your growth stage
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Mix and match Cloud MLM Software modules to launch faster, accelerate revenue, or strengthen governance without distracting your core teams.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {bundles.map((bundle) => (
            <article key={bundle.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <div>
                <h3 className="text-xl font-semibold text-foreground">{bundle.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{bundle.description}</p>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {bundle.modules.map((module) => (
                  <li key={module} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                    <span>{module}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs uppercase tracking-widest text-primary">Outcome</p>
              <p className="text-sm text-muted-foreground">{bundle.outcome}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
