'use client';

import Link from 'next/link';

export default function ClientInfoSection({ job }: { job: any }) {
  return (
    <div className="bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5] p-6">
      <h2 className="text-lg font-semibold text-[#111111] mb-5">Client Information</h2>
      
      <div className="space-y-4">
        <div>
          <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wider mb-2">Client Name</p>
          <p className="text-sm font-semibold text-[#111111]">{job.client}</p>
        </div>
        
        <div>
          <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wider mb-2">Website Domain</p>
          <p className="text-sm text-[#6B7280]">{job.clientDomain}</p>
        </div>
        
        <div>
          <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wider mb-2">Client ID</p>
          <p className="text-sm text-[#6B7280]">{job.clientId}</p>
        </div>
      </div>
      
      <Link
        href={`/dashboard/clients/${job.clientId}`}
        className="mt-6 w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-[#F8F8F8] hover:bg-[#F0F0F0] rounded-full text-sm font-medium text-[#111111] transition-all cursor-pointer whitespace-nowrap"
      >
        <i className="ri-building-line text-base w-4 h-4 flex items-center justify-center"></i>
        <span>View Client</span>
      </Link>
    </div>
  );
}