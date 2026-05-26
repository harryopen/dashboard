'use server'; // <-- Tells Next.js to run this code only on the server

import { prisma } from './db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createCustomer(formData: FormData) {
    // 1. Extract values from the form inputs
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const role = formData.get('role') as string;
    const status = formData.get('status') as string;

    // 2. Perform basic validation
    if (!name || !email) {
        throw new Error('Name and email are required');
    }

    // 3. Write to the database
    await prisma.customer.create({
        data: {
            name,
            email,
            role: role || 'Member',
            status: status || 'Active',
        },
    });

    // 4. Clear the cache for the Customers page so it fetches the new list
    revalidatePath('/dashboard/customer');

    // 5. Redirect the user back to the Customers list
    redirect('/dashboard/customer');
}
