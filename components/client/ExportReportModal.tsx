'use client';

import { useState } from 'react';

interface ExportReportModalProps {
  onClose: () => void;
}

export default function ExportReportModal({ onClose }: ExportReportModalProps) {
  const [format, setFormat] = useState('csv');
  const [exporting, setExporting] = useState(false);
  const [exported, setExported] = useState(false);

  const handleExport = () => {
    setExporting(true);
    setTimeout(() => {
      setExporting(false);
      setExported(true);
      setTimeout(() => {
        onClose();
      }, 1500);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
        <div className="px-6 py-5 border-b border-[#F0F0F0]">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#111111]">Export Analytics Report</h2>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center hover:bg-[#F8F8F8] rounded-lg transition-colors cursor-pointer"
            >
              <i className="ri-close-line w-5 h-5 flex items-center justify-center text-[#6B7280]"></i>
            </button>
          </div>
        </div>

        <div className="px-6 py-5">
          {exported ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 flex items-center justify-center bg-emerald-50 rounded-full mx-auto mb-4">
                <i className="ri-check-line w-8 h-8 flex items-center justify-center text-emerald-600"></i>
              </div>
              <h3 className="text-base font-semibold text-[#111111] mb-2">Report Exported Successfully</h3>
              <p className="text-sm text-[#6B7280]">Your analytics report has been downloaded.</p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#111111] mb-3">Select Format</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-4 border-2 border-[#E5E5E5] rounded-xl cursor-pointer hover:border-black transition-colors">
                    <input
                      type="radio"
                      name="format"
                      value="csv"
                      checked={format === 'csv'}
                      onChange={(e) => setFormat(e.target.value)}
                      className="w-4 h-4 cursor-pointer"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[#111111]">CSV File</p>
                      <p className="text-xs text-[#6B7280]">Comma-separated values format</p>
                    </div>
                    <i className="ri-file-text-line w-5 h-5 flex items-center justify-center text-[#6B7280]"></i>
                  </label>
                  <label className="flex items-center gap-3 p-4 border-2 border-[#E5E5E5] rounded-xl cursor-pointer hover:border-black transition-colors">
                    <input
                      type="radio"
                      name="format"
                      value="excel"
                      checked={format === 'excel'}
                      onChange={(e) => setFormat(e.target.value)}
                      className="w-4 h-4 cursor-pointer"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[#111111]">Excel File</p>
                      <p className="text-xs text-[#6B7280]">Microsoft Excel format (.xlsx)</p>
                    </div>
                    <i className="ri-file-excel-2-line w-5 h-5 flex items-center justify-center text-[#6B7280]"></i>
                  </label>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                <div className="flex items-start gap-3">
                  <i className="ri-information-line w-5 h-5 flex items-center justify-center text-blue-600 flex-shrink-0"></i>
                  <p className="text-xs text-blue-900">
                    The report will include all analytics data from the selected date range, including metrics, charts, and detailed tables.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        {!exported && (
          <div className="px-6 py-4 bg-[#F8F8F8] rounded-b-2xl flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              disabled={exporting}
              className="px-4 py-2.5 bg-white border border-[#E5E5E5] rounded-xl text-sm font-medium text-[#111111] hover:bg-[#F8F8F8] transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
            <button
              onClick={handleExport}
              disabled={exporting}
              className="px-4 py-2.5 bg-black text-white rounded-xl text-sm font-medium hover:bg-[#333333] transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {exporting ? (
                <>
                  <i className="ri-loader-4-line w-4 h-4 flex items-center justify-center animate-spin"></i>
                  <span>Exporting...</span>
                </>
              ) : (
                <>
                  <i className="ri-download-line w-4 h-4 flex items-center justify-center"></i>
                  <span>Export Report</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}