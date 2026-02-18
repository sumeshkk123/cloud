'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import { signOut } from 'next-auth/react';
import {
  Home,
  FileText,
  Settings,
  Mail,
  LogOut,
  Tag,
  Sparkles,
  Grid3x3,
  Wrench,
  HelpCircle,
  MessageSquare,
  ChevronDown,
  Building2,
  Network,
  PenLine,
  LucideIcon,
  Layers,
  GitBranch,
  Bot,
  ImageIcon,
  Inbox,
  PlayCircle,
  LayoutList,
  Newspaper,
} from 'lucide-react';
import { usePermissions } from '@/lib/hooks/use-permissions';
import { Permission, UserRole } from '@/lib/permissions';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';

interface SidebarProps {
  isSidebarOpen: boolean;
}

interface MenuItem {
  href: string;
  icon: LucideIcon;
  label: string;
  permission?: Permission;
  hideForBusinessDeveloper?: boolean;
  showForAdminOrBusinessDeveloper?: boolean;
}

export function Sidebar({ isSidebarOpen }: SidebarProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { can, isAdmin } = usePermissions();
  const { data: session } = useSession();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isModulesOpen, setIsModulesOpen] = useState(false);
  const [isPlansOpen, setIsPlansOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustrySolutionsOpen, setIsIndustrySolutionsOpen] = useState(false);

  const userRole = (session?.user as any)?.role || 'user';
  const isBusinessDeveloper = userRole === UserRole.BUSINESS_DEVELOPER;
  const canManageUsers = can(Permission.USERS_VIEW) || isAdmin;

  const isActive = (path: string) => {
    if (path === '/admin') return pathname === '/admin';
    // Exact match or path followed by / (for sub-routes)
    return pathname === path || pathname.startsWith(path + '/');
  };

  useEffect(() => {
    if (pathname?.startsWith('/admin/settings')) setIsSettingsOpen(true);
    if (pathname?.startsWith('/admin/features')) setIsFeaturesOpen(true);
    if (pathname?.startsWith('/admin/modules')) setIsModulesOpen(true);
    if (pathname?.startsWith('/admin/plans')) setIsPlansOpen(true);
    if (pathname?.startsWith('/admin/services')) setIsServicesOpen(true);
    if (pathname?.startsWith('/admin/industry-solutions')) setIsIndustrySolutionsOpen(true);
  }, [pathname]);

  useEffect(() => {
    if (!isSidebarOpen) {
      setIsSettingsOpen(false);
      setIsFeaturesOpen(false);
      setIsModulesOpen(false);
      setIsPlansOpen(false);
      setIsServicesOpen(false);
      setIsIndustrySolutionsOpen(false);
    }
  }, [isSidebarOpen]);

  const menuItems: MenuItem[] = [
    { href: '/admin', icon: Home, label: 'Dashboard', permission: Permission.DASHBOARD_VIEW },
    { href: '/admin/meta-details', icon: Tag, label: 'Meta Details', permission: Permission.CONTENT_CREATE, hideForBusinessDeveloper: true },
    { href: '/admin/page-titles', icon: PenLine, label: 'Page Titles', permission: Permission.CONTENT_CREATE, hideForBusinessDeveloper: true },
    { href: '/admin/contact', icon: Mail, label: 'Contact', permission: Permission.CONTENT_CREATE, hideForBusinessDeveloper: true },
    { href: '/admin/contact-submissions', icon: Inbox, label: 'Enquiries', permission: Permission.CONTACT_VIEW, hideForBusinessDeveloper: true },
    { href: '/admin/faq', icon: HelpCircle, label: 'FAQ', permission: Permission.CONTENT_CREATE, hideForBusinessDeveloper: true },
    { href: '/admin/testimonials', icon: MessageSquare, label: 'Testimonials', permission: Permission.CONTENT_CREATE, hideForBusinessDeveloper: true },
    { href: '/admin/media', icon: ImageIcon, label: 'Media', permission: Permission.CONTENT_EDIT, hideForBusinessDeveloper: true },
    { href: '/admin/changelog', icon: GitBranch, label: 'Changelog', permission: Permission.CONTENT_CREATE, hideForBusinessDeveloper: true },
    { href: '/admin/blog', icon: Newspaper, label: 'Blog', permission: Permission.CONTENT_CREATE, hideForBusinessDeveloper: true },
    { href: '/admin/ai-copilot', icon: Bot, label: 'AI Co-pilot', permission: Permission.CONTENT_CREATE, hideForBusinessDeveloper: true },
  ];

  const shouldShowMenuItem = (item: MenuItem) => {
    if (item.hideForBusinessDeveloper && isBusinessDeveloper) return false;
    if (item.showForAdminOrBusinessDeveloper && !isAdmin && !isBusinessDeveloper) return false;
    if (item.permission) return can(item.permission) || isAdmin;
    return true;
  };

  const MenuLink = ({ item }: { item: MenuItem }) => {
    const Icon = item.icon;
    const active = isActive(item.href);

    return (
      <Link
        href={item.href}
        className={`flex items-center ${isSidebarOpen ? 'px-4' : 'px-0 justify-center'} py-2.5 rounded-lg transition-colors text-sm group relative ${active
          ? 'bg-primary-600 text-white shadow-sm'
          : 'text-gray-700 hover:bg-gray-100'
          }`}
        title={!isSidebarOpen ? item.label : undefined}
      >
        <Icon className={`h-4 w-4 ${isSidebarOpen ? 'mr-3' : ''} ${active ? 'text-white' : ''}`} />
        {isSidebarOpen && <span>{item.label}</span>}
        {!isSidebarOpen && (
          <span className="fixed left-16 ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-[100] transition-opacity">
            {item.label}
          </span>
        )}
      </Link>
    );
  };

  return (
    <>
      <style>{`
        .admin-sidebar-nav-scroll {
          scrollbar-width: none;
        }
        .admin-sidebar-nav-scroll::-webkit-scrollbar {
          width: 0;
          background: transparent;
        }
        .admin-sidebar-group:hover .admin-sidebar-nav-scroll,
        .admin-sidebar-group:focus-within .admin-sidebar-nav-scroll {
          scrollbar-width: thin;
        }
        .admin-sidebar-group:hover .admin-sidebar-nav-scroll::-webkit-scrollbar,
        .admin-sidebar-group:focus-within .admin-sidebar-nav-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .admin-sidebar-group:hover .admin-sidebar-nav-scroll::-webkit-scrollbar-track,
        .admin-sidebar-group:focus-within .admin-sidebar-nav-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .admin-sidebar-group:hover .admin-sidebar-nav-scroll::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 3px;
        }
        .admin-sidebar-group:hover .admin-sidebar-nav-scroll::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
      `}</style>
      <aside
        className={`admin-sidebar-group group fixed lg:static left-0 top-0 h-screen bg-white flex flex-col transition-all duration-300 z-50 overflow-visible flex-shrink-0 ${isSidebarOpen ? 'w-72' : 'w-16'
          } ${isSidebarOpen ? 'lg:translate-x-0' : 'translate-x-0'}`}
      >
        {/* Logo/Branding */}
        <div
          className={`h-16 border-b border-gray-200 flex items-center ${isSidebarOpen ? 'px-6 justify-center' : 'px-4 justify-center'
            }`}
        >
          {isSidebarOpen ? (
            <Link href="/admin" className="flex items-center justify-center flex-1">
              <Image
                src="/cloudmlm-logo.webp"
                alt="Cloud MLM Software"
                width={180}
                height={50}
                className="h-auto w-full max-w-[160px] object-contain"
                priority
                quality={90}
                sizes="(max-width: 768px) 150px, 180px"
              />
            </Link>
          ) : (
            <Link href="/admin" className="w-10 h-10 flex items-center justify-center overflow-hidden">
              <Image
                src="/favicon.png"
                alt="Cloud MLM Software"
                width={40}
                height={40}
                className="w-full h-full object-contain"
                priority
              />
            </Link>
          )}
        </div>

        {/* Navigation - scrollbar shows only on sidebar hover */}
        <div className="admin-sidebar-nav-scroll flex-1 overflow-y-auto overflow-x-visible py-6 min-h-0">
          {/* MENU Section */}
          <div className={`${isSidebarOpen ? 'px-6' : 'px-3'} mb-6`}>
            <nav className="space-y-1">
              {menuItems.map((item) =>
                shouldShowMenuItem(item) && <MenuLink key={item.href} item={item} />
              )}

              {/* Demos */}
              {shouldShowMenuItem({ href: '/admin/demos', icon: PlayCircle, label: 'Demos', permission: Permission.CONTENT_CREATE, hideForBusinessDeveloper: true }) && (
                <MenuLink item={{ href: '/admin/demos', icon: PlayCircle, label: 'Demos', permission: Permission.CONTENT_CREATE, hideForBusinessDeveloper: true }} />
              )}

              {/* Features Dropdown */}
              {shouldShowMenuItem({ href: '/admin/features', icon: Sparkles, label: 'Features', permission: Permission.CONTENT_CREATE, hideForBusinessDeveloper: true }) && (
                <div className="relative">
                  <button
                    onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                    className={`w-full flex items-center ${isSidebarOpen ? 'px-4' : 'px-0 justify-center'} py-2.5 rounded-lg transition-colors text-sm group relative ${isActive('/admin/features')
                      ? 'bg-primary-600 text-white shadow-sm'
                      : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    title={!isSidebarOpen ? 'Features' : undefined}
                  >
                    <Sparkles className={`h-4 w-4 ${isSidebarOpen ? 'mr-3' : ''} ${isActive('/admin/features') ? 'text-white' : ''}`} />
                    {isSidebarOpen && (
                      <>
                        <span>Features</span>
                        <ChevronDown className={`h-4 w-4 ml-auto transition-transform ${isFeaturesOpen ? 'rotate-180' : ''} ${isActive('/admin/features') ? 'text-white' : ''}`} />
                      </>
                    )}
                    {!isSidebarOpen && (
                      <span className="fixed left-20 ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-[100] transition-opacity">
                        Features
                      </span>
                    )}
                  </button>
                  {isSidebarOpen && isFeaturesOpen && (
                    <div className="mt-1 ml-4 space-y-1 border-l-2 border-gray-200 pl-4">
                      <Link
                        href="/admin/features"
                        className={`flex items-center px-4 py-2 rounded-lg transition-colors text-sm ${pathname === '/admin/features' || (pathname.startsWith('/admin/features') && !pathname.includes('/meta-page-title'))
                          ? 'bg-primary-50 text-primary-600 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                          }`}
                      >
                        <span>Feature List</span>
                      </Link>
                      <Link
                        href="/admin/features/meta-page-title"
                        className={`flex items-center px-4 py-2 rounded-lg transition-colors text-sm ${pathname === '/admin/features/meta-page-title' || pathname.startsWith('/admin/features/meta-page-title')
                          ? 'bg-primary-50 text-primary-600 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                          }`}
                      >
                        <span>Feature Meta and Page Title</span>
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {/* Modules Dropdown */}
              {shouldShowMenuItem({ href: '/admin/modules', icon: Layers, label: 'Modules', permission: Permission.CONTENT_CREATE, hideForBusinessDeveloper: true }) && (
                <div className="relative">
                  <button
                    onClick={() => setIsModulesOpen(!isModulesOpen)}
                    className={`w-full flex items-center ${isSidebarOpen ? 'px-4' : 'px-0 justify-center'} py-2.5 rounded-lg transition-colors text-sm group relative ${isActive('/admin/modules')
                      ? 'bg-primary-600 text-white shadow-sm'
                      : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    title={!isSidebarOpen ? 'Modules' : undefined}
                  >
                    <Layers className={`h-4 w-4 ${isSidebarOpen ? 'mr-3' : ''} ${isActive('/admin/modules') ? 'text-white' : ''}`} />
                    {isSidebarOpen && (
                      <>
                        <span>Modules</span>
                        <ChevronDown className={`h-4 w-4 ml-auto transition-transform ${isModulesOpen ? 'rotate-180' : ''} ${isActive('/admin/modules') ? 'text-white' : ''}`} />
                      </>
                    )}
                    {!isSidebarOpen && (
                      <span className="fixed left-20 ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-[100] transition-opacity">
                        Modules
                      </span>
                    )}
                  </button>
                  {isSidebarOpen && isModulesOpen && (
                    <div className="mt-1 ml-4 space-y-1 border-l-2 border-gray-200 pl-4">
                      <Link
                        href="/admin/modules"
                        className={`flex items-center px-4 py-2 rounded-lg transition-colors text-sm ${pathname === '/admin/modules' || (pathname.startsWith('/admin/modules') && !pathname.includes('/meta-page-title'))
                          ? 'bg-primary-50 text-primary-600 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                          }`}
                      >
                        <span>Module List</span>
                      </Link>
                      <Link
                        href="/admin/modules/meta-page-title"
                        className={`flex items-center px-4 py-2 rounded-lg transition-colors text-sm ${pathname === '/admin/modules/meta-page-title' || pathname.startsWith('/admin/modules/meta-page-title')
                          ? 'bg-primary-50 text-primary-600 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                          }`}
                      >
                        <span>Module Meta Details</span>
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {/* Plans Dropdown */}
              {shouldShowMenuItem({ href: '/admin/plans', icon: LayoutList, label: 'MLM Plans', permission: Permission.CONTENT_CREATE, hideForBusinessDeveloper: true }) && (
                <div className="relative">
                  <button
                    onClick={() => setIsPlansOpen(!isPlansOpen)}
                    className={`w-full flex items-center ${isSidebarOpen ? 'px-4' : 'px-0 justify-center'} py-2.5 rounded-lg transition-colors text-sm group relative ${isActive('/admin/plans')
                      ? 'bg-primary-600 text-white shadow-sm'
                      : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    title={!isSidebarOpen ? 'MLM Plans' : undefined}
                  >
                    <LayoutList className={`h-4 w-4 ${isSidebarOpen ? 'mr-3' : ''} ${isActive('/admin/plans') ? 'text-white' : ''}`} />
                    {isSidebarOpen && (
                      <>
                        <span>MLM Plans</span>
                        <ChevronDown className={`h-4 w-4 ml-auto transition-transform ${isPlansOpen ? 'rotate-180' : ''} ${isActive('/admin/plans') ? 'text-white' : ''}`} />
                      </>
                    )}
                    {!isSidebarOpen && (
                      <span className="fixed left-20 ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-[100] transition-opacity">
                        MLM Plans
                      </span>
                    )}
                  </button>
                  {isSidebarOpen && isPlansOpen && (
                    <div className="mt-1 ml-4 space-y-1 border-l-2 border-gray-200 pl-4">
                      <Link
                        href="/admin/plans"
                        className={`flex items-center px-4 py-2 rounded-lg transition-colors text-sm ${pathname === '/admin/plans' && searchParams?.get('tab') !== 'faq' && !pathname.includes('/meta-page-title')
                          ? 'bg-primary-50 text-primary-600 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                          }`}
                      >
                        <span>MLM Plans</span>
                      </Link>
                      <Link
                        href="/admin/plans/meta-page-title"
                        className={`flex items-center px-4 py-2 rounded-lg transition-colors text-sm ${pathname === '/admin/plans/meta-page-title' || pathname.startsWith('/admin/plans/meta-page-title')
                          ? 'bg-primary-50 text-primary-600 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                          }`}
                      >
                        <span>Plans Meta Details</span>
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {/* Services Dropdown */}
              {shouldShowMenuItem({ href: '/admin/services', icon: Wrench, label: 'Services', permission: Permission.CONTENT_CREATE, hideForBusinessDeveloper: true }) && (
                <div className="relative">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`w-full flex items-center ${isSidebarOpen ? 'px-4' : 'px-0 justify-center'} py-2.5 rounded-lg transition-colors text-sm group relative ${isActive('/admin/services')
                      ? 'bg-primary-600 text-white shadow-sm'
                      : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    title={!isSidebarOpen ? 'Services' : undefined}
                  >
                    <Wrench className={`h-4 w-4 ${isSidebarOpen ? 'mr-3' : ''} ${isActive('/admin/services') ? 'text-white' : ''}`} />
                    {isSidebarOpen && (
                      <>
                        <span>Services</span>
                        <ChevronDown className={`h-4 w-4 ml-auto transition-transform ${isServicesOpen ? 'rotate-180' : ''} ${isActive('/admin/services') ? 'text-white' : ''}`} />
                      </>
                    )}
                    {!isSidebarOpen && (
                      <span className="fixed left-20 ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-[100] transition-opacity">
                        Services
                      </span>
                    )}
                  </button>
                  {isSidebarOpen && isServicesOpen && (
                    <div className="mt-1 ml-4 space-y-1 border-l-2 border-gray-200 pl-4">
                      <Link
                        href="/admin/services"
                        className={`flex items-center px-4 py-2 rounded-lg transition-colors text-sm ${pathname === '/admin/services' || (pathname.startsWith('/admin/services') && !pathname.includes('/meta-page-title'))
                          ? 'bg-primary-50 text-primary-600 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                          }`}
                      >
                        <span>Service List</span>
                      </Link>
                      <Link
                        href="/admin/services/meta-page-title"
                        className={`flex items-center px-4 py-2 rounded-lg transition-colors text-sm ${pathname === '/admin/services/meta-page-title' || pathname.startsWith('/admin/services/meta-page-title')
                          ? 'bg-primary-50 text-primary-600 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                          }`}
                      >
                        <span>Service Meta Details</span>
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {/* Industry Solutions Dropdown */}
              {shouldShowMenuItem({ href: '/admin/industry-solutions', icon: Building2, label: 'Industry Solutions', permission: Permission.CONTENT_CREATE, hideForBusinessDeveloper: true }) && (
                <div className="relative">
                  <button
                    onClick={() => setIsIndustrySolutionsOpen(!isIndustrySolutionsOpen)}
                    className={`w-full flex items-center ${isSidebarOpen ? 'px-4' : 'px-0 justify-center'} py-2.5 rounded-lg transition-colors text-sm group relative ${isActive('/admin/industry-solutions')
                      ? 'bg-primary-600 text-white shadow-sm'
                      : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    title={!isSidebarOpen ? 'Industry Solutions' : undefined}
                  >
                    <Building2 className={`h-4 w-4 ${isSidebarOpen ? 'mr-3' : ''} ${isActive('/admin/industry-solutions') ? 'text-white' : ''}`} />
                    {isSidebarOpen && (
                      <>
                        <span>Industry Solutions</span>
                        <ChevronDown className={`h-4 w-4 ml-auto transition-transform ${isIndustrySolutionsOpen ? 'rotate-180' : ''} ${isActive('/admin/industry-solutions') ? 'text-white' : ''}`} />
                      </>
                    )}
                    {!isSidebarOpen && (
                      <span className="fixed left-20 ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-[100] transition-opacity">
                        Industry Solutions
                      </span>
                    )}
                  </button>
                  {isSidebarOpen && isIndustrySolutionsOpen && (
                    <div className="mt-1 ml-4 space-y-1 border-l-2 border-gray-200 pl-4">
                      <Link
                        href="/admin/industry-solutions"
                        className={`flex items-center px-4 py-2 rounded-lg transition-colors text-sm ${pathname === '/admin/industry-solutions' || (pathname.startsWith('/admin/industry-solutions') && !pathname.includes('/meta-page-title'))
                          ? 'bg-primary-50 text-primary-600 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                          }`}
                      >
                        <span>Industry Solution List</span>
                      </Link>
                      <Link
                        href="/admin/industry-solutions/meta-page-title"
                        className={`flex items-center px-4 py-2 rounded-lg transition-colors text-sm ${pathname === '/admin/industry-solutions/meta-page-title' || pathname.startsWith('/admin/industry-solutions/meta-page-title')
                          ? 'bg-primary-50 text-primary-600 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                          }`}
                      >
                        <span>Industry Solution Meta Details</span>
                      </Link>
                    </div>
                  )}
                </div>
              )}

            </nav>
          </div>

          {/* GENERAL Section */}
          <div className={`${isSidebarOpen ? 'px-6' : 'px-3'}`}>
            {isSidebarOpen && (
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4">
                GENERAL
              </p>
            )}
            <nav className="space-y-1">
              {/* Settings Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                  className={`w-full flex items-center ${isSidebarOpen ? 'px-4' : 'px-0 justify-center'} py-2.5 rounded-lg transition-colors text-sm group relative ${isActive('/admin/settings')
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  title={!isSidebarOpen ? 'Settings' : undefined}
                >
                  <Settings
                    className={`h-4 w-4 ${isSidebarOpen ? 'mr-3' : ''} ${isActive('/admin/settings') ? 'text-white' : ''}`}
                  />
                  {isSidebarOpen && (
                    <>
                      <span>Settings</span>
                      <ChevronDown
                        className={`h-4 w-4 ml-auto transition-transform ${isSettingsOpen ? 'rotate-180' : ''} ${isActive('/admin/settings') ? 'text-white' : ''}`}
                      />
                    </>
                  )}
                  {!isSidebarOpen && (
                    <span className="fixed left-20 ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-[100] transition-opacity">
                      Settings
                    </span>
                  )}
                </button>

                {/* Dropdown Menu */}
                {isSettingsOpen && isSidebarOpen && (
                  <div className="mt-1 ml-4 space-y-1 border-l-2 border-gray-200 pl-4">
                    <Link
                      href="/admin/settings/profile"
                      className={`flex items-center px-4 py-2 rounded-lg transition-colors text-sm ${pathname === '/admin/settings/profile'
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-700 hover:bg-gray-100'
                        }`}
                    >
                      <span>Profile</span>
                    </Link>
                    {canManageUsers && (
                      <>
                        <Link
                          href="/admin/settings/roles"
                          className={`flex items-center px-4 py-2 rounded-lg transition-colors text-sm ${pathname === '/admin/settings/roles'
                            ? 'bg-primary-50 text-primary-600'
                            : 'text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                          <span>User Management</span>
                        </Link>
                        <Link
                          href="/admin/settings/user-activities"
                          className={`flex items-center px-4 py-2 rounded-lg transition-colors text-sm ${pathname === '/admin/settings/user-activities'
                            ? 'bg-primary-50 text-primary-600'
                            : 'text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                          <span>Activity</span>
                        </Link>
                      </>
                    )}
                  </div>
                )}
              </div>
              <button
                onClick={() => signOut({ callbackUrl: '/admin/login', redirect: true })}
                className={`flex items-center w-full ${isSidebarOpen ? 'px-4' : 'px-0 justify-center'} py-2.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors text-left text-sm group relative`}
                title={!isSidebarOpen ? 'Logout' : undefined}
              >
                <LogOut className={`h-4 w-4 ${isSidebarOpen ? 'mr-3' : ''}`} />
                {isSidebarOpen && <span>Logout</span>}
                {!isSidebarOpen && (
                  <span className="fixed left-20 ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-[100] transition-opacity">
                    Logout
                  </span>
                )}
              </button>
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
}
