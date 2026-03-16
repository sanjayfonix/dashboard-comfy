'use client';

import { useState } from 'react';
import ActivityMetrics from '@/components/dashboard/ActivityMetrics';
import AuditLogTable from '@/components/dashboard/AuditLogTable';
import ActivityTimelinePanel from '@/components/dashboard/ActivityTimelinePanel';
import AuditLogDetailsModal from '@/components/dashboard/AuditLogDetailsModal';

const allLogs = [
  { id: 'LOG-001', timestamp: '2024-01-15 14:32:18', user: 'Admin User', role: 'Master Admin', actionType: 'Client Created', entityAffected: 'Client Account', entityId: 'CL-006', ipAddress: '192.168.1.100', status: 'Success', details: 'Created new client account for FashionHub with initial credit balance of 1000.' },
  { id: 'LOG-002', timestamp: '2024-01-15 14:15:42', user: 'Admin User', role: 'Master Admin', actionType: 'Credits Adjusted', entityAffected: 'Client Account', entityId: 'CL-001', ipAddress: '192.168.1.100', status: 'Success', details: 'Added 500 credits to StyleCo account. Previous balance: 2450, New balance: 2950.' },
  { id: 'LOG-003', timestamp: '2024-01-15 13:58:27', user: 'System', role: 'System', actionType: 'Job Retry Triggered', entityAffected: 'AI Job', entityId: 'JOB-1234', ipAddress: '10.0.0.5', status: 'Success', details: 'Automatically retried failed job after worker recovery.' },
  { id: 'LOG-004', timestamp: '2024-01-15 13:45:11', user: 'Admin User', role: 'Master Admin', actionType: 'User Login', entityAffected: 'Admin Account', entityId: 'ADM-001', ipAddress: '192.168.1.100', status: 'Success', details: 'Master Admin logged in successfully from Chrome browser.' },
  { id: 'LOG-005', timestamp: '2024-01-15 13:22:05', user: 'System', role: 'System', actionType: 'System Configuration Change', entityAffected: 'Infrastructure', entityId: 'INFRA-001', ipAddress: '10.0.0.1', status: 'Success', details: 'Autoscaling threshold updated from 80% to 75% CPU usage.' },
  { id: 'LOG-006', timestamp: '2024-01-15 12:58:33', user: 'Admin User', role: 'Master Admin', actionType: 'Client Updated', entityAffected: 'Client Account', entityId: 'CL-002', ipAddress: '192.168.1.100', status: 'Success', details: 'Updated TrendWear contact information and billing email.' },
  { id: 'LOG-007', timestamp: '2024-01-15 12:34:19', user: 'System', role: 'System', actionType: 'Worker Restart', entityAffected: 'GPU Worker', entityId: 'WRK-003', ipAddress: '10.0.0.8', status: 'Warning', details: 'Worker node restarted due to memory threshold exceeded.' },
  { id: 'LOG-008', timestamp: '2024-01-15 11:47:52', user: 'Admin User', role: 'Master Admin', actionType: 'Credits Adjusted', entityAffected: 'Client Account', entityId: 'CL-003', ipAddress: '192.168.1.100', status: 'Success', details: 'Deducted 200 credits from ChicBoutique for manual adjustment.' },
  { id: 'LOG-009', timestamp: '2024-01-15 11:23:08', user: 'System', role: 'System', actionType: 'Security Event', entityAffected: 'API Access', entityId: 'API-LOG-045', ipAddress: '203.45.67.89', status: 'Failed', details: 'Unauthorized API access attempt blocked from unknown IP address.' },
  { id: 'LOG-010', timestamp: '2024-01-15 10:55:41', user: 'Admin User', role: 'Master Admin', actionType: 'Client Created', entityAffected: 'Client Account', entityId: 'CL-005', ipAddress: '192.168.1.100', status: 'Success', details: 'Created new client account for UrbanStyle with initial credit balance of 500.' },
  { id: 'LOG-011', timestamp: '2024-01-15 10:32:14', user: 'System', role: 'System', actionType: 'Job Completed', entityAffected: 'AI Job', entityId: 'JOB-1189', ipAddress: '10.0.0.5', status: 'Success', details: 'Try-on job completed successfully in 3.2 seconds.' },
  { id: 'LOG-012', timestamp: '2024-01-15 10:18:29', user: 'Admin User', role: 'Master Admin', actionType: 'User Logout', entityAffected: 'Admin Account', entityId: 'ADM-001', ipAddress: '192.168.1.100', status: 'Success', details: 'Master Admin logged out successfully.' },
  { id: 'LOG-013', timestamp: '2024-01-15 09:47:55', user: 'System', role: 'System', actionType: 'Autoscaling Event', entityAffected: 'Infrastructure', entityId: 'INFRA-002', ipAddress: '10.0.0.1', status: 'Success', details: 'Added 2 GPU workers due to high queue volume.' },
  { id: 'LOG-014', timestamp: '2024-01-15 09:22:37', user: 'Admin User', role: 'Master Admin', actionType: 'Client Updated', entityAffected: 'Client Account', entityId: 'CL-004', ipAddress: '192.168.1.100', status: 'Success', details: 'Updated GlamourWear API webhook URL and notification settings.' },
  { id: 'LOG-015', timestamp: '2024-01-15 08:55:12', user: 'System', role: 'System', actionType: 'Job Failed', entityAffected: 'AI Job', entityId: 'JOB-1156', ipAddress: '10.0.0.5', status: 'Failed', details: 'Try-on job failed due to invalid garment image format.' },
  { id: 'LOG-016', timestamp: '2024-01-15 08:31:48', user: 'Admin User', role: 'Master Admin', actionType: 'User Login', entityAffected: 'Admin Account', entityId: 'ADM-001', ipAddress: '192.168.1.100', status: 'Success', details: 'Master Admin logged in successfully from Chrome browser.' },
  { id: 'LOG-017', timestamp: '2024-01-14 18:42:33', user: 'System', role: 'System', actionType: 'System Configuration Change', entityAffected: 'Infrastructure', entityId: 'INFRA-003', ipAddress: '10.0.0.1', status: 'Success', details: 'Updated job timeout limit from 30s to 45s.' },
  { id: 'LOG-018', timestamp: '2024-01-14 17:28:19', user: 'Admin User', role: 'Master Admin', actionType: 'Credits Adjusted', entityAffected: 'Client Account', entityId: 'CL-002', ipAddress: '192.168.1.100', status: 'Success', details: 'Added 1000 credits to TrendWear account for promotional campaign.' },
  { id: 'LOG-019', timestamp: '2024-01-14 16:55:07', user: 'System', role: 'System', actionType: 'Security Event', entityAffected: 'API Access', entityId: 'API-LOG-038', ipAddress: '198.23.45.67', status: 'Failed', details: 'Multiple failed login attempts detected from suspicious IP.' },
  { id: 'LOG-020', timestamp: '2024-01-14 16:12:44', user: 'Admin User', role: 'Master Admin', actionType: 'Client Deleted', entityAffected: 'Client Account', entityId: 'CL-099', ipAddress: '192.168.1.100', status: 'Success', details: 'Permanently deleted inactive client account TestBrand.' },
];

export default function AuditLogsView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [actionTypeFilter, setActionTypeFilter] = useState('all');
  const [userFilter, setUserFilter] = useState('all');
  const [clientFilter, setClientFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateRange, setDateRange] = useState('7days');
  const [selectedLog, setSelectedLog] = useState<any>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [exportSuccess, setExportSuccess] = useState(false);

  const getFilteredLogs = () => {
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
    if (actionTypeFilter !== 'all') filtered = filtered.filter((log) => log.actionType === actionTypeFilter);
    if (userFilter !== 'all') filtered = filtered.filter((log) => log.user === userFilter);
    if (clientFilter !== 'all') filtered = filtered.filter((log) => log.entityId === clientFilter);
    if (statusFilter !== 'all') filtered = filtered.filter((log) => log.status === statusFilter);
    return filtered;
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setActionTypeFilter('all');
    setUserFilter('all');
    setClientFilter('all');
    setStatusFilter('all');
    setDateRange('7days');
  };

  const handleExportLogs = () => {
    const logs = getFilteredLogs();
    const headers = ['Log ID', 'Timestamp', 'User', 'Role', 'Action Type', 'Entity Affected', 'Entity ID', 'IP Address', 'Status', 'Details'];
    const rows = logs.map((log) => [
      log.id,
      log.timestamp,
      log.user,
      log.role,
      log.actionType,
      log.entityAffected,
      log.entityId,
      log.ipAddress,
      log.status,
      `"${log.details.replace(/"/g, '""')}"`,
    ]);
    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `audit-logs-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setExportSuccess(true);
    setTimeout(() => setExportSuccess(false), 3000);
  };

  const handleViewDetails = (log: any) => {
    setSelectedLog(log);
    setShowDetailsModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-8">
        <div className="mb-8">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Audit Logs</h1>
              <p className="text-gray-600">Track system activity and administrative actions.</p>
            </div>
            <div className="flex gap-3 items-center">
              {exportSuccess && (
                <span className="text-sm text-green-600 font-medium flex items-center gap-1">
                  <i className="ri-check-line"></i> Exported successfully
                </span>
              )}
              <button
                onClick={handleExportLogs}
                className="px-4 py-2 bg-white border border-gray-200 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2"
              >
                <i className="ri-download-2-line text-sm"></i>
                Export Logs
              </button>
              <button
                onClick={handleClearFilters}
                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2"
              >
                <i className="ri-filter-off-line text-sm"></i>
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        <ActivityMetrics />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2">
            <AuditLogTable
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              actionTypeFilter={actionTypeFilter}
              setActionTypeFilter={setActionTypeFilter}
              userFilter={userFilter}
              setUserFilter={setUserFilter}
              clientFilter={clientFilter}
              setClientFilter={setClientFilter}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              dateRange={dateRange}
              setDateRange={setDateRange}
              onViewDetails={handleViewDetails}
            />
          </div>

          <div className="lg:col-span-1">
            <ActivityTimelinePanel />
          </div>
        </div>
      </div>

      {showDetailsModal && selectedLog && (
        <AuditLogDetailsModal
          log={selectedLog}
          onClose={() => setShowDetailsModal(false)}
        />
      )}
    </div>
  );
}
