'use client'; // <-- This is a Client Component because it uses usePathname()

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
    const pathname = usePathname(); // Get the current active URL path

    const links = [
        { name: 'Overview', href: '/dashboard' },
        { name: 'Customers', href: '/dashboard/customer' },
        { name: 'Settings', href: '/dashboard/settings' }, // We can add this later!
    ];

    return (
        <nav className="flex flex-col gap-2">
            {links.map((link) => {
                // Check if the current URL matches the link's href
                const isActive = pathname === link.href;

                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive
                                ? 'bg-blue-600 text-white hover:bg-blue-700' // Active link styles
                                : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100' // Inactive link styles
                            }`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
}
