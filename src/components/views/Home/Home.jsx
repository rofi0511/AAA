import React, { useState } from 'react';
import Trabajos from '../Trabajos/Trabajos';
import styles from './Home.module.css';
import ModalComponent from '../../components/Modal/ModalComponent';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const goToTrabajos = () => navigate('/trabajos')

  return (
    <div className={styles.home}>
      <section className={styles.intro} data-aos="fade-up">
        <div className={styles.content}>
          <h1 data-aos="zoom-in">Autores Asociados Autónomos</h1>
          <h2 data-aos="zoom-in" data-aos-delay="200">Conectando talento literario con oportunidades editoriales</h2>
          <p data-aos="fade-up" data-aos-delay="400">Somos un colectivo de autores comprometidos en ofrecer las mejores obras literarias del mercado. Descubre nuestras publicaciones y conoce a los talentosos escritores detrás de cada trabajo.</p>
          <div className={styles.ctaButtons} data-aos="fade-up" data-aos-delay="600">
            <button className={styles.ctaButton} onClick={goToTrabajos}>Ver nuestros trabajos</button>
            <button className={styles.ctaButton} onClick={openModal}>Conócenos</button>
          </div>
        </div>
      </section>
      <section className={styles.trabajosSection} data-aos="fade-up">
        <Trabajos view="home" />
      </section>
      <ModalComponent isOpen={isModalOpen} onClose={closeModal}>
        <section className={styles.intro} data-aos="fade-up">
          <div className={styles.content}>
            <h1 data-aos="zoom-in">Autores Asociados Autónomos</h1>
            <h2 data-aos="zoom-in" data-aos-delay="200">Conectando talento literario con oportunidades editoriales</h2>
            <p data-aos="fade-up" data-aos-delay="400">Somos un colectivo de autores comprometidos en ofrecer las mejores obras literarias del mercado. Descubre nuestras publicaciones y conoce a los talentosos escritores detrás de cada trabajo.</p>
            <div className={styles.ctaButtons} data-aos="fade-up" data-aos-delay="600">
              <button className={styles.ctaButton} onClick={goToTrabajos}>Ver nuestros trabajos</button>
              <button className={styles.ctaButton} onClick={openModal}>Conócenos</button>
            </div>
          </div>
        </section>
      </ModalComponent>
    </div>
  );
};

export default Home;
