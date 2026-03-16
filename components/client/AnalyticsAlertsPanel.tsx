'use client';

import { useRouter } from 'next/navigation';

const alerts = [
  {
    id: 1,
    type: 'warning',
    title: 'High Failure Rate',
    message: 'Try-on failure rate increased to 5.8% in the last 24 hours.',
    action: 'View Jobs',
    link: '/client/try-on-jobs',
    icon: 'ri-error-warning-line',
  },
  {
    id: 2,
    type: 'info',
    title: 'Low Credit Balance',
    message: 'Your credit balance is running low. Only 2,450 credits remaining.',
    action: 'View Credits',
    link: '/client/credits',
    icon: 'ri-information-line',
  },
  {
    id: 3,
    type: 'error',
    title: 'Processing Issues',
    message: '3 garments experiencing processing delays.',
    action: 'View Garments',
    link: '/client/garments',
    icon: 'ri-alert-line',
  },
];

export default function AnalyticsAlertsPanel() {
  const router = useRouter();

  const getAlertStyles = (type: string) => {
    switch (type) {
      case 'warning':
        return {
          bg: 'bg-amber-50',
          border: 'border-amber-200',
          icon: 'text-amber-600',
          button: 'bg-amber-100 hover:bg-amber-600 hover:text-white text-amber-700',
        };
      case 'error':
        return {
          bg: 'bg-red-50',
          border: 'border-red-200',
          icon: 'text-red-600',
          button: 'bg-red-100 hover:bg-red-600 hover:text-white text-red-700',
        };
      default:
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          icon: 'text-blue-600',
          button: 'bg-blue-100 hover:bg-blue-600 hover:text-white text-blue-700',
        };
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-[#F0F0F0]">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-[#111111]">Alerts</h2>
        <p className="text-xs text-[#9CA3AF] mt-0.5">Important notifications</p>
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => {
          const styles = getAlertStyles(alert.type);
          return (
            <div
              key={alert.id}
              className={`${styles.bg} ${styles.border} border rounded-xl p-4`}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-5 h-5 flex items-center justify-center flex-shrink-0 ${styles.icon}`}>
                  <i className={`${alert.icon} w-5 h-5 flex items-center justify-center`}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-[#111111] mb-1">{alert.title}</h3>
                  <p className="text-xs text-[#6B7280]">{alert.message}</p>
                </div>
              </div>
              <button
                onClick={() => router.push(alert.link)}
                className={`w-full px-3 py-2 ${styles.button} rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap`}
              >
                {alert.action}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}