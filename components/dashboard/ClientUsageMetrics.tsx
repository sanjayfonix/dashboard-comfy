'use client';

export default function ClientUsageMetrics({ client }: { client: any }) {
  const metrics = [
    {
      title: 'Total Try-On Jobs',
      value: client.totalJobs.toLocaleString(),
      icon: 'ri-image-2-line',
      trend: '+12.5%',
      trendUp: true
    },
    {
      title: 'Total Credits Used',
      value: client.creditsUsed.toLocaleString(),
      icon: 'ri-coin-line',
      trend: '+8.3%',
      trendUp: true
    },
    {
      title: 'Credits Remaining',
      value: client.creditsRemaining.toLocaleString(),
      icon: 'ri-wallet-3-line',
      trend: '-15.2%',
      trendUp: false
    },
    {
      title: 'Active Garments',
      value: client.activeGarments.toString(),
      icon: 'ri-shirt-line',
      trend: '+5.7%',
      trendUp: true
    },
    {
      title: 'Avg Processing Time',
      value: client.avgProcessingTime,
      icon: 'ri-timer-line',
      trend: '-3.2%',
      trendUp: true
    },
    {
      title: 'Try-On Success Rate',
      value: `${client.successRate}%`,
      icon: 'ri-checkbox-circle-line',
      trend: '+1.8%',
      trendUp: true
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5] p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 bg-[#F5F5F5] rounded-xl flex items-center justify-center flex-shrink-0">
              <i className={`${metric.icon} text-[#111111] text-lg w-5 h-5 flex items-center justify-center`}></i>
            </div>
            <span className="text-xs font-semibold text-[#6B7280] bg-[#F5F5F5] px-2.5 py-1 rounded-full">
              {metric.trend}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-[#111111] mb-1">{metric.value}</h3>
          <p className="text-sm text-[#6B7280]">{metric.title}</p>
        </div>
      ))}
    </div>
  );
}