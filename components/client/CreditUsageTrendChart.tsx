'use client';

import { useRouter } from 'next/navigation';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Jan 1', credits: 3200 },
  { date: 'Jan 3', credits: 4100 },
  { date: 'Jan 5', credits: 3800 },
  { date: 'Jan 7', credits: 4500 },
  { date: 'Jan 9', credits: 5200 },
  { date: 'Jan 11', credits: 4800 },
  { date: 'Jan 13', credits: 5600 },
  { date: 'Jan 15', credits: 6100 },
  { date: 'Jan 17', credits: 5400 },
  { date: 'Jan 19', credits: 6800 },
  { date: 'Jan 21', credits: 6200 },
  { date: 'Jan 23', credits: 7100 },
];

export default function CreditUsageTrendChart() {
  const router = useRouter();

  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-[#F0F0F0]">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-base font-semibold text-[#111111] mb-1">Credit Usage Over Time</h2>
          <p className="text-xs text-[#9CA3AF]">Credits consumed per day</p>
        </div>
        <button
          onClick={() => router.push('/client/credits')}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-[#F8F8F8] hover:bg-black hover:text-white rounded-lg text-xs font-medium text-[#111111] transition-all cursor-pointer whitespace-nowrap"
        >
          <span>View Credits</span>
          <i className="ri-arrow-right-line w-3.5 h-3.5 flex items-center justify-center"></i>
        </button>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorCredits" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#000000" stopOpacity={0.15}/>
                <stop offset="95%" stopColor="#000000" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" vertical={false} />
            <XAxis 
              dataKey="date" 
              stroke="#9CA3AF" 
              fontSize={11}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="#9CA3AF" 
              fontSize={11}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#111111',
                border: 'none',
                borderRadius: '8px',
                fontSize: '12px',
                color: '#FFFFFF',
                padding: '8px 12px',
              }}
              labelStyle={{ color: '#9CA3AF', marginBottom: '4px' }}
            />
            <Area 
              type="monotone" 
              dataKey="credits" 
              stroke="#000000" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorCredits)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}