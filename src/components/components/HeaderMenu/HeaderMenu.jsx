import styles from './HeaderMenu.module.css'
import LogoHeader from '../../../assets/LogoHeader.png'
import { Drawer, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';

function HeaderMenu({routes}) {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <div className={styles.AppHeader}>
            <img className={styles.img} src={LogoHeader} alt="Descripción de la imagen" />
            <div className={styles.menu}>
                {routes.map((route, index) => (
                    <Link to={route.path} key={index} className={styles.menuItem}>
                        {route.label}
                    </Link>
                ))}
                <div className={styles.drawerButton}>
                    <Burger opened={opened} onClick={open} />
                </div>
            </div>

            <Drawer
                offset={8}
                radius="md"
                opened={opened}
                onClose={close}
            >
                {routes.map((route, index) => (
                    <Link to={route.path} key={index} className={styles.menuItemDrawer}>
                        {route.label}
                    </Link>
                ))}
            </Drawer>
        </div>
    )
}

export default HeaderMenu