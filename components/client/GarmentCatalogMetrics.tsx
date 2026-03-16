'use client';

const metrics = [
  {
    label: 'Total Garments',
    value: '248',
    icon: 'ri-shirt-line',
  },
  {
    label: 'Active Garments',
    value: '187',
    icon: 'ri-checkbox-circle-line',
  },
  {
    label: 'Processing Garments',
    value: '12',
    icon: 'ri-loader-4-line',
  },
  {
    label: 'Paused Garments',
    value: '49',
    icon: 'ri-pause-circle-line',
  }
];

export default function GarmentCatalogMetrics() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-[0px_2px_12px_rgba(0,0,0,0.05)] border border-[#EBEBEB] hover:shadow-[0px_6px_20px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200 p-6"
        >
          <div className="flex items-start justify-between mb-5">
            <div className="w-10 h-10 bg-[#F5F5F5] rounded-xl flex items-center justify-center">
              <i className={`${metric.icon} text-base text-[#111111] w-5 h-5 flex items-center justify-center`}></i>
            </div>
          </div>
          <div>
            <h3 className="text-[2rem] font-bold text-[#111111] leading-none mb-2 tracking-tight">{metric.value}</h3>
            <p className="text-sm text-[#9CA3AF] font-medium">{metric.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
