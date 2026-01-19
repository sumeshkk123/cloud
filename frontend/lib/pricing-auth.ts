import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";

import { getPricingCookieSecret, PRICING_COOKIE_NAME, PRICING_COOKIE_MAX_AGE } from "@/lib/env";

export type PricingTokenPayload = {
  email: string;
  issuedAt: number;
  expiresAt: number;
};

function encodePayload(payload: PricingTokenPayload): string {
  const json = JSON.stringify(payload);
  const secret = getPricingCookieSecret();
  const signature = crypto.createHmac("sha256", secret).update(json).digest("hex");
  const token = Buffer.from(`${json}.${signature}`).toString("base64url");
  return token;
}

function decodeToken(token: string): PricingTokenPayload | null {
  try {
    const decoded = Buffer.from(token, "base64url").toString("utf8");
    const separatorIndex = decoded.lastIndexOf(".");
    if (separatorIndex === -1) {
      if (process.env.NODE_ENV !== "production") {
        console.warn("pricing-session decode failed: separator not found");
      }
      return null;
    }
    const json = decoded.slice(0, separatorIndex);
    const signature = decoded.slice(separatorIndex + 1);
    const secret = getPricingCookieSecret();
    const expectedSignature = crypto.createHmac("sha256", secret).update(json).digest("hex");
    const signatureBuffer = Buffer.from(signature, "hex");
    const expectedBuffer = Buffer.from(expectedSignature, "hex");
    if (signatureBuffer.length !== expectedBuffer.length) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(
          "pricing-session decode failed: signature length mismatch",
          signatureBuffer.length,
          expectedBuffer.length
        );
      }
      return null;
    }
    if (!crypto.timingSafeEqual(signatureBuffer, expectedBuffer)) {
      if (process.env.NODE_ENV !== "production") {
        console.warn("pricing-session decode failed: signature mismatch");
      }
      return null;
    }
    const payload = JSON.parse(json) as PricingTokenPayload;
    if (typeof payload.expiresAt !== "number" || Date.now() > payload.expiresAt) {
      if (process.env.NODE_ENV !== "production") {
        console.warn("pricing-session decode failed: token expired", payload.expiresAt, Date.now());
      }
      return null;
    }
    return payload;
  } catch {
    if (process.env.NODE_ENV !== "production") {
      console.warn("pricing-session decode failed: exception");
    }
    return null;
  }
}

export function createPricingVerifiedResponse(
  email: string,
  body: Record<string, unknown> = { ok: true },
  options?: { hostname?: string }
) {
  const issuedAt = Date.now();
  const expiresAt = issuedAt + PRICING_COOKIE_MAX_AGE * 1000;
  const token = encodePayload({ email, issuedAt, expiresAt });
  const response = NextResponse.json(body);
  const hostname = options?.hostname;
  const cookieDomain = !hostname || hostname === "localhost" || hostname === "127.0.0.1" ? undefined : `.${hostname}`;
  response.cookies.set({
    name: PRICING_COOKIE_NAME,
    value: token,
    maxAge: PRICING_COOKIE_MAX_AGE,
    httpOnly: true,
    path: "/",
    domain: cookieDomain,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production"
  });
  return response;
}

export function clearPricingCookieResponse() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: PRICING_COOKIE_NAME,
    value: "",
    maxAge: 0,
    path: "/"
  });
  return response;
}

export function isPricingVerified(request: NextRequest): { email: string } | null {
  const token = request.cookies.get(PRICING_COOKIE_NAME)?.value;
  if (!token) {
    return null;
  }
  const payload = decodeToken(token);
  if (!payload) {
    return null;
  }
  return { email: payload.email };
}

export function ensurePricingVerified(request: NextRequest) {
  const cookieValue = request.cookies.get(PRICING_COOKIE_NAME)?.value;
  if (process.env.NODE_ENV !== "production") {
    console.debug("pricing-session cookie present:", Boolean(cookieValue));
  }
  const verified = isPricingVerified(request);
  if (!verified) {
    const response = NextResponse.json({ error: "Verification required" }, { status: 401 });
    response.cookies.set({
      name: PRICING_COOKIE_NAME,
      value: "",
      maxAge: 0,
      path: "/"
    });
    return { verified: null, response } as const;
  }
  return { verified, response: null } as const;
}
