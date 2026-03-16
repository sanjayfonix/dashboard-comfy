'use client';

import { useState } from 'react';

export default function EmbedCodeSection() {
  const [copied, setCopied] = useState(false);
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID || 'your_client_id_here';
  const apiKey = process.env.NEXT_PUBLIC_API_KEY || 'your_api_key_here';

  const embedCode = `<!-- AI Virtual Try-On Integration -->
<script src="https://cdn.tryon.ai/v1/widget.js"></script>
<script>
  TryOnWidget.init({
    clientId: '${clientId}',
    apiKey: '${apiKey}',
    productSelector: '.product-image',
    buttonText: 'Try It On',
    theme: 'light'
  });
</script>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob(['AI Virtual Try-On Integration Guide\n\nComplete setup instructions and code examples...'], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'integration-guide.pdf';
    a.click();
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-[#E5E5E5]">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-[#111111]">Embed Code</h2>
          <p className="text-sm text-[#6B7280] mt-1">Add this script to your product pages</p>
        </div>
      </div>

      <div className="relative">
        <pre className="bg-[#1E1E1E] text-[#D4D4D4] p-4 rounded-xl text-xs overflow-x-auto font-mono">
          <code>{embedCode}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5"
        >
          <i className={`${copied ? 'ri-check-line' : 'ri-file-copy-line'} w-3.5 h-3.5 flex items-center justify-center`}></i>
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>

      <div className="flex items-center gap-3 mt-4">
        <button
          onClick={handleCopy}
          className="flex-1 px-4 py-2.5 bg-black text-white text-sm font-medium rounded-xl hover:bg-black/90 transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
        >
          <i className="ri-file-copy-line w-4 h-4 flex items-center justify-center"></i>
          <span>Copy Code</span>
        </button>
        <button
          onClick={handleDownload}
          className="flex-1 px-4 py-2.5 bg-[#F8F8F8] text-[#111111] text-sm font-medium rounded-xl hover:bg-[#F0F0F0] transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
        >
          <i className="ri-download-line w-4 h-4 flex items-center justify-center"></i>
          <span>Download Guide</span>
        </button>
      </div>

    </div>
  );
}
