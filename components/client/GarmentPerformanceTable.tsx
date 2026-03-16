'use client';

import { useRouter } from 'next/navigation';

const garments = [
  { id: 'G-1001', name: 'Summer Floral Dress', status: 'Active', tryOnCount: 1842, uploadDate: 'Dec 15, 2024', image: 'https://readdy.ai/api/search-image?query=elegant%20summer%20floral%20dress%20on%20white%20background%20product%20photography%20clean%20minimal%20style%20professional%20ecommerce%20fashion%20clothing%20apparel%20high%20quality%20studio%20lighting%20soft%20shadows&width=80&height=80&seq=garment1&orientation=squarish' },
  { id: 'G-1002', name: 'Classic Denim Jacket', status: 'Active', tryOnCount: 1567, uploadDate: 'Dec 18, 2024', image: 'https://readdy.ai/api/search-image?query=classic%20blue%20denim%20jacket%20on%20white%20background%20product%20photography%20clean%20minimal%20style%20professional%20ecommerce%20fashion%20clothing%20apparel%20high%20quality%20studio%20lighting%20soft%20shadows&width=80&height=80&seq=garment2&orientation=squarish' },
  { id: 'G-1003', name: 'Leather Ankle Boots', status: 'Active', tryOnCount: 1423, uploadDate: 'Dec 20, 2024', image: 'https://readdy.ai/api/search-image?query=brown%20leather%20ankle%20boots%20on%20white%20background%20product%20photography%20clean%20minimal%20style%20professional%20ecommerce%20fashion%20footwear%20shoes%20high%20quality%20studio%20lighting%20soft%20shadows&width=80&height=80&seq=garment3&orientation=squarish' },
  { id: 'G-1004', name: 'Silk Evening Gown', status: 'Active', tryOnCount: 1289, uploadDate: 'Dec 22, 2024', image: 'https://readdy.ai/api/search-image?query=elegant%20silk%20evening%20gown%20on%20white%20background%20product%20photography%20clean%20minimal%20style%20professional%20ecommerce%20fashion%20clothing%20apparel%20high%20quality%20studio%20lighting%20soft%20shadows&width=80&height=80&seq=garment4&orientation=squarish' },
  { id: 'G-1005', name: 'Casual White Sneakers', status: 'Inactive', tryOnCount: 1156, uploadDate: 'Dec 25, 2024', image: 'https://readdy.ai/api/search-image?query=white%20casual%20sneakers%20on%20white%20background%20product%20photography%20clean%20minimal%20style%20professional%20ecommerce%20fashion%20footwear%20shoes%20high%20quality%20studio%20lighting%20soft%20shadows&width=80&height=80&seq=garment5&orientation=squarish' },
];

export default function GarmentPerformanceTable() {
  const router = useRouter();

  return (
    <div className="bg-white rounded-2xl shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-[#F0F0F0] overflow-hidden">
      <div className="px-6 py-4 border-b border-[#F0F0F0]">
        <h2 className="text-base font-semibold text-[#111111]">Garment Performance</h2>
        <p className="text-xs text-[#9CA3AF] mt-0.5">Top garments used in try-ons</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F8F8F8] border-b border-[#F0F0F0]">
              <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Garment</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Status</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Try-On Count</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Upload Date</th>
              <th className="text-right px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F0F0F0]">
            {garments.map((garment) => (
              <tr key={garment.id} className="hover:bg-[#F8F8F8] transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={garment.image}
                      alt={garment.name}
                      className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                    />
                    <div>
                      <p className="text-sm font-medium text-[#111111]">{garment.name}</p>
                      <p className="text-xs text-[#9CA3AF]">{garment.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                    garment.status === 'Active' 
                      ? 'bg-emerald-50 text-emerald-600' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      garment.status === 'Active' ? 'bg-emerald-500' : 'bg-gray-400'
                    }`}></span>
                    {garment.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm font-medium text-[#111111]">{garment.tryOnCount.toLocaleString()}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-[#6B7280]">{garment.uploadDate}</p>
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => router.push(`/client/garments/${garment.id}`)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F8F8F8] hover:bg-black hover:text-white rounded-lg text-xs font-medium text-[#111111] transition-all cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-eye-line w-3.5 h-3.5 flex items-center justify-center"></i>
                    <span>View Garment</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}