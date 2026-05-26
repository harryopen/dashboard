import { prisma } from '../lib/db';

export default async function OverviewPage() {
   

    // 1. Fetch counts and aggregates
    const customerCount = await prisma.customer.count();
    const invoiceCount = await prisma.invoice.count();

    const invoices = await prisma.invoice.findMany();
    const totalRevenue = invoices
        .filter(inv => inv.status === 'Paid')
        .reduce((sum, inv) => sum + inv.amount, 0);

    const activeNow = await prisma.customer.count({
        where: { status: 'Active' }
    });

    // 2. Fetch monthly revenue data for the chart
    const revenueData = await prisma.revenue.findMany();

    // 3. Fetch latest 5 invoices including the customer relationship
    const recentInvoices = await prisma.invoice.findMany({
        take: 5,
        orderBy: { date: 'desc' },
        include: {
            customer: true
        }
    });

    const stats = [
        { title: 'Total Revenue', value: `$${totalRevenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, change: 'Live from DB', gradient: 'from-blue-600 to-indigo-600' },
        { title: 'Invoices', value: `${invoiceCount}`, change: 'Total invoices stored', gradient: 'from-purple-600 to-pink-600' },
        { title: 'Total Customers', value: `${customerCount}`, change: 'Registered accounts', gradient: 'from-amber-500 to-orange-600' },
        { title: 'Active Now', value: `${activeNow}`, change: 'Active account status', gradient: 'from-emerald-500 to-teal-600' },
    ];

    // Helper to find the maximum revenue amount to scale our chart bars
    const maxRevenue = Math.max(...revenueData.map((r) => r.amount));

    return (
        <div className="space-y-8">
            {/* Title */}
            <div>
                <h1 className="text-3xl font-extrabold tracking-tight">Overview</h1>
                <p className="text-zinc-500 dark:text-zinc-400 mt-1">
                    Welcome back, here is what is happening today (Live Data).
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((s, idx) => (
                    <div
                        key={idx}
                        className="relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${s.gradient}`} />
                        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{s.title}</p>
                        <p className="text-3xl font-bold tracking-tight mt-2">{s.value}</p>
                        <p className="text-xs text-zinc-400 mt-1">{s.change}</p>
                    </div>
                ))}
            </div>

            {/* Main Content Grid (Two-Column Layout) */}
            <div className="grid gap-6 md:grid-cols-12">

                {/* Column 1: Monthly Revenue Bar Chart (Spans 7 columns on desktop) */}
                <div className="md:col-span-7 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6">
                    <h2 className="text-lg font-bold tracking-tight mb-6">Recent Revenue</h2>

                    <div className="flex items-end gap-2 h-64 px-2 ">
                        {revenueData.map((data) => {
                            // Calculate the percentage height relative to the highest revenue month
                            const barHeight = maxRevenue > 0 ? (data.amount / maxRevenue) * 100 : 0;

                            return (
                                <div key={data.id} className="flex-1 flex flex-col items-center justify-end h-full gap-2 group">

                                    {/* Bar container with a fixed height area so percentages resolve correctly */}
                                    <div className="w-full h-52 flex items-end">
                                        <div
                                            className="relative w-full bg-blue-500/20 dark:bg-blue-500/10 hover:bg-blue-500 dark:hover:bg-blue-600 rounded-t-md transition-all duration-300"
                                            style={{ height: `${barHeight}%` }}
                                        >
                                            {/* Tooltip on hover */}
                                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-zinc-900 text-white text-[10px] px-2 py-1 rounded shadow-lg pointer-events-none whitespace-nowrap z-10">
                                                ${data.amount}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Label (Month name) */}
                                    <span className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase">
                                        {data.month}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                </div>

                {/* Column 2: Recent Invoices (Spans 5 columns on desktop) */}
                <div className="md:col-span-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 flex flex-col">
                    <h2 className="text-lg font-bold tracking-tight mb-2">Latest Invoices</h2>
                    <p className="text-xs text-zinc-400 mb-6">Showing the 5 most recent transactions.</p>

                    <div className="flex-grow space-y-4">
                        {recentInvoices.map((invoice) => (
                            <div key={invoice.id} className="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800 last:border-0 last:pb-0">
                                <div className="flex items-center gap-3">
                                    {/* Placeholder Avatar */}
                                    <div className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-bold text-xs text-zinc-500 dark:text-zinc-400">
                                        {invoice.customer.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold">{invoice.customer.name}</p>
                                        <p className="text-xs text-zinc-400">{invoice.customer.email}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-bold">${invoice.amount.toFixed(2)}</p>
                                    <p className="text-[10px] text-zinc-400">{invoice.status}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
