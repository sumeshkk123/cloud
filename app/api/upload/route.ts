import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

// Try to use cloudinary if available
async function tryCloudinaryUpload(file: File): Promise<string | null> {
  try {
    const cloudinaryModule = await import('@/lib/cloudinary');
    const isCloudinaryConfigured =
      process.env.CLOUDINARY_CLOUD_NAME &&
      process.env.CLOUDINARY_API_KEY &&
      process.env.CLOUDINARY_API_SECRET;

    if (isCloudinaryConfigured && cloudinaryModule.cloudinary) {
      return await cloudinaryModule.uploadImage(file);
    }
  } catch (error) {
    // Cloudinary not available or not configured - fall through to local storage
  }
  return null;
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized. Please log in.' }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return NextResponse.json({ error: 'File must be an image' }, { status: 400 });
    }

    // Try Cloudinary first
    const cloudinaryUrl = await tryCloudinaryUpload(file);
    if (cloudinaryUrl) {
      return NextResponse.json({ url: cloudinaryUrl });
    }

    // Fallback to local file storage
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const cwd = process.cwd();
    const uploadsDir = join(cwd, 'public', 'uploads');

    // Ensure directory exists
    if (!existsSync(uploadsDir)) {
      await mkdir(uploadsDir, { recursive: true });
    }

    // Generate unique filename
    const timestamp = Date.now();
    const randomStr = Math.random().toString(36).substring(2, 15);
    
    // Use original file extension
    const originalExtension = file.name.split('.').pop() || 'jpg';
    const filename = `upload-${timestamp}-${randomStr}.${originalExtension}`;
    
    // Note: Image optimization with Sharp can be added later if needed
    // For now, we'll save the original image
    const optimizedBuffer = buffer;

    const filepath = join(uploadsDir, filename);
    await writeFile(filepath, optimizedBuffer);

    // Return public URL
    const url = `/uploads/${filename}`;
    return NextResponse.json({ url });
  } catch (error) {
    console.error('Upload error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to upload image';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
