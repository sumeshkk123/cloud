import { MapPin } from "lucide-react";

export type Region = {
  region: string;
  city: string;
  focus: string;
  contact: string;
};

const REGIONS: Region[] = [
  {
    region: "APAC",
    city: "Kochi, India",
    focus: "Product engineering, success desk, and multilingual support.",
    contact: "+91 9567 728 766"
  },
  {
    region: "Middle East",
    city: "Dubai, UAE",
    focus: "Enterprise consulting, compliance, and partner enablement.",
    contact: "+971 4 123 4567"
  },
  {
    region: "North America",
    city: "Austin, USA",
    focus: "Strategic advisory, AI innovation, and executive workshops.",
    contact: "+1 512 555 0184"
  }
];

export function ContactRegionsSection() {
  return (
    <section className="container space-y-12">
      <div className="max-w-3xl space-y-4">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Regional leadership ready to collaborate</h2>
        <p className="text-sm text-muted-foreground">
          Connect with the Cloud MLM Software office closest to your operations or emerging market.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {REGIONS.map((region) => (
          <article key={region.region} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <MapPin className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="text-lg font-semibold text-foreground">{region.region}</h3>
            <p className="text-sm text-muted-foreground">{region.city}</p>
            <p className="text-sm text-muted-foreground">{region.focus}</p>
            <p className="text-xs uppercase tracking-wide text-primary">{region.contact}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
