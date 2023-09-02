import React, { FunctionComponent, useState, useEffect } from "react";

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

  useEffect(() => {
    if (selectedFilters.length > 0) {
      setIsDropdownOpen(false);
    }
  }, [selectedFilters]);

  const handleFilterSelection = (category: string) => {
    const updatedFilters = selectedFilters.includes(category)
      ? selectedFilters.filter((filter) => filter !== category)
      : [...selectedFilters, category];

    onSelectFilter(updatedFilters);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring focus:ring-blue-500 active:bg-gray-200"
        aria-expanded={isDropdownOpen}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        aria-haspopup="listbox"
        aria-labelledby="dropdownButton"
      >
        Filter by Category
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 ml-2 transition-transform transform ${
            isDropdownOpen ? "rotate-180" : "rotate-0"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isDropdownOpen && (
        <div
          className="absolute z-50 w-64 mt-2 origin-top-right bg-white divide-y divide-gray-100 right-50"
          role="listbox"
          aria-labelledby="dropdownButton"
        >
          {categories.map((category) => (
            <div key={category} className="px-4 py-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-orange form-checkbox"
                  value={category}
                  checked={selectedFilters.includes(category)}
                  onChange={() => handleFilterSelection(category)}
                  aria-label={`Select ${category}`}
                />
                <span className="ml-2">{category}</span>
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

FilterDropdown.defaultProps = {
  categories: [],
  selectedFilters: [],
};

export default FilterDropdown;
