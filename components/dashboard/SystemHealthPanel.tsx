'use client';

import Link from 'next/link';

const healthItems = [
  { label: 'AI Processing Engine', status: 'Operational', uptime: '99.9%', icon: 'ri-cpu-line' },
  { label: 'Image Storage Service', status: 'Operational', uptime: '100%', icon: 'ri-hard-drive-line' },
  { label: 'API Gateway', status: 'Operational', uptime: '99.8%', icon: 'ri-cloud-line' },
  { label: 'Webhook Delivery', status: 'Degraded', uptime: '94.2%', icon: 'ri-webhook-line' },
  { label: 'Credit Billing System', status: 'Operational', uptime: '100%', icon: 'ri-coin-line' },
];

export default function SystemHealthPanel() {
  return (
    <div className="bg-white rounded-2xl shadow-[0px_2px_12px_rgba(0,0,0,0.05)] border border-[#EBEBEB] overflow-hidden">
      <div className="flex items-center justify-between px-6 py-5 border-b border-[#F0F0F0]">
        <div>
          <h2 className="text-base font-semibold text-[#111111] mb-0.5">System Health</h2>
          <p className="text-sm text-[#9CA3AF]">Live service status overview</p>
        </div>
        <Link
          href="/dashboard/infrastructure"
          className="px-4 py-2 text-sm font-medium text-[#111111] bg-[#F5F5F5] hover:bg-[#EBEBEB] rounded-full transition-all cursor-pointer whitespace-nowrap border border-[#EBEBEB]"
        >
          View Infrastructure
        </Link>
      </div>
      <div className="divide-y divide-[#F5F5F5]">
        {healthItems.map((item, i) => (
          <div key={i} className="flex items-center justify-between px-6 py-4 hover:bg-[#FAFAFA] transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#F5F5F5] rounded-xl flex items-center justify-center flex-shrink-0">
                <i className={`${item.icon} text-sm text-[#111111] w-4 h-4 flex items-center justify-center`}></i>
              </div>
              <span className="text-sm font-medium text-[#111111]">{item.label}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-[#9CA3AF]">{item.uptime} uptime</span>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                item.status === 'Operational'
                  ? 'bg-[#111111] text-white'
                  : 'bg-[#F5F5F5] text-[#6B7280] border border-[#EBEBEB]'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${item.status === 'Operational' ? 'bg-white/60' : 'bg-[#9CA3AF]'}`}></span>
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
