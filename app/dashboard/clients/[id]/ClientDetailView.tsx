'use client';

import { useState } from 'react';
import Link from 'next/link';
import ClientOverviewCard from '@/components/dashboard/ClientOverviewCard';
import ClientUsageMetrics from '@/components/dashboard/ClientUsageMetrics';
import IntegrationStatusPanel from '@/components/dashboard/IntegrationStatusPanel';
import GarmentCatalogSummary from '@/components/dashboard/GarmentCatalogSummary';
import TryOnJobActivity from '@/components/dashboard/TryOnJobActivity';
import CreditUsageSection from '@/components/dashboard/CreditUsageSection';
import ClientAlerts from '@/components/dashboard/ClientAlerts';

const clientApiKeys: Record<string, string> = {
  '1001': process.env.NEXT_PUBLIC_CLIENT_1001_API_KEY || '',
  '1002': process.env.NEXT_PUBLIC_CLIENT_1002_API_KEY || '',
  '1003': process.env.NEXT_PUBLIC_CLIENT_1003_API_KEY || '',
  '1004': process.env.NEXT_PUBLIC_CLIENT_1004_API_KEY || '',
  '1005': process.env.NEXT_PUBLIC_CLIENT_1005_API_KEY || '',
  '1006': process.env.NEXT_PUBLIC_CLIENT_1006_API_KEY || '',
  '1007': process.env.NEXT_PUBLIC_CLIENT_1007_API_KEY || '',
  '1008': process.env.NEXT_PUBLIC_CLIENT_1008_API_KEY || '',
  '1009': process.env.NEXT_PUBLIC_CLIENT_1009_API_KEY || '',
  '1010': process.env.NEXT_PUBLIC_CLIENT_1010_API_KEY || '',
  '1011': process.env.NEXT_PUBLIC_CLIENT_1011_API_KEY || '',
  '1012': process.env.NEXT_PUBLIC_CLIENT_1012_API_KEY || '',
};

const clientData: Record<string, any> = {
  '1001': {
    name: 'Fashion Brand X',
    company: 'Fashion Brand X Inc.',
    domain: 'fashionbrandx.com',
    email: 'contact@fashionbrandx.com',
    status: 'Active',
    created: '2024-01-15',
    lastActivity: '2 hours ago',
    totalJobs: 45200,
    creditsUsed: 226000,
    creditsRemaining: 74000,
    maxCredits: 300000,
    activeGarments: 342,
    avgProcessingTime: '2.3s',
    successRate: 98.5,
    integrationStatus: 'Active',
    apiKey: clientApiKeys['1001'],
    webhookStatus: 'Configured',
    currentBalance: 74000,
    lastPurchase: '2024-03-10',
    usageRate: '12,000 credits/day',
    alerts: [
      { type: 'warning', message: 'Credit balance below 30% threshold' }
    ]
  },
  '1002': {
    name: 'Luxury Apparel Co.',
    company: 'Luxury Apparel Corporation',
    domain: 'luxuryapparel.com',
    email: 'admin@luxuryapparel.com',
    status: 'Active',
    created: '2024-02-03',
    lastActivity: '5 hours ago',
    totalJobs: 38900,
    creditsUsed: 194500,
    creditsRemaining: 105500,
    maxCredits: 300000,
    activeGarments: 287,
    avgProcessingTime: '2.1s',
    successRate: 99.2,
    integrationStatus: 'Active',
    apiKey: clientApiKeys['1002'],
    webhookStatus: 'Configured',
    currentBalance: 105500,
    lastPurchase: '2024-03-08',
    usageRate: '9,500 credits/day',
    alerts: []
  },
  '1003': {
    name: 'Urban Style Inc.',
    company: 'Urban Style Incorporated',
    domain: 'urbanstyle.com',
    email: 'hello@urbanstyle.com',
    status: 'Active',
    created: '2024-01-28',
    lastActivity: '1 day ago',
    totalJobs: 32100,
    creditsUsed: 160500,
    creditsRemaining: 89500,
    maxCredits: 250000,
    activeGarments: 198,
    avgProcessingTime: '2.5s',
    successRate: 97.8,
    integrationStatus: 'Active',
    apiKey: clientApiKeys['1003'],
    webhookStatus: 'Not Configured',
    currentBalance: 89500,
    lastPurchase: '2024-03-12',
    usageRate: '8,200 credits/day',
    alerts: [
      { type: 'info', message: 'Webhook endpoint not configured' }
    ]
  },
  '1004': {
    name: 'Elite Fashion House',
    company: 'Elite Fashion House Ltd.',
    domain: 'elitefashion.com',
    email: 'support@elitefashion.com',
    status: 'Active',
    created: '2024-02-10',
    lastActivity: '3 hours ago',
    totalJobs: 28400,
    creditsUsed: 142000,
    creditsRemaining: 108000,
    maxCredits: 250000,
    activeGarments: 256,
    avgProcessingTime: '2.2s',
    successRate: 98.9,
    integrationStatus: 'Active',
    apiKey: clientApiKeys['1004'],
    webhookStatus: 'Configured',
    currentBalance: 108000,
    lastPurchase: '2024-03-05',
    usageRate: '7,800 credits/day',
    alerts: []
  },
  '1005': {
    name: 'Modern Wear Ltd.',
    company: 'Modern Wear Limited',
    domain: 'modernwear.com',
    email: 'info@modernwear.com',
    status: 'Pending Setup',
    created: '2024-03-14',
    lastActivity: 'Never',
    totalJobs: 0,
    creditsUsed: 0,
    creditsRemaining: 200000,
    maxCredits: 200000,
    activeGarments: 0,
    avgProcessingTime: '-',
    successRate: 0,
    integrationStatus: 'Not Configured',
    apiKey: clientApiKeys['1005'],
    webhookStatus: 'Not Configured',
    currentBalance: 200000,
    lastPurchase: '2024-03-14',
    usageRate: '-',
    alerts: [
      { type: 'warning', message: 'Integration not configured yet' },
      { type: 'info', message: 'No garments uploaded' }
    ]
  },
  '1006': {
    name: 'Trendy Boutique',
    company: 'Trendy Boutique LLC',
    domain: 'trendyboutique.com',
    email: 'contact@trendyboutique.com',
    status: 'Suspended',
    created: '2024-01-20',
    lastActivity: '2 weeks ago',
    totalJobs: 19200,
    creditsUsed: 96000,
    creditsRemaining: 4000,
    maxCredits: 100000,
    activeGarments: 143,
    avgProcessingTime: '2.4s',
    successRate: 96.5,
    integrationStatus: 'Active',
    apiKey: clientApiKeys['1006'],
    webhookStatus: 'Configured',
    currentBalance: 4000,
    lastPurchase: '2024-02-28',
    usageRate: '-',
    alerts: [
      { type: 'error', message: 'Account suspended due to insufficient credits' },
      { type: 'warning', message: 'Credit balance critically low' }
    ]
  },
  '1007': {
    name: 'Classic Couture',
    company: 'Classic Couture Ltd.',
    domain: 'classiccouture.com',
    email: 'info@classiccouture.com',
    status: 'Active',
    created: '2024-02-15',
    lastActivity: '1 day ago',
    totalJobs: 16800,
    creditsUsed: 84000,
    creditsRemaining: 56000,
    maxCredits: 150000,
    activeGarments: 124,
    avgProcessingTime: '2.4s',
    successRate: 97.2,
    integrationStatus: 'Active',
    apiKey: clientApiKeys['1007'],
    webhookStatus: 'Configured',
    currentBalance: 56000,
    lastPurchase: '2024-03-01',
    usageRate: '5,600 credits/day',
    alerts: []
  },
  '1008': {
    name: 'Street Fashion Co.',
    company: 'Street Fashion Corporation',
    domain: 'streetfashion.com',
    email: 'team@streetfashion.com',
    status: 'Active',
    created: '2024-02-20',
    lastActivity: '8 hours ago',
    totalJobs: 14500,
    creditsUsed: 72500,
    creditsRemaining: 27500,
    maxCredits: 100000,
    activeGarments: 98,
    avgProcessingTime: '2.6s',
    successRate: 96.8,
    integrationStatus: 'Active',
    apiKey: clientApiKeys['1008'],
    webhookStatus: 'Configured',
    currentBalance: 27500,
    lastPurchase: '2024-03-07',
    usageRate: '4,800 credits/day',
    alerts: [
      { type: 'warning', message: 'Credit balance below 30% threshold' }
    ]
  },
  '1009': {
    name: 'Vintage Threads',
    company: 'Vintage Threads LLC',
    domain: 'vintagethreads.com',
    email: 'contact@vintagethreads.com',
    status: 'Suspended',
    created: '2024-01-10',
    lastActivity: '5 days ago',
    totalJobs: 12300,
    creditsUsed: 100000,
    creditsRemaining: 0,
    maxCredits: 100000,
    activeGarments: 89,
    avgProcessingTime: '2.7s',
    successRate: 95.4,
    integrationStatus: 'Active',
    apiKey: clientApiKeys['1009'],
    webhookStatus: 'Configured',
    currentBalance: 0,
    lastPurchase: '2024-02-15',
    usageRate: '-',
    alerts: [
      { type: 'error', message: 'Account suspended due to insufficient credits' },
      { type: 'warning', message: 'No credits remaining' }
    ]
  },
  '1010': {
    name: 'Chic Wardrobe',
    company: 'Chic Wardrobe Inc.',
    domain: 'chicwardrobe.com',
    email: 'hello@chicwardrobe.com',
    status: 'Pending Setup',
    created: '2024-03-18',
    lastActivity: 'Never',
    totalJobs: 0,
    creditsUsed: 0,
    creditsRemaining: 50000,
    maxCredits: 50000,
    activeGarments: 67,
    avgProcessingTime: '-',
    successRate: 0,
    integrationStatus: 'Not Configured',
    apiKey: clientApiKeys['1010'],
    webhookStatus: 'Not Configured',
    currentBalance: 50000,
    lastPurchase: '2024-03-18',
    usageRate: '-',
    alerts: [
      { type: 'warning', message: 'Integration not configured yet' }
    ]
  },
  '1011': {
    name: 'Premium Attire',
    company: 'Premium Attire Ltd.',
    domain: 'premiumattire.com',
    email: 'info@premiumattire.com',
    status: 'Active',
    created: '2024-02-08',
    lastActivity: '4 hours ago',
    totalJobs: 21600,
    creditsUsed: 108000,
    creditsRemaining: 92000,
    maxCredits: 200000,
    activeGarments: 213,
    avgProcessingTime: '2.3s',
    successRate: 98.1,
    integrationStatus: 'Active',
    apiKey: clientApiKeys['1011'],
    webhookStatus: 'Configured',
    currentBalance: 92000,
    lastPurchase: '2024-03-09',
    usageRate: '7,200 credits/day',
    alerts: []
  },
  '1012': {
    name: 'Casual Comfort',
    company: 'Casual Comfort LLC',
    domain: 'casualcomfort.com',
    email: 'support@casualcomfort.com',
    status: 'Active',
    created: '2024-02-25',
    lastActivity: '10 hours ago',
    totalJobs: 18700,
    creditsUsed: 112000,
    creditsRemaining: 38000,
    maxCredits: 150000,
    activeGarments: 156,
    avgProcessingTime: '2.5s',
    successRate: 97.5,
    integrationStatus: 'Active',
    apiKey: clientApiKeys['1012'],
    webhookStatus: 'Configured',
    currentBalance: 38000,
    lastPurchase: '2024-03-11',
    usageRate: '6,200 credits/day',
    alerts: [
      { type: 'warning', message: 'Credit balance below 30% threshold' }
    ]
  }
};

export default function ClientDetailView({ clientId }: { clientId: string }) {
  const client = clientData[clientId] || clientData['1001'];
  const [showActionsMenu, setShowActionsMenu] = useState(false);
  const [showSuspendModal, setShowSuspendModal] = useState(false);
  const [showAddCreditsModal, setShowAddCreditsModal] = useState(false);
  const [creditAmount, setCreditAmount] = useState('');

  const handleSuspend = () => {
    setShowSuspendModal(false);
  };

  const handleAddCredits = () => {
    setShowAddCreditsModal(false);
    setCreditAmount('');
  };

  return (
    <div className="p-8">
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-[#111111]">{client.name}</h1>
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
              client.status === 'Active'
                ? 'bg-[#111111] text-white'
                : client.status === 'Suspended'
                ? 'bg-[#F5F5F5] text-[#6B7280] border border-[#E5E5E5]'
                : 'bg-[#F5F5F5] text-[#111111] border border-[#E5E5E5]'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${client.status === 'Active' ? 'bg-white/60' : 'bg-[#9CA3AF]'}`}></span>
              {client.status}
            </span>
          </div>
          <p className="text-[#6B7280]">Client account overview and platform activity.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link 
            href="/dashboard/clients"
            className="px-5 py-2.5 bg-white border border-[#E5E5E5] text-[#111111] rounded-full text-sm font-medium hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap"
          >
            Back to Clients
          </Link>
          <div className="relative">
            <button
              onClick={() => setShowActionsMenu(!showActionsMenu)}
              className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-black/90 transition-all cursor-pointer whitespace-nowrap shadow-[0px_4px_12px_rgba(0,0,0,0.15)] inline-flex items-center gap-2"
            >
              <span>Actions</span>
              <i className="ri-arrow-down-s-line w-4 h-4 flex items-center justify-center"></i>
            </button>
            {showActionsMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.08)] border border-[#E5E5E5] z-50 py-2">
                <Link
                  href={`/dashboard/clients/${clientId}/edit`}
                  className="w-full px-4 py-2.5 text-left text-sm text-[#111111] hover:bg-[#F8F8F8] cursor-pointer whitespace-nowrap transition-colors flex items-center gap-3"
                >
                  <i className="ri-edit-line w-4 h-4 flex items-center justify-center"></i>
                  Edit Client
                </Link>
                <button
                  onClick={() => {
                    setShowActionsMenu(false);
                    setShowAddCreditsModal(true);
                  }}
                  className="w-full px-4 py-2.5 text-left text-sm text-[#111111] hover:bg-[#F8F8F8] cursor-pointer whitespace-nowrap transition-colors flex items-center gap-3"
                >
                  <i className="ri-coin-line w-4 h-4 flex items-center justify-center"></i>
                  Add Credits
                </button>
                <button
                  className="w-full px-4 py-2.5 text-left text-sm text-[#111111] hover:bg-[#F8F8F8] cursor-pointer whitespace-nowrap transition-colors flex items-center gap-3"
                >
                  <i className="ri-file-list-3-line w-4 h-4 flex items-center justify-center"></i>
                  View Activity Logs
                </button>
                <button
                  className="w-full px-4 py-2.5 text-left text-sm text-[#111111] hover:bg-[#F8F8F8] cursor-pointer whitespace-nowrap transition-colors flex items-center gap-3"
                >
                  <i className="ri-settings-3-line w-4 h-4 flex items-center justify-center"></i>
                  Integration Settings
                </button>
                <div className="my-2 h-px bg-[#F0F0F0]"></div>
                <button
                  onClick={() => {
                    setShowActionsMenu(false);
                    setShowSuspendModal(true);
                  }}
                  className="w-full px-4 py-2.5 text-left text-sm text-[#6B7280] hover:bg-[#F8F8F8] cursor-pointer whitespace-nowrap transition-colors flex items-center gap-3"
                >
                  <i className="ri-pause-circle-line w-4 h-4 flex items-center justify-center"></i>
                  {client.status === 'Suspended' ? 'Reactivate Client' : 'Suspend Client'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {client.alerts && client.alerts.length > 0 && (
        <ClientAlerts alerts={client.alerts} />
      )}

      <ClientOverviewCard client={client} />

      <ClientUsageMetrics client={client} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <IntegrationStatusPanel client={client} />
        <CreditUsageSection client={client} onAddCredits={() => setShowAddCreditsModal(true)} />
      </div>

      <GarmentCatalogSummary clientId={clientId} />

      <TryOnJobActivity clientId={clientId} />

      {showSuspendModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-[0px_12px_40px_rgba(0,0,0,0.15)] max-w-md w-full p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#F5F5F5] rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="ri-pause-circle-line text-[#111111] text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#111111] mb-2">
                  {client.status === 'Suspended' ? 'Reactivate Client' : 'Suspend Client Account'}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {client.status === 'Suspended' 
                    ? `Are you sure you want to reactivate ${client.name}? They will regain access to all platform features.`
                    : `Are you sure you want to suspend ${client.name}? This will immediately disable their access to the platform.`
                  }
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowSuspendModal(false)}
                className="flex-1 px-5 py-2.5 bg-white border border-[#E5E5E5] text-[#111111] rounded-full text-sm font-medium hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap"
              >
                Cancel
              </button>
              <button
                onClick={handleSuspend}
                className="flex-1 px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-black/90 transition-all cursor-pointer whitespace-nowrap"
              >
                {client.status === 'Suspended' ? 'Reactivate' : 'Suspend'}
              </button>
            </div>
          </div>
        </div>
      )}

      {showAddCreditsModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-[0px_12px_40px_rgba(0,0,0,0.15)] max-w-md w-full p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#F5F5F5] rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="ri-coin-line text-[#111111] text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#111111] mb-2">Add Credits</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  Add credits to {client.name}'s account balance.
                </p>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-[#111111] mb-2">
                Credit Amount
              </label>
              <input
                type="number"
                value={creditAmount}
                onChange={(e) => setCreditAmount(e.target.value)}
                placeholder="Enter amount (e.g., 50000)"
                className="w-full px-4 py-2.5 bg-[#F8F8F8] border border-[#E5E5E5] rounded-xl text-sm text-[#111111] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 transition-all"
              />
              <p className="text-xs text-[#6B7280] mt-2">
                Current balance: {client.currentBalance.toLocaleString()} credits
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setShowAddCreditsModal(false);
                  setCreditAmount('');
                }}
                className="flex-1 px-5 py-2.5 bg-white border border-[#E5E5E5] text-[#111111] rounded-full text-sm font-medium hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCredits}
                className="flex-1 px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-black/90 transition-all cursor-pointer whitespace-nowrap"
              >
                Add Credits
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
