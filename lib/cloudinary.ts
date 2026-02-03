// Cloudinary is optional - will only work if package is installed and configured
// Using webpack externals to avoid build-time resolution errors
let cloudinary: any = null;
let cloudinaryInitialized = false;

function initializeCloudinary() {
  if (cloudinaryInitialized) {
    return cloudinary; // Already initialized
  }

  if (typeof window === 'undefined' && typeof require !== 'undefined') {
    try {
      // Now that cloudinary is external, require should work at runtime
      const cloudinaryModule = require('cloudinary');
      cloudinary = cloudinaryModule.v2 || cloudinaryModule.default?.v2;

      if (cloudinary && process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET) {
        cloudinary.config({
          cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
          api_key: process.env.CLOUDINARY_API_KEY,
          api_secret: process.env.CLOUDINARY_API_SECRET,
        });
      } else {
        cloudinary = null;
      }
    } catch (error) {
      // Cloudinary not installed or not configured - this is expected in some environments
      cloudinary = null;
    }
  }

  cloudinaryInitialized = true;
  return cloudinary;
}

// Export getter function instead of direct export to avoid build-time resolution
export function getCloudinary() {
  return initializeCloudinary();
}

export async function uploadImage(file: File): Promise<string> {
  const cloudinaryInstance = initializeCloudinary();
  if (!cloudinaryInstance) {
    throw new Error('Cloudinary is not configured');
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  return new Promise((resolve, reject) => {
    // Check if image is SVG - keep SVG as-is since it's vector graphics
    const isSvg = buffer.toString('utf8', 0, Math.min(100, buffer.length)).includes('<svg');

    cloudinaryInstance.uploader
      .upload_stream(
        {
          resource_type: 'image',
          folder: 'cloud-mlm',
          quality: 'auto:good',
          // Force WebP format for all images except SVG
          fetch_format: isSvg ? 'auto' : 'webp',
          flags: ['progressive', 'strip_profile'],
        },
        (error: any, result: any) => {
          if (error) {
            reject(error);
          } else if (result) {
            resolve(result.secure_url);
          } else {
            reject(new Error('Upload failed'));
          }
        }
      )
      .end(buffer);
  });
}

export async function deleteImage(publicId: string): Promise<void> {
  const cloudinaryInstance = initializeCloudinary();
  if (!cloudinaryInstance) {
    throw new Error('Cloudinary is not configured');
  }
  await cloudinaryInstance.uploader.destroy(publicId);
}
