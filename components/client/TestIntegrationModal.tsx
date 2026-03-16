'use client';

interface TestIntegrationModalProps {
  onClose: () => void;
  testResult: 'success' | 'failed' | null;
}

export default function TestIntegrationModal({ onClose, testResult }: TestIntegrationModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md">
        
        <div className="px-6 py-5 border-b border-[#F0F0F0] flex items-center justify-between">
          <h3 className="text-lg font-semibold text-[#111111]">Test Integration</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#F8F8F8] transition-colors cursor-pointer"
          >
            <i className="ri-close-line w-5 h-5 flex items-center justify-center text-[#6B7280]"></i>
          </button>
        </div>

        <div className="px-6 py-6">
          {testResult === null && (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 border-4 border-[#E5E5E5] border-t-black rounded-full animate-spin"></div>
              <p className="text-sm font-medium text-[#111111]">Testing integration...</p>
              <p className="text-xs text-[#6B7280] mt-2">This may take a few seconds</p>
            </div>
          )}

          {testResult === 'success' && (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <i className="ri-checkbox-circle-fill text-green-600 w-8 h-8 flex items-center justify-center"></i>
              </div>
              <p className="text-lg font-semibold text-[#111111]">Integration Successful!</p>
              <p className="text-sm text-[#6B7280] mt-2">Your website is properly connected to the AI virtual try-on service.</p>
              
              <div className="mt-6 p-4 bg-[#F8F8F8] rounded-xl text-left">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-[#6B7280]">API Connection</span>
                  <span className="text-xs font-semibold text-green-600">✓ Passed</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-[#6B7280]">Authentication</span>
                  <span className="text-xs font-semibold text-green-600">✓ Passed</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-[#6B7280]">Webhook Configuration</span>
                  <span className="text-xs font-semibold text-green-600">✓ Passed</span>
                </div>
              </div>
            </div>
          )}

          {testResult === 'failed' && (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                <i className="ri-close-circle-fill text-red-600 w-8 h-8 flex items-center justify-center"></i>
              </div>
              <p className="text-lg font-semibold text-[#111111]">Integration Failed</p>
              <p className="text-sm text-[#6B7280] mt-2">Unable to connect to your website. Please check your configuration.</p>
              
              <div className="mt-6 p-4 bg-[#F8F8F8] rounded-xl text-left">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-[#6B7280]">API Connection</span>
                  <span className="text-xs font-semibold text-red-600">✗ Failed</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-[#6B7280]">Authentication</span>
                  <span className="text-xs font-semibold text-[#9CA3AF]">- Skipped</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-[#6B7280]">Webhook Configuration</span>
                  <span className="text-xs font-semibold text-[#9CA3AF]">- Skipped</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {testResult !== null && (
          <div className="px-6 py-4 border-t border-[#F0F0F0] flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 bg-black text-white text-sm font-medium rounded-xl hover:bg-black/90 transition-colors cursor-pointer whitespace-nowrap"
            >
              Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
}