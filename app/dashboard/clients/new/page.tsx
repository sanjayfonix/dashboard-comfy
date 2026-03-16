'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ClientInformationForm from '@/components/dashboard/ClientInformationForm';
import PlatformConfigurationForm from '@/components/dashboard/PlatformConfigurationForm';
import IntegrationSetupCard from '@/components/dashboard/IntegrationSetupCard';
import SuccessBanner from '@/components/dashboard/SuccessBanner';

export default function NewClientPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [newClientId, setNewClientId] = useState<string>('');

  const [formData, setFormData] = useState({
    clientName: '',
    companyName: '',
    websiteDomain: '',
    contactEmail: '',
    contactPhone: '',
    accountStatus: 'Pending Setup',
    initialCredits: 50000,
    maxConcurrentJobs: 10,
    storageDuration: '48 hours',
    webhookUrl: ''
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.clientName.trim()) {
      newErrors.clientName = 'Client name is required';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!formData.websiteDomain.trim()) {
      newErrors.websiteDomain = 'Valid domain required';
    } else if (!/^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?\.[a-zA-Z]{2,}$/.test(formData.websiteDomain)) {
      newErrors.websiteDomain = 'Please enter a valid domain format';
    }

    if (!formData.contactEmail.trim()) {
      newErrors.contactEmail = 'Contact email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail)) {
      newErrors.contactEmail = 'Please enter a valid email address';
    }

    if (formData.initialCredits < 1000) {
      newErrors.initialCredits = 'Minimum 1,000 credits required';
    }

    if (formData.maxConcurrentJobs < 1) {
      newErrors.maxConcurrentJobs = 'Must be at least 1';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const clientId = `CLI-${Date.now().toString().slice(-8)}`;
      setNewClientId(clientId);
      setIsLoading(false);
      setShowSuccess(true);

      setTimeout(() => {
        router.push('/dashboard/clients');
      }, 3000);
    }, 1500);
  };

  const handleCancel = () => {
    router.push('/dashboard/clients');
  };

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

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#111111] mb-2">Create New Client</h1>
          <p className="text-[#6B7280]">Set up a new brand to use the AI Virtual Try-On platform.</p>
        </div>
        <button 
          onClick={handleCancel}
          className="px-5 py-2.5 bg-white border border-[#E5E5E5] text-[#111111] rounded-full text-sm font-medium hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap"
        >
          <i className="ri-arrow-left-line mr-2 w-4 h-4 inline-flex items-center justify-center"></i>
          Back to Clients
        </button>
      </div>

      {showSuccess && (
        <SuccessBanner clientId={newClientId} />
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <ClientInformationForm 
          formData={formData}
          errors={errors}
          updateFormData={updateFormData}
          isLoading={isLoading}
        />

        <PlatformConfigurationForm 
          formData={formData}
          errors={errors}
          updateFormData={updateFormData}
          isLoading={isLoading}
        />

        <IntegrationSetupCard />

        <div className="flex items-center justify-end gap-4 pt-4">
          <button
            type="button"
            onClick={handleCancel}
            disabled={isLoading}
            className="px-6 py-3 bg-white border border-[#E5E5E5] text-[#111111] rounded-full text-sm font-medium hover:bg-[#F8F8F8] transition-all cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-black/90 transition-all cursor-pointer whitespace-nowrap shadow-[0px_4px_12px_rgba(0,0,0,0.15)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isLoading ? (
              <>
                <i className="ri-loader-4-line animate-spin w-4 h-4 flex items-center justify-center"></i>
                Creating Account...
              </>
            ) : (
              <>
                <i className="ri-check-line w-4 h-4 flex items-center justify-center"></i>
                Create Client Account
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}