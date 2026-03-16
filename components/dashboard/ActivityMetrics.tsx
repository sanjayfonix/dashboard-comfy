'use client';

export default function ActivityMetrics() {
  const metrics = [
    {
      label: 'Total Events Today',
      value: '1,247',
      trend: '+12%',
      trendUp: true,
    },
    {
      label: 'Admin Actions',
      value: '89',
      trend: '+5%',
      trendUp: true,
    },
    {
      label: 'Security Events',
      value: '23',
      trend: '-8%',
      trendUp: false,
    },
    {
      label: 'System Alerts',
      value: '7',
      trend: '+2',
      trendUp: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-start justify-between mb-3">
            <p className="text-sm text-gray-600">{metric.label}</p>
            <div className={`flex items-center gap-1 text-xs ${metric.trendUp ? 'text-green-600' : 'text-red-600'}`}>
              <i className={`ri-arrow-${metric.trendUp ? 'up' : 'down'}-line`}></i>
              <span>{metric.trend}</span>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
        </div>
      ))}
    </div>
  );
}