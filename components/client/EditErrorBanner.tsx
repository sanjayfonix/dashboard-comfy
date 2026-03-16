'use client';

interface EditErrorBannerProps {
  onDismiss: () => void;
  onRetry: () => void;
}

export default function EditErrorBanner({ onDismiss, onRetry }: EditErrorBannerProps) {
  return (
    <div className="mb-6 bg-red-50 border border-red-200 rounded-2xl p-6">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
          <i className="ri-error-warning-line text-red-600 text-xl w-5 h-5 flex items-center justify-center"></i>
        </div>
        <div className="flex-1">
          <h3 className="text-base font-bold text-red-900 mb-1">
            Unable to Update Garment
          </h3>
          <p className="text-sm text-red-700 mb-4">
            There was an error updating the garment. Please try again.
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={onRetry}
              className="px-4 py-2 bg-red-600 text-white rounded-full text-sm font-medium hover:bg-red-700 transition-all cursor-pointer whitespace-nowrap"
            >
              Retry
            </button>
            <button
              onClick={onDismiss}
              className="px-4 py-2 bg-white border border-red-200 text-red-700 rounded-full text-sm font-medium hover:bg-red-50 transition-all cursor-pointer whitespace-nowrap"
            >
              Dismiss
            </button>
          </div>
        </div>
        <button
          onClick={onDismiss}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-100 transition-all cursor-pointer flex-shrink-0"
        >
          <i className="ri-close-line text-red-600 w-5 h-5 flex items-center justify-center"></i>
        </button>
      </div>
    </div>
  );
}