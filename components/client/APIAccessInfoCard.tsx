'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function APIAccessInfoCard() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID || 'your_client_id_here';
  const apiKey = process.env.NEXT_PUBLIC_API_KEY || 'your_api_key_here';
  const maskedKey = apiKey.substring(0, 12) + '********************';

  const handleCopyKey = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-[#E5E5E5]">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-[#111111]">API Access Information</h2>
        <p className="text-sm text-[#6B7280] mt-1">Your API credentials for website integration</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#111111] mb-2">Client ID</label>
          <div className="px-4 py-3 bg-[#F8F8F8] rounded-xl font-mono text-sm text-[#111111]">
            {clientId}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#111111] mb-2">API Key</label>
          <div className="px-4 py-3 bg-[#F8F8F8] rounded-xl font-mono text-sm text-[#111111]">
            {maskedKey}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[#F0F0F0]">
        <button
          onClick={handleCopyKey}
          className="px-4 py-2.5 bg-black text-white text-sm font-medium rounded-xl hover:bg-black/90 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2"
        >
          <i className={`${copied ? 'ri-check-line' : 'ri-file-copy-line'} w-4 h-4 flex items-center justify-center`}></i>
          <span>{copied ? 'Copied!' : 'Copy API Key'}</span>
        </button>
        <button
          onClick={() => router.push('/client/integration')}
          className="px-4 py-2.5 bg-[#F8F8F8] text-[#111111] text-sm font-medium rounded-xl hover:bg-[#F0F0F0] transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2"
        >
          <i className="ri-link w-4 h-4 flex items-center justify-center"></i>
          <span>View Integration</span>
        </button>
      </div>

      <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-start gap-3">
        <i className="ri-information-line text-blue-600 w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5"></i>
        <div>
          <p className="text-sm font-medium text-blue-900">API Credentials</p>
          <p className="text-xs text-blue-700 mt-1">These credentials are read-only here. To regenerate your API key, visit the Integration page.</p>
        </div>
      </div>
    </div>
  );
}