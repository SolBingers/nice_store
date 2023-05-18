import React, { FC } from 'react';
import footer from './Footer.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  className?: string;
}

export const Footer: FC<Props> = ({ className }) => (
  <div className={classNames(className, footer.footer)}>
    <Link 
      to='/'
      className={footer.homeLink}
    >
      N🤝ce
    </Link>

    <div className={footer.text}>
      Developed by <span className={footer.solBingers}>SolBingers</span>
    </div>

    <div className={footer.links}>
      <a 
        href='https://github.com/SolBingers'
        className={footer.gitLink}
        target="_blank" rel="noreferrer"
      >
        GITHUB
      </a>
      <Link to='/contacts' className={footer.contactLink}>
        CONTACTS
      </Link>
    </div>
  </div>
);