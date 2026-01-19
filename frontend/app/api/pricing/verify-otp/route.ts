import { NextResponse } from "next/server";

import { getStrapiToken, getStrapiUrl } from "@/lib/env";
import { createPricingVerifiedResponse } from "@/lib/pricing-auth";

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const strapiUrl = `${getStrapiUrl()}/api/pricing-access/verify-otp`;

  try {
    const response = await fetch(strapiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(getStrapiToken() ? { Authorization: `Bearer ${getStrapiToken()}` } : {})
      },
      body: JSON.stringify(body)
    });

    const result = await response.json().catch(() => null);

    if (!response.ok) {
      const message = result?.error || result?.message || "Failed to verify OTP.";
      return NextResponse.json({ error: message }, { status: response.status });
    }

    const email = typeof result?.data?.email === "string" ? result.data.email : undefined;
    if (!email) {
      return NextResponse.json({ error: "Missing verification details." }, { status: 500 });
    }

    const hostname = request.headers.get("host")?.split(":")[0];
    return createPricingVerifiedResponse(
      email,
      {
        ok: true,
        message: result?.message ?? "OTP verified successfully."
      },
      { hostname }
    );
  } catch (error) {
    return NextResponse.json({ error: "Unable to reach pricing service." }, { status: 502 });
  }
}
