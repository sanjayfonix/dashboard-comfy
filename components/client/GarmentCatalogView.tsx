'use client';

import { useState } from 'react';
import Link from 'next/link';
import GarmentCatalogMetrics from './GarmentCatalogMetrics';
import GarmentCatalogTable from './GarmentCatalogTable';
import ImportGarmentsModal from './ImportGarmentsModal';

export default function GarmentCatalogView() {
  const [showImportModal, setShowImportModal] = useState(false);

  return (
    <div className="p-6">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#111111] mb-1">Garment Catalog</h1>
            <p className="text-sm text-[#6B7280]">Manage garments available for AI virtual try-on.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowImportModal(true)}
              className="px-5 py-2.5 bg-white border border-[#E5E5E5] text-[#111111] rounded-full text-sm font-medium hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap flex items-center gap-2"
            >
              <i className="ri-upload-2-line w-4 h-4 flex items-center justify-center"></i>
              <span>Import Garments</span>
            </button>
            <Link href="/client/garments/upload">
              <button className="px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-[#111111] transition-all cursor-pointer whitespace-nowrap flex items-center gap-2">
                <i className="ri-add-line w-4 h-4 flex items-center justify-center"></i>
                <span>Upload Garment</span>
              </button>
            </Link>
          </div>
        </div>

        <GarmentCatalogMetrics />

        <GarmentCatalogTable />

        {showImportModal && (
          <ImportGarmentsModal onClose={() => setShowImportModal(false)} />
        )}

      </div>
    </div>
  );
}
