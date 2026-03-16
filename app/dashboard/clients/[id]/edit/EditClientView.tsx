'use client';

import { useState } from 'react';
import Link from 'next/link';
import ClientInformationForm from '@/components/dashboard/ClientInformationForm';
import AccountStatusSection from '@/components/dashboard/AccountStatusSection';
import PlatformConfigurationForm from '@/components/dashboard/PlatformConfigurationForm';
import CreditManagementSection from '@/components/dashboard/CreditManagementSection';
import IntegrationSettingsSection from '@/components/dashboard/IntegrationSettingsSection';
import SuccessBanner from '@/components/dashboard/SuccessBanner';

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

const clientWebhookUrls: Record<string, string> = {
  '1001': process.env.NEXT_PUBLIC_CLIENT_1001_WEBHOOK_URL || '',
  '1002': process.env.NEXT_PUBLIC_CLIENT_1002_WEBHOOK_URL || '',
  '1003': process.env.NEXT_PUBLIC_CLIENT_1003_WEBHOOK_URL || '',
  '1004': process.env.NEXT_PUBLIC_CLIENT_1004_WEBHOOK_URL || '',
  '1005': process.env.NEXT_PUBLIC_CLIENT_1005_WEBHOOK_URL || '',
  '1006': process.env.NEXT_PUBLIC_CLIENT_1006_WEBHOOK_URL || '',
  '1007': process.env.NEXT_PUBLIC_CLIENT_1007_WEBHOOK_URL || '',
  '1008': process.env.NEXT_PUBLIC_CLIENT_1008_WEBHOOK_URL || '',
  '1009': process.env.NEXT_PUBLIC_CLIENT_1009_WEBHOOK_URL || '',
  '1010': process.env.NEXT_PUBLIC_CLIENT_1010_WEBHOOK_URL || '',
  '1011': process.env.NEXT_PUBLIC_CLIENT_1011_WEBHOOK_URL || '',
  '1012': process.env.NEXT_PUBLIC_CLIENT_1012_WEBHOOK_URL || '',
};

const clientData: Record<string, any> = {
  '1001': {
    name: 'Fashion Brand X',
    company: 'Fashion Brand X Inc.',
    domain: 'fashionbrandx.com',
    email: 'contact@fashionbrandx.com',
    phone: '+1 (555) 123-4567',
    status: 'Active',
    maxConcurrentJobs: 10,
    storageDuration: '48 hours',
    webhookUrl: clientWebhookUrls['1001'],
    apiEnabled: true,
    currentBalance: 74000,
    apiKey: clientApiKeys['1001'],
    clientId: 'client_fbx_1001'
  },
  '1002': {
    name: 'Luxury Apparel Co.',
    company: 'Luxury Apparel Corporation',
    domain: 'luxuryapparel.com',
    email: 'admin@luxuryapparel.com',
    phone: '+1 (555) 234-5678',
    status: 'Active',
    maxConcurrentJobs: 15,
    storageDuration: '72 hours',
    webhookUrl: clientWebhookUrls['1002'],
    apiEnabled: true,
    currentBalance: 105500,
    apiKey: clientApiKeys['1002'],
    clientId: 'client_lac_1002'
  },
  '1003': {
    name: 'Urban Style Inc.',
    company: 'Urban Style Incorporated',
    domain: 'urbanstyle.com',
    email: 'hello@urbanstyle.com',
    phone: '+1 (555) 345-6789',
    status: 'Active',
    maxConcurrentJobs: 8,
    storageDuration: '24 hours',
    webhookUrl: '',
    apiEnabled: true,
    currentBalance: 89500,
    apiKey: clientApiKeys['1003'],
    clientId: 'client_usi_1003'
  },
  '1004': {
    name: 'Elite Fashion House',
    company: 'Elite Fashion House Ltd.',
    domain: 'elitefashion.com',
    email: 'support@elitefashion.com',
    phone: '+1 (555) 456-7890',
    status: 'Active',
    maxConcurrentJobs: 12,
    storageDuration: '48 hours',
    webhookUrl: clientWebhookUrls['1004'],
    apiEnabled: true,
    currentBalance: 108000,
    apiKey: clientApiKeys['1004'],
    clientId: 'client_efh_1004'
  },
  '1005': {
    name: 'Modern Wear Ltd.',
    company: 'Modern Wear Limited',
    domain: 'modernwear.com',
    email: 'info@modernwear.com',
    phone: '',
    status: 'Pending Setup',
    maxConcurrentJobs: 5,
    storageDuration: '24 hours',
    webhookUrl: '',
    apiEnabled: false,
    currentBalance: 200000,
    apiKey: clientApiKeys['1005'],
    clientId: 'client_mwl_1005'
  },
  '1006': {
    name: 'Trendy Boutique',
    company: 'Trendy Boutique LLC',
    domain: 'trendyboutique.com',
    email: 'contact@trendyboutique.com',
    phone: '+1 (555) 567-8901',
    status: 'Suspended',
    maxConcurrentJobs: 8,
    storageDuration: '48 hours',
    webhookUrl: clientWebhookUrls['1006'],
    apiEnabled: false,
    currentBalance: 4000,
    apiKey: clientApiKeys['1006'],
    clientId: 'client_tbt_1006'
  },
  '1007': {
    name: 'Classic Couture',
    company: 'Classic Couture Ltd.',
    domain: 'classiccouture.com',
    email: 'info@classiccouture.com',
    phone: '+1 (555) 678-9012',
    status: 'Active',
    maxConcurrentJobs: 10,
    storageDuration: '48 hours',
    webhookUrl: clientWebhookUrls['1007'],
    apiEnabled: true,
    currentBalance: 56000,
    apiKey: clientApiKeys['1007'],
    clientId: 'client_cct_1007'
  },
  '1008': {
    name: 'Street Fashion Co.',
    company: 'Street Fashion Corporation',
    domain: 'streetfashion.com',
    email: 'team@streetfashion.com',
    phone: '+1 (555) 789-0123',
    status: 'Active',
    maxConcurrentJobs: 6,
    storageDuration: '24 hours',
    webhookUrl: clientWebhookUrls['1008'],
    apiEnabled: true,
    currentBalance: 27500,
    apiKey: clientApiKeys['1008'],
    clientId: 'client_sfc_1008'
  },
  '1009': {
    name: 'Vintage Threads',
    company: 'Vintage Threads LLC',
    domain: 'vintagethreads.com',
    email: 'contact@vintagethreads.com',
    phone: '+1 (555) 890-1234',
    status: 'Suspended',
    maxConcurrentJobs: 5,
    storageDuration: '24 hours',
    webhookUrl: clientWebhookUrls['1009'],
    apiEnabled: false,
    currentBalance: 0,
    apiKey: clientApiKeys['1009'],
    clientId: 'client_vth_1009'
  },
  '1010': {
    name: 'Chic Wardrobe',
    company: 'Chic Wardrobe Inc.',
    domain: 'chicwardrobe.com',
    email: 'hello@chicwardrobe.com',
    phone: '',
    status: 'Pending Setup',
    maxConcurrentJobs: 5,
    storageDuration: '24 hours',
    webhookUrl: '',
    apiEnabled: false,
    currentBalance: 50000,
    apiKey: clientApiKeys['1010'],
    clientId: 'client_cwi_1010'
  },
  '1011': {
    name: 'Premium Attire',
    company: 'Premium Attire Ltd.',
    domain: 'premiumattire.com',
    email: 'info@premiumattire.com',
    phone: '+1 (555) 901-2345',
    status: 'Active',
    maxConcurrentJobs: 12,
    storageDuration: '72 hours',
    webhookUrl: clientWebhookUrls['1011'],
    apiEnabled: true,
    currentBalance: 92000,
    apiKey: clientApiKeys['1011'],
    clientId: 'client_pat_1011'
  },
  '1012': {
    name: 'Casual Comfort',
    company: 'Casual Comfort LLC',
    domain: 'casualcomfort.com',
    email: 'support@casualcomfort.com',
    phone: '+1 (555) 012-3456',
    status: 'Active',
    maxConcurrentJobs: 8,
    storageDuration: '48 hours',
    webhookUrl: clientWebhookUrls['1012'],
    apiEnabled: true,
    currentBalance: 38000,
    apiKey: clientApiKeys['1012'],
    clientId: 'client_ccl_1012'
  }
};

export default function EditClientView({ clientId }: { clientId: string }) {
  const client = clientData[clientId] || clientData['1001'];
  
  const [formData, setFormData] = useState({
    clientName: client.name,
    companyName: client.company,
    websiteDomain: client.domain,
    contactEmail: client.email,
    contactPhone: client.phone,
    accountStatus: client.status,
    maxConcurrentJobs: client.maxConcurrentJobs,
    storageDuration: client.storageDuration,
    webhookUrl: client.webhookUrl,
    apiEnabled: client.apiEnabled,
    currentBalance: client.currentBalance,
    addCredits: 0,
    removeCredits: 0
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showActionsMenu, setShowActionsMenu] = useState(false);
  const [showSuspendModal, setShowSuspendModal] = useState(false);

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.clientName.trim()) {
      newErrors.clientName = 'Client name is required';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!formData.websiteDomain.trim()) {
      newErrors.websiteDomain = 'Website domain is required';
    } else if (!/^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?\.[a-zA-Z]{2,}$/.test(formData.websiteDomain)) {
      newErrors.websiteDomain = 'Valid domain required';
    }

    if (!formData.contactEmail.trim()) {
      newErrors.contactEmail = 'Contact email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail)) {
      newErrors.contactEmail = 'Valid email address required';
    }

    if (formData.maxConcurrentJobs < 1 || formData.maxConcurrentJobs > 100) {
      newErrors.maxConcurrentJobs = 'Must be between 1 and 100';
    }

    if (formData.webhookUrl && !/^https?:\/\/.+/.test(formData.webhookUrl)) {
      newErrors.webhookUrl = 'Valid URL required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setShowSuccess(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSuspend = () => {
    setShowSuspendModal(false);
  };

  return (
    <div className="p-8">
      {showSuccess && (
        <SuccessBanner 
          message="Client account successfully updated."
          linkText="Return to Client Details"
          linkHref={`/dashboard/clients/${clientId}`}
          onClose={() => setShowSuccess(false)}
        />
      )}

      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#111111] mb-2">Edit Client Account</h1>
          <p className="text-[#6B7280]">Update client configuration and account settings.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link 
            href={`/dashboard/clients/${clientId}`}
            className="px-5 py-2.5 bg-white border border-[#E5E5E5] text-[#111111] rounded-full text-sm font-medium hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap inline-flex items-center gap-2"
          >
            <i className="ri-eye-line w-4 h-4 flex items-center justify-center"></i>
            View Client Details
          </Link>
          <button
            onClick={() => setShowSuspendModal(true)}
            className="px-5 py-2.5 bg-white border border-[#E5E5E5] text-[#6B7280] rounded-full text-sm font-medium hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap inline-flex items-center gap-2"
          >
            <i className="ri-pause-circle-line w-4 h-4 flex items-center justify-center"></i>
            {formData.accountStatus === 'Suspended' ? 'Reactivate Client' : 'Suspend Client'}
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <ClientInformationForm 
          formData={formData}
          errors={errors}
          updateFormData={updateFormData}
          isLoading={isLoading}
        />

        <AccountStatusSection 
          formData={formData}
          updateFormData={updateFormData}
          isLoading={isLoading}
        />

        <PlatformConfigurationForm 
          formData={formData}
          errors={errors}
          updateFormData={updateFormData}
          isLoading={isLoading}
        />

        <CreditManagementSection 
          formData={formData}
          updateFormData={updateFormData}
          isLoading={isLoading}
        />

        <IntegrationSettingsSection 
          clientId={clientId}
          apiKey={client.apiKey}
          clientIdValue={client.clientId}
          webhookUrl={formData.webhookUrl}
        />

        <div className="flex items-center justify-end gap-3 pt-4">
          <Link
            href={`/dashboard/clients/${clientId}`}
            className="px-6 py-3 bg-white border border-[#E5E5E5] text-[#111111] rounded-full text-sm font-medium hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap"
          >
            Cancel
          </Link>
          <button
            onClick={handleSave}
            disabled={isLoading}
            className="px-8 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-black/90 transition-all cursor-pointer whitespace-nowrap shadow-[0px_4px_12px_rgba(0,0,0,0.15)] disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
          >
            {isLoading ? (
              <>
                <i className="ri-loader-4-line w-4 h-4 flex items-center justify-center animate-spin"></i>
                Saving Changes...
              </>
            ) : (
              'Save Changes'
            )}
          </button>
        </div>
      </div>

      {showSuspendModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-[0px_12px_40px_rgba(0,0,0,0.15)] max-w-md w-full p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#F5F5F5] rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="ri-pause-circle-line text-[#111111] text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#111111] mb-2">
                  {formData.accountStatus === 'Suspended' ? 'Reactivate Client' : 'Suspend Client Account'}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {formData.accountStatus === 'Suspended' 
                    ? `Are you sure you want to reactivate ${formData.clientName}? They will regain access to all platform features.`
                    : `Are you sure you want to suspend ${formData.clientName}? This will immediately disable their access to the platform.`
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
                {formData.accountStatus === 'Suspended' ? 'Reactivate' : 'Suspend'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
