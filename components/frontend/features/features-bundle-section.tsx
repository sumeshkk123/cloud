import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { BulletList } from "@/components/ui/bullet-list";
import { ArrowRight, Sparkles } from "lucide-react";

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
    <Section id="feature-suite" variant="primary" padding="xl" className="relative isolate !overflow-visible">

      {/* Floating orbs */}
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse -z-10" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse -z-10" style={{ animationDelay: '1s' }} />

      <div className="relative container z-10 space-y-16">
        {/* Header */}
        <SectionTitle
          badge="Solution suites"
          heading="Choose the bundle that matches your growth stage"
          description="Mix and match Cloud MLM Software modules to launch faster, accelerate revenue, or strengthen governance without distracting your core teams."
          centered={true}
          maxWidth="3xl"
        />

        {/* Bundles */}
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-2">
          {bundles.map((bundle, index) => (
            <Card key={bundle.title} className="p-4">
              <CardHeader>
                <div className="space-y-4">
                  <Typography as="h4" variant="h4">
                    {bundle.title}
                  </Typography>
                  <Typography as="p" variant="p" textColor="muted">
                    {bundle.description}
                  </Typography>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* Modules section */}
                  <div className="space-y-4">
                    <Typography as="h5" variant="h5">
                      Included Modules
                    </Typography>
                    <BulletList items={bundle.modules} />
                  </div>

                  {/* Outcome section */}
                  <div className="space-y-4">
                    <Typography as="h5" variant="h5">
                      Expected Outcome
                    </Typography>
                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-6">
                      <Typography as="p" variant="p">
                        {bundle.outcome}
                      </Typography>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
