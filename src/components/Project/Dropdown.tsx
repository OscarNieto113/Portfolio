import React, { FunctionComponent } from "react";

interface DropdownProps {
  categories: string[];
  selectedFilters: string[];
  handleFilterSelection: (category: string) => void;
  isOpen: boolean;
}

const Dropdown: FunctionComponent<DropdownProps> = ({
  categories,
  selectedFilters,
  handleFilterSelection,
  isOpen,
}) => {
  return (
    <div
      className={`absolute z-50 w-64 mt-2 origin-top-right bg-white divide-y divide-gray-100 right-50 ${
        isOpen ? "" : "hidden"
      }`}
      role="listbox"
      aria-labelledby="dropdownButton"
    >
      {categories.map((category) => (
        <div key={category} className="px-4 py-2">
          {/* ... (checkbox and label) */}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
