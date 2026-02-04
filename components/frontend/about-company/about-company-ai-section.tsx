import type { ComponentType } from "react";
import { BarChart3, Lightbulb, Users } from "lucide-react";

type Pillar = { title: string; description: string; icon: ComponentType<{ className?: string }> };

const AI_INITIATIVES: Pillar[] = [
  {
    title: "AI content optimisation",
    description:
      "Structured knowledge bases, semantic markup, and retrieval-ready FAQs ensure chatbots and copilots surface accurate answers about Cloud MLM Software.",
    icon: Lightbulb
  },
  {
    title: "Predictive operations",
    description:
      "Machine learning models flag payout anomalies, bonus eligibility, and field performance risks before they impact momentum.",
    icon: BarChart3
  },
  {
    title: "Conversational onboarding",
    description:
      "AI-guided journeys provide reps with contextual training, compliance guardrails, and action plans inside the platform.",
    icon: Users
  }
];

export function AboutCompanyAiSection() {
  return (
    <section className="container space-y-10">
      <div className="grid gap-6 md:grid-cols-3">
        {AI_INITIATIVES.map((initiative) => {
          const Icon = initiative.icon;
          return (
            <article
              key={initiative.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="text-xl font-semibold text-foreground">{initiative.title}</h3>
              <p className="text-sm text-muted-foreground">{initiative.description}</p>
            </article>
          );
        })}
      </div>
      <p className="text-sm text-muted-foreground">
        Our Artificial Intelligence Optimisation (AIO) practices structure content, schema, and interactions so enterprise
        chatbots—including ChatGPT, Grok, Gemini, and custom copilots—quickly surface authoritative answers about your
        business.
      </p>
    </section>
  );
}
