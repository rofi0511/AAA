import { Card } from "@mantine/core";
import styles from "./CardWork.module.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useState, useRef } from "react";
import ModalComponent from "../Modal/ModalComponent";

function CardWork({ title, author, descripcion, fechaActualizacion }) {
    const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg)");
    const cardRef = useRef(null);

    const [isModalOpen, setIsModalOpen] = useState(false)
    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const offsetX = ((x - centerX) / centerX) * 10;
        const offsetY = ((y - centerY) / centerY) * 10;

        setTransform(`rotateX(${offsetY}deg) rotateY(${offsetX}deg)`);
    };

    const handleMouseLeave = () => {
        setTransform("rotateX(0deg) rotateY(0deg)");
    };

    return (
        <>
            <Card
                shadow="sm"
                padding="lg"
                radius="md"
                className={styles.card}
                withBorder
                style={{ transform }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                ref={cardRef}
                onClick={openModal}
            >
                <div className={styles.flex}>
                    <div className={styles.icon}>
                        <InfoOutlinedIcon />
                    </div>
                    <div className={styles.text}>
                        <h2>{author} - {title}</h2>
                        <p>{descripcion}</p>
                        <p>{fechaActualizacion}</p>
                    </div>
                </div>
            </Card>
            <ModalComponent isOpen={isModalOpen} onClose={closeModal}>
                <div className={styles.flexModal}>
                    <div className={styles.textModal}>
                        <h2>{author} - {title}</h2>
                        <p>{descripcion}</p>
                        <p>{fechaActualizacion}</p>
                    </div>
                </div>
            </ModalComponent>
        </>
    );
}

export default CardWork;
