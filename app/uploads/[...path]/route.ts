import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path: pathArray } = await params;
    const filename = pathArray.join('/');

    if (filename.includes('..') || filename.includes('//')) {
      return NextResponse.json({ error: 'Invalid path' }, { status: 400 });
    }

    const cwd = process.cwd();
    const isDocker = process.env.DOCKER_BUILD === 'true' || cwd === '/app';

    const possiblePaths = isDocker
      ? [
        join('/app', 'public', 'uploads', filename),
        join(cwd, 'public', 'uploads', filename),
        join(cwd, 'uploads', filename),
        join('/app', 'uploads', filename),
      ]
      : [
        join(cwd, 'public', 'uploads', filename),
        join(cwd, 'uploads', filename),
        join('/app', 'public', 'uploads', filename),
        join('/app', 'uploads', filename),
      ];

    let filePath: string | null = null;
    for (const path of possiblePaths) {
      if (existsSync(path)) {
        filePath = path;
        break;
      }
    }

    if (!filePath) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }

    const fileBuffer = await readFile(filePath);
    const uint8Array = new Uint8Array(fileBuffer);

    const ext = filename.split('.').pop()?.toLowerCase();
    const contentType =
      ext === 'webp'
        ? 'image/webp'
        : ext === 'jpg' || ext === 'jpeg'
          ? 'image/jpeg'
          : ext === 'png'
            ? 'image/png'
            : ext === 'gif'
              ? 'image/gif'
              : ext === 'svg'
                ? 'image/svg+xml'
                : 'application/octet-stream';

    return new NextResponse(uint8Array, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('[Uploads Route] Error serving upload:', error);
    return NextResponse.json({ error: 'Failed to serve file' }, { status: 500 });
  }
}
