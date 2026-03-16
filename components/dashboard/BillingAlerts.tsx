'use client';

export default function BillingAlerts() {
  const alerts = [
    {
      icon: 'ri-error-warning-line',
      title: 'Failed Payments',
      description: '3 payment transactions failed in the last 24 hours',
      color: 'red',
      action: 'View Transactions',
    },
    {
      icon: 'ri-alert-line',
      title: 'Unusual Purchase Activity',
      description: 'Elite Fashion Group purchased 2x their usual amount',
      color: 'orange',
      action: 'View Client',
    },
    {
      icon: 'ri-time-line',
      title: 'Overdue Invoices',
      description: '2 clients have invoices overdue by more than 7 days',
      color: 'purple',
      action: 'View Invoices',
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'red':
        return 'bg-red-50 border-red-100 text-red-700';
      case 'orange':
        return 'bg-orange-50 border-orange-100 text-orange-700';
      case 'purple':
        return 'bg-purple-50 border-purple-100 text-purple-700';
      default:
        return 'bg-gray-50 border-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full">
      <h2 className="text-lg font-bold text-black mb-4">Billing Alerts</h2>
      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl border ${getColorClasses(alert.color)}`}
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className={`${alert.icon} text-xl`}></i>
              </div>
              <div className="flex-1">
                <div className="font-semibold mb-1">{alert.title}</div>
                <div className="text-sm opacity-80">{alert.description}</div>
              </div>
            </div>
            <button className="text-sm font-medium hover:underline cursor-pointer">
              {alert.action} →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
