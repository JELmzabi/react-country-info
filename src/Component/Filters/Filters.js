import React from "react";
import Dropdown from "../../Elements/Dropdown/Dropdown";
import SearchInput from "../../Elements/Input/SearchInput";

import "./Filters.css";

const SearchingTools = () => {
  return (
    <div className="tools container">
      <SearchInput />
      <Dropdown />
    </div>
  );
};

export default SearchingTools;
