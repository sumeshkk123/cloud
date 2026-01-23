import { prisma } from '@/lib/db/prisma';

// Clean up expired OTPs every 5 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(async () => {
    try {
      const now = new Date();
      await prisma.pricing_otps.deleteMany({
        where: {
          expiresAt: {
            lt: now,
          },
        },
      });
    } catch (error) {
      console.error('[OTP] Error cleaning up expired OTPs:', error);
    }
  }, 5 * 60 * 1000);
}

export function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function storeOTP(email: string, otp: string, expiresInMinutes: number = 10): Promise<void> {
  const normalizedEmail = email.trim().toLowerCase();
  const expiresAt = new Date(Date.now() + expiresInMinutes * 60 * 1000);

  try {
    // Delete any existing OTP for this email first
    await prisma.pricing_otps.deleteMany({
      where: { email: normalizedEmail },
    });

    // Store new OTP
    await prisma.pricing_otps.create({
      data: {
        email: normalizedEmail,
        otp,
        expiresAt,
      },
    });

    console.log('[OTP] Stored OTP for:', normalizedEmail, 'OTP:', otp, 'Expires at:', expiresAt.toISOString());
  } catch (error) {
    console.error('[OTP] Error storing OTP:', error);
    throw error;
  }
}

export async function verifyOTP(email: string, otp: string): Promise<boolean> {
  const normalizedEmail = email.trim().toLowerCase();
  const normalizedOtp = otp.trim();

  try {
    const stored = await prisma.pricing_otps.findUnique({
      where: { email: normalizedEmail },
    });

    console.log('[OTP] Verifying OTP for:', normalizedEmail, 'Provided OTP:', normalizedOtp);
    console.log('[OTP] Stored OTP exists:', !!stored);

    if (!stored) {
      console.log('[OTP] No OTP found for email:', normalizedEmail);
      return false;
    }

    const now = new Date();
    console.log('[OTP] Stored OTP:', stored.otp, 'Expires at:', stored.expiresAt.toISOString(), 'Current time:', now.toISOString());

    if (stored.expiresAt < now) {
      console.log('[OTP] OTP expired');
      // Delete expired OTP
      await prisma.pricing_otps.delete({
        where: { email: normalizedEmail },
      });
      return false;
    }

    if (stored.otp !== normalizedOtp) {
      console.log('[OTP] OTP mismatch. Expected:', stored.otp, 'Got:', normalizedOtp);
      return false;
    }

    // Remove OTP after successful verification
    console.log('[OTP] OTP verified successfully');
    await prisma.pricing_otps.delete({
      where: { email: normalizedEmail },
    });
    return true;
  } catch (error) {
    console.error('[OTP] Error verifying OTP:', error);
    return false;
  }
}

export async function getStoredOTP(email: string): Promise<{ otp: string; expiresAt: Date } | null> {
  try {
    const normalizedEmail = email.trim().toLowerCase();
    const stored = await prisma.pricing_otps.findUnique({
      where: { email: normalizedEmail },
    });

    if (!stored || stored.expiresAt < new Date()) {
      return null;
    }

    return { otp: stored.otp, expiresAt: stored.expiresAt };
  } catch (error) {
    console.error('[OTP] Error getting stored OTP:', error);
    return null;
  }
}
