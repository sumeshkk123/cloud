import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/db/prisma';
import { checkPermission } from '@/lib/utils/permissions-server';
import { Permission } from '@/lib/permissions';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const hasManage = await checkPermission(Permission.CONTACT_MANAGE);
    if (!hasManage) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { id } = await params;
    if (!id) {
      return NextResponse.json({ error: 'ID required' }, { status: 400 });
    }

    const body = await request.json();
    const { notes } = body || {};

    const updated = await prisma.contact_submissions.update({
      where: { id },
      data: { notes: notes != null ? String(notes) : undefined },
    });

    return NextResponse.json(updated);
  } catch (error: any) {
    if (error?.code === 'P2025') {
      return NextResponse.json({ error: 'Submission not found' }, { status: 404 });
    }
    console.error('[PUT /api/admin/contact/[id]]', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to update' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const hasDelete = await checkPermission(Permission.CONTACT_DELETE);
    if (!hasDelete) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { id } = await params;
    if (!id) {
      return NextResponse.json({ error: 'ID required' }, { status: 400 });
    }

    await prisma.contact_submissions.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    if (error?.code === 'P2025') {
      return NextResponse.json({ error: 'Submission not found' }, { status: 404 });
    }
    console.error('[DELETE /api/admin/contact/[id]]', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to delete' },
      { status: 500 }
    );
  }
}
