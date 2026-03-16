const clients = [
  { name: 'Fashion Brand X', tryOns: 45200, credits: 226000, maxCredits: 300000, garments: 342, status: 'Active' },
  { name: 'Luxury Apparel Co.', tryOns: 38900, credits: 194500, maxCredits: 300000, garments: 287, status: 'Active' },
  { name: 'Urban Style Inc.', tryOns: 32100, credits: 160500, maxCredits: 250000, garments: 198, status: 'Active' },
  { name: 'Elite Fashion House', tryOns: 28400, credits: 142000, maxCredits: 250000, garments: 256, status: 'Active' },
  { name: 'Modern Wear Ltd.', tryOns: 24800, credits: 124000, maxCredits: 200000, garments: 175, status: 'Active' },
  { name: 'Trendy Boutique', tryOns: 19200, credits: 96000, maxCredits: 100000, garments: 143, status: 'Warning' },
];

export default function ClientActivityTable() {
  return (
    <div className="bg-white rounded-2xl shadow-[0px_2px_12px_rgba(0,0,0,0.05)] border border-[#EBEBEB] overflow-hidden">
      <div className="flex items-center justify-between px-6 py-5 border-b border-[#F0F0F0]">
        <div>
          <h2 className="text-base font-semibold text-[#111111] mb-0.5">Top Active Clients</h2>
          <p className="text-sm text-[#9CA3AF]">Highest platform usage this week</p>
        </div>
        <button className="px-4 py-2 text-sm font-medium text-[#111111] bg-[#F5F5F5] hover:bg-[#EBEBEB] rounded-full transition-all cursor-pointer whitespace-nowrap border border-[#EBEBEB]">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#FAFAFA]">
              <th className="text-left py-3 px-6 text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-wider">Client</th>
              <th className="text-left py-3 px-4 text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-wider">Try-Ons</th>
              <th className="text-left py-3 px-4 text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-wider">Credits Used</th>
              <th className="text-left py-3 px-4 text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-wider">Garments</th>
              <th className="text-left py-3 px-4 text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F5F5F5]">
            {clients.map((client, index) => {
              const creditPct = Math.round((client.credits / client.maxCredits) * 100);
              const isWarning = client.status === 'Warning';
              return (
                <tr key={index} className="hover:bg-[#FAFAFA] transition-colors cursor-pointer group">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-[#111111] rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        {client.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#111111]">{client.name}</p>
                        <p className="text-xs text-[#9CA3AF]">ID #{1000 + index}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-sm font-semibold text-[#111111]">{client.tryOns.toLocaleString()}</p>
                    <p className="text-xs text-[#9CA3AF]">jobs</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-sm font-semibold text-[#111111] mb-1.5">{client.credits.toLocaleString()}</p>
                    <div className="w-24 h-1.5 bg-[#F0F0F0] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#111111]"
                        style={{ width: `${creditPct}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-sm font-semibold text-[#111111]">{client.garments}</p>
                    <p className="text-xs text-[#9CA3AF]">items</p>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
                      isWarning
                        ? 'bg-[#F5F5F5] text-[#6B7280] border border-[#EBEBEB]'
                        : 'bg-[#111111] text-white'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${isWarning ? 'bg-[#9CA3AF]' : 'bg-white/60'}`}></span>
                      {client.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
