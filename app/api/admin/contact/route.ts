import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/db/prisma';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
      const submissions = await prisma.contact_submissions.findMany({
        orderBy: {
          createdAt: 'desc',
        },
        take: 100,
      });

      return NextResponse.json(submissions);
    } catch (dbError: any) {
      // If table doesn't exist or other DB error, return empty array
      console.error('Error fetching contact submissions:', dbError);
      return NextResponse.json([]);
    }
  } catch (error: any) {
    console.error('Error in contact API:', error);
    return NextResponse.json([]);
  }
}
