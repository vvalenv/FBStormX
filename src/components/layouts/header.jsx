import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logos/LOGO_FBSTORMX-22.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'
export function NavBar() {
    const [isOpen,setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    const submenubtn = document.querySelectorAll(".submenu-btn");
    for (let i=0; i<submenubtn.length; i++) {
        submenubtn[i].addEventListener("click", function() {
            if (window.innerWidth < 800) {
                const submenu = this.nextElementSibling;    
                const height_submenu = submenu.scrollHeight;    
                if (submenu.classList.contains("desplegar_submenu")){ 
                    submenu.classList.remove("desplegar_submenu");
                    submenu.removeAttribute("style");
                } else {
                    submenu.classList.add("desplegar_submenu");
                    submenu.style.height = height_submenu + "px";
                }   
            }
        });
    }
    
    return (
        <header className="header">
            <img src={logo} alt="logo" className="logo" />
            <nav className={`navbar ${isOpen ? 'menu-open' : ''}`}>
                <ul className="list_menu_links">
                    <li><Link to="/" className="a_menu_links">Home</Link></li>
                    <li className="links-li container-submenu">
                        <a className="a_menu_links submenu-btn">Services</a>
                        <ul className="submenu">
                            <li><Link to="/services/window-repair-south-florida" className="a_menu_links sub_a_menu_links">Window Repair</Link></li>
                            <li><Link to="/services/sliding-front-door-repair-south-florida" className="a_menu_links sub_a_menu_links">Glass Door Repair</Link></li>
                            <li><Link to="/services/caulking-water-intrusion-south-florida" className="a_menu_links sub_a_menu_links">Caulking Services</Link></li>
                            <li><Link to="/services/roof-repair-south-florida" className="a_menu_links sub_a_menu_links">Roof Leak Repair</Link></li>
                            <li><Link to="/services/junk-removal-south-florida" className="a_menu_links sub_a_menu_links">Junk Removal</Link></li>
                            <li><Link to="/services/decorative-glass-door-inserts-south-florida" className="a_menu_links sub_a_menu_links">Glass Door Inserts</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/us" className="a_menu_links">Why choose us</Link></li>
                    <li><Link to="/contact" className="a_menu_links">Contact</Link></li>
                    <li><a href="https://www.instagram.com/fbstormx/" className="a_menu_links"><FontAwesomeIcon icon={faInstagram} className='i-social' /></a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=61589730987278" className="a_menu_links"><FontAwesomeIcon icon={faFacebook} className='i-social' /></a></li>
                </ul>
            </nav>
            <FontAwesomeIcon icon={ faBars } alt="menu" onClick={toggleMenu} className={`menu-bars ${isOpen ? 'is-active' : ''}`}/>
        </header>
    )
}