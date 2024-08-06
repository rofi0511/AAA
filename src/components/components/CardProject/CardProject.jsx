import React, { useState } from "react";
import styles from './CardProject.module.css'
import { Card, Image } from "@mantine/core";
import { motion } from "framer-motion";

function CardProject({ cards, setIndex }) {

    return (
        <div className={styles.cardWrapper}>
            {cards.map((card, i) => (
                <div className={styles.card}>
                    <motion.div
                        key={card.id}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut"
                        }}
                        whileHover={{
                            scale: 0.95,
                            duration: 0.3,
                            color: "#f7f7f7"
                        }}
                        onClick={() => {
                            setIndex(i);
                        }}
                        style={{
                            backgroundColor: card.color,
                            color: "#000",
                            borderRadius: "30px"
                        }}
                        layoutId={card.id}
                    >
                        <img src={card.imageUrl} alt={card.title} className={styles.cardImage} />
                        <p>{card.title}</p>

                    </motion.div>
                </div>
            ))}
        </div>

        /*<motion.div
            layoutId={id}
            onClick={onClick}
            className={styles.cardWrapper}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ cursor: 'pointer' }}
        >
            <Card
                shadow="md"
                padding="lg"
                className={styles.card}
            >
                <Card.Section>
                    <Image
                        src={imageUrl}
                        height={160}
                    />
                </Card.Section>
                <div className={styles.content}>
                    <h3>{title}</h3>
                </div>
            </Card>
        </motion.div>*/
    )

}

export default CardProject