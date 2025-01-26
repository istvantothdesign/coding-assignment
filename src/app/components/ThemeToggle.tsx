// components/ThemeToggle.jsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ThemeIcon from "./ThemeIcon";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="grid grid-cols-3 items-center justify-center bg-background dark:bg-background  border border-strokeMedium  rounded-full">
      <ThemeIcon
        onClick={() => setTheme("system")}
        mode="system"
        active={theme === "system"}
      />
      <ThemeIcon
        onClick={() => setTheme("light")}
        mode="light"
        active={theme === "light"}
      />

      <ThemeIcon
        onClick={() => setTheme("dark")}
        mode="dark"
        active={theme === "dark"}
      />
    </div>
  );
}
