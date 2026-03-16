'use client';

import { useState } from 'react';
import TryOnJobMetrics from './TryOnJobMetrics';
import TryOnJobActivityChart from './TryOnJobActivityChart';
import TryOnJobsTable from './TryOnJobsTable';
import TryOnJobAlertsPanel from './TryOnJobAlertsPanel';
import ExportJobsModal from './ExportJobsModal';

export default function TryOnJobsView() {
  const [showExportModal, setShowExportModal] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1500);
  };

  return (
    <>
      <div className="p-8 max-w-[1600px] mx-auto">
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-[#111111] tracking-tight mb-1">Try-On Jobs</h1>
            <p className="text-sm text-[#9CA3AF]">Monitor customer virtual try-on activity.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="flex items-center gap-2 px-5 py-3 bg-[#F8F8F8] text-[#111111] text-sm font-medium rounded-full hover:bg-[#E5E5E5] transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50"
            >
              <i className={`ri-refresh-line w-4 h-4 flex items-center justify-center ${isRefreshing ? 'animate-spin' : ''}`}></i>
              <span>Refresh Jobs</span>
            </button>
            <button
              onClick={() => setShowExportModal(true)}
              className="flex items-center gap-2 px-5 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-[#333333] transition-colors cursor-pointer whitespace-nowrap shadow-[0px_2px_8px_rgba(0,0,0,0.12)]"
            >
              <i className="ri-download-2-line w-4 h-4 flex items-center justify-center"></i>
              <span>Export Jobs Report</span>
            </button>
          </div>
        </div>

        <TryOnJobMetrics />

        <div className="grid grid-cols-3 gap-5 mb-7">
          <div className="col-span-2">
            <TryOnJobActivityChart />
          </div>
          <div>
            <TryOnJobAlertsPanel />
          </div>
        </div>

        <TryOnJobsTable />

      </div>

      {showExportModal && (
        <ExportJobsModal onClose={() => setShowExportModal(false)} />
      )}
    </>
  );
}