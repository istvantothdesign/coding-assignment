import { Suspense } from "react";
import ServerList from "./components/ServerList";
import ServerCardSkeleton from "./components/ServerCardSkeleton";

// The main things I've changed on this page regarding functionality is that:
// -I switched to server-side fetching for faster load times and better SEO (removed "use client")
// -Added suspense for the loading state

export default function Home() {
  return (
    <div className="p-2 sm:p-4 md:p-6 lg:p-8 w-full flex flex-col items-center">
      <main className="w-full max-w-7xl">
        <div className="bg-background text-foreground dark:bg-background dark:text-foreground flex flex-col gap-12">
          <h1 className="font-bold text-5xl text-center md:text-left">
            List of servers
          </h1>
          <Suspense fallback={<LoadingSkeleton />}>
            <ServerList />
          </Suspense>
        </div>
      </main>
    </div>
  );
}

// This is for the loading state
const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      <ServerCardSkeleton />
      <ServerCardSkeleton />
      <ServerCardSkeleton />
      <ServerCardSkeleton />
      <ServerCardSkeleton />
      <ServerCardSkeleton />
    </div>
  );
};
