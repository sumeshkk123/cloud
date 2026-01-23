import { NextResponse } from "next/server";
import { generateOTP, storeOTP } from "@/lib/pricing-otp";

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  try {
    const { email } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    // Normalize email
    const normalizedEmail = email.trim().toLowerCase();
    
    // Validate email format
    if (!/.+@.+\..+/.test(normalizedEmail)) {
      return NextResponse.json({ error: "Invalid email format." }, { status: 400 });
    }

    // Generate and store OTP
    const otp = generateOTP();
    await storeOTP(normalizedEmail, otp, 10);

    // TODO: Send OTP via email
    // For now, just return success
    // In production, implement email sending here

    return NextResponse.json({ ok: true, message: "OTP sent successfully. Please check your email." });
  } catch (error) {
    console.error("[Pricing OTP] Error:", error);
    return NextResponse.json({ error: "Unable to process request. Please try again." }, { status: 500 });
  }
}
