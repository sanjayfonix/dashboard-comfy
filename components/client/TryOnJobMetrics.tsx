'use client';

import ClientMetricCard from './ClientMetricCard';

export default function TryOnJobMetrics() {
  return (
    <div className="grid grid-cols-4 gap-5 mb-7">
      <ClientMetricCard
        title="Total Jobs"
        value="8,234"
        trend="+15%"
        trendUp={true}
        icon="ri-file-list-3-line"
        accentColor="bg-blue-500"
      />
      <ClientMetricCard
        title="Successful Jobs"
        value="7,972"
        trend="+12%"
        trendUp={true}
        icon="ri-checkbox-circle-line"
        accentColor="bg-emerald-500"
      />
      <ClientMetricCard
        title="Failed Jobs"
        value="262"
        trend="+8%"
        trendUp={false}
        icon="ri-close-circle-line"
        accentColor="bg-red-500"
      />
      <ClientMetricCard
        title="Avg Processing Time"
        value="2.3s"
        trend="-0.2s"
        trendUp={true}
        icon="ri-time-line"
        accentColor="bg-violet-500"
      />
    </div>
  );
}