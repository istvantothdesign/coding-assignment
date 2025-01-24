import React from "react";
import { HiOutlineRefresh } from "react-icons/hi";
import { HiOutlineUsers } from "react-icons/hi2";
import { HiOutlineGlobeAmericas } from "react-icons/hi2";
import Tag from "./Tag";
import InfoTag from "./InfoTag";

export default function ServerCard() {
  return (
    // change width
    <div className="w-96">
      {/* Card */}
      <div className="bg-backgroundAccent text-foreground dark:bg-backgroundAccent dark:text-foreground rounded-xl border border-strokeMedium dark:border-strokeMedium overflow-hidden">
        {/* Header */}
        <div className="p-6 flex flex-col gap-12">
          {/* Game name and version */}
          <div className="flex justify-between ">
            <p className="font-bold">Minecraft</p>
            <div className="flex gap-1 items-center">
              <HiOutlineRefresh />
              <p className="font-medium">1.20.1</p>
            </div>
          </div>

          {/* Server name */}
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold">Survivale Paradise</h3>

            {/* Info */}
            <div className="flex gap-6">
              {/* Status */}
              {/* <div className="flex gap-1 items-center font-medium"> */}
              {/*   <div className="w-3 h-3 bg-green-500 border rounded-full"></div> */}
              {/*   Online */}
              {/* </div> */}

              <InfoTag type="status">Online</InfoTag>

              {/* Players */}
              <div className="flex gap-1 items-center font-medium">
                <HiOutlineUsers />
                10/20
              </div>

              {/* Region */}
              <div className="flex gap-1 items-center font-medium">
                <HiOutlineGlobeAmericas />
                North America
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-3 bg-background dark:bg-background p-6 border-t border-strokeLight dark:border-strokeLight">
          {/* Type */}
          <div className="flex gap-2 items-start">
            <p className="font-bold  py-1">Type:</p>
            <div className="flex  gap-1 flex-wrap">
              <Tag>Survival</Tag>
            </div>
          </div>

          {/* Mods */}
          <div className="flex gap-2 items-start">
            <p className="font-bold  py-1">Mods:</p>
            <div className="flex  gap-1 flex-wrap">
              <Tag mods>Essentials</Tag>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
