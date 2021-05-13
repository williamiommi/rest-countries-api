import { useState, useEffect } from "react";
import { SearchIcon } from "@heroicons/react/solid";

import useDebounce from "../lib/hooks/useDebounce";

export default function SearchInput({ handleTextSearch }) {
  const [searchTerm, setSearchTerm] = useState();
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  useEffect(() => {
    handleTextSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm]);
  return (
    <div className="flex flex-row align-middle rounded-md bg-white shadow-md dark:bg-blue-dark desktop:w-2/6">
      <SearchIcon className="w-6 mx-5 text-gray-dark dark:text-white" />
      <input
        data-testid="input"
        type="text"
        placeholder="Search for a country..."
        className="w-full p-4 rounded-md bg-white text-gray-dark placeholder-gray-dark dark:bg-blue-dark dark:text-white dark:placeholder-white"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
