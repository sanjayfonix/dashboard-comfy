'use client';

import { useRouter } from 'next/navigation';

interface RecentTryOnJobsTableProps {
  garmentId: string;
}

const jobsData: any = {
  'G-1001': [
    { id: 'JOB-8234', status: 'Completed', processingTime: '2.1s', date: 'Jan 5, 2025, 3:42 PM' },
    { id: 'JOB-8233', status: 'Completed', processingTime: '2.3s', date: 'Jan 5, 2025, 3:38 PM' },
    { id: 'JOB-8232', status: 'Completed', processingTime: '2.2s', date: 'Jan 5, 2025, 3:35 PM' },
    { id: 'JOB-8231', status: 'Failed', processingTime: '0.8s', date: 'Jan 5, 2025, 3:30 PM' },
    { id: 'JOB-8230', status: 'Completed', processingTime: '2.4s', date: 'Jan 5, 2025, 3:25 PM' }
  ],
  'G-1002': [
    { id: 'JOB-8229', status: 'Completed', processingTime: '2.0s', date: 'Jan 5, 2025, 3:20 PM' },
    { id: 'JOB-8228', status: 'Completed', processingTime: '2.1s', date: 'Jan 5, 2025, 3:15 PM' },
    { id: 'JOB-8227', status: 'Completed', processingTime: '2.2s', date: 'Jan 5, 2025, 3:10 PM' }
  ],
  'G-1003': [
    { id: 'JOB-8226', status: 'Completed', processingTime: '2.7s', date: 'Jan 4, 2025, 11:45 PM' },
    { id: 'JOB-8225', status: 'Completed', processingTime: '2.9s', date: 'Jan 4, 2025, 11:30 PM' }
  ],
  'G-1004': [],
  'G-1005': [
    { id: 'JOB-8224', status: 'Completed', processingTime: '2.4s', date: 'Dec 30, 2024, 5:20 PM' },
    { id: 'JOB-8223', status: 'Completed', processingTime: '2.6s', date: 'Dec 30, 2024, 5:15 PM' }
  ]
};

export default function RecentTryOnJobsTable({ garmentId }: RecentTryOnJobsTableProps) {
  const router = useRouter();
  const jobs = jobsData[garmentId] || [];

  const getStatusBadge = (status: string) => {
    const styles = {
      Completed: 'bg-emerald-50 text-emerald-600',
      Failed: 'bg-red-50 text-red-600',
      Processing: 'bg-amber-50 text-amber-600'
    };

    const dots = {
      Completed: 'bg-emerald-500',
      Failed: 'bg-red-500',
      Processing: 'bg-amber-500'
    };

    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${dots[status as keyof typeof dots]}`}></span>
        {status}
      </span>
    );
  };

  if (jobs.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-2xl shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-[#F0F0F0] overflow-hidden">
      <div className="px-6 py-5 border-b border-[#F0F0F0]">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#F8F8F8] rounded-xl flex items-center justify-center">
            <i className="ri-file-list-3-line text-[#6B7280] text-xl w-5 h-5 flex items-center justify-center"></i>
          </div>
          <div>
            <h3 className="text-base font-bold text-[#111111]">Recent Try-On Jobs</h3>
            <p className="text-sm text-[#6B7280]">Latest virtual try-on sessions using this garment</p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F8F8F8] border-b border-[#F0F0F0]">
              <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Job ID</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Status</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Processing Time</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Date</th>
              <th className="text-right px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F0F0F0]">
            {jobs.map((job: any) => (
              <tr key={job.id} className="hover:bg-[#F8F8F8] transition-colors">
                <td className="px-6 py-4">
                  <p className="text-sm font-medium text-[#111111]">{job.id}</p>
                </td>
                <td className="px-6 py-4">
                  {getStatusBadge(job.status)}
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-[#6B7280]">{job.processingTime}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-[#6B7280]">{job.date}</p>
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => router.push(`/client/try-on-jobs/${job.id}`)}
                    className="px-4 py-2 bg-[#F8F8F8] text-[#111111] rounded-full text-sm font-medium hover:bg-[#E5E5E5] transition-all cursor-pointer whitespace-nowrap inline-flex items-center gap-2"
                  >
                    <i className="ri-eye-line w-4 h-4 flex items-center justify-center"></i>
                    <span>View Job</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}