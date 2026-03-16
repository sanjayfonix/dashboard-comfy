'use client';

import { useState } from 'react';

export default function PlatformConfigurationForm() {
  const [maxConcurrentJobs, setMaxConcurrentJobs] = useState(50);
  const [storageDuration, setStorageDuration] = useState('48 hours');
  const [maxImageSize, setMaxImageSize] = useState(10);
  const [jobTimeout, setJobTimeout] = useState(300);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5]">
      <h2 className="text-lg font-semibold text-[#111111] mb-1">Try-On Processing Configuration</h2>
      <p className="text-sm text-[#6B7280] mb-6">Configure AI try-on job processing settings</p>
      
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-[#111111] mb-2">Max Concurrent Try-On Jobs</label>
          <input
            type="number"
            value={maxConcurrentJobs}
            onChange={(e) => setMaxConcurrentJobs(Number(e.target.value))}
            className="w-full px-4 py-2.5 bg-[#F8F8F8] border border-[#E5E5E5] rounded-xl text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 transition-all"
          />
          <p className="text-xs text-[#9CA3AF] mt-1.5">Maximum number of jobs that can be processed simultaneously</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#111111] mb-2">Default Result Storage Duration</label>
          <div className="relative">
            <select
              value={storageDuration}
              onChange={(e) => setStorageDuration(e.target.value)}
              className="w-full px-4 py-2.5 pr-8 bg-[#F8F8F8] border border-[#E5E5E5] rounded-xl text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 transition-all appearance-none cursor-pointer"
            >
              <option>24 hours</option>
              <option>48 hours</option>
              <option>72 hours</option>
              <option>7 days</option>
              <option>30 days</option>
            </select>
            <i className="ri-arrow-down-s-line absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none w-5 h-5 flex items-center justify-center"></i>
          </div>
          <p className="text-xs text-[#9CA3AF] mt-1.5">How long try-on results are stored before automatic deletion</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#111111] mb-2">Max Upload Image Size (MB)</label>
          <input
            type="number"
            value={maxImageSize}
            onChange={(e) => setMaxImageSize(Number(e.target.value))}
            className="w-full px-4 py-2.5 bg-[#F8F8F8] border border-[#E5E5E5] rounded-xl text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 transition-all"
          />
          <p className="text-xs text-[#9CA3AF] mt-1.5">Maximum file size allowed for user photo uploads</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#111111] mb-2">AI Job Timeout Duration (seconds)</label>
          <input
            type="number"
            value={jobTimeout}
            onChange={(e) => setJobTimeout(Number(e.target.value))}
            className="w-full px-4 py-2.5 bg-[#F8F8F8] border border-[#E5E5E5] rounded-xl text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 transition-all"
          />
          <p className="text-xs text-[#9CA3AF] mt-1.5">Maximum time allowed for a single try-on job before timeout</p>
        </div>
      </div>
    </div>
  );
}