'use client';

interface IntegrationStepsGuideProps {
  onRunTest: () => void;
}

export default function IntegrationStepsGuide({ onRunTest }: IntegrationStepsGuideProps) {
  const steps = [
    {
      number: 1,
      title: 'Copy the integration script',
      description: 'Get the embed code from the section above',
      icon: 'ri-file-copy-line',
    },
    {
      number: 2,
      title: 'Paste it into your website',
      description: 'Add the script to your product page template',
      icon: 'ri-code-line',
    },
    {
      number: 3,
      title: 'Configure API credentials',
      description: 'Set your Client ID and API Key in the script',
      icon: 'ri-key-line',
    },
    {
      number: 4,
      title: 'Test integration',
      description: 'Run a test to verify everything works',
      icon: 'ri-checkbox-circle-line',
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-[#E5E5E5]">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-[#111111]">Integration Steps</h2>
          <p className="text-sm text-[#6B7280] mt-1">Follow these steps to get started</p>
        </div>
      </div>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-start gap-4">
            <div className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full text-sm font-bold flex-shrink-0">
              {step.number}
            </div>
            <div className="flex-1 pt-1">
              <div className="flex items-center gap-2 mb-1">
                <i className={`${step.icon} w-4 h-4 flex items-center justify-center text-[#111111]`}></i>
                <h3 className="text-sm font-semibold text-[#111111]">{step.title}</h3>
              </div>
              <p className="text-xs text-[#6B7280]">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="absolute left-[29px] mt-12 w-0.5 h-8 bg-[#E5E5E5]"></div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={onRunTest}
        className="w-full mt-6 px-4 py-3 bg-black text-white text-sm font-medium rounded-xl hover:bg-black/90 transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
      >
        <i className="ri-play-circle-line w-4 h-4 flex items-center justify-center"></i>
        <span>Run Test Try-On</span>
      </button>

    </div>
  );
}