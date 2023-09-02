import React, { FunctionComponent } from "react";

interface FilterListProps {
  categories: string[];
  selectedFilters: string[];
  handleFilterSelection: (category: string) => void;
}

const FilterList: FunctionComponent<FilterListProps> = ({
  categories,
  selectedFilters,
  handleFilterSelection,
}) => {
  return (
    <div>
      {categories.map((category) => (
        <div key={category} className="px-4 py-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="w-5 h-5 text-orange form-checkbox"
              value={category}
              checked={selectedFilters.includes(category)}
              onChange={() => handleFilterSelection(category)}
              aria-label={`Select ${category}`}
            />
            <span className="text-sm">{category}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default FilterList;
