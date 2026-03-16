'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import EditGarmentPreviewCard from '@/components/client/EditGarmentPreviewCard';
import EditGarmentInformationForm from '@/components/client/EditGarmentInformationForm';
import EditTryOnConfigurationSection from '@/components/client/EditTryOnConfigurationSection';
import EditGarmentLifecycleControls from '@/components/client/EditGarmentLifecycleControls';
import ReplaceImageModal from '@/components/client/ReplaceImageModal';
import ArchiveGarmentModal from '@/components/client/ArchiveGarmentModal';
import EditSuccessBanner from '@/components/client/EditSuccessBanner';
import EditErrorBanner from '@/components/client/EditErrorBanner';

interface EditGarmentViewProps {
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
    image: 'https://readdy.ai/api/search-image?query=elegant%20summer%20floral%20dress%20on%20white%20background%20product%20photography%20clean%20minimal%20style%20professional%20ecommerce%20fashion%20clothing%20apparel%20high%20quality%20studio%20lighting%20soft%20shadows%20simple%20backdrop&width=400&height=500&seq=garmentdetail1&orientation=portrait'
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
    image: 'https://readdy.ai/api/search-image?query=classic%20blue%20denim%20jacket%20on%20white%20background%20product%20photography%20clean%20minimal%20style%20professional%20ecommerce%20fashion%20clothing%20apparel%20high%20quality%20studio%20lighting%20soft%20shadows%20simple%20backdrop&width=400&height=500&seq=garmentdetail2&orientation=portrait'
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
    image: 'https://readdy.ai/api/search-image?query=brown%20leather%20ankle%20boots%20on%20white%20background%20product%20photography%20clean%20minimal%20style%20professional%20ecommerce%20fashion%20footwear%20shoes%20high%20quality%20studio%20lighting%20soft%20shadows%20simple%20backdrop&width=400&height=500&seq=garmentdetail3&orientation=portrait'
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
    image: 'https://readdy.ai/api/search-image?query=elegant%20silk%20evening%20gown%20on%20white%20background%20product%20photography%20clean%20minimal%20style%20professional%20ecommerce%20fashion%20clothing%20apparel%20high%20quality%20studio%20lighting%20soft%20shadows%20simple%20backdrop&width=400&height=500&seq=garmentdetail4&orientation=portrait'
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
    image: 'https://readdy.ai/api/search-image?query=white%20casual%20sneakers%20on%20white%20background%20product%20photography%20clean%20minimal%20style%20professional%20ecommerce%20fashion%20footwear%20shoes%20high%20quality%20studio%20lighting%20soft%20shadows%20simple%20backdrop&width=400&height=500&seq=garmentdetail5&orientation=portrait'
  }
};

export default function EditGarmentView({ garmentId }: EditGarmentViewProps) {
  const router = useRouter();
  const initialGarment = garmentData[garmentId] || garmentData['G-1001'];
  
  const [garment, setGarment] = useState(initialGarment);
  const [showReplaceImageModal, setShowReplaceImageModal] = useState(false);
  const [showArchiveModal, setShowArchiveModal] = useState(false);
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);
  const [showErrorBanner, setShowErrorBanner] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [errors, setErrors] = useState<any>({});

  const handleFormChange = (field: string, value: any) => {
    setGarment({ ...garment, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: null });
    }
  };

  const validateForm = () => {
    const newErrors: any = {};
    
    if (!garment.name || garment.name.trim() === '') {
      newErrors.name = 'Garment name is required.';
    }
    
    if (!garment.category) {
      newErrors.category = 'Category is required.';
    }
    
    if (!garment.image) {
      newErrors.image = 'Please upload a valid garment image.';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveChanges = () => {
    if (!validateForm()) {
      return;
    }
    
    setIsSaving(true);
    
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccessBanner(true);
      
      setTimeout(() => {
        setShowSuccessBanner(false);
      }, 5000);
    }, 1500);
  };

  const handleCancel = () => {
    router.push(`/client/garments/${garment.id}`);
  };

  const handleActivate = () => {
    setGarment({ ...garment, status: 'Active' });
  };

  const handlePause = () => {
    setGarment({ ...garment, status: 'Paused' });
  };

  const handleArchive = () => {
    setShowArchiveModal(true);
  };

  const handleArchiveConfirm = () => {
    setShowArchiveModal(false);
    router.push('/client/garments');
  };

  const handleReplaceImage = (newImage: string) => {
    setGarment({ ...garment, image: newImage });
    setShowReplaceImageModal(false);
    if (errors.image) {
      setErrors({ ...errors, image: null });
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-[1400px] mx-auto">
        
        {showSuccessBanner && (
          <EditSuccessBanner 
            garment={garment}
            onDismiss={() => setShowSuccessBanner(false)}
            onViewGarment={() => router.push(`/client/garments/${garment.id}`)}
          />
        )}

        {showErrorBanner && (
          <EditErrorBanner 
            onDismiss={() => setShowErrorBanner(false)}
            onRetry={handleSaveChanges}
          />
        )}

        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#111111] mb-1">Edit Garment</h1>
            <p className="text-sm text-[#6B7280]">Update garment information and configuration.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push(`/client/garments/${garment.id}`)}
              className="px-5 py-2.5 bg-white border border-[#E5E5E5] text-[#111111] rounded-full text-sm font-medium hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap flex items-center gap-2"
            >
              <i className="ri-eye-line w-4 h-4 flex items-center justify-center"></i>
              <span>View Garment</span>
            </button>
            <button
              onClick={() => router.push('/client/garments')}
              className="px-5 py-2.5 bg-white border border-[#E5E5E5] text-[#111111] rounded-full text-sm font-medium hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap flex items-center gap-2"
            >
              <i className="ri-arrow-left-line w-4 h-4 flex items-center justify-center"></i>
              <span>Back to Catalog</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-1">
            <EditGarmentPreviewCard 
              garment={garment}
              onReplaceImage={() => setShowReplaceImageModal(true)}
              error={errors.image}
            />
          </div>
          <div className="lg:col-span-2 space-y-6">
            <EditGarmentInformationForm 
              garment={garment}
              onChange={handleFormChange}
              errors={errors}
            />
            <EditTryOnConfigurationSection 
              garment={garment}
              onChange={handleFormChange}
            />
            <EditGarmentLifecycleControls 
              garment={garment}
              onActivate={handleActivate}
              onPause={handlePause}
              onArchive={handleArchive}
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-3">
          <button
            onClick={handleCancel}
            disabled={isSaving}
            className="px-6 py-3 bg-white border border-[#E5E5E5] text-[#111111] rounded-full text-sm font-medium hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveChanges}
            disabled={isSaving}
            className="px-6 py-3 bg-[#111111] text-white rounded-full text-sm font-medium hover:bg-[#000000] transition-all cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isSaving && (
              <i className="ri-loader-4-line animate-spin w-4 h-4 flex items-center justify-center"></i>
            )}
            <span>{isSaving ? 'Saving Changes...' : 'Save Changes'}</span>
          </button>
        </div>

        {showReplaceImageModal && (
          <ReplaceImageModal
            currentImage={garment.image}
            onClose={() => setShowReplaceImageModal(false)}
            onConfirm={handleReplaceImage}
          />
        )}

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