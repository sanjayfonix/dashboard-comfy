'use client';

import { useState } from 'react';
import Link from 'next/link';

const allJobs = [
  { id: 'JOB-8472', client: 'Fashion Brand X', clientId: '1001', garment: 'Summer Dress #SD-2401', status: 'Completed', processingTime: '2.3s', credits: 5, submitted: '2024-01-15 14:32:18', completed: '2024-01-15 14:32:20' },
  { id: 'JOB-8471', client: 'Luxury Apparel Co.', clientId: '1002', garment: 'Evening Gown #EG-1892', status: 'Completed', processingTime: '1.8s', credits: 5, submitted: '2024-01-15 14:29:45', completed: '2024-01-15 14:29:47' },
  { id: 'JOB-8470', client: 'Urban Style Inc.', clientId: '1003', garment: 'Casual Jacket #CJ-3421', status: 'Processing', processingTime: '-', credits: 5, submitted: '2024-01-15 14:27:12', completed: '-' },
  { id: 'JOB-8469', client: 'Elite Fashion House', clientId: '1004', garment: 'Business Suit #BS-7823', status: 'Completed', processingTime: '3.1s', credits: 5, submitted: '2024-01-15 14:25:33', completed: '2024-01-15 14:25:36' },
  { id: 'JOB-8468', client: 'Modern Wear Ltd.', clientId: '1005', garment: 'Winter Coat #WC-5612', status: 'Failed', processingTime: '-', credits: 0, submitted: '2024-01-15 14:24:08', completed: '-' },
  { id: 'JOB-8467', client: 'Trendy Boutique', clientId: '1006', garment: 'Party Dress #PD-9234', status: 'Completed', processingTime: '2.6s', credits: 5, submitted: '2024-01-15 14:22:41', completed: '2024-01-15 14:22:44' },
  { id: 'JOB-8466', client: 'Classic Couture', clientId: '1007', garment: 'Formal Blazer #FB-4521', status: 'Completed', processingTime: '1.9s', credits: 5, submitted: '2024-01-15 14:20:15', completed: '2024-01-15 14:20:17' },
  { id: 'JOB-8465', client: 'Street Fashion Co.', clientId: '1008', garment: 'Denim Jacket #DJ-6789', status: 'Completed', processingTime: '2.4s', credits: 5, submitted: '2024-01-15 14:17:52', completed: '2024-01-15 14:17:54' },
  { id: 'JOB-8464', client: 'Fashion Brand X', clientId: '1001', garment: 'Spring Blouse #SB-1123', status: 'Completed', processingTime: '2.1s', credits: 5, submitted: '2024-01-15 14:15:28', completed: '2024-01-15 14:15:30' },
  { id: 'JOB-8463', client: 'Luxury Apparel Co.', clientId: '1002', garment: 'Cocktail Dress #CD-8834', status: 'Failed', processingTime: '-', credits: 0, submitted: '2024-01-15 14:13:05', completed: '-' },
  { id: 'JOB-8462', client: 'Urban Style Inc.', clientId: '1003', garment: 'Hoodie #HD-2341', status: 'Completed', processingTime: '2.7s', credits: 5, submitted: '2024-01-15 14:10:42', completed: '2024-01-15 14:10:45' },
  { id: 'JOB-8461', client: 'Elite Fashion House', clientId: '1004', garment: 'Trench Coat #TC-5567', status: 'Completed', processingTime: '2.9s', credits: 5, submitted: '2024-01-15 14:08:19', completed: '2024-01-15 14:08:22' },
];

export default function JobMonitoringTable() {
  const [searchQuery, setSearchQuery] = useState('');
  const [clientFilter, setClientFilter] = useState('All Clients');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [dateRangeFilter, setDateRangeFilter] = useState('All Time');
  const [showClientMenu, setShowClientMenu] = useState(false);
  const [showStatusMenu, setShowStatusMenu] = useState(false);
  const [showDateMenu, setShowDateMenu] = useState(false);
  const [showRetryModal, setShowRetryModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const uniqueClients = ['All Clients', ...Array.from(new Set(allJobs.map(job => job.client)))];
  const statusOptions = ['All Status', 'Completed', 'Processing', 'Failed'];
  const dateRanges = ['All Time', 'Last 24 Hours', 'Last 7 Days', 'Last 30 Days'];

  const filteredJobs = allJobs.filter(job => {
    const matchesSearch = searchQuery === '' || 
      job.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.garment.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesClient = clientFilter === 'All Clients' || job.client === clientFilter;
    const matchesStatus = statusFilter === 'All Status' || job.status === statusFilter;
    return matchesSearch && matchesClient && matchesStatus;
  });

  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, endIndex);

  const handleRetryJob = (jobId: string) => {
    setSelectedJob(jobId);
    setShowRetryModal(true);
  };

  const confirmRetry = () => {
    setShowRetryModal(false);
    setSelectedJob(null);
  };

  return (
    <div className="bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5]">
      <div className="p-6 border-b border-[#E5E5E5]">
        <div className="mb-5">
          <h2 className="text-lg font-semibold text-[#111111] mb-1">Job Monitoring</h2>
          <p className="text-sm text-[#6B7280]">Recent AI processing jobs across all clients</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] text-base w-4 h-4 flex items-center justify-center"></i>
            <input
              type="text"
              placeholder="Search by Job ID, Client, or Garment..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-11 pr-4 py-2.5 bg-[#F5F5F5] border border-[#EBEBEB] rounded-full text-sm text-[#111111] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 transition-all"
            />
          </div>

          <div className="relative">
            <button
              onClick={() => setShowClientMenu(!showClientMenu)}
              className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[#E5E5E5] rounded-full text-sm font-medium text-[#111111] hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap"
            >
              <i className="ri-building-line w-4 h-4 flex items-center justify-center"></i>
              <span>{clientFilter}</span>
              <i className="ri-arrow-down-s-line w-4 h-4 flex items-center justify-center"></i>
            </button>
            {showClientMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.08)] border border-[#E5E5E5] z-50 py-2 max-h-80 overflow-y-auto">
                {uniqueClients.map((client) => (
                  <button
                    key={client}
                    onClick={() => {
                      setClientFilter(client);
                      setShowClientMenu(false);
                      setCurrentPage(1);
                    }}
                    className="w-full px-4 py-2.5 text-left text-sm text-[#111111] hover:bg-[#F8F8F8] cursor-pointer whitespace-nowrap transition-colors"
                  >
                    {client}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setShowStatusMenu(!showStatusMenu)}
              className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[#E5E5E5] rounded-full text-sm font-medium text-[#111111] hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap"
            >
              <i className="ri-filter-line w-4 h-4 flex items-center justify-center"></i>
              <span>{statusFilter}</span>
              <i className="ri-arrow-down-s-line w-4 h-4 flex items-center justify-center"></i>
            </button>
            {showStatusMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.08)] border border-[#E5E5E5] z-50 py-2">
                {statusOptions.map((status) => (
                  <button
                    key={status}
                    onClick={() => {
                      setStatusFilter(status);
                      setShowStatusMenu(false);
                      setCurrentPage(1);
                    }}
                    className="w-full px-4 py-2.5 text-left text-sm text-[#111111] hover:bg-[#F8F8F8] cursor-pointer whitespace-nowrap transition-colors"
                  >
                    {status}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setShowDateMenu(!showDateMenu)}
              className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[#E5E5E5] rounded-full text-sm font-medium text-[#111111] hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap"
            >
              <i className="ri-calendar-line w-4 h-4 flex items-center justify-center"></i>
              <span>{dateRangeFilter}</span>
              <i className="ri-arrow-down-s-line w-4 h-4 flex items-center justify-center"></i>
            </button>
            {showDateMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.08)] border border-[#E5E5E5] z-50 py-2">
                {dateRanges.map((range) => (
                  <button
                    key={range}
                    onClick={() => {
                      setDateRangeFilter(range);
                      setShowDateMenu(false);
                      setCurrentPage(1);
                    }}
                    className="w-full px-4 py-2.5 text-left text-sm text-[#111111] hover:bg-[#F8F8F8] cursor-pointer whitespace-nowrap transition-colors"
                  >
                    {range}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#E5E5E5]">
              <th className="text-left py-4 px-6 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Job ID</th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Client</th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Garment</th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Status</th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Processing Time</th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Credits</th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Submitted</th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Completed</th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentJobs.map((job, index) => (
              <tr key={index} className="border-b border-[#F5F5F5] hover:bg-[#F8F8F8] transition-colors">
                <td className="py-4 px-6 text-sm font-medium text-[#111111]">{job.id}</td>
                <td className="py-4 px-6 text-sm text-[#111111]">{job.client}</td>
                <td className="py-4 px-6 text-sm text-[#6B7280]">{job.garment}</td>
                <td className="py-4 px-6">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap border ${
                    job.status === 'Completed'
                      ? 'bg-emerald-50 text-emerald-600 border-emerald-100'
                      : job.status === 'Processing'
                      ? 'bg-blue-50 text-blue-600 border-blue-100'
                      : 'bg-red-50 text-red-600 border-red-100'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      job.status === 'Completed'
                        ? 'bg-emerald-500'
                        : job.status === 'Processing'
                        ? 'bg-blue-500 animate-pulse'
                        : 'bg-red-500'
                    }`}></span>
                    {job.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-[#6B7280]">{job.processingTime}</td>
                <td className="py-4 px-6 text-sm text-[#6B7280]">{job.credits}</td>
                <td className="py-4 px-6 text-sm text-[#6B7280]">{job.submitted}</td>
                <td className="py-4 px-6 text-sm text-[#6B7280]">{job.completed}</td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/dashboard/ai-jobs/${job.id}`}
                      title="View Job Details"
                      className="w-8 h-8 flex items-center justify-center bg-[#F8F8F8] hover:bg-[#F0F0F0] rounded-lg transition-all cursor-pointer"
                    >
                      <i className="ri-eye-line text-base text-[#111111] w-4 h-4 flex items-center justify-center"></i>
                    </Link>
                    <Link
                      href={`/dashboard/clients/${job.clientId}`}
                      title="View Client"
                      className="w-8 h-8 flex items-center justify-center bg-[#F8F8F8] hover:bg-[#F0F0F0] rounded-lg transition-all cursor-pointer"
                    >
                      <i className="ri-building-line text-base text-[#111111] w-4 h-4 flex items-center justify-center"></i>
                    </Link>
                    {job.status === 'Failed' && (
                      <button
                        onClick={() => handleRetryJob(job.id)}
                        title="Retry Job"
                        className="w-8 h-8 flex items-center justify-center bg-[#F8F8F8] hover:bg-[#F0F0F0] rounded-lg transition-all cursor-pointer"
                      >
                        <i className="ri-refresh-line text-base text-[#111111] w-4 h-4 flex items-center justify-center"></i>
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-6 border-t border-[#E5E5E5] flex items-center justify-between">
        <p className="text-sm text-[#6B7280]">
          Showing {startIndex + 1}–{Math.min(endIndex, filteredJobs.length)} of {filteredJobs.length} jobs
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="w-8 h-8 flex items-center justify-center bg-white border border-[#E5E5E5] rounded-lg text-[#111111] hover:bg-[#F8F8F8] transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <i className="ri-arrow-left-s-line text-base w-4 h-4 flex items-center justify-center"></i>
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                currentPage === page
                  ? 'bg-black text-white'
                  : 'bg-white border border-[#E5E5E5] text-[#111111] hover:bg-[#F8F8F8]'
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="w-8 h-8 flex items-center justify-center bg-white border border-[#E5E5E5] rounded-lg text-[#111111] hover:bg-[#F8F8F8] transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <i className="ri-arrow-right-s-line text-base w-4 h-4 flex items-center justify-center"></i>
          </button>
        </div>
      </div>

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
                onClick={confirmRetry}
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