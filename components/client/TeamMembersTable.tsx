'use client';

interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  lastLogin: string;
  avatar: string;
}

interface TeamMembersTableProps {
  members: TeamMember[];
  onEditRole: (userId: string) => void;
  onDeactivate: (userId: string) => void;
  onRemove: (userId: string) => void;
}

export default function TeamMembersTable({ members, onEditRole, onDeactivate, onRemove }: TeamMembersTableProps) {
  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      'Active': 'bg-emerald-50 text-emerald-600 border border-emerald-100',
      'Pending Invitation': 'bg-amber-50 text-amber-600 border border-amber-100',
      'Disabled': 'bg-[#F5F5F5] text-[#6B7280] border border-[#E5E5E5]',
    };
    const dots: Record<string, string> = {
      'Active': 'bg-emerald-500',
      'Pending Invitation': 'bg-amber-400',
      'Disabled': 'bg-[#9CA3AF]',
    };
    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${styles[status] || 'bg-[#F5F5F5] text-[#6B7280] border border-[#E5E5E5]'}`}>
        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dots[status] || 'bg-[#9CA3AF]'}`}></span>
        {status}
      </span>
    );
  };

  const getRoleBadge = (role: string) => {
    const styles: Record<string, string> = {
      'Admin': 'bg-purple-50 text-purple-600 border border-purple-100',
      'Operator': 'bg-blue-50 text-blue-600 border border-blue-100',
      'Viewer': 'bg-[#F5F5F5] text-[#6B7280] border border-[#E5E5E5]',
    };
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${styles[role] || 'bg-[#F5F5F5] text-[#6B7280] border border-[#E5E5E5]'}`}>
        {role}
      </span>
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-4 px-4 text-sm font-semibold text-gray-900">User</th>
            <th className="text-left py-4 px-4 text-sm font-semibold text-gray-900">Email</th>
            <th className="text-left py-4 px-4 text-sm font-semibold text-gray-900">Role</th>
            <th className="text-left py-4 px-4 text-sm font-semibold text-gray-900">Status</th>
            <th className="text-left py-4 px-4 text-sm font-semibold text-gray-900">Last Login</th>
            <th className="text-right py-4 px-4 text-sm font-semibold text-gray-900">Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <td className="py-4 px-4">
                <div className="flex items-center gap-3">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="font-medium text-gray-900">{member.name}</span>
                </div>
              </td>
              <td className="py-4 px-4 text-sm text-gray-600">{member.email}</td>
              <td className="py-4 px-4">
                {getRoleBadge(member.role)}
              </td>
              <td className="py-4 px-4">
                {getStatusBadge(member.status)}
              </td>
              <td className="py-4 px-4 text-sm text-gray-600">{member.lastLogin}</td>
              <td className="py-4 px-4">
                <div className="flex items-center justify-end gap-2">
                  <button
                    onClick={() => onEditRole(member.id)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Edit Role"
                  >
                    <i className="ri-edit-line w-5 h-5 flex items-center justify-center text-gray-600"></i>
                  </button>
                  <button
                    onClick={() => onDeactivate(member.id)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    title={member.status === 'Disabled' ? 'Activate User' : 'Deactivate User'}
                  >
                    <i className={`${member.status === 'Disabled' ? 'ri-user-follow-line' : 'ri-user-unfollow-line'} w-5 h-5 flex items-center justify-center text-gray-600`}></i>
                  </button>
                  <button
                    onClick={() => onRemove(member.id)}
                    className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                    title="Remove User"
                  >
                    <i className="ri-delete-bin-line w-5 h-5 flex items-center justify-center text-red-600"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}