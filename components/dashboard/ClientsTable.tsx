'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ClientsTableProps {
  searchQuery: string;
  statusFilter: string;
  activityFilter: string;
}

const clients = [
  { 
    id: 1001, 
    name: 'Fashion Brand X', 
    domain: 'fashionbrandx.com', 
    email: 'contact@fashionbrandx.com', 
    garments: 342, 
    creditsRemaining: 74000, 
    maxCredits: 300000,
    tryOns: 45200, 
    status: 'Active', 
    lastActivity: '2 hours ago',
    activityLevel: 'High'
  },
  { 
    id: 1002, 
    name: 'Luxury Apparel Co.', 
    domain: 'luxuryapparel.com', 
    email: 'hello@luxuryapparel.com', 
    garments: 287, 
    creditsRemaining: 105500, 
    maxCredits: 300000,
    tryOns: 38900, 
    status: 'Active', 
    lastActivity: '5 hours ago',
    activityLevel: 'High'
  },
  { 
    id: 1003, 
    name: 'Urban Style Inc.', 
    domain: 'urbanstyle.com', 
    email: 'info@urbanstyle.com', 
    garments: 198, 
    creditsRemaining: 89500, 
    maxCredits: 250000,
    tryOns: 32100, 
    status: 'Active', 
    lastActivity: '1 day ago',
    activityLevel: 'Medium'
  },
  { 
    id: 1004, 
    name: 'Elite Fashion House', 
    domain: 'elitefashion.com', 
    email: 'team@elitefashion.com', 
    garments: 256, 
    creditsRemaining: 108000, 
    maxCredits: 250000,
    tryOns: 28400, 
    status: 'Active', 
    lastActivity: '3 hours ago',
    activityLevel: 'High'
  },
  { 
    id: 1005, 
    name: 'Modern Wear Ltd.', 
    domain: 'modernwear.com', 
    email: 'support@modernwear.com', 
    garments: 175, 
    creditsRemaining: 76000, 
    maxCredits: 200000,
    tryOns: 24800, 
    status: 'Active', 
    lastActivity: '6 hours ago',
    activityLevel: 'Medium'
  },
  { 
    id: 1006, 
    name: 'Trendy Boutique', 
    domain: 'trendyboutique.com', 
    email: 'hello@trendyboutique.com', 
    garments: 143, 
    creditsRemaining: 4000, 
    maxCredits: 100000,
    tryOns: 19200, 
    status: 'Active', 
    lastActivity: '12 hours ago',
    activityLevel: 'Medium'
  },
  { 
    id: 1007, 
    name: 'Classic Couture', 
    domain: 'classiccouture.com', 
    email: 'info@classiccouture.com', 
    garments: 124, 
    creditsRemaining: 56000, 
    maxCredits: 150000,
    tryOns: 16800, 
    status: 'Active', 
    lastActivity: '1 day ago',
    activityLevel: 'Low'
  },
  { 
    id: 1008, 
    name: 'Street Fashion Co.', 
    domain: 'streetfashion.com', 
    email: 'team@streetfashion.com', 
    garments: 98, 
    creditsRemaining: 27500, 
    maxCredits: 100000,
    tryOns: 14500, 
    status: 'Active', 
    lastActivity: '8 hours ago',
    activityLevel: 'Low'
  },
  { 
    id: 1009, 
    name: 'Vintage Threads', 
    domain: 'vintagethreads.com', 
    email: 'contact@vintagethreads.com', 
    garments: 89, 
    creditsRemaining: 0, 
    maxCredits: 100000,
    tryOns: 12300, 
    status: 'Suspended', 
    lastActivity: '5 days ago',
    activityLevel: 'Low'
  },
  { 
    id: 1010, 
    name: 'Chic Wardrobe', 
    domain: 'chicwardrobe.com', 
    email: 'hello@chicwardrobe.com', 
    garments: 67, 
    creditsRemaining: 50000, 
    maxCredits: 50000,
    tryOns: 0, 
    status: 'Pending Setup', 
    lastActivity: 'Never',
    activityLevel: 'Low'
  },
  { 
    id: 1011, 
    name: 'Premium Attire', 
    domain: 'premiumattire.com', 
    email: 'info@premiumattire.com', 
    garments: 213, 
    creditsRemaining: 92000, 
    maxCredits: 200000,
    tryOns: 21600, 
    status: 'Active', 
    lastActivity: '4 hours ago',
    activityLevel: 'High'
  },
  { 
    id: 1012, 
    name: 'Casual Comfort', 
    domain: 'casualcomfort.com', 
    email: 'support@casualcomfort.com', 
    garments: 156, 
    creditsRemaining: 38000, 
    maxCredits: 150000,
    tryOns: 18700, 
    status: 'Active', 
    lastActivity: '10 hours ago',
    activityLevel: 'Medium'
  },
];

const ITEMS_PER_PAGE = 6;

export default function ClientsTable({ searchQuery, statusFilter, activityFilter }: ClientsTableProps) {
  const [showActionsMenu, setShowActionsMenu] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredClients = clients.filter(client => {
    const matchesSearch = 
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || client.status === statusFilter;
    const matchesActivity = activityFilter === 'All' || client.activityLevel === activityFilter;
    return matchesSearch && matchesStatus && matchesActivity;
  });

  const totalPages = Math.ceil(filteredClients.length / ITEMS_PER_PAGE);
  const paginatedClients = filteredClients.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setShowActionsMenu(null);
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-[#111111] text-white';
      case 'Suspended':
        return 'bg-[#F5F5F5] text-[#6B7280] border border-[#E5E5E5]';
      case 'Pending Setup':
        return 'bg-[#F5F5F5] text-[#111111] border border-[#E5E5E5]';
      default:
        return 'bg-[#F5F5F5] text-[#6B7280]';
    }
  };

  const getCreditWarning = (remaining: number, max: number) => {
    const percentage = (remaining / max) * 100;
    if (percentage < 10) return 'critical';
    if (percentage < 25) return 'warning';
    return 'normal';
  };

  if (filteredClients.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-20 h-20 bg-[#F5F5F5] rounded-2xl flex items-center justify-center mb-6">
          <i className="ri-building-line text-[#6B7280] text-3xl w-10 h-10 flex items-center justify-center"></i>
        </div>
        <h3 className="text-xl font-bold text-[#111111] mb-2">No clients found</h3>
        <p className="text-sm text-[#6B7280] mb-6 text-center max-w-md">
          {searchQuery || statusFilter !== 'All' || activityFilter !== 'All'
            ? 'Try adjusting your search or filters to find what you\'re looking for.'
            : 'Create your first client account to start providing virtual try-on services.'}
        </p>
        {!searchQuery && statusFilter === 'All' && activityFilter === 'All' && (
          <Link 
            href="/dashboard/clients/new"
            className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-black/90 transition-all cursor-pointer whitespace-nowrap shadow-[0px_4px_12px_rgba(0,0,0,0.15)] inline-flex items-center gap-2"
          >
            <i className="ri-add-line w-4 h-4 flex items-center justify-center"></i>
            Add New Client
          </Link>
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#E5E5E5]">
              <th className="text-left py-4 px-6 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Client</th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Domain</th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Garments</th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Credits</th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Try-Ons</th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Status</th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Last Activity</th>
              <th className="text-right py-4 px-6 text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedClients.map((client) => {
              const creditWarning = getCreditWarning(client.creditsRemaining, client.maxCredits);
              const creditPercentage = Math.round((client.creditsRemaining / client.maxCredits) * 100);
              
              return (
                <tr key={client.id} className="border-b border-[#F5F5F5] hover:bg-[#F8F8F8] transition-colors">
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        {client.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#111111]">{client.name}</p>
                        <p className="text-xs text-[#6B7280]">{client.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-2">
                      <i className="ri-global-line text-[#6B7280] w-4 h-4 flex items-center justify-center"></i>
                      <span className="text-sm text-[#111111]">{client.domain}</span>
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-2">
                      <i className="ri-t-shirt-line text-[#6B7280] w-4 h-4 flex items-center justify-center"></i>
                      <span className="text-sm font-medium text-[#111111]">{client.garments}</span>
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm font-semibold text-[#111111]">
                          {client.creditsRemaining.toLocaleString()}
                        </span>
                        <span className="text-xs text-[#6B7280]">
                          {creditPercentage}%
                        </span>
                      </div>
                      <div className="w-32 h-1.5 bg-[#F0F0F0] rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${
                            creditWarning === 'critical' 
                              ? 'bg-[#6B7280]' 
                              : creditWarning === 'warning'
                              ? 'bg-[#9CA3AF]'
                              : 'bg-[#111111]'
                          }`}
                          style={{ width: `${creditPercentage}%` }}
                        ></div>
                      </div>
                      <p className="text-[11px] text-[#9CA3AF]">
                        of {client.maxCredits.toLocaleString()}
                      </p>
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    <span className="text-sm font-medium text-[#111111]">
                      {client.tryOns.toLocaleString()}
                    </span>
                  </td>
                  <td className="py-5 px-6">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${getStatusStyle(client.status)}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        client.status === 'Active' ? 'bg-white/60' : 'bg-[#9CA3AF]'
                      }`}></span>
                      {client.status}
                    </span>
                  </td>
                  <td className="py-5 px-6">
                    <span className="text-sm text-[#6B7280]">{client.lastActivity}</span>
                  </td>
                  <td className="py-5 px-6">
                    <div className="flex items-center justify-end gap-2 relative">
                      <Link 
                        href={`/dashboard/clients/${client.id}`}
                        className="px-4 py-2 bg-black text-white rounded-full text-xs font-medium hover:bg-black/90 transition-all cursor-pointer whitespace-nowrap inline-flex items-center gap-2"
                      >
                        <i className="ri-eye-line w-3.5 h-3.5 flex items-center justify-center"></i>
                        View Details
                      </Link>
                      <button 
                        onClick={() => setShowActionsMenu(showActionsMenu === client.id ? null : client.id)}
                        className="p-2 text-[#111111] hover:bg-[#F5F5F5] rounded-lg transition-colors cursor-pointer"
                      >
                        <i className="ri-more-2-fill w-4 h-4 flex items-center justify-center"></i>
                      </button>
                      {showActionsMenu === client.id && (
                        <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-xl shadow-[0px_6px_20px_rgba(0,0,0,0.12)] border border-[#E5E5E5] z-50 py-2">
                          <button className="w-full px-4 py-2.5 text-left text-sm text-[#111111] hover:bg-[#F8F8F8] cursor-pointer whitespace-nowrap transition-colors flex items-center gap-2">
                            <i className="ri-edit-line w-4 h-4 flex items-center justify-center"></i>
                            Edit Client
                          </button>
                          <button className="w-full px-4 py-2.5 text-left text-sm text-[#111111] hover:bg-[#F8F8F8] cursor-pointer whitespace-nowrap transition-colors flex items-center gap-2">
                            <i className="ri-coin-line w-4 h-4 flex items-center justify-center"></i>
                            Add Credits
                          </button>
                          <button className="w-full px-4 py-2.5 text-left text-sm text-[#111111] hover:bg-[#F8F8F8] cursor-pointer whitespace-nowrap transition-colors flex items-center gap-2">
                            <i className="ri-file-text-line w-4 h-4 flex items-center justify-center"></i>
                            View Activity Log
                          </button>
                          <div className="my-1 border-t border-[#F0F0F0]"></div>
                          <button className="w-full px-4 py-2.5 text-left text-sm text-[#6B7280] hover:bg-[#F8F8F8] cursor-pointer whitespace-nowrap transition-colors flex items-center gap-2">
                            <i className="ri-pause-circle-line w-4 h-4 flex items-center justify-center"></i>
                            {client.status === 'Suspended' ? 'Reactivate Client' : 'Suspend Client'}
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between px-6 py-4 border-t border-[#F0F0F0]">
          <p className="text-sm text-[#6B7280]">
            Showing <span className="font-medium text-[#111111]">{(currentPage - 1) * ITEMS_PER_PAGE + 1}</span>–<span className="font-medium text-[#111111]">{Math.min(currentPage * ITEMS_PER_PAGE, filteredClients.length)}</span> of <span className="font-medium text-[#111111]">{filteredClients.length}</span> clients
          </p>
          <div className="flex items-center gap-1">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#E5E5E5] text-[#6B7280] hover:bg-[#F5F5F5] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <i className="ri-arrow-left-s-line w-4 h-4 flex items-center justify-center"></i>
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  page === currentPage
                    ? 'bg-black text-white'
                    : 'border border-[#E5E5E5] text-[#6B7280] hover:bg-[#F5F5F5]'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#E5E5E5] text-[#6B7280] hover:bg-[#F5F5F5] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <i className="ri-arrow-right-s-line w-4 h-4 flex items-center justify-center"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}