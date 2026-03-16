'use client';

export default function CreditUsageSection({ client, onAddCredits }: { client: any; onAddCredits: () => void }) {
  const totalCredits = client.creditsUsed + client.creditsRemaining;
  const usedPercentage = Math.round((client.creditsUsed / totalCredits) * 100);
  const remainingPercentage = 100 - usedPercentage;

  return (
    <div className="bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5] p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#F5F5F5] rounded-xl flex items-center justify-center flex-shrink-0">
            <i className="ri-wallet-3-line text-[#111111] text-lg w-5 h-5 flex items-center justify-center"></i>
          </div>
          <h2 className="text-lg font-bold text-[#111111]">Credit Usage</h2>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold text-[#111111]">Current Balance</p>
            <p className="text-2xl font-bold text-[#111111]">{client.currentBalance.toLocaleString()}</p>
          </div>
          <div className="w-full h-3 bg-[#F0F0F0] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#111111] rounded-full transition-all"
              style={{ width: `${remainingPercentage}%` }}
            ></div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="text-xs text-[#6B7280]">{usedPercentage}% used</p>
            <p className="text-xs text-[#6B7280]">{remainingPercentage}% remaining</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#F0F0F0]">
          <div>
            <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-2">Credits Consumed</p>
            <p className="text-lg font-bold text-[#111111]">{client.creditsUsed.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-2">Last Purchase</p>
            <p className="text-sm font-medium text-[#111111]">{client.lastPurchase}</p>
          </div>
        </div>

        <div className="pt-4 border-t border-[#F0F0F0]">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-semibold text-[#111111]">Estimated Usage Rate</p>
            <p className="text-sm font-medium text-[#111111]">{client.usageRate}</p>
          </div>
          {client.usageRate !== '-' && (
            <p className="text-xs text-[#6B7280]">
              Estimated {Math.round(client.currentBalance / 12000)} days remaining at current rate
            </p>
          )}
        </div>
      </div>

      <button
        onClick={onAddCredits}
        className="w-full mt-6 px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-black/90 transition-all cursor-pointer whitespace-nowrap"
      >
        Add Credits
      </button>
    </div>
  );
}