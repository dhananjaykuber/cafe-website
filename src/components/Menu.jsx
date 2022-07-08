import React from 'react';
import styles from '../../src/styles/Menu.module.css';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <ul>
        <li className={styles.list} data-filter="All">
          All
        </li>
        <li className={styles.list} data-filter="Luch">
          Luch
        </li>
        <li className={styles.list} data-filter="Dinner">
          Dinner
        </li>
        <li className={styles.list} data-filter="Dessert">
          Dessert
        </li>
      </ul>

      <div className={styles.dishes}>
        <div className={styles.dish}>
          <img
            src="http://on3-step.com/tf/dbento/dbento/img/menu/1.png"
            alt="dish_image"
          />
        </div>
        <div className={styles.dish}>
          <img
            src="http://on3-step.com/tf/dbento/dbento/img/menu/1.png"
            alt="dish_image"
          />
        </div>
        <div className={styles.dish}>
          <img
            src="http://on3-step.com/tf/dbento/dbento/img/menu/1.png"
            alt="dish_image"
          />
        </div>
        <div className={styles.dish}>
          <img
            src="http://on3-step.com/tf/dbento/dbento/img/menu/1.png"
            alt="dish_image"
          />
        </div>
        <div className={styles.dish}>
          <img
            src="http://on3-step.com/tf/dbento/dbento/img/menu/1.png"
            alt="dish_image"
          />
        </div>
        <div className={styles.dish}>
          <img
            src="http://on3-step.com/tf/dbento/dbento/img/menu/1.png"
            alt="dish_image"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
