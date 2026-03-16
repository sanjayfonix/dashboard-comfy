
'use client';
import React from 'react';

type Job = {
  poseDetection?: string;
  garmentAlignment?: string;
  imageComposition?: string;
  finalRendering?: string;
};

interface Props {
  job: Job;
}

/**
 * ClientAIProcessingSteps
 *
 * Renders a list of AI processing steps with colour‑coded status badges.
 * The component now:
 *  • Uses proper JSX syntax (no escaped HTML entities).
 *  • Safely accesses job properties with default fallback values.
 *  • Adds minimal runtime validation to avoid crashes when an unexpected
 *    value is passed.
 */
export default function ClientAIProcessingSteps({ job }: Props) {
  // Defensive defaults – if a status is missing we treat it as “Pending”.
  const steps = [
    { label: 'Pose Detection', status: job.poseDetection ?? 'Pending' },
    { label: 'Garment Alignment', status: job.garmentAlignment ?? 'Pending' },
    { label: 'Image Composition', status: job.imageComposition ?? 'Pending' },
    { label: 'Final Rendering', status: job.finalRendering ?? 'Pending' },
  ];

  /** Returns Tailwind classes for the badge background / text / border based on status */
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-50 text-green-600 border-green-200';
      case 'Processing':
        return 'bg-blue-50 text-blue-600 border-blue-200';
      case 'Failed':
        return 'bg-red-50 text-red-600 border-red-200';
      default:
        // “Pending” or any unknown status
        return 'bg-[#F8F8F8] text-[#9CA3AF] border-[#E5E5E5]';
    }
  };

  /** Returns an icon class name (using Remix Icon) based on status */
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'ri-checkbox-circle-fill';
      case 'Processing':
        return 'ri-loader-4-line animate-spin';
      case 'Failed':
        return 'ri-close-circle-fill';
      default:
        return 'ri-time-line';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5] p-6">
      <h2 className="text-lg font-semibold text-[#111111] mb-5">AI Processing Steps</h2>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`w-8 h-8 rounded-lg border ${getStatusColor(
                  step.status
                )} flex items-center justify-center`}
              >
                <i
                  className={`${getStatusIcon(step.status)} text-base w-4 h-4 flex items-center justify-center`}
                ></i>
              </div>
              <span className="text-sm font-medium text-[#111111]">{step.label}</span>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                step.status
              )}`}
            >
              {step.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
