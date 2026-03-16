'use client';

export default function RevenueMetrics() {
  const metrics = [
    {
      label: 'Total Platform Revenue',
      value: '$284,750',
      trend: '+18.2%',
      isPositive: true,
    },
    {
      label: 'Total Credits Sold',
      value: '1,423,750',
      trend: '+22.5%',
      isPositive: true,
    },
    {
      label: 'Average Revenue Per Client',
      value: '$4,746',
      trend: '+8.3%',
      isPositive: true,
    },
    {
      label: 'Credits Purchased This Month',
      value: '187,500',
      trend: '-5.2%',
      isPositive: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="text-sm text-gray-600 mb-2">{metric.label}</div>
          <div className="flex items-end justify-between">
            <div className="text-3xl font-bold text-black">{metric.value}</div>
            <div className={`text-sm font-medium flex items-center gap-1 ${metric.isPositive ? 'text-green-600' : 'text-red-600'}`}>
              <i className={`ri-arrow-${metric.isPositive ? 'up' : 'down'}-line`}></i>
              {metric.trend}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
