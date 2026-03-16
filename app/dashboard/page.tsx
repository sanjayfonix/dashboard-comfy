'use client';

import { useState } from 'react';
import MetricCard from '@/components/dashboard/MetricCard';
import ActivityChart from '@/components/dashboard/ActivityChart';
import ClientActivityTable from '@/components/dashboard/ClientActivityTable';
import AIPerformancePanel from '@/components/dashboard/AIPerformancePanel';
import AlertsPanel from '@/components/dashboard/AlertsPanel';
import SystemHealthPanel from '@/components/dashboard/SystemHealthPanel';
import RecentActivityFeed from '@/components/dashboard/RecentActivityFeed';
import CreditConsumptionBreakdown from '@/components/dashboard/CreditConsumptionBreakdown';

export default function DashboardPage() {
  const [dateRange, setDateRange] = useState('Last 7 days');
  const [showDateMenu, setShowDateMenu] = useState(false);

  return (
    <div className="p-8 max-w-[1600px] mx-auto">

      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#111111] tracking-tight mb-1">Platform Dashboard</h1>
          <p className="text-sm text-[#9CA3AF]">Monitor platform usage, client activity, and AI system performance.</p>
        </div>
        <div className="relative">
          <button
            onClick={() => setShowDateMenu(!showDateMenu)}
            className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#E5E5E5] rounded-full text-sm font-medium text-[#111111] hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap shadow-[0px_2px_8px_rgba(0,0,0,0.04)]"
          >
            <i className="ri-calendar-line w-4 h-4 flex items-center justify-center text-[#6B7280]"></i>
            <span>{dateRange}</span>
            <i className="ri-arrow-down-s-line w-4 h-4 flex items-center justify-center text-[#6B7280]"></i>
          </button>
          {showDateMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-[0px_8px_24px_rgba(0,0,0,0.10)] border border-[#E5E5E5] z-50 py-2 overflow-hidden">
              {['Last 24 hours', 'Last 7 days', 'Last 30 days', 'Last 90 days'].map((range) => (
                <button
                  key={range}
                  onClick={() => { setDateRange(range); setShowDateMenu(false); }}
                  className={`w-full px-4 py-2.5 text-left text-sm transition-colors cursor-pointer whitespace-nowrap ${dateRange === range ? 'bg-black text-white font-medium' : 'text-[#111111] hover:bg-[#F8F8F8]'}`}
                >
                  {range}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-4 gap-5 mb-7">
        <MetricCard
          title="Total Active Clients"
          value="247"
          trend="+12%"
          trendUp={true}
          icon="ri-building-line"
          accentColor="bg-black"
        />
        <MetricCard
          title="Total Try-On Jobs"
          value="1.2M"
          trend="+18%"
          trendUp={true}
          icon="ri-image-line"
          accentColor="bg-blue-500"
        />
        <MetricCard
          title="Credits Consumed"
          value="8.4M"
          trend="+24%"
          trendUp={true}
          icon="ri-coin-line"
          accentColor="bg-violet-500"
        />
        <MetricCard
          title="AI Success Rate"
          value="94.2%"
          trend="-2.1%"
          trendUp={false}
          icon="ri-cpu-line"
          accentColor="bg-emerald-500"
        />
      </div>

      {/* Chart + Alerts Row */}
      <div className="grid grid-cols-3 gap-5 mb-7">
        <div className="col-span-2">
          <ActivityChart />
        </div>
        <div>
          <AlertsPanel />
        </div>
      </div>

      {/* Table + AI Performance Row */}
      <div className="grid grid-cols-3 gap-5 mb-7">
        <div className="col-span-2">
          <ClientActivityTable />
        </div>
        <div>
          <AIPerformancePanel />
        </div>
      </div>

      {/* System Health */}
      <div className="mb-7">
        <SystemHealthPanel />
      </div>

      {/* Recent Activity + Credit Breakdown */}
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <RecentActivityFeed />
        </div>
        <div>
          <CreditConsumptionBreakdown />
        </div>
      </div>

    </div>
  );
}
