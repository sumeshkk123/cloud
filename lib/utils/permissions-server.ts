import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { Permission, getPermissionsFromRole, hasPermission } from '@/lib/permissions';
import { prisma } from '@/lib/db/prisma';

// Server-side permission check
export async function checkPermission(requiredPermission: Permission): Promise<boolean> {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return false;
  }

  const user = await prisma.users.findUnique({
    where: { id: (session.user as any).id },
    select: { role: true, permissions: true },
  });

  if (!user) {
    return false;
  }

  // Get permissions from role or custom permissions
  let userPermissions: Permission[] = [];

  if (user.permissions && typeof user.permissions === 'object') {
    // If user has custom permissions, use those
    userPermissions = (user.permissions as any) as Permission[];
  } else {
    // Otherwise, use role-based permissions
    userPermissions = getPermissionsFromRole(user.role);
  }

  return hasPermission(userPermissions, requiredPermission);
}

// Server-side check for multiple permissions (AND)
export async function checkAllPermissions(requiredPermissions: Permission[]): Promise<boolean> {
  const results = await Promise.all(
    requiredPermissions.map((perm) => checkPermission(perm))
  );
  return results.every((result) => result === true);
}

// Server-side check for any permission (OR)
export async function checkAnyPermission(requiredPermissions: Permission[]): Promise<boolean> {
  const results = await Promise.all(
    requiredPermissions.map((perm) => checkPermission(perm))
  );
  return results.some((result) => result === true);
}

// Get current user's permissions (server-side)
export async function getCurrentUserPermissions(): Promise<Permission[]> {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return [];
  }

  const user = await prisma.users.findUnique({
    where: { id: (session.user as any).id },
    select: { role: true, permissions: true },
  });

  if (!user) {
    return [];
  }

  if (user.permissions && typeof user.permissions === 'object') {
    return (user.permissions as any) as Permission[];
  }

  return getPermissionsFromRole(user.role);
}
