"use client";
import { useEffect, useState } from "react";
import ServerCard from "./components/ServerCard";
import Link from "next/link";

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
  // Make sure that everything is Typesafe
  // Organise functions
  // Remove extra item from api(colour testing)??
  // Make tags row a component?
  // Add motion
  // Add hover state
  // Make it responsive

  // Colors available for assignment
  const colors: (
    | "yellow"
    | "red"
    | "green"
    | "blue"
    | "orange"
    | "purple"
    | "pink"
    | "teal"
  )[] = ["yellow", "red", "green", "blue", "orange", "purple", "pink", "teal"];

  // Function to generate a color mapping for types dynamically
  const generateColorForTypes = (
    types: string[],
  ): {
    [key: string]:
      | "yellow"
      | "red"
      | "green"
      | "blue"
      | "orange"
      | "purple"
      | "pink"
      | "teal";
  } => {
    let colorMapping: {
      [key: string]:
        | "yellow"
        | "red"
        | "green"
        | "blue"
        | "orange"
        | "purple"
        | "pink"
        | "teal";
    } = {};
    let usedColors: Set<string> = new Set();

    types.forEach((type, index) => {
      // If the type doesn't have a color yet, assign one
      if (!colorMapping[type]) {
        const availableColors = colors.filter(
          (color) => !usedColors.has(color),
        );
        if (availableColors.length > 0) {
          const color = availableColors[0];
          colorMapping[type] = color;
          usedColors.add(color);
        } else {
          // If no colors are available, recycle them
          const recycledColor = colors[index % colors.length];
          colorMapping[type] = recycledColor;
          usedColors.add(recycledColor);
        }
      }
    });

    return colorMapping;
  };

  // Get the unique types from the server data
  const uniqueTypes = serverData
    ? Array.from(new Set(serverData.map((server) => server.type)))
    : [];

  // Generate the color mapping for each type
  const typeColorMapping = generateColorForTypes(uniqueTypes);

  console.log("Checking server data");
  console.log(serverData);
  return (
    <>
      <section className="p-2 sm:p-4 md:p-6 lg:p-8 w-full flex flex-col items-center">
        <main className="w-full max-w-7xl">
          <div className="bg-background text-foreground dark:bg-background dark:text-foreground flex flex-col gap-12">
            <h1 className="font-bold text-5xl ">List of servers</h1>
            {/* Displaying card grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 w-full">
              {/* Displaying test cards */}
              {serverData &&
                serverData.map((server: any) => (
                  <Link
                    className="w-full h-full"
                    key={server.id}
                    href={`/server/${server.id}`}
                  >
                    <ServerCard
                      name={server.name}
                      game={server.game}
                      version={server.version}
                      status={server.status}
                      players={server.players}
                      mods={server.mods}
                      region={server.region}
                      type={server.type}
                      typeColor={typeColorMapping[server.type]}
                    />
                  </Link>
                ))}
            </div>
          </div>
        </main>
      </section>

      {/* main can be deleted and replaced with your own cards */}
      {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"> */}
      {/*   <h1 className="text-2xl font-bold">Minecraft Server List</h1> */}
      {/*   <p className="text-gray-600"> */}
      {/*     Below is the JSON data fetched from <code>/api/mock</code>. Use it */}
      {/*     to build the UI. */}
      {/*   </p> */}
      {/*   <pre className="bg-gray-200 text-gray-800 p-4 rounded-lg w-full overflow-auto max-w-4xl text-sm"> */}
      {/*     {serverData */}
      {/*       ? JSON.stringify(serverData, null, 2) */}
      {/*       : "Loading data..."} */}
      {/*   </pre> */}
      {/* </main> */}
      {/* main can be deleted and replaced with your own cards */}
    </>
  );
}
