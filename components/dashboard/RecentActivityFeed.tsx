'use client';

import Link from 'next/link';

const activities = [
  {
    id: 1,
    type: 'client_created',
    icon: 'ri-building-line',
    title: 'New client onboarded',
    description: 'Chic Wardrobe Inc. account created and configured',
    time: '12 min ago',
    link: '/dashboard/clients/1010',
    linkLabel: 'View Client',
  },
  {
    id: 2,
    type: 'credits_adjusted',
    icon: 'ri-coin-line',
    title: 'Credits adjusted',
    description: 'Fashion Brand X received +50,000 credits top-up',
    time: '38 min ago',
    link: '/dashboard/clients/1001',
    linkLabel: 'View Client',
  },
  {
    id: 3,
    type: 'job_failed',
    icon: 'ri-error-warning-line',
    title: 'AI job failed',
    description: 'JOB-8468 failed during garment warping stage',
    time: '1 hr ago',
    link: '/dashboard/ai-jobs/JOB-8468',
    linkLabel: 'View Job',
  },
  {
    id: 4,
    type: 'client_suspended',
    icon: 'ri-pause-circle-line',
    title: 'Client suspended',
    description: 'Vintage Threads LLC suspended — zero credit balance',
    time: '2 hrs ago',
    link: '/dashboard/clients/1009',
    linkLabel: 'View Client',
  },
  {
    id: 5,
    type: 'settings_changed',
    icon: 'ri-settings-3-line',
    title: 'Platform settings updated',
    description: 'Max concurrent jobs limit changed from 8 to 10',
    time: '3 hrs ago',
    link: '/dashboard/settings',
    linkLabel: 'View Settings',
  },
  {
    id: 6,
    type: 'billing',
    icon: 'ri-file-list-line',
    title: 'New billing transaction',
    description: 'Luxury Apparel Co. purchased 200,000 credits — $1,200',
    time: '5 hrs ago',
    link: '/dashboard/billing',
    linkLabel: 'View Billing',
  },
];

const iconBg: Record<string, string> = {
  client_created: 'bg-[#111111] text-white',
  credits_adjusted: 'bg-[#F5F5F5] text-[#111111]',
  job_failed: 'bg-[#F5F5F5] text-[#111111]',
  client_suspended: 'bg-[#F5F5F5] text-[#6B7280]',
  settings_changed: 'bg-[#F5F5F5] text-[#111111]',
  billing: 'bg-[#F5F5F5] text-[#111111]',
};

export default function RecentActivityFeed() {
  return (
    <div className="bg-white rounded-2xl shadow-[0px_2px_12px_rgba(0,0,0,0.05)] border border-[#EBEBEB] overflow-hidden">
      <div className="flex items-center justify-between px-6 py-5 border-b border-[#F0F0F0]">
        <div>
          <h2 className="text-base font-semibold text-[#111111] mb-0.5">Recent Activity</h2>
          <p className="text-sm text-[#9CA3AF]">Latest platform events and admin actions</p>
        </div>
        <Link
          href="/dashboard/audit-logs"
          className="px-4 py-2 text-sm font-medium text-[#111111] bg-[#F5F5F5] hover:bg-[#EBEBEB] rounded-full transition-all cursor-pointer whitespace-nowrap border border-[#EBEBEB]"
        >
          View Audit Logs
        </Link>
      </div>
      <div className="divide-y divide-[#F5F5F5]">
        {activities.map((item) => (
          <div key={item.id} className="flex items-start gap-4 px-6 py-4 hover:bg-[#FAFAFA] transition-colors">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${iconBg[item.type]}`}>
              <i className={`${item.icon} text-sm w-4 h-4 flex items-center justify-center`}></i>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-[#111111] mb-0.5">{item.title}</p>
                  <p className="text-xs text-[#6B7280] leading-relaxed">{item.description}</p>
                </div>
                <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                  <span className="text-[11px] text-[#9CA3AF] whitespace-nowrap">{item.time}</span>
                  <Link
                    href={item.link}
                    className="text-[11px] font-semibold text-[#111111] hover:underline whitespace-nowrap cursor-pointer"
                  >
                    {item.linkLabel} →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
