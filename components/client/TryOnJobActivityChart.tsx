'use client';

import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data7Days = [
  { date: 'Jan 17', jobs: 820 },
  { date: 'Jan 18', jobs: 950 },
  { date: 'Jan 19', jobs: 1100 },
  { date: 'Jan 20', jobs: 980 },
  { date: 'Jan 21', jobs: 1250 },
  { date: 'Jan 22', jobs: 1400 },
  { date: 'Jan 23', jobs: 1320 }
];

const data30Days = [
  { date: 'Dec 25', jobs: 650 },
  { date: 'Dec 28', jobs: 720 },
  { date: 'Dec 31', jobs: 890 },
  { date: 'Jan 3', jobs: 950 },
  { date: 'Jan 6', jobs: 1050 },
  { date: 'Jan 9', jobs: 1150 },
  { date: 'Jan 12', jobs: 1100 },
  { date: 'Jan 15', jobs: 1200 },
  { date: 'Jan 18', jobs: 1300 },
  { date: 'Jan 21', jobs: 1250 },
  { date: 'Jan 23', jobs: 1320 }
];

export default function TryOnJobActivityChart() {
  const [dateRange, setDateRange] = useState<'7days' | '30days'>('7days');
  const [showDropdown, setShowDropdown] = useState(false);

  const chartData = dateRange === '7days' ? data7Days : data30Days;

  return (
    <div className="bg-white rounded-2xl shadow-[0px_2px_12px_rgba(0,0,0,0.05)] border border-[#F0F0F0] p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-base font-bold text-[#111111]">Try-On Jobs Over Time</h3>
          <p className="text-sm text-[#6B7280] mt-0.5">Daily virtual try-on request volume</p>
        </div>
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-2 px-4 py-2 bg-[#F8F8F8] hover:bg-[#E5E5E5] text-[#111111] text-sm font-medium rounded-full transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>{dateRange === '7days' ? 'Last 7 Days' : 'Last 30 Days'}</span>
            <i className="ri-arrow-down-s-line w-4 h-4 flex items-center justify-center"></i>
          </button>
          {showDropdown && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-[0px_4px_16px_rgba(0,0,0,0.12)] border border-[#F0F0F0] py-2 z-10">
              <button
                onClick={() => {
                  setDateRange('7days');
                  setShowDropdown(false);
                }}
                className="w-full px-4 py-2 text-left text-sm text-[#111111] hover:bg-[#F8F8F8] transition-colors cursor-pointer"
              >
                Last 7 Days
              </button>
              <button
                onClick={() => {
                  setDateRange('30days');
                  setShowDropdown(false);
                }}
                className="w-full px-4 py-2 text-left text-sm text-[#111111] hover:bg-[#F8F8F8] transition-colors cursor-pointer"
              >
                Last 30 Days
              </button>
            </div>
          )}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="jobsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#000000" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#000000" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" vertical={false} />
          <XAxis 
            dataKey="date" 
            stroke="#9CA3AF" 
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            stroke="#9CA3AF" 
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#111111',
              border: 'none',
              borderRadius: '12px',
              padding: '8px 12px',
              fontSize: '12px',
              color: '#FFFFFF'
            }}
            labelStyle={{ color: '#9CA3AF', marginBottom: '4px' }}
          />
          <Area 
            type="monotone" 
            dataKey="jobs" 
            stroke="#000000" 
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#jobsGradient)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}