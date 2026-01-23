import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { BulletList } from "@/components/ui/bullet-list";
import { SmartImage } from "@/components/ui/smart-image";
import * as React from "react";

interface HeroPlatformSnapshotProps {
  features?: string[];
}

export function HeroPlatformSnapshot({ features }: HeroPlatformSnapshotProps) {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
      <div className="relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-border/30 bg-card text-foreground shadow-[0_40px_80px_-48px_rgba(15,23,42,0.45)]">
        <div className="flex items-center justify-between gap-4 px-6 pt-8">
          <Badge variant="default">
            Platform snapshot
          </Badge>
          <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Real-time sync
          </span>
        </div>
        <div className="px-6">
          <Typography as="h2" variant="h2" className="">Launch boldly, scale globally</Typography>
          <Typography variant="p" className="mt-2 text-muted-foreground">
            Blueprint payouts, onboard teams, and secure operations without slowing growth.
          </Typography>
        </div>
        {features && Array.isArray(features) && features.length > 0 && (
          <div className="px-6">
            <BulletList items={features} />
          </div>
        )}
        <div className="relative px-6 pb-8">
          <div className="relative overflow-hidden rounded-3xl border border-border/30 bg-muted/40 shadow-xl">
            <SmartImage
              src="/wp-content/uploads/2024/06/cloudDashboardDemo.webp"
              alt="Cloud MLM dashboard"
              width={600}
              height={360}
              className="w-full rounded-2xl border border-border/50 object-cover"
            />
            <div className="absolute bottom-4 left-4 rounded-2xl border border-border/50 bg-card/90 px-4 py-3 text-left shadow-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-muted-foreground">AI signals</p>
              <p className="text-sm font-semibold text-muted-foreground">Comp plan health: 98%</p>
            </div>
            <div className="absolute top-4 right-4 rounded-full bg-emerald-400 px-3 py-1 text-[11px] font-semibold text-emerald-950 shadow">
              +4.6% growth
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
