import React, { useRef, useState } from 'react';
import { Carousel } from '@mantine/carousel';
import { Image1, Image2, Image3, Image4, Image5 } from '../../../assets';
import styles from './Proyectos.module.css'
import Autoplay from 'embla-carousel-autoplay';
import CardProject from '../../components/CardProject/CardProject';
import { projectsData } from '../../Data/projectsData';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import ModalCard from '../../components/CardProject/CardModal';

const Proyectos = () => {
  const [selectedId, setSelectedId] = useState(null);
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const [index, setIndex] = useState(null);
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
        <Carousel.Slide><img src={Image2} alt="Proyecto 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></Carousel.Slide>
        <Carousel.Slide><img src={Image3} alt="Proyecto 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></Carousel.Slide>
        <Carousel.Slide><img src={Image4} alt="Proyecto 4" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></Carousel.Slide>
        <Carousel.Slide><img src={Image5} alt="Proyecto 5" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></Carousel.Slide>
      </Carousel>
      <div className={styles.portfolio}>
        <LayoutGroup>
          <AnimatePresence>
            <CardProject className={styles.cards} setIndex={setIndex} cards={cards} />
            {index !== false && (
              <ModalCard
                key="singlecard"
                index={index}
                cards={cards}
                setIndex={setIndex}
              />
            )}
          </AnimatePresence>
        </LayoutGroup>
      </div>
      {/* <div className={styles.portfolio}>
        {projectsData.map((project) => (
          <CardProject
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            onClick={() => setSelectedId(project.id)}
          />
        ))}

        <AnimatePresence>
          {selectedId && (
            <motion.div
              layoutId={selectedId}
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.h3>{selectedItem.title}</motion.h3>
              <motion.p>{selectedItem.description}</motion.p>
              <motion.img src={selectedItem.imageUrl} style={{ maxWidth: '100%' }} />
              <motion.button
                onClick={() => setSelectedId(null)}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                Cerrar
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

      </div> */}
    </div>
  );
};

export default Proyectos;
