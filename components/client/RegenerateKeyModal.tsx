'use client';

interface RegenerateKeyModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export default function RegenerateKeyModal({ onConfirm, onCancel }: RegenerateKeyModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md">
        
        <div className="px-6 py-5 border-b border-[#F0F0F0]">
          <h3 className="text-lg font-semibold text-[#111111]">Regenerate API Key</h3>
        </div>

        <div className="px-6 py-6">
          <div className="flex items-start gap-3 p-4 bg-orange-50 border border-orange-200 rounded-xl mb-4">
            <i className="ri-error-warning-line text-orange-600 w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5"></i>
            <div>
              <p className="text-sm font-medium text-orange-900">This action cannot be undone</p>
              <p className="text-xs text-orange-700 mt-1">Regenerating your API key will immediately invalidate the current key. Any integrations using the old key will stop working until updated.</p>
            </div>
          </div>

          <p className="text-sm text-[#6B7280]">Are you sure you want to generate a new API key?</p>
        </div>

        <div className="px-6 py-4 border-t border-[#F0F0F0] flex items-center justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2.5 bg-[#F8F8F8] text-[#111111] text-sm font-medium rounded-xl hover:bg-[#F0F0F0] transition-colors cursor-pointer whitespace-nowrap"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2.5 bg-orange-600 text-white text-sm font-medium rounded-xl hover:bg-orange-700 transition-colors cursor-pointer whitespace-nowrap"
          >
            Regenerate Key
          </button>
        </div>

      </div>
    </div>
  );
}