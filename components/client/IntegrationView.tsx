'use client';

import { useState } from 'react';
import IntegrationStatusCard from './IntegrationStatusCard';
import EmbedCodeSection from './EmbedCodeSection';
import APICredentialsSection from './APICredentialsSection';
import WebhookConfigSection from './WebhookConfigSection';
import IntegrationStepsGuide from './IntegrationStepsGuide';
import IntegrationAlertsPanel from './IntegrationAlertsPanel';
import TestIntegrationModal from './TestIntegrationModal';
import RegenerateKeyModal from './RegenerateKeyModal';

export default function IntegrationView() {
  const [showTestModal, setShowTestModal] = useState(false);
  const [showRegenerateModal, setShowRegenerateModal] = useState(false);
  const [integrationStatus, setIntegrationStatus] = useState<'connected' | 'not-connected' | 'pending'>('connected');
  const [apiKey, setApiKey] = useState(process.env.NEXT_PUBLIC_API_KEY || 'your_api_key_here');
  const [webhookUrl, setWebhookUrl] = useState(process.env.NEXT_PUBLIC_WEBHOOK_URL || '');
  const [testResult, setTestResult] = useState<'success' | 'failed' | null>(null);

  const handleTestIntegration = () => {
    setShowTestModal(true);
    setTimeout(() => {
      setTestResult('success');
    }, 2000);
  };

  const handleRegenerateKey = () => {
    const newKey = 'sk_live_' + Math.random().toString(36).substring(2, 34);
    setApiKey(newKey);
    setShowRegenerateModal(false);
  };

  const handleSaveWebhook = () => {
    alert('Webhook URL saved successfully!');
  };

  return (
    <div className="space-y-6">
      
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#111111]">Website Integration</h1>
          <p className="text-sm text-[#6B7280] mt-1">Connect the AI virtual try-on feature to your website.</p>
        </div>
        <button
          onClick={() => window.open('https://docs.example.com/integration', '_blank')}
          className="px-4 py-2.5 bg-black text-white text-sm font-medium rounded-xl hover:bg-black/90 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2"
        >
          <i className="ri-book-open-line w-4 h-4 flex items-center justify-center"></i>
          <span>View Documentation</span>
        </button>
      </div>

      <IntegrationAlertsPanel status={integrationStatus} />

      <IntegrationStatusCard
        status={integrationStatus}
        onTestIntegration={handleTestIntegration}
        testResult={testResult}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EmbedCodeSection />
        <IntegrationStepsGuide onRunTest={() => setShowTestModal(true)} />
      </div>

      <APICredentialsSection
        apiKey={apiKey}
        onRegenerateKey={() => setShowRegenerateModal(true)}
      />

      <WebhookConfigSection
        webhookUrl={webhookUrl}
        onWebhookChange={setWebhookUrl}
        onSave={handleSaveWebhook}
      />

      {showTestModal && (
        <TestIntegrationModal
          onClose={() => {
            setShowTestModal(false);
            setTestResult(null);
          }}
          testResult={testResult}
        />
      )}

      {showRegenerateModal && (
        <RegenerateKeyModal
          onConfirm={handleRegenerateKey}
          onCancel={() => setShowRegenerateModal(false)}
        />
      )}

    </div>
  );
}
