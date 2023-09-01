import { FunctionComponent, useState } from "react";

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

  const handleFilterSelection = (category: string) => {
    const updatedFilters = selectedFilters.includes(category)
      ? selectedFilters.filter((filter) => filter !== category)
      : [...selectedFilters, category];

    onSelectFilter(updatedFilters);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring focus:ring-blue-500 active:bg-gray-200"
          id="dropdownHoverButton"
          data-dropdown-toggle="dropdownHover"
          data-dropdown-trigger="hover"
          aria-expanded={isDropdownOpen}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Filter by Category
          {/* Add an arrow down icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2"
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
      </div>

      {/* Dropdown content */}
      {isDropdownOpen && (
        <div
          className="right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-labelledby="dropdown-button"
        >
          {categories.map((category) => (
            <div key={category} className="px-4 py-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-blue-600 form-checkbox"
                  value={category}
                  checked={selectedFilters.includes(category)}
                  onChange={() =>
                    handleFilterSelection(category)
                  }
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

export default FilterDropdown;
