interface UploadErrorBannerProps {
  onRetry: () => void;
  onDismiss: () => void;
}

export default function UploadErrorBanner({ onRetry, onDismiss }: UploadErrorBannerProps) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mb-6">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
          <i className="ri-error-warning-line text-red-600 w-5 h-5 flex items-center justify-center"></i>
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold text-red-900 mb-1">Garment Upload Failed</h3>
          <p className="text-sm text-red-800 mb-4">There was an error processing your garment. Please try again or contact support if the issue persists.</p>
          <div className="flex items-center gap-3">
            <button
              onClick={onRetry}
              className="px-4 py-2 bg-red-600 text-white rounded-full text-sm font-medium hover:bg-red-700 transition-all cursor-pointer whitespace-nowrap flex items-center gap-2"
            >
              <i className="ri-refresh-line w-4 h-4 flex items-center justify-center"></i>
              <span>Retry Upload</span>
            </button>
            <button
              onClick={onDismiss}
              className="px-4 py-2 bg-white border border-red-300 text-red-700 rounded-full text-sm font-medium hover:bg-red-50 transition-all cursor-pointer whitespace-nowrap"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}