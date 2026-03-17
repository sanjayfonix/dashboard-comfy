import EditGarmentView from './EditGarmentView';

export async function generateStaticParams() {
  return [
    { id: 'G-1001' },
    { id: 'G-1002' },
    { id: 'G-1003' },
    { id: 'G-1004' },
    { id: 'G-1005' },
  ];
}

export default async function EditGarmentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <EditGarmentView garmentId={id} />;
}
