import React, { FC, useEffect, useState } from 'react';
import styles from './ToTopButton.module.scss';
import { ReactComponent as ToTop } from '../../images/to_top_arrow.svg';
import classNames from 'classnames';

export const ToTopButton: FC = () => {
  const [isShowed, setIsShowed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 500) {
        setIsShowed(true);
      } else {
        setIsShowed(false);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ToTop
      onClick={scrollToTop}
      className={classNames(
        styles.button, 
        {
          [styles.isShowed]: isShowed,
        }
      )}
    />
  );
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
  });
}
