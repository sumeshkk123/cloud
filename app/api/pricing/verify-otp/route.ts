import { NextResponse } from "next/server";
import { createPricingVerifiedResponse } from "@/lib/pricing-auth";
import { verifyOTP } from "@/lib/pricing-otp";

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  try {
    const { email, otp } = body;

    if (!email || !otp) {
      return NextResponse.json({ error: "Email and OTP are required." }, { status: 400 });
    }

    // Normalize email and OTP
    const normalizedEmail = String(email).trim().toLowerCase();
    const normalizedOtp = String(otp).replace(/\D/g, "").trim();
    
    if (!normalizedOtp || normalizedOtp.length !== 6) {
      return NextResponse.json({ error: "Invalid OTP format. Please enter a 6-digit code." }, { status: 400 });
    }

    // Verify OTP
    const isValid = await verifyOTP(normalizedEmail, normalizedOtp);

    if (!isValid) {
      return NextResponse.json({ error: "Invalid or expired OTP. Please try again." }, { status: 400 });
    }

    // Create verified session cookie
    const hostname = request.headers.get("host")?.split(":")[0];
    return createPricingVerifiedResponse(
      normalizedEmail,
      {
        ok: true,
        message: "OTP verified successfully."
      },
      { hostname }
    );
  } catch (error) {
    console.error("[Pricing OTP Verify] Error:", error);
    return NextResponse.json({ error: "Unable to verify OTP. Please try again." }, { status: 500 });
  }
}
