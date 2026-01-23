import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prisma';
import bcrypt from 'bcryptjs';

export async function GET() {
  try {
    // Test database connection
    await prisma.$connect();
    
    // Check if admin user exists
    const user = await prisma.users.findUnique({
      where: { email: 'admin@example.com' },
    });

    if (!user) {
      return NextResponse.json({
        status: 'error',
        message: 'Admin user does not exist',
        solution: 'Visit /api/admin/users/seed to create the user',
        databaseConnected: true,
      });
    }

    // Test password
    const testPassword = 'admin123';
    const isValid = await bcrypt.compare(testPassword, user.password);

    return NextResponse.json({
      status: isValid ? 'success' : 'error',
      databaseConnected: true,
      userExists: true,
      email: user.email,
      passwordValid: isValid,
      message: isValid
        ? '✅ Everything is set up correctly! You can login with admin@example.com / admin123'
        : '❌ Password hash is invalid. Need to reset password.',
      solution: isValid
        ? 'Try logging in with admin@example.com / admin123'
        : 'Visit /api/admin/users/seed to reset password',
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        status: 'error',
        databaseConnected: false,
        error: error.message,
        hint: error.message?.includes('DATABASE_URL')
          ? 'DATABASE_URL is not set in .env file'
          : error.message?.includes('connect')
          ? 'Cannot connect to database. Check if PostgreSQL is running and DATABASE_URL is correct.'
          : 'Check your database configuration',
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
