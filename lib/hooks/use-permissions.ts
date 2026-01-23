'use client';

import { useSession } from 'next-auth/react';
import { Permission, getPermissionsFromRole, hasPermission } from '@/lib/permissions';
import { useMemo } from 'react';

export function usePermissions() {
  const { data: session } = useSession();
  
  const permissions = useMemo(() => {
    if (!session?.user) return [];
    
    const role = (session.user as any).role || 'user';
    const rolePermissions = getPermissionsFromRole(role);
    
    // If user has custom permissions in session, use those instead
    const customPermissions = (session.user as any).permissions;
    if (customPermissions && Array.isArray(customPermissions)) {
      return customPermissions as Permission[];
    }
    
    return rolePermissions;
  }, [session]);
  
  const can = (permission: Permission): boolean => {
    return hasPermission(permissions, permission);
  };
  
  const canAny = (requiredPermissions: Permission[]): boolean => {
    return requiredPermissions.some((perm) => hasPermission(permissions, perm));
  };
  
  const canAll = (requiredPermissions: Permission[]): boolean => {
    return requiredPermissions.every((perm) => hasPermission(permissions, perm));
  };
  
  const isAdmin = useMemo(() => {
    return permissions.includes(Permission.ADMIN_ALL);
  }, [permissions]);
  
  return {
    permissions,
    can,
    canAny,
    canAll,
    isAdmin,
    role: (session?.user as any)?.role || 'user',
  };
}
