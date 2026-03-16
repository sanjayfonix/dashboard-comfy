'use client';

import { useRouter } from 'next/navigation';

interface UploadSuccessBannerProps {
  garmentName: string;
}

export default function UploadSuccessBanner({ garmentName }: UploadSuccessBannerProps) {
  const router = useRouter();

  return (
    <div className="min-h-[600px] flex items-center justify-center">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <i className="ri-check-line text-emerald-600 text-4xl w-12 h-12 flex items-center justify-center"></i>
        </div>
        
        <h2 className="text-2xl font-bold text-[#111111] mb-2">Garment Successfully Uploaded!</h2>
        <p className="text-base text-[#6B7280] mb-8">
          <span className="font-medium text-[#111111]">{garmentName}</span> has been uploaded and is now being processed for AI virtual try-on.
        </p>

        <div className="bg-white rounded-2xl shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-[#F0F0F0] p-6 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center">
                <i className="ri-check-line text-emerald-600 w-5 h-5 flex items-center justify-center"></i>
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-[#111111]">Image Uploaded</p>
                <p className="text-xs text-[#9CA3AF]">Complete</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center">
                <i className="ri-loader-4-line animate-spin text-amber-600 w-5 h-5 flex items-center justify-center"></i>
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-[#111111]">Mask Generation</p>
                <p className="text-xs text-[#9CA3AF]">Processing...</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <i className="ri-cpu-line text-gray-400 w-5 h-5 flex items-center justify-center"></i>
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-[#9CA3AF]">AI Model Preparation</p>
                <p className="text-xs text-[#9CA3AF]">Pending</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 justify-center">
          <button
            onClick={() => router.push('/client/garments')}
            className="px-6 py-3 bg-white border border-[#E5E5E5] text-[#111111] rounded-full text-sm font-medium hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap"
          >
            Back to Catalog
          </button>
          <button
            onClick={() => router.push('/client/garments/G-1011')}
            className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-[#111111] transition-all cursor-pointer whitespace-nowrap flex items-center gap-2"
          >
            <span>View Garment</span>
            <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"></i>
          </button>
        </div>
      </div>
    </div>
  );
}