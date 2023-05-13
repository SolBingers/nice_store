import React, { FC, useEffect, useState } from 'react';
import pagination from './Pagination.module.scss';
import { Arrow } from './components/Arrow';
import { PageNumber } from './components/PageNumber/PageNumber';
import classNames from 'classnames';
import { useSearchParams } from 'react-router-dom';

type Props = {
  className?: string;
  maxPage: number;
}

export const Pagination: FC<Props> = ({ 
  className,
  maxPage,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const pages = getPageNumbers(currentPage, maxPage);

  useEffect(() => {
    searchParams.delete('page');
    searchParams.append('page', currentPage.toString());
    setSearchParams(searchParams);
  }, [currentPage]);

  useEffect(() => {
    const searchPage = searchParams.get('page') || currentPage;

    if (+searchPage !== currentPage) {
      setCurrentPage(+searchPage);
    }
  }, [searchParams]);

  return (
    <div className={classNames(className, pagination.main)}>
      <Arrow 
        type="left" 
        disabled={currentPage === 1}
        setPageNumber={setCurrentPage}
      />
      {pages.map(number => (
        <PageNumber 
          key={number}
          page={number} 
          isActive={currentPage === number}
          setPageNumber={setCurrentPage}
        />
      ))}
      <Arrow 
        type="right" 
        disabled={currentPage === maxPage}
        setPageNumber={setCurrentPage}
      />
    </div>
  );
};

function getPageNumbers(currentPage: number, maxPage:number) {
  const result = [];

  if (currentPage > maxPage) currentPage = maxPage;

  if (currentPage === 1) {
    while (currentPage < maxPage && result.length < 3) {
      result.push(currentPage);
      currentPage++;
    }

    return result;
  }

  if (currentPage === maxPage) {
    while (currentPage > 0 && result.length < 3) {
      result.unshift(currentPage);
      currentPage--;
    }

    return result;
  }

  return [currentPage - 1, currentPage, currentPage + 1];
}
