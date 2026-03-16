'use client';

import { useRouter } from 'next/navigation';

interface GarmentConfigurationSectionProps {
  garment: any;
}

export default function GarmentConfigurationSection({ garment }: GarmentConfigurationSectionProps) {
  const router = useRouter();

  return (
    <div className="bg-white rounded-2xl shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-[#F0F0F0] p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#F8F8F8] rounded-xl flex items-center justify-center">
            <i className="ri-settings-3-line text-[#6B7280] text-xl w-5 h-5 flex items-center justify-center"></i>
          </div>
          <div>
            <h3 className="text-base font-bold text-[#111111]">Garment Configuration</h3>
            <p className="text-sm text-[#6B7280]">Settings and metadata</p>
          </div>
        </div>
        <button
          onClick={() => router.push(`/client/garments/${garment.id}/edit`)}
          className="px-4 py-2 bg-[#F8F8F8] text-[#111111] rounded-full text-sm font-medium hover:bg-[#E5E5E5] transition-all cursor-pointer whitespace-nowrap flex items-center gap-2"
        >
          <i className="ri-edit-line w-4 h-4 flex items-center justify-center"></i>
          <span>Edit Configuration</span>
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex items-start justify-between py-3 border-b border-[#F0F0F0]">
          <div>
            <p className="text-sm font-medium text-[#111111] mb-1">Category</p>
            <p className="text-sm text-[#6B7280]">Garment type classification</p>
          </div>
          <span className="px-3 py-1.5 bg-[#F8F8F8] text-[#111111] rounded-full text-sm font-medium">
            {garment.category}
          </span>
        </div>

        <div className="flex items-start justify-between py-3 border-b border-[#F0F0F0]">
          <div>
            <p className="text-sm font-medium text-[#111111] mb-1">Gender Type</p>
            <p className="text-sm text-[#6B7280]">Target audience</p>
          </div>
          <span className="px-3 py-1.5 bg-[#F8F8F8] text-[#111111] rounded-full text-sm font-medium">
            {garment.gender}
          </span>
        </div>

        <div className="flex items-start justify-between py-3 border-b border-[#F0F0F0]">
          <div>
            <p className="text-sm font-medium text-[#111111] mb-1">Allow Try-On</p>
            <p className="text-sm text-[#6B7280]">Enable virtual try-on feature</p>
          </div>
          <div className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 ${
            garment.allowTryOn ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-100 text-gray-600'
          }`}>
            <i className={`${garment.allowTryOn ? 'ri-check-line' : 'ri-close-line'} w-4 h-4 flex items-center justify-center`}></i>
            <span>{garment.allowTryOn ? 'Enabled' : 'Disabled'}</span>
          </div>
        </div>

        <div className="py-3">
          <p className="text-sm font-medium text-[#111111] mb-2">Garment Description</p>
          <p className="text-sm text-[#6B7280] leading-relaxed">
            {garment.description}
          </p>
        </div>
      </div>
    </div>
  );
}