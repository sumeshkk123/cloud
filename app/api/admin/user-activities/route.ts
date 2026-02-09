import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/db/prisma';
import { UserRole } from '@/lib/permissions';

// GET user activities with role-based filtering
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = (session.user as any).id;
    const userRole = (session.user as any).role;
    const url = request?.url ? new URL(request.url) : null;
    const searchParams = url?.searchParams ?? null;
    const targetUserId = searchParams?.get?.('userId') ?? undefined;

    let whereClause: any = {};

    // Role-based filtering
    const isAdmin = userRole === UserRole.ADMIN || userRole?.toLowerCase() === 'admin';
    
    if (isAdmin) {
      if (targetUserId) {
        whereClause.userId = targetUserId;
      }
    } else {
      whereClause.userId = userId;
    }

    // Fetch activities with user information
    let activities;
    try {
      activities = await prisma.user_activities.findMany({
        where: whereClause,
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
        take: 1000, // Limit to prevent performance issues
      });
    } catch (includeError: any) {
      // If include fails (relation not set up), fetch without include
      activities = await prisma.user_activities.findMany({
        where: whereClause,
        orderBy: {
          createdAt: 'desc',
        },
        take: 1000,
      });
      
      // Fetch user info separately
      const userIds = [...new Set(activities.map(a => a.userId))];
      const users = await prisma.users.findMany({
        where: { id: { in: userIds } },
        select: { id: true, name: true, email: true },
      });
      const userMap = new Map(users.map(u => [u.id, u]));
      
      // Format response with manually joined user data
      const formattedActivities = activities.map((activity) => {
        const user = userMap.get(activity.userId);
        return {
          id: activity.id,
          userId: activity.userId,
          action: activity.action,
          description: activity.description,
          metadata: activity.metadata,
          ipAddress: activity.ipAddress,
          userAgent: activity.userAgent,
          createdAt: activity.createdAt.toISOString(),
          userName: user?.name || null,
          userEmail: user?.email || null,
        };
      });
      
      return NextResponse.json(formattedActivities);
    }

    // Format response
    const formattedActivities = activities.map((activity: any) => ({
      id: activity.id,
      userId: activity.userId,
      action: activity.action,
      description: activity.description,
      metadata: activity.metadata,
      ipAddress: activity.ipAddress,
      userAgent: activity.userAgent,
      createdAt: activity.createdAt.toISOString(),
      userName: activity.user?.name || null,
      userEmail: activity.user?.email || null,
    }));

    return NextResponse.json(formattedActivities);
  } catch (error: any) {
    console.error('Error in user-activities API:', error);
    // Return empty array instead of error to prevent 500
    return NextResponse.json([]);
  }
}

// POST create new activity log entry
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = (session.user as any).id;
    const body = await request.json();
    const { action, description, metadata, ipAddress, userAgent } = body;

    if (!action || !description) {
      return NextResponse.json(
        { error: 'Action and description are required' },
        { status: 400 }
      );
    }

    const activity = await prisma.user_activities.create({
      data: {
        userId,
        action,
        description,
        metadata: metadata || null,
        ipAddress: ipAddress || null,
        userAgent: userAgent || null,
      },
    });

    return NextResponse.json(activity, { status: 201 });
  } catch (error: any) {
    console.error('Error creating activity:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create activity' },
      { status: 500 }
    );
  }
}
