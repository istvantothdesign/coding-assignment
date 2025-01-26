import React from "react";
import ServerCard from "../components/ServerCard";
import Link from "next/link";
import { generateColorForTypes } from "../utils/colorMapping";
import { fetchServerData } from "../utils/fetchServerData";

// Type for color mapping. I added a unique colors for each server type (survival, creative, hardcore, etc.) to make them easier to distinguish.)
type Color =
  | "yellow"
  | "red"
  | "green"
  | "blue"
  | "orange"
  | "purple"
  | "pink"
  | "teal";

export default async function ServerList() {
  // Switched to server-side fetching
  const serverData = await fetchServerData();

  const colors: Color[] = [
    "yellow",
    "red",
    "green",
    "blue",
    "orange",
    "purple",
    "pink",
    "teal",
  ];

  // Generating unique colors for each server type
  const uniqueTypes = Array.from(
    new Set(serverData.map((server) => server.type)),
  );

  const typeColorMapping: Record<string, Color> = generateColorForTypes(
    uniqueTypes,
    colors,
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {serverData.map((server: any) => (
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
  );
}
