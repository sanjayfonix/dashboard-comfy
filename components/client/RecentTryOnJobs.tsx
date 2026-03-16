'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const jobs = [
  { id: 'JOB-8234', garment: 'Summer Floral Dress', status: 'Completed', processingTime: '2.3s', date: 'Jan 23, 2025 14:32' },
  { id: 'JOB-8233', garment: 'Classic Denim Jacket', status: 'Completed', processingTime: '1.8s', date: 'Jan 23, 2025 14:28' },
  { id: 'JOB-8232', garment: 'Leather Ankle Boots', status: 'Failed', processingTime: '—', date: 'Jan 23, 2025 14:15' },
  { id: 'JOB-8231', garment: 'Silk Evening Gown', status: 'Completed', processingTime: '2.1s', date: 'Jan 23, 2025 14:10' },
  { id: 'JOB-8230', garment: 'Casual White Sneakers', status: 'Processing', processingTime: '—', date: 'Jan 23, 2025 14:05' },
  { id: 'JOB-8229', garment: 'Summer Floral Dress', status: 'Completed', processingTime: '2.4s', date: 'Jan 23, 2025 13:58' },
];

export default function RecentTryOnJobs() {
  const router = useRouter();
  const [showRetryModal, setShowRetryModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const handleRetry = (jobId: string) => {
    setSelectedJob(jobId);
    setShowRetryModal(true);
  };

  const confirmRetry = () => {
    setShowRetryModal(false);
    setSelectedJob(null);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600">
            <i className="ri-checkbox-circle-fill w-3 h-3 flex items-center justify-center"></i>
            Completed
          </span>
        );
      case 'Failed':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-50 text-red-600">
            <i className="ri-close-circle-fill w-3 h-3 flex items-center justify-center"></i>
            Failed
          </span>
        );
      case 'Processing':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
            <i className="ri-loader-4-line w-3 h-3 flex items-center justify-center animate-spin"></i>
            Processing
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-[#F0F0F0] overflow-hidden">
        <div className="px-6 py-4 border-b border-[#F0F0F0]">
          <h2 className="text-base font-semibold text-[#111111]">Recent Try-On Jobs</h2>
          <p className="text-xs text-[#9CA3AF] mt-0.5">Latest try-on requests processed</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#F8F8F8] border-b border-[#F0F0F0]">
                <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Job ID</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Garment</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Status</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Processing Time</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Date</th>
                <th className="text-right px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0F0F0]">
              {jobs.map((job) => (
                <tr key={job.id} className="hover:bg-[#F8F8F8] transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-[#111111]">{job.id}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-[#6B7280]">{job.garment}</p>
                  </td>
                  <td className="px-6 py-4">
                    {getStatusBadge(job.status)}
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-[#6B7280]">{job.processingTime}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-[#6B7280]">{job.date}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => router.push(`/client/try-on-jobs/${job.id}`)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F8F8F8] hover:bg-black hover:text-white rounded-lg text-xs font-medium text-[#111111] transition-all cursor-pointer whitespace-nowrap"
                      >
                        <i className="ri-eye-line w-3.5 h-3.5 flex items-center justify-center"></i>
                        <span>View Details</span>
                      </button>
                      {job.status === 'Failed' && (
                        <button
                          onClick={() => handleRetry(job.id)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 hover:bg-blue-500 hover:text-white text-blue-600 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap"
                        >
                          <i className="ri-refresh-line w-3.5 h-3.5 flex items-center justify-center"></i>
                          <span>Retry Job</span>
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showRetryModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-refresh-line text-blue-600 text-lg w-5 h-5 flex items-center justify-center"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#111111] mb-1">Retry Try-On Job</h3>
                <p className="text-sm text-[#6B7280]">
                  Are you sure you want to retry job <span className="font-medium text-[#111111]">{selectedJob}</span>? This will reprocess the try-on request.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-end">
              <button
                onClick={() => setShowRetryModal(false)}
                className="px-4 py-2.5 bg-[#F8F8F8] hover:bg-[#E5E5E5] text-[#111111] text-sm font-medium rounded-full transition-colors cursor-pointer whitespace-nowrap"
              >
                Cancel
              </button>
              <button
                onClick={confirmRetry}
                className="px-4 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-full transition-colors cursor-pointer whitespace-nowrap"
              >
                Retry Job
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}