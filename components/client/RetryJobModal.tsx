'use client';

import { useState } from 'react';

interface RetryJobModalProps {
  jobId: string;
  onClose: () => void;
}

export default function RetryJobModal({ jobId, onClose }: RetryJobModalProps) {
  const [isRetrying, setIsRetrying] = useState(false);

  const handleRetry = () => {
    setIsRetrying(true);
    setTimeout(() => {
      setIsRetrying(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
        <div className="flex items-start gap-4 mb-5">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <i className="ri-refresh-line text-blue-600 text-lg w-5 h-5 flex items-center justify-center"></i>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-[#111111] mb-1">Retry Try-On Job</h3>
            <p className="text-sm text-[#6B7280]">
              Are you sure you want to retry job <span className="font-medium text-[#111111]">{jobId}</span>? This will reprocess the try-on request and consume 1 credit.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 justify-end">
          <button
            onClick={onClose}
            disabled={isRetrying}
            className="px-4 py-2.5 bg-[#F8F8F8] hover:bg-[#E5E5E5] text-[#111111] text-sm font-medium rounded-full transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handleRetry}
            disabled={isRetrying}
            className="px-4 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-full transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50 flex items-center gap-2"
          >
            {isRetrying && <i className="ri-loader-4-line w-4 h-4 flex items-center justify-center animate-spin"></i>}
            <span>{isRetrying ? 'Retrying...' : 'Retry Job'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}