export default function ClientMetrics() {
  const metrics = [
    { 
      title: 'Total Clients', 
      value: '247', 
      trend: '+12 this month',
      trendUp: true,
      icon: 'ri-building-line'
    },
    { 
      title: 'Active Clients', 
      value: '231', 
      trend: '93.5% active rate',
      trendUp: true,
      icon: 'ri-checkbox-circle-line'
    },
    { 
      title: 'Suspended Clients', 
      value: '8', 
      trend: '-2 this month',
      trendUp: false,
      icon: 'ri-pause-circle-line'
    },
    { 
      title: 'Total Credits Used', 
      value: '8.4M', 
      trend: '+18% vs last month',
      trendUp: true,
      icon: 'ri-coin-line'
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <div 
          key={index} 
          className="bg-white rounded-2xl p-6 shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.08)] transition-all"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-11 h-11 bg-[#F5F5F5] rounded-xl flex items-center justify-center flex-shrink-0">
              <i className={`${metric.icon} text-[#111111] text-lg w-5 h-5 flex items-center justify-center`}></i>
            </div>
          </div>
          <div>
            <p className="text-[13px] font-medium text-[#6B7280] mb-1">{metric.title}</p>
            <p className="text-3xl font-bold text-[#111111] mb-2">{metric.value}</p>
            <div className="flex items-center gap-1.5">
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                metric.trendUp ? 'bg-[#F5F5F5] text-[#111111]' : 'bg-[#F5F5F5] text-[#6B7280]'
              }`}>
                <i className={`${metric.trendUp ? 'ri-arrow-up-line' : 'ri-arrow-down-line'} w-3 h-3 flex items-center justify-center`}></i>
                {metric.trend}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}