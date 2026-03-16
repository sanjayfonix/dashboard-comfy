export default function ImageGuidelinesPanel() {
  const guidelines = [
    {
      icon: 'ri-focus-3-line',
      title: 'Front-Facing View',
      description: 'Use front-facing garment images for best results'
    },
    {
      icon: 'ri-layout-line',
      title: 'Plain Background',
      description: 'Use solid or plain backgrounds to improve AI accuracy'
    },
    {
      icon: 'ri-t-shirt-line',
      title: 'Avoid Folded Clothing',
      description: 'Garments should be fully visible and unfolded'
    },
    {
      icon: 'ri-eye-line',
      title: 'Full Visibility',
      description: 'Ensure the entire garment is visible in the frame'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-[#F0F0F0] p-6">
      <div className="mb-4">
        <h3 className="text-base font-semibold text-[#111111] mb-1">Image Guidelines</h3>
        <p className="text-sm text-[#6B7280]">Follow these best practices for optimal AI try-on results.</p>
      </div>

      <div className="space-y-4">
        {guidelines.map((guideline, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-10 h-10 bg-[#F8F8F8] rounded-xl flex items-center justify-center flex-shrink-0">
              <i className={`${guideline.icon} text-[#111111] w-5 h-5 flex items-center justify-center`}></i>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-[#111111] mb-0.5">{guideline.title}</h4>
              <p className="text-xs text-[#6B7280]">{guideline.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-[#F0F0F0]">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <i className="ri-lightbulb-line text-amber-600 w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5"></i>
            <div>
              <h4 className="text-sm font-semibold text-amber-900 mb-1">Pro Tip</h4>
              <p className="text-xs text-amber-800">High-quality images with good lighting produce the most accurate virtual try-on results.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}