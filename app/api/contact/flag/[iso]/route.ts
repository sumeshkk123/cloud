import { NextRequest, NextResponse } from "next/server";

const FLAG_CDN_BASE = "https://flagcdn.com";

/**
 * GET /api/contact/flag/[iso]
 * Redirects to flag image from CDN (flagcdn.com) for the given 2-letter ISO country code.
 * Used by contact page and admin contact to display country flags.
 */
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ iso: string }> }
) {
  const { iso } = await params;
  const code = (iso || "").toLowerCase().trim();
  if (!/^[a-z]{2}$/.test(code)) {
    return NextResponse.json({ error: "Invalid ISO code" }, { status: 400 });
  }
  const flagUrl = `${FLAG_CDN_BASE}/w80/${code}.png`;
  return NextResponse.redirect(flagUrl, 302);
}
