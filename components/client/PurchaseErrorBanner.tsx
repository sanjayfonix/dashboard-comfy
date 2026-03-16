'use client';

interface PurchaseErrorBannerProps {
  onRetry: () => void;
  onDismiss: () => void;
}

export default function PurchaseErrorBanner({ onRetry, onDismiss }: PurchaseErrorBannerProps) {
  return (
    <div className="bg-[#FEF2F2] border-2 border-[#DC2626] rounded-2xl p-6 mb-8">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-[#DC2626] rounded-xl flex items-center justify-center flex-shrink-0">
          <i className="ri-error-warning-line text-2xl text-white w-6 h-6 flex items-center justify-center"></i>
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold text-[#111111] mb-1">
            Payment Failed
          </h3>
          <p className="text-sm text-[#6B7280] mb-4">
            We were unable to process your payment. Please check your payment details and try again.
          </p>
          <button
            onClick={onRetry}
            className="px-4 py-2 bg-[#111111] text-white rounded-full text-sm font-semibold hover:bg-[#333333] transition-colors cursor-pointer whitespace-nowrap"
          >
            Retry Payment
          </button>
        </div>
        <button
          onClick={onDismiss}
          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/50 transition-colors cursor-pointer flex-shrink-0"
        >
          <i className="ri-close-line text-xl text-[#6B7280] w-5 h-5 flex items-center justify-center"></i>
        </button>
      </div>
    </div>
  );
}