'use client';

export default function JobInformationCard({ job }: { job: any }) {
  return (
    <div className="bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5] p-6">
      <h2 className="text-lg font-semibold text-[#111111] mb-5">Job Information</h2>
      
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wider mb-2">Job ID</p>
          <p className="text-sm font-semibold text-[#111111]">{job.id}</p>
        </div>
        
        <div>
          <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wider mb-2">Client Name</p>
          <p className="text-sm font-semibold text-[#111111]">{job.client}</p>
        </div>
        
        <div>
          <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wider mb-2">Garment Name</p>
          <p className="text-sm text-[#6B7280]">{job.garment}</p>
        </div>
        
        <div>
          <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wider mb-2">Credits Consumed</p>
          <p className="text-sm font-semibold text-[#111111]">{job.credits}</p>
        </div>
        
        <div>
          <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wider mb-2">Job Status</p>
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
            job.status === 'Completed' 
              ? 'bg-blue-50 text-blue-600' 
              : job.status === 'Processing'
              ? 'bg-purple-50 text-purple-600'
              : 'bg-red-50 text-red-600'
          }`}>
            {job.status}
          </span>
        </div>
        
        <div>
          <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wider mb-2">Processing Duration</p>
          <p className="text-sm text-[#6B7280]">{job.processingTime}</p>
        </div>
        
        <div>
          <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wider mb-2">Submitted Time</p>
          <p className="text-sm text-[#6B7280]">{job.submitted}</p>
        </div>
        
        <div>
          <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wider mb-2">Completed Time</p>
          <p className="text-sm text-[#6B7280]">{job.completed}</p>
        </div>
      </div>
    </div>
  );
}