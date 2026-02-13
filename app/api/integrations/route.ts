import { NextResponse } from 'next/server';

/** Stub: integrations table removed; return empty array so frontend does not break. */
export async function GET() {
  return NextResponse.json([], {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
    },
  });
}
