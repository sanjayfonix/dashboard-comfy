'use client';

import { useState } from 'react';

interface Worker {
  id: string;
  region: string;
  status: 'Active' | 'Idle' | 'Offline' | 'Error';
  currentJobs: number;
  cpuUsage: number;
  gpuUsage: number;
  memoryUsage: number;
  lastHeartbeat: string;
}

export default function WorkerStatusTable() {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showRestartModal, setShowRestartModal] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState<Worker | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const workers: Worker[] = [
    { id: 'gpu-worker-001', region: 'US-East', status: 'Active', currentJobs: 3, cpuUsage: 68, gpuUsage: 92, memoryUsage: 74, lastHeartbeat: '2 seconds ago' },
    { id: 'gpu-worker-002', region: 'US-West', status: 'Active', currentJobs: 2, cpuUsage: 54, gpuUsage: 87, memoryUsage: 69, lastHeartbeat: '1 second ago' },
    { id: 'gpu-worker-003', region: 'EU-Central', status: 'Idle', currentJobs: 0, cpuUsage: 12, gpuUsage: 8, memoryUsage: 34, lastHeartbeat: '5 seconds ago' },
    { id: 'gpu-worker-004', region: 'Asia-Pacific', status: 'Active', currentJobs: 4, cpuUsage: 78, gpuUsage: 95, memoryUsage: 81, lastHeartbeat: '3 seconds ago' },
    { id: 'gpu-worker-005', region: 'US-East', status: 'Error', currentJobs: 0, cpuUsage: 0, gpuUsage: 0, memoryUsage: 0, lastHeartbeat: '12 minutes ago' },
    { id: 'gpu-worker-006', region: 'EU-West', status: 'Active', currentJobs: 1, cpuUsage: 45, gpuUsage: 76, memoryUsage: 58, lastHeartbeat: '4 seconds ago' },
    { id: 'gpu-worker-007', region: 'US-West', status: 'Idle', currentJobs: 0, cpuUsage: 15, gpuUsage: 10, memoryUsage: 38, lastHeartbeat: '6 seconds ago' },
    { id: 'gpu-worker-008', region: 'Asia-Pacific', status: 'Active', currentJobs: 2, cpuUsage: 62, gpuUsage: 88, memoryUsage: 72, lastHeartbeat: '2 seconds ago' },
    { id: 'gpu-worker-009', region: 'EU-Central', status: 'Offline', currentJobs: 0, cpuUsage: 0, gpuUsage: 0, memoryUsage: 0, lastHeartbeat: '8 minutes ago' },
    { id: 'gpu-worker-010', region: 'US-East', status: 'Active', currentJobs: 3, cpuUsage: 71, gpuUsage: 90, memoryUsage: 76, lastHeartbeat: '1 second ago' },
  ];

  const totalPages = Math.ceil(workers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedWorkers = workers.slice(startIndex, startIndex + itemsPerPage);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-[#10B981]/10 text-[#10B981]';
      case 'Idle': return 'bg-[#6B7280]/10 text-[#6B7280]';
      case 'Offline': return 'bg-[#9CA3AF]/10 text-[#9CA3AF]';
      case 'Error': return 'bg-[#EF4444]/10 text-[#EF4444]';
      default: return 'bg-[#6B7280]/10 text-[#6B7280]';
    }
  };

  const getUsageColor = (usage: number) => {
    if (usage >= 90) return 'text-[#EF4444]';
    if (usage >= 70) return 'text-[#F59E0B]';
    return 'text-[#10B981]';
  };

  const handleViewDetails = (worker: Worker) => {
    setSelectedWorker(worker);
    setShowDetailsModal(true);
  };

  const handleRestartWorker = (worker: Worker) => {
    setSelectedWorker(worker);
    setShowRestartModal(true);
  };

  const confirmRestart = () => {
    setShowRestartModal(false);
    setSelectedWorker(null);
  };

  return (
    <>
      <div className="bg-white rounded-2xl border border-[#EBEBEB] shadow-[0px_2px_8px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#FAFAFA] border-b border-[#EBEBEB]">
                <th className="text-left px-6 py-4 text-xs font-semibold text-[#6B7280] uppercase tracking-wider whitespace-nowrap">Worker ID</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-[#6B7280] uppercase tracking-wider whitespace-nowrap">Region</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-[#6B7280] uppercase tracking-wider whitespace-nowrap">Status</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-[#6B7280] uppercase tracking-wider whitespace-nowrap">Current Jobs</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-[#6B7280] uppercase tracking-wider whitespace-nowrap">CPU Usage</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-[#6B7280] uppercase tracking-wider whitespace-nowrap">GPU Usage</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-[#6B7280] uppercase tracking-wider whitespace-nowrap">Memory Usage</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-[#6B7280] uppercase tracking-wider whitespace-nowrap">Last Heartbeat</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-[#6B7280] uppercase tracking-wider whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedWorkers.map((worker, index) => (
                <tr key={index} className="border-b border-[#F0F0F0] last:border-0 hover:bg-[#FAFAFA] transition-colors">
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-[#111111] whitespace-nowrap">{worker.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-[#6B7280] whitespace-nowrap">{worker.region}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getStatusColor(worker.status)}`}>
                      {worker.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-[#111111] whitespace-nowrap">{worker.currentJobs}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-medium whitespace-nowrap ${getUsageColor(worker.cpuUsage)}`}>{worker.cpuUsage}%</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-medium whitespace-nowrap ${getUsageColor(worker.gpuUsage)}`}>{worker.gpuUsage}%</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-medium whitespace-nowrap ${getUsageColor(worker.memoryUsage)}`}>{worker.memoryUsage}%</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-[#6B7280] whitespace-nowrap">{worker.lastHeartbeat}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleViewDetails(worker)}
                        className="p-2 text-[#6B7280] hover:text-[#111111] hover:bg-[#F5F5F5] rounded-lg transition-all cursor-pointer"
                        title="View Worker Details"
                      >
                        <i className="ri-eye-line text-base w-4 h-4 flex items-center justify-center"></i>
                      </button>
                      <button
                        onClick={() => handleRestartWorker(worker)}
                        className="p-2 text-[#6B7280] hover:text-[#111111] hover:bg-[#F5F5F5] rounded-lg transition-all cursor-pointer"
                        title="Restart Worker"
                      >
                        <i className="ri-restart-line text-base w-4 h-4 flex items-center justify-center"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between px-6 py-4 border-t border-[#F0F0F0]">
          <div className="text-sm text-[#6B7280]">
            Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, workers.length)} of {workers.length} workers
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm font-medium text-[#111111] hover:bg-[#F5F5F5] rounded-lg disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer whitespace-nowrap"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                  currentPage === page
                    ? 'bg-[#111111] text-white'
                    : 'text-[#111111] hover:bg-[#F5F5F5]'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-sm font-medium text-[#111111] hover:bg-[#F5F5F5] rounded-lg disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer whitespace-nowrap"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {showDetailsModal && selectedWorker && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-8">
          <div className="bg-white rounded-2xl w-full max-w-2xl shadow-[0px_20px_60px_rgba(0,0,0,0.2)]">
            <div className="flex items-center justify-between p-6 border-b border-[#F0F0F0]">
              <div>
                <h3 className="text-xl font-bold text-[#111111]">Worker Details</h3>
                <p className="text-sm text-[#6B7280] mt-1">{selectedWorker.id}</p>
              </div>
              <button
                onClick={() => setShowDetailsModal(false)}
                className="p-2 text-[#6B7280] hover:text-[#111111] hover:bg-[#F5F5F5] rounded-lg transition-all cursor-pointer"
              >
                <i className="ri-close-line text-xl w-5 h-5 flex items-center justify-center"></i>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-xs text-[#9CA3AF] mb-2">Region</div>
                  <div className="text-sm font-medium text-[#111111]">{selectedWorker.region}</div>
                </div>
                <div>
                  <div className="text-xs text-[#9CA3AF] mb-2">Status</div>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getStatusColor(selectedWorker.status)}`}>
                    {selectedWorker.status}
                  </span>
                </div>
                <div>
                  <div className="text-xs text-[#9CA3AF] mb-2">Current Jobs</div>
                  <div className="text-sm font-medium text-[#111111]">{selectedWorker.currentJobs}</div>
                </div>
                <div>
                  <div className="text-xs text-[#9CA3AF] mb-2">Last Heartbeat</div>
                  <div className="text-sm font-medium text-[#111111]">{selectedWorker.lastHeartbeat}</div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[#9CA3AF]">CPU Usage</span>
                    <span className={`text-sm font-medium ${getUsageColor(selectedWorker.cpuUsage)}`}>{selectedWorker.cpuUsage}%</span>
                  </div>
                  <div className="w-full h-2 bg-[#F5F5F5] rounded-full overflow-hidden">
                    <div className={`h-full ${selectedWorker.cpuUsage >= 90 ? 'bg-[#EF4444]' : selectedWorker.cpuUsage >= 70 ? 'bg-[#F59E0B]' : 'bg-[#10B981]'}`} style={{ width: `${selectedWorker.cpuUsage}%` }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[#9CA3AF]">GPU Usage</span>
                    <span className={`text-sm font-medium ${getUsageColor(selectedWorker.gpuUsage)}`}>{selectedWorker.gpuUsage}%</span>
                  </div>
                  <div className="w-full h-2 bg-[#F5F5F5] rounded-full overflow-hidden">
                    <div className={`h-full ${selectedWorker.gpuUsage >= 90 ? 'bg-[#EF4444]' : selectedWorker.gpuUsage >= 70 ? 'bg-[#F59E0B]' : 'bg-[#10B981]'}`} style={{ width: `${selectedWorker.gpuUsage}%` }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[#9CA3AF]">Memory Usage</span>
                    <span className={`text-sm font-medium ${getUsageColor(selectedWorker.memoryUsage)}`}>{selectedWorker.memoryUsage}%</span>
                  </div>
                  <div className="w-full h-2 bg-[#F5F5F5] rounded-full overflow-hidden">
                    <div className={`h-full ${selectedWorker.memoryUsage >= 90 ? 'bg-[#EF4444]' : selectedWorker.memoryUsage >= 70 ? 'bg-[#F59E0B]' : 'bg-[#10B981]'}`} style={{ width: `${selectedWorker.memoryUsage}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 p-6 border-t border-[#F0F0F0]">
              <button
                onClick={() => setShowDetailsModal(false)}
                className="px-6 py-2.5 text-sm font-medium text-[#111111] bg-white border border-[#EBEBEB] rounded-full hover:bg-[#F5F5F5] transition-all cursor-pointer whitespace-nowrap"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showRestartModal && selectedWorker && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-8">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-[0px_20px_60px_rgba(0,0,0,0.2)]">
            <div className="p-6 border-b border-[#F0F0F0]">
              <h3 className="text-xl font-bold text-[#111111]">Restart Worker</h3>
            </div>
            <div className="p-6">
              <p className="text-sm text-[#6B7280] mb-4">
                Are you sure you want to restart worker <span className="font-semibold text-[#111111]">{selectedWorker.id}</span>?
              </p>
              <div className="bg-[#FEF3C7] border border-[#FDE68A] rounded-xl p-4">
                <div className="flex gap-3">
                  <i className="ri-alert-line text-[#F59E0B] text-lg w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                  <p className="text-xs text-[#92400E]">
                    This will interrupt any jobs currently being processed by this worker. Jobs will be reassigned to other available workers.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 p-6 border-t border-[#F0F0F0]">
              <button
                onClick={() => setShowRestartModal(false)}
                className="px-6 py-2.5 text-sm font-medium text-[#111111] bg-white border border-[#EBEBEB] rounded-full hover:bg-[#F5F5F5] transition-all cursor-pointer whitespace-nowrap"
              >
                Cancel
              </button>
              <button
                onClick={confirmRestart}
                className="px-6 py-2.5 text-sm font-medium text-white bg-[#111111] rounded-full hover:bg-[#000000] transition-all cursor-pointer whitespace-nowrap"
              >
                Restart Worker
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}