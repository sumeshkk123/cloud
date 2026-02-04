import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prisma';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const locale = searchParams.get('locale') || 'en';

    const contactAddresses = await prisma.contact_addresses.findMany({
      where: { locale },
      orderBy: { country: 'asc' },
    });

    // Parse phones JSON for each address
    const addressesWithParsedPhones = contactAddresses.map((address: any) => {
      let phonesArray: string[] = [];
      if (address.phones) {
        try {
          if (Array.isArray(address.phones)) {
            phonesArray = address.phones;
          } else if (typeof address.phones === 'string') {
            phonesArray = JSON.parse(address.phones);
          }
        } catch (e) {
          console.error('[GET /api/contact-addresses] Error parsing phones:', e);
        }
      }

      return {
        id: address.id,
        country: address.country,
        place: address.place,
        address: address.address,
        phones: phonesArray,
        whatsapp: address.whatsapp,
        email: address.email,
        flag: address.flag,
        locale: address.locale,
      };
    });

    return NextResponse.json(addressesWithParsedPhones, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        'CDN-Cache-Control': 'public, s-maxage=300',
        'Vercel-CDN-Cache-Control': 'public, s-maxage=300',
      },
    });
  } catch (error: any) {
    console.error('[GET /api/contact-addresses] Error:', error);
    
    // Check if it's a table doesn't exist error
    if (error?.code === 'P2021' || error?.message?.includes('does not exist') || error?.message?.includes('relation')) {
      return NextResponse.json([], { status: 200 }); // Return empty array if table doesn't exist
    }

    return NextResponse.json(
      { error: 'Failed to fetch contact addresses' },
      { status: 500 }
    );
  }
}
