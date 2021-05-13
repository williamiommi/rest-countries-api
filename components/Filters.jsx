import { memo } from "react";
import RegionFilter from "./RegionFilter";
import SearchInput from "./SearchInput";

const Filters = ({ handleTextSearch, handleRegionSearch, regions }) => {
  return (
    <div className="mx-auto flex flex-row items-center justify-between py-10 px-5 desktop:container desktop:px-0">
      <SearchInput handleTextSearch={handleTextSearch} />
      <RegionFilter regions={regions} handleRegionSearch={handleRegionSearch} />
    </div>
  );
};

export default memo(Filters);
