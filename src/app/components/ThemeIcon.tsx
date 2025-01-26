import React from "react";
import { HiDesktopComputer } from "react-icons/hi";
import { HiOutlineSun } from "react-icons/hi";
import { HiOutlineMoon } from "react-icons/hi";

interface Props {
  mode: "system" | "dark" | "light";
  active?: boolean;
  onClick?: () => void;
}

export default function ThemeIcon({ mode, active, onClick }: Props) {
  let icon;

  switch (mode) {
    case "system":
      icon = <HiDesktopComputer />;
      break;
    case "dark":
      icon = <HiOutlineMoon />;
      break;
    case "light":
      icon = <HiOutlineSun />;
      break;
    default:
      icon = null;
  }
  return (
    <button
      onClick={onClick}
      className={`border rounded-full h-full py-1 px-1 transition-opacity duration-300 ${
        active
          ? "border border-foreground bg-backgroundAccent text-foreground dark:bg-backgroundAccent dark:border-foreground dark:text-foreground"
          : "border-strokeLight bg-background text-foreground opacity-50 hover:opacity-100 dark:border-strokeLight dark:bg-background"
      }`}
    >
      {icon}
    </button>
  );
}
