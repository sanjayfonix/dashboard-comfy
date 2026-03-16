'use client';

import { useState } from 'react';

export default function RecentTransactionsSection() {
  const [currentPage, setCurrentPage] = useState(1);

  const transactions = [
    {
      id: 'TXN-8472',
      client: 'Fashion Forward Inc.',
      credits: 25000,
      amount: 5000,
      paymentMethod: 'Credit Card',
      date: '2024-01-22 14:35',
      status: 'Completed',
    },
    {
      id: 'TXN-8471',
      client: 'Elite Fashion Group',
      credits: 50000,
      amount: 10000,
      paymentMethod: 'Bank Transfer',
      date: '2024-01-22 11:20',
      status: 'Completed',
    },
    {
      id: 'TXN-8470',
      client: 'Chic Apparel Ltd.',
      credits: 30000,
      amount: 6000,
      paymentMethod: 'Credit Card',
      date: '2024-01-21 16:45',
      status: 'Pending',
    },
    {
      id: 'TXN-8469',
      client: 'StyleHub Boutique',
      credits: 15000,
      amount: 3000,
      paymentMethod: 'PayPal',
      date: '2024-01-21 09:15',
      status: 'Failed',
    },
    {
      id: 'TXN-8468',
      client: 'TrendSetter Fashion',
      credits: 40000,
      amount: 8000,
      paymentMethod: 'Credit Card',
      date: '2024-01-20 13:50',
      status: 'Completed',
    },
    {
      id: 'TXN-8467',
      client: 'Urban Wear Co.',
      credits: 10000,
      amount: 2000,
      paymentMethod: 'Credit Card',
      date: '2024-01-19 10:30',
      status: 'Completed',
    },
  ];

  const itemsPerPage = 8;
  const totalPages = Math.ceil(transactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTransactions = transactions.slice(startIndex, endIndex);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-blue-50 text-blue-700';
      case 'Pending':
        return 'bg-purple-50 text-purple-700';
      case 'Failed':
        return 'bg-red-50 text-red-700';
      default:
        return 'bg-gray-50 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-lg font-bold text-black">Recent Transactions</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Transaction ID</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Client</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Credits Purchased</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Amount Paid</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Payment Method</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Transaction Date</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {currentTransactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-medium text-black">{transaction.id}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-black">{transaction.client}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-black">{transaction.credits.toLocaleString()}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-black font-medium">${transaction.amount.toLocaleString()}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-gray-600">{transaction.paymentMethod}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-gray-600">{transaction.date}</div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                    {transaction.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                    title="View Transaction"
                  >
                    <i className="ri-eye-line text-lg text-gray-600"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Showing {startIndex + 1} to {Math.min(endIndex, transactions.length)} of {transactions.length} transactions
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
  );
}
