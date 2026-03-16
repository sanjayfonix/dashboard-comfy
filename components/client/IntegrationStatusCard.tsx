'use client';

interface IntegrationStatusCardProps {
  status: 'connected' | 'not-connected' | 'pending';
  onTestIntegration: () => void;
  testResult: 'success' | 'failed' | null;
}

export default function IntegrationStatusCard({ status, onTestIntegration, testResult }: IntegrationStatusCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected':
        return 'bg-green-100 text-green-700';
      case 'not-connected':
        return 'bg-red-100 text-red-700';
      case 'pending':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'connected':
        return 'Connected';
      case 'not-connected':
        return 'Not Connected';
      case 'pending':
        return 'Pending Setup';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-[#E5E5E5]">
      <div className="flex items-start justify-between mb-6">
        <h2 className="text-lg font-semibold text-[#111111]">Integration Status</h2>
        <button
          onClick={onTestIntegration}
          className="px-4 py-2 bg-black text-white text-sm font-medium rounded-xl hover:bg-black/90 transition-colors cursor-pointer whitespace-nowrap"
        >
          Test Integration
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="p-4 bg-[#F8F8F8] rounded-xl">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-medium text-[#6B7280]">Integration Status</p>
            <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
              {getStatusText(status)}
            </span>
          </div>
        </div>

        <div className="p-4 bg-[#F8F8F8] rounded-xl">
          <p className="text-xs font-medium text-[#6B7280] mb-2">API Key</p>
          <div className="flex items-center gap-2">
            <i className="ri-key-line w-4 h-4 flex items-center justify-center text-[#111111]"></i>
            <p className="text-sm font-semibold text-[#111111]">Active</p>
          </div>
        </div>

        <div className="p-4 bg-[#F8F8F8] rounded-xl">
          <p className="text-xs font-medium text-[#6B7280] mb-2">Client ID</p>
          <p className="text-sm font-semibold text-[#111111] font-mono">zara_fashion_2024</p>
        </div>

        <div className="p-4 bg-[#F8F8F8] rounded-xl">
          <p className="text-xs font-medium text-[#6B7280] mb-2">Webhook Status</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <p className="text-sm font-semibold text-[#111111]">Configured</p>
          </div>
        </div>

      </div>

      {testResult && (
        <div className={`mt-4 p-4 rounded-xl flex items-start gap-3 ${
          testResult === 'success' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
        }`}>
          <i className={`${testResult === 'success' ? 'ri-checkbox-circle-fill text-green-600' : 'ri-error-warning-fill text-red-600'} w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5`}></i>
          <div className="flex-1">
            <p className={`text-sm font-medium ${testResult === 'success' ? 'text-green-900' : 'text-red-900'}`}>
              {testResult === 'success' ? 'Integration test successful!' : 'Integration test failed'}
            </p>
            <p className={`text-xs mt-1 ${testResult === 'success' ? 'text-green-700' : 'text-red-700'}`}>
              {testResult === 'success' 
                ? 'Your website is properly connected to the AI virtual try-on service.' 
                : 'Please check your API credentials and try again.'}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}