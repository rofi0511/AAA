import React, {useRef} from 'react';
import { Carousel } from '@mantine/carousel';
import { Image1, Image2, Image3, Image4, Image5 } from '../../../assets';
import styles from './Proyectos.module.css'
import Autoplay from 'embla-carousel-autoplay';

const Proyectos = () => {

  const autoplay = useRef(Autoplay({ delay: 2000}));

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
        <Carousel.Slide><img src={Image2} alt="Proyecto 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></Carousel.Slide>
        <Carousel.Slide><img src={Image3} alt="Proyecto 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></Carousel.Slide>
        <Carousel.Slide><img src={Image4} alt="Proyecto 4" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></Carousel.Slide>
        <Carousel.Slide><img src={Image5} alt="Proyecto 5" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></Carousel.Slide>
      </Carousel>
    </div>
  );
};

export default Proyectos;
