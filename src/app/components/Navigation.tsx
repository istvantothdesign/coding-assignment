import React from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const linkClasses =
    "decoration-foreground  underline-offset-4 opacity-50 transition hover:opacity-100 hover:underline ";
  return (
    <nav className="p-2 sm:p-4 md:p-6 lg:p-8 w-full flex flec-col justify-center items-center">
      <div className="max-w-7xl w-full flex flex-col gap-6 md:flex-row items-center justify-between">
        {/* Contact */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
          {/* Name */}
          <h1 className="text-xl font-bold">Istvan Toth</h1>

          {/* Links */}
          <ul className="flex gap-4 flex-wrap justify-center">
            <li>
              <Link
                className={linkClasses}
                href={"https://www.istvan-toth.com/"}
                target="_blank"
              >
                istvan-toth.com
              </Link>
            </li>

            <li>
              <Link
                className={linkClasses}
                href={"mailto:istvantothdesign@gmail.com"}
                target="_blank"
              >
                istvantothdesign@gmail.com
              </Link>
            </li>

            <li>
              <Link
                className={linkClasses}
                href={"tel:+44 7760 376563"}
                target="_blank"
              >
                +44 7760 376563
              </Link>
            </li>
          </ul>
        </div>

        {/* Dark mode switch */}
        <ThemeToggle />
      </div>
    </nav>
  );
}
