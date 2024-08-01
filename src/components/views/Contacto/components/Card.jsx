import { Card, Button, Fieldset, TextInput } from "@mantine/core";
import styles from "./Card.module.css"

function CardRequest() {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Fieldset variant="unstyled" className={styles.card}>
                <TextInput label="Nombre" placeholder="Nombre" />
                <TextInput label="Apellido" placeholder="Apellido" />
                <TextInput label="Número telefónico" placeholder="Número telefónico" />
                <TextInput label="Mensaje" placeholder="Mensaje" />
            </Fieldset>
            <Button color="black" fullWidth mt="md" radius="md">
                Enviar
            </Button>
        </Card>
    )
}

export default CardRequest