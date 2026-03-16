'use client';

interface SettingsSuccessBannerProps {
  message: string;
  onDismiss: () => void;
}

export default function SettingsSuccessBanner({ message, onDismiss }: SettingsSuccessBannerProps) {
  return (
    <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex items-start justify-between">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
          <i className="ri-checkbox-circle-line text-green-600 w-5 h-5 flex items-center justify-center"></i>
        </div>
        <div>
          <p className="text-sm font-medium text-green-900">Success</p>
          <p className="text-sm text-green-700 mt-1">{message}</p>
        </div>
      </div>
      <button
        onClick={onDismiss}
        className="text-green-600 hover:text-green-700 cursor-pointer"
      >
        <i className="ri-close-line w-5 h-5 flex items-center justify-center"></i>
      </button>
    </div>
  );
}