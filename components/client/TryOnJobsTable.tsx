'use client';

import { useState } from 'react';
import Link from 'next/link';

const jobsData = [
  { id: 'JOB-8234', garment: 'Summer Floral Dress', status: 'Completed', processingTime: '2.3s', credits: 1, date: 'Jan 23, 2025 14:32' },
  { id: 'JOB-8233', garment: 'Classic Denim Jacket', status: 'Completed', processingTime: '1.8s', credits: 1, date: 'Jan 23, 2025 14:28' },
  { id: 'JOB-8232', garment: 'Leather Ankle Boots', status: 'Failed', processingTime: '—', credits: 0, date: 'Jan 23, 2025 14:15' },
  { id: 'JOB-8231', garment: 'Silk Evening Gown', status: 'Completed', processingTime: '2.1s', credits: 1, date: 'Jan 23, 2025 14:10' },
  { id: 'JOB-8230', garment: 'Casual White Sneakers', status: 'Processing', processingTime: '—', credits: 0, date: 'Jan 23, 2025 14:05' },
  { id: 'JOB-8229', garment: 'Summer Floral Dress', status: 'Completed', processingTime: '2.4s', credits: 1, date: 'Jan 23, 2025 13:58' },
  { id: 'JOB-8228', garment: 'Vintage Leather Jacket', status: 'Completed', processingTime: '2.0s', credits: 1, date: 'Jan 23, 2025 13:45' },
  { id: 'JOB-8227', garment: 'Striped Cotton Shirt', status: 'Failed', processingTime: '—', credits: 0, date: 'Jan 23, 2025 13:30' },
  { id: 'JOB-8226', garment: 'Black Wool Coat', status: 'Completed', processingTime: '2.6s', credits: 1, date: 'Jan 23, 2025 13:20' },
  { id: 'JOB-8225', garment: 'Blue Denim Jeans', status: 'Completed', processingTime: '1.9s', credits: 1, date: 'Jan 23, 2025 13:10' }
];

export default function TryOnJobsTable() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [garmentFilter, setGarmentFilter] = useState('all');
  const [showRetryModal, setShowRetryModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = job.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || job.status === statusFilter;
    const matchesGarment = garmentFilter === 'all' || job.garment === garmentFilter;
    return matchesSearch && matchesStatus && matchesGarment;
  });

  const uniqueGarments = Array.from(new Set(jobsData.map(job => job.garment)));

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap bg-emerald-50 text-emerald-600 border border-emerald-100">
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-emerald-500"></span>
            Completed
          </span>
        );
      case 'Failed':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap bg-red-50 text-red-600 border border-red-100">
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-red-500"></span>
            Failed
          </span>
        );
      case 'Processing':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap bg-blue-50 text-blue-600 border border-blue-100">
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-blue-500 animate-pulse"></span>
            Processing
          </span>
        );
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-50 text-emerald-600 border-emerald-200';
      case 'Failed':
        return 'bg-red-50 text-red-600 border-red-200';
      case 'Processing':
        return 'bg-blue-50 text-blue-600 border-blue-200';
      default:
        return 'bg-[#F8F8F8] text-[#9CA3AF] border-[#E5E5E5]';
    }
  };

  const handleRetry = (jobId: string) => {
    setSelectedJob(jobId);
    setShowRetryModal(true);
  };

  return (
    <div className="bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5]">
      <div className="p-6 border-b border-[#E5E5E5]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-[#111111]">Try-On Jobs</h2>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] text-base w-4 h-4 flex items-center justify-center"></i>
            <input
              type="text"
              placeholder="Search by Job ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-[#F8F8F8] border border-[#E5E5E5] rounded-full text-sm text-[#111111] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-black/5"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2.5 pr-8 bg-[#F8F8F8] border border-[#E5E5E5] rounded-full text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-black/5 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20width%3d%2212%27%20height%3d%228%27%20viewBox%3d%220%200%2012%208%22%20fill%3d%22none%22%20xmlns%3d%22http://www.w3.org/2000/svg%22%3e%3cpath%20d%3d%22M1%201.5L6%206.5L11%201.5%22%20stroke%3d%22%23111111%22%20stroke-width%3d%221.5%22%20stroke-linecap%3d%22round%22%20stroke-linejoin%3d%22round%22/%3e%3c/svg%3e')] bg-[length:12px] bg-[right_1rem_center] bg-no-repeat"
          >
            <option value="all">All Status</option>
            <option value="Completed">Completed</option>
            <option value="Processing">Processing</option>
            <option value="Failed">Failed</option>
          </select>

          <select
            value={garmentFilter}
            onChange={(e) => setGarmentFilter(e.target.value)}
            className="px-4 py-2.5 pr-8 bg-[#F8F8F8] border border-[#E5E5E5] rounded-full text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-black/5 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20width%3d%2212%27%20height%3d%228%27%20viewBox%3d%220%200%2012%208%22%20fill%3d%22none%22%20xmlns%3d%22http://www.w3.org/2000/svg%22%3e%3cpath%20d%3d%22M1%201.5L6%206.5L11%201.5%22%20stroke%3d%22%23111111%22%20stroke-width%3d%221.5%22%20stroke-linecap%3d%22round%22%20stroke-linejoin%3d%22round%22/%3e%3c/svg%3e')] bg-[length:12px] bg-[right_1rem_center] bg-no-repeat"
          >
            <option value="all">All Garments</option>
            {uniqueGarments.map((garment) => (
              <option key={garment} value={garment}>
                {garment}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredJobs.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
          <div className="w-16 h-16 bg-[#F8F8F8] rounded-full flex items-center justify-center mb-4">
            <i className="ri-file-list-3-line text-2xl text-[#9CA3AF] w-6 h-6 flex items-center justify-center"></i>
          </div>
          <p className="text-sm font-medium text-[#111111] mb-1">No jobs found</p>
          <p className="text-xs text-[#9CA3AF]">Try adjusting your search or filters.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#E5E5E5]">
                <th className="px-6 py-4 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                  Job ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                  Garment Name
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                  Processing Time
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                  Credits Used
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E5E5]">
              {filteredJobs.map((job) => (
                <tr key={job.id} className="hover:bg-[#F8F8F8] transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-[#111111]">{job.id}</td>
                  <td className="px-6 py-4 text-sm text-[#111111]">{job.garment}</td>
                  <td className="px-6 py-4">
                    {getStatusBadge(job.status)}
                  </td>
                  <td className="px-6 py-4 text-sm text-[#111111]">{job.processingTime}</td>
                  <td className="px-6 py-4 text-sm text-[#111111]">{job.credits}</td>
                  <td className="px-6 py-4 text-sm text-[#9CA3AF]">{job.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/client/try-on-jobs/${job.id}`}
                        className="flex items-center gap-1 px-3 py-1.5 bg-[#F8F8F8] hover:bg-[#F0F0F0] rounded-full text-xs font-medium text-[#111111] transition-all cursor-pointer whitespace-nowrap"
                      >
                        <i className="ri-eye-line text-sm w-3 h-3 flex items-center justify-center"></i>
                        <span>View</span>
                      </Link>
                      {job.status === 'Failed' && (
                        <button
                          onClick={() => handleRetry(job.id)}
                          className="flex items-center gap-1 px-3 py-1.5 bg-black hover:bg-[#333333] text-white rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap"
                        >
                          <i className="ri-refresh-line text-sm w-3 h-3 flex items-center justify-center"></i>
                          <span>Retry</span>
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showRetryModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4">
            <div className="p-6 border-b border-[#F0F0F0]">
              <h3 className="text-lg font-semibold text-[#111111]">Retry Job</h3>
              <p className="text-sm text-[#6B7280] mt-1">Are you sure you want to retry this job?</p>
            </div>
            <div className="p-6">
              <div className="bg-[#F8F8F8] rounded-xl p-4">
                <p className="text-sm text-[#6B7280] mb-1">Job ID</p>
                <p className="text-sm font-semibold text-[#111111]">{selectedJob}</p>
              </div>
              <p className="text-xs text-[#9CA3AF] mt-4">
                This will re-run the AI try-on job and consume credits again.
              </p>
            </div>
            <div className="p-6 border-t border-[#F0F0F0] flex justify-end gap-3">
              <button
                onClick={() => setShowRetryModal(false)}
                className="px-5 py-2.5 bg-white border border-[#E5E5E5] rounded-full text-sm font-medium text-[#111111] hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap"
              >
                Cancel
              </button>
              <button
                onClick={() => {}}
                className="px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-[#333333] transition-all cursor-pointer whitespace-nowrap"
              >
                Confirm Retry
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}