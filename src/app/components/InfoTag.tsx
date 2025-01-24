import React from "react";
import { HiOutlineRefresh } from "react-icons/hi";
import { HiOutlineUsers } from "react-icons/hi2";
import { HiOutlineGlobeAmericas } from "react-icons/hi2";
// import { HiOutlineCheckCircle } from "react-icons/hi2";
// import { HiOutlineXCircle } from "react-icons/hi2";
import { HiCheckCircle } from "react-icons/hi2";
import { HiXCircle } from "react-icons/hi2";

interface Props {
  children?: React.ReactNode;
  type?: "status" | "players" | "version" | "location";
}

export default function InfoTag({ children, type }: Props) {
  let icon;
  let statusColorClass = "";

  switch (type) {
    case "version":
      icon = <HiOutlineRefresh />;
      break;
    case "players":
      icon = <HiOutlineUsers />;
      break;
    case "location":
      icon = <HiOutlineGlobeAmericas />;
      break;
    case "status":
      icon = children === "online" ? <HiCheckCircle /> : <HiXCircle />;
      statusColorClass =
        children === "online" ? "text-green-500" : "text-gray-500";
      break;
    default:
      icon = null;
  }

  return (
    <div className="text-sm flex gap-1 items-center">
      {icon && <span className={`${statusColorClass}`}>{icon}</span>}
      <p className={`font-medium `}>{children}</p>
    </div>
  );
}
