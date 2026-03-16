'use client';

import { useState } from 'react';

interface CreditManagementSectionProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  isLoading: boolean;
}

export default function CreditManagementSection({ 
  formData, 
  updateFormData, 
  isLoading 
}: CreditManagementSectionProps) {
  const [showRemoveWarning, setShowRemoveWarning] = useState(false);

  const handleAddCreditsChange = (value: string) => {
    const numValue = parseInt(value) || 0;
    updateFormData('addCredits', numValue);
    if (numValue > 0) {
      updateFormData('removeCredits', 0);
    }
  };

  const handleRemoveCreditsChange = (value: string) => {
    const numValue = parseInt(value) || 0;
    updateFormData('removeCredits', numValue);
    if (numValue > 0) {
      updateFormData('addCredits', 0);
      setShowRemoveWarning(true);
    } else {
      setShowRemoveWarning(false);
    }
  };

  const newBalance = formData.currentBalance + formData.addCredits - formData.removeCredits;

  return (
    <div className="bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5] p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-[#F5F5F5] rounded-xl flex items-center justify-center">
          <i className="ri-coin-line text-[#111111] text-lg w-5 h-5 flex items-center justify-center"></i>
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#111111]">Credit Settings</h2>
          <p className="text-sm text-[#6B7280]">Manage client credit balance and allocations</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-[#F8F8F8] rounded-xl p-6 border border-[#E5E5E5]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-[#6B7280]">Current Credit Balance</span>
            <span className="text-2xl font-bold text-[#111111]">
              {formData.currentBalance.toLocaleString()}
            </span>
          </div>
          <div className="text-xs text-[#9CA3AF]">credits available</div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-[#111111] mb-2">
              Add Credits
            </label>
            <div className="relative">
              <input
                type="number"
                value={formData.addCredits || ''}
                onChange={(e) => handleAddCreditsChange(e.target.value)}
                disabled={isLoading}
                placeholder="0"
                min="0"
                step="1000"
                className="w-full px-4 py-3 bg-[#F8F8F8] border border-[#E5E5E5] rounded-xl text-sm text-[#111111] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#6B7280] pointer-events-none">
                credits
              </div>
            </div>
            <p className="text-xs text-[#9CA3AF] mt-1.5">Increase client credit balance</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#111111] mb-2">
              Remove Credits
            </label>
            <div className="relative">
              <input
                type="number"
                value={formData.removeCredits || ''}
                onChange={(e) => handleRemoveCreditsChange(e.target.value)}
                disabled={isLoading}
                placeholder="0"
                min="0"
                max={formData.currentBalance}
                step="1000"
                className="w-full px-4 py-3 bg-[#F8F8F8] border border-[#E5E5E5] rounded-xl text-sm text-[#111111] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#6B7280] pointer-events-none">
                credits
              </div>
            </div>
            <p className="text-xs text-[#9CA3AF] mt-1.5">Decrease client credit balance</p>
          </div>
        </div>

        {showRemoveWarning && formData.removeCredits > 0 && (
          <div className="bg-[#FEF3F2] border border-[#FEE4E2] rounded-xl p-4 flex items-start gap-3">
            <i className="ri-error-warning-line text-[#F97316] text-lg w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5"></i>
            <div>
              <p className="text-sm font-semibold text-[#111111] mb-1">Warning: Removing Credits</p>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                You are about to remove {formData.removeCredits.toLocaleString()} credits from this client's account. This action will reduce their available balance and may impact their ability to process try-on jobs.
              </p>
            </div>
          </div>
        )}

        {(formData.addCredits > 0 || formData.removeCredits > 0) && (
          <div className="bg-[#F8F8F8] rounded-xl p-4 border border-[#E5E5E5]">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-[#6B7280]">New Balance After Adjustment</span>
              <span className={`text-xl font-bold ${newBalance < 0 ? 'text-[#F97316]' : 'text-[#111111]'}`}>
                {newBalance.toLocaleString()}
              </span>
            </div>
            {newBalance < 0 && (
              <p className="text-xs text-[#F97316] mt-2">Cannot remove more credits than available balance</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}