'use client';

import { useState } from 'react';

export default function ClientTopNav() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const notifications = [
    { id: 1, text: 'Low credit balance warning', time: '5 min ago', unread: true },
    { id: 2, text: 'New garment uploaded successfully', time: '1 hour ago', unread: true },
    { id: 3, text: '3 try-on jobs failed', time: '2 hours ago', unread: false },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <header className="h-16 bg-white border-b border-[#F0F0F0] flex items-center justify-between px-6 flex-shrink-0">
      
      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <i className="ri-search-line absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] w-4 h-4 flex items-center justify-center"></i>
          <input
            type="text"
            placeholder="Search garments, jobs..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#F8F8F8] border border-transparent rounded-full text-sm text-[#111111] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#E5E5E5] focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#F8F8F8] transition-colors cursor-pointer"
          >
            <i className="ri-notification-3-line text-[#6B7280] w-5 h-5 flex items-center justify-center"></i>
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            )}
          </button>
          
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-[0px_8px_24px_rgba(0,0,0,0.10)] border border-[#E5E5E5] z-50 overflow-hidden">
              <div className="px-4 py-3 border-b border-[#F0F0F0]">
                <h3 className="text-sm font-semibold text-[#111111]">Notifications</h3>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className={`px-4 py-3 border-b border-[#F0F0F0] hover:bg-[#F8F8F8] transition-colors cursor-pointer ${
                      notif.unread ? 'bg-blue-50/30' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {notif.unread && (
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-[#111111]">{notif.text}</p>
                        <p className="text-xs text-[#9CA3AF] mt-0.5">{notif.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-3 border-t border-[#F0F0F0] text-center">
                <button className="text-xs font-medium text-[#111111] hover:text-black cursor-pointer whitespace-nowrap">
                  View All Notifications
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Profile Menu */}
        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-2.5 pl-2 pr-3 py-1.5 rounded-full hover:bg-[#F8F8F8] transition-colors cursor-pointer"
          >
            <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              ZF
            </div>
            <span className="text-sm font-medium text-[#111111]">Zara Fashion</span>
            <i className="ri-arrow-down-s-line text-[#9CA3AF] w-4 h-4 flex items-center justify-center"></i>
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-[0px_8px_24px_rgba(0,0,0,0.10)] border border-[#E5E5E5] z-50 py-2 overflow-hidden">
              <div className="px-4 py-3 border-b border-[#F0F0F0]">
                <p className="text-sm font-semibold text-[#111111]">Zara Fashion</p>
                <p className="text-xs text-[#9CA3AF] mt-0.5">admin@zara.com</p>
              </div>
              <button className="w-full px-4 py-2.5 text-left text-sm text-[#111111] hover:bg-[#F8F8F8] transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2.5">
                <i className="ri-user-line w-4 h-4 flex items-center justify-center text-[#6B7280]"></i>
                <span>Profile Settings</span>
              </button>
              <button className="w-full px-4 py-2.5 text-left text-sm text-[#111111] hover:bg-[#F8F8F8] transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2.5">
                <i className="ri-team-line w-4 h-4 flex items-center justify-center text-[#6B7280]"></i>
                <span>Team Management</span>
              </button>
              <button className="w-full px-4 py-2.5 text-left text-sm text-[#111111] hover:bg-[#F8F8F8] transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2.5">
                <i className="ri-settings-3-line w-4 h-4 flex items-center justify-center text-[#6B7280]"></i>
                <span>Account Settings</span>
              </button>
              <div className="border-t border-[#F0F0F0] mt-2 pt-2">
                <button className="w-full px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2.5">
                  <i className="ri-logout-box-line w-4 h-4 flex items-center justify-center"></i>
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}