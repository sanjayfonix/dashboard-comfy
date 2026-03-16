'use client';

import Link from 'next/link';

interface SuccessBannerProps {
  clientId: string;
}

export default function SuccessBanner({ clientId }: SuccessBannerProps) {
  return (
    <div className="bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border-2 border-black p-6 mb-6 animate-[slideDown_0.3s_ease-out]">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
          <i className="ri-checkbox-circle-line text-white text-2xl w-6 h-6 flex items-center justify-center"></i>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-[#111111] mb-1">Client account successfully created</h3>
          <p className="text-sm text-[#6B7280] mb-4">
            The new client account has been set up and is ready for integration. Client ID: <span className="font-mono font-semibold text-[#111111]">{clientId}</span>
          </p>
          <div className="flex items-center gap-3">
            <Link 
              href={`/dashboard/clients/${clientId}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-black/90 transition-all cursor-pointer whitespace-nowrap"
            >
              <i className="ri-eye-line w-4 h-4 flex items-center justify-center"></i>
              View Client Details
            </Link>
            <Link 
              href="/dashboard/clients"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#E5E5E5] text-[#111111] rounded-full text-sm font-medium hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap"
            >
              Back to All Clients
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}