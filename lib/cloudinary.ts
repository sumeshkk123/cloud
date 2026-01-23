// Cloudinary is optional - will only work if package is installed and configured
let cloudinary: any = null;

try {
  const cloudinaryModule = require('cloudinary');
  cloudinary = cloudinaryModule.v2;
  
  if (process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET) {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  } else {
    cloudinary = null;
  }
} catch (error) {
  // Cloudinary not installed or not configured
  cloudinary = null;
}

export { cloudinary };

export async function uploadImage(file: File): Promise<string> {
  if (!cloudinary) {
    throw new Error('Cloudinary is not configured');
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          resource_type: 'image',
          folder: 'cloud-mlm',
          quality: 'auto:good',
          fetch_format: 'auto',
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
  if (!cloudinary) {
    throw new Error('Cloudinary is not configured');
  }
  await cloudinary.uploader.destroy(publicId);
}
