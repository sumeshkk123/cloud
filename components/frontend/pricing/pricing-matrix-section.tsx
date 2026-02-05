import { Zap } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { PROCUREMENT_MATRIX } from "./constants";

const MATRIX_COLS: { key: "launch" | "scale" | "enterprise"; label: string; highlight?: boolean }[] = [
  { key: "launch", label: "Launch Lab" },
  { key: "scale", label: "Growth Engine", highlight: true },
  { key: "enterprise", label: "Enterprise Blueprint" },
];

export function PricingMatrixSection() {
  return (
    <Section variant="gradient" padding="xl" className="relative">
      <div className="space-y-12">
        <SectionTitle
          badge="Deliverables"
          heading="Procurement deliverables at a glance"
          description="Every Cloud MLM Software engagement ships with the artefacts your finance, legal, and operations leaders expect."
          maxWidth="3xl"
        />
        <div className="overflow-x-auto pb-2">
          <div className="relative min-w-[640px] overflow-hidden rounded-3xl border border-border/50 bg-card/95 shadow-xl shadow-primary/5 ring-1 ring-black/5 dark:ring-white/5 transition-shadow hover:shadow-2xl hover:shadow-primary/10">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/[0.02] via-transparent to-primary/[0.03]" aria-hidden />
            <div className="relative grid grid-cols-[minmax(0,220px)_repeat(3,minmax(0,1fr))] border-b border-border/80 bg-muted/40 dark:bg-muted/30">
              <div className="border-r border-border/80 px-6 py-5">
                <span className="text-[11px] font-semibold uppercase text-muted-foreground">
                  Deliverable
                </span>
              </div>
              {MATRIX_COLS.map((col) => (
                <div
                  key={col.key}
                  className={cn(
                    "relative flex flex-col items-center justify-center gap-2 px-5 py-4 text-center",
                    col.highlight && "bg-primary/10 dark:bg-primary/15 border-x border-primary/25",
                    !col.highlight && "border-r border-border/80 last:border-r-0"
                  )}
                >
                  {col.highlight && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-semibold uppercase text-primary-foreground">
                      <Zap className="h-3 w-3" aria-hidden /> Popular
                    </span>
                  )}
                  <span
                    className={cn(
                      "text-[11px] font-semibold uppercase",
                      col.highlight ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {col.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="relative divide-y divide-border/50">
              {PROCUREMENT_MATRIX.map((row, i) => (
                <div
                  key={row.deliverable}
                  className={cn(
                    "grid grid-cols-[minmax(0,220px)_repeat(3,minmax(0,1fr))] transition-colors hover:bg-muted/30",
                    i % 2 === 1 && "bg-muted/15"
                  )}
                >
                  <div className="border-r border-border/80 px-6 py-4 flex items-center">
                    <Typography as="p" variant="small" className="font-semibold text-foreground">
                      {row.deliverable}
                    </Typography>
                  </div>
                  {MATRIX_COLS.map((col) => (
                    <div
                      key={col.key}
                      className={cn(
                        "flex items-center justify-center px-5 py-4 text-center",
                        col.highlight && "bg-primary/[0.06] dark:bg-primary/10"
                      )}
                    >
                      <Typography as="p" variant="small" textColor="muted" className="leading-snug">
                        {row[col.key]}
                      </Typography>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
