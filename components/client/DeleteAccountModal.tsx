'use client';

interface DeleteAccountModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export default function DeleteAccountModal({ onConfirm, onCancel }: DeleteAccountModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full">
        
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
            <i className="ri-error-warning-line text-red-600 w-6 h-6 flex items-center justify-center"></i>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#111111]">Delete Account</h3>
            <p className="text-sm text-[#6B7280]">This action cannot be undone</p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm text-[#111111] mb-3">
            Deleting your account will permanently remove:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-[#6B7280]">
              <i className="ri-close-circle-line text-red-600 w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5"></i>
              <span>All garment data and images</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#6B7280]">
              <i className="ri-close-circle-line text-red-600 w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5"></i>
              <span>Try-on job history and results</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#6B7280]">
              <i className="ri-close-circle-line text-red-600 w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5"></i>
              <span>Credit balance and transaction history</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#6B7280]">
              <i className="ri-close-circle-line text-red-600 w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5"></i>
              <span>Team members and access permissions</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#6B7280]">
              <i className="ri-close-circle-line text-red-600 w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5"></i>
              <span>API credentials and integration settings</span>
            </li>
          </ul>
        </div>

        <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl mb-6">
          <p className="text-sm font-medium text-orange-900">Are you sure you want to continue?</p>
          <p className="text-xs text-orange-700 mt-1">This will immediately disable your virtual try-on feature on your website.</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2.5 bg-red-600 text-white text-sm font-medium rounded-xl hover:bg-red-700 transition-colors cursor-pointer whitespace-nowrap"
          >
            Confirm Deletion
          </button>
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2.5 bg-[#F8F8F8] text-[#111111] text-sm font-medium rounded-xl hover:bg-[#F0F0F0] transition-colors cursor-pointer whitespace-nowrap"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
}