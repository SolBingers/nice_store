import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import breadcrumbs from './BreadCrumbs.module.scss';
import classNames from 'classnames';

export const BreadCrumbs = () => {
  const location = useLocation();

  const paths = useMemo(() => {
    const segments = location.pathname
      .split('/')
      .filter((segment) => segment !== '');
    const paths = segments.map((segment, i) => ({
      name:
        segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      path: `/${segments.slice(0, i + 1).join('/')}`,
    }));

    return paths;
  }, [location.pathname]);

  return (
    <div className={breadcrumbs.breadcrumbs}>
      <Link to="/" className={breadcrumbs.homeLink}>
        🤝
      </Link>

      {paths.map((path, i) => (
        <div className={breadcrumbs.crumb} key={path.path}>
          <span className={breadcrumbs.arrow}>&gt;</span>

          <Link
            to={path.path}
            className={classNames(breadcrumbs.pathLink, {
              [breadcrumbs.active]: i === paths.length - 1,
            })}
          >
            {path.name}
          </Link>
        </div>
      ))}
    </div>
  );
};
