import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Categories } from '../../components/Categories';

export const CategoryPage: FC = () => {
  const { selectedCategory } = useParams();

  return (
    <>
      <h1>
        Category Page {selectedCategory}
      </h1>
      <Categories />
    </>

  );
};