'use client';
import React from 'react';

interface Job {
  id?: string | number;
  garment?: string;
  credits?: number;
  status?: string;
  submitted?: string;
  completed?: string;
  processingTime?: string;
}

/**
 * ClientJobInformationCard – displays a summary of a job.
 *
 * The component now:
 *  • Uses real JSX tags instead of escaped HTML entities.
 *  • Validates the `job` prop with a TypeScript interface.
 *  • Handles missing or incomplete data gracefully (shows “‑” placeholder).
 *  • Keeps the original styling logic unchanged.
 */
export default function ClientJobInformationCard({
  job,
}: {
  job: Job | null | undefined;
}) {
  // Defensive fallback when job data is not available
  if (!job) {
    return (
      <div className="bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5] p-6">
        <h2 className="text-lg font-semibold text-[#111111] mb-5">
          Job Information
        </h2>
        <p className="text-sm text-[#9CA3AF]">No job data available.</p>
      </div>
    );
  }

  const getStatusColor = (status = ''): string => {
    switch (status) {
      case 'Completed':
        return 'bg-green-50 text-green-600 border-green-200';
      case 'Processing':
        return 'bg-blue-50 text-blue-600 border-blue-200';
      case 'Failed':
        return 'bg-red-50 text-red-600 border-red-200';
      default:
        return 'bg-[#F8F8F8] text-[#9CA3AF] border-[#E5E5E5]';
    }
  };

  // Helper to render a field with a fallback placeholder
  const renderField = (label: string, value: React.ReactNode) => (
    <div>
      <p className="text-sm text-[#6B7280] mb-1">{label}</p>
      <p className="text-sm font-semibold text-[#111111]">
        {value ?? <span className="text-[#9CA3AF]">‑</span>}
      </p>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5] p-6">
      <h2 className="text-lg font-semibold text-[#111111] mb-5">
        Job Information
      </h2>

      <div className="grid grid-cols-2 gap-6">
        {renderField('Job ID', job.id)}
        {renderField('Garment Name', job.garment)}
        {renderField('Credits Used', job.credits ? `${job.credits} credits` : null)}
        <div>
          <p className="text-sm text-[#6B7280] mb-1">Job Status</p>
          <span
            className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
              job.status
            )}`}
          >
            {job.status ?? <span className="text-[#9CA3AF]">‑</span>}
          </span>
        </div>
        {renderField('Submitted Time', job.submitted)}
        {renderField('Completed Time', job.completed)}
        {renderField('Processing Duration', job.processingTime)}
      </div>
    </div>
  );
}
