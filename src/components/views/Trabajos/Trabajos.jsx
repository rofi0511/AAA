import React from 'react';
import CardWork from '../../components/CardWork/CardWork';
import styles from "./Trabajos.module.css"
import { trabajosData, trabajosVendidos } from '../../Data/trabajosData';
import classNames from 'classnames';

const Trabajos = ({view}) => {

  const data = view == 'home' ? trabajosVendidos : trabajosData;

  const tituloClass = classNames(styles.titulo, {
    [styles.marginHome]: view === 'home',
  });

  return (
    <div className={styles.trabajos}>
      <h2 className={tituloClass}>Trabajos</h2>
      {view == 'home' && <p className={styles.descripcion}>Más vendidos</p>}
      <div className={styles.cardContainer}>
        {data.map(trabajo => (
          <CardWork key={trabajo.id} title={trabajo.title} author={trabajo.author} descripcion={trabajo.descripcion} fechaActualizacion={trabajo.fechaActualizacion} />
        ))}
      </div>
    </div>
  );
};

export default Trabajos;
