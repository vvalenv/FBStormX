import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faShieldHalved} from '@fortawesome/free-solid-svg-icons';
import { faClock, faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
export function Footer() {
    return (
        <footer className='footer'>
            <div className="d-footer-info">
                <p className='p-footer'><FontAwesomeIcon icon={faLocationDot} style={{color: "#FB4E02",}} /> Proudly serving south florida</p>
                <p className="p-footer"><FontAwesomeIcon icon={faClock} style={{color: "#fb4e02",}}/> On-time services</p>
                <p className="p-footer"><FontAwesomeIcon icon={faCircleCheck} style={{color: "#fb4e02",}} /> Satisfaction guaranteed</p>
                <p className="p-footer"><FontAwesomeIcon icon={faShieldHalved} style={{color: "#fb4e02",}} /> Licensed and injured</p>
            </div>
            <div className='d-social'>
                <FontAwesomeIcon icon={faInstagram} style={{color: "#FB4E02",}} className='i-social' />
                <FontAwesomeIcon icon={faFacebook} style={{color: "#fb4e02",}} className='i-social' />
                <FontAwesomeIcon icon={faYoutube} style={{color: "#fb4e02",}} className='i-social' />
            </div>
        </footer>
    )
}