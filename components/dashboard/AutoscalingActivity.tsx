'use client';

import Link from 'next/link';

interface ScalingEvent {
  type: 'Worker Added' | 'Worker Removed' | 'Scaling Trigger';
  description: string;
  timestamp: string;
  icon: string;
  color: string;
}

export default function AutoscalingActivity() {
  const events: ScalingEvent[] = [
    { type: 'Worker Added', description: 'Added gpu-worker-024 in US-East region due to high queue load', timestamp: '12 minutes ago', icon: 'ri-add-circle-line', color: 'text-[#10B981]' },
    { type: 'Scaling Trigger', description: 'Queue threshold exceeded: 50+ jobs waiting', timestamp: '15 minutes ago', icon: 'ri-alert-line', color: 'text-[#F59E0B]' },
    { type: 'Worker Added', description: 'Added gpu-worker-023 in EU-Central region', timestamp: '28 minutes ago', icon: 'ri-add-circle-line', color: 'text-[#10B981]' },
    { type: 'Worker Removed', description: 'Removed gpu-worker-019 due to low demand', timestamp: '1 hour ago', icon: 'ri-indeterminate-circle-line', color: 'text-[#6B7280]' },
    { type: 'Scaling Trigger', description: 'CPU usage dropped below 30% threshold', timestamp: '1 hour ago', icon: 'ri-alert-line', color: 'text-[#F59E0B]' },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-[#EBEBEB] shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-[#111111]">Autoscaling Activity</h3>
        <Link href="/dashboard/settings">
          <button className="px-4 py-2 text-sm font-medium text-[#111111] bg-white border border-[#EBEBEB] rounded-full hover:bg-[#F5F5F5] transition-all cursor-pointer whitespace-nowrap">
            View Scaling Logs
          </button>
        </Link>
      </div>

      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="flex items-start gap-4 pb-4 border-b border-[#F0F0F0] last:border-0 last:pb-0">
            <div className={`w-10 h-10 rounded-xl bg-[#F5F5F5] flex items-center justify-center flex-shrink-0`}>
              <i className={`${event.icon} text-lg ${event.color} w-5 h-5 flex items-center justify-center`}></i>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-[#111111]">{event.type}</span>
                <span className="text-xs text-[#9CA3AF] whitespace-nowrap">{event.timestamp}</span>
              </div>
              <p className="text-sm text-[#6B7280]">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}