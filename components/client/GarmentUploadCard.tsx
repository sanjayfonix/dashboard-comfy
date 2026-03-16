'use client';

import { useRef } from 'react';

interface GarmentUploadCardProps {
  uploadedImage: string | null;
  onImageUpload: (image: string) => void;
  error?: string;
}

export default function GarmentUploadCard({ uploadedImage, onImageUpload, error }: GarmentUploadCardProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB');
        return;
      }

      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        alert('Only JPG and PNG files are supported');
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        onImageUpload(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB');
        return;
      }

      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        alert('Only JPG and PNG files are supported');
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        onImageUpload(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleRemoveImage = () => {
    onImageUpload('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-[#F0F0F0] p-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-[#111111] mb-1">Garment Image</h2>
        <p className="text-sm text-[#6B7280]">Upload a high-quality image of your garment.</p>
      </div>

      {!uploadedImage ? (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all cursor-pointer hover:border-[#111111] hover:bg-[#F8F8F8] ${
            error ? 'border-red-300 bg-red-50' : 'border-[#E5E5E5]'
          }`}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="w-16 h-16 bg-[#F8F8F8] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <i className="ri-image-add-line text-[#6B7280] text-2xl w-8 h-8 flex items-center justify-center"></i>
          </div>
          <h3 className="text-base font-semibold text-[#111111] mb-2">Drag & Drop or Click to Upload</h3>
          <p className="text-sm text-[#6B7280] mb-4">Supported formats: JPG, PNG</p>
          <p className="text-xs text-[#9CA3AF]">Max file size: 10MB</p>
          
          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-sm text-red-600 flex items-center gap-2 justify-center">
                <i className="ri-error-warning-line w-4 h-4 flex items-center justify-center"></i>
                {error}
              </p>
            </div>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png"
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>
      ) : (
        <div className="relative">
          <img
            src={uploadedImage}
            alt="Uploaded garment"
            className="w-full h-96 object-contain rounded-2xl bg-[#F8F8F8]"
          />
          <button
            onClick={handleRemoveImage}
            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-50 transition-all cursor-pointer border border-[#E5E5E5]"
          >
            <i className="ri-delete-bin-line text-red-600 w-5 h-5 flex items-center justify-center"></i>
          </button>
          <div className="mt-4 flex items-center gap-2 text-sm text-emerald-600">
            <i className="ri-check-circle-fill w-4 h-4 flex items-center justify-center"></i>
            <span className="font-medium">Image uploaded successfully</span>
          </div>
        </div>
      )}
    </div>
  );
}