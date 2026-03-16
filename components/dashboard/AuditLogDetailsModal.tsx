'use client';

interface AuditLogDetailsModalProps {
  log: any;
  onClose: () => void;
}

export default function AuditLogDetailsModal({ log, onClose }: AuditLogDetailsModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Log Details</h2>
            <p className="text-sm text-gray-600 mt-1">Complete information about this activity</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
          >
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Log ID</p>
              <p className="text-sm text-gray-900 font-mono">{log.id}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Timestamp</p>
              <p className="text-sm text-gray-900">{log.timestamp}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase mb-2">User</p>
              <p className="text-sm text-gray-900">{log.user}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Role</p>
              <p className="text-sm text-gray-900">{log.role}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Action Type</p>
              <p className="text-sm text-gray-900">{log.actionType}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Status</p>
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
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Entity Affected</p>
              <p className="text-sm text-gray-900">{log.entityAffected}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Entity ID</p>
              <p className="text-sm text-gray-900 font-mono">{log.entityId}</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">IP Address</p>
            <p className="text-sm text-gray-900 font-mono">{log.ipAddress}</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Activity Details</p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed">{log.details}</p>
            </div>
          </div>

          {log.status === 'Failed' && (
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Error Information</p>
              <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                <p className="text-sm text-red-700 leading-relaxed">
                  System encountered an error during processing. Please review the activity details above for more information.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-100 p-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white border border-gray-200 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
          >
            Close
          </button>
          {log.entityAffected === 'Client Account' && (
            <button
              onClick={() => {
                window.location.href = `/dashboard/clients/${log.entityId}`;
              }}
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
            >
              View Related Entity
            </button>
          )}
        </div>
      </div>
    </div>
  );
}