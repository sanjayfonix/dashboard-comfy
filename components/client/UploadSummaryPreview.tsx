interface UploadSummaryPreviewProps {
  image: string;
  name: string;
  category: string;
  status: string;
}

export default function UploadSummaryPreview({ image, name, category, status }: UploadSummaryPreviewProps) {
  const getStatusBadge = (status: string) => {
    const styles = {
      Draft: 'bg-gray-100 text-gray-600',
      Active: 'bg-emerald-50 text-emerald-600',
      Paused: 'bg-gray-100 text-gray-600'
    };

    const dots = {
      Draft: 'bg-gray-400',
      Active: 'bg-emerald-500',
      Paused: 'bg-gray-400'
    };

    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${dots[status as keyof typeof dots]}`}></span>
        {status}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-[#F0F0F0] p-6">
      <div className="mb-4">
        <h3 className="text-base font-semibold text-[#111111] mb-1">Upload Preview</h3>
        <p className="text-sm text-[#6B7280]">Review your garment before uploading.</p>
      </div>

      <div className="space-y-4">
        <div className="aspect-square rounded-xl overflow-hidden bg-[#F8F8F8]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="space-y-3">
          <div>
            <p className="text-xs text-[#9CA3AF] mb-1">Garment Name</p>
            <p className="text-sm font-medium text-[#111111]">{name}</p>
          </div>

          <div>
            <p className="text-xs text-[#9CA3AF] mb-1">Category</p>
            <p className="text-sm font-medium text-[#111111]">{category}</p>
          </div>

          <div>
            <p className="text-xs text-[#9CA3AF] mb-1">Status</p>
            {getStatusBadge(status)}
          </div>
        </div>
      </div>
    </div>
  );
}