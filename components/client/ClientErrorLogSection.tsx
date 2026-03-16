'use client';
import React from 'react';

interface Job {
  /** Reason for the failure – may be undefined or null */
  errorReason?: string | null;
  /** Timestamp of the error – may be undefined or null */
  errorTimestamp?: string | null;
  /** Raw error log – may be undefined or null */
  errorLog?: string | null;
}

/**
 * Displays error information for a given job.
 * The component is defensive: if any of the job properties are missing,
 * it falls back to a friendly placeholder instead of throwing.
 */
export default function ClientErrorLogSection({
  job,
}: {
  job: Job;
}) {
  // Defensive defaults – avoid rendering "undefined" or causing runtime errors
  const errorReason = job?.errorReason ?? 'N/A';
  const errorTimestamp = job?.errorTimestamp ?? 'N/A';
  const errorLog = job?.errorLog ?? 'No log available';

  return (
    <div className="bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5] p-6">
      <h2 className="text-lg font-semibold text-[#111111] mb-5">Error Logs</h2>

      <div className="space-y-4">
        {/* Failure Reason */}
        <div>
          <p className="text-sm text-[#6B7280] mb-1">Failure Reason</p>
          <p className="text-sm font-semibold text-red-600">{errorReason}</p>
        </div>

        {/* Timestamp */}
        <div>
          <p className="text-sm text-[#6B7280] mb-1">Timestamp</p>
          <p className="text-sm font-semibold text-[#111111]">{errorTimestamp}</p>
        </div>

        {/* System Error Log */}
        <div>
          <p className="text-sm text-[#6B7280] mb-2">System Error Log</p>
          <div className="bg-[#F8F8F8] rounded-xl p-4 font-mono text-xs text-[#111111] whitespace-pre-wrap">
            {errorLog}
          </div>
        </div>
      </div>
    </div>
  );
}
