'use client';

import { useRouter } from 'next/navigation';

export default function ActivityTimelinePanel() {
  const router = useRouter();

  const events = [
    {
      id: 1,
      type: 'Client account created',
      entity: 'FashionHub',
      entityId: 'CL-006',
      time: '14:32',
      icon: 'ri-user-add-line',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      link: '/dashboard/clients/CL-006',
    },
    {
      id: 2,
      type: 'Large credit adjustment',
      entity: 'TrendWear',
      entityId: 'CL-002',
      time: '17:28',
      icon: 'ri-coins-line',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      link: '/dashboard/clients/CL-002',
    },
    {
      id: 3,
      type: 'Infrastructure restart',
      entity: 'Worker WRK-003',
      entityId: 'INFRA-001',
      time: '12:34',
      icon: 'ri-restart-line',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      link: '/dashboard/infrastructure',
    },
    {
      id: 4,
      type: 'High system error rate',
      entity: 'Security Alert',
      entityId: 'API-LOG-045',
      time: '11:23',
      icon: 'ri-error-warning-line',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      link: '/dashboard/audit-logs',
    },
    {
      id: 5,
      type: 'Autoscaling triggered',
      entity: '2 workers added',
      entityId: 'INFRA-002',
      time: '09:47',
      icon: 'ri-server-line',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      link: '/dashboard/infrastructure',
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Activity Timeline</h3>
        <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer whitespace-nowrap">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={event.id} className="relative">
            {index !== events.length - 1 && (
              <div className="absolute left-5 top-12 bottom-0 w-px bg-gray-200"></div>
            )}
            <div className="flex gap-4">
              <div className={`w-10 h-10 flex items-center justify-center rounded-full ${event.bgColor} flex-shrink-0`}>
                <i className={`${event.icon} ${event.color}`}></i>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="text-sm font-medium text-gray-900">{event.type}</p>
                  <span className="text-xs text-gray-500 whitespace-nowrap">{event.time}</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{event.entity}</p>
                <button
                  onClick={() => router.push(event.link)}
                  className="text-xs text-black hover:underline cursor-pointer whitespace-nowrap"
                >
                  Investigate Event →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}