import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/db/prisma';
import {
  listDemoItems,
  listDemoItemsWithLocales,
  getDemoItemById,
  createDemoItem,
  updateDemoItem,
  deleteDemoItem,
  getAllDemoItemTranslations,
} from '@/lib/api/demo-items';

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const allTranslations = searchParams.get('all') === 'true';
    const withTranslations = searchParams.get('withTranslations') === 'true';
    const locale = searchParams.get('locale') || 'en';
    
    console.log('[API /admin/demo-items] Request params:', { id, allTranslations, withTranslations, locale });

    if (id) {
      if (allTranslations) {
        // Use raw SQL first so edit form gets data when table has data (same DB as list)
        const getStr = (r: Record<string, unknown>, k: string): string =>
          (r[k] ?? (r as Record<string, unknown>)[k.toLowerCase()] ?? '') as string;
        const getJson = (r: Record<string, unknown>, k: string): unknown => {
          const v = r[k] ?? (r as Record<string, unknown>)[k.toLowerCase()];
          if (v == null) return null;
          if (typeof v === 'string') try { return JSON.parse(v); } catch { return null; }
          return v;
        };
        let translations: Array<{
          id: string;
          icon: string;
          image: string;
          title: string | null;
          adminDemoTitle: string;
          adminDemoFeatures: string[] | null;
          distributorsDemoTitle: string;
          distributorsDemoFeatures: string[] | null;
          locale: string;
          showOnHomePage: boolean;
          createdAt: Date;
          updatedAt: Date;
        }> = [];
        try {
          const { Prisma } = await import('@prisma/client');
          const byId = await prisma.$queryRaw<Array<Record<string, unknown>>>(
            Prisma.sql`SELECT * FROM demo_items WHERE id = ${id} LIMIT 1`
          );
          const row = Array.isArray(byId) ? byId[0] : null;
          if (row) {
            const iconForGroup = getStr(row, 'icon');
            let rawAll: Array<Record<string, unknown>>;
            if (!iconForGroup || iconForGroup.trim() === '') {
              rawAll = [row];
            } else {
              rawAll = await prisma.$queryRaw<Array<Record<string, unknown>>>(
                Prisma.sql`SELECT * FROM demo_items WHERE icon = ${iconForGroup} ORDER BY locale ASC`
              );
              if (!Array.isArray(rawAll)) rawAll = [row];
            }
            const englishRow = rawAll.find((r) => getStr(r, 'locale') === 'en') ?? rawAll[0];
            const sharedIcon = englishRow ? getStr(englishRow, 'icon') : getStr(row, 'icon');
            const sharedImage = englishRow ? getStr(englishRow, 'image') : getStr(row, 'image');
            const sharedTitle = (englishRow?.title ?? (englishRow as Record<string, unknown>)?.title ?? row?.title ?? (row as Record<string, unknown>)?.title ?? null) as string | null;
            const getBool = (r: Record<string, unknown>, k: string): boolean => {
              const v = r[k] ?? (r as Record<string, unknown>)[(k === 'showOnHomePage' ? 'showonhomepage' : k)];
              return v === true || v === 'true';
            };
            const sharedShowOnHomePage = englishRow ? getBool(englishRow as Record<string, unknown>, 'showOnHomePage') : getBool(row, 'showOnHomePage');
            translations = rawAll.map((r) => ({
              id: String(getStr(r, 'id')),
              icon: sharedIcon || getStr(r, 'icon'),
              image: sharedImage || getStr(r, 'image'),
              title: (r.title ?? (r as Record<string, unknown>).title ?? sharedTitle ?? null) as string | null,
              adminDemoTitle: getStr(r, 'adminDemoTitle') || getStr(r, 'admindemotitle') || '',
              adminDemoFeatures: getJson(r, 'adminDemoFeatures') as string[] | null,
              distributorsDemoTitle: getStr(r, 'distributorsDemoTitle') || getStr(r, 'distributorsdemotitle') || '',
              distributorsDemoFeatures: getJson(r, 'distributorsDemoFeatures') as string[] | null,
              locale: getStr(r, 'locale') || 'en',
              showOnHomePage: getBool(r, 'showOnHomePage') || sharedShowOnHomePage,
              createdAt: (r.createdAt ?? (r as Record<string, unknown>).createdat) as Date,
              updatedAt: (r.updatedAt ?? (r as Record<string, unknown>).updatedat) as Date,
            }));
          }
        } catch (rawErr) {
          console.error('[API /admin/demo-items] Raw translations failed:', rawErr);
        }
        if (translations.length === 0) {
          const fromDb = await getAllDemoItemTranslations(id);
          translations = fromDb.map((t) => ({
            ...t,
            title: t.title ?? null,
            adminDemoFeatures: t.adminDemoFeatures ?? null,
            distributorsDemoFeatures: t.distributorsDemoFeatures ?? null,
            showOnHomePage: t.showOnHomePage ?? false,
          }));
        }
        return NextResponse.json({ translations });
      }

      const item = await getDemoItemById(id, locale);
      if (!item) {
        return NextResponse.json({ error: 'Demo item not found.' }, { status: 404 });
      }
      return NextResponse.json(item);
    }

    // If withTranslations is true, use single-query list (avoids N+1)
    if (withTranslations) {
      try {
        const itemsWithLocales = await listDemoItemsWithLocales(locale || 'en');
        console.log('[API /admin/demo-items] listDemoItemsWithLocales returned:', itemsWithLocales.length, 'items');
        return NextResponse.json(itemsWithLocales, {
          headers: { 'Cache-Control': 'private, max-age=15, stale-while-revalidate=30' },
        });
      } catch (error) {
        console.error('[API /admin/demo-items] Error in listDemoItemsWithLocales:', error);
        // Fallback to simple list if withLocales fails
        const items = await listDemoItems(locale);
        const itemsWithLocales = items.map(item => ({
          ...item,
          availableLocales: [item.locale],
        }));
        return NextResponse.json(itemsWithLocales, {
          headers: { 'Cache-Control': 'private, max-age=15, stale-while-revalidate=30' },
        });
      }
    }

    let items = await listDemoItems(locale);
    let usedRawFallback = false;
    console.log('[API /admin/demo-items] listDemoItems returned:', items.length, 'items for locale:', locale);

    // If Prisma returns empty but DB has data, try raw query (schema/connection check)
    if (items.length === 0) {
      try {
        // Use Prisma.sql for parameterized query; PostgreSQL lowercases unquoted identifiers
        const { Prisma } = await import('@prisma/client');
        const raw = await prisma.$queryRaw<Array<Record<string, unknown>>>(
          Prisma.sql`SELECT * FROM demo_items WHERE locale = ${locale} ORDER BY id DESC`
        );
        console.log('[API /admin/demo-items] Raw query returned:', raw?.length ?? 0, 'items', raw?.[0] ? '(first row keys: ' + Object.keys(raw[0]).join(',') + ')' : '');
        if (raw && raw.length > 0) {
          const getStr = (r: Record<string, unknown>, k: string): string =>
            (r[k] ?? r[k.toLowerCase()] ?? '') as string;
          const getJson = (r: Record<string, unknown>, k: string): unknown => {
            const v = r[k] ?? r[k.toLowerCase()];
            if (v == null) return null;
            if (typeof v === 'string') try { return JSON.parse(v); } catch { return null; }
            return v;
          };
          const getBool = (r: Record<string, unknown>, k: string): boolean => {
            const v = r[k] ?? (r as Record<string, unknown>)[(k === 'showOnHomePage' ? 'showonhomepage' : k)];
            if (v === true || v === 'true') return true;
            if (v === false || v === 'false') return false;
            return false;
          };
          items = raw.map((row) => ({
            id: String(getStr(row, 'id')),
            icon: getStr(row, 'icon') || '',
            image: getStr(row, 'image') || '',
            title: (row.title ?? (row as Record<string, unknown>).title ?? null) as string | null,
            adminDemoTitle: getStr(row, 'adminDemoTitle') || getStr(row, 'admindemotitle') || '',
            adminDemoFeatures: getJson(row, 'adminDemoFeatures') as string[] | null,
            distributorsDemoTitle: getStr(row, 'distributorsDemoTitle') || getStr(row, 'distributorsdemotitle') || '',
            distributorsDemoFeatures: getJson(row, 'distributorsDemoFeatures') as string[] | null,
            locale: getStr(row, 'locale') || locale,
            showOnHomePage: getBool(row, 'showOnHomePage'),
            createdAt: (row.createdAt ?? row.createdat) as Date,
            updatedAt: (row.updatedAt ?? row.updatedat) as Date,
          }));
          usedRawFallback = true;
        }
      } catch (rawErr) {
        console.error('[API /admin/demo-items] Raw query failed:', rawErr);
      }
    }

    const headers: Record<string, string> = { 'Cache-Control': 'private, max-age=15, stale-while-revalidate=30' };
    if (usedRawFallback && process.env.NODE_ENV === 'development') {
      headers['X-Demo-Source'] = 'raw-fallback';
    }
    return NextResponse.json(items, { headers });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const {
      icon,
      image,
      title,
      adminDemoTitle,
      adminDemoFeatures,
      distributorsDemoTitle,
      distributorsDemoFeatures,
      locale = 'en',
      showOnHomePage = false,
    } = body || {};

    if (!icon || !image || !adminDemoTitle || !distributorsDemoTitle) {
      return NextResponse.json(
        { error: 'Missing required fields: icon, image, adminDemoTitle, and distributorsDemoTitle are required.' },
        { status: 400 }
      );
    }

    // If title is not provided or empty, use adminDemoTitle as default
    const finalTitle = title && String(title).trim() ? String(title).trim() : String(adminDemoTitle).trim();

    const item = await createDemoItem({
      icon: String(icon),
      image: String(image),
      title: finalTitle,
      adminDemoTitle: String(adminDemoTitle),
      adminDemoFeatures: Array.isArray(adminDemoFeatures) ? adminDemoFeatures : null,
      distributorsDemoTitle: String(distributorsDemoTitle),
      distributorsDemoFeatures: Array.isArray(distributorsDemoFeatures) ? distributorsDemoFeatures : null,
      locale: String(locale),
      showOnHomePage: Boolean(showOnHomePage),
    });

    return NextResponse.json(item);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const body = await request.json();
    const {
      icon,
      image,
      title,
      adminDemoTitle,
      adminDemoFeatures,
      distributorsDemoTitle,
      distributorsDemoFeatures,
      locale = 'en',
      showOnHomePage,
    } = body || {};

    if (!id) {
      return NextResponse.json({ error: 'id is required in query params.' }, { status: 400 });
    }

    const targetLocale = String(locale);

    // IMPORTANT: Get all translations BEFORE updating icon/image, so we can find them all
    // even if the icon changes. This prevents losing data when icon is updated.
    const allTranslationsBeforeUpdate = await getAllDemoItemTranslations(id);
    const existingTranslation = allTranslationsBeforeUpdate.find((t) => t.locale === targetLocale);

    if (existingTranslation) {
      // If title is not provided or empty, use adminDemoTitle as default
      const finalTitle = title !== undefined 
        ? (title && String(title).trim() ? String(title).trim() : String(adminDemoTitle || existingTranslation.adminDemoTitle).trim())
        : (existingTranslation.title || existingTranslation.adminDemoTitle);

      // Update existing translation
      const item = await updateDemoItem(existingTranslation.id, {
        icon: icon !== undefined ? String(icon) : existingTranslation.icon,
        image: image !== undefined ? String(image) : existingTranslation.image,
        title: finalTitle,
        adminDemoTitle: adminDemoTitle !== undefined ? String(adminDemoTitle) : existingTranslation.adminDemoTitle,
        adminDemoFeatures: Array.isArray(adminDemoFeatures) ? adminDemoFeatures : null,
        distributorsDemoTitle: distributorsDemoTitle !== undefined ? String(distributorsDemoTitle) : existingTranslation.distributorsDemoTitle,
        distributorsDemoFeatures: Array.isArray(distributorsDemoFeatures) ? distributorsDemoFeatures : null,
        locale: targetLocale,
        showOnHomePage: showOnHomePage !== undefined ? Boolean(showOnHomePage) : existingTranslation.showOnHomePage,
      });

      // If updating English, sync icon, image, title, and showOnHomePage to all translations
      // Use the translations we fetched BEFORE the update to ensure we get all of them
      // This prevents losing English data when icon/image/title/showOnHomePage changes
      if (targetLocale === 'en' && (icon !== undefined || image !== undefined || title !== undefined || showOnHomePage !== undefined)) {
        const iconToSync = icon !== undefined ? String(icon) : existingTranslation.icon;
        const imageToSync = image !== undefined ? String(image) : existingTranslation.image;
        const titleToSync = title !== undefined ? (title && String(title).trim() ? String(title).trim() : null) : existingTranslation.title;
        const showOnHomePageToSync = showOnHomePage !== undefined ? Boolean(showOnHomePage) : existingTranslation.showOnHomePage ?? false;

        // Update icon, image, title, and showOnHomePage for all translations (except English which we just updated)
        // Use the translations we fetched BEFORE updating to ensure we get all of them
        // This preserves all existing data (adminDemoTitle, etc.) while only updating shared fields
        await Promise.all(
          allTranslationsBeforeUpdate
            .filter((t) => t.locale !== 'en' && t.id !== existingTranslation.id)
            .map((t) =>
              updateDemoItem(t.id, {
                icon: iconToSync,
                image: imageToSync,
                title: titleToSync,
                showOnHomePage: showOnHomePageToSync,
                adminDemoTitle: t.adminDemoTitle, // Preserve existing adminDemoTitle
                adminDemoFeatures: t.adminDemoFeatures, // Preserve existing features
                distributorsDemoTitle: t.distributorsDemoTitle, // Preserve existing distributorsDemoTitle
                distributorsDemoFeatures: t.distributorsDemoFeatures, // Preserve existing features
                locale: t.locale,
              })
            )
        );
      }

      return NextResponse.json(item);
    } else {
      // Create new translation - need to get English version for icon/image
      const englishVersion = allTranslationsBeforeUpdate.find((t) => t.locale === 'en');
      if (!englishVersion) {
        return NextResponse.json({ error: 'English version not found. Please create English version first.' }, { status: 404 });
      }

      if (!adminDemoTitle || !distributorsDemoTitle) {
        return NextResponse.json(
          { error: 'Missing required fields: adminDemoTitle and distributorsDemoTitle are required.' },
          { status: 400 }
        );
      }

      // If title is not provided or empty, use adminDemoTitle as default
      const finalTitle = title && String(title).trim() 
        ? String(title).trim() 
        : (englishVersion.title || String(adminDemoTitle).trim());

      // Create new translation with same icon/image/title as English
      const item = await createDemoItem({
        icon: englishVersion.icon,
        image: englishVersion.image,
        title: finalTitle,
        adminDemoTitle: String(adminDemoTitle),
        adminDemoFeatures: Array.isArray(adminDemoFeatures) ? adminDemoFeatures : null,
        distributorsDemoTitle: String(distributorsDemoTitle),
        distributorsDemoFeatures: Array.isArray(distributorsDemoFeatures) ? distributorsDemoFeatures : null,
        locale: targetLocale,
      });
      return NextResponse.json(item);
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'id is required in query params.' }, { status: 400 });
    }

    await deleteDemoItem(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
