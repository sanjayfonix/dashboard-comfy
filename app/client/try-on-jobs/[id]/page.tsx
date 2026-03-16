import JobDetailView from './JobDetailView';

export async function generateStaticParams() {
  return [
    { id: 'JOB-8472' },
    { id: 'JOB-8471' },
    { id: 'JOB-8470' },
    { id: 'JOB-8469' },
    { id: 'JOB-8468' },
    { id: 'JOB-8234' },
    { id: 'JOB-8233' },
    { id: 'JOB-8232' },
    { id: 'JOB-8231' },
    { id: 'JOB-8230' },
    { id: 'JOB-8229' },
    { id: 'JOB-8228' },
    { id: 'JOB-8227' },
    { id: 'JOB-8226' },
    { id: 'JOB-8225' },
  ];
}

export default function JobDetailPage({ params }: { params: { id: string } }) {
  return <JobDetailView jobId={params.id} />;
}
