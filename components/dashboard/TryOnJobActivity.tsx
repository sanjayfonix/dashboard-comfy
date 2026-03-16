'use client';

const jobData: Record<string, any[]> = {
  '1': [
    { jobId: 'JOB-45198', garment: 'Summer Floral Dress', status: 'Completed', processingTime: '2.1s', date: '2024-03-15 14:32' },
    { jobId: 'JOB-45197', garment: 'Classic Denim Jacket', status: 'Completed', processingTime: '2.3s', date: '2024-03-15 14:28' },
    { jobId: 'JOB-45196', garment: 'Silk Evening Gown', status: 'Completed', processingTime: '2.4s', date: '2024-03-15 14:25' },
    { jobId: 'JOB-45195', garment: 'Casual Cotton Tee', status: 'Processing', processingTime: '-', date: '2024-03-15 14:22' },
    { jobId: 'JOB-45194', garment: 'Leather Biker Jacket', status: 'Completed', processingTime: '2.2s', date: '2024-03-15 14:18' },
    { jobId: 'JOB-45193', garment: 'Summer Floral Dress', status: 'Failed', processingTime: '-', date: '2024-03-15 14:15' },
    { jobId: 'JOB-45192', garment: 'Classic Denim Jacket', status: 'Completed', processingTime: '2.5s', date: '2024-03-15 14:12' }
  ],
  '2': [
    { jobId: 'JOB-38897', garment: 'Luxury Cashmere Coat', status: 'Completed', processingTime: '2.0s', date: '2024-03-15 13:45' },
    { jobId: 'JOB-38896', garment: 'Designer Blazer', status: 'Completed', processingTime: '2.1s', date: '2024-03-15 13:42' },
    { jobId: 'JOB-38895', garment: 'Silk Blouse', status: 'Completed', processingTime: '2.2s', date: '2024-03-15 13:38' },
    { jobId: 'JOB-38894', garment: 'Evening Dress', status: 'Completed', processingTime: '2.3s', date: '2024-03-15 13:35' },
    { jobId: 'JOB-38893', garment: 'Designer Blazer', status: 'Completed', processingTime: '2.0s', date: '2024-03-15 13:30' }
  ],
  '3': [
    { jobId: 'JOB-32098', garment: 'Urban Hoodie', status: 'Completed', processingTime: '2.4s', date: '2024-03-14 16:20' },
    { jobId: 'JOB-32097', garment: 'Streetwear Jacket', status: 'Completed', processingTime: '2.6s', date: '2024-03-14 16:15' },
    { jobId: 'JOB-32096', garment: 'Graphic T-Shirt', status: 'Completed', processingTime: '2.5s', date: '2024-03-14 16:10' },
    { jobId: 'JOB-32095', garment: 'Bomber Jacket', status: 'Failed', processingTime: '-', date: '2024-03-14 16:05' },
    { jobId: 'JOB-32094', garment: 'Urban Hoodie', status: 'Completed', processingTime: '2.3s', date: '2024-03-14 16:00' }
  ],
  '4': [
    { jobId: 'JOB-28398', garment: 'Haute Couture Gown', status: 'Completed', processingTime: '2.1s', date: '2024-03-15 12:50' },
    { jobId: 'JOB-28397', garment: 'Tailored Suit', status: 'Completed', processingTime: '2.2s', date: '2024-03-15 12:45' },
    { jobId: 'JOB-28396', garment: 'Cocktail Dress', status: 'Completed', processingTime: '2.3s', date: '2024-03-15 12:40' },
    { jobId: 'JOB-28395', garment: 'Designer Coat', status: 'Completed', processingTime: '2.0s', date: '2024-03-15 12:35' },
    { jobId: 'JOB-28394', garment: 'Haute Couture Gown', status: 'Completed', processingTime: '2.4s', date: '2024-03-15 12:30' }
  ],
  '5': [],
  '6': [
    { jobId: 'JOB-19198', garment: 'Vintage Cardigan', status: 'Completed', processingTime: '2.5s', date: '2024-03-01 10:20' },
    { jobId: 'JOB-19197', garment: 'Floral Blouse', status: 'Completed', processingTime: '2.4s', date: '2024-03-01 10:15' },
    { jobId: 'JOB-19196', garment: 'Knit Sweater', status: 'Failed', processingTime: '-', date: '2024-03-01 10:10' },
    { jobId: 'JOB-19195', garment: 'Vintage Cardigan', status: 'Completed', processingTime: '2.6s', date: '2024-03-01 10:05' }
  ]
};

export default function TryOnJobActivity({ clientId }: { clientId: string }) {
  const jobs = jobData[clientId] || jobData['1'];

  if (jobs.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5] p-8 mt-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#F5F5F5] rounded-xl flex items-center justify-center flex-shrink-0">
              <i className="ri-image-2-line text-[#111111] text-lg w-5 h-5 flex items-center justify-center"></i>
            </div>
            <h2 className="text-lg font-bold text-[#111111]">Try-On Job Activity</h2>
          </div>
        </div>
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-[#F5F5F5] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <i className="ri-image-2-line text-[#6B7280] text-2xl w-8 h-8 flex items-center justify-center"></i>
          </div>
          <h3 className="text-lg font-bold text-[#111111] mb-2">No try-on activity yet</h3>
          <p className="text-sm text-[#6B7280] mb-6">This client hasn't processed any try-on jobs.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5] mt-6">
      <div className="flex items-center justify-between px-6 py-5 border-b border-[#F0F0F0]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#F5F5F5] rounded-xl flex items-center justify-center flex-shrink-0">
            <i className="ri-image-2-line text-[#111111] text-lg w-5 h-5 flex items-center justify-center"></i>
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#111111]">Try-On Job Activity</h2>
            <p className="text-sm text-[#6B7280]">Recent try-on processing jobs</p>
          </div>
        </div>
        <button className="px-5 py-2.5 bg-[#F5F5F5] border border-[#E5E5E5] text-[#111111] rounded-full text-sm font-medium hover:bg-[#EBEBEB] transition-all cursor-pointer whitespace-nowrap">
          View All Jobs
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#FAFAFA]">
              <th className="text-left py-3 px-6 text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-wider">Job ID</th>
              <th className="text-left py-3 px-4 text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-wider">Garment</th>
              <th className="text-left py-3 px-4 text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-wider">Status</th>
              <th className="text-left py-3 px-4 text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-wider">Processing Time</th>
              <th className="text-left py-3 px-4 text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F5F5F5]">
            {jobs.map((job, index) => (
              <tr key={index} className="hover:bg-[#FAFAFA] transition-colors cursor-pointer">
                <td className="py-4 px-6">
                  <p className="text-sm font-mono font-semibold text-[#111111]">{job.jobId}</p>
                </td>
                <td className="py-4 px-4">
                  <p className="text-sm text-[#111111]">{job.garment}</p>
                </td>
                <td className="py-4 px-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
                    job.status === 'Completed'
                      ? 'bg-[#111111] text-white'
                      : job.status === 'Processing'
                      ? 'bg-[#F5F5F5] text-[#111111] border border-[#EBEBEB]'
                      : 'bg-[#F5F5F5] text-[#6B7280] border border-[#EBEBEB]'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      job.status === 'Completed' ? 'bg-white/60' : 'bg-[#9CA3AF]'
                    }`}></span>
                    {job.status}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <p className="text-sm font-medium text-[#111111]">{job.processingTime}</p>
                </td>
                <td className="py-4 px-4">
                  <p className="text-sm text-[#6B7280]">{job.date}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}