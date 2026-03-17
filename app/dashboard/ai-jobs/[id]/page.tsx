import JobDetailView from './JobDetailView';

export async function generateStaticParams() {
  return [
    { id: 'JOB-8472' },
    { id: 'JOB-8471' },
    { id: 'JOB-8470' },
    { id: 'JOB-8469' },
    { id: 'JOB-8468' },
  ];
}

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <JobDetailView jobId={id} />;
}
