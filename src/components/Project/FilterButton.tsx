import React, { FunctionComponent } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface FilterButtonProps {
  filterName: string;
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
}

const FilterButton: FunctionComponent<FilterButtonProps> = ({
  isDropdownOpen,
  toggleDropdown,
  filterName
}) => {
  return (
    <div className="mx-2 mt-2 ">
      <button
        type="button"
        className={`inline-flex justify-center px-4 py-2 font-medium border border-orange rounded-md focus:outline-none focus:ring focus:newGray active:bg-newGray ${
          isDropdownOpen ? "bg-newGray" : ""
        }`}
        aria-expanded={isDropdownOpen}
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-labelledby="dropdownButton"
      >
       { filterName}
        <IoIosArrowDown
          className={`w-5 h-5 ml-2 transform ${
            isDropdownOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
    </div>
  );
};

export default FilterButton;
