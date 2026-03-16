'use client';

interface GarmentPreviewCardProps {
  garment: any;
}

export default function GarmentPreviewCard({ garment }: GarmentPreviewCardProps) {
  const getStatusBadge = (status: string) => {
    const styles = {
      Draft: 'bg-gray-100 text-gray-600',
      Processing: 'bg-amber-50 text-amber-600',
      Active: 'bg-emerald-50 text-emerald-600',
      Paused: 'bg-gray-100 text-gray-600',
      Archived: 'bg-gray-100 text-gray-500'
    };

    const dots = {
      Draft: 'bg-gray-400',
      Processing: 'bg-amber-500',
      Active: 'bg-emerald-500',
      Paused: 'bg-gray-400',
      Archived: 'bg-gray-400'
    };

    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${dots[status as keyof typeof dots]}`}></span>
        {status}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-[#F0F0F0] overflow-hidden">
      <div className="aspect-[4/5] bg-[#F8F8F8] relative">
        <img
          src={garment.image}
          alt={garment.name}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-lg font-bold text-[#111111] mb-1">{garment.name}</h3>
          <p className="text-sm text-[#9CA3AF]">{garment.id}</p>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#6B7280]">Category</span>
            <span className="text-sm font-medium text-[#111111]">{garment.category}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#6B7280]">Upload Date</span>
            <span className="text-sm font-medium text-[#111111]">{garment.uploadDate}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#6B7280]">Status</span>
            {getStatusBadge(garment.status)}
          </div>
        </div>
      </div>
    </div>
  );
}