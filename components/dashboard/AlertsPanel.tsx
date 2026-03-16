const alerts = [
  {
    type: 'warning',
    title: 'Low Credit Warning',
    message: 'Fashion Brand X has less than 100 credits remaining',
    time: '2 hours ago',
    icon: 'ri-alert-line',
  },
  {
    type: 'error',
    title: 'High Failure Rate',
    message: 'AI job success rate dropped to 87% in the last hour',
    time: '4 hours ago',
    icon: 'ri-error-warning-line',
  },
  {
    type: 'info',
    title: 'New Client Registered',
    message: 'Luxury Apparel Co. just signed up',
    time: '6 hours ago',
    icon: 'ri-information-line',
  },
];

const dotOpacity: Record<string, string> = {
  error: 'bg-[#111111]',
  warning: 'bg-[#6B7280]',
  info: 'bg-[#C4C4C4]',
};

export default function AlertsPanel() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0px_2px_12px_rgba(0,0,0,0.05)] border border-[#EBEBEB] h-full flex flex-col">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-base font-semibold text-[#111111] mb-1">System Alerts</h2>
          <p className="text-sm text-[#9CA3AF]">Recent warnings and notifications</p>
        </div>
        <span className="w-5 h-5 flex items-center justify-center bg-[#111111] text-white text-[10px] font-bold rounded-full">
          {alerts.length}
        </span>
      </div>

      <div className="flex flex-col gap-3 flex-1">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-4 rounded-xl border border-[#EBEBEB] bg-[#FAFAFA] hover:bg-[#F5F5F5] transition-all cursor-pointer"
          >
            <div className="w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5 bg-white rounded-lg border border-[#EBEBEB]">
              <i className={`${alert.icon} text-sm text-[#111111] w-4 h-4 flex items-center justify-center`}></i>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[#111111] mb-0.5">{alert.title}</p>
              <p className="text-xs text-[#6B7280] leading-relaxed mb-2">{alert.message}</p>
              <div className="flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${dotOpacity[alert.type]}`}></span>
                <p className="text-[11px] text-[#9CA3AF]">{alert.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-5 w-full py-2.5 text-sm font-medium text-[#6B7280] hover:text-[#111111] hover:bg-[#F5F5F5] rounded-xl transition-all cursor-pointer border border-[#EBEBEB] whitespace-nowrap">
        View All Alerts
      </button>
    </div>
  );
}
