'use client';

interface ArchiveGarmentModalProps {
  garment: any;
  onClose: () => void;
  onConfirm: () => void;
}

export default function ArchiveGarmentModal({ garment, onClose, onConfirm }: ArchiveGarmentModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-[0px_20px_60px_rgba(0,0,0,0.20)] max-w-md w-full overflow-hidden">
        
        <div className="px-6 py-5 border-b border-[#F0F0F0]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <i className="ri-archive-line text-red-600 text-lg w-5 h-5 flex items-center justify-center"></i>
            </div>
            <h3 className="text-lg font-bold text-[#111111]">Archive Garment</h3>
          </div>
        </div>

        <div className="px-6 py-5">
          <p className="text-sm text-[#6B7280] mb-4">
            Are you sure you want to archive <span className="font-semibold text-[#111111]">{garment.name}</span>?
          </p>
          <p className="text-sm text-[#6B7280]">
            This garment will no longer be available for virtual try-on. You can restore it later from the archived garments section.
          </p>
        </div>

        <div className="px-6 py-4 bg-[#F8F8F8] flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-white border border-[#E5E5E5] text-[#111111] rounded-full text-sm font-medium hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-5 py-2.5 bg-red-600 text-white rounded-full text-sm font-medium hover:bg-red-700 transition-all cursor-pointer whitespace-nowrap"
          >
            Archive Garment
          </button>
        </div>

      </div>
    </div>
  );
}