'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import GarmentPreviewCard from '@/components/client/GarmentPreviewCard';
import ProcessingStatusPanel from '@/components/client/ProcessingStatusPanel';
import GarmentConfigurationSection from '@/components/client/GarmentConfigurationSection';
import TryOnPerformanceMetrics from '@/components/client/TryOnPerformanceMetrics';
import RecentTryOnJobsTable from '@/components/client/RecentTryOnJobsTable';
import LifecycleManagementPanel from '@/components/client/LifecycleManagementPanel';
import ArchiveGarmentModal from '@/components/client/ArchiveGarmentModal';

interface GarmentDetailViewProps {
  garmentId: string;
}

const garmentData: any = {
  'G-1001': {
    id: 'G-1001',
    name: 'Summer Floral Dress',
    category: 'Dresses',
    status: 'Active',
    gender: 'Women',
    allowTryOn: true,
    description: 'Elegant summer floral dress with a flowing silhouette, perfect for warm weather occasions. Features a flattering V-neckline and adjustable waist tie.',
    uploadDate: 'Dec 15, 2024',
    image: 'https://readdy.ai/api/search-image?query=elegant%20summer%20floral%20dress%20on%20white%20background%20product%20photography%20clean%20minimal%20style%20professional%20ecommerce%20fashion%20clothing%20apparel%20high%20quality%20studio%20lighting%20soft%20shadows%20simple%20backdrop&width=400&height=500&seq=garmentdetail1&orientation=portrait',
    totalTryOns: 1842,
    successRate: 94.2,
    avgProcessingTime: '2.3s',
    lastTryOn: 'Jan 5, 2025'
  },
  'G-1002': {
    id: 'G-1002',
    name: 'Classic Denim Jacket',
    category: 'Outerwear',
    status: 'Active',
    gender: 'Unisex',
    allowTryOn: true,
    description: 'Timeless denim jacket with a classic fit. Features button closure, chest pockets, and durable construction for everyday wear.',
    uploadDate: 'Dec 18, 2024',
    image: 'https://readdy.ai/api/search-image?query=classic%20blue%20denim%20jacket%20on%20white%20background%20product%20photography%20clean%20minimal%20style%20professional%20ecommerce%20fashion%20clothing%20apparel%20high%20quality%20studio%20lighting%20soft%20shadows%20simple%20backdrop&width=400&height=500&seq=garmentdetail2&orientation=portrait',
    totalTryOns: 1567,
    successRate: 96.8,
    avgProcessingTime: '2.1s',
    lastTryOn: 'Jan 5, 2025'
  },
  'G-1003': {
    id: 'G-1003',
    name: 'Leather Ankle Boots',
    category: 'Footwear',
    status: 'Active',
    gender: 'Women',
    allowTryOn: true,
    description: 'Premium leather ankle boots with a comfortable block heel. Perfect for both casual and formal occasions.',
    uploadDate: 'Dec 20, 2024',
    image: 'https://readdy.ai/api/search-image?query=brown%20leather%20ankle%20boots%20on%20white%20background%20product%20photography%20clean%20minimal%20style%20professional%20ecommerce%20fashion%20footwear%20shoes%20high%20quality%20studio%20lighting%20soft%20shadows%20simple%20backdrop&width=400&height=500&seq=garmentdetail3&orientation=portrait',
    totalTryOns: 1423,
    successRate: 91.5,
    avgProcessingTime: '2.8s',
    lastTryOn: 'Jan 4, 2025'
  },
  'G-1004': {
    id: 'G-1004',
    name: 'Silk Evening Gown',
    category: 'Dresses',
    status: 'Processing',
    gender: 'Women',
    allowTryOn: false,
    description: 'Luxurious silk evening gown with elegant draping and a sophisticated silhouette. Ideal for formal events and special occasions.',
    uploadDate: 'Dec 22, 2024',
    image: 'https://readdy.ai/api/search-image?query=elegant%20silk%20evening%20gown%20on%20white%20background%20product%20photography%20clean%20minimal%20style%20professional%20ecommerce%20fashion%20clothing%20apparel%20high%20quality%20studio%20lighting%20soft%20shadows%20simple%20backdrop&width=400&height=500&seq=garmentdetail4&orientation=portrait',
    totalTryOns: 0,
    successRate: 0,
    avgProcessingTime: '-',
    lastTryOn: '-',
    processingStage: 2
  },
  'G-1005': {
    id: 'G-1005',
    name: 'Casual White Sneakers',
    category: 'Footwear',
    status: 'Paused',
    gender: 'Unisex',
    allowTryOn: false,
    description: 'Comfortable white sneakers with a minimalist design. Perfect for everyday casual wear with excellent cushioning and support.',
    uploadDate: 'Dec 25, 2024',
    image: 'https://readdy.ai/api/search-image?query=white%20casual%20sneakers%20on%20white%20background%20product%20photography%20clean%20minimal%20style%20professional%20ecommerce%20fashion%20footwear%20shoes%20high%20quality%20studio%20lighting%20soft%20shadows%20simple%20backdrop&width=400&height=500&seq=garmentdetail5&orientation=portrait',
    totalTryOns: 1156,
    successRate: 93.7,
    avgProcessingTime: '2.5s',
    lastTryOn: 'Dec 30, 2024'
  }
};

export default function GarmentDetailView({ garmentId }: GarmentDetailViewProps) {
  const router = useRouter();
  const garment = garmentData[garmentId] || garmentData['G-1001'];
  const [showArchiveModal, setShowArchiveModal] = useState(false);

  const handlePause = () => {
    console.log('Pausing garment:', garment.id);
  };

  const handleActivate = () => {
    console.log('Activating garment:', garment.id);
  };

  const handleArchive = () => {
    setShowArchiveModal(true);
  };

  const handleArchiveConfirm = () => {
    console.log('Archiving garment:', garment.id);
    setShowArchiveModal(false);
    router.push('/client/garments');
  };

  return (
    <div className="p-6">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#111111] mb-1">{garment.name}</h1>
            <p className="text-sm text-[#6B7280]">Garment configuration and try-on performance.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push(`/client/garments/${garment.id}/edit`)}
              className="px-5 py-2.5 bg-white border border-[#E5E5E5] text-[#111111] rounded-full text-sm font-medium hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap flex items-center gap-2"
            >
              <i className="ri-edit-line w-4 h-4 flex items-center justify-center"></i>
              <span>Edit Garment</span>
            </button>
            {garment.status === 'Active' && (
              <button
                onClick={handlePause}
                className="px-5 py-2.5 bg-white border border-[#E5E5E5] text-[#111111] rounded-full text-sm font-medium hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap flex items-center gap-2"
              >
                <i className="ri-pause-circle-line w-4 h-4 flex items-center justify-center"></i>
                <span>Pause Garment</span>
              </button>
            )}
            {garment.status === 'Paused' && (
              <button
                onClick={handleActivate}
                className="px-5 py-2.5 bg-white border border-[#E5E5E5] text-[#111111] rounded-full text-sm font-medium hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap flex items-center gap-2"
              >
                <i className="ri-play-circle-line w-4 h-4 flex items-center justify-center"></i>
                <span>Activate Garment</span>
              </button>
            )}
            {garment.status !== 'Archived' && (
              <button
                onClick={handleArchive}
                className="px-5 py-2.5 bg-white border border-red-200 text-red-600 rounded-full text-sm font-medium hover:bg-red-50 transition-all cursor-pointer whitespace-nowrap flex items-center gap-2"
              >
                <i className="ri-archive-line w-4 h-4 flex items-center justify-center"></i>
                <span>Archive Garment</span>
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-1">
            <GarmentPreviewCard garment={garment} />
          </div>
          <div className="lg:col-span-2 space-y-6">
            {garment.status === 'Processing' && (
              <ProcessingStatusPanel currentStage={garment.processingStage} />
            )}
            <GarmentConfigurationSection garment={garment} />
            <LifecycleManagementPanel 
              garment={garment}
              onActivate={handleActivate}
              onPause={handlePause}
              onArchive={handleArchive}
            />
          </div>
        </div>

        <TryOnPerformanceMetrics garment={garment} />

        <RecentTryOnJobsTable garmentId={garment.id} />

        {showArchiveModal && (
          <ArchiveGarmentModal
            garment={garment}
            onClose={() => setShowArchiveModal(false)}
            onConfirm={handleArchiveConfirm}
          />
        )}

      </div>
    </div>
  );
}