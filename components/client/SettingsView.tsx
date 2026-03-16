'use client';

import { useState } from 'react';
import OrganizationInfoCard from './OrganizationInfoCard';
import AccountSecuritySection from './AccountSecuritySection';
import NotificationPreferencesCard from './NotificationPreferencesCard';
import APIAccessInfoCard from './APIAccessInfoCard';
import AccountStatusCard from './AccountStatusCard';
import DataPrivacySection from './DataPrivacySection';
import DeleteAccountModal from './DeleteAccountModal';
import SettingsSuccessBanner from './SettingsSuccessBanner';
import SettingsErrorBanner from './SettingsErrorBanner';

const TABS = [
  { id: 'organisation', label: 'Organisation Info', icon: 'ri-building-line' },
  { id: 'security', label: 'Account Security', icon: 'ri-lock-line' },
  { id: 'notifications', label: 'Notification Preferences', icon: 'ri-notification-3-line' },
  { id: 'api', label: 'API Access Info', icon: 'ri-key-line' },
  { id: 'status', label: 'Account Status', icon: 'ri-shield-check-line' },
  { id: 'privacy', label: 'Data & Privacy', icon: 'ri-eye-off-line' },
];

export default function SettingsView() {
  const [activeTab, setActiveTab] = useState('organisation');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);
  const [showErrorBanner, setShowErrorBanner] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSaveSuccess = (message: string) => {
    setSuccessMessage(message);
    setShowSuccessBanner(true);
    setTimeout(() => setShowSuccessBanner(false), 5000);
  };

  const handleSaveError = () => {
    setShowErrorBanner(true);
    setTimeout(() => setShowErrorBanner(false), 5000);
  };

  const handleDeleteAccount = () => {
    setShowDeleteModal(false);
    handleSaveSuccess('Account deletion request submitted.');
  };

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold text-[#111111]">Account Settings</h1>
        <p className="text-sm text-[#6B7280] mt-1">Manage your organization and security preferences.</p>
      </div>

      {showSuccessBanner && (
        <SettingsSuccessBanner
          message={successMessage}
          onDismiss={() => setShowSuccessBanner(false)}
        />
      )}

      {showErrorBanner && (
        <SettingsErrorBanner onDismiss={() => setShowErrorBanner(false)} />
      )}

      <div className="bg-white rounded-2xl border border-[#E5E5E5] overflow-hidden">
        <div className="flex border-b border-[#E5E5E5] overflow-x-auto scrollbar-hide">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-4 text-sm font-medium whitespace-nowrap transition-colors cursor-pointer border-b-2 -mb-px ${
                activeTab === tab.id
                  ? 'border-black text-[#111111]'
                  : 'border-transparent text-[#6B7280] hover:text-[#111111] hover:bg-[#F8F8F8]'
              }`}
            >
              <i className={`${tab.icon} w-4 h-4 flex items-center justify-center`}></i>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === 'organisation' && (
            <OrganizationInfoCard
              onSaveSuccess={handleSaveSuccess}
              onSaveError={handleSaveError}
            />
          )}
          {activeTab === 'security' && (
            <AccountSecuritySection
              onSaveSuccess={handleSaveSuccess}
              onSaveError={handleSaveError}
            />
          )}
          {activeTab === 'notifications' && (
            <NotificationPreferencesCard
              onSaveSuccess={handleSaveSuccess}
              onSaveError={handleSaveError}
            />
          )}
          {activeTab === 'api' && <APIAccessInfoCard />}
          {activeTab === 'status' && <AccountStatusCard />}
          {activeTab === 'privacy' && (
            <DataPrivacySection onDeleteAccount={() => setShowDeleteModal(true)} />
          )}
        </div>
      </div>

      {showDeleteModal && (
        <DeleteAccountModal
          onConfirm={handleDeleteAccount}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}

    </div>
  );
}
