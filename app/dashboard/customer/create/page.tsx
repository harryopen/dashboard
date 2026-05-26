import { createCustomer } from '../../../lib/action';

export default function CreateCustomerPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight">Add Customer</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-1">
          Create a new user account profile in the database.
        </p>
      </div>

      {/* 
        Note: The form action is linked directly to our Server Action function!
        Next.js will handle the submission behind the scenes securely.
      */}
      <form 
        action={createCustomer} 
        className="space-y-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6"
      >
        <div>
          <label className="block text-sm font-semibold mb-2">Full Name</label>
          <input 
            type="text" 
            name="name"
            required
            placeholder="John Doe"
            className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Email Address</label>
          <input 
            type="email" 
            name="email"
            required
            placeholder="john@example.com"
            className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Role</label>
            <select 
              name="role"
              className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option value="Member">Member</option>
              <option value="Admin">Admin</option>
              <option value="Owner">Owner</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Status</label>
            <select 
              name="status"
              className="w-full px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <a 
            href="/dashboard/customer" 
            className="px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors font-medium"
          >
            Cancel
          </a>
          <button 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors text-sm"
          >
            Save Customer
          </button>
        </div>
      </form>
    </div>
  );
}
