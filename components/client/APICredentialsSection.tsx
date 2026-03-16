'use client';

import { useState } from 'react';

interface APICredentialsSectionProps {
  apiKey: string;
  onRegenerateKey: () => void;
}

export default function APICredentialsSection({ apiKey, onRegenerateKey }: APICredentialsSectionProps) {
  const [showKey, setShowKey] = useState(false);
  const [copied, setCopied] = useState(false);

  const clientId = 'zara_fashion_2024';

  const handleCopyKey = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyClientId = () => {
    navigator.clipboard.writeText(clientId);
  };

  const maskedKey = apiKey.substring(0, 12) + '••••••••••••••••••••';

  return (
    <div className="bg-white rounded-2xl p-6 border border-[#E5E5E5]">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-[#111111]">API Credentials</h2>
          <p className="text-sm text-[#6B7280] mt-1">Use these credentials to authenticate API requests</p>
        </div>
      </div>

      <div className="space-y-4">
        
        <div>
          <label className="block text-sm font-medium text-[#111111] mb-2">Client ID</label>
          <div className="flex items-center gap-2">
            <div className="flex-1 px-4 py-3 bg-[#F8F8F8] rounded-xl font-mono text-sm text-[#111111]">
              {clientId}
            </div>
            <button
              onClick={handleCopyClientId}
              className="px-4 py-3 bg-[#F8F8F8] hover:bg-[#F0F0F0] rounded-xl transition-colors cursor-pointer"
            >
              <i className="ri-file-copy-line w-4 h-4 flex items-center justify-center text-[#111111]"></i>
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#111111] mb-2">API Key</label>
          <div className="flex items-center gap-2">
            <div className="flex-1 px-4 py-3 bg-[#F8F8F8] rounded-xl font-mono text-sm text-[#111111] flex items-center justify-between">
              <span>{showKey ? apiKey : maskedKey}</span>
              <button
                onClick={() => setShowKey(!showKey)}
                className="ml-2 cursor-pointer"
              >
                <i className={`${showKey ? 'ri-eye-off-line' : 'ri-eye-line'} w-4 h-4 flex items-center justify-center text-[#6B7280]`}></i>
              </button>
            </div>
            <button
              onClick={handleCopyKey}
              className="px-4 py-3 bg-[#F8F8F8] hover:bg-[#F0F0F0] rounded-xl transition-colors cursor-pointer"
            >
              <i className={`${copied ? 'ri-check-line' : 'ri-file-copy-line'} w-4 h-4 flex items-center justify-center text-[#111111]`}></i>
            </button>
          </div>
        </div>

      </div>

      <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[#F0F0F0]">
        <button
          onClick={handleCopyKey}
          className="px-4 py-2.5 bg-black text-white text-sm font-medium rounded-xl hover:bg-black/90 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2"
        >
          <i className="ri-file-copy-line w-4 h-4 flex items-center justify-center"></i>
          <span>Copy API Key</span>
        </button>
        <button
          onClick={onRegenerateKey}
          className="px-4 py-2.5 bg-[#F8F8F8] text-[#111111] text-sm font-medium rounded-xl hover:bg-[#F0F0F0] transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2"
        >
          <i className="ri-refresh-line w-4 h-4 flex items-center justify-center"></i>
          <span>Regenerate API Key</span>
        </button>
      </div>

      <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-xl flex items-start gap-3">
        <i className="ri-error-warning-line text-orange-600 w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5"></i>
        <div>
          <p className="text-sm font-medium text-orange-900">Keep your API key secure</p>
          <p className="text-xs text-orange-700 mt-1">Never share your API key publicly or commit it to version control. Regenerating the key will invalidate the previous one.</p>
        </div>
      </div>

    </div>
  );
}