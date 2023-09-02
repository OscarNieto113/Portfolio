import React, { FunctionComponent } from "react";

interface ClearAllButtonProps {
  clearAllFilters: () => void;
}

const ClearAllButton: FunctionComponent<ClearAllButtonProps> = ({
  clearAllFilters,
}) => {
  return (
    <button
      type="button"
      className="text-sm text-purple hover:text-red-500 "
      onClick={clearAllFilters}
    >
      <b>Clear All</b>
    </button>
  );
};

export default ClearAllButton;
