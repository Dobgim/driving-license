import Link from "next/link";
import { Plus, MoreVertical, Edit, Trash2 } from "lucide-react";

export default function AdminProofsList() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-primary">Manage Proofs</h1>
          <p className="text-dark/70 mt-1">Add, edit, or remove success stories.</p>
        </div>
        <Link href="/admin/proofs/create" className="btn-primary flex items-center shadow-lg hover:shadow-xl">
          <Plus className="w-5 h-5 mr-2" />
          Add New Proof
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex gap-4">
          <input 
            type="text" 
            placeholder="Search proofs..." 
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary w-full max-w-sm"
          />
          <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary">
            <option value="all">All Types</option>
            <option value="theory">Theory Test</option>
            <option value="practical">Practical Test</option>
            <option value="full">Full Licence</option>
          </select>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-dark/70 font-medium border-b border-gray-200">
              <tr>
                <th className="px-6 py-4">Media</th>
                <th className="px-6 py-4">Type & Region</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[1, 2, 3, 4].map((i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="w-16 h-12 bg-gray-200 rounded flex items-center justify-center text-xs text-dark/50">
                      IMG
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-dark">UK Theory Test</div>
                    <div className="text-xs text-dark/60">London</div>
                  </td>
                  <td className="px-6 py-4 text-dark/80">May {10+i}, 2026</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Published
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button className="p-2 text-dark/50 hover:text-secondary hover:bg-secondary/10 rounded transition-colors inline-flex">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-dark/50 hover:text-red-600 hover:bg-red-50 rounded transition-colors inline-flex">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-dark/60">
          <span>Showing 1 to 4 of 45 entries</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50">Prev</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 bg-gray-100 font-medium">1</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">2</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
