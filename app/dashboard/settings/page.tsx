'use client';

import { useState } from 'react';
import PlatformConfigurationForm from '@/components/dashboard/PlatformConfigurationForm';
import IntegrationSettingsSection from '@/components/dashboard/IntegrationSettingsSection';

export default function SettingsPage() {
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);
  const [showDiscardModal, setShowDiscardModal] = useState(false);
  const [showMaintenanceModal, setShowMaintenanceModal] = useState(false);
  const [showApiTokenModal, setShowApiTokenModal] = useState(false);
  const [showSecurityModal, setShowSecurityModal] = useState(false);

  const handleSaveChanges = () => {
    setShowSuccessBanner(true);
    setTimeout(() => setShowSuccessBanner(false), 3000);
  };

  const handleDiscardChanges = () => {
    setShowDiscardModal(true);
  };

  const handleEnableMaintenance = () => {
    setShowMaintenanceModal(true);
  };

  const handleGenerateApiToken = () => {
    setShowApiTokenModal(true);
  };

  const handleUpdateSecurity = () => {
    setShowSecurityModal(true);
  };

  return (
    <div className="p-8">
      {showSuccessBanner && (
        <div className="fixed top-20 right-8 bg-white border border-[#10B981] rounded-xl shadow-[0px_8px_24px_rgba(0,0,0,0.12)] p-4 flex items-center gap-3 z-50 animate-in slide-in-from-top-2">
          <div className="w-8 h-8 bg-[#10B981]/10 rounded-full flex items-center justify-center flex-shrink-0">
            <i className="ri-check-line text-[#10B981] text-lg w-5 h-5 flex items-center justify-center"></i>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#111111]">Settings Updated</p>
            <p className="text-xs text-[#6B7280]">Platform settings successfully updated.</p>
          </div>
          <button 
            onClick={() => setShowSuccessBanner(false)}
            className="ml-4 w-6 h-6 flex items-center justify-center hover:bg-[#F8F8F8] rounded-lg transition-colors cursor-pointer"
          >
            <i className="ri-close-line text-[#9CA3AF] w-4 h-4 flex items-center justify-center"></i>
          </button>
        </div>
      )}

      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#111111] mb-2">Platform Settings</h1>
          <p className="text-[#6B7280]">Configure global settings for the AI Virtual Try-On platform.</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={handleDiscardChanges}
            className="px-6 py-2.5 bg-white border border-[#E5E5E5] text-[#111111] rounded-full text-sm font-medium hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap"
          >
            Discard Changes
          </button>
          <button 
            onClick={handleSaveChanges}
            className="px-6 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-black/90 transition-all cursor-pointer whitespace-nowrap shadow-[0px_4px_12px_rgba(0,0,0,0.15)]"
          >
            Save Changes
          </button>
        </div>
      </div>

      <div className="max-w-4xl space-y-6">
        <PlatformConfigurationForm />
        <IntegrationSettingsSection 
          onGenerateApiToken={handleGenerateApiToken}
          onUpdateSecurity={handleUpdateSecurity}
          onEnableMaintenance={handleEnableMaintenance}
        />
      </div>

      {showDiscardModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-[0px_12px_40px_rgba(0,0,0,0.2)] w-full max-w-md mx-4">
            <div className="p-6">
              <div className="w-12 h-12 bg-[#FEF3C7] rounded-full flex items-center justify-center mb-4">
                <i className="ri-alert-line text-[#F59E0B] text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg font-semibold text-[#111111] mb-2">Discard Changes?</h3>
              <p className="text-sm text-[#6B7280] mb-6">
                All unsaved changes will be lost. This action cannot be undone.
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowDiscardModal(false)}
                  className="flex-1 px-4 py-2.5 bg-white border border-[#E5E5E5] text-[#111111] rounded-full text-sm font-medium hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowDiscardModal(false);
                  }}
                  className="flex-1 px-4 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-black/90 transition-all cursor-pointer whitespace-nowrap"
                >
                  Discard
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showMaintenanceModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-[0px_12px_40px_rgba(0,0,0,0.2)] w-full max-w-md mx-4">
            <div className="p-6">
              <div className="w-12 h-12 bg-[#FEE2E2] rounded-full flex items-center justify-center mb-4">
                <i className="ri-error-warning-line text-[#EF4444] text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg font-semibold text-[#111111] mb-2">Enable Maintenance Mode?</h3>
              <p className="text-sm text-[#6B7280] mb-6">
                This will temporarily disable all client try-on activity. Clients will not be able to process new jobs until maintenance mode is disabled.
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowMaintenanceModal(false)}
                  className="flex-1 px-4 py-2.5 bg-white border border-[#E5E5E5] text-[#111111] rounded-full text-sm font-medium hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowMaintenanceModal(false);
                    setShowSuccessBanner(true);
                    setTimeout(() => setShowSuccessBanner(false), 3000);
                  }}
                  className="flex-1 px-4 py-2.5 bg-[#EF4444] text-white rounded-full text-sm font-medium hover:bg-[#EF4444]/90 transition-all cursor-pointer whitespace-nowrap"
                >
                  Enable Maintenance
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showApiTokenModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-[0px_12px_40px_rgba(0,0,0,0.2)] w-full max-w-md mx-4">
            <div className="p-6">
              <div className="w-12 h-12 bg-[#FEF3C7] rounded-full flex items-center justify-center mb-4">
                <i className="ri-key-line text-[#F59E0B] text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg font-semibold text-[#111111] mb-2">Generate New API Token?</h3>
              <p className="text-sm text-[#6B7280] mb-6">
                This will invalidate the current API token. All integrations using the old token will need to be updated.
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowApiTokenModal(false)}
                  className="flex-1 px-4 py-2.5 bg-white border border-[#E5E5E5] text-[#111111] rounded-full text-sm font-medium hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowApiTokenModal(false);
                    setShowSuccessBanner(true);
                    setTimeout(() => setShowSuccessBanner(false), 3000);
                  }}
                  className="flex-1 px-4 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-black/90 transition-all cursor-pointer whitespace-nowrap"
                >
                  Generate Token
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showSecurityModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-[0px_12px_40px_rgba(0,0,0,0.2)] w-full max-w-md mx-4">
            <div className="p-6">
              <div className="w-12 h-12 bg-[#DBEAFE] rounded-full flex items-center justify-center mb-4">
                <i className="ri-shield-check-line text-[#3B82F6] text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg font-semibold text-[#111111] mb-2">Update Security Policy?</h3>
              <p className="text-sm text-[#6B7280] mb-6">
                Changing security settings may affect all admin accounts. Do you want to proceed?
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowSecurityModal(false)}
                  className="flex-1 px-4 py-2.5 bg-white border border-[#E5E5E5] text-[#111111] rounded-full text-sm font-medium hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowSecurityModal(false);
                    setShowSuccessBanner(true);
                    setTimeout(() => setShowSuccessBanner(false), 3000);
                  }}
                  className="flex-1 px-4 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-black/90 transition-all cursor-pointer whitespace-nowrap"
                >
                  Confirm Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}