'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface GarmentActionMenuProps {
  garment: any;
  onArchive: () => void;
}

export default function GarmentActionMenu({ garment, onArchive }: GarmentActionMenuProps) {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

  const handlePause = () => {
    setShowMenu(false);
  };

  const handleActivate = () => {
    setShowMenu(false);
  };

  return (
    <div className="relative inline-block" ref={menuRef}>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#F0F0F0] transition-colors cursor-pointer"
      >
        <i className="ri-more-2-fill text-[#6B7280] w-5 h-5 flex items-center justify-center"></i>
      </button>

      {showMenu && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-[0px_8px_24px_rgba(0,0,0,0.10)] border border-[#E5E5E5] z-50 py-2 overflow-hidden">
          <button
            onClick={() => {
              router.push(`/client/garments/${garment.id}/edit`);
              setShowMenu(false);
            }}
            className="w-full px-4 py-2.5 text-left text-sm text-[#111111] hover:bg-[#F8F8F8] transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2.5"
          >
            <i className="ri-edit-line w-4 h-4 flex items-center justify-center text-[#6B7280]"></i>
            <span>Edit Garment</span>
          </button>

          <div className="border-t border-[#F0F0F0] my-2"></div>

          {garment.status === 'Active' ? (
            <button
              onClick={handlePause}
              className="w-full px-4 py-2.5 text-left text-sm text-[#111111] hover:bg-[#F8F8F8] transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2.5"
            >
              <i className="ri-pause-circle-line w-4 h-4 flex items-center justify-center text-[#6B7280]"></i>
              <span>Pause Garment</span>
            </button>
          ) : garment.status === 'Paused' ? (
            <button
              onClick={handleActivate}
              className="w-full px-4 py-2.5 text-left text-sm text-[#111111] hover:bg-[#F8F8F8] transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2.5"
            >
              <i className="ri-play-circle-line w-4 h-4 flex items-center justify-center text-[#6B7280]"></i>
              <span>Activate Garment</span>
            </button>
          ) : null}

          {garment.status !== 'Archived' && (
            <button
              onClick={onArchive}
              className="w-full px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2.5"
            >
              <i className="ri-archive-line w-4 h-4 flex items-center justify-center"></i>
              <span>Archive Garment</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
