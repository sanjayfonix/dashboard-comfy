'use client';

import { useState } from 'react';

interface NotificationPreferencesCardProps {
  onSaveSuccess: (message: string) => void;
  onSaveError: () => void;
}

export default function NotificationPreferencesCard({ onSaveSuccess, onSaveError }: NotificationPreferencesCardProps) {
  const [lowCreditsAlert, setLowCreditsAlert] = useState(true);
  const [failureAlert, setFailureAlert] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      const success = Math.random() > 0.1;
      if (success) {
        onSaveSuccess('Notification preferences updated successfully.');
      } else {
        onSaveError();
      }
    }, 1000);
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-[#E5E5E5]">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-[#111111]">Notification Preferences</h2>
        <p className="text-sm text-[#6B7280] mt-1">Choose which notifications you want to receive</p>
      </div>

      <div className="space-y-4">
        
        <div className="flex items-center justify-between p-4 bg-[#F8F8F8] rounded-xl">
          <div className="flex-1">
            <p className="text-sm font-medium text-[#111111]">Email Alerts for Low Credits</p>
            <p className="text-xs text-[#6B7280] mt-1">Receive notifications when your credit balance is running low</p>
          </div>
          <button
            onClick={() => setLowCreditsAlert(!lowCreditsAlert)}
            className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer ${
              lowCreditsAlert ? 'bg-black' : 'bg-[#D1D5DB]'
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                lowCreditsAlert ? 'translate-x-6' : 'translate-x-0'
              }`}
            ></span>
          </button>
        </div>

        <div className="flex items-center justify-between p-4 bg-[#F8F8F8] rounded-xl">
          <div className="flex-1">
            <p className="text-sm font-medium text-[#111111]">Email Alerts for Try-On Failures</p>
            <p className="text-xs text-[#6B7280] mt-1">Get notified when try-on jobs fail or encounter errors</p>
          </div>
          <button
            onClick={() => setFailureAlert(!failureAlert)}
            className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer ${
              failureAlert ? 'bg-black' : 'bg-[#D1D5DB]'
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                failureAlert ? 'translate-x-6' : 'translate-x-0'
              }`}
            ></span>
          </button>
        </div>

        <div className="flex items-center justify-between p-4 bg-[#F8F8F8] rounded-xl">
          <div className="flex-1">
            <p className="text-sm font-medium text-[#111111]">Weekly Usage Reports</p>
            <p className="text-xs text-[#6B7280] mt-1">Receive weekly summaries of your try-on activity and credit usage</p>
          </div>
          <button
            onClick={() => setWeeklyReports(!weeklyReports)}
            className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer ${
              weeklyReports ? 'bg-black' : 'bg-[#D1D5DB]'
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                weeklyReports ? 'translate-x-6' : 'translate-x-0'
              }`}
            ></span>
          </button>
        </div>

      </div>

      <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[#F0F0F0]">
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="px-6 py-2.5 bg-black text-white text-sm font-medium rounded-xl hover:bg-black/90 transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isSaving ? (
            <>
              <i className="ri-loader-4-line w-4 h-4 flex items-center justify-center animate-spin"></i>
              <span>Saving...</span>
            </>
          ) : (
            <>
              <i className="ri-save-line w-4 h-4 flex items-center justify-center"></i>
              <span>Save Preferences</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
}