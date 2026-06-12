import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logos/LOGO_FBSTORMX-09.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export function NavBar() {
    const [isOpen,setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    } 
    return (
        <header className="header">
            <img src={logo} alt="logo" className="logo" />
            <nav className={`navbar ${isOpen ? 'menu-open' : ''}`}>
                <ul className="list_menu_links">
                    <li><a href="#" className="a_menu_links">Servicios</a></li>
                    <li><a href="#" className="a_menu_links">Por qué elegirnos</a></li>
                    <li><a href="#" className="a_menu_links">Proyectos</a></li>
                    <li><a href="#" className="a_menu_links">Testimonios</a></li>
                    <li><a href="#" className="a_menu_links">Contacto</a></li>
                </ul>
            </nav>
            <FontAwesomeIcon icon={ faBars } alt="menu" onClick={toggleMenu} className={`menu-bars ${isOpen ? 'is-active' : ''}`}/>
        </header>
    )
}