'use client';

interface EditSuccessBannerProps {
  garment: any;
  onDismiss: () => void;
  onViewGarment: () => void;
}

export default function EditSuccessBanner({ garment, onDismiss, onViewGarment }: EditSuccessBannerProps) {
  return (
    <div className="mb-6 bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
          <i className="ri-check-line text-emerald-600 text-xl w-5 h-5 flex items-center justify-center"></i>
        </div>
        <div className="flex-1">
          <h3 className="text-base font-bold text-emerald-900 mb-1">
            Garment Successfully Updated
          </h3>
          <p className="text-sm text-emerald-700 mb-4">
            {garment.name} has been updated with the new configuration.
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={onViewGarment}
              className="px-4 py-2 bg-emerald-600 text-white rounded-full text-sm font-medium hover:bg-emerald-700 transition-all cursor-pointer whitespace-nowrap"
            >
              View Garment
            </button>
            <button
              onClick={onDismiss}
              className="px-4 py-2 bg-white border border-emerald-200 text-emerald-700 rounded-full text-sm font-medium hover:bg-emerald-50 transition-all cursor-pointer whitespace-nowrap"
            >
              Dismiss
            </button>
          </div>
        </div>
        <button
          onClick={onDismiss}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-emerald-100 transition-all cursor-pointer flex-shrink-0"
        >
          <i className="ri-close-line text-emerald-600 w-5 h-5 flex items-center justify-center"></i>
        </button>
      </div>
    </div>
  );
}