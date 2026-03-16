'use client';

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Fashion Brand X', value: 426000, color: '#111111' },
  { name: 'Luxury Apparel Co.', value: 394500, color: '#3B3B3B' },
  { name: 'Urban Style Inc.', value: 360500, color: '#6B7280' },
  { name: 'Elite Fashion House', value: 342000, color: '#9CA3AF' },
  { name: 'Others', value: 531500, color: '#E5E5E5' },
];

const total = data.reduce((sum, d) => sum + d.value, 0);

export default function CreditConsumptionBreakdown() {
  return (
    <div className="bg-white rounded-2xl shadow-[0px_2px_12px_rgba(0,0,0,0.05)] border border-[#EBEBEB] p-6">
      <div className="mb-5">
        <h2 className="text-base font-semibold text-[#111111] mb-0.5">Credit Consumption Breakdown</h2>
        <p className="text-sm text-[#9CA3AF]">Top clients by credit usage this month</p>
      </div>

      <div className="flex items-center gap-6">
        <div className="w-40 h-40 flex-shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={44}
                outerRadius={68}
                paddingAngle={2}
                dataKey="value"
                strokeWidth={0}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #EBEBEB',
                  borderRadius: '10px',
                  boxShadow: '0px 4px 12px rgba(0,0,0,0.08)',
                  padding: '8px 12px',
                  fontSize: '12px',
                }}
                formatter={(value: number) => [value.toLocaleString() + ' credits', '']}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex-1 space-y-3">
          {data.map((item, i) => {
            const pct = ((item.value / total) * 100).toFixed(1);
            return (
              <div key={i} className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }}></span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-[#111111] truncate">{item.name}</span>
                    <span className="text-xs text-[#9CA3AF] ml-2 flex-shrink-0">{pct}%</span>
                  </div>
                  <div className="w-full h-1 bg-[#F0F0F0] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${pct}%`, backgroundColor: item.color }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-5 pt-5 border-t border-[#F0F0F0] flex items-center justify-between">
        <div>
          <p className="text-xs text-[#9CA3AF]">Total credits consumed</p>
          <p className="text-lg font-bold text-[#111111]">{(total / 1000000).toFixed(2)}M</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-[#9CA3AF]">Across active clients</p>
          <p className="text-lg font-bold text-[#111111]">247</p>
        </div>
      </div>
    </div>
  );
}
