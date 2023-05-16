// import React, {useContext, useState,} from 'react';
// import { BreadCrumbs } from '../../components/BreadCrumbs';
// import classNames from 'classnames';
// import { Categories } from '../../components/Categories';
// import styles from '../CategoryPage/CategoryPage.module.scss';
// import { getSearchProducts } from '../../api/products';
// import { SearchContext } from '../../contexts/SearchContext';
// import { useQuery } from 'react-query';
// import { ProductItem } from '../../types/types';
// import { List } from '../../components/List';
// import { Loader } from '../../components/Loader';
// import { Pagination } from '../../components/Pagination';
// import { useSearchParams } from 'react-router-dom';

// type Response = {
//   data: ProductItem[];
//   pages: number;
// };


// export const SearchPage:React.FC = () => {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const page = searchParams.get('page') || '1';

//   const {isLoading, data} = useQuery<Response>(
//     'products');

//   return (
//     <>
//       <BreadCrumbs />

//       <main className={classNames(styles.main)}>

//         <Categories className={styles.categoriesContainer}/>

//         <div className={styles.content}>
//           {data && !isLoading ? (
//             <List className={styles.list} products={data.data} />
//           ) : (
//             <div className={styles.loaderContainer}>
//               <Loader />
//             </div>
//           )}

//           {data && (
//             <Pagination
//               className={styles.pagination}
//               currentPage={selectedPage}
//               setSelectedPage={setSelectedPage}
//               maxPage={data.pages}
//             />
//           )}
//         </div>
//       </main>
//     </>
//   );
// };