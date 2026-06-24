import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faShieldHalved} from '@fortawesome/free-solid-svg-icons';
import { faClock, faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
export function Footer() {
    const irIg = () => window.location.href = "https://www.instagram.com/fbstormx/";
    const irFb = () => window.location.href = "https://www.facebook.com/profile.php?id=61589730987278";
    return (
        <footer className='footer'>
            <div className="d-footer-info">
                <p className='p-footer'><FontAwesomeIcon icon={faLocationDot} style={{color: "#fbfafa",}} /> Proudly serving South Florida</p>
                <p className="p-footer"><FontAwesomeIcon icon={faClock} style={{color: "#fbfafa",}}/> On-time services</p>
                <p className="p-footer"><FontAwesomeIcon icon={faCircleCheck} style={{color: "#fbfafa",}} /> Satisfaction guaranteed</p>
                <p className="p-footer"><FontAwesomeIcon icon={faShieldHalved} style={{color: "#fbfafa",}} /> Licensed and insured</p>
            </div>
            <div className='d-social'>
                <FontAwesomeIcon onClick={irIg} icon={faInstagram} style={{color: "#fbfafa",}} className='i-social' />
                <FontAwesomeIcon onClick={irFb} icon={faFacebook} style={{color: "#fbfafa",}} className='i-social' />
                <FontAwesomeIcon icon={faYoutube} style={{color: "#fbfafa",}} className='i-social' />
            </div>
        </footer>
    )
}