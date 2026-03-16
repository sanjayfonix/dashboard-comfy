'use client';

import { useState } from 'react';
import InfrastructureMetrics from '@/components/dashboard/InfrastructureMetrics';
import InfrastructureChart from '@/components/dashboard/InfrastructureChart';
import WorkerStatusTable from '@/components/dashboard/WorkerStatusTable';
import JobQueuePanel from '@/components/dashboard/JobQueuePanel';
import AutoscalingActivity from '@/components/dashboard/AutoscalingActivity';
import InfrastructureAlerts from '@/components/dashboard/InfrastructureAlerts';

export default function InfrastructurePage() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  const handleExportLogs = () => {
    console.log('Exporting system logs...');
  };

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#111111]">Infrastructure Monitoring</h1>
          <p className="text-[#6B7280] mt-2">Monitor AI processing infrastructure and system health.</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="px-6 py-2.5 text-sm font-medium text-[#111111] bg-white border border-[#EBEBEB] rounded-full hover:bg-[#F5F5F5] transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 disabled:opacity-50"
          >
            <i className={`ri-refresh-line text-base w-4 h-4 flex items-center justify-center ${isRefreshing ? 'animate-spin' : ''}`}></i>
            Refresh Status
          </button>
          <button
            onClick={handleExportLogs}
            className="px-6 py-2.5 text-sm font-medium text-white bg-[#111111] rounded-full hover:bg-[#000000] transition-all cursor-pointer whitespace-nowrap flex items-center gap-2"
          >
            <i className="ri-download-line text-base w-4 h-4 flex items-center justify-center"></i>
            View System Logs
          </button>
        </div>
      </div>

      <InfrastructureMetrics />

      <InfrastructureChart />

      <InfrastructureAlerts />

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <AutoscalingActivity />
        </div>
        <div>
          <JobQueuePanel />
        </div>
      </div>

      <WorkerStatusTable />
    </div>
  );
}