import React, { FunctionComponent, useState } from "react";
import FilterButton from "./FilterButton";
import FilterList from "./FilteredLists";
import SelectedFilters from "./SelectedFilters";
import ClearAllButton from "./ClearAllButton";

interface FilterDropdownProps {
  categories: string[];
  selectedFilters: string[];
  onSelectFilter: (selectedFilters: string[]) => void;
}

const FilterDropdown: FunctionComponent<FilterDropdownProps> = ({
  categories,
  selectedFilters,
  onSelectFilter,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleFilterSelection = (category: string) => {
    const updatedFilters = selectedFilters.includes(category)
      ? selectedFilters.filter((filter) => filter !== category)
      : [...selectedFilters, category];

    onSelectFilter(updatedFilters);
  };

  const handleLabelClick = (category: string) => {
    const updatedFilters = selectedFilters.filter((filter) => filter !== category);
    onSelectFilter(updatedFilters);
  };

  const clearAllFilters = () => {
    onSelectFilter([]);
  };

  return (
    <div className="relative inline-block text-left">
      <FilterButton
        isDropdownOpen={isDropdownOpen}
        filterName={"Filter by Category"}
        toggleDropdown={toggleDropdown}
      />
      {isDropdownOpen && (
        <div
          className="absolute z-50 mt-2 origin-top-right bg-white divide-y divide-gray-100 w-54 right-50"
          role="listbox"
          aria-labelledby="dropdownButton"
        >
          <FilterList
            categories={categories}
            selectedFilters={selectedFilters}
            handleFilterSelection={handleFilterSelection}
          />
        </div>
      )}
      <SelectedFilters
        selectedFilters={selectedFilters}
        handleLabelClick={handleLabelClick}
      />
      {selectedFilters.length > 0 && (
        <ClearAllButton clearAllFilters={clearAllFilters} />
      )}
    </div>
  );
};

export default FilterDropdown;