'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';

interface AuditLogTableProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  actionTypeFilter: string;
  setActionTypeFilter: (value: string) => void;
  userFilter: string;
  setUserFilter: (value: string) => void;
  clientFilter: string;
  setClientFilter: (value: string) => void;
  statusFilter: string;
  setStatusFilter: (value: string) => void;
  dateRange: string;
  setDateRange: (value: string) => void;
  onViewDetails: (log: any) => void;
}

export default function AuditLogTable({
  searchQuery,
  setSearchQuery,
  actionTypeFilter,
  setActionTypeFilter,
  userFilter,
  setUserFilter,
  clientFilter,
  setClientFilter,
  statusFilter,
  setStatusFilter,
  dateRange,
  setDateRange,
  onViewDetails,
}: AuditLogTableProps) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const allLogs = [
    {
      id: 'LOG-001',
      timestamp: '2024-01-15 14:32:18',
      user: 'Admin User',
      role: 'Master Admin',
      actionType: 'Client Created',
      entityAffected: 'Client Account',
      entityId: 'CL-006',
      ipAddress: '192.168.1.100',
      status: 'Success',
      details: 'Created new client account for FashionHub with initial credit balance of 1000.',
    },
    {
      id: 'LOG-002',
      timestamp: '2024-01-15 14:15:42',
      user: 'Admin User',
      role: 'Master Admin',
      actionType: 'Credits Adjusted',
      entityAffected: 'Client Account',
      entityId: 'CL-001',
      ipAddress: '192.168.1.100',
      status: 'Success',
      details: 'Added 500 credits to StyleCo account. Previous balance: 2450, New balance: 2950.',
    },
    {
      id: 'LOG-003',
      timestamp: '2024-01-15 13:58:27',
      user: 'System',
      role: 'System',
      actionType: 'Job Retry Triggered',
      entityAffected: 'AI Job',
      entityId: 'JOB-1234',
      ipAddress: '10.0.0.5',
      status: 'Success',
      details: 'Automatically retried failed job after worker recovery.',
    },
    {
      id: 'LOG-004',
      timestamp: '2024-01-15 13:45:11',
      user: 'Admin User',
      role: 'Master Admin',
      actionType: 'User Login',
      entityAffected: 'Admin Account',
      entityId: 'ADM-001',
      ipAddress: '192.168.1.100',
      status: 'Success',
      details: 'Master Admin logged in successfully from Chrome browser.',
    },
    {
      id: 'LOG-005',
      timestamp: '2024-01-15 13:22:05',
      user: 'System',
      role: 'System',
      actionType: 'System Configuration Change',
      entityAffected: 'Infrastructure',
      entityId: 'INFRA-001',
      ipAddress: '10.0.0.1',
      status: 'Success',
      details: 'Autoscaling threshold updated from 80% to 75% CPU usage.',
    },
    {
      id: 'LOG-006',
      timestamp: '2024-01-15 12:58:33',
      user: 'Admin User',
      role: 'Master Admin',
      actionType: 'Client Updated',
      entityAffected: 'Client Account',
      entityId: 'CL-002',
      ipAddress: '192.168.1.100',
      status: 'Success',
      details: 'Updated TrendWear contact information and billing email.',
    },
    {
      id: 'LOG-007',
      timestamp: '2024-01-15 12:34:19',
      user: 'System',
      role: 'System',
      actionType: 'Worker Restart',
      entityAffected: 'GPU Worker',
      entityId: 'WRK-003',
      ipAddress: '10.0.0.8',
      status: 'Warning',
      details: 'Worker node restarted due to memory threshold exceeded.',
    },
    {
      id: 'LOG-008',
      timestamp: '2024-01-15 11:47:52',
      user: 'Admin User',
      role: 'Master Admin',
      actionType: 'Credits Adjusted',
      entityAffected: 'Client Account',
      entityId: 'CL-003',
      ipAddress: '192.168.1.100',
      status: 'Success',
      details: 'Deducted 200 credits from ChicBoutique for manual adjustment.',
    },
    {
      id: 'LOG-009',
      timestamp: '2024-01-15 11:23:08',
      user: 'System',
      role: 'System',
      actionType: 'Security Event',
      entityAffected: 'API Access',
      entityId: 'API-LOG-045',
      ipAddress: '203.45.67.89',
      status: 'Failed',
      details: 'Unauthorized API access attempt blocked from unknown IP address.',
    },
    {
      id: 'LOG-010',
      timestamp: '2024-01-15 10:55:41',
      user: 'Admin User',
      role: 'Master Admin',
      actionType: 'Client Created',
      entityAffected: 'Client Account',
      entityId: 'CL-005',
      ipAddress: '192.168.1.100',
      status: 'Success',
      details: 'Created new client account for UrbanStyle with initial credit balance of 500.',
    },
    {
      id: 'LOG-011',
      timestamp: '2024-01-15 10:32:14',
      user: 'System',
      role: 'System',
      actionType: 'Job Completed',
      entityAffected: 'AI Job',
      entityId: 'JOB-1189',
      ipAddress: '10.0.0.5',
      status: 'Success',
      details: 'Try-on job completed successfully in 3.2 seconds.',
    },
    {
      id: 'LOG-012',
      timestamp: '2024-01-15 10:18:29',
      user: 'Admin User',
      role: 'Master Admin',
      actionType: 'User Logout',
      entityAffected: 'Admin Account',
      entityId: 'ADM-001',
      ipAddress: '192.168.1.100',
      status: 'Success',
      details: 'Master Admin logged out successfully.',
    },
    {
      id: 'LOG-013',
      timestamp: '2024-01-15 09:47:55',
      user: 'System',
      role: 'System',
      actionType: 'Autoscaling Event',
      entityAffected: 'Infrastructure',
      entityId: 'INFRA-002',
      ipAddress: '10.0.0.1',
      status: 'Success',
      details: 'Added 2 GPU workers due to high queue volume.',
    },
    {
      id: 'LOG-014',
      timestamp: '2024-01-15 09:22:37',
      user: 'Admin User',
      role: 'Master Admin',
      actionType: 'Client Updated',
      entityAffected: 'Client Account',
      entityId: 'CL-004',
      ipAddress: '192.168.1.100',
      status: 'Success',
      details: 'Updated GlamourWear API webhook URL and notification settings.',
    },
    {
      id: 'LOG-015',
      timestamp: '2024-01-15 08:55:12',
      user: 'System',
      role: 'System',
      actionType: 'Job Failed',
      entityAffected: 'AI Job',
      entityId: 'JOB-1156',
      ipAddress: '10.0.0.5',
      status: 'Failed',
      details: 'Try-on job failed due to invalid garment image format.',
    },
    {
      id: 'LOG-016',
      timestamp: '2024-01-15 08:31:48',
      user: 'Admin User',
      role: 'Master Admin',
      actionType: 'User Login',
      entityAffected: 'Admin Account',
      entityId: 'ADM-001',
      ipAddress: '192.168.1.100',
      status: 'Success',
      details: 'Master Admin logged in successfully from Chrome browser.',
    },
    {
      id: 'LOG-017',
      timestamp: '2024-01-14 18:42:33',
      user: 'System',
      role: 'System',
      actionType: 'System Configuration Change',
      entityAffected: 'Infrastructure',
      entityId: 'INFRA-003',
      ipAddress: '10.0.0.1',
      status: 'Success',
      details: 'Updated job timeout limit from 30s to 45s.',
    },
    {
      id: 'LOG-018',
      timestamp: '2024-01-14 17:28:19',
      user: 'Admin User',
      role: 'Master Admin',
      actionType: 'Credits Adjusted',
      entityAffected: 'Client Account',
      entityId: 'CL-002',
      ipAddress: '192.168.1.100',
      status: 'Success',
      details: 'Added 1000 credits to TrendWear account for promotional campaign.',
    },
    {
      id: 'LOG-019',
      timestamp: '2024-01-14 16:55:07',
      user: 'System',
      role: 'System',
      actionType: 'Security Event',
      entityAffected: 'API Access',
      entityId: 'API-LOG-038',
      ipAddress: '198.23.45.67',
      status: 'Failed',
      details: 'Multiple failed login attempts detected from suspicious IP.',
    },
    {
      id: 'LOG-020',
      timestamp: '2024-01-14 16:12:44',
      user: 'Admin User',
      role: 'Master Admin',
      actionType: 'Client Deleted',
      entityAffected: 'Client Account',
      entityId: 'CL-099',
      ipAddress: '192.168.1.100',
      status: 'Success',
      details: 'Permanently deleted inactive client account TestBrand.',
    },
  ];

  const filteredLogs = useMemo(() => {
    let filtered = allLogs;

    if (searchQuery) {
      filtered = filtered.filter(
        (log) =>
          log.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
          log.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
          log.actionType.toLowerCase().includes(searchQuery.toLowerCase()) ||
          log.entityId.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (actionTypeFilter !== 'all') {
      filtered = filtered.filter((log) => log.actionType === actionTypeFilter);
    }

    if (userFilter !== 'all') {
      filtered = filtered.filter((log) => log.user === userFilter);
    }

    if (clientFilter !== 'all') {
      filtered = filtered.filter((log) => log.entityId === clientFilter);
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter((log) => log.status === statusFilter);
    }

    return filtered;
  }, [searchQuery, actionTypeFilter, userFilter, clientFilter, statusFilter, allLogs]);

  const totalPages = Math.ceil(filteredLogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentLogs = filteredLogs.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 relative">
            <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
            <input
              type="text"
              placeholder="Search logs..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <select
            value={actionTypeFilter}
            onChange={(e) => {
              setActionTypeFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="px-3 py-2 pr-8 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
          >
            <option value="all">All Actions</option>
            <option value="Client Created">Client Created</option>
            <option value="Client Updated">Client Updated</option>
            <option value="Client Deleted">Client Deleted</option>
            <option value="Credits Adjusted">Credits Adjusted</option>
            <option value="User Login">User Login</option>
            <option value="User Logout">User Logout</option>
            <option value="Job Retry Triggered">Job Retry Triggered</option>
            <option value="System Configuration Change">System Config Change</option>
            <option value="Security Event">Security Event</option>
          </select>

          <select
            value={userFilter}
            onChange={(e) => {
              setUserFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="px-3 py-2 pr-8 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
          >
            <option value="all">All Users</option>
            <option value="Admin User">Admin User</option>
            <option value="System">System</option>
          </select>

          <select
            value={clientFilter}
            onChange={(e) => {
              setClientFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="px-3 py-2 pr-8 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
          >
            <option value="all">All Clients</option>
            <option value="CL-001">CL-001</option>
            <option value="CL-002">CL-002</option>
            <option value="CL-003">CL-003</option>
            <option value="CL-004">CL-004</option>
            <option value="CL-005">CL-005</option>
            <option value="CL-006">CL-006</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="px-3 py-2 pr-8 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
          >
            <option value="all">All Status</option>
            <option value="Success">Success</option>
            <option value="Failed">Failed</option>
            <option value="Warning">Warning</option>
          </select>

          <select
            value={dateRange}
            onChange={(e) => {
              setDateRange(e.target.value);
              setCurrentPage(1);
            }}
            className="px-3 py-2 pr-8 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
          >
            <option value="today">Today</option>
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
            <option value="90days">Last 90 Days</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 whitespace-nowrap">Timestamp</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 whitespace-nowrap">User</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 whitespace-nowrap">Role</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 whitespace-nowrap">Action Type</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 whitespace-nowrap">Entity Affected</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 whitespace-nowrap">Entity ID</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 whitespace-nowrap">IP Address</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 whitespace-nowrap">Status</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentLogs.map((log) => (
              <tr key={log.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-4 text-sm text-gray-900 whitespace-nowrap">{log.timestamp}</td>
                <td className="py-4 px-4 text-sm text-gray-900 whitespace-nowrap">{log.user}</td>
                <td className="py-4 px-4 text-sm text-gray-600 whitespace-nowrap">{log.role}</td>
                <td className="py-4 px-4 text-sm text-gray-900 whitespace-nowrap">{log.actionType}</td>
                <td className="py-4 px-4 text-sm text-gray-600 whitespace-nowrap">{log.entityAffected}</td>
                <td className="py-4 px-4 text-sm text-gray-900 whitespace-nowrap font-mono">{log.entityId}</td>
                <td className="py-4 px-4 text-sm text-gray-600 whitespace-nowrap font-mono">{log.ipAddress}</td>
                <td className="py-4 px-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                      log.status === 'Success'
                        ? 'bg-green-50 text-green-700'
                        : log.status === 'Failed'
                        ? 'bg-red-50 text-red-700'
                        : 'bg-yellow-50 text-yellow-700'
                    }`}
                  >
                    {log.status}
                  </span>
                </td>
                <td className="py-4 px-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onViewDetails(log)}
                      className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                      title="View Details"
                    >
                      <i className="ri-eye-line"></i>
                    </button>
                    <button
                      onClick={() => {
                        if (log.entityAffected === 'Client Account') {
                          router.push(`/dashboard/clients/${log.entityId}`);
                        } else if (log.entityAffected === 'AI Job') {
                          const jobId = log.entityId.replace('JOB-', '');
                          router.push(`/dashboard/ai-jobs/${jobId}`);
                        } else if (log.entityAffected === 'Infrastructure' || log.entityAffected === 'GPU Worker') {
                          router.push('/dashboard/infrastructure');
                        }
                      }}
                      className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                      title="View Related Entity"
                    >
                      <i className="ri-external-link-line"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
        <p className="text-sm text-gray-600">
          Showing {startIndex + 1}–{Math.min(endIndex, filteredLogs.length)} of {filteredLogs.length} logs
        </p>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            <i className="ri-arrow-left-s-line text-gray-600"></i>
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                currentPage === page
                  ? 'bg-black text-white'
                  : 'border border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            <i className="ri-arrow-right-s-line text-gray-600"></i>
          </button>
        </div>
      </div>
    </div>
  );
}