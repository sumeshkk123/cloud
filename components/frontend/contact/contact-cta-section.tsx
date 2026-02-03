import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail } from "lucide-react";

interface ContactCtaSectionProps {
  contactHref: string;
  resourcesHref: string;
}

export function ContactCtaSection({ contactHref, resourcesHref }: ContactCtaSectionProps) {
  return (
    <section className="container">
      <div className="rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-10 text-center shadow-sm">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Let&apos;s build the roadmap together</h2>
        <p className="mt-4 text-sm text-muted-foreground">
          Share your objectives and we will align Cloud MLM Software sales, success, and innovation specialists to respond with clarity and speed.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href={contactHref}>
              Submit your requirements
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={resourcesHref}>
              Browse resources
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link href="mailto:[email protected]">
              Email us directly
              <Mail className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
