import AuditLogsView from './AuditLogsView';

export async function generateStaticParams() {
  return [];
}

export default function AuditLogsPage() {
  return <AuditLogsView />;
}