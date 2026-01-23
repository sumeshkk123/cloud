import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prisma';
import bcrypt from 'bcryptjs';
import { randomUUID } from 'crypto';

async function createOrResetAdmin() {
  try {
    // Check if admin user already exists
    const existing = await prisma.users.findUnique({
      where: { email: 'admin@example.com' },
    });

    if (existing) {
      // Reset password to admin123
      const hashedPassword = await bcrypt.hash('admin123', 10);
      await prisma.users.update({
        where: { id: existing.id },
        data: { password: hashedPassword },
      });
      return NextResponse.json({ 
        message: 'Admin user password reset successfully',
        email: 'admin@example.com',
        password: 'admin123',
        action: 'reset'
      });
    }

    // Create admin user
    const hashedPassword = await bcrypt.hash('admin123', 10);

    const user = await prisma.users.create({
      data: {
        id: randomUUID(),
        email: 'admin@example.com',
        name: 'Admin User',
        password: hashedPassword,
        role: 'admin',
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({
      message: 'Admin user created successfully',
      email: user.email,
      password: 'admin123', // Only for initial setup
      action: 'created'
    });
  } catch (error: any) {
    console.error('Error creating admin user:', error);
    return NextResponse.json(
      { 
        error: 'Failed to create admin user',
        message: error.message,
        hint: error.message?.includes('DATABASE_URL')
          ? 'Please set DATABASE_URL in .env file'
          : error.message?.includes('connect')
          ? 'Cannot connect to database. Check if PostgreSQL is running.'
          : 'Check your database connection and try again.'
      },
      { status: 500 }
    );
  }
}

// Allow both GET and POST for easier browser access
export async function GET() {
  return createOrResetAdmin();
}

export async function POST() {
  return createOrResetAdmin();
}
