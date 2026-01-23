'use client';

import React from 'react';
import { usePermissions } from '@/lib/hooks/use-permissions';
import { Permission } from '@/lib/permissions';

interface PermissionGuardProps {
  children: React.ReactNode;
  requiredPermission: Permission | Permission[];
  fallback?: React.ReactNode;
  requireAll?: boolean; // If true, requires all permissions (AND), otherwise any (OR)
}

export function PermissionGuard({
  children,
  requiredPermission,
  fallback = null,
  requireAll = false,
}: PermissionGuardProps) {
  const { can, canAll, canAny } = usePermissions();
  
  const hasAccess = Array.isArray(requiredPermission)
    ? requireAll
      ? canAll(requiredPermission)
      : canAny(requiredPermission)
    : can(requiredPermission);
  
  if (!hasAccess) {
    return <>{fallback}</>;
  }
  
  return <>{children}</>;
}

// Also export as default for compatibility
export default PermissionGuard;
