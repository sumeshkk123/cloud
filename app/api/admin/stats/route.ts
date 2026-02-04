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

    // Get counts for services, MLM plans, modules, features, and demos
    const [servicesCount, mlmPlansCount, modulesCount, featuresCount, demosCount] = await Promise.all([
      prisma.services.count().catch((err) => {
        console.error('Error counting services:', err);
        return 0;
      }),
      prisma.mlm_plans.count().catch((err) => {
        console.error('Error counting mlm_plans:', err);
        return 0;
      }),
      prisma.modules.count().catch((err) => {
        console.error('Error counting modules:', err);
        return 0;
      }),
      prisma.features.count().catch((err) => {
        console.error('Error counting features:', err);
        return 0;
      }),
      prisma.demo_items.count().catch((err) => {
        console.error('Error counting demo_items:', err);
        return 0;
      }),
    ]);

    const stats = {
      totalServices: servicesCount || 0,
      totalModules: modulesCount || 0,
      totalFeatures: featuresCount || 0,
      totalPlans: mlmPlansCount || 0,
      totalDemos: demosCount || 0,
    };

    return NextResponse.json(stats);
  } catch (error: any) {
    console.error('Error in stats API:', error);
    return NextResponse.json({
      totalServices: 0,
      totalModules: 0,
      totalFeatures: 0,
      totalPlans: 0,
      totalDemos: 0,
    });
  }
}
