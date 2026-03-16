'use client';

interface CreditPackageCardProps {
  name: string;
  credits: number;
  price: number;
  description: string;
  popular?: boolean;
  onSelect: () => void;
}

export default function CreditPackageCard({
  name,
  credits,
  price,
  description,
  popular = false,
  onSelect,
}: CreditPackageCardProps) {
  const pricePerCredit = (price / credits).toFixed(3);

  return (
    <div className={`bg-white rounded-2xl p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border-2 transition-all hover:shadow-[0px_4px_16px_rgba(0,0,0,0.08)] ${
      popular ? 'border-[#111111]' : 'border-[#F0F0F0]'
    }`}>
      {popular && (
        <div className="mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#111111] text-white">
            Most Popular
          </span>
        </div>
      )}

      <h3 className="text-lg font-bold text-[#111111] mb-2">{name}</h3>
      <p className="text-sm text-[#6B7280] mb-6">{description}</p>

      <div className="mb-6">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-3xl font-bold text-[#111111]">${price}</span>
          <span className="text-sm text-[#9CA3AF]">USD</span>
        </div>
        <p className="text-sm text-[#6B7280]">{credits.toLocaleString()} credits</p>
        <p className="text-xs text-[#9CA3AF] mt-1">${pricePerCredit} per credit</p>
      </div>

      <button
        onClick={onSelect}
        className={`w-full py-2.5 rounded-full text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${
          popular
            ? 'bg-[#111111] text-white hover:bg-[#333333]'
            : 'bg-[#F8F8F8] text-[#111111] hover:bg-[#E5E5E5]'
        }`}
      >
        Select Package
      </button>
    </div>
  );
}