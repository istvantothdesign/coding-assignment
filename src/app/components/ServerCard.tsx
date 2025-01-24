import React from "react";
import Tag from "./Tag";
import InfoTag from "./InfoTag";
import { DiVim } from "react-icons/di";

interface Props {
  name: string;
  game: string;
  version: string;
  status: string;
  players: string;
  mods: string[];
  region: string;
  type: string;
  typeColor?:
    | "yellow"
    | "red"
    | "green"
    | "blue"
    | "orange"
    | "purple"
    | "pink"
    | "teal";
}

export default function ServerCard({
  name,
  game,
  version,
  status,
  players,
  mods,
  region,
  type,
  typeColor,
}: Props) {
  return (
    // change width
    <div className="w-96">
      {/* Card */}
      <div className="bg-backgroundAccent text-foreground dark:bg-backgroundAccent dark:text-foreground rounded-xl border border-strokeMedium dark:border-strokeMedium overflow-hidden">
        {/* Header */}
        <div className="p-6 flex flex-col gap-12">
          {/* Game name and version */}
          <div className="flex justify-between ">
            <p className="font-bold">{game}</p>
            <InfoTag type="version">{version}</InfoTag>
          </div>

          {/* Server name */}
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold">{name}</h3>

            {/* Info */}
            <div className="flex gap-6">
              {/* Status */}
              <InfoTag type="status">{status}</InfoTag>

              {/* Players */}
              <InfoTag type="players">{players}</InfoTag>

              {/* Region */}
              <InfoTag type="location">{region}</InfoTag>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-3 bg-background dark:bg-background p-6 border-t border-strokeLight dark:border-strokeLight">
          {/* Type */}
          <div className="flex gap-2 items-start">
            <p className="font-bold  py-1">Type:</p>
            <div className="flex  gap-1 flex-wrap">
              <Tag color={typeColor}>{type}</Tag>
            </div>
          </div>

          {/* Mods */}
          <div className="flex gap-2 items-start">
            <p className="font-bold  py-1">Mods:</p>
            <div className="flex  gap-1 flex-wrap">
              {mods
                ? mods.map((mod, index) => (
                    <div key={index}>
                      <Tag mods>{mod}</Tag>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
