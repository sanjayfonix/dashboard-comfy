'use client';

import { useState } from 'react';

export default function DashboardTopNav() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="h-16 bg-white border-b border-[#EBEBEB] flex items-center justify-between px-8">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] text-base w-4 h-4 flex items-center justify-center"></i>
          <input
            type="text"
            placeholder="Search clients, jobs, or metrics..."
            className="w-full pl-11 pr-4 py-2.5 bg-[#F5F5F5] border border-[#EBEBEB] rounded-full text-sm text-[#111111] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2.5 text-[#111111] hover:bg-[#F5F5F5] rounded-full transition-all cursor-pointer"
          >
            <i className="ri-notification-line text-lg w-5 h-5 flex items-center justify-center"></i>
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#111111] rounded-full"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.08)] border border-[#EBEBEB] z-50">
              <div className="p-5 border-b border-[#F0F0F0]">
                <h3 className="font-semibold text-[#111111]">Notifications</h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {[
                  { title: 'Low credit warning', desc: 'Client "Fashion Brand X" has less than 100 credits remaining', time: '2 hours ago' },
                  { title: 'High failure rate detected', desc: 'AI job success rate dropped to 87% in the last hour', time: '4 hours ago' },
                  { title: 'New client registered', desc: 'Luxury Apparel Co. just signed up', time: '6 hours ago' },
                ].map((n, i) => (
                  <div key={i} className="p-5 border-b border-[#F5F5F5] last:border-0 hover:bg-[#FAFAFA] cursor-pointer transition-colors">
                    <p className="text-sm font-medium text-[#111111]">{n.title}</p>
                    <p className="text-xs text-[#6B7280] mt-1.5">{n.desc}</p>
                    <p className="text-xs text-[#9CA3AF] mt-2">{n.time}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-3 px-3 py-2 hover:bg-[#F5F5F5] rounded-full transition-all cursor-pointer"
          >
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-xs font-semibold">
              MA
            </div>
            <span className="text-sm font-medium text-[#111111] whitespace-nowrap">Master Admin</span>
            <i className="ri-arrow-down-s-line text-[#9CA3AF] w-4 h-4 flex items-center justify-center"></i>
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.08)] border border-[#EBEBEB] z-50">
              <div className="p-4 border-b border-[#F0F0F0]">
                <p className="text-sm font-semibold text-[#111111]">Master Admin</p>
                <p className="text-xs text-[#9CA3AF] mt-0.5">admin@platform.com</p>
              </div>
              <div className="py-2">
                <button className="w-full px-4 py-2.5 text-left text-sm text-[#111111] hover:bg-[#F5F5F5] cursor-pointer whitespace-nowrap transition-colors">
                  <i className="ri-user-line mr-2.5 w-4 h-4 inline-flex items-center justify-center"></i>
                  Profile Settings
                </button>
                <button className="w-full px-4 py-2.5 text-left text-sm text-[#111111] hover:bg-[#F5F5F5] cursor-pointer whitespace-nowrap transition-colors">
                  <i className="ri-settings-3-line mr-2.5 w-4 h-4 inline-flex items-center justify-center"></i>
                  System Settings
                </button>
              </div>
              <div className="border-t border-[#F0F0F0] py-2">
                <button className="w-full px-4 py-2.5 text-left text-sm text-[#111111] hover:bg-[#F5F5F5] cursor-pointer whitespace-nowrap transition-colors">
                  <i className="ri-logout-box-line mr-2.5 w-4 h-4 inline-flex items-center justify-center"></i>
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
