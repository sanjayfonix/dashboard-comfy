'use client';

import { useState } from 'react';
import CreditTransactionModal from './CreditTransactionModal';

interface Transaction {
  id: string;
  type: 'Purchase' | 'Try-On Job' | 'Manual Adjustment' | 'Refund';
  creditsAdded: number;
  creditsUsed: number;
  balanceAfter: number;
  date: string;
  description?: string;
  jobId?: string;
  paymentMethod?: string;
  amount?: string;
}

const transactions: Transaction[] = [
  {
    id: 'TXN-2024-001',
    type: 'Purchase',
    creditsAdded: 10000,
    creditsUsed: 0,
    balanceAfter: 12450,
    date: '2024-01-23 14:32',
    description: 'Credit package purchase',
    paymentMethod: 'Visa ending in 4242',
    amount: '$250.00',
  },
  {
    id: 'TXN-2024-002',
    type: 'Try-On Job',
    creditsAdded: 0,
    creditsUsed: 5,
    balanceAfter: 12445,
    date: '2024-01-23 15:18',
    description: 'Virtual try-on request',
    jobId: 'JOB-2024-1523',
  },
  {
    id: 'TXN-2024-003',
    type: 'Try-On Job',
    creditsAdded: 0,
    creditsUsed: 5,
    balanceAfter: 12440,
    date: '2024-01-23 15:45',
    description: 'Virtual try-on request',
    jobId: 'JOB-2024-1524',
  },
  {
    id: 'TXN-2024-004',
    type: 'Manual Adjustment',
    creditsAdded: 500,
    creditsUsed: 0,
    balanceAfter: 12940,
    date: '2024-01-22 10:15',
    description: 'Promotional credit bonus',
  },
  {
    id: 'TXN-2024-005',
    type: 'Try-On Job',
    creditsAdded: 0,
    creditsUsed: 5,
    balanceAfter: 12935,
    date: '2024-01-22 11:22',
    description: 'Virtual try-on request',
    jobId: 'JOB-2024-1520',
  },
  {
    id: 'TXN-2024-006',
    type: 'Refund',
    creditsAdded: 25,
    creditsUsed: 0,
    balanceAfter: 12960,
    date: '2024-01-21 16:40',
    description: 'Failed job credit refund',
    jobId: 'JOB-2024-1515',
  },
  {
    id: 'TXN-2024-007',
    type: 'Purchase',
    creditsAdded: 5000,
    creditsUsed: 0,
    balanceAfter: 7960,
    date: '2024-01-20 09:12',
    description: 'Credit package purchase',
    paymentMethod: 'Visa ending in 4242',
    amount: '$125.00',
  },
  {
    id: 'TXN-2024-008',
    type: 'Try-On Job',
    creditsAdded: 0,
    creditsUsed: 5,
    balanceAfter: 7955,
    date: '2024-01-20 10:35',
    description: 'Virtual try-on request',
    jobId: 'JOB-2024-1510',
  },
];

export default function CreditActivityTable() {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Purchase':
        return 'bg-[#F0FFF4] text-[#16A34A]';
      case 'Try-On Job':
        return 'bg-[#EFF6FF] text-[#2563EB]';
      case 'Manual Adjustment':
        return 'bg-[#FEF3C7] text-[#D97706]';
      case 'Refund':
        return 'bg-[#F3E8FF] text-[#9333EA]';
      default:
        return 'bg-[#F3F4F6] text-[#6B7280]';
    }
  };

  if (transactions.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-12 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-[#F0F0F0] text-center">
        <div className="w-16 h-16 bg-[#F8F8F8] rounded-2xl flex items-center justify-center mx-auto mb-4">
          <i className="ri-file-list-3-line text-2xl text-[#9CA3AF] w-8 h-8 flex items-center justify-center"></i>
        </div>
        <h3 className="text-lg font-semibold text-[#111111] mb-2">No credit activity recorded yet</h3>
        <p className="text-sm text-[#6B7280] mb-6">Purchase credits to get started with virtual try-on services.</p>
        <button className="px-5 py-2.5 bg-black text-white rounded-full text-sm font-semibold hover:bg-[#333333] transition-colors cursor-pointer whitespace-nowrap">
          Purchase Credits
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white rounded-2xl shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-[#F0F0F0] overflow-hidden">
        <div className="p-6 border-b border-[#F0F0F0]">
          <h2 className="text-base font-semibold text-[#111111]">Credit Activity</h2>
          <p className="text-xs text-[#9CA3AF] mt-1">Complete transaction history</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F8F8F8] border-b border-[#F0F0F0]">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Transaction ID</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Type</th>
                <th className="text-right px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Credits Added</th>
                <th className="text-right px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Credits Used</th>
                <th className="text-right px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Balance After</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Date</th>
                <th className="text-center px-6 py-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0F0F0]">
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-[#FAFAFA] transition-colors">
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-[#111111]">{transaction.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${getTypeColor(transaction.type)}`}>
                      {transaction.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {transaction.creditsAdded > 0 ? (
                      <span className="text-sm font-semibold text-[#16A34A]">+{transaction.creditsAdded.toLocaleString()}</span>
                    ) : (
                      <span className="text-sm text-[#9CA3AF]">—</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    {transaction.creditsUsed > 0 ? (
                      <span className="text-sm font-semibold text-[#DC2626]">-{transaction.creditsUsed.toLocaleString()}</span>
                    ) : (
                      <span className="text-sm text-[#9CA3AF]">—</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-sm font-semibold text-[#111111]">{transaction.balanceAfter.toLocaleString()}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-[#6B7280]">{transaction.date}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => setSelectedTransaction(transaction)}
                      className="text-sm font-medium text-[#111111] hover:text-black transition-colors cursor-pointer whitespace-nowrap"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedTransaction && (
        <CreditTransactionModal
          transaction={selectedTransaction}
          onClose={() => setSelectedTransaction(null)}
        />
      )}
    </>
  );
}