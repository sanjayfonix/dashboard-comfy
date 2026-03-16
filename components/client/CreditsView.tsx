'use client';

import { useState } from 'react';
import Link from 'next/link';
import ClientMetricCard from './ClientMetricCard';
import CreditUsageChart from './CreditUsageChart';
import CreditActivityTable from './CreditActivityTable';
import LowCreditWarning from './LowCreditWarning';

export default function CreditsView() {
  const currentBalance = 2450;
  const lowCreditThreshold = 5000;

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <div className="p-8">
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-[#111111] mb-2">Credits</h1>
            <p className="text-sm text-[#6B7280]">Monitor credit balance and usage.</p>
          </div>
          <Link href="/client/credits/purchase">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-full text-sm font-semibold hover:bg-[#333333] transition-colors cursor-pointer whitespace-nowrap">
              <i className="ri-shopping-cart-line w-4 h-4 flex items-center justify-center"></i>
              Purchase Credits
            </button>
          </Link>
        </div>

        {currentBalance < lowCreditThreshold && <LowCreditWarning currentBalance={currentBalance} />}

        <div className="grid grid-cols-4 gap-6 mb-8">
          <ClientMetricCard
            title="Current Credit Balance"
            value={currentBalance.toLocaleString()}
            trend="12.5%"
            trendUp={false}
            icon="ri-wallet-3-line"
          />
          <ClientMetricCard
            title="Credits Used This Month"
            value="18,750"
            trend="8.3%"
            trendUp={true}
            icon="ri-line-chart-line"
          />
          <ClientMetricCard
            title="Total Credits Purchased"
            value="125,000"
            trend="15.2%"
            trendUp={true}
            icon="ri-shopping-bag-3-line"
          />
          <ClientMetricCard
            title="Average Daily Usage"
            value="625"
            trend="5.1%"
            trendUp={true}
            icon="ri-calendar-check-line"
          />
        </div>

        <div className="mb-8">
          <CreditUsageChart />
        </div>

        <div>
          <CreditActivityTable />
        </div>
      </div>
    </div>
  );
}