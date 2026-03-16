'use client';

import { useState } from 'react';

interface ReplaceImageModalProps {
  currentImage: string;
  onClose: () => void;
  onConfirm: (newImage: string) => void;
}

export default function ReplaceImageModal({ currentImage, onClose, onConfirm }: ReplaceImageModalProps) {
  const [newImage, setNewImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      handleFileUpload(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleFileUpload = (file: File) => {
    setIsUploading(true);
    
    setTimeout(() => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewImage(e.target?.result as string);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    }, 1000);
  };

  const handleConfirm = () => {
    if (newImage) {
      onConfirm(newImage);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-[#F0F0F0]">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#111111]">Replace Garment Image</h3>
              <p className="text-sm text-[#6B7280] mt-1">Upload a new image for this garment</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#F8F8F8] transition-all cursor-pointer"
            >
              <i className="ri-close-line text-[#6B7280] text-xl w-5 h-5 flex items-center justify-center"></i>
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <p className="text-sm font-medium text-[#111111] mb-3">Current Image</p>
            <div className="aspect-[4/5] max-w-xs bg-[#F8F8F8] rounded-xl overflow-hidden">
              <img
                src={currentImage}
                alt="Current garment"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-[#111111] mb-3">New Image</p>
            {!newImage ? (
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
                  isDragging ? 'border-[#111111] bg-[#F8F8F8]' : 'border-[#E5E5E5] bg-white'
                }`}
              >
                {isUploading ? (
                  <div className="flex flex-col items-center gap-3">
                    <i className="ri-loader-4-line animate-spin text-4xl text-[#111111] w-10 h-10 flex items-center justify-center"></i>
                    <p className="text-sm text-[#6B7280]">Uploading image...</p>
                  </div>
                ) : (
                  <>
                    <div className="w-16 h-16 bg-[#F8F8F8] rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-image-add-line text-3xl text-[#6B7280] w-8 h-8 flex items-center justify-center"></i>
                    </div>
                    <p className="text-sm font-medium text-[#111111] mb-2">
                      Drag & drop your image here
                    </p>
                    <p className="text-sm text-[#9CA3AF] mb-4">or</p>
                    <label className="inline-block px-5 py-2.5 bg-[#111111] text-white rounded-full text-sm font-medium hover:bg-[#000000] transition-all cursor-pointer whitespace-nowrap">
                      <input
                        type="file"
                        accept="image/jpeg,image/png"
                        onChange={handleFileSelect}
                        className="hidden"
                      />
                      Upload Image
                    </label>
                    <p className="text-xs text-[#9CA3AF] mt-4">
                      Supported formats: JPG, PNG (Max 10MB)
                    </p>
                  </>
                )}
              </div>
            ) : (
              <div className="relative">
                <div className="aspect-[4/5] max-w-xs bg-[#F8F8F8] rounded-xl overflow-hidden">
                  <img
                    src={newImage}
                    alt="New garment"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <button
                  onClick={() => setNewImage(null)}
                  className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#F8F8F8] transition-all cursor-pointer"
                >
                  <i className="ri-close-line text-[#111111] w-5 h-5 flex items-center justify-center"></i>
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="p-6 border-t border-[#F0F0F0] flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-white border border-[#E5E5E5] text-[#111111] rounded-full text-sm font-medium hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            disabled={!newImage}
            className="px-5 py-2.5 bg-[#111111] text-white rounded-full text-sm font-medium hover:bg-[#000000] transition-all cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Replace Image
          </button>
        </div>
      </div>
    </div>
  );
}