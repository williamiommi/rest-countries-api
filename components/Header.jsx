import { useState } from 'react';
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { toggleTheme } from "../lib/utils";

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const Icon = isDark ? SunIcon : MoonIcon;
  const handleToggle = () => {
    setIsDark(toggleTheme());
  }
  return (
    <header className="bg-white shadow-sm dark:bg-blue-dark">
      <div className="mx-auto flex flex-row justify-between px-4 py-6 desktop:container desktop:px-0">
        <p className="font-semibold text-base desktop:text-h2">
          Where in the world?
        </p>
        <button
          className="flex flex-row items-center justify-center"
          onClick={handleToggle}
          title={`switch to ${isDark ? 'light' : 'dark'} mode`}
          data-testid="switch"
        >
          <Icon className="w-6 pr-1" />
        </button>
      </div>
    </header>
  );
}
