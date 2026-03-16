'use client';

import { useState } from 'react';
import Link from 'next/link';
import ClientMetrics from '@/components/dashboard/ClientMetrics';
import ClientsTable from '@/components/dashboard/ClientsTable';

export default function ClientsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [activityFilter, setActivityFilter] = useState('All');
  const [showStatusMenu, setShowStatusMenu] = useState(false);
  const [showActivityMenu, setShowActivityMenu] = useState(false);

  return (
    <div className="p-8">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#111111] mb-2">Client Accounts</h1>
          <p className="text-[#6B7280]">Manage brands using the AI Virtual Try-On platform.</p>
        </div>
        <Link 
          href="/dashboard/clients/new"
          className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-black/90 transition-all cursor-pointer whitespace-nowrap shadow-[0px_4px_12px_rgba(0,0,0,0.15)] inline-flex items-center gap-2"
        >
          <i className="ri-add-line w-4 h-4 flex items-center justify-center"></i>
          Add New Client
        </Link>
      </div>

      <ClientMetrics />

      <div className="bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5] mt-8">
        <div className="p-6 border-b border-[#E5E5E5]">
          <div className="flex items-center gap-4">
            <div className="flex-1 max-w-md relative">
              <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280] text-base w-4 h-4 flex items-center justify-center"></i>
              <input
                type="text"
                placeholder="Search by brand name or domain..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 bg-[#F8F8F8] border border-[#E5E5E5] rounded-full text-sm text-[#111111] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 transition-all"
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <button
                  onClick={() => setShowStatusMenu(!showStatusMenu)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[#E5E5E5] rounded-full text-sm font-medium text-[#111111] hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-shield-check-line w-4 h-4 flex items-center justify-center"></i>
                  <span>Status: {statusFilter}</span>
                  <i className="ri-arrow-down-s-line w-4 h-4 flex items-center justify-center"></i>
                </button>
                {showStatusMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.08)] border border-[#E5E5E5] z-50 py-2">
                    {['All', 'Active', 'Suspended', 'Pending Setup'].map((status) => (
                      <button
                        key={status}
                        onClick={() => {
                          setStatusFilter(status);
                          setShowStatusMenu(false);
                        }}
                        className="w-full px-4 py-2.5 text-left text-sm text-[#111111] hover:bg-[#F8F8F8] cursor-pointer whitespace-nowrap transition-colors"
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={() => setShowActivityMenu(!showActivityMenu)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[#E5E5E5] rounded-full text-sm font-medium text-[#111111] hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-line-chart-line w-4 h-4 flex items-center justify-center"></i>
                  <span>Activity: {activityFilter}</span>
                  <i className="ri-arrow-down-s-line w-4 h-4 flex items-center justify-center"></i>
                </button>
                {showActivityMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.08)] border border-[#E5E5E5] z-50 py-2">
                    {['All', 'High', 'Medium', 'Low'].map((activity) => (
                      <button
                        key={activity}
                        onClick={() => {
                          setActivityFilter(activity);
                          setShowActivityMenu(false);
                        }}
                        className="w-full px-4 py-2.5 text-left text-sm text-[#111111] hover:bg-[#F8F8F8] cursor-pointer whitespace-nowrap transition-colors"
                      >
                        {activity}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <ClientsTable searchQuery={searchQuery} statusFilter={statusFilter} activityFilter={activityFilter} />
      </div>
    </div>
  );
}