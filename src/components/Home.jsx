import React from 'react';
import styles from '../../src/styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>New Cafe Hide Out</h1>
      <span>Paradise on your plate</span>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
        voluptatum qui nulla? Saepe veniam quia corporis mollitia quod, labore
        incidunt.
      </p>
      <div className={styles.buttons}>
        <button className={styles.filled}>About Us</button>
        <button>See menu</button>
      </div>
    </div>
  );
};

export default Home;
