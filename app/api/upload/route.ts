import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';
import sharp from 'sharp';

// Try to use cloudinary if available
async function tryCloudinaryUpload(file: File): Promise<string | null> {
  try {
    const cloudinaryModule = await import('@/lib/cloudinary');
    const isCloudinaryConfigured =
      process.env.CLOUDINARY_CLOUD_NAME &&
      process.env.CLOUDINARY_API_KEY &&
      process.env.CLOUDINARY_API_SECRET;

    if (isCloudinaryConfigured) {
      const cloudinaryInstance = cloudinaryModule.getCloudinary();
      if (cloudinaryInstance) {
        return await cloudinaryModule.uploadImage(file);
      }
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

    // Check if file is SVG - keep SVG as-is since it's vector graphics
    const isSvg = file.type === 'image/svg+xml' || file.name.toLowerCase().endsWith('.svg');

    let optimizedBuffer: Buffer;
    let fileExtension: string;

    if (isSvg) {
      // Keep SVG files as-is
      optimizedBuffer = buffer;
      fileExtension = 'svg';
    } else {
      // Convert all other images to WebP
      try {
        optimizedBuffer = await sharp(buffer)
          .webp({ quality: 85, effort: 4 })
          .toBuffer();
        fileExtension = 'webp';
      } catch (sharpError) {
        // If Sharp fails (e.g., corrupted image), fall back to original
        console.warn(`[Upload API] Sharp conversion failed, using original image: ${sharpError}`);
        optimizedBuffer = buffer;
        // Try to preserve original extension, but default to webp
        const originalExtension = file.name.split('.').pop() || 'webp';
        fileExtension = originalExtension === 'svg' ? 'webp' : originalExtension;
      }
    }

    const filename = `upload-${timestamp}-${randomStr}.${fileExtension}`;
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
