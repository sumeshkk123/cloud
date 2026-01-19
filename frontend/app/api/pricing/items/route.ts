import { NextRequest, NextResponse } from "next/server";

import { ensurePricingVerified } from "@/lib/pricing-auth";
import { getStrapiToken, getStrapiUrl } from "@/lib/env";

export async function GET(request: NextRequest) {
  const { verified, response } = ensurePricingVerified(request);
  if (!verified) {
    return response;
  }

  try {
    const strapiUrl = `${getStrapiUrl()}/api/pricing-access/catalogue`;
    const strapiResponse = await fetch(strapiUrl, {
      method: "GET",
      headers: {
        ...(getStrapiToken() ? { Authorization: `Bearer ${getStrapiToken()}` } : {})
      },
      cache: "no-store"
    });

    const result = await strapiResponse.json().catch(() => null);

    if (!strapiResponse.ok) {
      const message = result?.error || result?.message || "Failed to fetch pricing items.";
      return NextResponse.json({ error: message }, { status: strapiResponse.status });
    }

    return NextResponse.json({ ok: true, data: result?.data ?? null });
  } catch (error) {
    return NextResponse.json({ error: "Unable to reach pricing service." }, { status: 502 });
  }
}
