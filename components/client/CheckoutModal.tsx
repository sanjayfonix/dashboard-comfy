'use client';

import { useState } from 'react';

interface CheckoutModalProps {
  credits: number;
  price: number;
  packageName?: string;
  onClose: () => void;
  onConfirm: () => void;
}

export default function CheckoutModal({
  credits,
  price,
  packageName,
  onClose,
  onConfirm,
}: CheckoutModalProps) {
  const [billingEmail, setBillingEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [processing, setProcessing] = useState(false);

  const currentBalance = 2450;
  const newBalance = currentBalance + credits;

  const handleConfirm = async () => {
    setProcessing(true);
    setTimeout(() => {
      onConfirm();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-[#F0F0F0]">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#111111] mb-1">Complete Purchase</h2>
              <p className="text-sm text-[#6B7280]">Review and confirm your credit purchase</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#F8F8F8] transition-colors cursor-pointer"
            >
              <i className="ri-close-line text-xl text-[#6B7280] w-5 h-5 flex items-center justify-center"></i>
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="bg-[#F8F8F8] rounded-xl p-4">
            <h3 className="text-sm font-semibold text-[#111111] mb-3">Purchase Summary</h3>
            <div className="space-y-2">
              {packageName && (
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#6B7280]">Package</span>
                  <span className="text-sm font-semibold text-[#111111]">{packageName}</span>
                </div>
              )}
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#6B7280]">Credits to Purchase</span>
                <span className="text-sm font-semibold text-[#111111]">{credits.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#6B7280]">Total Price</span>
                <span className="text-sm font-semibold text-[#111111]">${price.toFixed(2)}</span>
              </div>
              <div className="pt-2 border-t border-[#E5E7EB]">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#111111]">New Credit Balance</span>
                  <span className="text-lg font-bold text-[#16A34A]">{newBalance.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#111111] mb-2">
              Billing Email
            </label>
            <input
              type="email"
              value={billingEmail}
              onChange={(e) => setBillingEmail(e.target.value)}
              placeholder="admin@company.com"
              className="w-full px-4 py-2.5 text-sm border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#111111] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#111111] mb-3">
              Payment Method
            </label>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-4 border-2 border-[#E5E7EB] rounded-xl cursor-pointer hover:border-[#111111] transition-colors">
                <input
                  type="radio"
                  name="payment"
                  value="credit-card"
                  checked={paymentMethod === 'credit-card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-4 h-4"
                />
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-10 h-10 bg-[#F8F8F8] rounded-lg flex items-center justify-center">
                    <i className="ri-bank-card-line text-lg text-[#111111] w-5 h-5 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#111111]">Credit Card</p>
                    <p className="text-xs text-[#9CA3AF]">Visa, Mastercard, Amex</p>
                  </div>
                </div>
              </label>

              <label className="flex items-center gap-3 p-4 border-2 border-[#E5E7EB] rounded-xl cursor-pointer hover:border-[#111111] transition-colors">
                <input
                  type="radio"
                  name="payment"
                  value="stripe"
                  checked={paymentMethod === 'stripe'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-4 h-4"
                />
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-10 h-10 bg-[#F8F8F8] rounded-lg flex items-center justify-center">
                    <i className="ri-secure-payment-line text-lg text-[#111111] w-5 h-5 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#111111]">Stripe</p>
                    <p className="text-xs text-[#9CA3AF]">Secure payment processing</p>
                  </div>
                </div>
              </label>

              <label className="flex items-center gap-3 p-4 border-2 border-[#E5E7EB] rounded-xl cursor-pointer hover:border-[#111111] transition-colors">
                <input
                  type="radio"
                  name="payment"
                  value="invoice"
                  checked={paymentMethod === 'invoice'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-4 h-4"
                />
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-10 h-10 bg-[#F8F8F8] rounded-lg flex items-center justify-center">
                    <i className="ri-file-text-line text-lg text-[#111111] w-5 h-5 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#111111]">Corporate Invoice</p>
                    <p className="text-xs text-[#9CA3AF]">Net 30 payment terms</p>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-[#F0F0F0] flex items-center gap-3">
          <button
            onClick={onClose}
            disabled={processing}
            className="flex-1 py-2.5 bg-[#F8F8F8] text-[#111111] rounded-full text-sm font-semibold hover:bg-[#E5E5E5] transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            disabled={!billingEmail || processing}
            className="flex-1 py-2.5 bg-[#111111] text-white rounded-full text-sm font-semibold hover:bg-[#333333] transition-colors cursor-pointer whitespace-nowrap disabled:bg-[#E5E7EB] disabled:text-[#9CA3AF] disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {processing ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Processing...
              </>
            ) : (
              'Confirm Payment'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}