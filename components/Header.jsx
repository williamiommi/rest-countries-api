import { MoonIcon } from "@heroicons/react/solid";
import { toggleTheme } from "../lib/utils";

export default function Header() {
  return (
    <header className='bg-white shadow-sm dark:bg-blue-dark'>
      <div className="mx-auto flex flex-row justify-between px-4 py-6 desktop:container desktop:px-0">
        <p className='font-semibold text-base desktop:text-h2'>Where in the world?</p>
        <button className='flex flex-row items-center justify-center' onClick={toggleTheme}>
          <MoonIcon className='w-6 pr-1' />
          Dark mode
        </button>
      </div>
    </header>
  );
}
