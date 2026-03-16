
'use client';
import React from 'react';

export default function ClientAIResultSection({
  job,
  onShare,
}: {
  job: {
    resultImage?: string;
    status?: string;
  };
  onShare: () => void;
}) {
  // Guard against undefined job prop
  if (!job) {
    return null;
  }

  const handleDownload = () => {
    try {
      if (job.resultImage) {
        // Open the image in a new tab; fallback to creating a temporary link if blocked
        const newWindow = window.open(job.resultImage, '_blank');
        if (!newWindow) {
          const link = document.createElement('a');
          link.href = job.resultImage;
          link.download = '';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }
    } catch (error) {
      console.error('Failed to download the result image:', error);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5] p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-[#111111]">Generated Try-On Result</h2>
        {job.resultImage && (
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 bg-[#F8F8F8] hover:bg-[#F0F0F0] rounded-full text-sm font-medium text-[#111111] transition-all cursor-pointer whitespace-nowrap"
            >
              <i className="ri-download-line text-base w-4 h-4 flex items-center justify-center"></i>
              <span>Download</span>
            </button>
            <button
              onClick={onShare}
              className="flex items-center gap-2 px-4 py-2 bg-[#F8F8F8] hover:bg-[#F0F0F0] rounded-full text-sm font-medium text-[#111111] transition-all cursor-pointer whitespace-nowrap"
            >
              <i className="ri-share-line text-base w-4 h-4 flex items-center justify-center"></i>
              <span>Share</span>
            </button>
          </div>
        )}
      </div>

      {job.resultImage ? (
        <div className="bg-[#F8F8F8] rounded-xl overflow-hidden aspect-[2/3] flex items-center justify-center">
          <img
            src={job.resultImage}
            alt="Generated try-on result"
            className="w-full h-full object-cover object-top"
          />
        </div>
      ) : (
        <div className="bg-[#F8F8F8] rounded-xl aspect-[2/3] flex flex-col items-center justify-center text-center p-8">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
            <i className="ri-image-line text-2xl text-[#9CA3AF] w-6 h-6 flex items-center justify-center"></i>
          </div>
          <p className="text-sm font-medium text-[#111111] mb-1">Result image unavailable</p>
          <p className="text-xs text-[#9CA3AF] mb-4">
            {job.status === 'Processing' ? 'Job is still processing...' : 'The result image could not be generated.'}
          </p>
          {job.status === 'Failed' && (
            <button className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-[#333333] transition-all cursor-pointer whitespace-nowrap">
              Retry Job
            </button>
          )}
        </div>
      )}
    </div>
  );
}
