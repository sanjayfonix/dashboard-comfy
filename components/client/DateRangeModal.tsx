'use client';

interface DateRangeModalProps {
  currentRange: string;
  onSelect: (range: string) => void;
  onClose: () => void;
}

const dateRanges = [
  { label: 'Last 7 days', value: 'Last 7 days' },
  { label: 'Last 30 days', value: 'Last 30 days' },
  { label: 'Last 90 days', value: 'Last 90 days' },
  { label: 'Last 6 months', value: 'Last 6 months' },
  { label: 'Last 12 months', value: 'Last 12 months' },
  { label: 'All time', value: 'All time' },
];

export default function DateRangeModal({ currentRange, onSelect, onClose }: DateRangeModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full">
        <div className="px-6 py-5 border-b border-[#F0F0F0]">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#111111]">Select Date Range</h2>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center hover:bg-[#F8F8F8] rounded-lg transition-colors cursor-pointer"
            >
              <i className="ri-close-line w-5 h-5 flex items-center justify-center text-[#6B7280]"></i>
            </button>
          </div>
        </div>

        <div className="p-3">
          {dateRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => onSelect(range.value)}
              className={`w-full px-4 py-3 rounded-xl text-sm font-medium text-left transition-colors cursor-pointer whitespace-nowrap ${
                currentRange === range.value
                  ? 'bg-black text-white'
                  : 'text-[#111111] hover:bg-[#F8F8F8]'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}