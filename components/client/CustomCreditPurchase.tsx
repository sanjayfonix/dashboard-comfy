'use client';

import { useState } from 'react';

interface CustomCreditPurchaseProps {
  onPurchase: (credits: number, price: number) => void;
}

export default function CustomCreditPurchase({ onPurchase }: CustomCreditPurchaseProps) {
  const [creditAmount, setCreditAmount] = useState<string>('');
  const pricePerCredit = 0.025;

  const credits = parseInt(creditAmount) || 0;
  const estimatedCost = credits * pricePerCredit;

  const handlePurchase = () => {
    if (credits >= 100) {
      onPurchase(credits, estimatedCost);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-[#F0F0F0]">
      <h2 className="text-base font-semibold text-[#111111] mb-1">Custom Credit Purchase</h2>
      <p className="text-xs text-[#9CA3AF] mb-6">Purchase a custom amount of credits</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#111111] mb-2">
            Credit Amount
          </label>
          <input
            type="number"
            value={creditAmount}
            onChange={(e) => setCreditAmount(e.target.value)}
            placeholder="Enter credit amount (minimum 100)"
            min="100"
            step="100"
            className="w-full px-4 py-2.5 text-sm border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#111111] focus:border-transparent"
          />
          <p className="text-xs text-[#9CA3AF] mt-1">Minimum purchase: 100 credits</p>
        </div>

        <div className="bg-[#F8F8F8] rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[#6B7280]">Credits to Purchase</span>
            <span className="text-sm font-semibold text-[#111111]">{credits.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[#6B7280]">Price per Credit</span>
            <span className="text-sm font-semibold text-[#111111]">${pricePerCredit}</span>
          </div>
          <div className="pt-2 border-t border-[#E5E7EB]">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-[#111111]">Estimated Cost</span>
              <span className="text-lg font-bold text-[#111111]">${estimatedCost.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <button
          onClick={handlePurchase}
          disabled={credits < 100}
          className="w-full py-2.5 bg-[#111111] text-white rounded-full text-sm font-semibold hover:bg-[#333333] transition-colors cursor-pointer whitespace-nowrap disabled:bg-[#E5E7EB] disabled:text-[#9CA3AF] disabled:cursor-not-allowed"
        >
          Purchase Credits
        </button>
      </div>
    </div>
  );
}