'use client';

export default function ClientOverviewCard({ client }: { client: any }) {
  return (
    <div className="bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5] p-8">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-14 h-14 bg-[#111111] rounded-2xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
          {client.name.charAt(0)}
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-[#111111] mb-1">{client.name}</h2>
          <p className="text-sm text-[#6B7280]">{client.company}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-2">Website Domain</p>
          <div className="flex items-center gap-2">
            <i className="ri-global-line text-[#6B7280] w-4 h-4 flex items-center justify-center"></i>
            <p className="text-sm font-medium text-[#111111]">{client.domain}</p>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-2">Contact Email</p>
          <div className="flex items-center gap-2">
            <i className="ri-mail-line text-[#6B7280] w-4 h-4 flex items-center justify-center"></i>
            <p className="text-sm font-medium text-[#111111]">{client.email}</p>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-2">Date Created</p>
          <div className="flex items-center gap-2">
            <i className="ri-calendar-line text-[#6B7280] w-4 h-4 flex items-center justify-center"></i>
            <p className="text-sm font-medium text-[#111111]">{client.created}</p>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-2">Last Activity</p>
          <div className="flex items-center gap-2">
            <i className="ri-time-line text-[#6B7280] w-4 h-4 flex items-center justify-center"></i>
            <p className="text-sm font-medium text-[#111111]">{client.lastActivity}</p>
          </div>
        </div>
      </div>
    </div>
  );
}