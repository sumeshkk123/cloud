import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized. Please log in.' }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get('video') as File;

    if (!file) {
      return NextResponse.json({ error: 'No video file provided' }, { status: 400 });
    }

    // Validate file type
    if (!file.type.startsWith('video/')) {
      return NextResponse.json({ error: 'File must be a video' }, { status: 400 });
    }

    // Fallback to local file storage
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const cwd = process.cwd();
    const uploadsDir = join(cwd, 'public', 'uploads', 'videos');

    // Ensure directory exists
    if (!existsSync(uploadsDir)) {
      await mkdir(uploadsDir, { recursive: true });
    }

    // Generate unique filename
    const timestamp = Date.now();
    const randomStr = Math.random().toString(36).substring(2, 15);
    const originalExtension = file.name.split('.').pop() || 'mp4';
    const filename = `video-${timestamp}-${randomStr}.${originalExtension}`;
    const filepath = join(uploadsDir, filename);

    // Write file to disk
    await writeFile(filepath, buffer);

    // Return public URL
    const url = `/uploads/videos/${filename}`;
    return NextResponse.json({ url });
  } catch (error) {
    console.error('Video upload error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to upload video';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
