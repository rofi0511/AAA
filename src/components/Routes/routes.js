import Home from "../views/Home/Home";
import Proyectos from "../views/Proyectos/Proyectos";
import Contactos from "../views/Contacto/Contactos";
import Trabajos from "../views/Trabajos/Trabajos";
import Servicios from "../views/Servicios/Servicios";

export const routes = [
    { path: '/', component: Home, label: 'Inicio' },
    { path: '/trabajos', component: Trabajos, label: 'Trabajos' },
    { path: '/proyectos', component: Proyectos, label: 'Proyectos' },
    { path: '/servicios', component: Servicios, label: 'Servicios' },
    { path: '/contactos', component: Contactos, label: 'Contacto' },
];