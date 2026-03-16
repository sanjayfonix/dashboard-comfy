'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navGroups = [
  {
    label: 'Overview',
    items: [
      { name: 'Dashboard', href: '/client/dashboard', icon: 'ri-dashboard-line' },
      { name: 'Garments', href: '/client/garments', icon: 'ri-shirt-line' },
      { name: 'Try-On Jobs', href: '/client/try-on-jobs', icon: 'ri-file-list-3-line' },
    ],
  },
  {
    label: 'Finance',
    items: [
      { name: 'Credits', href: '/client/credits', icon: 'ri-coin-line' },
      { name: 'Analytics', href: '/client/analytics', icon: 'ri-bar-chart-line' },
    ],
  },
  {
    label: 'Management',
    items: [
      { name: 'Team', href: '/client/team', icon: 'ri-team-line' },
      { name: 'Integration', href: '/client/integration', icon: 'ri-link' },
      { name: 'Settings', href: '/client/settings', icon: 'ri-settings-3-line' },
    ],
  },
];

export default function ClientSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/client/dashboard') return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <aside className="w-64 bg-white border-r border-[#F0F0F0] flex flex-col h-full">
      <div className="h-16 flex items-center px-5 border-b border-[#F0F0F0] flex-shrink-0">
        <Link href="/client/dashboard">
          <span className="text-xl font-bold text-[#111111] font-['Pacifico']">logo</span>
        </Link>
      </div>

      <nav className="flex-1 px-3 py-5 overflow-y-auto space-y-5">
        {navGroups.map((group) => (
          <div key={group.label}>
            <p className="text-[10px] font-bold text-[#C4C4C4] uppercase tracking-widest px-3 mb-2">
              {group.label}
            </p>
            <div className="space-y-0.5">
              {group.items.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 cursor-pointer whitespace-nowrap ${
                      active
                        ? 'bg-black text-white shadow-[0px_2px_8px_rgba(0,0,0,0.18)]'
                        : 'text-[#6B7280] hover:bg-[#F8F8F8] hover:text-[#111111]'
                    }`}
                  >
                    <i className={`${item.icon} text-base w-4 h-4 flex items-center justify-center flex-shrink-0`}></i>
                    <span>{item.name}</span>
                    {active && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white/60"></span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="p-3 border-t border-[#F0F0F0] flex-shrink-0">
        <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-[#F8F8F8] hover:bg-[#F0F0F0] transition-colors cursor-pointer">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            ZF
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-[#111111] truncate">Zara Fashion</p>
            <p className="text-[11px] text-[#9CA3AF] truncate">admin@zara.com</p>
          </div>
          <i className="ri-more-2-line text-[#9CA3AF] w-4 h-4 flex items-center justify-center flex-shrink-0"></i>
        </div>
      </div>
    </aside>
  );
}
