'use client';

const garmentData: Record<string, any[]> = {
  '1': [
    { name: 'Summer Floral Dress', status: 'Active', uploadDate: '2024-03-10', tryOns: 1243 },
    { name: 'Classic Denim Jacket', status: 'Active', uploadDate: '2024-03-09', tryOns: 987 },
    { name: 'Silk Evening Gown', status: 'Active', uploadDate: '2024-03-08', tryOns: 856 },
    { name: 'Casual Cotton Tee', status: 'Processing', uploadDate: '2024-03-15', tryOns: 0 },
    { name: 'Leather Biker Jacket', status: 'Active', uploadDate: '2024-03-07', tryOns: 734 }
  ],
  '2': [
    { name: 'Luxury Cashmere Coat', status: 'Active', uploadDate: '2024-03-11', tryOns: 1456 },
    { name: 'Designer Blazer', status: 'Active', uploadDate: '2024-03-10', tryOns: 1123 },
    { name: 'Silk Blouse', status: 'Active', uploadDate: '2024-03-09', tryOns: 892 },
    { name: 'Wool Trench Coat', status: 'Paused', uploadDate: '2024-03-05', tryOns: 567 },
    { name: 'Evening Dress', status: 'Active', uploadDate: '2024-03-08', tryOns: 789 }
  ],
  '3': [
    { name: 'Urban Hoodie', status: 'Active', uploadDate: '2024-03-12', tryOns: 923 },
    { name: 'Streetwear Jacket', status: 'Active', uploadDate: '2024-03-11', tryOns: 845 },
    { name: 'Graphic T-Shirt', status: 'Active', uploadDate: '2024-03-10', tryOns: 712 },
    { name: 'Cargo Pants', status: 'Draft', uploadDate: '2024-03-14', tryOns: 0 },
    { name: 'Bomber Jacket', status: 'Active', uploadDate: '2024-03-09', tryOns: 634 }
  ],
  '4': [
    { name: 'Haute Couture Gown', status: 'Active', uploadDate: '2024-03-13', tryOns: 1089 },
    { name: 'Tailored Suit', status: 'Active', uploadDate: '2024-03-12', tryOns: 967 },
    { name: 'Cocktail Dress', status: 'Active', uploadDate: '2024-03-11', tryOns: 823 },
    { name: 'Designer Coat', status: 'Active', uploadDate: '2024-03-10', tryOns: 756 },
    { name: 'Evening Jacket', status: 'Processing', uploadDate: '2024-03-15', tryOns: 0 }
  ],
  '5': [],
  '6': [
    { name: 'Boho Maxi Dress', status: 'Archived', uploadDate: '2024-02-20', tryOns: 456 },
    { name: 'Vintage Cardigan', status: 'Active', uploadDate: '2024-02-25', tryOns: 389 },
    { name: 'Floral Blouse', status: 'Active', uploadDate: '2024-02-28', tryOns: 312 },
    { name: 'Denim Skirt', status: 'Paused', uploadDate: '2024-03-01', tryOns: 267 },
    { name: 'Knit Sweater', status: 'Active', uploadDate: '2024-03-02', tryOns: 234 }
  ]
};

export default function GarmentCatalogSummary({ clientId }: { clientId: string }) {
  const garments = garmentData[clientId] || garmentData['1'];

  if (garments.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5] p-8 mt-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#F5F5F5] rounded-xl flex items-center justify-center flex-shrink-0">
              <i className="ri-shirt-line text-[#111111] text-lg w-5 h-5 flex items-center justify-center"></i>
            </div>
            <h2 className="text-lg font-bold text-[#111111]">Garment Catalog</h2>
          </div>
        </div>
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-[#F5F5F5] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <i className="ri-shirt-line text-[#6B7280] text-2xl w-8 h-8 flex items-center justify-center"></i>
          </div>
          <h3 className="text-lg font-bold text-[#111111] mb-2">No garments uploaded yet</h3>
          <p className="text-sm text-[#6B7280] mb-6">This client hasn't uploaded any garments to the platform.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5] mt-6">
      <div className="flex items-center justify-between px-6 py-5 border-b border-[#F0F0F0]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#F5F5F5] rounded-xl flex items-center justify-center flex-shrink-0">
            <i className="ri-shirt-line text-[#111111] text-lg w-5 h-5 flex items-center justify-center"></i>
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#111111]">Garment Catalog</h2>
            <p className="text-sm text-[#6B7280]">Recent garments uploaded by this client</p>
          </div>
        </div>
        <button className="px-5 py-2.5 bg-[#F5F5F5] border border-[#E5E5E5] text-[#111111] rounded-full text-sm font-medium hover:bg-[#EBEBEB] transition-all cursor-pointer whitespace-nowrap">
          View Full Catalog
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#FAFAFA]">
              <th className="text-left py-3 px-6 text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-wider">Garment Name</th>
              <th className="text-left py-3 px-4 text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-wider">Status</th>
              <th className="text-left py-3 px-4 text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-wider">Upload Date</th>
              <th className="text-left py-3 px-4 text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-wider">Try-On Count</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F5F5F5]">
            {garments.map((garment, index) => (
              <tr key={index} className="hover:bg-[#FAFAFA] transition-colors cursor-pointer">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#F5F5F5] rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="ri-shirt-line text-[#111111] w-5 h-5 flex items-center justify-center"></i>
                    </div>
                    <p className="text-sm font-semibold text-[#111111]">{garment.name}</p>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
                    garment.status === 'Active'
                      ? 'bg-[#111111] text-white'
                      : garment.status === 'Processing'
                      ? 'bg-[#F5F5F5] text-[#111111] border border-[#EBEBEB]'
                      : 'bg-[#F5F5F5] text-[#6B7280] border border-[#EBEBEB]'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      garment.status === 'Active' ? 'bg-white/60' : 'bg-[#9CA3AF]'
                    }`}></span>
                    {garment.status}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <p className="text-sm text-[#111111]">{garment.uploadDate}</p>
                </td>
                <td className="py-4 px-4">
                  <p className="text-sm font-semibold text-[#111111]">{garment.tryOns.toLocaleString()}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}