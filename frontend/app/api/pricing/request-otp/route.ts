import { NextResponse } from "next/server";

import { getStrapiToken, getStrapiUrl } from "@/lib/env";

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const strapiUrl = `${getStrapiUrl()}/api/pricing-access/request-otp`;

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
      const message = result?.error || result?.message || "Failed to request OTP.";
      return NextResponse.json({ error: message }, { status: response.status });
    }

    return NextResponse.json({ ok: true, message: result?.message ?? "OTP sent successfully." });
  } catch (error) {
    return NextResponse.json({ error: "Unable to reach pricing service." }, { status: 502 });
  }
}
