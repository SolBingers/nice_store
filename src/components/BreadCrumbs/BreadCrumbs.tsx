import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import breadcrumbs from './BreadCrumbs.module.scss';

export const BreadCrumbs = () => {
  const location = useLocation();

  const paths = useMemo(() => {
    const segments = location.pathname.split('/').filter(segment => segment !== '');
    const paths = segments.map((segment, index) => ({
      name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      path: `/${segments.slice(0, index + 1).join('/')}`
    }));
    return paths;
  }, [location.pathname]);

  return (
    <div className={breadcrumbs.breadcrumbs}>
      <Link to="/" className={breadcrumbs.homeLink}>
        🤝
      </Link>
      {paths.map((path) => (
        <div key={path.path}>
          <div className={breadcrumbs.arrow}></div>
          <Link to={path.path} className={breadcrumbs.pathLink}>
            {path.name}
          </Link>
        </div>
      ))}
    </div>
  );
};
