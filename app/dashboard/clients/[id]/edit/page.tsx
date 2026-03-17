import EditClientView from './EditClientView';

export async function generateStaticParams() {
  return [
    { id: '1001' },
    { id: '1002' },
    { id: '1003' },
    { id: '1004' },
    { id: '1005' },
    { id: '1006' },
    { id: '1007' },
    { id: '1008' },
    { id: '1009' },
    { id: '1010' },
    { id: '1011' },
    { id: '1012' },
  ];
}

export default async function EditClientPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <EditClientView clientId={id} />;
}
