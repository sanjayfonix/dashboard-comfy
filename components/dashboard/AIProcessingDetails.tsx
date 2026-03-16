'use client';

export default function AIProcessingDetails({ job }: { job: any }) {
  const steps = [
    { label: 'Pose Detection', status: job.poseDetection },
    { label: 'Garment Warping', status: job.garmentWarping },
    { label: 'Image Compositing', status: job.imageCompositing },
    { label: 'Final Validation', status: job.finalValidation },
  ];

  const getStatusColor = (status: string) => {
    if (status === 'Success') return 'bg-blue-50 text-blue-600 border-blue-200';
    if (status === 'Processing') return 'bg-purple-50 text-purple-600 border-purple-200';
    if (status === 'Failed') return 'bg-red-50 text-red-600 border-red-200';
    return 'bg-[#F8F8F8] text-[#9CA3AF] border-[#E5E5E5]';
  };

  const getStatusIcon = (status: string) => {
    if (status === 'Success') return 'ri-checkbox-circle-fill';
    if (status === 'Processing') return 'ri-loader-4-line animate-spin';
    if (status === 'Failed') return 'ri-close-circle-fill';
    return 'ri-time-line';
  };

  return (
    <div className="bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5] p-6">
      <h2 className="text-lg font-semibold text-[#111111] mb-5">AI Processing Details</h2>
      
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg border ${getStatusColor(step.status)} flex items-center justify-center`}>
                <i className={`${getStatusIcon(step.status)} text-base w-4 h-4 flex items-center justify-center`}></i>
              </div>
              <span className="text-sm font-medium text-[#111111]">{step.label}</span>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(step.status)}`}>
              {step.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}