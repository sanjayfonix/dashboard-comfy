'use client';

import { useState } from 'react';
import JobPerformanceMetrics from '@/components/dashboard/JobPerformanceMetrics';
import JobActivityChart from '@/components/dashboard/JobActivityChart';
import JobMonitoringTable from '@/components/dashboard/JobMonitoringTable';
import JobAlertsPanel from '@/components/dashboard/JobAlertsPanel';

export default function AIJobsPage() {
  const [showExportModal, setShowExportModal] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1500);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#111111] mb-2">AI Job Monitoring</h1>
            <p className="text-[#6B7280]">Track try-on job activity and AI processing performance.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[#E5E5E5] rounded-full text-sm font-medium text-[#111111] hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap disabled:opacity-50"
            >
              <i className={`ri-refresh-line text-base w-4 h-4 flex items-center justify-center ${isRefreshing ? 'animate-spin' : ''}`}></i>
              <span>Refresh Data</span>
            </button>
            <button
              onClick={() => setShowExportModal(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-[#333333] transition-all cursor-pointer whitespace-nowrap"
            >
              <i className="ri-download-line text-base w-4 h-4 flex items-center justify-center"></i>
              <span>Export Job Report</span>
            </button>
          </div>
        </div>
      </div>

      <JobPerformanceMetrics />
      <JobAlertsPanel />
      <JobActivityChart />
      <JobMonitoringTable />

      {showExportModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4">
            <div className="p-6 border-b border-[#F0F0F0]">
              <h3 className="text-lg font-semibold text-[#111111]">Export Job Report</h3>
              <p className="text-sm text-[#6B7280] mt-1">Choose your preferred export format</p>
            </div>
            <div className="p-6 space-y-3">
              <button className="w-full px-4 py-3 bg-[#F8F8F8] hover:bg-[#F0F0F0] rounded-xl text-left text-sm font-medium text-[#111111] transition-all cursor-pointer whitespace-nowrap">
                <i className="ri-file-excel-line mr-3 w-4 h-4 inline-flex items-center justify-center"></i>
                Export as Excel (.xlsx)
              </button>
              <button className="w-full px-4 py-3 bg-[#F8F8F8] hover:bg-[#F0F0F0] rounded-xl text-left text-sm font-medium text-[#111111] transition-all cursor-pointer whitespace-nowrap">
                <i className="ri-file-text-line mr-3 w-4 h-4 inline-flex items-center justify-center"></i>
                Export as CSV (.csv)
              </button>
              <button className="w-full px-4 py-3 bg-[#F8F8F8] hover:bg-[#F0F0F0] rounded-xl text-left text-sm font-medium text-[#111111] transition-all cursor-pointer whitespace-nowrap">
                <i className="ri-file-pdf-line mr-3 w-4 h-4 inline-flex items-center justify-center"></i>
                Export as PDF (.pdf)
              </button>
            </div>
            <div className="p-6 border-t border-[#F0F0F0] flex justify-end gap-3">
              <button
                onClick={() => setShowExportModal(false)}
                className="px-5 py-2.5 bg-white border border-[#E5E5E5] rounded-full text-sm font-medium text-[#111111] hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}