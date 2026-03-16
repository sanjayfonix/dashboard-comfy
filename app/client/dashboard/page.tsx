'use client';

import { useState } from 'react';
import ClientMetricCard from '@/components/client/ClientMetricCard';
import TryOnActivityChart from '@/components/client/TryOnActivityChart';
import GarmentPerformanceTable from '@/components/client/GarmentPerformanceTable';
import RecentTryOnJobs from '@/components/client/RecentTryOnJobs';
import ClientAlertsPanel from '@/components/client/ClientAlertsPanel';
import { useRouter } from 'next/navigation';

export default function ClientDashboardPage() {
  const router = useRouter();
  const [hasGarments] = useState(true);

  if (!hasGarments) {
    return (
      <div className="p-8 max-w-[1600px] mx-auto">
        <div className="flex items-center justify-center min-h-[600px]">
          <div className="text-center max-w-md">
            <div className="w-20 h-20 bg-[#F8F8F8] rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-shirt-line text-4xl text-[#9CA3AF]"></i>
            </div>
            <h2 className="text-xl font-bold text-[#111111] mb-2">No garments uploaded yet.</h2>
            <p className="text-sm text-[#9CA3AF] mb-6">
              Start by uploading your first garment to enable virtual try-on for your customers.
            </p>
            <button
              onClick={() => router.push('/client/garments/upload')}
              className="px-6 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-[#333333] transition-colors cursor-pointer whitespace-nowrap"
            >
              Upload First Garment
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#111111] tracking-tight mb-1">Dashboard</h1>
          <p className="text-sm text-[#9CA3AF]">Overview of your AI Virtual Try-On activity.</p>
        </div>
        <button
          onClick={() => router.push('/client/garments/upload')}
          className="flex items-center gap-2 px-5 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-[#333333] transition-colors cursor-pointer whitespace-nowrap shadow-[0px_2px_8px_rgba(0,0,0,0.12)]"
        >
          <i className="ri-upload-2-line w-4 h-4 flex items-center justify-center"></i>
          <span>Upload Garment</span>
        </button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-4 gap-5 mb-7">
        <ClientMetricCard
          title="Credit Balance"
          value="12,450"
          trend="-8%"
          trendUp={false}
          icon="ri-coin-line"
          accentColor="bg-violet-500"
        />
        <ClientMetricCard
          title="Total Try-On Jobs"
          value="8,234"
          trend="+15%"
          trendUp={true}
          icon="ri-image-line"
          accentColor="bg-blue-500"
        />
        <ClientMetricCard
          title="Active Garments"
          value="142"
          trend="+6"
          trendUp={true}
          icon="ri-shirt-line"
          accentColor="bg-black"
        />
        <ClientMetricCard
          title="Try-On Success Rate"
          value="96.8%"
          trend="+1.2%"
          trendUp={true}
          icon="ri-checkbox-circle-line"
          accentColor="bg-emerald-500"
        />
      </div>

      {/* Chart + Alerts Row */}
      <div className="grid grid-cols-3 gap-5 mb-7">
        <div className="col-span-2">
          <TryOnActivityChart />
        </div>
        <div>
          <ClientAlertsPanel />
        </div>
      </div>

      {/* Garment Performance */}
      <div className="mb-7">
        <GarmentPerformanceTable />
      </div>

      {/* Recent Try-On Jobs */}
      <div>
        <RecentTryOnJobs />
      </div>

    </div>
  );
}