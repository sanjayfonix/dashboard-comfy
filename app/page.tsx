import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F8F8F8]">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-[#6B7280] text-sm mb-4">Loading dashboard...</p>
        <Link
          href="/dashboard"
          className="px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-black/90 transition-all"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
