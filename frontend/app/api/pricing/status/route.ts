import { NextRequest, NextResponse } from "next/server";

import { isPricingVerified } from "@/lib/pricing-auth";

export async function GET(request: NextRequest) {
  const verified = isPricingVerified(request);
  return NextResponse.json({ verified: Boolean(verified) });
}
