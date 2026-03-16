'use client';

import { useState } from 'react';
import RevenueMetrics from '@/components/dashboard/RevenueMetrics';
import RevenueChart from '@/components/dashboard/RevenueChart';
import ClientRevenueTable from '@/components/dashboard/ClientRevenueTable';
import RecentTransactionsSection from '@/components/dashboard/RecentTransactionsSection';
import BillingAlerts from '@/components/dashboard/BillingAlerts';

export default function BillingView() {
  const [showExportModal, setShowExportModal] = useState(false);

  return (
    <div className="p-8">
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-black mb-2">Billing & Revenue Analytics</h1>
          <p className="text-gray-600">Monitor credit purchases, billing activity, and platform revenue.</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setShowExportModal(true)}
            className="px-6 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap flex items-center gap-2"
          >
            <i className="ri-download-line"></i>
            Export Billing Report
          </button>
          <button className="px-6 py-2.5 bg-white text-black border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap flex items-center gap-2">
            <i className="ri-file-list-line"></i>
            View Invoices
          </button>
        </div>
      </div>

      <RevenueMetrics />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div className="lg:col-span-1">
          <BillingAlerts />
        </div>
      </div>

      <ClientRevenueTable />

      <RecentTransactionsSection />

      {showExportModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-black mb-4">Export Billing Report</h3>
            <p className="text-gray-600 mb-6">Select the format for your billing report export.</p>
            <div className="space-y-3 mb-6">
              <button className="w-full px-4 py-3 bg-gray-50 text-black rounded-lg hover:bg-gray-100 transition-colors text-left flex items-center gap-3">
                <i className="ri-file-excel-line text-xl"></i>
                <span>Export as Excel (.xlsx)</span>
              </button>
              <button className="w-full px-4 py-3 bg-gray-50 text-black rounded-lg hover:bg-gray-100 transition-colors text-left flex items-center gap-3">
                <i className="ri-file-text-line text-xl"></i>
                <span>Export as CSV (.csv)</span>
              </button>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowExportModal(false)}
                className="flex-1 px-4 py-2.5 bg-gray-100 text-black rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowExportModal(false)}
                className="flex-1 px-4 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
