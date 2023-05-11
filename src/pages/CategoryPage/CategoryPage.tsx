import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

export const CategoryPage: FC = () => {
  const { selectedCategory } = useParams();

  return (
    <>
      <h1>
        Category Page {selectedCategory}
      </h1>
    </>
  );
};