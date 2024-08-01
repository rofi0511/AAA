import React from 'react';
import styles from "./Contactos.module.css"
import CardRequest from './components/Card';

const Contactos = () => {
  return (
    <div className={styles.main}>
      <div className={styles.contactanos}>
        <h2>Contáctanos</h2>
        <p>Con gusto te atenderemos</p>
      </div>
      <div className={styles.card}>
        <CardRequest />
      </div>
      <div className={styles.contactanos}>
        <div className={styles.textoMapa}>
          <h2>O puedes encontrarnos en</h2>
        </div>
        <div className={styles.mapContainer}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1238602649137!2d-98.22880506857817!3d19.058291100000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc6d151e285a5%3A0x9ca2a9df78f025c5!2sAv.%20Teziutl%C3%A1n%20Nte.%2069%2C%20La%20Paz%2C%2072160%20Heroica%20Puebla%20de%20Zaragoza%2C%20Pue.!5e0!3m2!1ses-419!2smx!4v1722458005949!5m2!1ses-419!2smx"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Contactos;
