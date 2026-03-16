'use client';

interface EditTryOnConfigurationSectionProps {
  garment: any;
  onChange: (field: string, value: any) => void;
}

export default function EditTryOnConfigurationSection({ garment, onChange }: EditTryOnConfigurationSectionProps) {
  const statusOptions = ['Active', 'Paused'];

  return (
    <div className="bg-white rounded-2xl shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-[#F0F0F0] p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-10 h-10 bg-[#F8F8F8] rounded-xl flex items-center justify-center">
          <i className="ri-settings-3-line text-[#6B7280] text-xl w-5 h-5 flex items-center justify-center"></i>
        </div>
        <div>
          <h3 className="text-base font-bold text-[#111111]">Try-On Configuration</h3>
          <p className="text-sm text-[#6B7280]">Virtual try-on settings</p>
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex items-center justify-between py-3 border-b border-[#F0F0F0]">
          <div>
            <p className="text-sm font-medium text-[#111111] mb-1">Allow Try-On</p>
            <p className="text-sm text-[#6B7280]">Enable virtual try-on feature for this garment</p>
          </div>
          <button
            onClick={() => onChange('allowTryOn', !garment.allowTryOn)}
            className={`relative w-12 h-6 rounded-full transition-all cursor-pointer ${
              garment.allowTryOn ? 'bg-[#111111]' : 'bg-[#E5E5E5]'
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                garment.allowTryOn ? 'translate-x-6' : 'translate-x-0'
              }`}
            ></span>
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#111111] mb-2">
            Default Status
          </label>
          <select
            value={garment.status === 'Processing' || garment.status === 'Draft' || garment.status === 'Archived' ? 'Active' : garment.status}
            onChange={(e) => onChange('status', e.target.value)}
            className="w-full px-4 py-3 bg-white border border-[#E5E5E5] rounded-xl text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#111111] focus:border-transparent transition-all cursor-pointer pr-8"
          >
            {statusOptions.map((status) => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
          <p className="mt-2 text-xs text-[#9CA3AF]">
            Set the default status for this garment in the catalog
          </p>
        </div>
      </div>
    </div>
  );
}