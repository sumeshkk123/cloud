import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { readdir, stat, unlink } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

interface MediaItem {
  url: string;
  name: string;
  size: number;
  dimensions?: {
    width: number;
    height: number;
  };
  uploadedAt?: string;
  uploadedBy?: string;
  uploadedTo?: string;
}

const DEFAULT_LIMIT = 10;
const MAX_LIMIT = 100;

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized. Please log in.' }, { status: 401 });
    }

    const uploadsDir = join(process.cwd(), 'public', 'uploads');

    if (!existsSync(uploadsDir)) {
      return NextResponse.json({ images: [], total: 0 });
    }

    let searchParams: URLSearchParams;
    try {
      searchParams = request?.url ? new URL(request.url).searchParams : new URLSearchParams();
    } catch {
      searchParams = new URLSearchParams();
    }
    const limit = Math.min(
      Math.max(1, parseInt(searchParams.get('limit') ?? String(DEFAULT_LIMIT), 10) || DEFAULT_LIMIT),
      MAX_LIMIT
    );
    const offset = Math.max(0, parseInt(searchParams.get('offset') ?? '0', 10) || 0);

    let files: string[] = [];
    try {
      files = await readdir(uploadsDir);
    } catch {
      return NextResponse.json({ images: [], total: 0 });
    }

    const imageFiles = files.filter((file) =>
      /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file)
    );

    const allItems: MediaItem[] = await Promise.all(
      imageFiles.map(async (file) => {
        const filePath = join(uploadsDir, file);
        const stats = await stat(filePath);
        const url = `/uploads/${file}`;

        return {
          url,
          name: file,
          size: stats.size,
          uploadedAt: stats.birthtime.toISOString(),
        };
      })
    );

    allItems.sort((a, b) => {
      const dateA = a.uploadedAt ? new Date(a.uploadedAt).getTime() : 0;
      const dateB = b.uploadedAt ? new Date(b.uploadedAt).getTime() : 0;
      return dateB - dateA;
    });

    const total = allItems.length;
    const images = allItems.slice(offset, offset + limit);

    return NextResponse.json(
      { images, total },
      {
        headers: {
          'Cache-Control': 'private, max-age=15, stale-while-revalidate=30',
        },
      }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to list media';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized. Please log in.' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');

    if (!url) {
      return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
    }

    if (!url.startsWith('/uploads/')) {
      return NextResponse.json({ error: 'Invalid file path' }, { status: 400 });
    }

    const fileName = url.replace(/^\/uploads\//, '');
    if (fileName.includes('..') || fileName.includes('/')) {
      return NextResponse.json({ error: 'Invalid file name' }, { status: 400 });
    }

    const filePath = join(process.cwd(), 'public', 'uploads', fileName);

    if (!existsSync(filePath)) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }

    await unlink(filePath);

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to delete media';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
