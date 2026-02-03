'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useToast } from '@/components/ui/toast';
import { PageTitle } from '@/components/ui/adminUi/page-title';
import { Table } from '@/components/ui/adminUi/table';
import { Button } from '@/components/ui/adminUi/button';
import { UserRole, Permission, ROLE_PERMISSIONS } from '@/lib/permissions';
import { Shield, Users, CheckCircle2 } from 'lucide-react';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  permissions: any;
  isActive: boolean;
  createdAt: string;
}

export function RolesPermissionsSection() {
  const { data: session } = useSession();
  const { showToast, ToastComponent } = useToast();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRole, setSelectedRole] = useState<UserRole | 'all'>('all');
  const [editingUser, setEditingUser] = useState<string | null>(null);
  const [newRole, setNewRole] = useState<string>('');

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run once on mount
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/admin/users');
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        showToast('Failed to load users', 'error');
      }
    } catch (error) {
      showToast('Failed to load users', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleRoleChange = async (userId: string, newRoleValue: string) => {
    try {
      const user = users.find(u => u.id === userId);
      if (!user) return;

      const response = await fetch(`/api/admin/users/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...user,
          role: newRoleValue,
        }),
      });

      if (response.ok) {
        showToast('User role updated successfully', 'success');
        setEditingUser(null);
        fetchUsers();
      } else {
        const error = await response.json();
        showToast(error.error || 'Failed to update role', 'error');
      }
    } catch (error) {
      showToast('Failed to update role', 'error');
    }
  };

  const filteredUsers = selectedRole === 'all' 
    ? users 
    : users.filter(user => user.role === selectedRole);

  const roleCounts = {
    all: users.length,
    admin: users.filter(u => u.role === UserRole.ADMIN).length,
    business_developer: users.filter(u => u.role === UserRole.BUSINESS_DEVELOPER).length,
    user: users.filter(u => u.role === UserRole.USER).length,
  };

  const roleLabels: Record<string, string> = {
    admin: 'Admin',
    business_developer: 'Business Developer',
    user: 'User',
  };

  const permissionLabels: Record<Permission, string> = {
    [Permission.ADMIN_ALL]: 'Admin: All Access',
    [Permission.DASHBOARD_VIEW]: 'Dashboard: View',
    [Permission.CONTACT_VIEW]: 'Contact: View',
    [Permission.CONTACT_MANAGE]: 'Contact: Manage',
    [Permission.CONTACT_DELETE]: 'Contact: Delete',
    [Permission.CONTENT_VIEW]: 'Content: View',
    [Permission.CONTENT_CREATE]: 'Content: Create',
    [Permission.CONTENT_EDIT]: 'Content: Edit',
    [Permission.CONTENT_DELETE]: 'Content: Delete',
    [Permission.USERS_VIEW]: 'Users: View',
    [Permission.USERS_CREATE]: 'Users: Create',
    [Permission.USERS_EDIT]: 'Users: Edit',
    [Permission.USERS_DELETE]: 'Users: Delete',
    [Permission.SETTINGS_VIEW]: 'Settings: View',
    [Permission.SETTINGS_MANAGE]: 'Settings: Manage',
    [Permission.CRM_VIEW]: 'CRM: View',
    [Permission.CRM_MANAGE]: 'CRM: Manage',
  };

  return (
    <div className="space-y-6">
      <PageTitle title="Roles & Permissions" />

      {/* Roles Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Users</p>
              <p className="text-2xl font-bold text-gray-900">{roleCounts.all}</p>
            </div>
            <Users className="h-8 w-8 text-gray-400" />
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Admins</p>
              <p className="text-2xl font-bold text-gray-900">{roleCounts.admin}</p>
            </div>
            <Shield className="h-8 w-8 text-red-400" />
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Business Developers</p>
              <p className="text-2xl font-bold text-gray-900">{roleCounts.business_developer}</p>
            </div>
            <Shield className="h-8 w-8 text-blue-400" />
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Users</p>
              <p className="text-2xl font-bold text-gray-900">{roleCounts.user}</p>
            </div>
            <Shield className="h-8 w-8 text-green-400" />
          </div>
        </div>
      </div>

      {/* Roles and Permissions */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Role Permissions</h2>
        <div className="space-y-6">
          {Object.entries(ROLE_PERMISSIONS).map(([role, permissions]) => (
            <div key={role} className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-semibold text-gray-900">
                  {roleLabels[role] || role}
                </h3>
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                  {permissions.length} permission{permissions.length !== 1 ? 's' : ''}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-3">
                {permissions.map((permission) => (
                  <div
                    key={permission}
                    className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 rounded px-3 py-2"
                  >
                    <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>{permissionLabels[permission] || permission}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Users by Role */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Users by Role</h2>
          <div className="w-48">
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value as UserRole | 'all')}
              className="w-full px-3 py-3 text-sm border border-gray-200 rounded-lg bg-white text-gray-900 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none transition-colors cursor-pointer hover:border-gray-300"
            >
              <option value="all">All Roles</option>
              <option value={UserRole.ADMIN}>Admin</option>
              <option value={UserRole.BUSINESS_DEVELOPER}>Business Developer</option>
              <option value={UserRole.USER}>User</option>
            </select>
          </div>
        </div>

        <Table
          columns={[
            { key: 'name', label: 'Name' },
            { key: 'email', label: 'Email' },
            { key: 'role', label: 'Role' },
            { key: 'status', label: 'Status' },
            { key: 'actions', label: 'Actions', className: 'w-32 text-right' },
          ]}
          data={filteredUsers.map((user) => ({
            ...user,
            createdAt: new Date(user.createdAt).toLocaleDateString(),
          }))}
          isLoading={loading}
          emptyMessage="No users found."
          renderCell={(column, row: User & { createdAt: string }) => {
            if (column.key === 'name') {
              return <span className="font-medium text-gray-900">{row.name}</span>;
            }
            if (column.key === 'email') {
              return <span className="text-gray-600">{row.email}</span>;
            }
            if (column.key === 'role') {
              const roleLabel = roleLabels[row.role] || row.role;
              return (
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                  {roleLabel}
                </span>
              );
            }
            if (column.key === 'status') {
              return (
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    row.isActive
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {row.isActive ? 'Active' : 'Inactive'}
                </span>
              );
            }
            if (column.key === 'actions') {
              const isEditing = editingUser === row.id;
              return (
                <div className="flex items-center justify-end gap-2">
                  {isEditing ? (
                    <>
                      <div className="w-40">
                        <select
                          value={newRole || row.role}
                          onChange={(e) => setNewRole(e.target.value)}
                          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white text-gray-900 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none transition-colors cursor-pointer hover:border-gray-300"
                        >
                          <option value={UserRole.ADMIN}>Admin</option>
                          <option value={UserRole.BUSINESS_DEVELOPER}>Business Developer</option>
                          <option value={UserRole.USER}>User</option>
                        </select>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => handleRoleChange(row.id, newRole || row.role)}
                      >
                        Save
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setEditingUser(null);
                          setNewRole('');
                        }}
                      >
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setEditingUser(row.id);
                        setNewRole(row.role);
                      }}
                    >
                      Change Role
                    </Button>
                  )}
                </div>
              );
            }
            return null;
          }}
        />
      </div>

      {ToastComponent}
    </div>
  );
}
