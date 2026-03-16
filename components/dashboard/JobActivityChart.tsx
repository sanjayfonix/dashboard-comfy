'use client';

import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const jobTrendData = [
  { time: '00:00', jobs: 1240 },
  { time: '04:00', jobs: 890 },
  { time: '08:00', jobs: 2340 },
  { time: '12:00', jobs: 3120 },
  { time: '16:00', jobs: 2890 },
  { time: '20:00', jobs: 2450 },
  { time: '23:59', jobs: 1680 },
];

export default function JobActivityChart() {
  const [showDateRangeModal, setShowDateRangeModal] = useState(false);
  const [selectedRange, setSelectedRange] = useState('Last 24 Hours');

  const dateRanges = ['Last 24 Hours', 'Last 7 Days', 'Last 30 Days', 'Last 90 Days', 'Custom Range'];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5] mb-8">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold text-[#111111] mb-1">Try-On Jobs Processed Over Time</h2>
          <p className="text-sm text-[#6B7280]">Real-time AI job volume and processing activity</p>
        </div>
        <button
          onClick={() => setShowDateRangeModal(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[#E5E5E5] rounded-full text-sm font-medium text-[#111111] hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap"
        >
          <i className="ri-calendar-line text-base w-4 h-4 flex items-center justify-center"></i>
          <span>{selectedRange}</span>
          <i className="ri-arrow-down-s-line w-4 h-4 flex items-center justify-center"></i>
        </button>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={jobTrendData}>
          <defs>
            <linearGradient id="colorJobTrend" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#000000" stopOpacity={0.15}/>
              <stop offset="95%" stopColor="#000000" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" vertical={false} />
          <XAxis 
            dataKey="time" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6B7280', fontSize: 12 }}
            dy={10}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6B7280', fontSize: 12 }}
            dx={-10}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#FFFFFF', 
              border: '1px solid #E5E5E5',
              borderRadius: '12px',
              boxShadow: '0px 4px 12px rgba(0,0,0,0.08)',
              padding: '12px'
            }}
            labelStyle={{ color: '#111111', fontWeight: 600, marginBottom: '4px' }}
            itemStyle={{ color: '#6B7280', fontSize: '13px' }}
          />
          <Area 
            type="monotone" 
            dataKey="jobs" 
            stroke="#000000" 
            strokeWidth={2.5}
            fillOpacity={1} 
            fill="url(#colorJobTrend)" 
          />
        </AreaChart>
      </ResponsiveContainer>

      {showDateRangeModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4">
            <div className="p-6 border-b border-[#F0F0F0]">
              <h3 className="text-lg font-semibold text-[#111111]">Change Time Range</h3>
              <p className="text-sm text-[#6B7280] mt-1">Select a time period to view job activity</p>
            </div>
            <div className="p-6 space-y-2">
              {dateRanges.map((range) => (
                <button
                  key={range}
                  onClick={() => {
                    setSelectedRange(range);
                    setShowDateRangeModal(false);
                  }}
                  className={`w-full px-4 py-3 rounded-xl text-left text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                    selectedRange === range
                      ? 'bg-black text-white'
                      : 'bg-[#F8F8F8] text-[#111111] hover:bg-[#F0F0F0]'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
            <div className="p-6 border-t border-[#F0F0F0] flex justify-end">
              <button
                onClick={() => setShowDateRangeModal(false)}
                className="px-5 py-2.5 bg-white border border-[#E5E5E5] rounded-full text-sm font-medium text-[#111111] hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}