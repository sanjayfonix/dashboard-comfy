'use client';

export default function AccountStatusCard() {
  const accountStatus = 'Active';
  const creationDate = 'January 15, 2024';

  return (
    <div className="bg-white rounded-2xl p-6 border border-[#E5E5E5]">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-[#111111]">Account Status</h2>
        <p className="text-sm text-[#6B7280] mt-1">Your account information and status</p>
      </div>

      <div className="space-y-4">
        
        <div className="flex items-center justify-between p-4 bg-[#F8F8F8] rounded-xl">
          <div>
            <p className="text-sm font-medium text-[#111111]">Account Status</p>
            <p className="text-xs text-[#6B7280] mt-1">Your account is currently active and operational</p>
          </div>
          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full whitespace-nowrap">
            {accountStatus}
          </span>
        </div>

        <div className="flex items-center justify-between p-4 bg-[#F8F8F8] rounded-xl">
          <div>
            <p className="text-sm font-medium text-[#111111]">Account Creation Date</p>
            <p className="text-xs text-[#6B7280] mt-1">The date your account was created</p>
          </div>
          <span className="text-sm font-medium text-[#111111] whitespace-nowrap">
            {creationDate}
          </span>
        </div>

      </div>

    </div>
  );
}