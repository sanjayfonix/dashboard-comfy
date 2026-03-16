'use client';

const metrics = [
  {
    label: 'Total Try-Ons',
    value: '24,567',
    trend: '+12.5%',
    trendUp: true,
    icon: 'ri-image-line',
  },
  {
    label: 'Try-On Success Rate',
    value: '94.2%',
    trend: '+2.3%',
    trendUp: true,
    icon: 'ri-checkbox-circle-line',
  },
  {
    label: 'Average Processing Time',
    value: '3.2s',
    trend: '-0.4s',
    trendUp: true,
    icon: 'ri-time-line',
  },
  {
    label: 'Credits Used',
    value: '122,835',
    trend: '+8.7%',
    trendUp: false,
    icon: 'ri-coin-line',
  },
];

export default function AnalyticsMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="bg-white rounded-2xl p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-[#F0F0F0]"
        >
          <div className="flex items-start justify-between mb-4">
            <div className={`w-10 h-10 flex items-center justify-center rounded-xl bg-[#F8F8F8]`}>
              <i className={`${metric.icon} w-5 h-5 flex items-center justify-center text-[#111111]`}></i>
            </div>
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${
                metric.trendUp
                  ? 'bg-emerald-50 text-emerald-600'
                  : 'bg-red-50 text-red-600'
              }`}
            >
              {metric.trend}
            </span>
          </div>
          <p className="text-2xl font-bold text-[#111111] mb-1">{metric.value}</p>
          <p className="text-xs text-[#6B7280]">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}