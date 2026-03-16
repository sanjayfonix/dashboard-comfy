'use client';

import { useRouter } from 'next/navigation';

const garments = [
  { id: 'G-1001', name: 'Summer Floral Dress', tryOnCount: 1842, successRate: 96.5, lastTryOn: 'Jan 23, 2025', image: 'https://readdy.ai/api/search-image?query=elegant%20summer%20floral%20dress%20on%20white%20background%20product%20photography%20clean%20minimal%20style%20professional%20ecommerce%20fashion%20clothing%20apparel%20high%20quality%20studio%20lighting%20soft%20shadows&width=60&height=60&seq=popgarment1&orientation=squarish' },
  { id: 'G-1002', name: 'Classic Denim Jacket', tryOnCount: 1567, successRate: 94.8, lastTryOn: 'Jan 23, 2025', image: 'https://readdy.ai/api/search-image?query=classic%20blue%20denim%20jacket%20on%20white%20background%20product%20photography%20clean%20minimal%20style%20professional%20ecommerce%20fashion%20clothing%20apparel%20high%20quality%20studio%20lighting%20soft%20shadows&width=60&height=60&seq=popgarment2&orientation=squarish' },
  { id: 'G-1003', name: 'Leather Ankle Boots', tryOnCount: 1423, successRate: 92.3, lastTryOn: 'Jan 22, 2025', image: 'https://readdy.ai/api/search-image?query=brown%20leather%20ankle%20boots%20on%20white%20background%20product%20photography%20clean%20minimal%20style%20professional%20ecommerce%20fashion%20footwear%20shoes%20high%20quality%20studio%20lighting%20soft%20shadows&width=60&height=60&seq=popgarment3&orientation=squarish' },
  { id: 'G-1004', name: 'Silk Evening Gown', tryOnCount: 1289, successRate: 95.7, lastTryOn: 'Jan 22, 2025', image: 'https://readdy.ai/api/search-image?query=elegant%20silk%20evening%20gown%20on%20white%20background%20product%20photography%20clean%20minimal%20style%20professional%20ecommerce%20fashion%20clothing%20apparel%20high%20quality%20studio%20lighting%20soft%20shadows&width=60&height=60&seq=popgarment4&orientation=squarish' },
  { id: 'G-1005', name: 'Casual White Sneakers', tryOnCount: 1156, successRate: 93.1, lastTryOn: 'Jan 21, 2025', image: 'https://readdy.ai/api/search-image?query=white%20casual%20sneakers%20on%20white%20background%20product%20photography%20clean%20minimal%20style%20professional%20ecommerce%20fashion%20footwear%20shoes%20high%20quality%20studio%20lighting%20soft%20shadows&width=60&height=60&seq=popgarment5&orientation=squarish' },
];

export default function PopularGarmentsTable() {
  const router = useRouter();

  return (
    <div className="bg-white rounded-2xl shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-[#F0F0F0] overflow-hidden">
      <div className="px-6 py-4 border-b border-[#F0F0F0]">
        <h2 className="text-base font-semibold text-[#111111]">Popular Garments</h2>
        <p className="text-xs text-[#9CA3AF] mt-0.5">Garments with highest engagement</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F8F8F8] border-b border-[#F0F0F0]">
              <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Garment</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Try-On Count</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Success Rate</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Last Try-On</th>
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
                  <p className="text-sm font-medium text-[#111111]">{garment.tryOnCount.toLocaleString()}</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 max-w-[80px] h-1.5 bg-[#F0F0F0] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 rounded-full"
                        style={{ width: `${garment.successRate}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-[#111111]">{garment.successRate}%</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-[#6B7280]">{garment.lastTryOn}</p>
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