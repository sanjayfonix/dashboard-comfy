'use client';

interface ConfirmationModalProps {
  action: {
    type: 'deactivate' | 'remove';
    userId: string;
    userName: string;
  };
  onClose: () => void;
  onConfirm: () => void;
}

export default function ConfirmationModal({ action, onClose, onConfirm }: ConfirmationModalProps) {
  const isDeactivate = action.type === 'deactivate';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full">
        <div className="p-6">
          <div className={`w-12 h-12 flex items-center justify-center ${isDeactivate ? 'bg-orange-100' : 'bg-red-100'} rounded-full mb-4`}>
            <i className={`${isDeactivate ? 'ri-user-unfollow-line' : 'ri-delete-bin-line'} w-6 h-6 flex items-center justify-center ${isDeactivate ? 'text-orange-600' : 'text-red-600'}`}></i>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-2">
            {isDeactivate ? 'Deactivate User' : 'Remove User'}
          </h2>
          <p className="text-gray-600 mb-6">
            {isDeactivate
              ? `Are you sure you want to deactivate ${action.userName}? They will lose access to the dashboard until reactivated.`
              : `Are you sure you want to remove ${action.userName} from your team? This action cannot be undone.`}
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={onConfirm}
              className={`flex-1 ${isDeactivate ? 'bg-orange-600 hover:bg-orange-700' : 'bg-red-600 hover:bg-red-700'} text-white px-6 py-3 rounded-lg transition-colors whitespace-nowrap`}
            >
              {isDeactivate ? 'Deactivate' : 'Remove'}
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-gray-100 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}