import React from 'react';
import styles from '../../src/styles/DailySpecial.module.css';

const DailySpecial = () => {
  return (
    <div className={styles.dailySpecial}>
      <div className={styles.heading}>
        <span></span>
        <h5>Special Menu</h5>
      </div>
      <h2>Check our daily specials</h2>

      <div className={styles.specialDishes}>
        <div className={styles.specialDish}>
          <img
            src="http://on3-step.com/tf/dbento/dbento/img/menu/1.png"
            alt="dish_image"
          />
          <div className={styles.dishInformation}>
            <h3>Rosted Steak</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span>₹50</span>
          </div>
        </div>
        <div className={styles.specialDish}>
          <img
            src="http://on3-step.com/tf/dbento/dbento/img/menu/1.png"
            alt="dish_image"
          />
          <div className={styles.dishInformation}>
            <h3>Rosted Steak</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span>₹50</span>
          </div>
        </div>
        <div className={styles.specialDish}>
          <img
            src="http://on3-step.com/tf/dbento/dbento/img/menu/1.png"
            alt="dish_image"
          />
          <div className={styles.dishInformation}>
            <h3>Rosted Steak</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span>₹50</span>
          </div>
        </div>
        <div className={styles.specialDish}>
          <img
            src="http://on3-step.com/tf/dbento/dbento/img/menu/1.png"
            alt="dish_image"
          />
          <div className={styles.dishInformation}>
            <h3>Rosted Steak</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span>₹50</span>
          </div>
        </div>
        <div className={styles.specialDish}>
          <img
            src="http://on3-step.com/tf/dbento/dbento/img/menu/1.png"
            alt="dish_image"
          />
          <div className={styles.dishInformation}>
            <h3>Rosted Steak</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span>₹50</span>
          </div>
        </div>
        <div className={styles.specialDish}>
          <img
            src="http://on3-step.com/tf/dbento/dbento/img/menu/1.png"
            alt="dish_image"
          />
          <div className={styles.dishInformation}>
            <h3>Rosted Steak</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span>₹50</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailySpecial;
