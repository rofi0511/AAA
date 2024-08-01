// Footer.jsx
import React from 'react';
import styles from './FooterMenu.module.css'; // Importa el archivo de estilos

const FooterMenu = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <a href="/" className={styles.link}>Inicio</a>
          <a href="/contactos" className={styles.link}>Contacto</a>
        </div>
        <p className={styles.description}>© {new Date().getFullYear()} AAA. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default FooterMenu;
