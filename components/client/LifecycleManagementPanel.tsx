'use client';

interface LifecycleManagementPanelProps {
  garment: any;
  onActivate: () => void;
  onPause: () => void;
  onArchive: () => void;
}

export default function LifecycleManagementPanel({ 
  garment, 
  onActivate, 
  onPause, 
  onArchive 
}: LifecycleManagementPanelProps) {
  return (
    <div className="bg-white rounded-2xl shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-[#F0F0F0] p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-10 h-10 bg-[#F8F8F8] rounded-xl flex items-center justify-center">
          <i className="ri-refresh-line text-[#6B7280] text-xl w-5 h-5 flex items-center justify-center"></i>
        </div>
        <div>
          <h3 className="text-base font-bold text-[#111111]">Lifecycle Management</h3>
          <p className="text-sm text-[#6B7280]">Control garment availability</p>
        </div>
      </div>

      <div className="space-y-3">
        {garment.status === 'Draft' && (
          <button
            onClick={onActivate}
            className="w-full px-5 py-3 bg-black text-white rounded-xl text-sm font-medium hover:bg-[#111111] transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
          >
            <i className="ri-play-circle-line w-5 h-5 flex items-center justify-center"></i>
            <span>Activate Garment</span>
          </button>
        )}

        {garment.status === 'Active' && (
          <button
            onClick={onPause}
            className="w-full px-5 py-3 bg-[#F8F8F8] text-[#111111] rounded-xl text-sm font-medium hover:bg-[#E5E5E5] transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
          >
            <i className="ri-pause-circle-line w-5 h-5 flex items-center justify-center"></i>
            <span>Pause Garment</span>
          </button>
        )}

        {garment.status === 'Paused' && (
          <button
            onClick={onActivate}
            className="w-full px-5 py-3 bg-black text-white rounded-xl text-sm font-medium hover:bg-[#111111] transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
          >
            <i className="ri-play-circle-line w-5 h-5 flex items-center justify-center"></i>
            <span>Activate Garment</span>
          </button>
        )}

        {garment.status !== 'Archived' && garment.status !== 'Processing' && (
          <button
            onClick={onArchive}
            className="w-full px-5 py-3 bg-white border border-red-200 text-red-600 rounded-xl text-sm font-medium hover:bg-red-50 transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
          >
            <i className="ri-archive-line w-5 h-5 flex items-center justify-center"></i>
            <span>Archive Garment</span>
          </button>
        )}

        <div className="pt-3 border-t border-[#F0F0F0]">
          <div className="flex items-start gap-3">
            <i className="ri-information-line text-[#6B7280] text-lg w-5 h-5 flex items-center justify-center mt-0.5"></i>
            <div>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                {garment.status === 'Active' && 'This garment is currently available for virtual try-on. Pausing will temporarily disable try-on functionality.'}
                {garment.status === 'Paused' && 'This garment is paused and unavailable for try-on. Activate it to make it available again.'}
                {garment.status === 'Draft' && 'This garment is in draft mode. Activate it to make it available for virtual try-on.'}
                {garment.status === 'Processing' && 'This garment is being processed. It will be available once processing is complete.'}
                {garment.status === 'Archived' && 'This garment has been archived and is no longer available for try-on.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}