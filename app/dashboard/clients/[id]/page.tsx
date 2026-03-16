import ClientDetailView from './ClientDetailView';

export function generateStaticParams(): { id: string }[] {
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
    { id: 'CL-001' },
    { id: 'CL-002' },
    { id: 'CL-003' },
    { id: 'CL-004' },
    { id: 'CL-005' },
    { id: 'CL-006' },
  ];
}

export default function ClientDetailPage({ params }: { params: { id: string } }) {
  return <ClientDetailView clientId={params.id} />;
}
