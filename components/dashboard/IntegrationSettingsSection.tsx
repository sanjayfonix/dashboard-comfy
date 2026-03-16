'use client';

import { useState } from 'react';

interface IntegrationSettingsSectionProps {
  onGenerateApiToken: () => void;
  onUpdateSecurity: () => void;
  onEnableMaintenance: () => void;
}

export default function IntegrationSettingsSection({ 
  onGenerateApiToken, 
  onUpdateSecurity,
  onEnableMaintenance 
}: IntegrationSettingsSectionProps) {
  const [apiRateLimit, setApiRateLimit] = useState(1000);
  const [tokenExpiration, setTokenExpiration] = useState('30 days');
  const [requireMfa, setRequireMfa] = useState(true);
  const [sessionTimeout, setSessionTimeout] = useState(60);
  const [ipWhitelist, setIpWhitelist] = useState('192.168.1.1\n10.0.0.1');
  const [emailFailures, setEmailFailures] = useState(true);
  const [emailHighFailureRate, setEmailHighFailureRate] = useState(true);
  const [infrastructureAlerts, setInfrastructureAlerts] = useState(true);
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl p-6 shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5]">
        <h2 className="text-lg font-semibold text-[#111111] mb-1">API Configuration</h2>
        <p className="text-sm text-[#6B7280] mb-6">Manage platform API settings and access tokens</p>
        
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#111111] mb-2">Platform API Endpoint</label>
            <input
              type="text"
              value="https://api.tryon-platform.com/v1"
              readOnly
              className="w-full px-4 py-2.5 bg-[#F8F8F8] border border-[#E5E5E5] rounded-xl text-sm text-[#6B7280] cursor-not-allowed"
            />
            <p className="text-xs text-[#9CA3AF] mt-1.5">Read-only API endpoint for platform integrations</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#111111] mb-2">API Rate Limit (requests/minute)</label>
            <input
              type="number"
              value={apiRateLimit}
              onChange={(e) => setApiRateLimit(Number(e.target.value))}
              className="w-full px-4 py-2.5 bg-[#F8F8F8] border border-[#E5E5E5] rounded-xl text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 transition-all"
            />
            <p className="text-xs text-[#9CA3AF] mt-1.5">Maximum API requests allowed per minute per client</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#111111] mb-2">API Token Expiration Duration</label>
            <div className="relative">
              <select
                value={tokenExpiration}
                onChange={(e) => setTokenExpiration(e.target.value)}
                className="w-full px-4 py-2.5 pr-8 bg-[#F8F8F8] border border-[#E5E5E5] rounded-xl text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 transition-all appearance-none cursor-pointer"
              >
                <option>7 days</option>
                <option>30 days</option>
                <option>90 days</option>
                <option>1 year</option>
                <option>Never</option>
              </select>
              <i className="ri-arrow-down-s-line absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none w-5 h-5 flex items-center justify-center"></i>
            </div>
            <p className="text-xs text-[#9CA3AF] mt-1.5">How long API tokens remain valid before requiring renewal</p>
          </div>

          <div className="pt-2">
            <button
              onClick={onGenerateApiToken}
              className="px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-black/90 transition-all cursor-pointer whitespace-nowrap shadow-[0px_4px_12px_rgba(0,0,0,0.15)]"
            >
              <i className="ri-key-line mr-2 w-4 h-4 inline-flex items-center justify-center"></i>
              Generate New API Token
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5]">
        <h2 className="text-lg font-semibold text-[#111111] mb-1">Security Settings</h2>
        <p className="text-sm text-[#6B7280] mb-6">Configure platform security and access controls</p>
        
        <div className="space-y-5">
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-sm font-medium text-[#111111]">Require MFA for Admin Accounts</p>
              <p className="text-xs text-[#6B7280] mt-1">Enforce multi-factor authentication for all admin users</p>
            </div>
            <button
              onClick={() => setRequireMfa(!requireMfa)}
              className={`relative w-12 h-6 rounded-full transition-all cursor-pointer ${
                requireMfa ? 'bg-black' : 'bg-[#E5E5E5]'
              }`}
            >
              <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                requireMfa ? 'translate-x-6' : 'translate-x-0'
              }`}></span>
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#111111] mb-2">Session Timeout Duration (minutes)</label>
            <input
              type="number"
              value={sessionTimeout}
              onChange={(e) => setSessionTimeout(Number(e.target.value))}
              className="w-full px-4 py-2.5 bg-[#F8F8F8] border border-[#E5E5E5] rounded-xl text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 transition-all"
            />
            <p className="text-xs text-[#9CA3AF] mt-1.5">Automatically log out inactive admin sessions after this duration</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#111111] mb-2">Allowed IP Whitelist</label>
            <textarea
              value={ipWhitelist}
              onChange={(e) => setIpWhitelist(e.target.value)}
              rows={4}
              placeholder="Enter IP addresses (one per line)"
              className="w-full px-4 py-2.5 bg-[#F8F8F8] border border-[#E5E5E5] rounded-xl text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 transition-all resize-none"
            />
            <p className="text-xs text-[#9CA3AF] mt-1.5">Only these IP addresses can access admin dashboard (leave empty to allow all)</p>
          </div>

          <div className="pt-2">
            <button
              onClick={onUpdateSecurity}
              className="px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-black/90 transition-all cursor-pointer whitespace-nowrap shadow-[0px_4px_12px_rgba(0,0,0,0.15)]"
            >
              <i className="ri-shield-check-line mr-2 w-4 h-4 inline-flex items-center justify-center"></i>
              Update Security Policy
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5]">
        <h2 className="text-lg font-semibold text-[#111111] mb-1">System Notifications</h2>
        <p className="text-sm text-[#6B7280] mb-6">Configure alert preferences for system events</p>
        
        <div className="space-y-5">
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-sm font-medium text-[#111111]">Email Alerts for System Failures</p>
              <p className="text-xs text-[#6B7280] mt-1">Receive email notifications when critical system failures occur</p>
            </div>
            <button
              onClick={() => setEmailFailures(!emailFailures)}
              className={`relative w-12 h-6 rounded-full transition-all cursor-pointer ${
                emailFailures ? 'bg-black' : 'bg-[#E5E5E5]'
              }`}
            >
              <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                emailFailures ? 'translate-x-6' : 'translate-x-0'
              }`}></span>
            </button>
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-sm font-medium text-[#111111]">Email Alerts for High AI Failure Rate</p>
              <p className="text-xs text-[#6B7280] mt-1">Alert when AI job failure rate exceeds threshold</p>
            </div>
            <button
              onClick={() => setEmailHighFailureRate(!emailHighFailureRate)}
              className={`relative w-12 h-6 rounded-full transition-all cursor-pointer ${
                emailHighFailureRate ? 'bg-black' : 'bg-[#E5E5E5]'
              }`}
            >
              <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                emailHighFailureRate ? 'translate-x-6' : 'translate-x-0'
              }`}></span>
            </button>
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-sm font-medium text-[#111111]">Infrastructure Alerts</p>
              <p className="text-xs text-[#6B7280] mt-1">Notify when infrastructure issues are detected</p>
            </div>
            <button
              onClick={() => setInfrastructureAlerts(!infrastructureAlerts)}
              className={`relative w-12 h-6 rounded-full transition-all cursor-pointer ${
                infrastructureAlerts ? 'bg-black' : 'bg-[#E5E5E5]'
              }`}
            >
              <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                infrastructureAlerts ? 'translate-x-6' : 'translate-x-0'
              }`}></span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5]">
        <h2 className="text-lg font-semibold text-[#111111] mb-1">Maintenance Mode</h2>
        <p className="text-sm text-[#6B7280] mb-6">Temporarily disable client try-on activity for system maintenance</p>
        
        <div className="flex items-center justify-between py-3 mb-5">
          <div>
            <p className="text-sm font-medium text-[#111111]">Enable Maintenance Mode</p>
            <p className="text-xs text-[#6B7280] mt-1">When enabled, clients cannot process new try-on jobs</p>
          </div>
          <button
            onClick={() => setMaintenanceMode(!maintenanceMode)}
            className={`relative w-12 h-6 rounded-full transition-all cursor-pointer ${
              maintenanceMode ? 'bg-[#EF4444]' : 'bg-[#E5E5E5]'
            }`}
          >
            <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
              maintenanceMode ? 'translate-x-6' : 'translate-x-0'
            }`}></span>
          </button>
        </div>

        {maintenanceMode && (
          <div className="bg-[#FEF2F2] border border-[#FEE2E2] rounded-xl p-4 flex items-start gap-3">
            <div className="w-8 h-8 bg-[#EF4444]/10 rounded-full flex items-center justify-center flex-shrink-0">
              <i className="ri-error-warning-line text-[#EF4444] text-base w-4 h-4 flex items-center justify-center"></i>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-[#111111] mb-1">Maintenance Mode Active</p>
              <p className="text-xs text-[#6B7280]">All client try-on processing is currently disabled. Remember to disable maintenance mode when ready.</p>
            </div>
          </div>
        )}

        <div className="pt-4">
          <button
            onClick={onEnableMaintenance}
            disabled={maintenanceMode}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap shadow-[0px_4px_12px_rgba(0,0,0,0.15)] ${
              maintenanceMode 
                ? 'bg-[#E5E5E5] text-[#9CA3AF] cursor-not-allowed' 
                : 'bg-[#EF4444] text-white hover:bg-[#EF4444]/90 cursor-pointer'
            }`}
          >
            <i className="ri-tools-line mr-2 w-4 h-4 inline-flex items-center justify-center"></i>
            Enable Maintenance Mode
          </button>
        </div>
      </div>
    </>
  );
}