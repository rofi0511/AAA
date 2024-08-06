import React, { useState } from "react";
import styles from './CardProject.module.css'
import { Card } from "@mantine/core";
import CardModal from "./CardModal";

function CardProject({ title, imageUrl, description }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false)

    return (
        <>
            <Card
                shadow="lg"
                padding="lg"
                radius="md"
                className={styles.card}
                onClick={openModal}
            >
                <div className={styles.flex}>
                    <div>
                        <img src={imageUrl} alt={""} className={styles.cardImage} />
                    </div>
                    <div className={styles.text}>
                        <h2>{title}</h2>
                    </div>
                </div>
            </Card>
            <CardModal className={styles.cardModal} isOpen={isModalOpen} onClose={closeModal}>
                <div>
                    <div className={styles.imageModal}>
                        <img src={imageUrl} alt={""} className={styles.cardImage} />
                    </div>
                    <div className={styles.textModal}>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </CardModal>
        </>
    )
}

export default CardProject