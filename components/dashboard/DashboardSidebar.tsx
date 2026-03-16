'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navGroups = [
  {
    label: 'Overview',
    items: [
      { name: 'Dashboard', href: '/dashboard', icon: 'ri-dashboard-line' },
      { name: 'Clients', href: '/dashboard/clients', icon: 'ri-building-line' },
    ],
  },
  {
    label: 'Analytics',
    items: [
      { name: 'Credit Usage', href: '/dashboard/credit-usage', icon: 'ri-coin-line' },
      { name: 'AI Jobs', href: '/dashboard/ai-jobs', icon: 'ri-cpu-line' },
      { name: 'Infrastructure', href: '/dashboard/infrastructure', icon: 'ri-server-line' },
    ],
  },
  {
    label: 'Management',
    items: [
      { name: 'Billing', href: '/dashboard/billing', icon: 'ri-file-list-line' },
      { name: 'Audit Logs', href: '/dashboard/audit-logs', icon: 'ri-file-text-line' },
      { name: 'Settings', href: '/dashboard/settings', icon: 'ri-settings-3-line' },
    ],
  },
];

const menuItems = [
  { icon: 'ri-dashboard-line', label: 'Dashboard', path: '/dashboard' },
  { icon: 'ri-user-line', label: 'Clients', path: '/dashboard/clients' },
  { icon: 'ri-coins-line', label: 'Credit Usage', path: '/dashboard/credit-usage' },
  { icon: 'ri-cpu-line', label: 'AI Jobs', path: '/dashboard/ai-jobs' },
  { icon: 'ri-server-line', label: 'Infrastructure', path: '/dashboard/infrastructure' },
  { icon: 'ri-bill-line', label: 'Billing', path: '/dashboard/billing' },
  { icon: 'ri-file-list-3-line', label: 'Audit Logs', path: '/dashboard/audit-logs' },
  { icon: 'ri-settings-3-line', label: 'Settings', path: '/dashboard/settings' },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-[#F0F0F0] flex flex-col h-full">
      {/* Logo */}
      <div className="h-16 flex items-center px-5 border-b border-[#F0F0F0] flex-shrink-0">
        <Link href="/dashboard" className="flex items-center">
          <img
            src="https://static.readdy.ai/image/51142f79a63ec984e1247bbe6b786694/0250988608cd37669c57992ea56ee96a.png"
            alt="Anproba"
            className="h-8 w-auto object-contain"
          />
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-5 overflow-y-auto space-y-5">
        {navGroups.map((group) => (
          <div key={group.label}>
            <p className="text-[10px] font-bold text-[#C4C4C4] uppercase tracking-widest px-3 mb-2">
              {group.label}
            </p>
            <div className="space-y-0.5">
              {group.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-black text-white shadow-[0px_2px_8px_rgba(0,0,0,0.18)]'
                        : 'text-[#6B7280] hover:bg-[#F8F8F8] hover:text-[#111111]'
                    }`}
                  >
                    <i className={`${item.icon} text-base w-4 h-4 flex items-center justify-center flex-shrink-0`}></i>
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white/60"></span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Bottom user card */}
      <div className="p-3 border-t border-[#F0F0F0] flex-shrink-0">
        <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-[#F8F8F8] hover:bg-[#F0F0F0] transition-colors cursor-pointer">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            MA
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-[#111111] truncate">Master Admin</p>
            <p className="text-[11px] text-[#9CA3AF] truncate">admin@platform.com</p>
          </div>
          <i className="ri-more-2-line text-[#9CA3AF] w-4 h-4 flex items-center justify-center flex-shrink-0"></i>
        </div>
      </div>
    </aside>
  );
}
