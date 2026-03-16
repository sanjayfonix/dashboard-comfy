'use client';

import { useState } from 'react';

interface AccountStatusSectionProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  isLoading: boolean;
}

export default function AccountStatusSection({ 
  formData, 
  updateFormData, 
  isLoading 
}: AccountStatusSectionProps) {
  const [showStatusMenu, setShowStatusMenu] = useState(false);

  const statusOptions = [
    { 
      value: 'Active', 
      description: 'Client has full access to all platform features and can process try-on jobs.' 
    },
    { 
      value: 'Pending Setup', 
      description: 'Account created but integration not yet configured. Limited access until setup is complete.' 
    },
    { 
      value: 'Suspended', 
      description: 'Account temporarily disabled. Client cannot access platform or process jobs.' 
    }
  ];

  const currentStatus = statusOptions.find(s => s.value === formData.accountStatus) || statusOptions[0];

  return (
    <div className="bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5] p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-[#F5F5F5] rounded-xl flex items-center justify-center">
          <i className="ri-shield-check-line text-[#111111] text-lg w-5 h-5 flex items-center justify-center"></i>
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#111111]">Account Status</h2>
          <p className="text-sm text-[#6B7280]">Control client access and platform permissions</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-[#111111] mb-2">
            Current Status <span className="text-[#6B7280]">*</span>
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => !isLoading && setShowStatusMenu(!showStatusMenu)}
              disabled={isLoading}
              className="w-full px-4 py-3 bg-[#F8F8F8] border border-[#E5E5E5] rounded-xl text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-between cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${
                  formData.accountStatus === 'Active' 
                    ? 'bg-[#111111]' 
                    : formData.accountStatus === 'Suspended'
                    ? 'bg-[#9CA3AF]'
                    : 'bg-[#6B7280]'
                }`}></span>
                {formData.accountStatus}
              </span>
              <i className="ri-arrow-down-s-line w-4 h-4 flex items-center justify-center"></i>
            </button>
            {showStatusMenu && (
              <div className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-[0px_6px_20px_rgba(0,0,0,0.08)] border border-[#E5E5E5] z-50 py-2">
                {statusOptions.map((status) => (
                  <button
                    key={status.value}
                    type="button"
                    onClick={() => {
                      updateFormData('accountStatus', status.value);
                      setShowStatusMenu(false);
                    }}
                    className="w-full px-4 py-2.5 text-left text-sm text-[#111111] hover:bg-[#F8F8F8] cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`w-2 h-2 rounded-full ${
                        status.value === 'Active' 
                          ? 'bg-[#111111]' 
                          : status.value === 'Suspended'
                          ? 'bg-[#9CA3AF]'
                          : 'bg-[#6B7280]'
                      }`}></span>
                      <span className="font-semibold">{status.value}</span>
                    </div>
                    <p className="text-xs text-[#6B7280] ml-4">{status.description}</p>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="bg-[#F8F8F8] rounded-xl p-4 border border-[#E5E5E5]">
          <p className="text-sm text-[#6B7280] leading-relaxed">
            <span className="font-semibold text-[#111111]">Current Status:</span> {currentStatus.description}
          </p>
        </div>
      </div>
    </div>
  );
}