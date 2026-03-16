
'use client';

import Link from 'next/link';
import React from 'react';

type Job = {
  garment?: string;
  garmentCategory?: string;
  garmentStatus?: string;
};

interface ClientGarmentInfoSectionProps {
  job: Job;
}

/**
 * Returns Tailwind colour classes based on garment status.
 * Falls back to a neutral style for unknown statuses.
 */
const getStatusColor = (status: string | undefined) => {
  switch (status) {
    case 'Active':
      return 'bg-green-50 text-green-600 border-green-200';
    case 'Paused':
      return 'bg-yellow-50 text-yellow-600 border-yellow-200';
    default:
      return 'bg-[#F8F8F8] text-[#9CA3AF] border-[#E5E5E5]';
  }
};

export default function ClientGarmentInfoSection({
  job,
}: ClientGarmentInfoSectionProps) {
  // Defensive rendering – ensure required fields exist
  const garment = job.garment ?? 'N/A';
  const category = job.garmentCategory ?? 'N/A';
  const status = job.garmentStatus ?? 'Unknown';

  return (
    <div className="bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5] p-6">
      <h2 className="text-lg font-semibold text-[#111111] mb-5">
        Garment Information
      </h2>

      <div className="space-y-4">
        {/* Garment Name */}
        <div>
          <p className="text-sm text-[#6B7280] mb-1">Garment Name</p>
          <p className="text-sm font-semibold text-[#111111]">{garment}</p>
        </div>

        {/* Category */}
        <div>
          <p className="text-sm text-[#6B7280] mb-1">Category</p>
          <p className="text-sm font-semibold text-[#111111]">{category}</p>
        </div>

        {/* Status */}
        <div>
          <p className="text-sm text-[#6B7280] mb-1">Status</p>
          <span
            className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
              status
            )}`}
          >
            {status}
          </span>
        </div>
      </div>

      <Link
        href="/client/garments"
        className="flex items-center justify-center gap-2 w-full mt-6 px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-[#333333] transition-all cursor-pointer whitespace-nowrap"
      >
        <i className="ri-eye-line text-base w-4 h-4 flex items-center justify-center" />
        <span>View Garment</span>
      </Link>
    </div>
  );
}
