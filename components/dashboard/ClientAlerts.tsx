'use client';

export default function ClientAlerts({ alerts }: { alerts: any[] }) {
  return (
    <div className="mb-6 space-y-3">
      {alerts.map((alert, index) => (
        <div
          key={index}
          className={`flex items-start gap-4 p-4 rounded-2xl border ${
            alert.type === 'error'
              ? 'bg-[#FAFAFA] border-[#E5E5E5]'
              : alert.type === 'warning'
              ? 'bg-[#FAFAFA] border-[#E5E5E5]'
              : 'bg-[#FAFAFA] border-[#E5E5E5]'
          }`}
        >
          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
            alert.type === 'error'
              ? 'bg-[#6B7280]'
              : alert.type === 'warning'
              ? 'bg-[#9CA3AF]'
              : 'bg-[#111111]'
          }`}>
            <i className={`${
              alert.type === 'error'
                ? 'ri-close-line'
                : alert.type === 'warning'
                ? 'ri-alert-line'
                : 'ri-information-line'
            } text-white text-xs w-3 h-3 flex items-center justify-center`}></i>
          </div>
          <p className="text-sm text-[#111111] flex-1">{alert.message}</p>
          <button className="text-[#6B7280] hover:text-[#111111] transition-colors cursor-pointer">
            <i className="ri-close-line w-4 h-4 flex items-center justify-center"></i>
          </button>
        </div>
      ))}
    </div>
  );
}