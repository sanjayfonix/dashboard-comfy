'use client';

import { useState } from 'react';
import Link from 'next/link';
import ClientJobInformationCard from '@/components/client/ClientJobInformationCard';
import ClientGarmentInfoSection from '@/components/client/ClientGarmentInfoSection';
import ClientUserPhotoSection from '@/components/client/ClientUserPhotoSection';
import ClientAIResultSection from '@/components/client/ClientAIResultSection';
import ClientAIProcessingSteps from '@/components/client/ClientAIProcessingSteps';
import ClientErrorLogSection from '@/components/client/ClientErrorLogSection';
import ClientJobNavigationPanel from '@/components/client/ClientJobNavigationPanel';

const jobData: { [key: string]: any } = {
  'JOB-8472': {
    id: 'JOB-8472',
    garment: 'Summer Dress #SD-2401',
    garmentCategory: 'Dress',
    garmentStatus: 'Active',
    credits: 5,
    status: 'Completed',
    submitted: '2024-01-15 14:32:18',
    completed: '2024-01-15 14:32:20',
    processingTime: '2.3s',
    userImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20portrait%20photo%20standing%20straight%20neutral%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20wearing%20casual%20clothing%20centered%20composition&width=400&height=600&seq=clientjob8472user&orientation=portrait',
    resultImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20wearing%20elegant%20summer%20dress%20floral%20pattern%20light%20fabric%20standing%20straight%20neutral%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20centered%20composition&width=400&height=600&seq=clientjob8472result&orientation=portrait',
    poseDetection: 'Completed',
    garmentAlignment: 'Completed',
    imageComposition: 'Completed',
    finalRendering: 'Completed',
  },
  'JOB-8471': {
    id: 'JOB-8471',
    garment: 'Evening Gown #EG-1892',
    garmentCategory: 'Dress',
    garmentStatus: 'Active',
    credits: 5,
    status: 'Completed',
    submitted: '2024-01-15 14:29:45',
    completed: '2024-01-15 14:29:47',
    processingTime: '1.8s',
    userImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20portrait%20photo%20standing%20straight%20elegant%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20wearing%20simple%20outfit%20centered%20composition&width=400&height=600&seq=clientjob8471user&orientation=portrait',
    resultImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20wearing%20luxurious%20evening%20gown%20elegant%20formal%20dress%20long%20flowing%20fabric%20standing%20straight%20elegant%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20centered%20composition&width=400&height=600&seq=clientjob8471result&orientation=portrait',
    poseDetection: 'Completed',
    garmentAlignment: 'Completed',
    imageComposition: 'Completed',
    finalRendering: 'Completed',
  },
  'JOB-8470': {
    id: 'JOB-8470',
    garment: 'Casual Jacket #CJ-3421',
    garmentCategory: 'Jacket',
    garmentStatus: 'Active',
    credits: 5,
    status: 'Processing',
    submitted: '2024-01-15 14:27:12',
    completed: '-',
    processingTime: '-',
    userImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20portrait%20photo%20standing%20straight%20casual%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20wearing%20basic%20tshirt%20centered%20composition&width=400&height=600&seq=clientjob8470user&orientation=portrait',
    resultImage: null,
    poseDetection: 'Completed',
    garmentAlignment: 'Processing',
    imageComposition: 'Pending',
    finalRendering: 'Pending',
  },
  'JOB-8469': {
    id: 'JOB-8469',
    garment: 'Business Suit #BS-7823',
    garmentCategory: 'Suit',
    garmentStatus: 'Active',
    credits: 5,
    status: 'Completed',
    submitted: '2024-01-15 14:25:33',
    completed: '2024-01-15 14:25:36',
    processingTime: '3.1s',
    userImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20portrait%20photo%20standing%20straight%20business%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20wearing%20casual%20shirt%20centered%20composition&width=400&height=600&seq=clientjob8469user&orientation=portrait',
    resultImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20wearing%20elegant%20business%20suit%20formal%20blazer%20pants%20professional%20attire%20standing%20straight%20business%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20centered%20composition&width=400&height=600&seq=clientjob8469result&orientation=portrait',
    poseDetection: 'Completed',
    garmentAlignment: 'Completed',
    imageComposition: 'Completed',
    finalRendering: 'Completed',
  },
  'JOB-8468': {
    id: 'JOB-8468',
    garment: 'Winter Coat #WC-5612',
    garmentCategory: 'Coat',
    garmentStatus: 'Active',
    credits: 0,
    status: 'Failed',
    submitted: '2024-01-15 14:24:08',
    completed: '-',
    processingTime: '-',
    userImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20portrait%20photo%20standing%20straight%20neutral%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20wearing%20simple%20clothing%20centered%20composition&width=400&height=600&seq=clientjob8468user&orientation=portrait',
    resultImage: null,
    poseDetection: 'Completed',
    garmentAlignment: 'Failed',
    imageComposition: 'Skipped',
    finalRendering: 'Skipped',
    errorReason: 'Garment alignment failed to detect proper anchor points',
    errorLog: 'ERROR [2024-01-15 14:24:09]: Garment alignment module returned null anchor points.\nERROR [2024-01-15 14:24:09]: Unable to proceed with image composition.\nERROR [2024-01-15 14:24:09]: Job terminated with status: FAILED',
    errorTimestamp: '2024-01-15 14:24:09',
  },
  'JOB-8234': {
    id: 'JOB-8234',
    garment: 'Linen Blazer #LB-4401',
    garmentCategory: 'Blazer',
    garmentStatus: 'Active',
    credits: 5,
    status: 'Completed',
    submitted: '2024-01-15 13:58:10',
    completed: '2024-01-15 13:58:13',
    processingTime: '2.7s',
    userImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20portrait%20photo%20standing%20straight%20neutral%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20wearing%20plain%20shirt%20centered%20composition&width=400&height=600&seq=clientjob8234user&orientation=portrait',
    resultImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20wearing%20smart%20linen%20blazer%20light%20beige%20color%20standing%20straight%20neutral%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20centered%20composition&width=400&height=600&seq=clientjob8234result&orientation=portrait',
    poseDetection: 'Completed',
    garmentAlignment: 'Completed',
    imageComposition: 'Completed',
    finalRendering: 'Completed',
  },
  'JOB-8233': {
    id: 'JOB-8233',
    garment: 'Denim Jacket #DJ-9921',
    garmentCategory: 'Jacket',
    garmentStatus: 'Active',
    credits: 5,
    status: 'Completed',
    submitted: '2024-01-15 13:50:44',
    completed: '2024-01-15 13:50:47',
    processingTime: '2.1s',
    userImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20portrait%20photo%20standing%20straight%20casual%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20wearing%20white%20tshirt%20centered%20composition&width=400&height=600&seq=clientjob8233user&orientation=portrait',
    resultImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20wearing%20classic%20denim%20jacket%20blue%20washed%20fabric%20standing%20straight%20casual%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20centered%20composition&width=400&height=600&seq=clientjob8233result&orientation=portrait',
    poseDetection: 'Completed',
    garmentAlignment: 'Completed',
    imageComposition: 'Completed',
    finalRendering: 'Completed',
  },
  'JOB-8232': {
    id: 'JOB-8232',
    garment: 'Floral Blouse #FB-3310',
    garmentCategory: 'Top',
    garmentStatus: 'Active',
    credits: 5,
    status: 'Completed',
    submitted: '2024-01-15 13:44:22',
    completed: '2024-01-15 13:44:25',
    processingTime: '2.5s',
    userImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20portrait%20photo%20standing%20straight%20neutral%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20wearing%20simple%20top%20centered%20composition&width=400&height=600&seq=clientjob8232user&orientation=portrait',
    resultImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20wearing%20elegant%20floral%20blouse%20light%20pastel%20colors%20delicate%20pattern%20standing%20straight%20neutral%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20centered%20composition&width=400&height=600&seq=clientjob8232result&orientation=portrait',
    poseDetection: 'Completed',
    garmentAlignment: 'Completed',
    imageComposition: 'Completed',
    finalRendering: 'Completed',
  },
  'JOB-8231': {
    id: 'JOB-8231',
    garment: 'Trench Coat #TC-6612',
    garmentCategory: 'Coat',
    garmentStatus: 'Active',
    credits: 5,
    status: 'Completed',
    submitted: '2024-01-15 13:38:05',
    completed: '2024-01-15 13:38:08',
    processingTime: '3.0s',
    userImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20portrait%20photo%20standing%20straight%20elegant%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20wearing%20basic%20outfit%20centered%20composition&width=400&height=600&seq=clientjob8231user&orientation=portrait',
    resultImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20wearing%20classic%20trench%20coat%20beige%20belted%20long%20coat%20standing%20straight%20elegant%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20centered%20composition&width=400&height=600&seq=clientjob8231result&orientation=portrait',
    poseDetection: 'Completed',
    garmentAlignment: 'Completed',
    imageComposition: 'Completed',
    finalRendering: 'Completed',
  },
  'JOB-8230': {
    id: 'JOB-8230',
    garment: 'Knit Sweater #KS-2201',
    garmentCategory: 'Top',
    garmentStatus: 'Active',
    credits: 5,
    status: 'Completed',
    submitted: '2024-01-15 13:30:18',
    completed: '2024-01-15 13:30:21',
    processingTime: '2.2s',
    userImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20portrait%20photo%20standing%20straight%20relaxed%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20wearing%20plain%20shirt%20centered%20composition&width=400&height=600&seq=clientjob8230user&orientation=portrait',
    resultImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20wearing%20cozy%20knit%20sweater%20cream%20color%20soft%20texture%20standing%20straight%20relaxed%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20centered%20composition&width=400&height=600&seq=clientjob8230result&orientation=portrait',
    poseDetection: 'Completed',
    garmentAlignment: 'Completed',
    imageComposition: 'Completed',
    finalRendering: 'Completed',
  },
  'JOB-8229': {
    id: 'JOB-8229',
    garment: 'Pleated Skirt #PS-8801',
    garmentCategory: 'Skirt',
    garmentStatus: 'Active',
    credits: 0,
    status: 'Failed',
    submitted: '2024-01-15 13:22:44',
    completed: '-',
    processingTime: '-',
    userImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20portrait%20photo%20standing%20straight%20neutral%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20wearing%20casual%20top%20centered%20composition&width=400&height=600&seq=clientjob8229user&orientation=portrait',
    resultImage: null,
    poseDetection: 'Completed',
    garmentAlignment: 'Failed',
    imageComposition: 'Skipped',
    finalRendering: 'Skipped',
    errorReason: 'Low resolution input image prevented accurate garment mapping',
    errorLog: 'ERROR [2024-01-15 13:22:45]: Input image resolution below minimum threshold (512px).\nERROR [2024-01-15 13:22:45]: Garment alignment aborted.\nERROR [2024-01-15 13:22:45]: Job terminated with status: FAILED',
    errorTimestamp: '2024-01-15 13:22:45',
  },
  'JOB-8228': {
    id: 'JOB-8228',
    garment: 'Polo Shirt #PL-1102',
    garmentCategory: 'Top',
    garmentStatus: 'Active',
    credits: 5,
    status: 'Completed',
    submitted: '2024-01-15 13:15:30',
    completed: '2024-01-15 13:15:32',
    processingTime: '1.9s',
    userImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20portrait%20photo%20standing%20straight%20smart%20casual%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20wearing%20plain%20tshirt%20centered%20composition&width=400&height=600&seq=clientjob8228user&orientation=portrait',
    resultImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20wearing%20classic%20polo%20shirt%20navy%20blue%20color%20collar%20short%20sleeves%20standing%20straight%20smart%20casual%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20centered%20composition&width=400&height=600&seq=clientjob8228result&orientation=portrait',
    poseDetection: 'Completed',
    garmentAlignment: 'Completed',
    imageComposition: 'Completed',
    finalRendering: 'Completed',
  },
  'JOB-8227': {
    id: 'JOB-8227',
    garment: 'Maxi Dress #MD-5503',
    garmentCategory: 'Dress',
    garmentStatus: 'Active',
    credits: 5,
    status: 'Processing',
    submitted: '2024-01-15 13:08:55',
    completed: '-',
    processingTime: '-',
    userImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20portrait%20photo%20standing%20straight%20graceful%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20wearing%20simple%20outfit%20centered%20composition&width=400&height=600&seq=clientjob8227user&orientation=portrait',
    resultImage: null,
    poseDetection: 'Completed',
    garmentAlignment: 'Completed',
    imageComposition: 'Processing',
    finalRendering: 'Pending',
  },
  'JOB-8226': {
    id: 'JOB-8226',
    garment: 'Cargo Pants #CP-7704',
    garmentCategory: 'Pants',
    garmentStatus: 'Active',
    credits: 5,
    status: 'Completed',
    submitted: '2024-01-15 13:01:12',
    completed: '2024-01-15 13:01:15',
    processingTime: '2.8s',
    userImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20portrait%20photo%20standing%20straight%20casual%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20wearing%20plain%20top%20centered%20composition&width=400&height=600&seq=clientjob8226user&orientation=portrait',
    resultImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20wearing%20stylish%20cargo%20pants%20olive%20green%20multiple%20pockets%20standing%20straight%20casual%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20centered%20composition&width=400&height=600&seq=clientjob8226result&orientation=portrait',
    poseDetection: 'Completed',
    garmentAlignment: 'Completed',
    imageComposition: 'Completed',
    finalRendering: 'Completed',
  },
  'JOB-8225': {
    id: 'JOB-8225',
    garment: 'Silk Blouse #SB-9905',
    garmentCategory: 'Top',
    garmentStatus: 'Active',
    credits: 5,
    status: 'Completed',
    submitted: '2024-01-15 12:54:40',
    completed: '2024-01-15 12:54:43',
    processingTime: '2.4s',
    userImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20portrait%20photo%20standing%20straight%20elegant%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20wearing%20basic%20top%20centered%20composition&width=400&height=600&seq=clientjob8225user&orientation=portrait',
    resultImage: 'https://readdy.ai/api/search-image?query=professional%20fashion%20model%20wearing%20luxurious%20silk%20blouse%20ivory%20white%20smooth%20shiny%20fabric%20standing%20straight%20elegant%20pose%20clean%20white%20studio%20background%20natural%20lighting%20full%20body%20shot%20high%20quality%20photography%20realistic%20human%20model%20centered%20composition&width=400&height=600&seq=clientjob8225result&orientation=portrait',
    poseDetection: 'Completed',
    garmentAlignment: 'Completed',
    imageComposition: 'Completed',
    finalRendering: 'Completed',
  },
};

export default function JobDetailView({ jobId }: { jobId: string }) {
  const [showRetryModal, setShowRetryModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const job = jobData[jobId] || jobData['JOB-8472'];

  const handleRetry = () => setShowRetryModal(true);
  const confirmRetry = () => setShowRetryModal(false);
  const handleShare = () => setShowShareModal(true);

  const copyImageLink = async () => {
    if (job.resultImage) {
      try {
        await navigator.clipboard.writeText(job.resultImage);
      } catch (err) {
        console.error('Failed to copy image link:', err);
      } finally {
        setShowShareModal(false);
      }
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#111111] mb-2">Try-On Job Details</h1>
            <p className="text-[#6B7280]">Detailed view of a customer try-on request.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/client/try-on-jobs"
              className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[#E5E5E5] rounded-full text-sm font-medium text-[#111111] hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap"
            >
              <i className="ri-arrow-left-line text-base w-4 h-4 flex items-center justify-center"></i>
              <span>Back to Jobs</span>
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
          <ClientJobInformationCard job={job} />
          <ClientAIProcessingSteps job={job} />
          {job.status === 'Failed' && <ClientErrorLogSection job={job} />}
        </div>
        <div className="space-y-6">
          <ClientGarmentInfoSection job={job} />
          <ClientJobNavigationPanel />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <ClientUserPhotoSection imageUrl={job.userImage} />
        <ClientAIResultSection job={job} onShare={handleShare} />
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
              <p className="text-xs text-[#9CA3AF] mt-4">This will re-run the AI try-on job and consume credits again.</p>
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

      {showShareModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4">
            <div className="p-6 border-b border-[#F0F0F0]">
              <h3 className="text-lg font-semibold text-[#111111]">Share Image</h3>
              <p className="text-sm text-[#6B7280] mt-1">Copy the image link to share.</p>
            </div>
            <div className="p-6">
              <div className="bg-[#F8F8F8] rounded-xl p-4">
                <p className="text-xs text-[#6B7280] mb-2">Image URL</p>
                <p className="text-xs text-[#111111] break-all">{job.resultImage}</p>
              </div>
            </div>
            <div className="p-6 border-t border-[#F0F0F0] flex justify-end gap-3">
              <button
                onClick={() => setShowShareModal(false)}
                className="px-5 py-2.5 bg-white border border-[#E5E5E5] rounded-full text-sm font-medium text-[#111111] hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap"
              >
                Cancel
              </button>
              <button
                onClick={copyImageLink}
                className="flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-[#333333] transition-all cursor-pointer whitespace-nowrap"
              >
                <i className="ri-file-copy-line text-base w-4 h-4 flex items-center justify-center"></i>
                <span>Copy Link</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
