'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useToast } from '@/components/ui/toast';
import { User, Mail, Lock, Save, Eye, EyeOff } from 'lucide-react';
import { FieldLabel } from '@/components/ui/adminUi/field-label';
import { Input } from '@/components/ui/adminUi/input';
import { Button } from '@/components/ui/adminUi/button';
import { ImageUpload } from '@/components/ui/adminUi/image-upload';

interface UserProfile {
    id: string;
    email: string;
    name: string;
    role: string;
    image?: string;
}

export function ProfileSection() {
    const { data: session, update } = useSession();
    const { showToast, ToastComponent } = useToast();
    const [loading, setLoading] = useState(false);
    const [initialLoading, setInitialLoading] = useState(true);
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        image: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    useEffect(() => {
        fetchProfile();
        // eslint-disable-next-line react-hooks/exhaustive-deps -- run once on mount
    }, []);

    const fetchProfile = async () => {
        try {
            setInitialLoading(true);
            const response = await fetch('/api/admin/users/me');
            if (response.ok) {
                const data = await response.json();
                setProfile(data);
                setFormData({
                    name: data.name || '',
                    email: data.email || '',
                    image: data.image || '',
                    currentPassword: '',
                    newPassword: '',
                    confirmPassword: '',
                });
            } else {
                const errorData = await response.json().catch(() => ({ error: `HTTP ${response.status}` }));
                const errorMessage = errorData?.error || errorData?.details || `Failed to load profile (${response.status})`;
                showToast(errorMessage, 'error');
            }
        } catch (error) {
            showToast('Failed to load profile', 'error');
        } finally {
            setInitialLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (formData.newPassword) {
                if (!formData.currentPassword) {
                    showToast('Current password is required', 'error');
                    setLoading(false);
                    return;
                }
                if (formData.newPassword !== formData.confirmPassword) {
                    showToast('New passwords do not match', 'error');
                    setLoading(false);
                    return;
                }
                if (formData.newPassword.length < 8) {
                    showToast('New password must be at least 8 characters', 'error');
                    setLoading(false);
                    return;
                }
            }

            const updatePayload: any = {
                name: formData.name,
                email: formData.email,
                image: formData.image || null,
            };

            if (formData.newPassword) {
                updatePayload.currentPassword = formData.currentPassword;
                updatePayload.newPassword = formData.newPassword;
            }

            const response = await fetch('/api/admin/users/me', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatePayload),
            });

            if (response.ok) {
                const updated = await response.json();
                showToast('Profile updated successfully', 'success');
                setProfile(updated);
                setFormData({
                    name: updated.name || formData.name,
                    email: updated.email || formData.email,
                    image: updated.image || '',
                    currentPassword: '',
                    newPassword: '',
                    confirmPassword: '',
                });
                setTimeout(() => {
                    update().catch(() => { });
                }, 300);
            } else {
                const error = await response.json();
                showToast(error.error || 'Failed to update profile', 'error');
            }
        } catch (error) {
            showToast('Failed to update profile', 'error');
        } finally {
            setLoading(false);
        }
    };

    if (initialLoading) {
        return (
            <div className="bg-white rounded-lg shadow p-6">
                <div className="text-center text-gray-600">Loading profile...</div>
            </div>
        );
    }

    if (!profile) {
        return (
            <div className="bg-white rounded-lg shadow p-6">
                <div className="text-center text-gray-600">
                    <p className="mb-4">Failed to load profile.</p>
                    <button
                        onClick={fetchProfile}
                        className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="bg-white rounded-lg shadow p-6 space-y-6">
                    {/* Name Field */}
                    <div className="space-y-1.5">
                        <FieldLabel htmlFor="name" required>
                            Full Name
                        </FieldLabel>
                        <Input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Enter your full name"
                            required
                            disabled={loading}
                        />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1.5">
                        <FieldLabel htmlFor="email" required>
                            Email Address
                        </FieldLabel>
                        <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="Enter your email address"
                            required
                            disabled={loading}
                        />
                    </div>

                    {/* Profile Image */}
                    <div className="space-y-1.5">
                        <FieldLabel htmlFor="image">
                            Profile Image
                        </FieldLabel>
                        <ImageUpload
                            value={formData.image || ''}
                            onChange={(url) => setFormData({ ...formData, image: url })}
                            label=""
                        />
                    </div>

                    {/* Role Display (Read-only) */}
                    <div className="space-y-1.5">
                        <FieldLabel htmlFor="role">
                            Role
                        </FieldLabel>
                        <div className="w-full px-3 py-3 text-sm border border-gray-200 rounded-lg bg-gray-50 text-gray-600 capitalize">
                            {profile.role}
                        </div>
                    </div>

                    {/* Password Change Section */}
                    <div className="border-t border-gray-200 pt-6 space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Change Password
                            </h3>
                            <p className="text-sm text-gray-600">
                                Leave blank to keep current password
                            </p>
                        </div>

                        {/* Current Password */}
                        <div className="space-y-1.5">
                            <FieldLabel htmlFor="currentPassword">
                                Current Password
                            </FieldLabel>
                            <div className="relative">
                                <Input
                                    id="currentPassword"
                                    type={showCurrentPassword ? 'text' : 'password'}
                                    value={formData.currentPassword}
                                    onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}
                                    placeholder="Enter current password"
                                    disabled={loading}
                                    className="pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                    onMouseDown={(e) => e.preventDefault()}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer outline-none focus:outline-none p-1"
                                    aria-label={showCurrentPassword ? 'Hide password' : 'Show password'}
                                    disabled={loading}
                                >
                                    {showCurrentPassword ? (
                                        <EyeOff className="h-5 w-5" />
                                    ) : (
                                        <Eye className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* New Password */}
                        <div className="space-y-1.5">
                            <FieldLabel htmlFor="newPassword">
                                New Password
                            </FieldLabel>
                            <div className="relative">
                                <Input
                                    id="newPassword"
                                    type={showNewPassword ? 'text' : 'password'}
                                    value={formData.newPassword}
                                    onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                                    placeholder="Enter new password (min. 8 characters)"
                                    minLength={8}
                                    disabled={loading}
                                    className="pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowNewPassword(!showNewPassword)}
                                    onMouseDown={(e) => e.preventDefault()}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer outline-none focus:outline-none p-1"
                                    aria-label={showNewPassword ? 'Hide password' : 'Show password'}
                                    disabled={loading}
                                >
                                    {showNewPassword ? (
                                        <EyeOff className="h-5 w-5" />
                                    ) : (
                                        <Eye className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div className="space-y-1.5">
                            <FieldLabel htmlFor="confirmPassword">
                                Confirm New Password
                            </FieldLabel>
                            <div className="relative">
                                <Input
                                    id="confirmPassword"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                    placeholder="Confirm new password"
                                    disabled={loading}
                                    className="pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    onMouseDown={(e) => e.preventDefault()}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer outline-none focus:outline-none p-1"
                                    aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                                    disabled={loading}
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff className="h-5 w-5" />
                                    ) : (
                                        <Eye className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end gap-2 pt-4 border-t border-gray-200">
                        <Button
                            type="submit"
                            variant="primary"
                            disabled={loading}
                        >
                            {loading ? 'Saving...' : 'Save Changes'}
                        </Button>
                    </div>
                </div>
            </form>
            {ToastComponent}
        </>
    );
}
