import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { BulletList } from "@/components/ui/bullet-list";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

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
    <Section id="persona-features" variant="gradient" padding="xl" className="relative isolate !overflow-visible">

      {/* Floating orbs */}
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse -z-10" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse -z-10" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 container space-y-12">
        <SectionTitle
          badge="Built for every stakeholder"
          heading="Tailored workspaces and insights for each team you support"
          description="Executives, finance, technology, and field leaders gain focused tooling, dashboards, and automations without relying on spreadsheets."
          centered={true}
          maxWidth="3xl"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {personas.map((persona) => (
            <Card key={persona.persona} className="h-full">
              <CardHeader className="space-y-3">
                <div className="space-y-2">

                  <Typography as="h5" variant="h5">
                    {persona.persona}
                  </Typography>
                  <Typography as="p" variant="small" textColor="muted">
                    {persona.summary}
                  </Typography>
                </div>
              </CardHeader>
              <CardContent>
                <BulletList items={persona.priorities} variant="compact" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
