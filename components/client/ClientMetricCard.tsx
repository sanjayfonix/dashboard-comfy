'use client';

interface ClientMetricCardProps {
  title: string;
  value: string;
  trend: string;
  trendUp: boolean;
  icon: string;
  accentColor?: string;
}

export default function ClientMetricCard({
  title,
  value,
  trend,
  trendUp,
  icon,
}: ClientMetricCardProps) {
  return (
    <div
      suppressHydrationWarning
      className="bg-white rounded-2xl p-6 shadow-[0px_2px_12px_rgba(0,0,0,0.05)] border border-[#EBEBEB] hover:shadow-[0px_6px_20px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-5">
        <div className="w-10 h-10 bg-[#F5F5F5] rounded-xl flex items-center justify-center">
          <i className={`${icon} text-base text-[#111111] w-5 h-5 flex items-center justify-center`}></i>
        </div>
        <div
          suppressHydrationWarning
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
            trendUp ? 'bg-[#F0FFF4] text-[#16A34A]' : 'bg-[#FFF5F5] text-[#DC2626]'
          }`}
        >
          <i className={`${trendUp ? 'ri-arrow-up-line' : 'ri-arrow-down-line'} w-3 h-3 flex items-center justify-center`}></i>
          <span>{trend}</span>
        </div>
      </div>
      <div>
        <h3 suppressHydrationWarning className="text-[2rem] font-bold text-[#111111] leading-none mb-2 tracking-tight">{value}</h3>
        <p className="text-sm text-[#9CA3AF] font-medium">{title}</p>
      </div>
    </div>
  );
}
