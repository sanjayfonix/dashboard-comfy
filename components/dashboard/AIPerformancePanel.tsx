const metrics = [
  {
    label: 'Avg Processing Time',
    value: '2.4s',
    sub: 'Per try-on job',
    icon: 'ri-time-line',
    progress: 60,
  },
  {
    label: 'Success Rate',
    value: '94.2%',
    sub: 'Last 24 hours',
    icon: 'ri-checkbox-circle-line',
    progress: 94,
  },
  {
    label: 'Failed Jobs',
    value: '142',
    sub: 'Needs attention',
    icon: 'ri-error-warning-line',
    progress: 14,
  },
  {
    label: 'Active GPU Workers',
    value: '24',
    sub: '32 total capacity',
    icon: 'ri-cpu-line',
    progress: 75,
  },
];

export default function AIPerformancePanel() {
  return (
    <div className="bg-white rounded-2xl shadow-[0px_2px_12px_rgba(0,0,0,0.05)] border border-[#EBEBEB] overflow-hidden h-full flex flex-col">
      <div className="px-6 py-5 border-b border-[#F0F0F0]">
        <h2 className="text-base font-semibold text-[#111111] mb-0.5">AI System Performance</h2>
        <p className="text-sm text-[#9CA3AF]">Real-time infrastructure metrics</p>
      </div>

      <div className="flex flex-col flex-1 divide-y divide-[#F5F5F5]">
        {metrics.map((metric, index) => (
          <div key={index} className="flex items-center gap-4 px-6 py-4 hover:bg-[#FAFAFA] transition-colors cursor-default">
            <div className="w-10 h-10 bg-[#F5F5F5] rounded-xl flex items-center justify-center flex-shrink-0">
              <i className={`${metric.icon} text-base text-[#111111] w-5 h-5 flex items-center justify-center`}></i>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-xs font-medium text-[#6B7280]">{metric.label}</p>
                <p className="text-sm font-bold text-[#111111]">{metric.value}</p>
              </div>
              <div className="w-full h-1.5 bg-[#F0F0F0] rounded-full overflow-hidden mb-1">
                <div
                  className="h-full rounded-full bg-[#111111] transition-all duration-500"
                  style={{ width: `${metric.progress}%` }}
                ></div>
              </div>
              <p className="text-[11px] text-[#9CA3AF]">{metric.sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 py-4 border-t border-[#F0F0F0] bg-[#FAFAFA]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#111111]"></span>
          <p className="text-xs text-[#6B7280] font-medium">All systems operational</p>
        </div>
      </div>
    </div>
  );
}
