import { CheckCircle2 } from "lucide-react";

type ProofPoint = { description: string };

const TRUST_PROOFS_LEFT: ProofPoint[] = [
  { description: "Built on audited, enterprise-grade stacks hardened for global scale." },
  { description: "Security layers keep performance high while protecting sensitive data." },
  { description: "Post-launch support with strict SLAs and success managers." },
  { description: "Friendly engineering and success teams invested in client goals." },
  { description: "Cloud MLM Software adapts precisely to the strategies you imagine." }
];

const TRUST_PROOFS_RIGHT: ProofPoint[] = [
  { description: "Simplifies marketing, enrolment, and payout operations for every network." },
  { description: "Intuitive experiences for admins, distributors, and customer care." },
  { description: "Unlimited support for binary, matrix, unilevel, donation, and custom plans." },
  { description: "Automation and tested modules handle complex network marketing workflows." },
  { description: "Live demos showcase compensation models before you invest." }
];

export function AboutCompanyTrustSection() {
  return (
    <section className="container space-y-10">
      <div className="max-w-3xl space-y-4">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Why leaders trust Cloud MLM Software
        </h2>
        <p className="text-sm text-muted-foreground">
          Two decades of combined engineering, analytics, and operational expertise position our teams to solve
          high-stakes challenges for global direct selling companies.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <ul className="space-y-3 text-sm text-muted-foreground">
          {TRUST_PROOFS_LEFT.map((item) => (
            <li key={item.description} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              {item.description}
            </li>
          ))}
        </ul>
        <ul className="space-y-3 text-sm text-muted-foreground">
          {TRUST_PROOFS_RIGHT.map((item) => (
            <li key={item.description} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              {item.description}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
