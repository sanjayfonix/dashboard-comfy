'use client';

import Link from 'next/link';

export default function JobQueuePanel() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-[#EBEBEB] shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
      <h3 className="text-lg font-bold text-[#111111] mb-6">Job Queue Status</h3>
      
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-[#F0F0F0]">
          <div>
            <div className="text-sm text-[#6B7280] mb-1">Jobs Waiting in Queue</div>
            <div className="text-2xl font-bold text-[#111111]">47</div>
          </div>
          <div className={`w-12 h-12 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center`}>
            <i className="ri-time-line text-xl text-[#F59E0B] w-6 h-6 flex items-center justify-center"></i>
          </div>
        </div>

        <div className="flex items-center justify-between pb-4 border-b border-[#F0F0F0]">
          <div>
            <div className="text-sm text-[#6B7280] mb-1">Jobs Currently Processing</div>
            <div className="text-2xl font-bold text-[#111111]">18</div>
          </div>
          <div className={`w-12 h-12 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center`}>
            <i className="ri-loader-4-line text-xl text-[#8B5CF6] w-6 h-6 flex items-center justify-center"></i>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-[#6B7280] mb-1">Estimated Wait Time</div>
            <div className="text-2xl font-bold text-[#111111]">4.2 min</div>
          </div>
          <div className={`w-12 h-12 rounded-xl bg-[#10B981]/10 flex items-center justify-center`}>
            <i className="ri-timer-line text-xl text-[#10B981] w-6 h-6 flex items-center justify-center"></i>
          </div>
        </div>
      </div>

      <Link href="/dashboard/ai-jobs">
        <button className="w-full mt-6 px-6 py-3 text-sm font-medium text-white bg-[#111111] rounded-full hover:bg-[#000000] transition-all cursor-pointer whitespace-nowrap">
          View AI Jobs
        </button>
      </Link>
    </div>
  );
}