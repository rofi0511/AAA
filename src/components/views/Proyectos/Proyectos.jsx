import React, { useRef, useState } from 'react';
import { Carousel } from '@mantine/carousel';
import { Image1, Image5, Image6, Image7, Image8 } from '../../../assets';
import styles from './Proyectos.module.css'
import Autoplay from 'embla-carousel-autoplay';
import CardProject from '../../components/CardProject/CardProject';
import { projectsData } from '../../Data/projectsData';

const Proyectos = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const cards = projectsData;

  return (
    <div>
      <h2>Proyectos</h2>
      <Carousel
        classNames={styles}
        withIndicators
        height={400}
        align="start"
        slideGap="md"
        controlsOffset="xs"
        controlSize={30}
        loop
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        <Carousel.Slide><img src={Image1} alt="Proyecto 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></Carousel.Slide>
        <Carousel.Slide><img src={Image6} alt="Proyecto 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></Carousel.Slide>
        <Carousel.Slide><img src={Image7} alt="Proyecto 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></Carousel.Slide>
        <Carousel.Slide><img src={Image8} alt="Proyecto 4" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></Carousel.Slide>
        <Carousel.Slide><img src={Image5} alt="Proyecto 5" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></Carousel.Slide>
      </Carousel>
      <div className={styles.portfolio}>
        {cards.map(card => (
            <CardProject key={card.id} title={card.title} descripcion={card.description} imageUrl={card.imageUrl} />
          ))}
      </div>
    </div>
  );
};

export default Proyectos;
