import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, CalendarClock, Check, FileText, Mail, Phone } from "lucide-react";

export function FreeDemoFormSection({ contactHref }: { contactHref: string }) {
  return (
    <section
      id="demo-form"
      className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40"
    >
      <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)]">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            <CalendarClock className="h-4 w-4" aria-hidden />
            Guided sandbox programme
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Share your brief and book the walkthrough
          </h2>
          <p className="text-sm text-muted-foreground">
            Tell us about your compensation plans, tech stack, and launch timeline so we configure the environment, import sample data, and assemble the right specialists ahead of your session.
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
              <span>Select binary, unilevel, matrix, party, or hybrid scenarios to mirror stakeholder priorities.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
              <span>Provide anonymised enrolment, order, or commission extracts to validate analytics in minutes.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
              <span>Invite finance, compliance, field enablement, and IT leads so each team explores relevant workflows.</span>
            </li>
          </ul>
          <p className="text-sm text-muted-foreground">
            We confirm within one business day and share the prep checklist, sandbox credentials, and meeting links.
          </p>
        </div>
        <div className="space-y-4">
          <div className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="h-5 w-5" aria-hidden />
              </span>
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-foreground">Send your sandbox brief</h3>
                <p className="text-sm text-muted-foreground">
                  Attach programme details, existing system map, and any procurement requirements so we tailor the agenda.
                </p>
              </div>
            </div>
            <Button asChild size="sm" className="mt-4 w-full">
              <Link href="mailto:[email protected]?subject=Schedule%20a%20Free%20MLM%20Software%20Demo">
                Email [email protected]
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="h-5 w-5" aria-hidden />
              </span>
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-foreground">Speak with a specialist</h3>
                <p className="text-sm text-muted-foreground">
                  Call to align on goals, stakeholders, and timelines if you prefer a live intake before we share access.
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="tel:+918590137119">
                  Call +91 85901 37119
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="sm" className="w-full">
                <Link href="tel:+918129184448">
                  24/7 line +91 81291 84448
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <FileText className="h-5 w-5" aria-hidden />
              </span>
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-foreground">Request NDAs or compliance packs</h3>
                <p className="text-sm text-muted-foreground">
                  Need security documentation, DPAs, or procurement summaries before scheduling? Let us know and we’ll circulate the pack.
                </p>
              </div>
            </div>
            <Button asChild variant="outline" size="sm" className="mt-4 w-full">
              <Link href={contactHref}>
                Ask for diligence documents
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

