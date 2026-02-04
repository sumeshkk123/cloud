'use client';

import Link from 'next/link';
import { FileText, CheckCircle2, Clock3, BarChart3, Wrench, Grid3x3, Network, Sparkles, Rocket } from 'lucide-react';

interface BlogStatsData {
  totalPosts: number;
  publishedPosts: number;
  draftPosts: number;
  last30DaysPosts: number;
}

interface ContentStatsData {
  totalServices: number;
  totalModules: number;
  totalFeatures: number;
  totalPlans?: number;
  totalDemos?: number;
}

interface BlogStatsProps {
  blogStats: BlogStatsData;
  contentStats: ContentStatsData;
}

export function BlogStats({ blogStats, contentStats }: BlogStatsProps) {
  const blogCards = [
    {
      title: 'Total Posts',
      value: blogStats.totalPosts,
      badge: 'All',
      icon: <FileText className="h-5 w-5 text-white" />,
      gradient: 'from-primary-600 to-primary-700',
    },
    {
      title: 'Published',
      value: blogStats.publishedPosts,
      badge: 'Live',
      icon: <CheckCircle2 className="h-5 w-5 text-white" />,
      gradient: 'from-emerald-500 to-primary-600',
    },
    {
      title: 'Drafts',
      value: blogStats.draftPosts,
      badge: 'Pending',
      icon: <Clock3 className="h-5 w-5 text-white" />,
      gradient: 'from-amber-400 to-orange-500',
    },
    {
      title: 'Last 30 Days',
      value: blogStats.last30DaysPosts,
      badge: 'Recent',
      icon: <BarChart3 className="h-5 w-5 text-white" />,
      gradient: 'from-indigo-500 to-purple-600',
    },
  ];

  const contentItems = [
    {
      label: 'Total Services',
      value: contentStats.totalServices,
      icon: <Wrench className="h-5 w-5 text-gray-600" />,
      href: '/admin/services',
    },
    {
      label: 'Total Modules',
      value: contentStats.totalModules,
      icon: <Grid3x3 className="h-5 w-5 text-gray-600" />,
      href: '/admin/modules',
    },
    {
      label: 'Total Features',
      value: contentStats.totalFeatures,
      icon: <Sparkles className="h-5 w-5 text-gray-600" />,
      href: '/admin/features',
    },
    {
      label: 'Total Plans',
      value: contentStats.totalPlans || 0,
      icon: <Network className="h-5 w-5 text-gray-600" />,
      href: '/admin/mlm-plans',
    },
    {
      label: 'Total Demos',
      value: contentStats.totalDemos ?? 0,
      icon: <Rocket className="h-5 w-5 text-gray-600" />,
      href: '/admin/demos',
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
      {/* Left Side - 4 Blog Stats Cards in 2x2 Grid */}
      <div className="grid grid-cols-2 gap-4">
        {blogCards.map((card) => (
          <div
            key={card.title}
            className={`relative overflow-hidden rounded-2xl p-5 text-white bg-gradient-to-br ${card.gradient} shadow-md`}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs">
                {card.badge}
              </div>
              <div className="p-2 rounded-full bg-white/15">{card.icon}</div>
            </div>
            <div className="text-4xl font-bold leading-tight">{card.value}</div>
            <p className="text-sm text-white/80 mt-1">{card.title}</p>
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white,transparent_35%)]" />
          </div>
        ))}
      </div>

      {/* Right Side - Content Stats */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Overview</h3>
        <div className="space-y-3">
          {contentItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center justify-between py-2 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white rounded-lg">
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {item.label}
                </span>
              </div>
              <span className="text-2xl font-bold text-gray-900">
                {item.value}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
