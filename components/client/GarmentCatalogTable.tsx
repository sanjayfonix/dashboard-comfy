'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import GarmentActionMenu from './GarmentActionMenu';
import ArchiveGarmentModal from './ArchiveGarmentModal';

const garments = [
  {
    id: 'G-1001',
    name: 'Summer Floral Dress',
    category: 'Dresses',
    status: 'Active',
    tryOnCount: 1842,
    uploadDate: 'Dec 15, 2024',
    image: 'https://readdy.ai/api/search-image?query=elegant%20summer%20floral%20dress%20on%20white%20background%20product%20photography%20clean%20minimal%20style%20professional%20ecommerce%20fashion%20clothing%20apparel%20high%20quality%20studio%20lighting%20soft%20shadows%20simple%20backdrop&width=80&height=80&seq=garmentcat1&orientation=squarish'
  },
  {
    id: 'G-1002',
    name: 'Classic Denim Jacket',
    category: 'Outerwear',
    status: 'Active',
    tryOnCount: 1567,
    uploadDate: 'Dec 18, 2024',
    image: 'https://readdy.ai/api/search-image?query=classic%20blue%20denim%20jacket%20on%20white%20background%20product%20photography%20clean%20minimal%20style%20professional%20ecommerce%20fashion%20clothing%20apparel%20high%20quality%20studio%20lighting%20soft%20shadows%20simple%20backdrop&width=80&height=80&seq=garmentcat2&orientation=squarish'
  },
  {
    id: 'G-1003',
    name: 'Leather Ankle Boots',
    category: 'Footwear',
    status: 'Active',
    tryOnCount: 1423,
    uploadDate: 'Dec 20, 2024',
    image: 'https://readdy.ai/api/search-image?query=brown%20leather%20ankle%20boots%20on%20white%20background%20product%20photography%20clean%20minimal%20style%20professional%20ecommerce%20fashion%20footwear%20shoes%20high%20quality%20studio%20lighting%20soft%20shadows%20simple%20backdrop&width=80&height=80&seq=garmentcat3&orientation=squarish'
  },
  {
    id: 'G-1004',
    name: 'Silk Evening Gown',
    category: 'Dresses',
    status: 'Processing',
    tryOnCount: 0,
    uploadDate: 'Dec 22, 2024',
    image: 'https://readdy.ai/api/search-image?query=elegant%20silk%20evening%20gown%20on%20white%20background%20product%20photography%20clean%20minimal%20style%20professional%20ecommerce%20fashion%20clothing%20apparel%20high%20quality%20studio%20lighting%20soft%20shadows%20simple%20backdrop&width=80&height=80&seq=garmentcat4&orientation=squarish',
    processingStage: 'Model Preparation'
  },
  {
    id: 'G-1005',
    name: 'Casual White Sneakers',
    category: 'Footwear',
    status: 'Paused',
    tryOnCount: 1156,
    uploadDate: 'Dec 25, 2024',
    image: 'https://readdy.ai/api/search-image?query=white%20casual%20sneakers%20on%20white%20background%20product%20photography%20clean%20minimal%20style%20professional%20ecommerce%20fashion%20footwear%20shoes%20high%20quality%20studio%20lighting%20soft%20shadows%20simple%20backdrop&width=80&height=80&seq=garmentcat5&orientation=squarish'
  },
  {
    id: 'G-1006',
    name: 'Wool Trench Coat',
    category: 'Outerwear',
    status: 'Active',
    tryOnCount: 987,
    uploadDate: 'Dec 28, 2024',
    image: 'https://readdy.ai/api/search-image?query=beige%20wool%20trench%20coat%20on%20white%20background%20product%20photography%20clean%20minimal%20style%20professional%20ecommerce%20fashion%20clothing%20apparel%20high%20quality%20studio%20lighting%20soft%20shadows%20simple%20backdrop&width=80&height=80&seq=garmentcat6&orientation=squarish'
  },
  {
    id: 'G-1007',
    name: 'Striped Cotton Shirt',
    category: 'Tops',
    status: 'Draft',
    tryOnCount: 0,
    uploadDate: 'Dec 30, 2024',
    image: 'https://readdy.ai/api/search-image?query=striped%20cotton%20shirt%20on%20white%20background%20product%20photography%20clean%20minimal%20style%20professional%20ecommerce%20fashion%20clothing%20apparel%20high%20quality%20studio%20lighting%20soft%20shadows%20simple%20backdrop&width=80&height=80&seq=garmentcat7&orientation=squarish'
  },
  {
    id: 'G-1008',
    name: 'Black Leather Handbag',
    category: 'Accessories',
    status: 'Active',
    tryOnCount: 756,
    uploadDate: 'Jan 2, 2025',
    image: 'https://readdy.ai/api/search-image?query=black%20leather%20handbag%20on%20white%20background%20product%20photography%20clean%20minimal%20style%20professional%20ecommerce%20fashion%20accessories%20high%20quality%20studio%20lighting%20soft%20shadows%20simple%20backdrop&width=80&height=80&seq=garmentcat8&orientation=squarish'
  },
  {
    id: 'G-1009',
    name: 'Knit Cardigan Sweater',
    category: 'Tops',
    status: 'Processing',
    tryOnCount: 0,
    uploadDate: 'Jan 3, 2025',
    image: 'https://readdy.ai/api/search-image?query=cozy%20knit%20cardigan%20sweater%20on%20white%20background%20product%20photography%20clean%20minimal%20style%20professional%20ecommerce%20fashion%20clothing%20apparel%20high%20quality%20studio%20lighting%20soft%20shadows%20simple%20backdrop&width=80&height=80&seq=garmentcat9&orientation=squarish',
    processingStage: 'Mask Generation'
  },
  {
    id: 'G-1010',
    name: 'High-Waist Jeans',
    category: 'Bottoms',
    status: 'Archived',
    tryOnCount: 2341,
    uploadDate: 'Nov 10, 2024',
    image: 'https://readdy.ai/api/search-image?query=high%20waist%20blue%20jeans%20on%20white%20background%20product%20photography%20clean%20minimal%20style%20professional%20ecommerce%20fashion%20clothing%20apparel%20high%20quality%20studio%20lighting%20soft%20shadows%20simple%20backdrop&width=80&height=80&seq=garmentcat10&orientation=squarish'
  }
];

const categories = ['All Categories', 'Dresses', 'Outerwear', 'Footwear', 'Tops', 'Bottoms', 'Accessories'];
const statuses = ['All Status', 'Draft', 'Processing', 'Active', 'Paused', 'Archived'];

export default function GarmentCatalogTable() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedStatus, setSelectedStatus] = useState('All Status');
  const [showArchiveModal, setShowArchiveModal] = useState(false);
  const [garmentToArchive, setGarmentToArchive] = useState<any>(null);

  const filteredGarments = garments.filter(garment => {
    const matchesSearch = garment.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || garment.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All Status' || garment.status === selectedStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleArchiveClick = (garment: any) => {
    setGarmentToArchive(garment);
    setShowArchiveModal(true);
  };

  const handleArchiveConfirm = () => {
    console.log('Archiving garment:', garmentToArchive.id);
    setShowArchiveModal(false);
    setGarmentToArchive(null);
  };

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      Draft: 'bg-[#F5F5F5] text-[#6B7280] border border-[#E5E5E5]',
      Processing: 'bg-amber-50 text-amber-600 border border-amber-100',
      Active: 'bg-emerald-50 text-emerald-600 border border-emerald-100',
      Paused: 'bg-[#F5F5F5] text-[#6B7280] border border-[#E5E5E5]',
      Archived: 'bg-[#F5F5F5] text-[#9CA3AF] border border-[#E5E5E5]'
    };

    const dots: Record<string, string> = {
      Draft: 'bg-[#9CA3AF]',
      Processing: 'bg-amber-400',
      Active: 'bg-emerald-500',
      Paused: 'bg-[#9CA3AF]',
      Archived: 'bg-[#D1D5DB]'
    };

    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${styles[status] || 'bg-[#F5F5F5] text-[#6B7280] border border-[#E5E5E5]'}`}>
        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dots[status] || 'bg-[#9CA3AF]'}`}></span>
        {status}
      </span>
    );
  };

  if (filteredGarments.length === 0 && searchQuery === '' && selectedCategory === 'All Categories' && selectedStatus === 'All Status') {
    return (
      <div className="bg-white rounded-2xl shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-[#F0F0F0] p-12">
        <div className="text-center max-w-md mx-auto">
          <div className="w-20 h-20 bg-[#F8F8F8] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <i className="ri-shirt-line text-[#6B7280] text-3xl w-10 h-10 flex items-center justify-center"></i>
          </div>
          <h3 className="text-xl font-bold text-[#111111] mb-2">No garments uploaded yet</h3>
          <p className="text-sm text-[#6B7280] mb-6">Start building your catalog by uploading your first garment for AI virtual try-on.</p>
          <button className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-[#111111] transition-all cursor-pointer whitespace-nowrap inline-flex items-center gap-2">
            <i className="ri-add-line w-4 h-4 flex items-center justify-center"></i>
            <span>Upload First Garment</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-[#F0F0F0] overflow-hidden">
      
      <div className="px-6 py-4 border-b border-[#F0F0F0]">
        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <i className="ri-search-line absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] w-4 h-4 flex items-center justify-center"></i>
            <input
              type="text"
              placeholder="Search garments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#F8F8F8] border border-transparent rounded-full text-sm text-[#111111] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#E5E5E5] focus:bg-white transition-all"
            />
          </div>
          
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none pl-4 pr-10 py-2.5 bg-[#F8F8F8] border border-transparent rounded-full text-sm text-[#111111] focus:outline-none focus:border-[#E5E5E5] focus:bg-white transition-all cursor-pointer whitespace-nowrap"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <i className="ri-arrow-down-s-line absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] w-4 h-4 flex items-center justify-center pointer-events-none"></i>
          </div>

          <div className="relative">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="appearance-none pl-4 pr-10 py-2.5 bg-[#F8F8F8] border border-transparent rounded-full text-sm text-[#111111] focus:outline-none focus:border-[#E5E5E5] focus:bg-white transition-all cursor-pointer whitespace-nowrap"
            >
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
            <i className="ri-arrow-down-s-line absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] w-4 h-4 flex items-center justify-center pointer-events-none"></i>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F8F8F8] border-b border-[#F0F0F0]">
              <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Garment</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Category</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Status</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Try-On Count</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Upload Date</th>
              <th className="text-right px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F0F0F0]">
            {filteredGarments.map((garment) => (
              <tr key={garment.id} className="hover:bg-[#F8F8F8] transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={garment.image}
                      alt={garment.name}
                      className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                    />
                    <div>
                      <p className="text-sm font-medium text-[#111111]">{garment.name}</p>
                      <p className="text-xs text-[#9CA3AF]">{garment.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-[#6B7280]">{garment.category}</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1">
                    {getStatusBadge(garment.status)}
                    {garment.status === 'Processing' && garment.processingStage && (
                      <p className="text-xs text-[#9CA3AF] flex items-center gap-1">
                        <i className="ri-loader-4-line animate-spin w-3 h-3 flex items-center justify-center"></i>
                        {garment.processingStage}
                      </p>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm font-medium text-[#111111]">{garment.tryOnCount.toLocaleString()}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-[#6B7280]">{garment.uploadDate}</p>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => router.push(`/client/garments/${garment.id}`)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F8F8F8] hover:bg-[#F0F0F0] rounded-full text-xs font-medium text-[#111111] transition-all cursor-pointer whitespace-nowrap"
                    >
                      <i className="ri-eye-line w-3.5 h-3.5 flex items-center justify-center"></i>
                      <span>View Details</span>
                    </button>
                    <GarmentActionMenu
                      garment={garment}
                      onArchive={() => handleArchiveClick(garment)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredGarments.length === 0 && (searchQuery !== '' || selectedCategory !== 'All Categories' || selectedStatus !== 'All Status') && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-[#F8F8F8] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <i className="ri-search-line text-[#6B7280] text-2xl w-8 h-8 flex items-center justify-center"></i>
          </div>
          <h3 className="text-lg font-bold text-[#111111] mb-2">No garments found</h3>
          <p className="text-sm text-[#6B7280]">Try adjusting your search or filters.</p>
        </div>
      )}

      {showArchiveModal && garmentToArchive && (
        <ArchiveGarmentModal
          garment={garmentToArchive}
          onClose={() => setShowArchiveModal(false)}
          onConfirm={handleArchiveConfirm}
        />
      )}

    </div>
  );
}