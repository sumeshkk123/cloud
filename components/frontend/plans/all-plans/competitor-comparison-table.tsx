"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type CompetitorComparisonRow = {
  capability: string;
  spillover: string;
  binary: string;
  matrix: string;
  tags: string[];
};

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Automation", value: "automation" },
  { label: "Compliance", value: "compliance" },
  { label: "Analytics", value: "analytics" },
  { label: "Enablement", value: "enablement" },
  { label: "Innovation", value: "innovation" }
] as const;

export default function CompetitorComparisonTable({
  rows
}: {
  rows: CompetitorComparisonRow[];
}) {
  const [activeFilter, setActiveFilter] = useState<(typeof FILTERS)[number]["value"]>("all");

  const filteredRows = useMemo(() => {
    if (activeFilter === "all") {
      return rows;
    }
    return rows.filter((row) => row.tags.includes(activeFilter));
  }, [activeFilter, rows]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((filter) => (
          <Button
            key={filter.value}
            type="button"
            size="sm"
            variant={activeFilter === filter.value ? "default" : "outline"}
            className={cn(
              activeFilter === filter.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
            )}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </Button>
        ))}
      </div>
      <div className="overflow-x-auto rounded-3xl border border-border/60 bg-background/80 shadow-sm">
        <table className="min-w-full divide-y divide-border/60 text-left text-sm">
          <caption className="sr-only">
            Benchmark of Cloud MLM Software spillover binary capabilities against industry competitors
          </caption>
          <thead className="bg-muted/40 text-xs uppercase tracking-wide text-muted-foreground">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium text-foreground">
                Capability
              </th>
              <th scope="col" className="px-6 py-3 font-medium text-primary">
                Cloud MLM Software
              </th>
              <th scope="col" className="px-6 py-3 font-medium text-foreground">
                Volochain / Epixel / Infinite MLM
              </th>
              <th scope="col" className="px-6 py-3 font-medium text-foreground">
                Notes
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60">
            {filteredRows.map((row) => (
              <tr key={`${row.capability}-${row.spillover}`} className="align-top">
                <th scope="row" className="px-6 py-4 text-sm font-semibold text-foreground">
                  {row.capability}
                </th>
                <td className="px-6 py-4 text-sm text-muted-foreground">{row.spillover}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{row.binary}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{row.matrix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
