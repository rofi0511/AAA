import React from 'react';
import Trabajos from '../Trabajos/Trabajos';
import styles from './Home.module.css';
import LogoBackground from '../../../assets/file (1).png'

const Home = () => {
  return (
    <div className={styles.home}>
      <section className={styles.intro} data-aos="fade-up">
        <div className={styles.content}>
          <h1 data-aos="zoom-in">Autores Asociados Autónomos</h1>
          <h2 data-aos="zoom-in" data-aos-delay="200">Conectando talento literario con oportunidades editoriales</h2>
          <p data-aos="fade-up" data-aos-delay="400">Somos un colectivo de autores comprometidos en ofrecer las mejores obras literarias del mercado. Descubre nuestras publicaciones y conoce a los talentosos escritores detrás de cada trabajo.</p>
          <div className={styles.ctaButtons} data-aos="fade-up" data-aos-delay="600">
            <button className={styles.ctaButton}>Ver nuestros trabajos</button>
            <button className={styles.ctaButton}>Conócenos</button>
          </div>
        </div>
      </section>
      <section className={styles.trabajosSection} data-aos="fade-up">
        <Trabajos view="home" />
      </section>
    </div>
  );
};

export default Home;
