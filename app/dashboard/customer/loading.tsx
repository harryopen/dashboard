export default function CustomersLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Title placeholder */}
      <div>
        <div className="h-8 w-44 bg-zinc-200 dark:bg-zinc-800 rounded-lg" />
        <div className="h-4 w-60 bg-zinc-200 dark:bg-zinc-800 rounded-lg mt-2" />
      </div>

      {/* Table grid placeholder */}
      <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <div className="h-12 bg-zinc-50 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800" />
        <div className="p-4 space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex gap-4 justify-between items-center py-2">
              <div className="h-4 w-1/4 bg-zinc-200 dark:bg-zinc-800 rounded" />
              <div className="h-4 w-1/4 bg-zinc-200 dark:bg-zinc-800 rounded" />
              <div className="h-4 w-1/6 bg-zinc-200 dark:bg-zinc-800 rounded" />
              <div className="h-6 w-16 bg-zinc-200 dark:bg-zinc-800 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
