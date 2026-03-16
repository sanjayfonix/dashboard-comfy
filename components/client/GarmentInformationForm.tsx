'use client';

interface GarmentInformationFormProps {
  garmentName: string;
  category: string;
  description: string;
  status: string;
  allowTryOn: boolean;
  gender: string;
  onGarmentNameChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onAllowTryOnChange: (value: boolean) => void;
  onGenderChange: (value: string) => void;
  errors: {[key: string]: string};
}

const categories = [
  'T-Shirt',
  'Hoodie',
  'Dress',
  'Jacket',
  'Pants',
  'Skirt',
  'Sweater',
  'Coat',
  'Shorts',
  'Blazer'
];

const statuses = ['Draft', 'Active', 'Paused'];
const genders = ['Men', 'Women', 'Unisex'];

export default function GarmentInformationForm({
  garmentName,
  category,
  description,
  status,
  allowTryOn,
  gender,
  onGarmentNameChange,
  onCategoryChange,
  onDescriptionChange,
  onStatusChange,
  onAllowTryOnChange,
  onGenderChange,
  errors
}: GarmentInformationFormProps) {
  return (
    <div className="bg-white rounded-2xl shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-[#F0F0F0] p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-[#111111] mb-1">Garment Information</h2>
        <p className="text-sm text-[#6B7280]">Provide details about your garment.</p>
      </div>

      <div className="space-y-5">
        
        <div>
          <label className="block text-sm font-medium text-[#111111] mb-2">
            Garment Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={garmentName}
            onChange={(e) => onGarmentNameChange(e.target.value)}
            placeholder="e.g., Summer Floral Dress"
            className={`w-full px-4 py-2.5 bg-[#F8F8F8] border rounded-xl text-sm text-[#111111] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#111111] focus:bg-white transition-all ${
              errors.name ? 'border-red-300 bg-red-50' : 'border-transparent'
            }`}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <i className="ri-error-warning-line w-3 h-3 flex items-center justify-center"></i>
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-[#111111] mb-2">
            Category <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={category}
              onChange={(e) => onCategoryChange(e.target.value)}
              className={`w-full appearance-none px-4 pr-10 py-2.5 bg-[#F8F8F8] border rounded-xl text-sm text-[#111111] focus:outline-none focus:border-[#111111] focus:bg-white transition-all cursor-pointer ${
                errors.category ? 'border-red-300 bg-red-50' : 'border-transparent'
              }`}
            >
              <option value="">Select a category</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <i className="ri-arrow-down-s-line absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] w-4 h-4 flex items-center justify-center pointer-events-none"></i>
          </div>
          {errors.category && (
            <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <i className="ri-error-warning-line w-3 h-3 flex items-center justify-center"></i>
              {errors.category}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-[#111111] mb-2">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => onDescriptionChange(e.target.value)}
            placeholder="Add a detailed description of the garment..."
            rows={4}
            className="w-full px-4 py-2.5 bg-[#F8F8F8] border border-transparent rounded-xl text-sm text-[#111111] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#111111] focus:bg-white transition-all resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#111111] mb-2">
            Garment Status
          </label>
          <div className="relative">
            <select
              value={status}
              onChange={(e) => onStatusChange(e.target.value)}
              className="w-full appearance-none px-4 pr-10 py-2.5 bg-[#F8F8F8] border border-transparent rounded-xl text-sm text-[#111111] focus:outline-none focus:border-[#111111] focus:bg-white transition-all cursor-pointer"
            >
              {statuses.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <i className="ri-arrow-down-s-line absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] w-4 h-4 flex items-center justify-center pointer-events-none"></i>
          </div>
        </div>

        <div className="pt-5 border-t border-[#F0F0F0]">
          <h3 className="text-base font-semibold text-[#111111] mb-4">Try-On Configuration</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[#111111]">Allow Try-On</p>
                <p className="text-xs text-[#6B7280]">Enable customers to try on this garment</p>
              </div>
              <button
                onClick={() => onAllowTryOnChange(!allowTryOn)}
                className={`relative w-12 h-6 rounded-full transition-all cursor-pointer ${
                  allowTryOn ? 'bg-emerald-500' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    allowTryOn ? 'translate-x-6' : 'translate-x-0'
                  }`}
                ></span>
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#111111] mb-2">
                Garment Gender
              </label>
              <div className="relative">
                <select
                  value={gender}
                  onChange={(e) => onGenderChange(e.target.value)}
                  className="w-full appearance-none px-4 pr-10 py-2.5 bg-[#F8F8F8] border border-transparent rounded-xl text-sm text-[#111111] focus:outline-none focus:border-[#111111] focus:bg-white transition-all cursor-pointer"
                >
                  {genders.map(g => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
                <i className="ri-arrow-down-s-line absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] w-4 h-4 flex items-center justify-center pointer-events-none"></i>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}