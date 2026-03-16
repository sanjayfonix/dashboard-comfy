'use client';

export default function CurrentBalanceCard() {
  const currentCredits = 2450;
  const creditsPerTryOn = 5;
  const averageDailyUsage = 625;

  const estimatedTryOns = Math.floor(currentCredits / creditsPerTryOn);
  const estimatedDays = Math.floor(currentCredits / averageDailyUsage);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-[#F0F0F0]">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-base font-semibold text-[#111111] mb-1">Current Balance</h2>
          <p className="text-xs text-[#9CA3AF]">Your available credits</p>
        </div>
        <div className="w-12 h-12 bg-[#F8F8F8] rounded-xl flex items-center justify-center">
          <i className="ri-wallet-3-line text-xl text-[#111111] w-6 h-6 flex items-center justify-center"></i>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div>
          <p className="text-xs text-[#6B7280] mb-2">Current Credits</p>
          <p className="text-2xl font-bold text-[#111111]">{currentCredits.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-xs text-[#6B7280] mb-2">Estimated Remaining Try-Ons</p>
          <p className="text-2xl font-bold text-[#111111]">{estimatedTryOns.toLocaleString()}</p>
          <p className="text-xs text-[#9CA3AF] mt-1">~{estimatedDays} days at current usage</p>
        </div>
        <div>
          <p className="text-xs text-[#6B7280] mb-2">Average Daily Usage</p>
          <p className="text-2xl font-bold text-[#111111]">{averageDailyUsage.toLocaleString()}</p>
          <p className="text-xs text-[#9CA3AF] mt-1">credits per day</p>
        </div>
      </div>
    </div>
  );
}