'use client';

import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Jan 1', jobs: 420 },
  { date: 'Jan 3', jobs: 580 },
  { date: 'Jan 5', jobs: 520 },
  { date: 'Jan 7', jobs: 680 },
  { date: 'Jan 9', jobs: 750 },
  { date: 'Jan 11', jobs: 620 },
  { date: 'Jan 13', jobs: 890 },
  { date: 'Jan 15', jobs: 920 },
  { date: 'Jan 17', jobs: 780 },
  { date: 'Jan 19', jobs: 1050 },
  { date: 'Jan 21', jobs: 980 },
  { date: 'Jan 23', jobs: 1120 },
];

export default function TryOnActivityChart() {
  const [dateRange, setDateRange] = useState('Last 7 days');
  const [showDateMenu, setShowDateMenu] = useState(false);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-[#F0F0F0] h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-base font-semibold text-[#111111] mb-1">Try-On Activity</h2>
          <p className="text-xs text-[#9CA3AF]">Jobs processed over time</p>
        </div>
        <div className="relative">
          <button
            onClick={() => setShowDateMenu(!showDateMenu)}
            className="flex items-center gap-2 px-3.5 py-2 bg-[#F8F8F8] rounded-full text-xs font-medium text-[#111111] hover:bg-[#F0F0F0] transition-colors cursor-pointer whitespace-nowrap"
          >
            <i className="ri-calendar-line w-3.5 h-3.5 flex items-center justify-center text-[#6B7280]"></i>
            <span>{dateRange}</span>
            <i className="ri-arrow-down-s-line w-3.5 h-3.5 flex items-center justify-center text-[#6B7280]"></i>
          </button>
          {showDateMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-[0px_8px_24px_rgba(0,0,0,0.10)] border border-[#E5E5E5] z-50 py-1.5 overflow-hidden">
              {['Last 24 hours', 'Last 7 days', 'Last 30 days', 'Last 90 days'].map((range) => (
                <button
                  key={range}
                  onClick={() => { setDateRange(range); setShowDateMenu(false); }}
                  className={`w-full px-3 py-2 text-left text-xs transition-colors cursor-pointer whitespace-nowrap ${
                    dateRange === range ? 'bg-black text-white font-medium' : 'text-[#111111] hover:bg-[#F8F8F8]'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorJobs" x1="0" y1="0" x2="0" y2="1">
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
              dataKey="jobs" 
              stroke="#000000" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorJobs)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}