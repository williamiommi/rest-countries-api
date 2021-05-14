import { memo, useState, useRef } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CheckIcon,
} from "@heroicons/react/solid";

import useClickOutside from "../lib/hooks/useClickOutside";

const RegionFilter = ({ selectedRegion, regions, handleRegionSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef();
  useClickOutside(wrapperRef, () => setIsOpen(false));
  const placeholder = "Filter by Region";
  const handlerClick = () => {
    setIsOpen(!isOpen);
  };
  const handlerClickRegion = (e) => {
    const {
      currentTarget: {
        dataset: { id, isSelected },
      },
    } = e;
    handleRegionSearch(isSelected === 'true' ? '' : id);
    setIsOpen(false);
  };
  return (
    <div
      ref={wrapperRef}
      className="relative flex flex-col items-center w-2/12"
    >
      <button
        className="flex flex-row items-center justify-between w-full p-4 text-left shadow-md rounded-md bg-white dark:bg-blue-dark"
        onClick={handlerClick}
      >
        {selectedRegion || placeholder}
        {isOpen ? (
          <ChevronUpIcon className="w-5" />
        ) : (
          <ChevronDownIcon className="w-5" />
        )}
      </button>
      {isOpen && (
        <ul className="absolute w-full bg-white dark:bg-blue-dark top-full m-2 z-10 shadow-md rounded-md">
          {regions.map((region) => (
            <li key={region.name}>
              <button
                className="flex flex-row items-center justify-between w-full text-left px-4 py-2 opacity-80 hover:opacity-100"
                data-id={region.name}
                data-is-selected={region.selected}
                onClick={handlerClickRegion}
              >
                <span>{region.name}</span>
                {region.selected && <CheckIcon className="w-5 pl-1" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default memo(RegionFilter);
