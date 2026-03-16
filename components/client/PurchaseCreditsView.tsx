'use client';

import { useState } from 'react';
import Link from 'next/link';
import CurrentBalanceCard from './CurrentBalanceCard';
import CreditPackageCard from './CreditPackageCard';
import CustomCreditPurchase from './CustomCreditPurchase';
import CheckoutModal from './CheckoutModal';
import PurchaseSuccessBanner from './PurchaseSuccessBanner';
import PurchaseErrorBanner from './PurchaseErrorBanner';

interface PurchaseDetails {
  credits: number;
  price: number;
  packageName?: string;
}

const creditPackages = [
  {
    name: 'Starter Package',
    credits: 1000,
    price: 25,
    description: 'Perfect for small businesses testing virtual try-on',
  },
  {
    name: 'Growth Package',
    credits: 5000,
    price: 100,
    description: 'Ideal for growing brands with regular customer traffic',
    popular: true,
  },
  {
    name: 'Enterprise Package',
    credits: 10000,
    price: 175,
    description: 'Best value for high-volume fashion retailers',
  },
];

export default function PurchaseCreditsView() {
  const [showCheckout, setShowCheckout] = useState(false);
  const [purchaseDetails, setPurchaseDetails] = useState<PurchaseDetails | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [purchasedCredits, setPurchasedCredits] = useState(0);

  const handleSelectPackage = (credits: number, price: number, packageName: string) => {
    setPurchaseDetails({ credits, price, packageName });
    setShowCheckout(true);
  };

  const handleCustomPurchase = (credits: number, price: number) => {
    setPurchaseDetails({ credits, price });
    setShowCheckout(true);
  };

  const handleConfirmPurchase = () => {
    setShowCheckout(false);
    const success = Math.random() > 0.2;
    
    if (success && purchaseDetails) {
      setPurchasedCredits(purchaseDetails.credits);
      setShowSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setShowError(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRetryPayment = () => {
    setShowError(false);
    setShowCheckout(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <div className="p-8">
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-[#111111] mb-2">Purchase Credits</h1>
            <p className="text-sm text-[#6B7280]">Add credits to continue offering AI virtual try-on to your customers.</p>
          </div>
          <Link href="/client/credits">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-[#F8F8F8] text-[#111111] rounded-full text-sm font-semibold hover:bg-[#E5E5E5] transition-colors cursor-pointer whitespace-nowrap border border-[#E5E7EB]">
              <i className="ri-arrow-left-line w-4 h-4 flex items-center justify-center"></i>
              Back to Credits
            </button>
          </Link>
        </div>

        {showSuccess && (
          <PurchaseSuccessBanner
            credits={purchasedCredits}
            onDismiss={() => setShowSuccess(false)}
          />
        )}

        {showError && (
          <PurchaseErrorBanner
            onRetry={handleRetryPayment}
            onDismiss={() => setShowError(false)}
          />
        )}

        <div className="mb-8">
          <CurrentBalanceCard />
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-bold text-[#111111] mb-2">Credit Packages</h2>
          <p className="text-sm text-[#6B7280] mb-6">Choose a package that fits your business needs</p>
          
          <div className="grid grid-cols-3 gap-6">
            {creditPackages.map((pkg) => (
              <CreditPackageCard
                key={pkg.name}
                name={pkg.name}
                credits={pkg.credits}
                price={pkg.price}
                description={pkg.description}
                popular={pkg.popular}
                onSelect={() => handleSelectPackage(pkg.credits, pkg.price, pkg.name)}
              />
            ))}
          </div>
        </div>

        <div>
          <CustomCreditPurchase onPurchase={handleCustomPurchase} />
        </div>
      </div>

      {showCheckout && purchaseDetails && (
        <CheckoutModal
          credits={purchaseDetails.credits}
          price={purchaseDetails.price}
          packageName={purchaseDetails.packageName}
          onClose={() => setShowCheckout(false)}
          onConfirm={handleConfirmPurchase}
        />
      )}
    </div>
  );
}