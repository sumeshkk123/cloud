import { Typography } from "@/components/ui/typography";
import { getStatIcon, splitLabelIntoLines } from "./utils/stat-helpers";
import type { HomepageHeroStat } from "@/types/homepage";
import * as React from "react";

interface HeroStatsProps {
  outcomesLabel: string;
  stats: HomepageHeroStat[];
}

export function HeroStats({ outcomesLabel, stats }: HeroStatsProps) {
  return (
    <div className="mt-10 w-full">
      <Typography variant="p" className="text-xs font-semibold uppercase text-gray-400 mb-6">
        {outcomesLabel}
      </Typography>
      <div className="relative grid grid-cols-2 sm:grid-cols-4 bg-dark-900 justify-center border-y border-dotted border-primary/40 py-2">
        {stats.map((stat, index) => {
          const Icon = getStatIcon(stat.iconName, stat.label);
          const { firstLine, secondLine } = splitLabelIntoLines(
            stat.label,
            stat.firstLine,
            stat.secondLine
          );

          return (
            <div key={stat.label} className="group relative flex flex-col items-center gap-4 text-center py-6 transition-transform hover:scale-105">
              {index > 0 && (
                <div className="absolute left-0 top-0 bottom-0 w-px border-l border-dotted border-primary/40" />
              )}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 border border-primary/30 transition-all group-hover:bg-primary/20">
                <Icon className="h-7 w-7 text-slate-300/90 transition-transform duration-300 group-hover:scale-x-[-1]" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium text-white leading-tight">{firstLine}</span>
                {secondLine && (
                  <span className="text-sm font-medium text-white leading-tight">{secondLine}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
