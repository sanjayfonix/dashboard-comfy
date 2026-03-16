'use client';

interface ProcessingStatusPanelProps {
  currentStage: number;
}

export default function ProcessingStatusPanel({ currentStage }: ProcessingStatusPanelProps) {
  const stages = [
    { id: 1, name: 'Image Validation', icon: 'ri-checkbox-circle-line' },
    { id: 2, name: 'Mask Generation', icon: 'ri-scissors-cut-line' },
    { id: 3, name: 'Garment Normalization', icon: 'ri-contrast-2-line' },
    { id: 4, name: 'Ready for Try-On', icon: 'ri-check-double-line' }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-[#F0F0F0] p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
          <i className="ri-loader-4-line text-amber-600 text-xl w-5 h-5 flex items-center justify-center animate-spin"></i>
        </div>
        <div>
          <h3 className="text-base font-bold text-[#111111]">Processing Pipeline</h3>
          <p className="text-sm text-[#6B7280]">Preparing garment for AI try-on</p>
        </div>
      </div>

      <div className="space-y-4">
        {stages.map((stage, index) => {
          const isComplete = stage.id < currentStage;
          const isCurrent = stage.id === currentStage;
          const isPending = stage.id > currentStage;

          return (
            <div key={stage.id} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  isComplete ? 'bg-emerald-50' : isCurrent ? 'bg-amber-50' : 'bg-[#F8F8F8]'
                }`}>
                  {isComplete ? (
                    <i className="ri-check-line text-emerald-600 text-lg w-5 h-5 flex items-center justify-center"></i>
                  ) : isCurrent ? (
                    <i className={`${stage.icon} text-amber-600 text-lg w-5 h-5 flex items-center justify-center`}></i>
                  ) : (
                    <i className={`${stage.icon} text-[#9CA3AF] text-lg w-5 h-5 flex items-center justify-center`}></i>
                  )}
                </div>
                {index < stages.length - 1 && (
                  <div className={`w-0.5 h-8 ${isComplete ? 'bg-emerald-200' : 'bg-[#E5E5E5]'}`}></div>
                )}
              </div>
              <div className="flex-1 pt-2">
                <p className={`text-sm font-medium ${
                  isComplete ? 'text-emerald-600' : isCurrent ? 'text-[#111111]' : 'text-[#9CA3AF]'
                }`}>
                  {stage.name}
                </p>
                {isCurrent && (
                  <p className="text-xs text-[#6B7280] mt-1">In progress...</p>
                )}
                {isComplete && (
                  <p className="text-xs text-emerald-600 mt-1">Complete</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}