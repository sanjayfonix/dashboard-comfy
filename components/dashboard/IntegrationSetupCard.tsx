'use client';

export default function IntegrationSetupCard() {
  return (
    <div className="bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5] p-8">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-[#F5F5F5] rounded-xl flex items-center justify-center flex-shrink-0">
          <i className="ri-code-s-slash-line text-[#111111] text-lg w-5 h-5 flex items-center justify-center"></i>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-[#111111] mb-2">Website Integration</h2>
          <p className="text-sm text-[#6B7280] mb-6">
            After creating the client account you will provide the hosted try-on modal integration code to the client so they can embed it on their website.
          </p>

          <div className="bg-[#F8F8F8] rounded-xl p-6 border border-[#E5E5E5]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <i className="ri-key-line text-[#6B7280] w-4 h-4 flex items-center justify-center"></i>
                <span className="text-sm font-semibold text-[#111111]">Client Integration Key</span>
              </div>
              <span className="text-xs text-[#6B7280] bg-white px-3 py-1 rounded-full border border-[#E5E5E5]">
                Generated after creation
              </span>
            </div>
            <div className="bg-white rounded-lg p-4 border border-[#E5E5E5] font-mono text-xs text-[#6B7280]">
              <div className="flex items-center gap-2">
                <i className="ri-lock-line w-3 h-3 flex items-center justify-center"></i>
                <span>API Key will be displayed here</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-start gap-3 p-4 bg-[#F8F8F8] rounded-xl border border-[#E5E5E5]">
            <i className="ri-information-line text-[#111111] w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5"></i>
            <div>
              <p className="text-sm font-semibold text-[#111111] mb-1">Next Steps</p>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Once the account is created, you'll receive the integration code and API credentials. Share these with the client to enable the virtual try-on widget on their website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}