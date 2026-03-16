'use client';

import ClientSidebar from '@/components/client/ClientSidebar';
import ClientTopNav from '@/components/client/ClientTopNav';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#F8F8F8]">
      <div className="w-64 flex-shrink-0 h-screen overflow-hidden">
        <ClientSidebar />
      </div>
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <ClientTopNav />
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <div className="p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
