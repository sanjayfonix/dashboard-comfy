'use client';

import { useState } from 'react';

interface OrganizationInfoCardProps {
  onSaveSuccess: (message: string) => void;
  onSaveError: () => void;
}

export default function OrganizationInfoCard({ onSaveSuccess, onSaveError }: OrganizationInfoCardProps) {
  const [companyName, setCompanyName] = useState('Zara Fashion');
  const [websiteDomain, setWebsiteDomain] = useState('www.zarafashion.com');
  const [businessEmail, setBusinessEmail] = useState('admin@zarafashion.com');
  const [contactPhone, setContactPhone] = useState('+1 (555) 123-4567');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      const success = Math.random() > 0.1;
      if (success) {
        onSaveSuccess('Organization information updated successfully.');
      } else {
        onSaveError();
      }
    }, 1000);
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-[#E5E5E5]">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-[#111111]">Organization Information</h2>
        <p className="text-sm text-[#6B7280] mt-1">Update your company details and contact information</p>
      </div>

      <div className="space-y-4">
        
        <div>
          <label className="block text-sm font-medium text-[#111111] mb-2">Company Name</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full px-4 py-3 bg-[#F8F8F8] rounded-xl text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-black/10"
            placeholder="Enter company name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#111111] mb-2">Website Domain</label>
          <input
            type="text"
            value={websiteDomain}
            onChange={(e) => setWebsiteDomain(e.target.value)}
            className="w-full px-4 py-3 bg-[#F8F8F8] rounded-xl text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-black/10"
            placeholder="www.example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#111111] mb-2">Business Email</label>
          <input
            type="email"
            value={businessEmail}
            onChange={(e) => setBusinessEmail(e.target.value)}
            className="w-full px-4 py-3 bg-[#F8F8F8] rounded-xl text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-black/10"
            placeholder="admin@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#111111] mb-2">Contact Phone</label>
          <input
            type="tel"
            value={contactPhone}
            onChange={(e) => setContactPhone(e.target.value)}
            className="w-full px-4 py-3 bg-[#F8F8F8] rounded-xl text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-black/10"
            placeholder="+1 (555) 000-0000"
          />
        </div>

      </div>

      <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[#F0F0F0]">
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="px-6 py-2.5 bg-black text-white text-sm font-medium rounded-xl hover:bg-black/90 transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isSaving ? (
            <>
              <i className="ri-loader-4-line w-4 h-4 flex items-center justify-center animate-spin"></i>
              <span>Saving...</span>
            </>
          ) : (
            <>
              <i className="ri-save-line w-4 h-4 flex items-center justify-center"></i>
              <span>Save Changes</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
}