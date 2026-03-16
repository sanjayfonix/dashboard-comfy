'use client';
import React from 'react';

type ClientUserPhotoSectionProps = {
  /** URL of the image to display. If omitted or invalid, a fallback UI is shown. */
  imageUrl?: string;
};

/**
 * Displays a user‑uploaded photo inside a styled container.
 * Includes basic validation and a graceful fallback when the image cannot be loaded.
 */
export default function ClientUserPhotoSection({
  imageUrl,
}: ClientUserPhotoSectionProps) {
  // Simple validation – ensure we have a non‑empty string.
  const isValidUrl = typeof imageUrl === 'string' && imageUrl.trim() !== '';

  // Render a placeholder when the URL is missing or broken.
  const fallback = (
    <div className="flex items-center justify-center w-full h-full text-gray-400">
      No photo available
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5] p-6">
      <h2 className="text-lg font-semibold text-[#111111] mb-5">
        User Uploaded Photo
      </h2>

      <div className="bg-[#F8F8F8] rounded-xl overflow-hidden aspect-[2/3] flex items-center justify-center">
        {isValidUrl ? (
          <img
            src={imageUrl}
            alt="User uploaded photo"
            className="w-full h-full object-cover object-top"
            onError={(e) => {
              // If the image fails to load, replace it with the fallback UI.
              const target = e.currentTarget as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        ) : (
          fallback
        )}
      </div>
    </div>
  );
}
