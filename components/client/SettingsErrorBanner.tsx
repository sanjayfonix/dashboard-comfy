'use client';

interface SettingsErrorBannerProps {
  onDismiss: () => void;
}

export default function SettingsErrorBanner({ onDismiss }: SettingsErrorBannerProps) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-start justify-between">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
          <i className="ri-error-warning-line text-red-600 w-5 h-5 flex items-center justify-center"></i>
        </div>
        <div>
          <p className="text-sm font-medium text-red-900">Error</p>
          <p className="text-sm text-red-700 mt-1">Unable to update settings. Please try again.</p>
        </div>
      </div>
      <button
        onClick={onDismiss}
        className="text-red-600 hover:text-red-700 cursor-pointer"
      >
        <i className="ri-close-line w-5 h-5 flex items-center justify-center"></i>
      </button>
    </div>
  );
}