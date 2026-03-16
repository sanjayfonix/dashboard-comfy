'use client';

import { useState } from 'react';

interface AccountSecuritySectionProps {
  onSaveSuccess: (message: string) => void;
  onSaveError: () => void;
}

export default function AccountSecuritySection({ onSaveSuccess, onSaveError }: AccountSecuritySectionProps) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleUpdatePassword = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      onSaveError();
      return;
    }

    if (newPassword !== confirmPassword) {
      onSaveError();
      return;
    }

    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      const success = Math.random() > 0.1;
      if (success) {
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
        onSaveSuccess('Password updated successfully.');
      } else {
        onSaveError();
      }
    }, 1000);
  };

  const handleCancel = () => {
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-[#E5E5E5]">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-[#111111]">Account Security</h2>
        <p className="text-sm text-[#6B7280] mt-1">Update your password to keep your account secure</p>
      </div>

      <div className="space-y-4">
        
        <div>
          <label className="block text-sm font-medium text-[#111111] mb-2">Current Password</label>
          <div className="relative">
            <input
              type={showCurrentPassword ? 'text' : 'password'}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full px-4 py-3 pr-12 bg-[#F8F8F8] rounded-xl text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-black/10"
              placeholder="Enter current password"
            />
            <button
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
            >
              <i className={`${showCurrentPassword ? 'ri-eye-off-line' : 'ri-eye-line'} w-4 h-4 flex items-center justify-center text-[#6B7280]`}></i>
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#111111] mb-2">New Password</label>
          <div className="relative">
            <input
              type={showNewPassword ? 'text' : 'password'}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-3 pr-12 bg-[#F8F8F8] rounded-xl text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-black/10"
              placeholder="Enter new password"
            />
            <button
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
            >
              <i className={`${showNewPassword ? 'ri-eye-off-line' : 'ri-eye-line'} w-4 h-4 flex items-center justify-center text-[#6B7280]`}></i>
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#111111] mb-2">Confirm New Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 pr-12 bg-[#F8F8F8] rounded-xl text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-black/10"
              placeholder="Confirm new password"
            />
            <button
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
            >
              <i className={`${showConfirmPassword ? 'ri-eye-off-line' : 'ri-eye-line'} w-4 h-4 flex items-center justify-center text-[#6B7280]`}></i>
            </button>
          </div>
        </div>

      </div>

      <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[#F0F0F0]">
        <button
          onClick={handleUpdatePassword}
          disabled={isSaving}
          className="px-6 py-2.5 bg-black text-white text-sm font-medium rounded-xl hover:bg-black/90 transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isSaving ? (
            <>
              <i className="ri-loader-4-line w-4 h-4 flex items-center justify-center animate-spin"></i>
              <span>Updating...</span>
            </>
          ) : (
            <>
              <i className="ri-lock-password-line w-4 h-4 flex items-center justify-center"></i>
              <span>Update Password</span>
            </>
          )}
        </button>
        <button
          onClick={handleCancel}
          disabled={isSaving}
          className="px-6 py-2.5 bg-[#F8F8F8] text-[#111111] text-sm font-medium rounded-xl hover:bg-[#F0F0F0] transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Cancel
        </button>
      </div>

      <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-start gap-3">
        <i className="ri-information-line text-blue-600 w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5"></i>
        <div>
          <p className="text-sm font-medium text-blue-900">Password Requirements</p>
          <p className="text-xs text-blue-700 mt-1">Use at least 8 characters with a mix of uppercase, lowercase, numbers, and special characters.</p>
        </div>
      </div>

    </div>
  );
}