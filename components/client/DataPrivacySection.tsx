'use client';

import { useState } from 'react';

interface DataPrivacySectionProps {
  onDeleteAccount: () => void;
}

export default function DataPrivacySection({ onDeleteAccount }: DataPrivacySectionProps) {
  const [isExporting, setIsExporting] = useState(false);

  const handleRequestExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      alert('Data export request submitted. You will receive an email with your data within 24 hours.');
    }, 2000);
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-[#E5E5E5]">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-[#111111]">Data & Privacy</h2>
        <p className="text-sm text-[#6B7280] mt-1">Manage your data and account privacy settings</p>
      </div>

      <div className="space-y-4">
        
        <div className="p-4 bg-[#F8F8F8] rounded-xl">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <p className="text-sm font-medium text-[#111111]">Request Data Export</p>
              <p className="text-xs text-[#6B7280] mt-1">Download a copy of all your account data, including garments, try-on jobs, and usage history</p>
            </div>
          </div>
          <button
            onClick={handleRequestExport}
            disabled={isExporting}
            className="px-4 py-2.5 bg-black text-white text-sm font-medium rounded-xl hover:bg-black/90 transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isExporting ? (
              <>
                <i className="ri-loader-4-line w-4 h-4 flex items-center justify-center animate-spin"></i>
                <span>Processing...</span>
              </>
            ) : (
              <>
                <i className="ri-download-line w-4 h-4 flex items-center justify-center"></i>
                <span>Request Export</span>
              </>
            )}
          </button>
        </div>

        <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <p className="text-sm font-medium text-red-900">Delete Account</p>
              <p className="text-xs text-red-700 mt-1">Permanently delete your account and all associated data. This action cannot be undone.</p>
            </div>
          </div>
          <button
            onClick={onDeleteAccount}
            className="px-4 py-2.5 bg-red-600 text-white text-sm font-medium rounded-xl hover:bg-red-700 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2"
          >
            <i className="ri-delete-bin-line w-4 h-4 flex items-center justify-center"></i>
            <span>Delete Account</span>
          </button>
        </div>

      </div>

    </div>
  );
}