// Permission constants and types

export enum Permission {
  // Admin - Full access
  ADMIN_ALL = 'admin:all',
  
  // Dashboard permissions
  DASHBOARD_VIEW = 'dashboard:view',
  
  // Contact Submissions permissions
  CONTACT_VIEW = 'contact:view',
  CONTACT_MANAGE = 'contact:manage',
  CONTACT_DELETE = 'contact:delete',
  
  // Content permissions (Blog, Services, Plans, etc.)
  CONTENT_VIEW = 'content:view',
  CONTENT_CREATE = 'content:create',
  CONTENT_EDIT = 'content:edit',
  CONTENT_DELETE = 'content:delete',
  
  // User management permissions
  USERS_VIEW = 'users:view',
  USERS_CREATE = 'users:create',
  USERS_EDIT = 'users:edit',
  USERS_DELETE = 'users:delete',
  
  // Settings permissions
  SETTINGS_VIEW = 'settings:view',
  SETTINGS_MANAGE = 'settings:manage',
  
  // Future CRM permissions
  CRM_VIEW = 'crm:view',
  CRM_MANAGE = 'crm:manage',
}

export enum UserRole {
  ADMIN = 'admin',
  BUSINESS_DEVELOPER = 'business_developer',
  USER = 'user',
}

// Role-based permission mapping
export const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  [UserRole.ADMIN]: [
    Permission.ADMIN_ALL,
  ],
  [UserRole.BUSINESS_DEVELOPER]: [
    Permission.DASHBOARD_VIEW,
    Permission.CONTACT_VIEW,
    Permission.CONTACT_MANAGE,
    Permission.CONTACT_DELETE,
  ],
  [UserRole.USER]: [
    Permission.DASHBOARD_VIEW,
    Permission.CONTENT_VIEW,
    Permission.CONTENT_CREATE,
    Permission.CONTENT_EDIT,
    Permission.CONTENT_DELETE,
  ],
};

// Helper function to check if a permission is granted
export function hasPermission(
  userPermissions: Permission[],
  requiredPermission: Permission
): boolean {
  // Admin has all permissions
  if (userPermissions.includes(Permission.ADMIN_ALL)) {
    return true;
  }
  
  return userPermissions.includes(requiredPermission);
}

// Helper function to get permissions from role
export function getPermissionsFromRole(role: string): Permission[] {
  const userRole = role as UserRole;
  return ROLE_PERMISSIONS[userRole] || [];
}

// Helper function to check multiple permissions (AND logic)
export function hasAllPermissions(
  userPermissions: Permission[],
  requiredPermissions: Permission[]
): boolean {
  return requiredPermissions.every((perm) => hasPermission(userPermissions, perm));
}

// Helper function to check any permission (OR logic)
export function hasAnyPermission(
  userPermissions: Permission[],
  requiredPermissions: Permission[]
): boolean {
  return requiredPermissions.some((perm) => hasPermission(userPermissions, perm));
}
