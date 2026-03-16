'use client';

interface EditGarmentInformationFormProps {
  garment: any;
  onChange: (field: string, value: any) => void;
  errors: any;
}

export default function EditGarmentInformationForm({ garment, onChange, errors }: EditGarmentInformationFormProps) {
  const categories = [
    'T-Shirt',
    'Hoodie',
    'Dress',
    'Jacket',
    'Pants',
    'Shorts',
    'Skirt',
    'Sweater',
    'Coat',
    'Blazer',
    'Jeans',
    'Shirt',
    'Blouse',
    'Cardigan',
    'Vest',
    'Outerwear',
    'Dresses',
    'Tops',
    'Bottoms',
    'Footwear',
    'Accessories'
  ];

  const genderTypes = ['Men', 'Women', 'Unisex'];

  return (
    <div className="bg-white rounded-2xl shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-[#F0F0F0] p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-10 h-10 bg-[#F8F8F8] rounded-xl flex items-center justify-center">
          <i className="ri-information-line text-[#6B7280] text-xl w-5 h-5 flex items-center justify-center"></i>
        </div>
        <div>
          <h3 className="text-base font-bold text-[#111111]">Garment Information</h3>
          <p className="text-sm text-[#6B7280]">Basic details and metadata</p>
        </div>
      </div>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-[#111111] mb-2">
            Garment Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={garment.name}
            onChange={(e) => onChange('name', e.target.value)}
            placeholder="Enter garment name"
            className={`w-full px-4 py-3 bg-white border ${errors.name ? 'border-red-300' : 'border-[#E5E5E5]'} rounded-xl text-sm text-[#111111] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#111111] focus:border-transparent transition-all`}
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-[#111111] mb-2">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            value={garment.category}
            onChange={(e) => onChange('category', e.target.value)}
            className={`w-full px-4 py-3 bg-white border ${errors.category ? 'border-red-300' : 'border-[#E5E5E5]'} rounded-xl text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#111111] focus:border-transparent transition-all cursor-pointer pr-8`}
          >
            <option value="">Select category</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          {errors.category && (
            <p className="mt-2 text-sm text-red-600">{errors.category}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-[#111111] mb-2">
            Gender Type
          </label>
          <select
            value={garment.gender}
            onChange={(e) => onChange('gender', e.target.value)}
            className="w-full px-4 py-3 bg-white border border-[#E5E5E5] rounded-xl text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#111111] focus:border-transparent transition-all cursor-pointer pr-8"
          >
            {genderTypes.map((gender) => (
              <option key={gender} value={gender}>{gender}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#111111] mb-2">
            Description
          </label>
          <textarea
            value={garment.description}
            onChange={(e) => onChange('description', e.target.value)}
            placeholder="Enter garment description"
            rows={4}
            maxLength={500}
            className="w-full px-4 py-3 bg-white border border-[#E5E5E5] rounded-xl text-sm text-[#111111] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#111111] focus:border-transparent transition-all resize-none"
          />
          <p className="mt-2 text-xs text-[#9CA3AF] text-right">
            {garment.description?.length || 0}/500 characters
          </p>
        </div>
      </div>
    </div>
  );
}