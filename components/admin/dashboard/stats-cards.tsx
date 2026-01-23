'use client';

import { Mail, MessageSquare, DollarSign, PlayCircle } from 'lucide-react';

interface StatsData {
  totalEnquiries: number;
  contactCount: number;
  pricingCount: number;
  demoCount: number;
}

interface StatsCardsProps {
  stats: StatsData;
}

export function StatsCards({ stats }: StatsCardsProps) {
  const cards = [
    {
      title: 'Total Enquiries',
      value: stats.totalEnquiries,
      badge: 'All',
      icon: <Mail className="h-5 w-5 text-white" />,
      gradient: 'from-amber-500 to-yellow-600',
    },
    {
      title: 'Contact',
      value: stats.contactCount,
      badge: 'Count',
      icon: <MessageSquare className="h-5 w-5 text-white" />,
      gradient: 'from-blue-600 to-blue-800',
    },
    {
      title: 'Pricing',
      value: stats.pricingCount,
      badge: 'Count',
      icon: <DollarSign className="h-5 w-5 text-white" />,
      gradient: 'from-green-600 to-green-800',
    },
    {
      title: 'Demo',
      value: stats.demoCount,
      badge: 'Count',
      icon: <PlayCircle className="h-5 w-5 text-white" />,
      gradient: 'from-purple-600 to-purple-800',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {cards.map((card) => (
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
  );
}
