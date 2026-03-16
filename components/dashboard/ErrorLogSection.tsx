'use client';

export default function ErrorLogSection({ job }: { job: any }) {
  if (!job.errorReason) return null;

  return (
    <div className="bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5] p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-[#111111]">Error Log</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#F8F8F8] hover:bg-[#F0F0F0] rounded-full text-sm font-medium text-[#111111] transition-all cursor-pointer whitespace-nowrap">
          <i className="ri-flag-line text-base w-4 h-4 flex items-center justify-center"></i>
          <span>Report Issue</span>
        </button>
      </div>
      
      <div className="space-y-4">
        <div>
          <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wider mb-2">Failure Reason</p>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="text-sm text-red-600">{job.errorReason}</p>
          </div>
        </div>
        
        <div>
          <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wider mb-2">System Log Output</p>
          <div className="bg-[#F8F8F8] border border-[#E5E5E5] rounded-xl p-4 font-mono text-xs text-[#111111] whitespace-pre-wrap max-h-48 overflow-y-auto">
            {job.errorLog}
          </div>
        </div>
        
        <div>
          <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wider mb-2">Timestamp</p>
          <p className="text-sm text-[#6B7280]">{job.errorTimestamp}</p>
        </div>
      </div>
    </div>
  );
}