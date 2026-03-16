'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Completed', value: 23145, color: '#111111' },
  { name: 'Processing', value: 987, color: '#6B7280' },
  { name: 'Failed', value: 435, color: '#D1D5DB' },
];

export default function JobStatusDistribution() {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-[#F0F0F0]">
      <div className="mb-6">
        <h2 className="text-base font-semibold text-[#111111] mb-1">Job Status Breakdown</h2>
        <p className="text-xs text-[#9CA3AF]">Distribution of try-on job statuses</p>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: '#111111',
                border: 'none',
                borderRadius: '8px',
                fontSize: '12px',
                color: '#FFFFFF',
                padding: '8px 12px',
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {data.map((item) => (
          <div key={item.name} className="text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></span>
              <p className="text-xs font-medium text-[#6B7280]">{item.name}</p>
            </div>
            <p className="text-lg font-bold text-[#111111]">{item.value.toLocaleString()}</p>
            <p className="text-xs text-[#9CA3AF]">{((item.value / total) * 100).toFixed(1)}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}