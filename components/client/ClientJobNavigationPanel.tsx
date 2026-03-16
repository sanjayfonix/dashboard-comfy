'use client';

import Link from 'next/link';
import { FC } from 'react';

interface NavLink {
  label: string;
  href: string;
  icon: string;
}

/**
 * ClientJobNavigationPanel
 *
 * A small navigation panel used in the client dashboard.
 * It safely renders a list of navigation links.
 */
const ClientJobNavigationPanel: FC = () => {
  const links: NavLink[] = [
    { label: 'View Garment', href: '/client/garments', icon: 'ri-shirt-line' },
    { label: 'View All Jobs', href: '/client/try-on-jobs', icon: 'ri-file-list-3-line' },
    { label: 'View Credits', href: '/client/dashboard', icon: 'ri-coin-line' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5] p-6">
      <h2 className="text-lg font-semibold text-[#111111] mb-5">Quick Navigation</h2>

      <div className="space-y-3">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="flex items-center gap-3 w-full px-4 py-3 bg-[#F8F8F8] hover:bg-[#F0F0F0] rounded-xl text-sm font-medium text-[#111111] transition-all cursor-pointer"
          >
            <i className={`${link.icon} text-base w-4 h-4 flex items-center justify-center`}></i>
            <span>{link.label}</span>
            <i className="ri-arrow-right-line text-base w-4 h-4 flex items-center justify-center ml-auto"></i>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ClientJobNavigationPanel;
