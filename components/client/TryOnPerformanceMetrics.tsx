'use client';

interface TryOnPerformanceMetricsProps {
  garment: any;
}

export default function TryOnPerformanceMetrics({ garment }: TryOnPerformanceMetricsProps) {
  const metrics = [
    {
      label: 'Total Try-Ons',
      value: garment.totalTryOns === 0 ? '-' : garment.totalTryOns.toLocaleString(),
      icon: 'ri-eye-line',
    },
    {
      label: 'Success Rate',
      value: garment.successRate === 0 ? '-' : `${garment.successRate}%`,
      icon: 'ri-check-line',
    },
    {
      label: 'Avg Processing Time',
      value: garment.avgProcessingTime,
      icon: 'ri-time-line',
    },
    {
      label: 'Last Try-On Date',
      value: garment.lastTryOn,
      icon: 'ri-calendar-line',
    }
  ];

  if (garment.totalTryOns === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-[0px_2px_12px_rgba(0,0,0,0.05)] border border-[#EBEBEB] p-12 mb-6">
        <div className="text-center max-w-md mx-auto">
          <div className="w-16 h-16 bg-[#F5F5F5] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <i className="ri-eye-off-line text-[#111111] text-2xl w-8 h-8 flex items-center justify-center"></i>
          </div>
          <h3 className="text-lg font-bold text-[#111111] mb-2">No try-on activity yet</h3>
          <p className="text-sm text-[#9CA3AF]">This garment hasn't been used in any virtual try-on sessions.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-10 h-10 bg-[#F5F5F5] rounded-xl flex items-center justify-center">
          <i className="ri-bar-chart-box-line text-[#111111] text-xl w-5 h-5 flex items-center justify-center"></i>
        </div>
        <div>
          <h3 className="text-base font-bold text-[#111111]">Try-On Performance</h3>
          <p className="text-sm text-[#9CA3AF]">Usage metrics and statistics</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-[0px_2px_12px_rgba(0,0,0,0.05)] border border-[#EBEBEB] hover:shadow-[0px_6px_20px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200 p-6">
            <div className="flex items-start justify-between mb-5">
              <div className="w-10 h-10 bg-[#F5F5F5] rounded-xl flex items-center justify-center">
                <i className={`${metric.icon} text-base text-[#111111] w-5 h-5 flex items-center justify-center`}></i>
              </div>
            </div>
            <h3 className="text-[2rem] font-bold text-[#111111] leading-none mb-2 tracking-tight">{metric.value}</h3>
            <p className="text-sm text-[#9CA3AF] font-medium">{metric.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
