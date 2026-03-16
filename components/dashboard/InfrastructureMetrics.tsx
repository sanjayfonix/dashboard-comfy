'use client';

interface MetricCardProps {
  title: string;
  value: string;
  trend: number;
  icon: string;
}

function MetricCard({ title, value, trend, icon }: MetricCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-[#EBEBEB] shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 rounded-xl bg-[#F5F5F5] flex items-center justify-center`}>
          <i className={`${icon} text-lg text-[#111111] w-5 h-5 flex items-center justify-center`}></i>
        </div>
        <div className={`flex items-center gap-1 text-xs font-medium ${trend >= 0 ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
          <i className={`${trend >= 0 ? 'ri-arrow-up-line' : 'ri-arrow-down-line'} w-3 h-3 flex items-center justify-center`}></i>
          <span>{Math.abs(trend)}%</span>
        </div>
      </div>
      <div className="text-3xl font-bold text-[#111111] mb-1">{value}</div>
      <div className="text-sm text-[#6B7280]">{title}</div>
    </div>
  );
}

export default function InfrastructureMetrics() {
  const metrics = [
    { title: 'Total GPU Workers', value: '24', trend: 9, icon: 'ri-server-line' },
    { title: 'Active Workers', value: '18', trend: 12, icon: 'ri-checkbox-circle-line' },
    { title: 'Jobs in Queue', value: '47', trend: -15, icon: 'ri-time-line' },
    { title: 'Average Processing Latency', value: '2.3s', trend: -8, icon: 'ri-speed-line' },
    { title: 'System Uptime', value: '99.8%', trend: 0.2, icon: 'ri-shield-check-line' },
  ];

  return (
    <div className="grid grid-cols-5 gap-6">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
}