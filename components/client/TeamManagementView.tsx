'use client';

import { useState } from 'react';
import TeamMetrics from './TeamMetrics';
import TeamMembersTable from './TeamMembersTable';
import InviteUserModal from './InviteUserModal';
import EditRoleModal from './EditRoleModal';
import ConfirmationModal from './ConfirmationModal';

export default function TeamManagementView() {
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [confirmAction, setConfirmAction] = useState<{
    type: 'deactivate' | 'remove';
    userId: string;
    userName: string;
  } | null>(null);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const [teamMembers, setTeamMembers] = useState([
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@fashionbrand.com',
      role: 'Admin',
      status: 'Active',
      lastLogin: '2024-01-15 14:30',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20woman%20business%20portrait%20headshot%20corporate%20style%20clean%20white%20background%20confident%20smile%20modern%20professional%20attire&width=100&height=100&seq=team1&orientation=squarish'
    },
    {
      id: '2',
      name: 'Michael Chen',
      email: 'michael.chen@fashionbrand.com',
      role: 'Operator',
      status: 'Active',
      lastLogin: '2024-01-15 11:20',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20man%20business%20portrait%20headshot%20corporate%20style%20clean%20white%20background%20confident%20smile%20modern%20professional%20attire&width=100&height=100&seq=team2&orientation=squarish'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      email: 'emily.rodriguez@fashionbrand.com',
      role: 'Operator',
      status: 'Active',
      lastLogin: '2024-01-14 16:45',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20woman%20business%20portrait%20headshot%20corporate%20style%20clean%20white%20background%20confident%20smile%20modern%20professional%20attire%20diverse&width=100&height=100&seq=team3&orientation=squarish'
    },
    {
      id: '4',
      name: 'David Park',
      email: 'david.park@fashionbrand.com',
      role: 'Viewer',
      status: 'Active',
      lastLogin: '2024-01-13 09:15',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20man%20business%20portrait%20headshot%20corporate%20style%20clean%20white%20background%20confident%20smile%20modern%20professional%20attire%20asian&width=100&height=100&seq=team4&orientation=squarish'
    },
    {
      id: '5',
      name: 'Jessica Williams',
      email: 'jessica.williams@fashionbrand.com',
      role: 'Viewer',
      status: 'Pending Invitation',
      lastLogin: 'Never',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20woman%20business%20portrait%20headshot%20corporate%20style%20clean%20white%20background%20confident%20smile%20modern%20professional%20attire%20blonde&width=100&height=100&seq=team5&orientation=squarish'
    },
    {
      id: '6',
      name: 'Robert Taylor',
      email: 'robert.taylor@fashionbrand.com',
      role: 'Operator',
      status: 'Disabled',
      lastLogin: '2024-01-05 13:22',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20man%20business%20portrait%20headshot%20corporate%20style%20clean%20white%20background%20confident%20smile%20modern%20professional%20attire%20mature&width=100&height=100&seq=team6&orientation=squarish'
    }
  ]);

  const handleInviteUser = (userData: any) => {
    const newUser = {
      id: String(teamMembers.length + 1),
      name: userData.name,
      email: userData.email,
      role: userData.role,
      status: 'Pending Invitation',
      lastLogin: 'Never',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20person%20business%20portrait%20headshot%20corporate%20style%20clean%20white%20background%20confident%20smile%20modern%20professional%20attire&width=100&height=100&seq=teamnew' + (teamMembers.length + 1) + '&orientation=squarish'
    };
    setTeamMembers([...teamMembers, newUser]);
    setShowInviteModal(false);
  };

  const handleEditRole = (userId: string) => {
    const user = teamMembers.find(m => m.id === userId);
    setSelectedUser(user);
    setShowEditModal(true);
  };

  const handleSaveRole = (userId: string, newRole: string) => {
    setTeamMembers(teamMembers.map(member =>
      member.id === userId ? { ...member, role: newRole } : member
    ));
    setShowEditModal(false);
  };

  const handleDeactivate = (userId: string) => {
    const user = teamMembers.find(m => m.id === userId);
    if (user) {
      setConfirmAction({ type: 'deactivate', userId, userName: user.name });
      setShowConfirmModal(true);
    }
  };

  const handleRemove = (userId: string) => {
    const user = teamMembers.find(m => m.id === userId);
    if (user) {
      setConfirmAction({ type: 'remove', userId, userName: user.name });
      setShowConfirmModal(true);
    }
  };

  const handleConfirmAction = () => {
    if (!confirmAction) return;

    if (confirmAction.type === 'deactivate') {
      setTeamMembers(teamMembers.map(member =>
        member.id === confirmAction.userId
          ? { ...member, status: member.status === 'Disabled' ? 'Active' : 'Disabled' }
          : member
      ));
    } else if (confirmAction.type === 'remove') {
      setTeamMembers(teamMembers.filter(member => member.id !== confirmAction.userId));
    }

    setShowConfirmModal(false);
    setConfirmAction(null);
  };

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === 'all' || member.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || member.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const metrics = {
    total: teamMembers.length,
    admins: teamMembers.filter(m => m.role === 'Admin').length,
    operators: teamMembers.filter(m => m.role === 'Operator').length,
    viewers: teamMembers.filter(m => m.role === 'Viewer').length
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-8">
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Team Management</h1>
            <p className="text-gray-600">Manage team members who can access your virtual try-on dashboard.</p>
          </div>
          <button
            onClick={() => setShowInviteModal(true)}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap flex items-center"
          >
            <i className="ri-user-add-line w-5 h-5 flex items-center justify-center mr-2"></i>
            Invite Team Member
          </button>
        </div>

        <TeamMetrics metrics={metrics} />

        <div className="bg-white rounded-2xl shadow-sm p-6 mt-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Team Members</h2>
            <div className="flex items-center gap-3">
              <div className="relative">
                <i className="ri-search-line w-5 h-5 flex items-center justify-center absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                <input
                  type="text"
                  placeholder="Search by name or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black w-64"
                />
              </div>
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="px-4 py-2 pr-8 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="all">All Roles</option>
                <option value="Admin">Admin</option>
                <option value="Operator">Operator</option>
                <option value="Viewer">Viewer</option>
              </select>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 pr-8 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="all">All Status</option>
                <option value="Active">Active</option>
                <option value="Pending Invitation">Pending</option>
                <option value="Disabled">Disabled</option>
              </select>
            </div>
          </div>

          {filteredMembers.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mx-auto mb-4">
                <i className="ri-team-line w-8 h-8 flex items-center justify-center text-gray-400"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No team members found</h3>
              <p className="text-gray-600 mb-6">
                {searchQuery || roleFilter !== 'all' || statusFilter !== 'all'
                  ? 'Try adjusting your search or filters.'
                  : 'Get started by inviting your first team member.'}
              </p>
              {!searchQuery && roleFilter === 'all' && statusFilter === 'all' && (
                <button
                  onClick={() => setShowInviteModal(true)}
                  className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap"
                >
                  Invite Team Member
                </button>
              )}
            </div>
          ) : (
            <TeamMembersTable
              members={filteredMembers}
              onEditRole={handleEditRole}
              onDeactivate={handleDeactivate}
              onRemove={handleRemove}
            />
          )}
        </div>
      </div>

      {showInviteModal && (
        <InviteUserModal
          onClose={() => setShowInviteModal(false)}
          onInvite={handleInviteUser}
        />
      )}

      {showEditModal && selectedUser && (
        <EditRoleModal
          user={selectedUser}
          onClose={() => setShowEditModal(false)}
          onSave={handleSaveRole}
        />
      )}

      {showConfirmModal && confirmAction && (
        <ConfirmationModal
          action={confirmAction}
          onClose={() => setShowConfirmModal(false)}
          onConfirm={handleConfirmAction}
        />
      )}
    </div>
  );
}