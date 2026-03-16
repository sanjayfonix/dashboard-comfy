'use client';

interface IntegrationAlertsPanelProps {
  status: 'connected' | 'not-connected' | 'pending';
}

export default function IntegrationAlertsPanel({ status }: IntegrationAlertsPanelProps) {
  if (status === 'connected') {
    return null;
  }

  const alerts = [
    {
      id: 1,
      type: 'warning',
      title: 'Integration not complete',
      message: 'Your website is not yet connected to the AI virtual try-on service.',
      action: 'Start Integration',
      actionType: 'scroll',
    },
  ];

  const handleAction = (actionType: string) => {
    if (actionType === 'scroll') {
      document.querySelector('.bg-white')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-3">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={`p-4 rounded-xl border flex items-start gap-3 ${
            alert.type === 'error'
              ? 'bg-red-50 border-red-200'
              : alert.type === 'warning'
              ? 'bg-orange-50 border-orange-200'
              : 'bg-blue-50 border-blue-200'
          }`}
        >
          <i
            className={`${
              alert.type === 'error'
                ? 'ri-error-warning-fill text-red-600'
                : alert.type === 'warning'
                ? 'ri-error-warning-line text-orange-600'
                : 'ri-information-line text-blue-600'
            } w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5`}
          ></i>
          <div className="flex-1">
            <p
              className={`text-sm font-medium ${
                alert.type === 'error'
                  ? 'text-red-900'
                  : alert.type === 'warning'
                  ? 'text-orange-900'
                  : 'text-blue-900'
              }`}
            >
              {alert.title}
            </p>
            <p
              className={`text-xs mt-1 ${
                alert.type === 'error'
                  ? 'text-red-700'
                  : alert.type === 'warning'
                  ? 'text-orange-700'
                  : 'text-blue-700'
              }`}
            >
              {alert.message}
            </p>
          </div>
          <button
            onClick={() => handleAction(alert.actionType)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              alert.type === 'error'
                ? 'bg-red-600 text-white hover:bg-red-700'
                : alert.type === 'warning'
                ? 'bg-orange-600 text-white hover:bg-orange-700'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {alert.action}
          </button>
        </div>
      ))}
    </div>
  );
}