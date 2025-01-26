export default function ServerCardSkeleton() {
  return (
    <div className="w-full h-full bg-backgroundAccent text-foreground dark:bg-backgroundAccent dark:text-foreground rounded-xl border border-strokeMedium dark:border-strokeMedium dark:hover:border-foreground hover:border-foreground overflow-hidden transition shadow hover:shadow-xl dark:shadow-xl dark:hover:shadow-2xl animate-pulse">
      {/* Header */}
      <div className="p-6 flex flex-col gap-12">
        {/* Game name and version */}
        <div className="flex justify-between flex-wrap">
          <div className="h-6 bg-gray-400 dark:bg-gray-600 w-32 rounded"></div>
          <div className="h-6 bg-gray-400 dark:bg-gray-600 w-20 rounded"></div>
        </div>

        {/* Server name and info */}
        <div className="flex flex-col gap-2">
          {/* Server name */}
          <div className="h-8 bg-gray-400 dark:bg-gray-600 w-48 rounded"></div>

          {/* Info */}
          <div className="flex gap-6 flex-wrap">
            {/* Status */}
            <div className="h-6 bg-gray-400 dark:bg-gray-600 w-20 rounded"></div>

            {/* Players */}
            <div className="h-6 bg-gray-400 dark:bg-gray-600 w-20 rounded"></div>

            {/* Region */}
            <div className="h-6 bg-gray-400 dark:bg-gray-600 w-20 rounded"></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-sm h-full flex flex-col gap-3 bg-background dark:bg-background p-6 border-t border-strokeLight dark:border-strokeLight">
        {/* Type */}
        <div className="flex gap-2 items-start">
          <div className="h-6 bg-gray-400 dark:bg-gray-600 w-12 rounded"></div>
          <div className="h-6 bg-gray-400 dark:bg-gray-600 w-24 rounded"></div>
        </div>

        {/* Mods */}
        <div className="flex gap-2 items-start">
          <div className="h-6 bg-gray-400 dark:bg-gray-600 w-12 rounded"></div>
          <div className="flex gap-2">
            <div className="h-6 bg-gray-400 dark:bg-gray-600 w-16 rounded"></div>
            <div className="h-6 bg-gray-400 dark:bg-gray-600 w-16 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
