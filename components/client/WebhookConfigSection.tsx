'use client';

interface WebhookConfigSectionProps {
  webhookUrl: string;
  onWebhookChange: (url: string) => void;
  onSave: () => void;
}

export default function WebhookConfigSection({ webhookUrl, onWebhookChange, onSave }: WebhookConfigSectionProps) {
  const events = [
    { id: 'tryon.completed', name: 'Try-On Completed', description: 'Triggered when a try-on job finishes successfully' },
    { id: 'tryon.failed', name: 'Try-On Failed', description: 'Triggered when a try-on job fails' },
    { id: 'credits.low', name: 'Credits Low', description: 'Triggered when credit balance falls below threshold' },
    { id: 'garment.uploaded', name: 'Garment Uploaded', description: 'Triggered when a new garment is added' },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-[#E5E5E5]">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-[#111111]">Webhook Configuration</h2>
          <p className="text-sm text-[#6B7280] mt-1">Receive real-time notifications about try-on events</p>
        </div>
      </div>

      <div className="space-y-6">
        
        <div>
          <label className="block text-sm font-medium text-[#111111] mb-2">Webhook URL</label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={webhookUrl}
              onChange={(e) => onWebhookChange(e.target.value)}
              placeholder="https://your-domain.com/webhooks/tryon"
              className="flex-1 px-4 py-3 bg-[#F8F8F8] border border-transparent rounded-xl text-sm text-[#111111] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#E5E5E5] focus:bg-white transition-all"
            />
            <button
              onClick={onSave}
              className="px-4 py-3 bg-black text-white text-sm font-medium rounded-xl hover:bg-black/90 transition-colors cursor-pointer whitespace-nowrap"
            >
              Save Webhook
            </button>
          </div>
          <p className="text-xs text-[#6B7280] mt-2">We'll send POST requests to this URL when events occur</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[#111111] mb-3">Webhook Events</h3>
          <div className="space-y-2">
            {events.map((event) => (
              <div key={event.id} className="p-4 bg-[#F8F8F8] rounded-xl">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <p className="text-sm font-medium text-[#111111]">{event.name}</p>
                    </div>
                    <p className="text-xs text-[#6B7280] mt-1 ml-4">{event.description}</p>
                  </div>
                  <span className="px-2.5 py-1 bg-white rounded-lg text-xs font-mono text-[#6B7280]">{event.id}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-start gap-3">
          <i className="ri-information-line text-blue-600 w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5"></i>
          <div>
            <p className="text-sm font-medium text-blue-900">Webhook Security</p>
            <p className="text-xs text-blue-700 mt-1">All webhook requests include a signature header for verification. Check our documentation for implementation details.</p>
          </div>
        </div>

      </div>

    </div>
  );
}