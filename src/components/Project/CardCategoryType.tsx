import React, { FunctionComponent } from "react";

interface CardCategoryTagProps {
  category: string[];
}

const CardCategoryTag: FunctionComponent<CardCategoryTagProps> = ({ category }) => {
  return (
    <div className="absolute rounded-md top-4 right-4 bg-newGray bg-opacity-70">
      {category.map((cat, index) => (
        <div key={index} className="mx-2 ml-4 text-sm text-purple">
          - {cat}
        </div>
      ))}
    </div>
  );
};

export default CardCategoryTag;
