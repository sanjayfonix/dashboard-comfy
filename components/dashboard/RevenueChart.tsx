'use client';

import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function RevenueChart() {
  const [timeRange, setTimeRange] = useState('6months');
  const [showDropdown, setShowDropdown] = useState(false);

  const data = [
    { month: 'Jan', revenue: 32500 },
    { month: 'Feb', revenue: 38200 },
    { month: 'Mar', revenue: 41800 },
    { month: 'Apr', revenue: 45600 },
    { month: 'May', revenue: 52300 },
    { month: 'Jun', revenue: 48900 },
  ];

  const timeRanges = [
    { value: '1month', label: 'Last Month' },
    { value: '3months', label: 'Last 3 Months' },
    { value: '6months', label: 'Last 6 Months' },
    { value: '1year', label: 'Last Year' },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-black">Revenue Over Time</h2>
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="px-4 py-2 bg-gray-50 text-black rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <span>Last 6 Months</span>
            <i className="ri-arrow-down-s-line"></i>
          </button>
          {showDropdown && (
            <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[180px] z-10">
              {timeRanges.map((range) => (
                <button
                  key={range.value}
                  onClick={() => {
                    setTimeRange(range.value);
                    setShowDropdown(false);
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors text-black"
                >
                  {range.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#000000" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#000000" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" stroke="#666" />
          <YAxis stroke="#666" tickFormatter={(value) => `$${value / 1000}k`} />
          <Tooltip 
            formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
            contentStyle={{ borderRadius: '8px', border: '1px solid #e5e5e5' }}
          />
          <Area type="monotone" dataKey="revenue" stroke="#000000" strokeWidth={2} fill="url(#revenueGradient)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
