import React from 'react';
import footer from './Footer.module.scss';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => (
  <div className={footer.footer}>
    <Link to='/'>
      <img src={logo} alt="Nice" className={footer.logo}/>
    </Link>

    <div className={footer.text}>
      Developed by <span className={footer.solBingers}>SolBingers</span>
    </div>

    <div className={footer.links}>
      <a href='https://github.com/SolBingers' className={footer.gitLink}>GITHUB</a>
      <Link to='/contacts' className={footer.contactLink}>
        CONTACTS
      </Link>
    </div>
  </div>
);