'use client';

import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function InfrastructureChart() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [timeRange, setTimeRange] = useState('Last 24 Hours');

  const data = [
    { time: '00:00', active: 12, idle: 4 },
    { time: '02:00', active: 10, idle: 6 },
    { time: '04:00', active: 8, idle: 8 },
    { time: '06:00', active: 14, idle: 4 },
    { time: '08:00', active: 18, idle: 2 },
    { time: '10:00', active: 20, idle: 4 },
    { time: '12:00', active: 22, idle: 2 },
    { time: '14:00', active: 19, idle: 5 },
    { time: '16:00', active: 21, idle: 3 },
    { time: '18:00', active: 18, idle: 6 },
    { time: '20:00', active: 16, idle: 6 },
    { time: '22:00', active: 14, idle: 8 },
  ];

  const timeRanges = ['Last 6 Hours', 'Last 24 Hours', 'Last 7 Days', 'Last 30 Days'];

  return (
    <div className="bg-white rounded-2xl p-6 border border-[#EBEBEB] shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-[#111111]">Worker Activity Over Time</h3>
          <p className="text-sm text-[#6B7280] mt-1">Active vs Idle workers</p>
        </div>
        <div className="relative">
          <button
            onClick={() => setShowDatePicker(!showDatePicker)}
            className="px-4 py-2 text-sm font-medium text-[#111111] bg-white border border-[#EBEBEB] rounded-full hover:bg-[#F5F5F5] transition-all cursor-pointer whitespace-nowrap flex items-center gap-2"
          >
            <i className="ri-calendar-line text-base w-4 h-4 flex items-center justify-center"></i>
            {timeRange}
          </button>

          {showDatePicker && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-[0px_6px_20px_rgba(0,0,0,0.12)] border border-[#EBEBEB] z-50 py-2">
              {timeRanges.map((range) => (
                <button
                  key={range}
                  onClick={() => {
                    setTimeRange(range);
                    setShowDatePicker(false);
                  }}
                  className={`w-full px-4 py-2.5 text-left text-sm hover:bg-[#F5F5F5] cursor-pointer whitespace-nowrap transition-colors ${
                    timeRange === range ? 'text-[#111111] font-medium bg-[#FAFAFA]' : 'text-[#6B7280]'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="activeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#111111" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#111111" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="idleGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9CA3AF" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#9CA3AF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" vertical={false} />
            <XAxis 
              dataKey="time" 
              stroke="#9CA3AF" 
              tick={{ fill: '#6B7280', fontSize: 12 }}
              axisLine={{ stroke: '#EBEBEB' }}
            />
            <YAxis 
              stroke="#9CA3AF" 
              tick={{ fill: '#6B7280', fontSize: 12 }}
              axisLine={{ stroke: '#EBEBEB' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #EBEBEB',
                borderRadius: '12px',
                boxShadow: '0px 4px 12px rgba(0,0,0,0.08)',
              }}
              labelStyle={{ color: '#111111', fontWeight: 600, marginBottom: '4px' }}
              itemStyle={{ color: '#6B7280', fontSize: '13px' }}
            />
            <Area 
              type="monotone" 
              dataKey="active" 
              stroke="#111111" 
              strokeWidth={2}
              fill="url(#activeGradient)" 
              name="Active Workers"
            />
            <Area 
              type="monotone" 
              dataKey="idle" 
              stroke="#9CA3AF" 
              strokeWidth={2}
              fill="url(#idleGradient)" 
              name="Idle Workers"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-[#F0F0F0]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#111111]"></div>
          <span className="text-sm text-[#6B7280]">Active Workers</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#9CA3AF]"></div>
          <span className="text-sm text-[#6B7280]">Idle Workers</span>
        </div>
      </div>
    </div>
  );
}