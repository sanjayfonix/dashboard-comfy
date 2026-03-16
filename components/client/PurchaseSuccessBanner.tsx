'use client';

import Link from 'next/link';

interface PurchaseSuccessBannerProps {
  credits: number;
  onDismiss: () => void;
}

export default function PurchaseSuccessBanner({ credits, onDismiss }: PurchaseSuccessBannerProps) {
  return (
    <div className="bg-[#F0FFF4] border-2 border-[#16A34A] rounded-2xl p-6 mb-8">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-[#16A34A] rounded-xl flex items-center justify-center flex-shrink-0">
          <i className="ri-checkbox-circle-line text-2xl text-white w-6 h-6 flex items-center justify-center"></i>
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold text-[#111111] mb-1">
            Credits Successfully Added!
          </h3>
          <p className="text-sm text-[#6B7280] mb-4">
            {credits.toLocaleString()} credits have been added to your account. You can now continue offering AI virtual try-on to your customers.
          </p>
          <div className="flex items-center gap-3">
            <Link href="/client/credits">
              <button className="px-4 py-2 bg-[#111111] text-white rounded-full text-sm font-semibold hover:bg-[#333333] transition-colors cursor-pointer whitespace-nowrap">
                Return to Credits Dashboard
              </button>
            </Link>
            <Link href="/client/credits">
              <button className="px-4 py-2 bg-white text-[#111111] rounded-full text-sm font-semibold hover:bg-[#F8F8F8] transition-colors cursor-pointer whitespace-nowrap border border-[#E5E7EB]">
                View Credit Activity
              </button>
            </Link>
          </div>
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