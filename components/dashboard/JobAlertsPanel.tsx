'use client';

import Link from 'next/link';

export default function JobAlertsPanel() {
  const alerts = [
    {
      icon: 'ri-error-warning-line',
      iconBg: 'bg-red-50',
      iconColor: 'text-red-600',
      title: 'High failure rate detected',
      description: 'AI job success rate dropped to 87% in the last hour',
      action: 'View Infrastructure',
      href: '/dashboard/infrastructure',
    },
    {
      icon: 'ri-time-line',
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-600',
      title: 'Long processing times',
      description: 'Average processing time increased to 4.2s (normal: 2.4s)',
      action: 'View Infrastructure',
      href: '/dashboard/infrastructure',
    },
    {
      icon: 'ri-inbox-line',
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
      title: 'Queue backlog',
      description: '342 jobs currently waiting in queue',
      action: 'View Infrastructure',
      href: '/dashboard/infrastructure',
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 mb-8">
      {alerts.map((alert, index) => (
        <div key={index} className="bg-white rounded-2xl p-6 shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5]">
          <div className="flex items-start gap-4">
            <div className={`w-10 h-10 ${alert.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
              <i className={`${alert.icon} text-xl ${alert.iconColor} w-5 h-5 flex items-center justify-center`}></i>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-[#111111] mb-1">{alert.title}</h3>
              <p className="text-xs text-[#6B7280] mb-3">{alert.description}</p>
              <Link
                href={alert.href}
                className="inline-flex items-center gap-1 text-xs font-medium text-[#111111] hover:text-[#333333] transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>{alert.action}</span>
                <i className="ri-arrow-right-line w-3 h-3 flex items-center justify-center"></i>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}