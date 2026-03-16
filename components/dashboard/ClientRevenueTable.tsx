'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ClientRevenueTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAdjustModal, setShowAdjustModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState<any>(null);

  const clients = [
    {
      id: 'CL-001',
      name: 'Fashion Forward Inc.',
      creditsPurchased: 50000,
      totalSpend: 10000,
      creditsUsed: 32500,
      creditsRemaining: 17500,
      lastPurchase: '2024-01-15',
    },
    {
      id: 'CL-002',
      name: 'StyleHub Boutique',
      creditsPurchased: 35000,
      totalSpend: 7000,
      creditsUsed: 28400,
      creditsRemaining: 6600,
      lastPurchase: '2024-01-12',
    },
    {
      id: 'CL-003',
      name: 'TrendSetter Fashion',
      creditsPurchased: 75000,
      totalSpend: 15000,
      creditsUsed: 45200,
      creditsRemaining: 29800,
      lastPurchase: '2024-01-18',
    },
    {
      id: 'CL-004',
      name: 'Urban Wear Co.',
      creditsPurchased: 25000,
      totalSpend: 5000,
      creditsUsed: 18900,
      creditsRemaining: 6100,
      lastPurchase: '2024-01-10',
    },
    {
      id: 'CL-005',
      name: 'Chic Apparel Ltd.',
      creditsPurchased: 60000,
      totalSpend: 12000,
      creditsUsed: 38700,
      creditsRemaining: 21300,
      lastPurchase: '2024-01-20',
    },
    {
      id: 'CL-006',
      name: 'Elite Fashion Group',
      creditsPurchased: 100000,
      totalSpend: 20000,
      creditsUsed: 67800,
      creditsRemaining: 32200,
      lastPurchase: '2024-01-22',
    },
  ];

  const itemsPerPage = 8;
  const totalPages = Math.ceil(clients.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentClients = clients.slice(startIndex, endIndex);

  const handleAdjustCredits = (client: any) => {
    setSelectedClient(client);
    setShowAdjustModal(true);
  };

  return (
    <div className="mb-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-bold text-black mb-4">Client Revenue</h2>
          <div className="relative">
            <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
            <input
              type="text"
              placeholder="Search by client name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Client Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Credits Purchased</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Total Spend</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Credits Used</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Credits Remaining</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Last Purchase</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {currentClients.map((client) => (
                <tr key={client.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-black">{client.name}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-black">{client.creditsPurchased.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-black font-medium">${client.totalSpend.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-gray-600">{client.creditsUsed.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-black font-medium">{client.creditsRemaining.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-gray-600">{client.lastPurchase}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/dashboard/clients/${client.id}`}
                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                        title="View Client"
                      >
                        <i className="ri-eye-line text-lg text-gray-600"></i>
                      </Link>
                      <button
                        onClick={() => handleAdjustCredits(client)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                        title="Adjust Credits"
                      >
                        <i className="ri-edit-line text-lg text-gray-600"></i>
                      </button>
                      <button
                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                        title="View Invoice History"
                      >
                        <i className="ri-file-list-line text-lg text-gray-600"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Showing {startIndex + 1} to {Math.min(endIndex, clients.length)} of {clients.length} clients
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-50 text-black rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg transition-colors ${
                  currentPage === page
                    ? 'bg-black text-white'
                    : 'bg-gray-50 text-black hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-50 text-black rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {showAdjustModal && selectedClient && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-black mb-2">Adjust Credits</h3>
            <p className="text-gray-600 mb-6">Modify credit balance for {selectedClient.name}</p>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Balance</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg text-black font-medium">
                  {selectedClient.creditsRemaining.toLocaleString()} credits
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Adjustment Amount</label>
                <input
                  type="number"
                  placeholder="Enter amount (+ to add, - to deduct)"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/10"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Reason</label>
                <textarea
                  placeholder="Enter reason for adjustment..."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/10 resize-none"
                ></textarea>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowAdjustModal(false)}
                className="flex-1 px-4 py-2.5 bg-gray-100 text-black rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowAdjustModal(false)}
                className="flex-1 px-4 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap"
              >
                Confirm Adjustment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
