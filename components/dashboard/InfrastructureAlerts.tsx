'use client';

import Link from 'next/link';

interface Alert {
  title: string;
  description: string;
  severity: 'critical' | 'warning' | 'info';
  timestamp: string;
}

export default function InfrastructureAlerts() {
  const alerts: Alert[] = [
    { title: 'Worker offline', description: 'gpu-worker-005 has been offline for 12 minutes', severity: 'critical', timestamp: '12 minutes ago' },
    { title: 'Queue backlog detected', description: '47 jobs waiting in queue, exceeding normal threshold', severity: 'warning', timestamp: '18 minutes ago' },
    { title: 'High latency detected', description: 'Average processing time increased to 2.8s (normal: 2.1s)', severity: 'warning', timestamp: '35 minutes ago' },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-[#FEE2E2] border-[#FCA5A5]';
      case 'warning': return 'bg-[#FEF3C7] border-[#FDE68A]';
      case 'info': return 'bg-[#DBEAFE] border-[#93C5FD]';
      default: return 'bg-[#F5F5F5] border-[#EBEBEB]';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical': return { icon: 'ri-error-warning-line', color: 'text-[#EF4444]' };
      case 'warning': return { icon: 'ri-alert-line', color: 'text-[#F59E0B]' };
      case 'info': return { icon: 'ri-information-line', color: 'text-[#3B82F6]' };
      default: return { icon: 'ri-information-line', color: 'text-[#6B7280]' };
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-[#EBEBEB] shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
      <h3 className="text-lg font-bold text-[#111111] mb-6">System Alerts & Warnings</h3>

      <div className="space-y-4">
        {alerts.map((alert, index) => {
          const iconData = getSeverityIcon(alert.severity);
          return (
            <div key={index} className={`rounded-xl p-4 border ${getSeverityColor(alert.severity)}`}>
              <div className="flex items-start gap-3">
                <i className={`${iconData.icon} ${iconData.color} text-lg w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5`}></i>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-semibold text-[#111111]">{alert.title}</h4>
                    <span className="text-xs text-[#9CA3AF] whitespace-nowrap">{alert.timestamp}</span>
                  </div>
                  <p className="text-xs text-[#6B7280] mb-3">{alert.description}</p>
                  <Link href="/dashboard/ai-jobs">
                    <button className="text-xs font-medium text-[#111111] hover:underline cursor-pointer whitespace-nowrap">
                      Investigate Issue →
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}