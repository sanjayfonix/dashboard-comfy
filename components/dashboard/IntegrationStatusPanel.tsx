'use client';

import { useState } from 'react';

export default function IntegrationStatusPanel({ client }: { client: any }) {
  const [showApiKey, setShowApiKey] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(client.apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5] p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#F5F5F5] rounded-xl flex items-center justify-center flex-shrink-0">
            <i className="ri-code-s-slash-line text-[#111111] text-lg w-5 h-5 flex items-center justify-center"></i>
          </div>
          <h2 className="text-lg font-bold text-[#111111]">Website Integration</h2>
        </div>
        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
          client.integrationStatus === 'Active'
            ? 'bg-[#111111] text-white'
            : 'bg-[#F5F5F5] text-[#6B7280] border border-[#EBEBEB]'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${client.integrationStatus === 'Active' ? 'bg-white/60' : 'bg-[#9CA3AF]'}`}></span>
          {client.integrationStatus}
        </span>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-semibold text-[#111111]">Integration Status</p>
            <span className={`text-xs font-medium ${
              client.integrationStatus === 'Active' ? 'text-[#111111]' : 'text-[#6B7280]'
            }`}>
              {client.integrationStatus === 'Active' ? 'Configured' : 'Not Configured'}
            </span>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-semibold text-[#111111]">Hosted Modal Status</p>
            <span className={`text-xs font-medium ${
              client.integrationStatus === 'Active' ? 'text-[#111111]' : 'text-[#6B7280]'
            }`}>
              {client.integrationStatus === 'Active' ? 'Active' : 'Inactive'}
            </span>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-semibold text-[#111111]">Webhook Status</p>
            <span className={`text-xs font-medium ${
              client.webhookStatus === 'Configured' ? 'text-[#111111]' : 'text-[#6B7280]'
            }`}>
              {client.webhookStatus}
            </span>
          </div>
        </div>

        <div className="pt-4 border-t border-[#F0F0F0]">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <i className="ri-key-line text-[#6B7280] w-4 h-4 flex items-center justify-center"></i>
              <p className="text-sm font-semibold text-[#111111]">API Key</p>
            </div>
            <button
              onClick={() => setShowApiKey(!showApiKey)}
              className="text-xs font-medium text-[#111111] hover:text-[#6B7280] transition-colors cursor-pointer whitespace-nowrap"
            >
              {showApiKey ? 'Hide' : 'Show'}
            </button>
          </div>
          <div className="bg-[#F8F8F8] rounded-xl p-4 border border-[#E5E5E5]">
            <div className="flex items-center justify-between gap-3">
              <code className="text-xs font-mono text-[#111111] flex-1 break-all">
                {showApiKey ? client.apiKey : '••••••••••••••••••••••••••••••••'}
              </code>
              <button
                onClick={handleCopy}
                className="flex-shrink-0 w-8 h-8 bg-white border border-[#E5E5E5] rounded-lg flex items-center justify-center hover:bg-[#F8F8F8] transition-all cursor-pointer"
              >
                <i className={`${copied ? 'ri-check-line' : 'ri-file-copy-line'} text-[#111111] w-4 h-4 flex items-center justify-center`}></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <button className="w-full mt-6 px-5 py-2.5 bg-[#F5F5F5] border border-[#E5E5E5] text-[#111111] rounded-full text-sm font-medium hover:bg-[#EBEBEB] transition-all cursor-pointer whitespace-nowrap">
        View Integration Settings
      </button>
    </div>
  );
}