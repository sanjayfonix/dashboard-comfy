'use client';

import { useState } from 'react';
import AnalyticsMetrics from './AnalyticsMetrics';
import TryOnActivityChart from './TryOnActivityChart';
import GarmentPerformanceChart from './GarmentPerformanceChart';
import CreditUsageTrendChart from './CreditUsageTrendChart';
import JobStatusDistribution from './JobStatusDistribution';
import PopularGarmentsTable from './PopularGarmentsTable';
import AnalyticsAlertsPanel from './AnalyticsAlertsPanel';
import ExportReportModal from './ExportReportModal';
import DateRangeModal from './DateRangeModal';

export default function AnalyticsView() {
  const [showExportModal, setShowExportModal] = useState(false);
  const [showDateRangeModal, setShowDateRangeModal] = useState(false);
  const [dateRange, setDateRange] = useState('Last 30 days');

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <div className="p-8">
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-[#111111] mb-2">Analytics</h1>
            <p className="text-sm text-[#6B7280]">Insights into your virtual try-on performance.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowDateRangeModal(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#E5E5E5] rounded-xl text-sm font-medium text-[#111111] hover:bg-[#F8F8F8] transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-calendar-line w-4 h-4 flex items-center justify-center"></i>
              <span>{dateRange}</span>
            </button>
            <button
              onClick={() => setShowExportModal(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-black text-white rounded-xl text-sm font-medium hover:bg-[#333333] transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-download-line w-4 h-4 flex items-center justify-center"></i>
              <span>Export Report</span>
            </button>
          </div>
        </div>

        <AnalyticsMetrics />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <TryOnActivityChart />
          <CreditUsageTrendChart />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <GarmentPerformanceChart />
          <JobStatusDistribution />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <PopularGarmentsTable />
          </div>
          <div>
            <AnalyticsAlertsPanel />
          </div>
        </div>
      </div>

      {showExportModal && (
        <ExportReportModal onClose={() => setShowExportModal(false)} />
      )}

      {showDateRangeModal && (
        <DateRangeModal
          currentRange={dateRange}
          onSelect={(range) => {
            setDateRange(range);
            setShowDateRangeModal(false);
          }}
          onClose={() => setShowDateRangeModal(false)}
        />
      )}
    </div>
  );
}