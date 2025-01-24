// components/ThemeToggle.jsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiDesktopComputer } from "react-icons/hi";
import { HiOutlineSun } from "react-icons/hi";
import { HiOutlineMoon } from "react-icons/hi";

export default function ThemeToggle() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="bg-background text-foreground dark:bg-background dark:text-foreground">
      {/* Toggle */}
      {/* <button */}
      {/*   onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")} */}
      {/*   className="p-2" */}
      {/* > */}
      {/*   {currentTheme === "dark" ? "Light Mode" : "Dark Mode"} */}
      {/* </button> */}

      {/* Select icons */}
      <div className="flex gap-2">
        <button onClick={() => setTheme("system")}>
          <HiDesktopComputer />
        </button>
        <button onClick={() => setTheme("light")}>
          <HiOutlineSun />
        </button>
        <button onClick={() => setTheme("dark")}>
          <HiOutlineMoon />
        </button>
      </div>

      {/* Select dropwown */}
      {/* <select */}
      {/*   value={theme} */}
      {/*   onChange={(e) => setTheme(e.target.value)} */}
      {/*   className="p-2" */}
      {/* > */}
      {/*   <option value="system">System</option> */}
      {/*   <option value="light">Light</option> */}
      {/*   <option value="dark">Dark</option> */}
      {/* </select> */}
    </div>
  );
}
