import React, { FunctionComponent } from "react";

interface CardCategoryTagProps {
  category: string[];
}

const CardCategoryTag: FunctionComponent<CardCategoryTagProps> = ({
  category,
}) => {
  return (
    <div className="absolute top-4 right-4 flex flex-wrap justify-end gap-2  rounded-md px-3 py-1">
      {category.map((cat, index) => (
        <span
          key={index}
          className="px-2 py-0.5 rounded bg-purple text-white text-xs font-semibold"
        >
          {cat}
        </span>
      ))}
    </div>
  );
};

export default CardCategoryTag;
