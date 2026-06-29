import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logos/LOGO_FBSTORMX-09.png";
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
    const [isOpen,setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    } 
    return (
        <header className="header">
            <img src={logo} alt="logo" className="logo" onClick={navegaI} />
            <nav className={`navbar ${isOpen ? 'menu-open' : ''}`}>
                <ul className="list_menu_links">
                    <li><a href="#" className="a_menu_links">Services</a></li>
                    <li><a href="#" className="a_menu_links">Why choose us</a></li>
                    <li><a onClick={navegaC} className="a_menu_links">Contact</a></li>
                    <li><a href="https://www.instagram.com/fbstormx/" className="a_menu_links"><FontAwesomeIcon icon={faInstagram} className='i-social' /></a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=61589730987278" className="a_menu_links"><FontAwesomeIcon icon={faFacebook} className='i-social' /></a></li>
                </ul>
            </nav>
            <FontAwesomeIcon icon={ faBars } alt="menu" onClick={toggleMenu} className={`menu-bars ${isOpen ? 'is-active' : ''}`}/>
        </header>
    )
}