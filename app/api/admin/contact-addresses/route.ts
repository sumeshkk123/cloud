import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/db/prisma';
import { randomUUID } from 'crypto';
import { checkPermission } from '@/lib/utils/permissions-server';
import { Permission } from '@/lib/permissions';

function unauthorized() {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}

function forbidden() {
  return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return unauthorized();

    const hasAccess = await checkPermission(Permission.CONTENT_VIEW);
    if (!hasAccess) return forbidden();

    const { searchParams } = request.nextUrl;
    const id = searchParams.get('id');
    const allTranslations = searchParams.get('all') === 'true';
    const locale = searchParams.get('locale') || 'en';

    if (id) {
      // If all translations requested, return all locales for this address (linked by country)
      if (allTranslations) {
        const entry = await prisma.contact_addresses.findUnique({
          where: { id },
        });

        if (!entry) {
          return NextResponse.json({ error: 'Contact address not found' }, { status: 404 });
        }

        // Find all entries with the same country (translations)
        const translations = await prisma.contact_addresses.findMany({
          where: { country: entry.country },
          orderBy: { locale: 'asc' },
        });

        // Parse phones for each translation
        const translationsWithParsedPhones = translations.map((t: any) => {
          let phonesArray: string[] = [];
          if (t.phones) {
            if (Array.isArray(t.phones)) {
              phonesArray = t.phones;
            } else if (typeof t.phones === 'string') {
              try {
                phonesArray = JSON.parse(t.phones);
              } catch {
                phonesArray = [t.phones];
              }
            }
          }
          return {
            ...t,
            phones: phonesArray,
          };
        });

        return NextResponse.json({ translations: translationsWithParsedPhones });
      }

      const address = await prisma.contact_addresses.findUnique({
        where: { id },
      });

      if (!address) {
        return NextResponse.json({ error: 'Contact address not found' }, { status: 404 });
      }

      let phonesArray: string[] = [];
      if (address.phones) {
        if (Array.isArray(address.phones)) {
          phonesArray = address.phones;
        } else if (typeof address.phones === 'string') {
          try {
            phonesArray = JSON.parse(address.phones);
          } catch {
            phonesArray = [address.phones];
          }
        }
      }

      return NextResponse.json({
        ...address,
        phones: phonesArray,
      });
    }

    const addresses = await prisma.contact_addresses.findMany({
      where: { locale: 'en' },
      orderBy: { createdAt: 'desc' },
    });

    // Parse phones for each address
    const addressesWithParsedPhones = addresses.map((addr: any) => {
      let phonesArray: string[] = [];
      if (addr.phones) {
        if (Array.isArray(addr.phones)) {
          phonesArray = addr.phones;
        } else if (typeof addr.phones === 'string') {
          try {
            phonesArray = JSON.parse(addr.phones);
          } catch {
            phonesArray = [addr.phones];
          }
        }
      }
      return {
        ...addr,
        phones: phonesArray,
      };
    });

    return NextResponse.json({ items: addressesWithParsedPhones });
  } catch (error: any) {
    console.error('[GET /api/admin/contact-addresses] Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contact addresses', items: [] },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return unauthorized();

    const hasAccess = await checkPermission(Permission.CONTENT_CREATE);
    if (!hasAccess) return forbidden();

    const body = await request.json();
    const { country, place, address, phones, whatsapp, email, locale = 'en' } = body;

    if (!country || !address || !email) {
      return NextResponse.json(
        { error: 'Country, address, and email are required' },
        { status: 400 }
      );
    }

    let phonesArray: string[] = [];
    if (phones !== null && phones !== undefined && phones !== '') {
      if (Array.isArray(phones)) {
        phonesArray = phones.filter((p: any) => p && String(p).trim() !== '');
      } else {
        const trimmed = String(phones).trim();
        if (trimmed) phonesArray = [trimmed];
      }
    }

    const contactAddress = await prisma.contact_addresses.create({
      data: {
        id: randomUUID(),
        country: country.trim(),
        place: place ? place.trim() : null,
        address: address.trim(),
        phones: phonesArray,
        whatsapp: whatsapp ? whatsapp.trim() : null,
        email: email.trim(),
        locale: String(locale),
        updatedAt: new Date(),
      },
    });

    // Parse phones for response
    let phonesResult: string[] = [];
    if (contactAddress.phones) {
      if (Array.isArray(contactAddress.phones)) {
        phonesResult = contactAddress.phones.filter((p: any): p is string => typeof p === 'string');
      } else if (typeof contactAddress.phones === 'string') {
        try {
          const parsed = JSON.parse(contactAddress.phones);
          if (Array.isArray(parsed)) {
            phonesResult = parsed.filter((p: any): p is string => typeof p === 'string');
          } else {
            phonesResult = [contactAddress.phones];
          }
        } catch {
          phonesResult = [contactAddress.phones];
        }
      }
    }

    return NextResponse.json({
      ...contactAddress,
      phones: phonesResult,
    });
  } catch (error: any) {
    console.error('[POST /api/admin/contact-addresses] Error:', error);
    
    // Check if it's a table doesn't exist error
    if (error?.code === 'P2021' || error?.message?.includes('does not exist') || error?.message?.includes('relation') || error?.message?.includes('contact_addresses')) {
      return NextResponse.json(
        { 
          error: 'Contact addresses table does not exist. Please run: npx prisma db push',
          needsTableCreation: true
        },
        { status: 500 }
      );
    }
    
    // Check if it's a column doesn't exist error (whatsapp or place field)
    if (error?.code === 'P2011' || error?.message?.includes('whatsapp') || error?.message?.includes('place') || error?.message?.includes('Unknown column')) {
      return NextResponse.json(
        { 
          error: 'Database schema is out of date. Please run: npx prisma db push',
          needsSchemaUpdate: true
        },
        { status: 500 }
      );
    }

    // Provide more detailed error message
    let errorMessage = 'Failed to create contact address';
    if (error?.message) {
      errorMessage = error.message;
    } else if (error?.code) {
      errorMessage = `Database error (${error.code}): ${error.message || 'Unknown error'}`;
    }
    
    return NextResponse.json(
      { 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? {
          code: error?.code,
          message: error?.message,
          meta: error?.meta,
        } : undefined
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return unauthorized();

    const hasAccess = await checkPermission(Permission.CONTENT_EDIT);
    if (!hasAccess) return forbidden();

    const { searchParams } = request.nextUrl;
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'ID is required' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { country, place, address, phones, whatsapp, email, locale = 'en' } = body;

    if (!country || !address || !email) {
      return NextResponse.json(
        { error: 'Country, address, and email are required' },
        { status: 400 }
      );
    }

    if (!locale) {
      return NextResponse.json(
        { error: 'Locale is required' },
        { status: 400 }
      );
    }

    let phonesArray: string[] = [];
    if (phones !== null && phones !== undefined && phones !== '') {
      if (Array.isArray(phones)) {
        phonesArray = phones
          .map((p: any) => String(p).trim())
          .filter((p: string) => p !== '' && p !== 'null' && p !== 'undefined');
      } else if (typeof phones === 'string') {
        try {
          const parsed = JSON.parse(phones);
          if (Array.isArray(parsed)) {
            phonesArray = parsed
              .map((p: any) => String(p).trim())
              .filter((p: string) => p !== '' && p !== 'null' && p !== 'undefined');
          } else {
            const trimmed = String(parsed).trim();
            if (trimmed && trimmed !== 'null' && trimmed !== 'undefined') {
              phonesArray = [trimmed];
            }
          }
        } catch {
          const trimmed = String(phones).trim();
          if (trimmed && trimmed !== 'null' && trimmed !== 'undefined') {
            phonesArray = [trimmed];
          }
        }
      } else {
        const trimmed = String(phones).trim();
        if (trimmed && trimmed !== 'null' && trimmed !== 'undefined') {
          phonesArray = [trimmed];
        }
      }
    }

    // Get the original entry
    const existing = await prisma.contact_addresses.findUnique({
      where: { id },
    });

    if (!existing) {
      return NextResponse.json(
        { error: 'Contact address not found.' },
        { status: 404 }
      );
    }

    // Check if we're updating the same locale or creating a translation
    const targetLocale = String(locale);

    // If locale is different and entry with same country+locale exists, update that one
    if (targetLocale !== existing.locale) {
      const existingTranslation = await prisma.contact_addresses.findFirst({
        where: {
          country: country.trim(),
          locale: targetLocale,
        },
      });

      // If translation exists, update it
      if (existingTranslation) {
        await prisma.contact_addresses.update({
          where: { id: existingTranslation.id },
          data: {
            phones: phonesArray,
            place: place ? place.trim() : null,
            address: address.trim(),
            whatsapp: whatsapp ? whatsapp.trim() : null,
            email: email.trim(),
            updatedAt: new Date(),
          },
        });

        const updated = await prisma.contact_addresses.findUnique({
          where: { id: existingTranslation.id },
        });

        let phonesResult: string[] = [];
        if (updated?.phones) {
          if (Array.isArray(updated.phones)) {
            phonesResult = updated.phones.filter((p: any): p is string => typeof p === 'string');
          } else if (typeof updated.phones === 'string') {
            try {
              const parsed = JSON.parse(updated.phones);
              if (Array.isArray(parsed)) {
                phonesResult = parsed.filter((p: any): p is string => typeof p === 'string');
              } else {
                phonesResult = [updated.phones];
              }
            } catch {
              phonesResult = [updated.phones];
            }
          }
        }

        return NextResponse.json({
          ...updated,
          phones: phonesResult,
        });
      } else {
        // Create new translation entry
        const newRecord = await prisma.contact_addresses.create({
          data: {
            id: randomUUID(),
            country: country.trim(),
            place: place ? place.trim() : null,
            address: address.trim(),
            phones: phonesArray,
            whatsapp: whatsapp ? whatsapp.trim() : null,
            email: email.trim(),
            locale: targetLocale,
            updatedAt: new Date(),
          },
        });

        let phonesResult2: string[] = [];
        if (newRecord.phones) {
          if (Array.isArray(newRecord.phones)) {
            phonesResult2 = newRecord.phones.filter((p: any): p is string => typeof p === 'string');
          } else if (typeof newRecord.phones === 'string') {
            try {
              const parsed = JSON.parse(newRecord.phones);
              if (Array.isArray(parsed)) {
                phonesResult2 = parsed.filter((p: any): p is string => typeof p === 'string');
              } else {
                phonesResult2 = [newRecord.phones];
              }
            } catch {
              phonesResult2 = [newRecord.phones];
            }
          }
        }

        return NextResponse.json({
          ...newRecord,
          phones: phonesResult2,
        });
      }
    }

    // Update existing entry (same locale)
    const updatedRecord = await prisma.contact_addresses.update({
      where: { id },
      data: {
        phones: phonesArray,
        country: country.trim(),
        place: place ? place.trim() : null,
        address: address.trim(),
        whatsapp: whatsapp ? whatsapp.trim() : null,
        email: email.trim(),
        locale: targetLocale,
        updatedAt: new Date(),
      },
    });

    let phonesFromDb: string[] = [];
    if (updatedRecord.phones) {
      if (Array.isArray(updatedRecord.phones)) {
        phonesFromDb = updatedRecord.phones;
      } else if (typeof updatedRecord.phones === 'string') {
        try {
          phonesFromDb = JSON.parse(updatedRecord.phones);
        } catch {
          phonesFromDb = [updatedRecord.phones];
        }
      }
    }

    const contactAddress = {
      id: updatedRecord.id,
      country: updatedRecord.country,
      address: updatedRecord.address,
      phones: phonesFromDb,
      whatsapp: updatedRecord.whatsapp,
      email: updatedRecord.email,
      locale: updatedRecord.locale,
      createdAt: updatedRecord.createdAt,
      updatedAt: updatedRecord.updatedAt,
    };

    return NextResponse.json(contactAddress);
  } catch (error: any) {
    console.error('[PUT /api/admin/contact-addresses] Error:', error);
    
    // Check if it's a table doesn't exist error
    if (error?.code === 'P2021' || error?.message?.includes('does not exist') || error?.message?.includes('relation') || error?.message?.includes('contact_addresses')) {
      return NextResponse.json(
        { 
          error: 'Contact addresses table does not exist. Please run: npx prisma db push',
          needsTableCreation: true
        },
        { status: 500 }
      );
    }
    
    // Check if it's a column doesn't exist error (whatsapp or place field)
    if (error?.code === 'P2011' || error?.message?.includes('whatsapp') || error?.message?.includes('place') || error?.message?.includes('Unknown column')) {
      return NextResponse.json(
        { 
          error: 'Database schema is out of date. Please run: npx prisma db push',
          needsSchemaUpdate: true
        },
        { status: 500 }
      );
    }

    // Provide more detailed error message
    let errorMessage = 'Failed to update contact address';
    if (error?.message) {
      errorMessage = error.message;
    } else if (error?.code) {
      errorMessage = `Database error (${error.code}): ${error.message || 'Unknown error'}`;
    }
    
    return NextResponse.json(
      { 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? {
          code: error?.code,
          message: error?.message,
          meta: error?.meta,
        } : undefined
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return unauthorized();

    const hasAccess = await checkPermission(Permission.CONTENT_DELETE);
    if (!hasAccess) return forbidden();

    const { searchParams } = request.nextUrl;
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'ID is required' },
        { status: 400 }
      );
    }

    // Get the entry first to find its country
    const entry = await prisma.contact_addresses.findUnique({
      where: { id },
      select: { country: true },
    });

    if (entry) {
      // Delete all translations for this country (same country = same location, different locales)
      await prisma.contact_addresses.deleteMany({
        where: { country: entry.country },
      });
    } else {
      // If entry not found, try to delete by ID anyway
      await prisma.contact_addresses.delete({
        where: { id },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('[DELETE /api/admin/contact-addresses] Error:', error);
    
    // Check if it's a table doesn't exist error
    if (error?.code === 'P2021' || error?.message?.includes('does not exist') || error?.message?.includes('relation') || error?.message?.includes('contact_addresses')) {
      return NextResponse.json(
        { 
          error: 'Contact addresses table does not exist. Please run: npx prisma db push',
          needsTableCreation: true
        },
        { status: 500 }
      );
    }

    // Provide more detailed error message
    let errorMessage = 'Failed to delete contact address';
    if (error?.message) {
      errorMessage = error.message;
    } else if (error?.code) {
      errorMessage = `Database error (${error.code}): ${error.message || 'Unknown error'}`;
    }
    
    return NextResponse.json(
      { 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? {
          code: error?.code,
          message: error?.message,
          meta: error?.meta,
        } : undefined
      },
      { status: 500 }
    );
  }
}
