'use client';

import { useState } from 'react';

interface ClientInformationFormProps {
  formData: any;
  errors: Record<string, string>;
  updateFormData: (field: string, value: any) => void;
  isLoading: boolean;
}

export default function ClientInformationForm({ 
  formData, 
  errors, 
  updateFormData, 
  isLoading 
}: ClientInformationFormProps) {
  return (
    <div className="bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5] p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-[#F5F5F5] rounded-xl flex items-center justify-center">
          <i className="ri-building-line text-[#111111] text-lg w-5 h-5 flex items-center justify-center"></i>
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#111111]">Client Information</h2>
          <p className="text-sm text-[#6B7280]">Basic details about the brand client</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-[#111111] mb-2">
            Client Name <span className="text-[#6B7280]">*</span>
          </label>
          <input
            type="text"
            value={formData.clientName}
            onChange={(e) => updateFormData('clientName', e.target.value)}
            disabled={isLoading}
            placeholder="Enter client name"
            className="w-full px-4 py-3 bg-[#F8F8F8] border border-[#E5E5E5] rounded-xl text-sm text-[#111111] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          />
          {errors.clientName && (
            <p className="text-xs text-[#6B7280] mt-1.5 flex items-center gap-1">
              <i className="ri-error-warning-line w-3 h-3 flex items-center justify-center"></i>
              {errors.clientName}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#111111] mb-2">
            Company Name <span className="text-[#6B7280]">*</span>
          </label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) => updateFormData('companyName', e.target.value)}
            disabled={isLoading}
            placeholder="Enter company name"
            className="w-full px-4 py-3 bg-[#F8F8F8] border border-[#E5E5E5] rounded-xl text-sm text-[#111111] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          />
          {errors.companyName && (
            <p className="text-xs text-[#6B7280] mt-1.5 flex items-center gap-1">
              <i className="ri-error-warning-line w-3 h-3 flex items-center justify-center"></i>
              {errors.companyName}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#111111] mb-2">
            Website Domain <span className="text-[#6B7280]">*</span>
          </label>
          <input
            type="text"
            value={formData.websiteDomain}
            onChange={(e) => updateFormData('websiteDomain', e.target.value)}
            disabled={isLoading}
            placeholder="brandname.com"
            className="w-full px-4 py-3 bg-[#F8F8F8] border border-[#E5E5E5] rounded-xl text-sm text-[#111111] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          />
          {errors.websiteDomain && (
            <p className="text-xs text-[#6B7280] mt-1.5 flex items-center gap-1">
              <i className="ri-error-warning-line w-3 h-3 flex items-center justify-center"></i>
              {errors.websiteDomain}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#111111] mb-2">
            Contact Email <span className="text-[#6B7280]">*</span>
          </label>
          <input
            type="email"
            value={formData.contactEmail}
            onChange={(e) => updateFormData('contactEmail', e.target.value)}
            disabled={isLoading}
            placeholder="contact@brandname.com"
            className="w-full px-4 py-3 bg-[#F8F8F8] border border-[#E5E5E5] rounded-xl text-sm text-[#111111] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          />
          {errors.contactEmail && (
            <p className="text-xs text-[#6B7280] mt-1.5 flex items-center gap-1">
              <i className="ri-error-warning-line w-3 h-3 flex items-center justify-center"></i>
              {errors.contactEmail}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#111111] mb-2">
            Contact Phone
          </label>
          <input
            type="tel"
            value={formData.contactPhone}
            onChange={(e) => updateFormData('contactPhone', e.target.value)}
            disabled={isLoading}
            placeholder="+1 (555) 000-0000"
            className="w-full px-4 py-3 bg-[#F8F8F8] border border-[#E5E5E5] rounded-xl text-sm text-[#111111] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>
      </div>
    </div>
  );
}