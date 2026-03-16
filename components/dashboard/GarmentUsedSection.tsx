'use client';

export default function GarmentUsedSection({ job }: { job: any }) {
  return (
    <div className="bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5] p-6">
      <h2 className="text-lg font-semibold text-[#111111] mb-5">Garment Used</h2>
      
      <div className="space-y-4">
        <div>
          <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wider mb-2">Garment Name</p>
          <p className="text-sm font-semibold text-[#111111]">{job.garment}</p>
        </div>
        
        <div>
          <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wider mb-2">Garment Status</p>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
            {job.garmentStatus}
          </span>
        </div>
        
        <div>
          <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wider mb-2">Upload Date</p>
          <p className="text-sm text-[#6B7280]">{job.garmentUploadDate}</p>
        </div>
      </div>
      
      <button
        className="mt-6 w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-[#F8F8F8] hover:bg-[#F0F0F0] rounded-full text-sm font-medium text-[#111111] transition-all cursor-pointer whitespace-nowrap"
      >
        <i className="ri-shirt-line text-base w-4 h-4 flex items-center justify-center"></i>
        <span>View Garment</span>
      </button>
    </div>
  );
}