import React from 'react';

const FilteredProjects: React.FC<{ result: JSX.Element[] }> = ({ result }) => {
  return (
    <section className="flex flex-wrap mt-8 ml-20 space-x-4">
      {result}
    </section>
  );
};

export default FilteredProjects;