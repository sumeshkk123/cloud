'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useToast } from '@/components/ui/toast';
import { Table } from '@/components/ui/adminUi/table';
import { Button } from '@/components/ui/adminUi/button';
import { PageTitle } from '@/components/ui/adminUi/page-title';
import { Modal } from '@/components/ui/adminUi/modal';
import { DeleteConfirmModal } from '@/components/ui/adminUi/delete-confirm-modal';
import { ActionMenu } from '@/components/ui/adminUi/action-menu';
import { Input } from '@/components/ui/adminUi/input';
import { Select } from '@/components/ui/adminUi/select';
import { FieldLabel } from '@/components/ui/adminUi/field-label';
import { UserRole, Permission } from '@/lib/permissions';
import { usePermissions } from '@/lib/hooks/use-permissions';
import { Plus, Eye, EyeOff, Activity } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  permissions: any;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export function UsersSection() {
  const router = useRouter();
  const { data: session, update } = useSession();
  const { can, isAdmin } = usePermissions();
  const { showToast, ToastComponent } = useToast();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: UserRole.USER,
    permissions: [] as Permission[],
    useCustomPermissions: false,
    isActive: true,
  });

  const canCreate = can(Permission.USERS_CREATE) || isAdmin;
  const canEdit = can(Permission.USERS_EDIT) || isAdmin;
  const canDelete = can(Permission.USERS_DELETE) || isAdmin;
  const userRole = (session?.user as any)?.role || 'user';
  const isBusinessDeveloper = userRole === UserRole.BUSINESS_DEVELOPER;
  const canDeleteUser = isAdmin || isBusinessDeveloper;

  useEffect(() => {
    fetchUsers();
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

  const handleCreate = () => {
    setEditingUserId(null);
    setShowPassword(false);
    setShowCurrentPassword(false);
    setFormData({
      name: '',
      email: '',
      password: '',
      role: UserRole.USER,
      permissions: [],
      useCustomPermissions: false,
      isActive: true,
    });
    setIsFormOpen(true);
  };

  const handleEdit = (user: User) => {
    setEditingUserId(user.id);
    setFormData({
      name: user.name,
      email: user.email,
      password: '••••••••',
      role: user.role as UserRole,
      permissions: [],
      useCustomPermissions: false,
      isActive: user.isActive,
    });
    setIsFormOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!editingUserId && !formData.password) {
      showToast('Password is required for new users', 'error');
      return;
    }

    if (formData.password && formData.password.length < 8) {
      showToast('Password must be at least 8 characters', 'error');
      return;
    }

    try {
      const url = editingUserId
        ? `/api/admin/users/${editingUserId}`
        : '/api/admin/users';
      const method = editingUserId ? 'PUT' : 'POST';

      const payload: any = {
        name: formData.name,
        email: formData.email,
        role: formData.role,
        isActive: formData.isActive,
      };

      payload.permissions = null;

      if (formData.password && formData.password !== '••••••••') {
        payload.password = formData.password;
      }

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        showToast(
          editingUserId ? 'User updated successfully' : 'User created successfully',
          'success'
        );

        if (editingUserId && editingUserId === (session?.user as any)?.id) {
          setTimeout(() => {
            update().catch((err) => {
              console.error('Failed to update session:', err);
            });
          }, 300);
        }

        setIsFormOpen(false);
        setEditingUserId(null);
        fetchUsers();
      } else {
        const error = await response.json();
        showToast(error.error || 'Failed to save user', 'error');
      }
    } catch (error) {
      showToast('Failed to save user', 'error');
    }
  };

  const roleOptions = [
    { value: UserRole.ADMIN, label: 'Admin' },
    { value: UserRole.BUSINESS_DEVELOPER, label: 'Business Developer' },
    { value: UserRole.USER, label: 'User' },
  ];

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <div className="text-center text-gray-600">Loading users...</div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <PageTitle
        title="Users"
        description="Manage users and their permissions."
      >
        {canCreate && (
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-end w-full">
            <Button
              type="button"
              variant="primary"
              size="md"
              rounded="default"
              leftIcon={<Plus className="h-4 w-4" />}
              className="whitespace-nowrap"
              onClick={handleCreate}
            >
              New User
            </Button>
          </div>
        )}
      </PageTitle>

      <Table
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'email', label: 'Email' },
          { key: 'role', label: 'Role' },
          { key: 'status', label: 'Status' },
          { key: 'createdAt', label: 'Created' },
          ...(canEdit || canDelete ? [{ key: 'actions', label: 'Actions', className: 'w-24 text-right' }] : []),
        ]}
        data={users.map((user) => ({
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
            return <span>{row.email}</span>;
          }
          if (column.key === 'role') {
            const roleLabels: Record<string, string> = {
              admin: 'Admin',
              business_developer: 'Business Developer',
              user: 'User',
            };
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
                className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full ${row.isActive
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-800'
                  }`}
              >
                {row.isActive ? (
                  <>
                    <Eye className="h-3 w-3" />
                    Active
                  </>
                ) : (
                  <>
                    <EyeOff className="h-3 w-3" />
                    Inactive
                  </>
                )}
              </span>
            );
          }
          if (column.key === 'createdAt') {
            return <span>{row.createdAt}</span>;
          }
          if (column.key === 'actions') {
            const userRow = row as User;
            const isCurrentUser = userRow.id === (session?.user as any)?.id;
            return (
              <ActionMenu
                onEdit={canEdit ? () => handleEdit(userRow) : undefined}
                onDelete={
                  !isCurrentUser && canDeleteUser
                    ? () => {
                      setUserToDelete(userRow.id);
                      setDeleteConfirmOpen(true);
                    }
                    : undefined
                }
                customActions={
                  isAdmin
                    ? [
                      {
                        label: 'View Activities',
                        icon: <Activity className="h-4 w-4" />,
                        onClick: () => {
                          router.push(`/admin/settings/user-activities?userId=${userRow.id}`);
                        },
                      },
                    ]
                    : []
                }
              />
            );
          }
          return row[column.key as keyof typeof row];
        }}
      />

      <Modal
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
          setEditingUserId(null);
          setShowPassword(false);
          setShowCurrentPassword(false);
          setFormData({
            name: '',
            email: '',
            password: '',
            role: UserRole.USER,
            permissions: [],
            useCustomPermissions: false,
            isActive: true,
          });
        }}
        title={editingUserId ? 'Edit User' : 'Create User'}
        size="2xl"
        footer={
          <div className="flex justify-end items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                setIsFormOpen(false);
                setEditingUserId(null);
                setShowPassword(false);
                setShowCurrentPassword(false);
                setFormData({
                  name: '',
                  email: '',
                  password: '',
                  role: UserRole.USER,
                  permissions: [],
                  useCustomPermissions: false,
                  isActive: true,
                });
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              form="user-form"
              variant="primary"
            >
              {editingUserId ? 'Update User' : 'Create User'}
            </Button>
          </div>
        }
      >
        <form id="user-form" onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <FieldLabel htmlFor="name" required>
              Full Name
            </FieldLabel>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              autoComplete="off"
            />
          </div>
          <div className="space-y-1.5">
            <FieldLabel htmlFor="email" required>
              Email
            </FieldLabel>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              autoComplete="off"
            />
          </div>
          <div className="space-y-1.5">
            <FieldLabel htmlFor={editingUserId ? "password-new" : "password"} required={!editingUserId}>
              Password
            </FieldLabel>
            {editingUserId ? (
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">
                    Current Password
                  </label>
                  <div className="relative">
                    <Input
                      id="password-display"
                      type={showCurrentPassword ? 'text' : 'password'}
                      value={showCurrentPassword ? '•••••••• (Encrypted)' : '••••••••'}
                      readOnly
                      disabled
                      autoComplete="off"
                      className="bg-gray-50 cursor-not-allowed opacity-75 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      onMouseDown={(e) => e.preventDefault()}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer outline-none focus:outline-none p-1 z-10"
                      aria-label={showCurrentPassword ? 'Hide password' : 'Show password'}
                    >
                      {showCurrentPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">
                    New Password (Optional)
                  </label>
                  <div className="relative">
                    <Input
                      id="password-new"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password === '••••••••' ? '' : formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      minLength={8}
                      placeholder="Enter new password (optional)"
                      className="pr-10"
                      autoComplete="off"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={(e) => e.preventDefault()}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer outline-none focus:outline-none p-1 z-10"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  minLength={8}
                  placeholder="Enter password (min. 8 characters)"
                  className="pr-10"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={(e) => e.preventDefault()}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer outline-none focus:outline-none p-1"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            )}
            {editingUserId && (
              <p className="text-xs text-gray-500 mt-1">
                Current password is shown above. Enter a new password below to change it, or leave blank to keep current password.
              </p>
            )}
          </div>
          <div className="space-y-1.5">
            <FieldLabel htmlFor="role" required>
              Role
            </FieldLabel>
            <Select
              id="role"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value as UserRole })}
              options={roleOptions.map((role) => ({ value: role.value, label: role.label }))}
              required
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="isActive"
              checked={formData.isActive}
              onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
              className="h-4 w-4 bg-white border border-gray-300 rounded focus:ring-primary-500 accent-primary-600"
            />
            <label htmlFor="isActive" className="ml-2 text-sm text-gray-700">
              Active
            </label>
          </div>
        </form>
      </Modal>

      <DeleteConfirmModal
        isOpen={deleteConfirmOpen}
        onClose={() => {
          setDeleteConfirmOpen(false);
          setUserToDelete(null);
        }}
        onConfirm={async () => {
          if (!userToDelete) return;
          if (userToDelete === (session?.user as any)?.id) {
            showToast('You cannot delete your own account', 'error');
            setDeleteConfirmOpen(false);
            setUserToDelete(null);
            return;
          }
          try {
            setIsDeleting(true);
            const response = await fetch(`/api/admin/users/${userToDelete}`, {
              method: 'DELETE',
            });
            if (!response.ok) {
              const error = await response.json();
              throw new Error(error.error || 'Failed to delete user');
            }
            showToast('User deleted successfully', 'success');
            setDeleteConfirmOpen(false);
            setUserToDelete(null);
            fetchUsers();
          } catch (error) {
            const message = error instanceof Error ? error.message : 'Unable to delete user.';
            showToast(message, 'error');
          } finally {
            setIsDeleting(false);
          }
        }}
        title="Delete User"
        message="Are you sure that you want to continue? This action cannot be reversed."
        isLoading={isDeleting}
      />

      {ToastComponent}
    </div>
  );
}
