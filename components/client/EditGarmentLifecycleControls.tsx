'use client';

interface EditGarmentLifecycleControlsProps {
  garment: any;
  onActivate: () => void;
  onPause: () => void;
  onArchive: () => void;
}

export default function EditGarmentLifecycleControls({ 
  garment, 
  onActivate, 
  onPause, 
  onArchive 
}: EditGarmentLifecycleControlsProps) {
  return (
    <div className="bg-white rounded-2xl shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-[#F0F0F0] p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-10 h-10 bg-[#F8F8F8] rounded-xl flex items-center justify-center">
          <i className="ri-refresh-line text-[#6B7280] text-xl w-5 h-5 flex items-center justify-center"></i>
        </div>
        <div>
          <h3 className="text-base font-bold text-[#111111]">Garment Lifecycle Controls</h3>
          <p className="text-sm text-[#6B7280]">Manage garment status and availability</p>
        </div>
      </div>

      <div className="space-y-4">
        {garment.status !== 'Active' && (
          <button
            onClick={onActivate}
            className="w-full px-5 py-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl text-sm font-medium hover:bg-emerald-100 transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
          >
            <i className="ri-play-circle-line w-5 h-5 flex items-center justify-center"></i>
            <span>Activate Garment</span>
          </button>
        )}

        {garment.status === 'Active' && (
          <button
            onClick={onPause}
            className="w-full px-5 py-3 bg-amber-50 border border-amber-200 text-amber-700 rounded-xl text-sm font-medium hover:bg-amber-100 transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
          >
            <i className="ri-pause-circle-line w-5 h-5 flex items-center justify-center"></i>
            <span>Pause Garment</span>
          </button>
        )}

        {garment.status !== 'Archived' && (
          <button
            onClick={onArchive}
            className="w-full px-5 py-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium hover:bg-red-100 transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
          >
            <i className="ri-archive-line w-5 h-5 flex items-center justify-center"></i>
            <span>Archive Garment</span>
          </button>
        )}

        <div className="mt-4 p-4 bg-[#F8F8F8] rounded-xl">
          <p className="text-xs text-[#6B7280] leading-relaxed">
            {garment.status === 'Active' && 'This garment is currently active and available for virtual try-on. You can pause it to temporarily disable try-on functionality.'}
            {garment.status === 'Paused' && 'This garment is currently paused. Activate it to make it available for virtual try-on again.'}
            {garment.status === 'Draft' && 'This garment is in draft mode. Activate it to make it available for virtual try-on.'}
            {garment.status === 'Processing' && 'This garment is being processed. Once processing is complete, you can activate it.'}
            {garment.status === 'Archived' && 'This garment is archived and cannot be used for try-on. You can restore it by changing its status.'}
          </p>
        </div>
      </div>
    </div>
  );
}