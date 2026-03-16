'use client';

export default function InputImageSection({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-[0px_6px_20px_rgba(0,0,0,0.05)] border border-[#E5E5E5] p-6">
      <h2 className="text-lg font-semibold text-[#111111] mb-5">User Uploaded Photo</h2>
      
      <div className="bg-[#F8F8F8] rounded-xl overflow-hidden aspect-[2/3] flex items-center justify-center">
        <img 
          src={imageUrl} 
          alt="User uploaded photo" 
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
}