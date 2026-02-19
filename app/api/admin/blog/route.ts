import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import {
  getAllBlogPosts,
  getBlogPostsById,
  getBlogPost,
  getBlogPostsGroupedByTranslation,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
} from '@/lib/api/blog';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const locale = searchParams.get('locale');
    const grouped = searchParams.get('grouped');

    // Return grouped posts (one per translation group)
    if (grouped === 'true') {
      const posts = await getBlogPostsGroupedByTranslation();
      return NextResponse.json(posts, {
        headers: { 'Cache-Control': 'private, max-age=15, stale-while-revalidate=30' },
      });
    }

    if (id && locale) {
      const post = await getBlogPost(id, locale);
      if (!post) {
        return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
      }
      return NextResponse.json(post);
    }

    if (id) {
      const posts = await getBlogPostsById(id);
      return NextResponse.json(posts);
    }

    const posts = await getAllBlogPosts();
    return NextResponse.json(posts, {
      headers: { 'Cache-Control': 'private, max-age=15, stale-while-revalidate=30' },
    });
  } catch (error) {
    console.error('[API] Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const {
      id,
      slug,
      title,
      description,
      content,
      date,
      image,
      author,
      locale = 'en',
      published = false,
      metaTitle,
      metaDescription,
      metaKeywords,
    } = body || {};

    if (!slug || !title || !description || !content) {
      return NextResponse.json(
        { error: 'slug, title, description, and content are required' },
        { status: 400 }
      );
    }

    if (!image || typeof image !== 'string' || !String(image).trim()) {
      return NextResponse.json(
        { error: 'Featured image is required.' },
        { status: 400 }
      );
    }

    const record = await createBlogPost({
      id: id || undefined,
      slug: String(slug).trim(),
      title: String(title).trim(),
      description: String(description).trim(),
      content: String(content).trim(),
      date: date ? new Date(date) : new Date(),
      image: image ?? null,
      author: author ?? null,
      locale: String(locale),
      published: Boolean(published),
      metaTitle: metaTitle ?? null,
      metaDescription: metaDescription ?? null,
      metaKeywords: metaKeywords ?? null,
    });

    return NextResponse.json(record);
  } catch (error) {
    console.error('[API] Error creating blog post:', error);
    const message = error instanceof Error ? error.message : 'Failed to create blog post';
    const isSlugConflict = /slug.*already (used|taken)|already (used|taken).*language/i.test(message);
    return NextResponse.json(
      { error: isSlugConflict ? message : (process.env.NODE_ENV === 'development' ? message : 'Failed to create blog post') },
      { status: isSlugConflict ? 400 : 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const {
      id,
      locale = 'en',
      slug,
      title,
      description,
      content,
      date,
      image,
      author,
      published,
      metaTitle,
      metaDescription,
      metaKeywords,
    } = body || {};

    if (!id || !locale) {
      return NextResponse.json(
        { error: 'id and locale are required' },
        { status: 400 }
      );
    }

    if (image !== undefined && (!image || typeof image !== 'string' || !String(image).trim())) {
      return NextResponse.json(
        { error: 'Featured image is required.' },
        { status: 400 }
      );
    }

    const record = await updateBlogPost(id, locale, {
      slug: slug !== undefined ? String(slug).trim() : undefined,
      title: title !== undefined ? String(title).trim() : undefined,
      description: description !== undefined ? String(description).trim() : undefined,
      content: content !== undefined ? String(content).trim() : undefined,
      date: date !== undefined ? new Date(date) : undefined,
      image,
      author,
      published,
      metaTitle,
      metaDescription,
      metaKeywords,
    });

    if (!record) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    return NextResponse.json(record);
  } catch (error) {
    console.error('[API] Error updating blog post:', error);
    const message = error instanceof Error ? error.message : 'Failed to update blog post';
    const isSlugConflict = /slug.*already (used|taken)|already (used|taken).*language/i.test(message);
    return NextResponse.json(
      { error: isSlugConflict ? message : 'Failed to update blog post' },
      { status: isSlugConflict ? 400 : 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'id parameter is required' },
        { status: 400 }
      );
    }

    const result = await deleteBlogPost(id);
    return NextResponse.json({
      success: true,
      message: 'Blog post deleted successfully',
      count: result.count,
    });
  } catch (error) {
    console.error('[API] Error deleting blog post:', error);
    return NextResponse.json(
      { error: 'Failed to delete blog post' },
      { status: 500 }
    );
  }
}
