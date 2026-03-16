'use client';

import { useRouter } from 'next/navigation';

const alerts = [
  {
    id: 1,
    type: 'warning',
    title: 'Low Credit Balance',
    message: 'Only 12,450 credits remaining. Consider purchasing more.',
    action: 'View Credits',
    link: '/client/credits',
    icon: 'ri-coin-line',
    color: 'bg-amber-500',
  },
  {
    id: 2,
    type: 'error',
    title: 'Failed Try-On Jobs',
    message: '3 jobs failed in the last hour due to processing errors.',
    action: 'View Jobs',
    link: '/client/try-on-jobs',
    icon: 'ri-error-warning-line',
    color: 'bg-red-500',
  },
  {
    id: 3,
    type: 'info',
    title: 'Integration Status',
    message: 'API webhook endpoint is responding slowly.',
    action: 'Check Integration',
    link: '/client/integration',
    icon: 'ri-plug-line',
    color: 'bg-blue-500',
  },
];

export default function ClientAlertsPanel() {
  const router = useRouter();

  return (
    <div className="bg-white rounded-2xl p-5 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-[#F0F0F0] h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-[#111111]">Alerts</h2>
        <span className="px-2 py-0.5 bg-red-100 text-red-600 text-xs font-semibold rounded-full">
          {alerts.length}
        </span>
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="p-4 bg-[#F8F8F8] rounded-xl border border-[#F0F0F0] hover:border-[#E5E5E5] transition-all"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className={`w-8 h-8 ${alert.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <i className={`${alert.icon} text-white text-sm w-4 h-4 flex items-center justify-center`}></i>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-[#111111] mb-1">{alert.title}</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">{alert.message}</p>
              </div>
            </div>
            <button
              onClick={() => router.push(alert.link)}
              className="w-full px-3 py-2 bg-white hover:bg-black hover:text-white border border-[#E5E5E5] rounded-lg text-xs font-medium text-[#111111] transition-all cursor-pointer whitespace-nowrap"
            >
              {alert.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}