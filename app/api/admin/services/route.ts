import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import {
  listServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
  getAllServiceTranslations,
} from '@/lib/api/services';

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const allTranslations = searchParams.get('all') === 'true';
    const locale = searchParams.get('locale') || 'en';

    if (id) {
      if (allTranslations) {
        const translations = await getAllServiceTranslations(id);
        return NextResponse.json({ translations });
      }

      const service = await getServiceById(id);
      if (!service) {
        return NextResponse.json({ error: 'Service not found.' }, { status: 404 });
      }

      return NextResponse.json({
        id: String(service.id),
        title: String(service.title || ''),
        description: String(service.description || ''),
        content: service.content ? String(service.content) : null,
        image: service.image ? String(service.image) : null,
        icon: service.icon ? String(service.icon) : null,
        keyBenefits: service.keyBenefits || null,
        serviceHighlights: service.serviceHighlights || null,
        showOnHomePage: Boolean(service.showOnHomePage ?? false),
        locale: String(service.locale || ''),
        createdAt: service.createdAt,
        updatedAt: service.updatedAt,
      });
    }

    const services = await listServices('en');
    const safeServices = services.map((service) => ({
      id: String(service.id),
      title: String(service.title || ''),
      description: String(service.description || ''),
      content: service.content ? String(service.content) : null,
      image: service.image ? String(service.image) : null,
      icon: service.icon ? String(service.icon) : null,
      keyBenefits: service.keyBenefits || null,
      serviceHighlights: service.serviceHighlights || null,
      showOnHomePage: Boolean(service.showOnHomePage ?? false),
      locale: String(service.locale || ''),
      createdAt: service.createdAt,
      updatedAt: service.updatedAt,
    }));
    return NextResponse.json(safeServices);
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
    const { title, description, content, image, icon, keyBenefits, serviceHighlights, showOnHomePage, locale = 'en' } = body || {};

    if (!title || !description || !icon) {
      return NextResponse.json(
        { error: 'title, description, and icon are required.' },
        { status: 400 }
      );
    }

    if (!keyBenefits || !Array.isArray(keyBenefits) || keyBenefits.length === 0) {
      return NextResponse.json(
        { error: 'keyBenefits is required and must have at least one item.' },
        { status: 400 }
      );
    }

    if (!serviceHighlights || !Array.isArray(serviceHighlights) || serviceHighlights.length === 0) {
      return NextResponse.json(
        { error: 'serviceHighlights is required and must have at least one item.' },
        { status: 400 }
      );
    }

    const service = await createService({
      title: String(title),
      description: String(description),
      content: content ? String(content) : null,
      image: image ? String(image) : null,
      icon: String(icon),
      keyBenefits: Array.isArray(keyBenefits) ? keyBenefits.map((f: any) => String(f)) : null,
      serviceHighlights: Array.isArray(serviceHighlights) ? serviceHighlights.map((f: any) => String(f)) : null,
      showOnHomePage: Boolean(showOnHomePage ?? false),
      locale: String(locale),
    });

    return NextResponse.json(service);
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
    const { title, description, content, image, icon, keyBenefits, serviceHighlights, showOnHomePage, locale = 'en' } = body || {};

    if (!id) {
      return NextResponse.json({ error: 'id is required in query params.' }, { status: 400 });
    }

    if (!title || !description || !icon) {
      return NextResponse.json(
        { error: 'title, description, and icon are required.' },
        { status: 400 }
      );
    }

    if (!keyBenefits || !Array.isArray(keyBenefits) || keyBenefits.length === 0) {
      return NextResponse.json(
        { error: 'keyBenefits is required and must have at least one item.' },
        { status: 400 }
      );
    }

    if (!serviceHighlights || !Array.isArray(serviceHighlights) || serviceHighlights.length === 0) {
      return NextResponse.json(
        { error: 'serviceHighlights is required and must have at least one item.' },
        { status: 400 }
      );
    }

    const existing = await getServiceById(id);
    if (!existing) {
      if (locale !== 'en') {
        const englishServices = await listServices('en');
        const englishMatch = englishServices.find((s) => s.icon === String(icon) && s.showOnHomePage === Boolean(showOnHomePage ?? false));
        
        if (englishMatch) {
          const service = await createService({
            title: String(title),
            description: String(description),
            content: content ? String(content) : null,
            image: image ? String(image) : null,
            icon: englishMatch.icon || String(icon),
            keyBenefits: Array.isArray(keyBenefits) ? keyBenefits.map((f: any) => String(f)) : null,
            serviceHighlights: Array.isArray(serviceHighlights) ? serviceHighlights.map((f: any) => String(f)) : null,
            showOnHomePage: englishMatch.showOnHomePage,
            locale: String(locale),
          });
          return NextResponse.json(service);
        }
      }
      return NextResponse.json({ error: 'Service not found.' }, { status: 404 });
    }

    const targetLocale = String(locale);
    
    if (targetLocale !== existing.locale) {
      const allTranslations = await getAllServiceTranslations(existing.id);
      const existingTranslation = allTranslations.find((t) => t.locale === targetLocale);
      const englishVersion = allTranslations.find((t) => t.locale === 'en') || existing;
      const iconToUse = englishVersion.icon || String(icon);
      const showOnHomePageToUse = englishVersion.showOnHomePage;
      
      if (existingTranslation) {
        const service = await updateService(existingTranslation.id, {
          title: String(title),
          description: String(description),
          content: content ? String(content) : null,
          image: image ? String(image) : null,
          icon: iconToUse,
          keyBenefits: Array.isArray(keyBenefits) ? keyBenefits.map((f: any) => String(f)) : null,
          serviceHighlights: Array.isArray(serviceHighlights) ? serviceHighlights.map((f: any) => String(f)) : null,
          showOnHomePage: showOnHomePageToUse,
          locale: targetLocale,
        });
        return NextResponse.json(service);
      } else {
        const service = await createService({
          title: String(title),
          description: String(description),
          content: content ? String(content) : null,
          image: image ? String(image) : null,
          icon: iconToUse,
          keyBenefits: Array.isArray(keyBenefits) ? keyBenefits.map((f: any) => String(f)) : null,
          serviceHighlights: Array.isArray(serviceHighlights) ? serviceHighlights.map((f: any) => String(f)) : null,
          showOnHomePage: showOnHomePageToUse,
          locale: targetLocale,
        });
        return NextResponse.json(service);
      }
    }

    let iconToUse = String(icon);
    let showOnHomePageToUse = Boolean(showOnHomePage ?? false);
    
    if (targetLocale === 'en') {
      const allTranslations = await getAllServiceTranslations(id);
      if (allTranslations.length > 0) {
        await Promise.all(
          allTranslations
            .filter((t) => t.locale !== 'en')
            .map((t) =>
              updateService(t.id, {
                icon: iconToUse,
                showOnHomePage: showOnHomePageToUse,
              })
            )
        );
      }
    } else {
      const allTranslations = await getAllServiceTranslations(id);
      const englishVersion = allTranslations.find((t) => t.locale === 'en');
      if (englishVersion) {
        iconToUse = englishVersion.icon || iconToUse;
        showOnHomePageToUse = englishVersion.showOnHomePage;
      }
    }

    const service = await updateService(id, {
      title: String(title),
      description: String(description),
      content: content ? String(content) : null,
      image: image ? String(image) : null,
      icon: iconToUse,
      keyBenefits: Array.isArray(keyBenefits) ? keyBenefits.map((f: any) => String(f)) : null,
      serviceHighlights: Array.isArray(serviceHighlights) ? serviceHighlights.map((f: any) => String(f)) : null,
      showOnHomePage: showOnHomePageToUse,
      locale: targetLocale,
    });

    return NextResponse.json(service);
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

    const translations = await getAllServiceTranslations(id);
    
    if (translations.length > 0) {
      await Promise.all(
        translations.map((t) => deleteService(t.id))
      );
    } else {
      await deleteService(id);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
