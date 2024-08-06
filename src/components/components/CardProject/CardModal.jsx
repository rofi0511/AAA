import { motion } from "framer-motion";
import style from "./CardModal.module.css"

function ModalCard({ index, cards }) {
    if (index === null || cards[index] === undefined) return null

    return (
        <motion.div
            id={cards[index].id}
            className={style.modalContainer}
        >

            <motion.div
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    duration: 0.3,
                    ease: "easeInOut"
                }}
                className={style.modalCard}
                layoutId={cards[index].id}
                style={{
                    width: "70vw",
                    height: "60vh",
                    borderRadius: "20px",
                    backgroundColor: cards[index].color
                }}
            >

                {index !== false && (
                    <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="modal-card-content">
                        <p>{cards[index].title}</p>
                    </motion.div>
                )}


            </motion.div>

        </motion.div>
    )
}

export default ModalCard