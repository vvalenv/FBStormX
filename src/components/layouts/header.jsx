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
                    <li><a href="#" className="a_menu_links">Services</a></li>
                    <li><a href="#" className="a_menu_links">Why choose us</a></li>
                    <li><a href="#" className="a_menu_links">About us</a></li>
                    <li><a href="#" className="a_menu_links">Reviews</a></li>
                    <li><a href="#" className="a_menu_links">Contact</a></li>
                </ul>
            </nav>
            <FontAwesomeIcon icon={ faBars } alt="menu" onClick={toggleMenu} className={`menu-bars ${isOpen ? 'is-active' : ''}`}/>
        </header>
    )
}