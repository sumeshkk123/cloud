import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import {
  listStories,
  getStoryById,
  createStory,
  updateStory,
  deleteStory,
  getAllStoryTranslations,
} from '@/lib/api/stories';

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
      // If all translations requested, return all locales for this story (linked by name)
      if (allTranslations) {
        const translations = await getAllStoryTranslations(id);
        return NextResponse.json({ translations });
      }

      const story = await getStoryById(id, locale);
      return NextResponse.json(story);
    }

    const stories = await listStories('en');
    return NextResponse.json(stories);
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
    const { title, content, count, screenshot, locale = 'en' } = body || {};

    if (!title || !content) {
      return NextResponse.json({ error: 'title and content are required.' }, { status: 400 });
    }

    const story = await createStory({
      title: String(title),
      content: String(content),
      count: count ? String(count) : null,
      screenshot: screenshot ? String(screenshot) : null,
      locale: String(locale),
    });

    return NextResponse.json(story);
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
    const { title, content, count, screenshot, locale = 'en' } = body || {};

    if (!id) {
      return NextResponse.json({ error: 'id is required in query params.' }, { status: 400 });
    }

    if (!title || !content) {
      return NextResponse.json({ error: 'title and content are required.' }, { status: 400 });
    }

    // Get existing story
    const existing = await getStoryById(id);
    if (!existing) {
      // If story doesn't exist, check if we're creating a translation
      // Find English version by title to link translations
      const englishVersions = await listStories('en');
      const englishMatch = englishVersions.find((t) => t.title === String(title));

      if (englishMatch && locale !== 'en') {
        // Creating a translation - use English screenshot
        const story = await createStory({
          title: String(title),
          content: String(content),
          count: count ? String(count) : null,
          screenshot: englishMatch.screenshot || String(screenshot || ''),
          locale: String(locale),
        });
        return NextResponse.json(story);
      }
      return NextResponse.json({ error: 'Story not found.' }, { status: 404 });
    }

    const targetLocale = String(locale);

    // If locale is different from existing story's locale, handle translation
    if (targetLocale !== existing.locale) {
      // Get all translations to find the English version
      const allTranslations = await getAllStoryTranslations(id);
      let englishVersion = allTranslations.find((t) => t.locale === 'en');
      
      // If existing story is English, use it as the English version
      if (!englishVersion && existing.locale === 'en') {
        englishVersion = existing;
      }
      
      if (!englishVersion) {
        return NextResponse.json({ error: 'English version not found. Please create English version first.' }, { status: 404 });
      }

      // Check if translation already exists for this locale
      const existingTranslation = allTranslations.find((t) => t.locale === targetLocale);

      if (existingTranslation) {
        // Update existing translation
        const story = await updateStory(existingTranslation.id, {
          title: String(title), // Use translated title
          content: String(content),
          count: count ? String(count) : null,
          screenshot: englishVersion.screenshot || null,
          locale: targetLocale,
        });

        return NextResponse.json(story);
      }
      
      // Create new translation - use same creation time as English to link them
      const story = await createStory({
        title: String(title), // Use translated title
        content: String(content),
        count: count ? String(count) : null,
        screenshot: englishVersion.screenshot || null,
        locale: targetLocale,
        createdAt: englishVersion.createdAt, // Use same createdAt as English for linking
      });

      return NextResponse.json(story);
    }

    // Update existing entry (same locale)
    // For English, allow screenshot update and sync to all translations
    let screenshotToUse = String(screenshot || '');
    // IMPORTANT: Always use English title for linking translations
    let titleToUse = String(title);

    if (targetLocale === 'en') {
      // If updating English, sync screenshot to all translations
      const allTranslations = await getAllStoryTranslations(id);
      if (allTranslations.length > 0) {
        // Update screenshot for all translations (but keep their translated content)
        await Promise.all(
          allTranslations
            .filter((t) => t.locale !== 'en')
            .map((t) =>
              updateStory(t.id, {
                title: titleToUse, // Update title to match English (for linking)
                content: t.content,
                count: t.count || null,
                screenshot: screenshotToUse, // Use new English screenshot
                locale: t.locale,
              })
            )
        );
      }
    } else {
      // For other locales, use English screenshot and English title (for linking)
      const allTranslations = await getAllStoryTranslations(id);
      const englishVersion = allTranslations.find((t) => t.locale === 'en');
      if (englishVersion) {
        screenshotToUse = englishVersion.screenshot || screenshotToUse;
        titleToUse = englishVersion.title; // Use English title for linking
      }
    }

    const story = await updateStory(id, {
      title: titleToUse, // Use English title for linking
      content: String(content),
      count: count ? String(count) : null,
      screenshot: screenshotToUse,
      locale: targetLocale,
    });

    return NextResponse.json(story);
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

    // Get all translations for this story (linked by name)
    const translations = await getAllStoryTranslations(id);

    // Delete all translations (all stories with the same name)
    if (translations.length > 0) {
      await Promise.all(
        translations.map((t) => deleteStory(t.id))
      );
    } else {
      // If no translations found, delete by ID anyway
      await deleteStory(id);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
