'use client';

import { useState } from 'react';

interface ExportJobsModalProps {
  onClose: () => void;
}

export default function ExportJobsModal({ onClose }: ExportJobsModalProps) {
  const [dateRange, setDateRange] = useState('7days');
  const [format, setFormat] = useState('csv');
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 bg-[#F5F5F5] rounded-full flex items-center justify-center flex-shrink-0">
            <i className="ri-download-2-line text-[#111111] text-lg w-5 h-5 flex items-center justify-center"></i>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-[#111111] mb-1">Export Jobs Report</h3>
            <p className="text-sm text-[#6B7280]">
              Download a detailed report of your try-on jobs.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center hover:bg-[#F8F8F8] rounded-lg transition-colors cursor-pointer"
          >
            <i className="ri-close-line text-[#6B7280] w-5 h-5 flex items-center justify-center"></i>
          </button>
        </div>

        <div className="space-y-5 mb-6">
          <div>
            <label className="block text-sm font-medium text-[#111111] mb-2">Date Range</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setDateRange('7days')}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  dateRange === '7days'
                    ? 'bg-black text-white'
                    : 'bg-[#F8F8F8] text-[#111111] hover:bg-[#E5E5E5]'
                }`}
              >
                Last 7 Days
              </button>
              <button
                onClick={() => setDateRange('30days')}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  dateRange === '30days'
                    ? 'bg-black text-white'
                    : 'bg-[#F8F8F8] text-[#111111] hover:bg-[#E5E5E5]'
                }`}
              >
                Last 30 Days
              </button>
              <button
                onClick={() => setDateRange('90days')}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  dateRange === '90days'
                    ? 'bg-black text-white'
                    : 'bg-[#F8F8F8] text-[#111111] hover:bg-[#E5E5E5]'
                }`}
              >
                Last 90 Days
              </button>
              <button
                onClick={() => setDateRange('all')}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  dateRange === 'all'
                    ? 'bg-black text-white'
                    : 'bg-[#F8F8F8] text-[#111111] hover:bg-[#E5E5E5]'
                }`}
              >
                All Time
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#111111] mb-2">Export Format</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setFormat('csv')}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  format === 'csv'
                    ? 'bg-black text-white'
                    : 'bg-[#F8F8F8] text-[#111111] hover:bg-[#E5E5E5]'
                }`}
              >
                CSV
              </button>
              <button
                onClick={() => setFormat('xlsx')}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  format === 'xlsx'
                    ? 'bg-black text-white'
                    : 'bg-[#F8F8F8] text-[#111111] hover:bg-[#E5E5E5]'
                }`}
              >
                Excel (XLSX)
              </button>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <i className="ri-information-line text-blue-600 text-base w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5"></i>
              <p className="text-xs text-blue-900">
                The report will include Job ID, Garment Name, Status, Processing Time, Credits Used, and Date for all jobs in the selected date range.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 justify-end">
          <button
            onClick={onClose}
            disabled={isExporting}
            className="px-5 py-2.5 bg-[#F8F8F8] hover:bg-[#E5E5E5] text-[#111111] text-sm font-medium rounded-full transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handleExport}
            disabled={isExporting}
            className="px-5 py-2.5 bg-black hover:bg-[#333333] text-white text-sm font-medium rounded-full transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50 flex items-center gap-2"
          >
            {isExporting && <i className="ri-loader-4-line w-4 h-4 flex items-center justify-center animate-spin"></i>}
            <span>{isExporting ? 'Exporting...' : 'Export Report'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}