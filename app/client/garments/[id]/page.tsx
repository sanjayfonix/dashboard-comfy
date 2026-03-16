import GarmentDetailView from './GarmentDetailView';

export async function generateStaticParams() {
  return [
    { id: 'G-1001' },
    { id: 'G-1002' },
    { id: 'G-1003' },
    { id: 'G-1004' },
    { id: 'G-1005' },
  ];
}

export default function GarmentDetailPage({ params }: { params: { id: string } }) {
  return <GarmentDetailView garmentId={params.id} />;
}