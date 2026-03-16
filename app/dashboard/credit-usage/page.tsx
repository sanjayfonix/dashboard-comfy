'use client';

import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Link from 'next/link';

const usageData = [
  { date: 'Jan 1', credits: 420000 },
  { date: 'Jan 8', credits: 580000 },
  { date: 'Jan 15', credits: 720000 },
  { date: 'Jan 22', credits: 890000 },
  { date: 'Jan 29', credits: 1050000 },
  { date: 'Feb 5', credits: 1180000 },
  { date: 'Feb 12', credits: 1320000 },
];

const clientUsageData = [
  { id: '1001', name: 'Fashion Brand X', purchased: 500000, used: 426000, remaining: 74000, dailyAvg: 12400, lastActivity: '2 hours ago', status: 'Active' },
  { id: '1002', name: 'Luxury Apparel Co.', purchased: 450000, used: 394500, remaining: 55500, dailyAvg: 11200, lastActivity: '5 hours ago', status: 'Active' },
  { id: '1003', name: 'Urban Style Inc.', purchased: 400000, used: 360500, remaining: 39500, dailyAvg: 10800, lastActivity: '1 day ago', status: 'Active' },
  { id: '1004', name: 'Elite Fashion House', purchased: 380000, used: 342000, remaining: 38000, dailyAvg: 9800, lastActivity: '3 hours ago', status: 'Active' },
  { id: '1005', name: 'Modern Wear Ltd.', purchased: 350000, used: 324000, remaining: 26000, dailyAvg: 9200, lastActivity: '6 hours ago', status: 'Active' },
  { id: '1006', name: 'Chic Boutique', purchased: 300000, used: 285000, remaining: 15000, dailyAvg: 8100, lastActivity: '4 hours ago', status: 'Active' },
  { id: '1007', name: 'Trendy Threads', purchased: 280000, used: 268000, remaining: 12000, dailyAvg: 7600, lastActivity: '8 hours ago', status: 'Active' },
  { id: '1008', name: 'Style Maven Co.', purchased: 250000, used: 242000, remaining: 8000, dailyAvg: 6900, lastActivity: '12 hours ago', status: 'Active' },
  { id: '1009', name: 'Glamour Garments', purchased: 220000, used: 215000, remaining: 5000, dailyAvg: 6100, lastActivity: '1 day ago', status: 'Active' },
  { id: '1010', name: 'Vogue Ventures', purchased: 200000, used: 198000, remaining: 2000, dailyAvg: 5600, lastActivity: '2 days ago', status: 'Active' },
];

const alerts = [
  { id: 1, clientId: '1010', client: 'Vogue Ventures', message: 'Client running low on credits (2,000 remaining)', type: 'warning' },
  { id: 2, clientId: '1002', client: 'Luxury Apparel Co.', message: 'Unusual credit usage spike detected (+45% this week)', type: 'alert' },
  { id: 3, clientId: '1009', client: 'Glamour Garments', message: 'Client has 5,000 unused credits with low activity', type: 'info' },
];

const ITEMS_PER_PAGE = 5;

export default function CreditUsagePage() {
  const [showDateFilter, setShowDateFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [usageFilter, setUsageFilter] = useState('All');
  const [activityFilter, setActivityFilter] = useState('All');
  const [showExportModal, setShowExportModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const totalIssued = 3330000;
  const totalConsumed = 3054500;
  const totalRemaining = 275500;
  const avgPerClient = 305450;

  const filteredClients = clientUsageData.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || client.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredClients.length / ITEMS_PER_PAGE);
  const paginatedClients = filteredClients.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-8">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#111111] mb-2">Credit Usage Dashboard</h1>
          <p className="text-[#6B7280]">Monitor credit consumption and billing activity across all clients</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setShowExportModal(true)}
            className="px-5 py-2.5 bg-white border border-[#E5E5E5] text-[#111111] rounded-xl text-sm font-medium hover:bg-[#F8F8F8] transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2"
          >
            <i className="ri-download-line w-4 h-4 flex items-center justify-center"></i>
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5]">
          <div className="w-10 h-10 bg-[#F8F8F8] rounded-xl flex items-center justify-center mb-4">
            <i className="ri-coin-line text-xl text-[#111111] w-5 h-5 flex items-center justify-center"></i>
          </div>
          <h3 className="text-3xl font-bold text-[#111111] mb-1">{(totalIssued / 1000000).toFixed(1)}M</h3>
          <p className="text-sm text-[#6B7280] mb-2">Total Credits Issued</p>
          <div className="flex items-center gap-1 text-xs text-[#10B981]">
            <i className="ri-arrow-up-line w-3 h-3 flex items-center justify-center"></i>
            <span>+12.5%</span>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5]">
          <div className="w-10 h-10 bg-[#F8F8F8] rounded-xl flex items-center justify-center mb-4">
            <i className="ri-fire-line text-xl text-[#111111] w-5 h-5 flex items-center justify-center"></i>
          </div>
          <h3 className="text-3xl font-bold text-[#111111] mb-1">{(totalConsumed / 1000000).toFixed(1)}M</h3>
          <p className="text-sm text-[#6B7280] mb-2">Total Credits Consumed</p>
          <div className="flex items-center gap-1 text-xs text-[#10B981]">
            <i className="ri-arrow-up-line w-3 h-3 flex items-center justify-center"></i>
            <span>+8.3%</span>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5]">
          <div className="w-10 h-10 bg-[#F8F8F8] rounded-xl flex items-center justify-center mb-4">
            <i className="ri-wallet-line text-xl text-[#111111] w-5 h-5 flex items-center justify-center"></i>
          </div>
          <h3 className="text-3xl font-bold text-[#111111] mb-1">{(totalRemaining / 1000).toFixed(0)}K</h3>
          <p className="text-sm text-[#6B7280] mb-2">Credits Remaining</p>
          <div className="flex items-center gap-1 text-xs text-[#EF4444]">
            <i className="ri-arrow-down-line w-3 h-3 flex items-center justify-center"></i>
            <span>-4.2%</span>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5]">
          <div className="w-10 h-10 bg-[#F8F8F8] rounded-xl flex items-center justify-center mb-4">
            <i className="ri-user-line text-xl text-[#111111] w-5 h-5 flex items-center justify-center"></i>
          </div>
          <h3 className="text-3xl font-bold text-[#111111] mb-1">{(avgPerClient / 1000).toFixed(0)}K</h3>
          <p className="text-sm text-[#6B7280] mb-2">Avg Credits Per Client</p>
          <div className="flex items-center gap-1 text-xs text-[#10B981]">
            <i className="ri-arrow-up-line w-3 h-3 flex items-center justify-center"></i>
            <span>+6.7%</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5] mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-[#111111] mb-1">Credit Consumption Over Time</h2>
            <p className="text-sm text-[#6B7280]">Daily credit usage across the platform</p>
          </div>
          <button 
            onClick={() => setShowDateFilter(!showDateFilter)}
            className="px-4 py-2 bg-[#F8F8F8] text-[#111111] rounded-xl text-sm font-medium hover:bg-[#F0F0F0] transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2"
          >
            <i className="ri-calendar-line w-4 h-4 flex items-center justify-center"></i>
            Change Date Range
          </button>
        </div>
        {showDateFilter && (
          <div className="mb-6 p-4 bg-[#F8F8F8] rounded-xl flex items-center gap-4">
            <div className="flex items-center gap-2">
              <label className="text-sm text-[#6B7280]">From:</label>
              <input type="date" className="px-3 py-2 bg-white border border-[#E5E5E5] rounded-lg text-sm" />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm text-[#6B7280]">To:</label>
              <input type="date" className="px-3 py-2 bg-white border border-[#E5E5E5] rounded-lg text-sm" />
            </div>
            <button className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-[#111111] transition-colors cursor-pointer whitespace-nowrap">
              Apply
            </button>
          </div>
        )}
        <ResponsiveContainer width="100%" height={320}>
          <AreaChart data={usageData}>
            <defs>
              <linearGradient id="colorCredits" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#000000" stopOpacity={0.15}/>
                <stop offset="95%" stopColor="#000000" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" vertical={false} />
            <XAxis 
              dataKey="date" 
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
              dataKey="credits" 
              stroke="#000000" 
              strokeWidth={2.5}
              fillOpacity={1} 
              fill="url(#colorCredits)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {alerts.length > 0 && (
        <div className="mb-8 space-y-3">
          {alerts.map((alert) => (
            <div 
              key={alert.id}
              className={`bg-white rounded-2xl p-5 shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border flex items-center justify-between ${
                alert.type === 'warning' ? 'border-[#F59E0B]' : alert.type === 'alert' ? 'border-[#EF4444]' : 'border-[#3B82F6]'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  alert.type === 'warning' ? 'bg-[#FEF3C7]' : alert.type === 'alert' ? 'bg-[#FEE2E2]' : 'bg-[#DBEAFE]'
                }`}>
                  <i className={`${
                    alert.type === 'warning' ? 'ri-alert-line text-[#F59E0B]' : 
                    alert.type === 'alert' ? 'ri-error-warning-line text-[#EF4444]' : 
                    'ri-information-line text-[#3B82F6]'
                  } text-xl w-5 h-5 flex items-center justify-center`}></i>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#111111] mb-0.5">{alert.client}</p>
                  <p className="text-sm text-[#6B7280]">{alert.message}</p>
                </div>
              </div>
              <Link 
                href={`/dashboard/clients/${alert.clientId}`}
                className="px-4 py-2 bg-[#F8F8F8] text-[#111111] rounded-lg text-sm font-medium hover:bg-[#F0F0F0] transition-colors cursor-pointer whitespace-nowrap"
              >
                View Client
              </Link>
            </div>
          ))}
        </div>
      )}

      <div className="bg-white rounded-2xl p-6 shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5]">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-[#111111] mb-1">Client Credit Usage</h2>
          <p className="text-sm text-[#6B7280]">Detailed credit consumption by client</p>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 relative">
            <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] w-4 h-4 flex items-center justify-center"></i>
            <input
              type="text"
              placeholder="Search clients..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
              className="w-full pl-10 pr-4 py-2.5 bg-[#F8F8F8] border border-[#E5E5E5] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
            />
          </div>
          <div className="relative">
            <button 
              onClick={() => { setStatusFilter(statusFilter === 'All' ? 'Active' : 'All'); setCurrentPage(1); }}
              className="px-4 py-2.5 bg-[#F8F8F8] border border-[#E5E5E5] text-[#111111] rounded-xl text-sm font-medium hover:bg-[#F0F0F0] transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2"
            >
              <span>Status: {statusFilter}</span>
              <i className="ri-arrow-down-s-line w-4 h-4 flex items-center justify-center"></i>
            </button>
          </div>
          <div className="relative">
            <button 
              onClick={() => { setUsageFilter(usageFilter === 'All' ? 'High' : 'All'); setCurrentPage(1); }}
              className="px-4 py-2.5 bg-[#F8F8F8] border border-[#E5E5E5] text-[#111111] rounded-xl text-sm font-medium hover:bg-[#F0F0F0] transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2"
            >
              <span>Usage: {usageFilter}</span>
              <i className="ri-arrow-down-s-line w-4 h-4 flex items-center justify-center"></i>
            </button>
          </div>
          <div className="relative">
            <button 
              onClick={() => { setActivityFilter(activityFilter === 'All' ? 'Recent' : 'All'); setCurrentPage(1); }}
              className="px-4 py-2.5 bg-[#F8F8F8] border border-[#E5E5E5] text-[#111111] rounded-xl text-sm font-medium hover:bg-[#F0F0F0] transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2"
            >
              <span>Activity: {activityFilter}</span>
              <i className="ri-arrow-down-s-line w-4 h-4 flex items-center justify-center"></i>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#F0F0F0]">
                <th className="text-left py-3 px-4 text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider">Client Name</th>
                <th className="text-right py-3 px-4 text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider">Purchased</th>
                <th className="text-right py-3 px-4 text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider">Used</th>
                <th className="text-right py-3 px-4 text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider">Remaining</th>
                <th className="text-right py-3 px-4 text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider">Daily Avg</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider">Last Activity</th>
                <th className="text-right py-3 px-4 text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedClients.map((client) => (
                <tr key={client.id} className="border-b border-[#F8F8F8] hover:bg-[#FAFAFA] transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        {client.name.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-[#111111]">{client.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right text-sm text-[#111111] font-medium">{client.purchased.toLocaleString()}</td>
                  <td className="py-4 px-4 text-right text-sm text-[#111111] font-medium">{client.used.toLocaleString()}</td>
                  <td className="py-4 px-4 text-right">
                    <span className={`text-sm font-medium ${
                      client.remaining < 10000 ? 'text-[#EF4444]' : client.remaining < 50000 ? 'text-[#F59E0B]' : 'text-[#10B981]'
                    }`}>
                      {client.remaining.toLocaleString()}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right text-sm text-[#6B7280]">{client.dailyAvg.toLocaleString()}</td>
                  <td className="py-4 px-4 text-sm text-[#6B7280]">{client.lastActivity}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/dashboard/clients/${client.id}`}
                        className="w-8 h-8 bg-[#F8F8F8] rounded-lg flex items-center justify-center hover:bg-[#F0F0F0] transition-colors cursor-pointer"
                        title="View Client"
                      >
                        <i className="ri-eye-line text-[#111111] w-4 h-4 flex items-center justify-center"></i>
                      </Link>
                      <Link
                        href={`/dashboard/clients/${client.id}/edit`}
                        className="w-8 h-8 bg-[#F8F8F8] rounded-lg flex items-center justify-center hover:bg-[#F0F0F0] transition-colors cursor-pointer"
                        title="Adjust Credits"
                      >
                        <i className="ri-edit-line text-[#111111] w-4 h-4 flex items-center justify-center"></i>
                      </Link>
                      <button
                        className="w-8 h-8 bg-[#F8F8F8] rounded-lg flex items-center justify-center hover:bg-[#F0F0F0] transition-colors cursor-pointer"
                        title="View Billing History"
                      >
                        <i className="ri-file-list-line text-[#111111] w-4 h-4 flex items-center justify-center"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 pt-5 mt-2 border-t border-[#F0F0F0]">
            <p className="text-sm text-[#6B7280]">
              Showing <span className="font-medium text-[#111111]">{(currentPage - 1) * ITEMS_PER_PAGE + 1}</span>–<span className="font-medium text-[#111111]">{Math.min(currentPage * ITEMS_PER_PAGE, filteredClients.length)}</span> of <span className="font-medium text-[#111111]">{filteredClients.length}</span> clients
            </p>
            <div className="flex items-center gap-1">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#E5E5E5] text-[#6B7280] hover:bg-[#F5F5F5] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
              >
                <i className="ri-arrow-left-s-line w-4 h-4 flex items-center justify-center"></i>
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    page === currentPage
                      ? 'bg-black text-white'
                      : 'border border-[#E5E5E5] text-[#6B7280] hover:bg-[#F5F5F5]'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#E5E5E5] text-[#6B7280] hover:bg-[#F5F5F5] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
              >
                <i className="ri-arrow-right-s-line w-4 h-4 flex items-center justify-center"></i>
              </button>
            </div>
          </div>
        )}
      </div>

      {showExportModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={() => setShowExportModal(false)}>
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[#111111]">Export Credit Report</h3>
              <button 
                onClick={() => setShowExportModal(false)}
                className="w-8 h-8 bg-[#F8F8F8] rounded-lg flex items-center justify-center hover:bg-[#F0F0F0] transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-[#111111] w-4 h-4 flex items-center justify-center"></i>
              </button>
            </div>
            <p className="text-sm text-[#6B7280] mb-6">Select the format for your credit usage report</p>
            <div className="space-y-3 mb-6">
              <button className="w-full px-4 py-3 bg-[#F8F8F8] rounded-xl text-sm font-medium text-[#111111] hover:bg-[#F0F0F0] transition-colors cursor-pointer whitespace-nowrap flex items-center gap-3">
                <i className="ri-file-excel-line text-lg text-[#10B981] w-5 h-5 flex items-center justify-center"></i>
                <span>Export as Excel (.xlsx)</span>
              </button>
              <button className="w-full px-4 py-3 bg-[#F8F8F8] rounded-xl text-sm font-medium text-[#111111] hover:bg-[#F0F0F0] transition-colors cursor-pointer whitespace-nowrap flex items-center gap-3">
                <i className="ri-file-text-line text-lg text-[#3B82F6] w-5 h-5 flex items-center justify-center"></i>
                <span>Export as CSV (.csv)</span>
              </button>
              <button className="w-full px-4 py-3 bg-[#F8F8F8] rounded-xl text-sm font-medium text-[#111111] hover:bg-[#F0F0F0] transition-colors cursor-pointer whitespace-nowrap flex items-center gap-3">
                <i className="ri-file-pdf-line text-lg text-[#EF4444] w-5 h-5 flex items-center justify-center"></i>
                <span>Export as PDF (.pdf)</span>
              </button>
            </div>
            <button 
              onClick={() => setShowExportModal(false)}
              className="w-full px-4 py-2.5 bg-black text-white rounded-xl text-sm font-medium hover:bg-[#111111] transition-colors cursor-pointer whitespace-nowrap"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}