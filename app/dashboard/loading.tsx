export default function DashboardLoading() {
    return (
        <div className="space-y-8 animate-pulse">
            {/* Title Placeholder */}
            <div>
                <div className="h-8 w-48 bg-zinc-200 dark:bg-zinc-800 rounded-lg" />
                <div className="h-4 w-64 bg-zinc-200 dark:bg-zinc-800 rounded-lg mt-2" />
            </div>

            {/* Stats Cards Placeholders */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[1, 2, 3, 4].map((i) => (
                    <div
                        key={i}
                        className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 h-28 flex flex-col justify-between"
                    >
                        <div className="h-4 w-24 bg-zinc-200 dark:bg-zinc-800 rounded" />
                        <div className="h-8 w-32 bg-zinc-200 dark:bg-zinc-800 rounded-lg" />
                        <div className="h-3 w-40 bg-zinc-200 dark:bg-zinc-800 rounded" />
                    </div>
                ))}
            </div>

            {/* Main Content Placeholders (Two-Column Layout) */}
            <div className="grid gap-6 md:grid-cols-12">
                {/* Left Column (Chart Skeleton) */}
                <div className="md:col-span-7 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 h-[360px] flex flex-col justify-between">
                    <div className="h-6 w-36 bg-zinc-200 dark:bg-zinc-800 rounded" />
                    <div className="flex items-end gap-2 h-52 mt-6">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                            <div key={i} className="flex-1 bg-zinc-100 dark:bg-zinc-800 rounded-t-md" style={{ height: `${Math.random() * 80 + 20}%` }} />
                        ))}
                    </div>
                </div>

                {/* Right Column (Invoices List Skeleton) */}
                <div className="md:col-span-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 h-[360px] flex flex-col">
                    <div className="h-6 w-32 bg-zinc-200 dark:bg-zinc-800 rounded" />
                    <div className="h-4 w-48 bg-zinc-200 dark:bg-zinc-800 rounded mt-2 mb-6" />
                    <div className="space-y-4 flex-grow">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800 last:border-0">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                                    <div className="space-y-2">
                                        <div className="h-4 w-28 bg-zinc-200 dark:bg-zinc-800 rounded" />
                                        <div className="h-3 w-36 bg-zinc-200 dark:bg-zinc-800 rounded" />
                                    </div>
                                </div>
                                <div className="h-5 w-12 bg-zinc-200 dark:bg-zinc-800 rounded" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
