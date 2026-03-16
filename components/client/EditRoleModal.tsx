'use client';

import { useState } from 'react';

interface EditRoleModalProps {
  user: {
    id: string;
    name: string;
    role: string;
  };
  onClose: () => void;
  onSave: (userId: string, newRole: string) => void;
}

export default function EditRoleModal({ user, onClose, onSave }: EditRoleModalProps) {
  const [role, setRole] = useState(user.role);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(user.id, role);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Edit User Role</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <i className="ri-close-line w-5 h-5 flex items-center justify-center text-gray-600"></i>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                User Name
              </label>
              <input
                type="text"
                value={user.name}
                disabled
                className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Role
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-3 pr-8 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="Admin">Admin</option>
                <option value="Operator">Operator</option>
                <option value="Viewer">Viewer</option>
              </select>
              <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-600">
                  {role === 'Admin' && 'Full access to all features including team management and settings.'}
                  {role === 'Operator' && 'Can manage garments and view try-on jobs, but cannot modify team or settings.'}
                  {role === 'Viewer' && 'Read-only access to view garments, jobs, and analytics.'}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-6">
            <button
              type="submit"
              className="flex-1 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-100 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}