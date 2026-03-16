'use client';

import Link from 'next/link';

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

interface CreditTransactionModalProps {
  transaction: Transaction;
  onClose: () => void;
}

export default function CreditTransactionModal({ transaction, onClose }: CreditTransactionModalProps) {
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

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-[#F0F0F0] flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-[#111111]">Transaction Details</h2>
            <p className="text-xs text-[#9CA3AF] mt-1">Complete information about this transaction</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#F8F8F8] transition-colors cursor-pointer"
          >
            <i className="ri-close-line text-xl text-[#6B7280] w-5 h-5 flex items-center justify-center"></i>
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="bg-[#F8F8F8] rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-[#6B7280] uppercase">Transaction ID</span>
              <span className="text-sm font-bold text-[#111111]">{transaction.id}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#6B7280] uppercase">Type</span>
              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${getTypeColor(transaction.type)}`}>
                {transaction.type}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-[#F0F0F0]">
              <span className="text-sm font-medium text-[#6B7280]">Credits Added</span>
              {transaction.creditsAdded > 0 ? (
                <span className="text-sm font-bold text-[#16A34A]">+{transaction.creditsAdded.toLocaleString()}</span>
              ) : (
                <span className="text-sm text-[#9CA3AF]">—</span>
              )}
            </div>

            <div className="flex items-center justify-between py-3 border-b border-[#F0F0F0]">
              <span className="text-sm font-medium text-[#6B7280]">Credits Used</span>
              {transaction.creditsUsed > 0 ? (
                <span className="text-sm font-bold text-[#DC2626]">-{transaction.creditsUsed.toLocaleString()}</span>
              ) : (
                <span className="text-sm text-[#9CA3AF]">—</span>
              )}
            </div>

            <div className="flex items-center justify-between py-3 border-b border-[#F0F0F0]">
              <span className="text-sm font-medium text-[#6B7280]">Balance After Transaction</span>
              <span className="text-sm font-bold text-[#111111]">{transaction.balanceAfter.toLocaleString()}</span>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-[#F0F0F0]">
              <span className="text-sm font-medium text-[#6B7280]">Date & Time</span>
              <span className="text-sm font-semibold text-[#111111]">{transaction.date}</span>
            </div>

            {transaction.description && (
              <div className="flex items-center justify-between py-3 border-b border-[#F0F0F0]">
                <span className="text-sm font-medium text-[#6B7280]">Description</span>
                <span className="text-sm text-[#111111]">{transaction.description}</span>
              </div>
            )}

            {transaction.jobId && (
              <div className="flex items-center justify-between py-3 border-b border-[#F0F0F0]">
                <span className="text-sm font-medium text-[#6B7280]">Related Job</span>
                <Link href={`/client/try-on-jobs/${transaction.jobId}`}>
                  <span className="text-sm font-semibold text-[#111111] hover:text-black cursor-pointer underline">
                    {transaction.jobId}
                  </span>
                </Link>
              </div>
            )}

            {transaction.paymentMethod && (
              <div className="flex items-center justify-between py-3 border-b border-[#F0F0F0]">
                <span className="text-sm font-medium text-[#6B7280]">Payment Method</span>
                <span className="text-sm text-[#111111]">{transaction.paymentMethod}</span>
              </div>
            )}

            {transaction.amount && (
              <div className="flex items-center justify-between py-3 border-b border-[#F0F0F0]">
                <span className="text-sm font-medium text-[#6B7280]">Amount Paid</span>
                <span className="text-sm font-bold text-[#111111]">{transaction.amount}</span>
              </div>
            )}
          </div>
        </div>

        <div className="p-6 border-t border-[#F0F0F0] flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#F8F8F8] text-[#111111] rounded-full text-sm font-semibold hover:bg-[#F0F0F0] transition-colors cursor-pointer whitespace-nowrap"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}