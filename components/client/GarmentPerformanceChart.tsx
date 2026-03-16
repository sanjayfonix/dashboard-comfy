'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Summer Floral Dress', tryOns: 1842 },
  { name: 'Classic Denim Jacket', tryOns: 1567 },
  { name: 'Leather Ankle Boots', tryOns: 1423 },
  { name: 'Silk Evening Gown', tryOns: 1289 },
  { name: 'Casual White Sneakers', tryOns: 1156 },
];

export default function GarmentPerformanceChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-[#F0F0F0]">
      <div className="mb-6">
        <h2 className="text-base font-semibold text-[#111111] mb-1">Top Performing Garments</h2>
        <p className="text-xs text-[#9CA3AF]">Garments with the highest try-on counts</p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" horizontal={false} />
            <XAxis 
              type="number"
              stroke="#9CA3AF" 
              fontSize={11}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              type="category"
              dataKey="name"
              stroke="#9CA3AF" 
              fontSize={11}
              tickLine={false}
              axisLine={false}
              width={150}
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
              cursor={{ fill: '#F8F8F8' }}
            />
            <Bar 
              dataKey="tryOns" 
              fill="#000000" 
              radius={[0, 8, 8, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}