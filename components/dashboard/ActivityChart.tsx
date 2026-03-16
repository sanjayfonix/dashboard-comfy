'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Mon', jobs: 12400 },
  { date: 'Tue', jobs: 15800 },
  { date: 'Wed', jobs: 14200 },
  { date: 'Thu', jobs: 18900 },
  { date: 'Fri', jobs: 21500 },
  { date: 'Sat', jobs: 19800 },
  { date: 'Sun', jobs: 16200 },
];

export default function ActivityChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0px_2px_12px_rgba(0,0,0,0.05)] border border-[#EBEBEB] h-full">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-base font-semibold text-[#111111] mb-1">Platform Try-On Activity</h2>
          <p className="text-sm text-[#9CA3AF]">Daily AI try-on job volume across all clients</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs text-[#6B7280] bg-[#F5F5F5] px-3 py-1.5 rounded-full border border-[#EBEBEB]">
            <span className="w-2 h-2 rounded-full bg-[#111111] inline-block"></span>
            Try-On Jobs
          </span>
        </div>
      </div>

      <div className="flex items-center gap-6 mb-6 pb-5 border-b border-[#F0F0F0]">
        <div>
          <p className="text-2xl font-bold text-[#111111] tracking-tight">118,800</p>
          <p className="text-xs text-[#9CA3AF] mt-0.5">Total this week</p>
        </div>
        <div className="w-px h-8 bg-[#F0F0F0]"></div>
        <div>
          <p className="text-2xl font-bold text-[#111111] tracking-tight">+18.4%</p>
          <p className="text-xs text-[#9CA3AF] mt-0.5">vs last week</p>
        </div>
        <div className="w-px h-8 bg-[#F0F0F0]"></div>
        <div>
          <p className="text-2xl font-bold text-[#111111] tracking-tight">21,500</p>
          <p className="text-xs text-[#9CA3AF] mt-0.5">Peak day (Fri)</p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorJobs" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#111111" stopOpacity={0.10} />
              <stop offset="100%" stopColor="#111111" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" vertical={false} />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#9CA3AF', fontSize: 12 }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#9CA3AF', fontSize: 11 }}
            tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #EBEBEB',
              borderRadius: '12px',
              boxShadow: '0px 8px 20px rgba(0,0,0,0.06)',
              padding: '10px 14px',
            }}
            labelStyle={{ color: '#111111', fontWeight: 600, fontSize: 13, marginBottom: 4 }}
            itemStyle={{ color: '#6B7280', fontSize: 12 }}
            formatter={(value: number) => [value.toLocaleString(), 'Jobs']}
          />
          <Area
            type="monotone"
            dataKey="jobs"
            stroke="#111111"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorJobs)"
            dot={false}
            activeDot={{ r: 5, fill: '#111111', strokeWidth: 0 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
