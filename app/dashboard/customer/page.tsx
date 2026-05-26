import Link from 'next/link';
import { prisma } from '../../lib/db'
import type { Customer } from '@prisma/client';

export default async function CustomersPage() {
  // Query all customers from SQLite
  
  const customers = await prisma.customer.findMany({
    orderBy: { name: 'asc' }
  });

  return (
    <div className="space-y-6">
         <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Customers</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-1">
            A list of all users in your database.
          </p>
        </div>
        <Link
          href="/dashboard/customer/create" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors text-sm"
        >
          Add Customer
        </Link>
      </div>
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight">Customers</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-1">
          A list of all users in your database.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800 text-left text-sm">
          <thead className="bg-zinc-50 dark:bg-zinc-900/50 text-zinc-500 dark:text-zinc-400 font-medium">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {customers.map((c: Customer) => (
              <tr key={c.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors">
                <td className="p-4 font-semibold">{c.name}</td>
                <td className="p-4 text-zinc-500 dark:text-zinc-400">{c.email}</td>
                <td className="p-4 text-zinc-500 dark:text-zinc-400">{c.role}</td>
                <td className="p-4">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                    c.status === 'Active' 
                      ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400' 
                      : 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400'
                  }`}>
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
