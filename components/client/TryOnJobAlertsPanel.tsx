'use client';

import { useRouter } from 'next/navigation';

const alerts = [
  {
    id: 1,
    type: 'warning',
    title: 'High Failure Rate Detected',
    message: '18 jobs failed in the last hour',
    action: 'View Failed Jobs',
    icon: 'ri-error-warning-line',
    color: 'bg-amber-50 border-amber-200',
    iconColor: 'text-amber-600',
    textColor: 'text-amber-900'
  },
  {
    id: 2,
    type: 'info',
    title: 'Processing Time Increased',
    message: 'Average time up by 0.5s today',
    action: 'View Details',
    icon: 'ri-time-line',
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600',
    textColor: 'text-blue-900'
  },
  {
    id: 3,
    type: 'success',
    title: 'Peak Activity Period',
    message: '450 jobs processed in last hour',
    action: 'View Activity',
    icon: 'ri-line-chart-line',
    color: 'bg-emerald-50 border-emerald-200',
    iconColor: 'text-emerald-600',
    textColor: 'text-emerald-900'
  }
];

export default function TryOnJobAlertsPanel() {
  const router = useRouter();

  return (
    <div className="bg-white rounded-2xl shadow-[0px_2px_12px_rgba(0,0,0,0.05)] border border-[#F0F0F0] p-6 h-full">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-10 h-10 bg-[#F5F5F5] rounded-xl flex items-center justify-center">
          <i className="ri-notification-3-line text-[#111111] text-base w-5 h-5 flex items-center justify-center"></i>
        </div>
        <div>
          <h3 className="text-base font-bold text-[#111111]">Job Alerts</h3>
          <p className="text-sm text-[#6B7280]">Recent activity notifications</p>
        </div>
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`${alert.color} border rounded-xl p-4`}
          >
            <div className="flex items-start gap-3">
              <div className={`w-8 h-8 ${alert.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <i className={`${alert.icon} ${alert.iconColor} text-base w-4 h-4 flex items-center justify-center`}></i>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className={`text-sm font-semibold ${alert.textColor} mb-1`}>{alert.title}</h4>
                <p className={`text-xs ${alert.textColor} opacity-80 mb-2`}>{alert.message}</p>
                <button
                  onClick={() => router.push('/client/try-on-jobs')}
                  className={`text-xs font-medium ${alert.iconColor} hover:underline cursor-pointer`}
                >
                  {alert.action} →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}