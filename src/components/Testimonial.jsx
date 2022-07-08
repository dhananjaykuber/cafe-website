import React from 'react';
import styles from '../../src/styles/Testimonial.module.css';

const Testimonial = () => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.heading}>
        <span></span>
        <h5>TESTIMONIALS</h5>
      </div>
      <h2>What our visitors say?</h2>
      <div className={styles.feedbacks}>
        <div className={styles.feedback}>
          <h4>I will visit again.</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            eius eveniet assumenda dolorum officiis fuga fugit, sunt asperiores,
            illo, consequatur adipisci amet minus saepe id. Iste distinctio
            consequuntur officiis? Accusantium?
          </p>
          <div className={styles.divider}></div>
          <div className={styles.information}>
            <img
              src="https://elanta.app/nazar/tastyc-demo/img/faces/3.jpg"
              alt="user"
            />
            <strong>John Doe</strong>
            <span>02:04:2022</span>
          </div>
        </div>
        <div className={styles.feedback}>
          <h4>I will visit again.</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            eius eveniet assumenda dolorum officiis fuga fugit, sunt asperiores,
            illo, consequatur adipisci amet minus saepe id. Iste distinctio
            consequuntur officiis? Accusantium?
          </p>
          <div className={styles.divider}></div>
          <div className={styles.information}>
            <img
              src="https://elanta.app/nazar/tastyc-demo/img/faces/3.jpg"
              alt="user"
            />
            <strong>John Doe</strong>
            <span>02:04:2022</span>
          </div>
        </div>
        <div className={styles.feedback}>
          <h4>I will visit again.</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            eius eveniet assumenda dolorum officiis fuga fugit, sunt asperiores,
            illo, consequatur adipisci amet minus saepe id. Iste distinctio
            consequuntur officiis? Accusantium?
          </p>
          <div className={styles.divider}></div>
          <div className={styles.information}>
            <img
              src="https://elanta.app/nazar/tastyc-demo/img/faces/3.jpg"
              alt="user"
            />
            <strong>John Doe</strong>
            <span>02:04:2022</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
