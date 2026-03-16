'use client';

import Link from 'next/link';

interface LowCreditWarningProps {
  currentBalance: number;
}

export default function LowCreditWarning({ currentBalance }: LowCreditWarningProps) {
  return (
    <div className="bg-[#FFF5F5] border border-[#FEE2E2] rounded-2xl p-5 mb-8 flex items-start justify-between">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-[#DC2626] rounded-xl flex items-center justify-center flex-shrink-0">
          <i className="ri-alert-line text-white text-lg w-5 h-5 flex items-center justify-center"></i>
        </div>
        <div>
          <h3 className="text-base font-semibold text-[#111111] mb-1">Your credit balance is running low</h3>
          <p className="text-sm text-[#6B7280]">
            You have <span className="font-semibold text-[#DC2626]">{currentBalance.toLocaleString()} credits</span> remaining. Purchase more credits to ensure uninterrupted service.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Link href="/client/credits/purchase">
          <button className="px-4 py-2 bg-black text-white rounded-full text-sm font-semibold hover:bg-[#333333] transition-colors cursor-pointer whitespace-nowrap">
            Purchase Credits
          </button>
        </Link>
      </div>
    </div>
  );
}