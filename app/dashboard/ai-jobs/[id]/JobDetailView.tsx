'use client';

import { useState } from 'react';
import Link from 'next/link';
import JobInformationCard from '@/components/dashboard/JobInformationCard';
import ClientInfoSection from '@/components/dashboard/ClientInfoSection';
import InputImageSection from '@/components/dashboard/InputImageSection';
import GarmentUsedSection from '@/components/dashboard/GarmentUsedSection';
import AIResultSection from '@/components/dashboard/AIResultSection';
import AIProcessingDetails from '@/components/dashboard/AIProcessingDetails';
import ErrorLogSection from '@/components/dashboard/ErrorLogSection';

const jobData: { [key: string]: any } = {
  'JOB-8472': {
    id: 'JOB-8472',
    client: 'Fashion Brand X',
    clientId: '1001',
    clientDomain: 'fashionbrandx.com',
    garment: 'Summer Dress #SD-2401',
    garmentStatus: 'Active',
    garmentUploadDate: '2024-01-10',
    credits: 5,
    status: 'Completed',
    submitted: '2024-01-15 14:32:18',
    completed: '2024-01-15 14:32:20',
    processingTime: '2.3s',
    userImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20portrait%20photo%20standing%20straight%20neutral%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20wearing%20casual%20clothing%20centered%20composition&width=400&height=600&seq=job8472user&orientation=portrait',
    resultImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20wearing%20elegant%20summer%20dress%20floral%20pattern%20light%20fabric%20standing%20straight%20neutral%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20centered%20composition&width=400&height=600&seq=job8472result&orientation=portrait',
    poseDetection: 'Success',
    garmentWarping: 'Success',
    imageCompositing: 'Success',
    finalValidation: 'Success',
  },
  'JOB-8471': {
    id: 'JOB-8471',
    client: 'Luxury Apparel Co.',
    clientId: '1002',
    clientDomain: 'luxuryapparel.com',
    garment: 'Evening Gown #EG-1892',
    garmentStatus: 'Active',
    garmentUploadDate: '2024-01-08',
    credits: 5,
    status: 'Completed',
    submitted: '2024-01-15 14:29:45',
    completed: '2024-01-15 14:29:47',
    processingTime: '1.8s',
    userImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20portrait%20photo%20standing%20straight%20elegant%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20wearing%20simple%20outfit%20centered%20composition&width=400&height=600&seq=job8471user&orientation=portrait',
    resultImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20wearing%20luxurious%20evening%20gown%20elegant%20formal%20dress%20long%20flowing%20fabric%20standing%20straight%20elegant%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20centered%20composition&width=400&height=600&seq=job8471result&orientation=portrait',
    poseDetection: 'Success',
    garmentWarping: 'Success',
    imageCompositing: 'Success',
    finalValidation: 'Success',
  },
  'JOB-8470': {
    id: 'JOB-8470',
    client: 'Urban Style Inc.',
    clientId: '1003',
    clientDomain: 'urbanstyle.com',
    garment: 'Casual Jacket #CJ-3421',
    garmentStatus: 'Active',
    garmentUploadDate: '2024-01-12',
    credits: 5,
    status: 'Processing',
    submitted: '2024-01-15 14:27:12',
    completed: '-',
    processingTime: '-',
    userImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20portrait%20photo%20standing%20straight%20casual%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20wearing%20basic%20tshirt%20centered%20composition&width=400&height=600&seq=job8470user&orientation=portrait',
    resultImage: null,
    poseDetection: 'Success',
    garmentWarping: 'Processing',
    imageCompositing: 'Pending',
    finalValidation: 'Pending',
  },
  'JOB-8469': {
    id: 'JOB-8469',
    client: 'Elite Fashion House',
    clientId: '1004',
    clientDomain: 'elitefashion.com',
    garment: 'Business Suit #BS-7823',
    garmentStatus: 'Active',
    garmentUploadDate: '2024-01-09',
    credits: 5,
    status: 'Completed',
    submitted: '2024-01-15 14:25:33',
    completed: '2024-01-15 14:25:36',
    processingTime: '3.1s',
    userImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20portrait%20photo%20standing%20straight%20business%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20wearing%20casual%20shirt%20centered%20composition&width=400&height=600&seq=job8469user&orientation=portrait',
    resultImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20wearing%20elegant%20business%20suit%20formal%20blazer%20pants%20professional%20attire%20standing%20straight%20business%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20centered%20composition&width=400&height=600&seq=job8469result&orientation=portrait',
    poseDetection: 'Success',
    garmentWarping: 'Success',
    imageCompositing: 'Success',
    finalValidation: 'Success',
  },
  'JOB-8468': {
    id: 'JOB-8468',
    client: 'Modern Wear Ltd.',
    clientId: '1005',
    clientDomain: 'modernwear.com',
    garment: 'Winter Coat #WC-5612',
    garmentStatus: 'Active',
    garmentUploadDate: '2024-01-11',
    credits: 0,
    status: 'Failed',
    submitted: '2024-01-15 14:24:08',
    completed: '-',
    processingTime: '-',
    userImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20portrait%20photo%20standing%20straight%20neutral%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20wearing%20simple%20clothing%20centered%20composition&width=400&height=600&seq=job8468user&orientation=portrait',
    resultImage: null,
    poseDetection: 'Success',
    garmentWarping: 'Failed',
    imageCompositing: 'Skipped',
    finalValidation: 'Skipped',
    errorReason: 'Garment warping algorithm failed to detect proper anchor points',
    errorLog: 'ERROR [2024-01-15 14:24:09]: Garment warping module returned null anchor points.\nERROR [2024-01-15 14:24:09]: Unable to proceed with image compositing.\nERROR [2024-01-15 14:24:09]: Job terminated with status: FAILED',
    errorTimestamp: '2024-01-15 14:24:09',
  },
};

export default function JobDetailView({ jobId }: { jobId: string }) {
  const [showRetryModal, setShowRetryModal] = useState(false);
  const job = jobData[jobId] || jobData['JOB-8472'];

  const handleRetry = () => {
    setShowRetryModal(true);
  };

  const confirmRetry = () => {
    setShowRetryModal(false);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#111111] mb-2">AI Job Details</h1>
            <p className="text-[#6B7280]">Detailed information about a try-on processing job.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard/ai-jobs"
              className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[#E5E5E5] rounded-full text-sm font-medium text-[#111111] hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap"
            >
              <i className="ri-arrow-left-line text-base w-4 h-4 flex items-center justify-center"></i>
              <span>Back to AI Jobs</span>
            </Link>
            {(job.status === 'Failed' || job.status === 'Processing') && (
              <button
                onClick={handleRetry}
                className="flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-[#333333] transition-all cursor-pointer whitespace-nowrap"
              >
                <i className="ri-refresh-line text-base w-4 h-4 flex items-center justify-center"></i>
                <span>Retry Job</span>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="col-span-2 space-y-6">
          <JobInformationCard job={job} />
          <AIProcessingDetails job={job} />
          {job.status === 'Failed' && <ErrorLogSection job={job} />}
        </div>
        <div className="space-y-6">
          <ClientInfoSection job={job} />
          <GarmentUsedSection job={job} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <InputImageSection imageUrl={job.userImage} />
        <AIResultSection job={job} />
      </div>

      {showRetryModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4">
            <div className="p-6 border-b border-[#F0F0F0]">
              <h3 className="text-lg font-semibold text-[#111111]">Retry Job</h3>
              <p className="text-sm text-[#6B7280] mt-1">Are you sure you want to retry this job?</p>
            </div>
            <div className="p-6">
              <div className="bg-[#F8F8F8] rounded-xl p-4">
                <p className="text-sm text-[#6B7280] mb-1">Job ID</p>
                <p className="text-sm font-semibold text-[#111111]">{job.id}</p>
              </div>
              <p className="text-xs text-[#9CA3AF] mt-4">
                This will re-run the AI try-on job and consume credits again.
              </p>
            </div>
            <div className="p-6 border-t border-[#F0F0F0] flex justify-end gap-3">
              <button
                onClick={() => setShowRetryModal(false)}
                className="px-5 py-2.5 bg-white border border-[#E5E5E5] rounded-full text-sm font-medium text-[#111111] hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap"
              >
                Cancel
              </button>
              <button
                onClick={confirmRetry}
                className="px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-[#333333] transition-all cursor-pointer whitespace-nowrap"
              >
                Confirm Retry
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}