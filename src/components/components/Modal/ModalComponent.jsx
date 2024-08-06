import { Modal, ScrollArea } from "@mantine/core";

function ModalComponent({ isOpen, onClose, title, children }) {

    return (
        <Modal
            opened={isOpen}
            onClose={onClose}
            title={title}
            size="auto"
            centered
            scrollAreaComponent={ScrollArea.Autosize}
            transitionProps={{transition: 'fade-up', duration: 350, timingFunction: 'linear'}}
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3
            }}
        >
            {children}
        </Modal>
    )

}

export default ModalComponent