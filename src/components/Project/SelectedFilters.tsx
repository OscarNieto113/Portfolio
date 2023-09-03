import React, { FunctionComponent } from "react";
import { FaTimes } from "react-icons/fa";

interface SelectedFiltersProps {
  selectedFilters: string[];
  handleLabelClick: (category: string) => void;
}

const SelectedFilters: FunctionComponent<SelectedFiltersProps> = ({
  selectedFilters,
  handleLabelClick,
}) => {
  return (
    <div className="flex flex-wrap justify-center my-1">
      {selectedFilters.map((filter) => (
        <div
          key={filter}
          className="flex items-center px-2 py-1 mx-1 my-1 text-sm font-medium rounded-md cursor-pointer bg-purple text-newGray"
          onClick={() => handleLabelClick(filter)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleLabelClick(filter);
            }
          }}
          tabIndex={0}
        >
          {filter}
          <FaTimes className="ml-2 text-red-500" />
        </div>
      ))}
    </div>
  );
};

export default SelectedFilters;
