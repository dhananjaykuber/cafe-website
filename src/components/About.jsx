import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <img src="/about.jpg" alt="about_image" />
        <div className={styles.content}>
          <div className={styles.heading}>
            <span></span>
            <h5>About us</h5>
          </div>
          <h2>We invite you to visite our cafe</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nihil
            perspiciatis cum dolorem ipsam id, tenetur dolorum tempore
            praesentium. Dignissimos temporibus in quasi modi sapiente omnis
            eaque sunt eius consectetur.
          </p>
          <button>Contact us</button>
          <div className={styles.socials}>
            <a href="/">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="/">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="/">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="/">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.features}>
        <div className={styles.heading}>
          <span></span>
          <h5>Features</h5>
        </div>
        <h2>Why people choose us?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          adipisci.
        </p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src="/menu.png" alt="menu" />
            <h3>Menu for every test</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, esse?
            </p>
          </div>
          <div className={styles.card}>
            <img src="/chef.png" alt="menu" />
            <h3>Experienced chefs</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, esse?
            </p>
          </div>
          <div className={styles.card}>
            <img src="/fresh.png" alt="menu" />
            <h3>Always fresh ingredients</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, esse?
            </p>
          </div>
        </div>
      </div>

      <div className={styles.time}>
        <div className={styles.image}>
          <h3>Working hours</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            voluptatem?
          </p>
          <button>Contact us</button>
        </div>
        <div className={styles.content}>
          <p>Monday to Saturday</p>
          <div className={styles.timing}>
            <h4>
              09 <strong>:</strong> 00 AM
            </h4>
            <h4>
              10 <strong>:</strong> 00 PM
            </h4>
          </div>

          <p>Sunday</p>
          <div className={styles.timing}>
            <h4>
              10 <strong>:</strong> 00 AM
            </h4>
            <h4>
              11 <strong>:</strong> 00 PM
            </h4>
          </div>
        </div>
      </div>

      <div className={styles.counts}>
        <div className={styles.count}>
          <h4>
            200 <span>+</span>
          </h4>
          <p>Visitors daily</p>
        </div>
        <div className={styles.count}>
          <h4>
            100 <span>%</span>
          </h4>
          <p>Postive feedbacks</p>
        </div>
        <div className={styles.count}>
          <h4>
            300 <span>+</span>
          </h4>
          <p>Monthly deliveries</p>
        </div>
      </div>
    </div>
  );
};

export default About;
