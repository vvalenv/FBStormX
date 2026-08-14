import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logos/LOGO_FBSTORMX-22.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
export function NavBar() {
    const navigate = useNavigate();
    const navegaI = () => {
        navigate('/'); 
    };
    const navegaC = () => {
        navigate('/contact'); 
    };
    const navegaW = () => {
        navigate('/us');
    }
    const navegaServiceWindow = () => {
        navigate('/services/window-repair-south-florida');
    }
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
            <img src={logo} alt="logo" className="logo" onClick={navegaI} />
            <nav className={`navbar ${isOpen ? 'menu-open' : ''}`}>
                <ul className="list_menu_links">
                    <li><a onClick={navegaI} className="a_menu_links">Home</a></li>
                    <li className="links-li container-submenu">
                        <a className="a_menu_links submenu-btn">Services</a>
                        <ul className="submenu">
                            <li><a onClick={navegaServiceWindow} className="a_menu_links sub_a_menu_links">Window Repair</a></li>
                            <li><a className="a_menu_links sub_a_menu_links">Glass Door Repair</a></li>
                            <li><a className="a_menu_links sub_a_menu_links">Caulking Services</a></li>
                            <li><a className="a_menu_links sub_a_menu_links">Roof Leak Repair</a></li>
                            <li><a className="a_menu_links sub_a_menu_links">Junk Removal</a></li>
                            <li><a className="a_menu_links sub_a_menu_links">Glass Door Inserts</a></li>
                        </ul>
                    </li>
                    <li><a onClick={navegaW} className="a_menu_links">Why choose us</a></li>
                    <li><a onClick={navegaC} className="a_menu_links">Contact</a></li>
                    <li><a href="https://www.instagram.com/fbstormx/" className="a_menu_links"><FontAwesomeIcon icon={faInstagram} className='i-social' /></a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=61589730987278" className="a_menu_links"><FontAwesomeIcon icon={faFacebook} className='i-social' /></a></li>
                </ul>
            </nav>
            <FontAwesomeIcon icon={ faBars } alt="menu" onClick={toggleMenu} className={`menu-bars ${isOpen ? 'is-active' : ''}`}/>
        </header>
    )
}