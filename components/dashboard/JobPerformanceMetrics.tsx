'use client';

export default function JobPerformanceMetrics() {
  const metrics = [
    {
      icon: 'ri-cpu-line',
      iconBg: 'bg-[#F8F8F8]',
      iconColor: 'text-[#111111]',
      value: '1.2M',
      label: 'Total Jobs Processed',
      trend: '+12.5%',
      trendUp: true,
    },
    {
      icon: 'ri-inbox-line',
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
      value: '342',
      label: 'Jobs in Queue',
      trend: '+8',
      trendUp: true,
    },
    {
      icon: 'ri-checkbox-circle-line',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      value: '1.13M',
      label: 'Successful Jobs',
      trend: '+14.2%',
      trendUp: true,
    },
    {
      icon: 'ri-close-circle-line',
      iconBg: 'bg-red-50',
      iconColor: 'text-red-600',
      value: '69.6K',
      label: 'Failed Jobs',
      trend: '-2.3%',
      trendUp: false,
    },
    {
      icon: 'ri-time-line',
      iconBg: 'bg-[#F8F8F8]',
      iconColor: 'text-[#111111]',
      value: '2.4s',
      label: 'Average Processing Time',
      trend: '-0.3s',
      trendUp: false,
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-white rounded-2xl p-6 shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5]">
          <div className={`w-10 h-10 ${metric.iconBg} rounded-xl flex items-center justify-center mb-4`}>
            <i className={`${metric.icon} text-xl ${metric.iconColor} w-5 h-5 flex items-center justify-center`}></i>
          </div>
          <h3 className="text-3xl font-bold text-[#111111] mb-1">{metric.value}</h3>
          <p className="text-sm text-[#6B7280] mb-2">{metric.label}</p>
          <div className="flex items-center gap-1">
            <i className={`${metric.trendUp ? 'ri-arrow-up-line' : 'ri-arrow-down-line'} text-xs ${metric.trendUp ? 'text-blue-600' : 'text-red-600'} w-3 h-3 flex items-center justify-center`}></i>
            <span className={`text-xs font-medium ${metric.trendUp ? 'text-blue-600' : 'text-red-600'}`}>
              {metric.trend}
            </span>
            <span className="text-xs text-[#9CA3AF] ml-1">vs last week</span>
          </div>
        </div>
      ))}
    </div>
  );
}