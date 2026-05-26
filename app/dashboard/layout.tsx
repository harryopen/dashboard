import NavLinks from './nav-links';
import { auth0 } from '../lib/auth0';

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth0.getSession();
    const user = session?.user;
    const userIdentifier = user?.name || user?.email || 'Guest User';

    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">

            {/* Sidebar Navigation */}
            <aside className="w-full flex-none md:w-64 bg-zinc-900 text-zinc-100 p-6 flex flex-col justify-between">
                <div>
                    <h2 className="text-xl font-bold mb-8 tracking-tight text-white">
                        Dashboard
                    </h2>
                    <NavLinks />
                </div>

                {/* Footer/User Info inside Sidebar */}
                <div className="border-t border-zinc-800 pt-4 flex flex-col gap-3">
                    <a
                        href="/auth/logout"
                        className="w-full text-left text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
                    >
                        Sign Out
                    </a>
                    <div className="text-[10px] text-zinc-500 truncate" title={userIdentifier}>
                        Logged in as {userIdentifier}
                    </div>
                </div>
            </aside>

            {/* Main Page Content Area */}
            <main className="flex-grow p-6 md:p-12 md:overflow-y-auto">
                {children}
            </main>

        </div>
    );
}

