'use client';

import { useState } from 'react';

interface ImportGarmentsModalProps {
  onClose: () => void;
}

export default function ImportGarmentsModal({ onClose }: ImportGarmentsModalProps) {
  const [importMethod, setImportMethod] = useState<'csv' | 'batch'>('csv');

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-[0px_20px_60px_rgba(0,0,0,0.20)] max-w-2xl w-full overflow-hidden">
        
        <div className="px-6 py-5 border-b border-[#F0F0F0]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="ri-upload-2-line text-blue-600 text-lg w-5 h-5 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg font-bold text-[#111111]">Import Garments</h3>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#F8F8F8] transition-colors cursor-pointer"
            >
              <i className="ri-close-line text-[#6B7280] w-5 h-5 flex items-center justify-center"></i>
            </button>
          </div>
        </div>

        <div className="px-6 py-5">
          
          <div className="flex items-center gap-2 mb-6">
            <button
              onClick={() => setImportMethod('csv')}
              className={`flex-1 px-4 py-3 rounded-xl border-2 transition-all cursor-pointer ${
                importMethod === 'csv'
                  ? 'border-black bg-[#F8F8F8]'
                  : 'border-[#E5E5E5] bg-white hover:border-[#D0D0D0]'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  importMethod === 'csv' ? 'bg-black' : 'bg-[#F8F8F8]'
                }`}>
                  <i className={`ri-file-text-line text-lg w-5 h-5 flex items-center justify-center ${
                    importMethod === 'csv' ? 'text-white' : 'text-[#6B7280]'
                  }`}></i>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-[#111111]">CSV Import</p>
                  <p className="text-xs text-[#6B7280]">Upload garment data via CSV</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => setImportMethod('batch')}
              className={`flex-1 px-4 py-3 rounded-xl border-2 transition-all cursor-pointer ${
                importMethod === 'batch'
                  ? 'border-black bg-[#F8F8F8]'
                  : 'border-[#E5E5E5] bg-white hover:border-[#D0D0D0]'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  importMethod === 'batch' ? 'bg-black' : 'bg-[#F8F8F8]'
                }`}>
                  <i className={`ri-image-2-line text-lg w-5 h-5 flex items-center justify-center ${
                    importMethod === 'batch' ? 'text-white' : 'text-[#6B7280]'
                  }`}></i>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-[#111111]">Batch Upload</p>
                  <p className="text-xs text-[#6B7280]">Upload multiple images</p>
                </div>
              </div>
            </button>
          </div>

          {importMethod === 'csv' ? (
            <div>
              <div className="border-2 border-dashed border-[#E5E5E5] rounded-xl p-8 text-center mb-4 hover:border-[#D0D0D0] transition-colors cursor-pointer">
                <div className="w-16 h-16 bg-[#F8F8F8] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-file-upload-line text-[#6B7280] text-2xl w-8 h-8 flex items-center justify-center"></i>
                </div>
                <p className="text-sm font-semibold text-[#111111] mb-1">Drop CSV file here or click to browse</p>
                <p className="text-xs text-[#6B7280]">Maximum file size: 10MB</p>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <i className="ri-information-line text-blue-600 w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5"></i>
                  <div>
                    <p className="text-sm font-semibold text-blue-900 mb-1">CSV Format Requirements</p>
                    <p className="text-xs text-blue-700 mb-2">Your CSV file should include: Garment Name, Category, Image URL, Description</p>
                    <button className="text-xs font-medium text-blue-600 hover:text-blue-700 cursor-pointer whitespace-nowrap">
                      Download CSV Template
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="border-2 border-dashed border-[#E5E5E5] rounded-xl p-8 text-center mb-4 hover:border-[#D0D0D0] transition-colors cursor-pointer">
                <div className="w-16 h-16 bg-[#F8F8F8] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-image-add-line text-[#6B7280] text-2xl w-8 h-8 flex items-center justify-center"></i>
                </div>
                <p className="text-sm font-semibold text-[#111111] mb-1">Drop images here or click to browse</p>
                <p className="text-xs text-[#6B7280]">Upload up to 50 images at once</p>
              </div>

              <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <i className="ri-information-line text-amber-600 w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5"></i>
                  <div>
                    <p className="text-sm font-semibold text-amber-900 mb-1">Image Requirements</p>
                    <p className="text-xs text-amber-700">Supported formats: JPG, PNG. Recommended size: 1024x1024px. White background preferred.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        <div className="px-6 py-4 bg-[#F8F8F8] flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-white border border-[#E5E5E5] text-[#111111] rounded-full text-sm font-medium hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap"
          >
            Cancel
          </button>
          <button className="px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-[#111111] transition-all cursor-pointer whitespace-nowrap">
            Start Import
          </button>
        </div>

      </div>
    </div>
  );
}