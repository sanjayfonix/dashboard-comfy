'use client';

import { useState } from 'react';

interface InviteUserModalProps {
  onClose: () => void;
  onInvite: (userData: { name: string; email: string; role: string }) => void;
}

interface Permissions {
  garments: { view: boolean; upload: boolean; edit: boolean; archive: boolean };
  tryOnJobs: { view: boolean; retry: boolean };
  credits: { viewBalance: boolean; purchase: boolean };
  analytics: { viewReports: boolean };
  teamManagement: { viewMembers: boolean; inviteMembers: boolean; editRoles: boolean; removeUsers: boolean };
  integration: { viewSettings: boolean; editSettings: boolean };
  settings: { viewSettings: boolean; editSettings: boolean };
}

function Checkbox({ id, checked, onChange, label, bold }: {
  id: string;
  checked: boolean;
  onChange: (val: boolean) => void;
  label: string;
  bold?: boolean;
}) {
  return (
    <div className="flex items-center gap-2.5 cursor-pointer select-none" onClick={() => onChange(!checked)}>
      <div className={`w-4 h-4 flex-shrink-0 rounded border transition-all duration-150 flex items-center justify-center
        ${checked
          ? 'bg-gray-900 border-gray-900'
          : 'bg-white border-gray-300 hover:border-gray-400'
        }`}>
        {checked && (
          <i className="ri-check-line text-white" style={{ fontSize: '10px', lineHeight: 1 }}></i>
        )}
      </div>
      <label htmlFor={id} className={`text-sm cursor-pointer ${bold ? 'font-semibold text-gray-900 uppercase tracking-wide text-xs' : 'text-gray-700'}`}>
        {label}
      </label>
    </div>
  );
}

export default function InviteUserModal({ onClose, onInvite }: InviteUserModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Operator');
  const [customRoleName, setCustomRoleName] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; customRole?: string }>({});
  const [permissions, setPermissions] = useState<Permissions>({
    garments: { view: true, upload: true, edit: true, archive: false },
    tryOnJobs: { view: true, retry: true },
    credits: { viewBalance: false, purchase: false },
    analytics: { viewReports: true },
    teamManagement: { viewMembers: false, inviteMembers: false, editRoles: false, removeUsers: false },
    integration: { viewSettings: false, editSettings: false },
    settings: { viewSettings: false, editSettings: false }
  });

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; customRole?: string } = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Invalid email format';
    if (role === 'Create New Role' && !customRoleName.trim()) newErrors.customRole = 'Custom role name is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRoleChange = (newRole: string) => {
    setRole(newRole);
    if (newRole === 'Operator') {
      setPermissions({
        garments: { view: true, upload: true, edit: true, archive: false },
        tryOnJobs: { view: true, retry: true },
        credits: { viewBalance: false, purchase: false },
        analytics: { viewReports: true },
        teamManagement: { viewMembers: false, inviteMembers: false, editRoles: false, removeUsers: false },
        integration: { viewSettings: false, editSettings: false },
        settings: { viewSettings: false, editSettings: false }
      });
    } else if (newRole === 'Viewer') {
      setPermissions({
        garments: { view: true, upload: false, edit: false, archive: false },
        tryOnJobs: { view: true, retry: false },
        credits: { viewBalance: false, purchase: false },
        analytics: { viewReports: true },
        teamManagement: { viewMembers: false, inviteMembers: false, editRoles: false, removeUsers: false },
        integration: { viewSettings: false, editSettings: false },
        settings: { viewSettings: false, editSettings: false }
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const finalRole = role === 'Create New Role' ? customRoleName : role;
      onInvite({ name, email, role: finalRole });
    }
  };

  const getRoleDescription = () => {
    if (role === 'Operator') return 'Can manage garments and monitor try-on activity.';
    if (role === 'Viewer') return 'Read-only access to view garments, jobs, and analytics.';
    return '';
  };

  const updatePermissionGroup = (group: keyof Permissions, key: string, value: boolean) => {
    setPermissions(prev => ({ ...prev, [group]: { ...prev[group], [key]: value } }));
  };

  const setGroupAll = (group: keyof Permissions, checked: boolean) => {
    setPermissions(prev => {
      const updated = { ...prev[group] };
      Object.keys(updated).forEach(k => { (updated as Record<string, boolean>)[k] = checked; });
      return { ...prev, [group]: updated };
    });
  };

  const allChecked = (group: keyof Permissions) => Object.values(permissions[group]).every(v => v);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-[520px] max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Invite Team Member</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
              <i className="ri-close-line w-5 h-5 flex items-center justify-center text-gray-600"></i>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter full name"
                className={`w-full h-10 px-4 py-2 border ${errors.name ? 'border-red-300' : 'border-[#E5E7EB]'} rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black`}
              />
              {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className={`w-full h-10 px-4 py-2 border ${errors.email ? 'border-red-300' : 'border-[#E5E7EB]'} rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black`}
              />
              {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Role</label>
              <select
                value={role}
                onChange={(e) => handleRoleChange(e.target.value)}
                className="w-full h-10 px-4 py-2 pr-8 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
              >
                <option value="Operator">Operator</option>
                <option value="Viewer">Viewer</option>
                <option value="Create New Role">Create New Role</option>
              </select>
              {role !== 'Create New Role' && (
                <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-600">{getRoleDescription()}</p>
                </div>
              )}
            </div>

            {role === 'Create New Role' && (
              <div className="space-y-4 pt-2">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Role Name</label>
                  <input
                    type="text"
                    value={customRoleName}
                    onChange={(e) => setCustomRoleName(e.target.value)}
                    placeholder="Enter custom role name"
                    className={`w-full h-10 px-4 py-2 border ${errors.customRole ? 'border-red-300' : 'border-[#E5E7EB]'} rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black`}
                  />
                  {errors.customRole && <p className="text-xs text-red-600 mt-1">{errors.customRole}</p>}
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Permissions</h3>
                  <div className="space-y-3">

                    {/* GARMENTS */}
                    <div className="border border-gray-200 rounded-xl p-4">
                      <div className="mb-3">
                        <Checkbox id="garments-all" checked={allChecked('garments')} onChange={(v) => setGroupAll('garments', v)} label="Garments" bold />
                      </div>
                      <div className="ml-6 space-y-2.5">
                        <Checkbox id="garments-view" checked={permissions.garments.view} onChange={(v) => updatePermissionGroup('garments', 'view', v)} label="View Garments" />
                        <Checkbox id="garments-upload" checked={permissions.garments.upload} onChange={(v) => updatePermissionGroup('garments', 'upload', v)} label="Upload Garments" />
                        <Checkbox id="garments-edit" checked={permissions.garments.edit} onChange={(v) => updatePermissionGroup('garments', 'edit', v)} label="Edit Garments" />
                        <Checkbox id="garments-archive" checked={permissions.garments.archive} onChange={(v) => updatePermissionGroup('garments', 'archive', v)} label="Archive Garments" />
                      </div>
                    </div>

                    {/* TRY-ON JOBS */}
                    <div className="border border-gray-200 rounded-xl p-4">
                      <div className="mb-3">
                        <Checkbox id="tryon-all" checked={allChecked('tryOnJobs')} onChange={(v) => setGroupAll('tryOnJobs', v)} label="Try-On Jobs" bold />
                      </div>
                      <div className="ml-6 space-y-2.5">
                        <Checkbox id="tryon-view" checked={permissions.tryOnJobs.view} onChange={(v) => updatePermissionGroup('tryOnJobs', 'view', v)} label="View Try-On Jobs" />
                        <Checkbox id="tryon-retry" checked={permissions.tryOnJobs.retry} onChange={(v) => updatePermissionGroup('tryOnJobs', 'retry', v)} label="Retry Failed Jobs" />
                      </div>
                    </div>

                    {/* CREDITS */}
                    <div className="border border-gray-200 rounded-xl p-4">
                      <div className="mb-3">
                        <Checkbox id="credits-all" checked={allChecked('credits')} onChange={(v) => setGroupAll('credits', v)} label="Credits" bold />
                      </div>
                      <div className="ml-6 space-y-2.5">
                        <Checkbox id="credits-view" checked={permissions.credits.viewBalance} onChange={(v) => updatePermissionGroup('credits', 'viewBalance', v)} label="View Credit Balance" />
                        <Checkbox id="credits-purchase" checked={permissions.credits.purchase} onChange={(v) => updatePermissionGroup('credits', 'purchase', v)} label="Purchase Credits" />
                      </div>
                    </div>

                    {/* ANALYTICS */}
                    <div className="border border-gray-200 rounded-xl p-4">
                      <div className="mb-3">
                        <Checkbox id="analytics-all" checked={permissions.analytics.viewReports} onChange={(v) => updatePermissionGroup('analytics', 'viewReports', v)} label="Analytics" bold />
                      </div>
                      <div className="ml-6 space-y-2.5">
                        <Checkbox id="analytics-view" checked={permissions.analytics.viewReports} onChange={(v) => updatePermissionGroup('analytics', 'viewReports', v)} label="View Analytics Reports" />
                      </div>
                    </div>

                    {/* TEAM MANAGEMENT */}
                    <div className="border border-gray-200 rounded-xl p-4">
                      <div className="mb-3">
                        <Checkbox id="team-all" checked={allChecked('teamManagement')} onChange={(v) => setGroupAll('teamManagement', v)} label="Team Management" bold />
                      </div>
                      <div className="ml-6 space-y-2.5">
                        <Checkbox id="team-view" checked={permissions.teamManagement.viewMembers} onChange={(v) => updatePermissionGroup('teamManagement', 'viewMembers', v)} label="View Team Members" />
                        <Checkbox id="team-invite" checked={permissions.teamManagement.inviteMembers} onChange={(v) => updatePermissionGroup('teamManagement', 'inviteMembers', v)} label="Invite Team Members" />
                        <Checkbox id="team-edit" checked={permissions.teamManagement.editRoles} onChange={(v) => updatePermissionGroup('teamManagement', 'editRoles', v)} label="Edit User Roles" />
                        <Checkbox id="team-remove" checked={permissions.teamManagement.removeUsers} onChange={(v) => updatePermissionGroup('teamManagement', 'removeUsers', v)} label="Remove Users" />
                      </div>
                    </div>

                    {/* INTEGRATION */}
                    <div className="border border-gray-200 rounded-xl p-4">
                      <div className="mb-3">
                        <Checkbox id="integration-all" checked={allChecked('integration')} onChange={(v) => setGroupAll('integration', v)} label="Integration" bold />
                      </div>
                      <div className="ml-6 space-y-2.5">
                        <Checkbox id="integration-view" checked={permissions.integration.viewSettings} onChange={(v) => updatePermissionGroup('integration', 'viewSettings', v)} label="View Integration Settings" />
                        <Checkbox id="integration-edit" checked={permissions.integration.editSettings} onChange={(v) => updatePermissionGroup('integration', 'editSettings', v)} label="Edit Integration Settings" />
                      </div>
                    </div>

                    {/* SETTINGS */}
                    <div className="border border-gray-200 rounded-xl p-4">
                      <div className="mb-3">
                        <Checkbox id="settings-all" checked={allChecked('settings')} onChange={(v) => setGroupAll('settings', v)} label="Settings" bold />
                      </div>
                      <div className="ml-6 space-y-2.5">
                        <Checkbox id="settings-view" checked={permissions.settings.viewSettings} onChange={(v) => updatePermissionGroup('settings', 'viewSettings', v)} label="View Account Settings" />
                        <Checkbox id="settings-edit" checked={permissions.settings.editSettings} onChange={(v) => updatePermissionGroup('settings', 'editSettings', v)} label="Edit Account Settings" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 mt-6">
            <button
              type="submit"
              className="flex-1 h-10 bg-black text-white px-6 rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap text-sm font-medium cursor-pointer"
            >
              Send Invitation
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 h-10 bg-gray-100 text-gray-900 px-6 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap text-sm font-medium cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
