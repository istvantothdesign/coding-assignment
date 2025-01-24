import React from "react";

interface Props {
  children: React.ReactNode;
  color?:
    | "yellow"
    | "red"
    | "green"
    | "blue"
    | "orange"
    | "purple"
    | "pink"
    | "teal";
  mods?: boolean;
}

const colorClasses: { [key: string]: string } = {
  yellow: "bg-yellow-800",
  red: "bg-red-800",
  green: "bg-green-800",
  blue: "bg-blue-800",
  orange: "bg-orange-800",
  purple: "bg-purple-800",
  pink: "bg-pink-800",
  teal: "bg-teal-800",
};

export default function Tag({ children, color = "blue", mods }: Props) {
  return mods ? (
    <div
      className={`text-foreground bg-backgroundAccent dark:text-foreground dark:bg-backgroundAccent font-medium px-2 py-1 rounded-full text-center border border-strokeMedium dark:border-strokeMedium`}
    >
      {children}
    </div>
  ) : (
    <div
      className={`${
        colorClasses[color] || colorClasses["blue"]
      } text-white font-medium px-2 py-1 rounded-full text-center border border-strokeMedium dark:border-strokeMedium`}
    >
      {children}
    </div>
  );
}
