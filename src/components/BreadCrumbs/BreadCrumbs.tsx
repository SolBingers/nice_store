import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './BreadCrumbs.module.scss';
import classNames from 'classnames';

export const BreadCrumbs: React.FC = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter((x) => x);

  return (
    <nav aria-label={styles.breadcrumbs}>
      <ul className={styles.breadcrumbs}>
        <li>
          <Link to='/'> 🤝 </Link>
        </li>
        {paths.map((path, i) => {
          const to = `/${paths.slice(0, i + 1).join('/')}`;
          const isActive = to === location.pathname;
          const pathName = path[0].toUpperCase() + path.slice(1);

          return (
            <li
              className={classNames([styles.item], { [styles.active]: isActive })}
              aria-current={isActive ? 'page' : undefined}
              key={to}
            >
              {isActive ? (
                pathName
              ) : (
                <Link to={to}>{pathName}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

