"use client";
import { useEffect, useState } from "react";
import ServerCard from "./components/ServerCard";

/*
  Welcome to the simplegamehosting coding assignment!

  if you got this far great job! 🎉
  Now it's your turn to shine! 🌟
  
  The mock data is fetched from the server and displayed on the page.

  Your task is to create a dynamic card component for each server in the list.
  - The card should display the server's name, game, players, status, version etc, bonus points for displaying any extra data from the json response.
  - please use tailwind to style your components, you can use the existing styles in this file as a reference.
  - You can also use any other libraries you like to help you build the UI.
  
  for extra info please read the README.md file in the root of the project.
*/

interface Server {
  id: number; // or string if IDs are sometimes strings
  name: string;
  game: string;
  players: string;
  status: string;
  version: string;
  type: string;
  region: string;
  mods: string[]; // Array of strings
}

export default function Home() {
  // Original code
  // const [serverData, setServerData] = useState(null);

  //Typesafe
  const [serverData, setServerData] = useState<Server[] | null>(null); // Type serverData as Server[] | null

  // you can update this fetching code if required but it's not necessary for the assignment.
  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch("/api/mock");
        const data = await response.json();

        setServerData(data);
      } catch (error) {
        console.error("Failed to fetch server data:", error);
      }
    };

    fetchServerData();
  }, []);

  // Use server side rendering? (server page with client components? )
  // Focus on the UI first
  // Make sure that everything is Typesafe
  // Add dark mode as well
  // Design it first

  console.log("Checking server data");
  console.log(serverData);
  return (
    <div>
      {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"> */}
      <div className="bg-background text-foreground dark:bg-background dark:text-foreground">
        {/* Test card */}
        <div className="text-black flex flex-col gap-8 row-start-2 items-center sm:items-start">
          {/* Displaying test cards */}
          {serverData &&
            serverData.map((server: any) => (
              <ServerCard
                key={server.id}
                name={server.name}
                game={server.game}
                version={server.version}
                status={server.status}
                players={server.players}
                mods={server.mods}
                region={server.region}
                type={server.type}
              />

              // <div
              //   key={server.id}
              //   className="bg-gray-200 p-4 rounded-lg w-full overflow-auto max-w-4xl text-sm"
              // >
              //   <h2 className="text-lg font-semibold">{server.name}</h2>
              //   <p>Game: {server.game}</p>
              //   <p>Players: {server.players}</p>
              //   <p>Status: {server.status}</p>
              //   <p>Version: {server.version}</p>
              //   <p>Type: {server.type}</p>
              // </div>
            ))}
        </div>

        {/* main can be deleted and replaced with your own cards */}
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1 className="text-2xl font-bold">Minecraft Server List</h1>
          <p className="text-gray-600">
            Below is the JSON data fetched from <code>/api/mock</code>. Use it
            to build the UI.
          </p>
          <pre className="bg-gray-200 text-gray-800 p-4 rounded-lg w-full overflow-auto max-w-4xl text-sm">
            {serverData
              ? JSON.stringify(serverData, null, 2)
              : "Loading data..."}
          </pre>
        </main>
        {/* main can be deleted and replaced with your own cards */}
      </div>
    </div>
  );
}
