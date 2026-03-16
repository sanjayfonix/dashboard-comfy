'use client';

interface TeamMetricsProps {
  metrics: {
    total: number;
    admins: number;
    operators: number;
    viewers: number;
  };
}

export default function TeamMetrics({ metrics }: TeamMetricsProps) {
  const cards = [
    {
      label: 'Total Team Members',
      value: metrics.total,
      icon: 'ri-team-line',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      label: 'Admins',
      value: metrics.admins,
      icon: 'ri-shield-star-line',
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    {
      label: 'Operators',
      value: metrics.operators,
      icon: 'ri-user-settings-line',
      color: 'text-green-600',
      bg: 'bg-green-50'
    },
    {
      label: 'Viewers',
      value: metrics.viewers,
      icon: 'ri-eye-line',
      color: 'text-orange-600',
      bg: 'bg-orange-50'
    }
  ];

  return (
    <div className="grid grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 flex items-center justify-center ${card.bg} rounded-xl`}>
              <i className={`${card.icon} w-6 h-6 flex items-center justify-center ${card.color}`}></i>
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">{card.value}</div>
          <div className="text-sm text-gray-600">{card.label}</div>
        </div>
      ))}
    </div>
  );
}