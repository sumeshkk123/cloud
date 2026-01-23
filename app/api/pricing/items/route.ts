import { NextRequest, NextResponse } from "next/server";

import { ensurePricingVerified } from "@/lib/pricing-auth";

export async function GET(request: NextRequest) {
  const { verified, response } = ensurePricingVerified(request);
  if (!verified) {
    return response;
  }

  try {
    // TODO: Implement pricing catalogue using Prisma
    // For now, return empty data
    return NextResponse.json({ ok: true, data: null });
  } catch (error) {
    return NextResponse.json({ error: "Unable to reach pricing service." }, { status: 502 });
  }
}
