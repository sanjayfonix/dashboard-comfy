'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import GarmentUploadCard from './GarmentUploadCard';
import GarmentInformationForm from './GarmentInformationForm';
import ImageGuidelinesPanel from './ImageGuidelinesPanel';
import UploadSummaryPreview from './UploadSummaryPreview';
import UploadSuccessBanner from './UploadSuccessBanner';
import UploadErrorBanner from './UploadErrorBanner';

export default function UploadGarmentView() {
  const router = useRouter();
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [garmentName, setGarmentName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Draft');
  const [allowTryOn, setAllowTryOn] = useState(true);
  const [gender, setGender] = useState('Unisex');
  const [isUploading, setIsUploading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!uploadedImage) {
      newErrors.image = 'Please upload a valid garment image.';
    }
    if (!garmentName.trim()) {
      newErrors.name = 'Garment name is required.';
    }
    if (!category) {
      newErrors.category = 'Please select a category.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUploadAndProcess = async () => {
    if (!validateForm()) return;

    setIsUploading(true);
    setShowError(false);

    setTimeout(() => {
      setIsUploading(false);
      const success = Math.random() > 0.1;
      
      if (success) {
        setShowSuccess(true);
      } else {
        setShowError(true);
      }
    }, 3000);
  };

  const handleSaveAsDraft = () => {
    if (!validateForm()) return;
    
    console.log('Saving as draft:', {
      garmentName,
      category,
      description,
      status: 'Draft',
      allowTryOn,
      gender
    });
    
    router.push('/client/garments');
  };

  const handleCancel = () => {
    router.push('/client/garments');
  };

  const handleRetry = () => {
    setShowError(false);
    handleUploadAndProcess();
  };

  if (showSuccess) {
    return (
      <div className="p-6">
        <div className="max-w-[1400px] mx-auto">
          <UploadSuccessBanner garmentName={garmentName} />
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#111111] mb-1">Upload Garment</h1>
            <p className="text-sm text-[#6B7280]">Add a new garment to your AI try-on catalog.</p>
          </div>
          <button
            onClick={handleCancel}
            className="px-5 py-2.5 bg-white border border-[#E5E5E5] text-[#111111] rounded-full text-sm font-medium hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap flex items-center gap-2"
          >
            <i className="ri-arrow-left-line w-4 h-4 flex items-center justify-center"></i>
            <span>Back to Catalog</span>
          </button>
        </div>

        {showError && (
          <UploadErrorBanner onRetry={handleRetry} onDismiss={() => setShowError(false)} />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="lg:col-span-2 space-y-6">
            
            <GarmentUploadCard
              uploadedImage={uploadedImage}
              onImageUpload={setUploadedImage}
              error={errors.image}
            />

            <GarmentInformationForm
              garmentName={garmentName}
              category={category}
              description={description}
              status={status}
              allowTryOn={allowTryOn}
              gender={gender}
              onGarmentNameChange={setGarmentName}
              onCategoryChange={setCategory}
              onDescriptionChange={setDescription}
              onStatusChange={setStatus}
              onAllowTryOnChange={setAllowTryOn}
              onGenderChange={setGender}
              errors={errors}
            />

            <div className="bg-white rounded-2xl shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-[#F0F0F0] p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-[#111111] mb-1">Ready to upload?</h3>
                  <p className="text-sm text-[#6B7280]">Review your garment details and start processing.</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleCancel}
                    className="px-5 py-2.5 bg-white border border-[#E5E5E5] text-[#111111] rounded-full text-sm font-medium hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveAsDraft}
                    disabled={isUploading}
                    className="px-5 py-2.5 bg-white border border-[#E5E5E5] text-[#111111] rounded-full text-sm font-medium hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Save as Draft
                  </button>
                  <button
                    onClick={handleUploadAndProcess}
                    disabled={isUploading}
                    className="px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-[#111111] transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isUploading ? (
                      <>
                        <i className="ri-loader-4-line animate-spin w-4 h-4 flex items-center justify-center"></i>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <i className="ri-upload-cloud-line w-4 h-4 flex items-center justify-center"></i>
                        <span>Upload & Process Garment</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {isUploading && (
                <div className="mt-6 pt-6 border-t border-[#F0F0F0]">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                        <i className="ri-check-line text-emerald-600 w-4 h-4 flex items-center justify-center"></i>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-[#111111]">Uploading Image</p>
                        <p className="text-xs text-[#9CA3AF]">Complete</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center">
                        <i className="ri-loader-4-line animate-spin text-amber-600 w-4 h-4 flex items-center justify-center"></i>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-[#111111]">Preparing Garment</p>
                        <p className="text-xs text-[#9CA3AF]">In progress...</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <i className="ri-cpu-line text-gray-400 w-4 h-4 flex items-center justify-center"></i>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-[#9CA3AF]">Processing AI Model</p>
                        <p className="text-xs text-[#9CA3AF]">Waiting...</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

          <div className="space-y-6">
            
            <ImageGuidelinesPanel />

            {uploadedImage && garmentName && category && (
              <UploadSummaryPreview
                image={uploadedImage}
                name={garmentName}
                category={category}
                status={status}
              />
            )}

          </div>

        </div>

      </div>
    </div>
  );
}