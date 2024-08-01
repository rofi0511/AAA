import { Card } from "@mantine/core";
import styles from "./CardWork.module.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useState, useRef } from "react";

function CardWork({ title, author }) {
    const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg)");
    const cardRef = useRef(null);

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
        >
            <div className={styles.flex}>
                <div className={styles.icon}>
                    <InfoOutlinedIcon />
                </div>
                <div className={styles.text}>
                    <h2>{author} - {title}</h2>
                    <p>Descripción</p>
                    <p>Fecha de actualización</p>
                </div>
            </div>
        </Card>
    );
}

export default CardWork;
