import { memo } from "react";
import { SearchIcon } from "@heroicons/react/solid";

const SearchInput = ({ handleTextSearch }) => {
  return (
    <div className="flex flex-row align-middle w-full rounded-md bg-white shadow-md mb-4 dark:bg-blue-dark tablet:mb-0 tablet:w-2/5 desktop:w-2/6">
      <SearchIcon className="w-6 mx-5 text-gray-dark dark:text-white" />
      <input
        name="input"
        data-testid="input"
        type="text"
        title="Search for a country..."
        placeholder="Search for a country..."
        className="w-full p-4 rounded-md bg-white text-gray-dark placeholder-gray-dark dark:bg-blue-dark dark:text-white dark:placeholder-white"
        onChange={(e) => handleTextSearch(e.target.value)}
      />
    </div>
  );
};

export default memo(SearchInput);
