import React, { useState } from 'react';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <a href="/">
            <img src="/logo.svg" alt="logo" />
          </a>
          <div
            className={
              openNavbar
                ? `${styles.hamburgerContainer} ${styles.open}`
                : `${styles.hamburgerContainer}`
            }
            onClick={() => setOpenNavbar(!openNavbar)}
          >
            <div className={styles.hamburger}></div>
          </div>
        </div>
        <ul className={openNavbar && `${styles.show}`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>

      <div className={styles.container}>{children}</div>

      <footer className={styles.footer}>
        <p>
          Copyright &copy; 2021 New Hide Out Cafe. Designed By{' '}
          <a href="/">@Samruddhi</a> and&nbsp;
          <a href="/">@Dhananjay</a>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
