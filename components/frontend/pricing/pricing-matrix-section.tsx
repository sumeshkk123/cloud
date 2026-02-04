import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { PROCUREMENT_MATRIX } from "./constants";

export function PricingMatrixSection() {
  return (
    <Section variant="muted" padding="lg">
      <div className="container space-y-10">
        <SectionTitle
          heading="Procurement deliverables at a glance"
          description="Every Cloud MLM Software engagement ships with the artefacts your finance, legal, and operations leaders expect."
          maxWidth="3xl"
        />
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          <div className="grid grid-cols-[minmax(0,260px)_repeat(3,minmax(0,1fr))] bg-muted/60 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            <span className="border-r border-border p-4">Deliverable</span>
            <span className="border-r border-border p-4 text-center">Launch Lab</span>
            <span className="border-r border-border p-4 text-center">Growth Engine</span>
            <span className="p-4 text-center">Enterprise Blueprint</span>
          </div>
          <div className="divide-y divide-border">
            {PROCUREMENT_MATRIX.map((row) => (
              <div key={row.deliverable} className="grid grid-cols-[minmax(0,260px)_repeat(3,minmax(0,1fr))] text-sm">
                <div className="space-y-1 border-r border-border p-4">
                  <Typography as="p" variant="small" className="font-semibold">
                    {row.deliverable}
                  </Typography>
                </div>
                <div className="flex items-center justify-center border-r border-border p-4">
                  <Typography as="p" variant="small" textColor="muted">
                    {row.launch}
                  </Typography>
                </div>
                <div className="flex items-center justify-center border-r border-border p-4">
                  <Typography as="p" variant="small" textColor="muted">
                    {row.scale}
                  </Typography>
                </div>
                <div className="flex items-center justify-center p-4">
                  <Typography as="p" variant="small" textColor="muted">
                    {row.enterprise}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
