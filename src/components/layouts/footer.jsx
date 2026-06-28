import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faShieldHalved} from '@fortawesome/free-solid-svg-icons';
import { faClock, faCircleCheck } from '@fortawesome/free-regular-svg-icons';
// import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
export function Footer() {
    //const irIg = () => window.location.href = "https://www.instagram.com/fbstormx/";
    //const irFb = () => window.location.href = "https://www.facebook.com/profile.php?id=61589730987278";
    return (
        <footer className='footer'>
            <div className="d-elem-footer">
                <FontAwesomeIcon icon={faLocationDot} style={{color: "#fbfafa",}} className='icon-footer'/>
                <p className='p-footer'> Proudly serving South Florida</p>
            </div>
            <div className="d-elem-footer">
                <FontAwesomeIcon icon={faClock} style={{color: "#fbfafa",}} className='icon-footer'/>
                <p className="p-footer"> On-time services</p>
            </div>
            <div className="d-elem-footer">
                <FontAwesomeIcon icon={faCircleCheck} style={{color: "#fbfafa",}} className='icon-footer'/>
                <p className="p-footer"> Satisfaction guaranteed</p>
            </div>
            <div className="d-elem-footer">
                <FontAwesomeIcon icon={faShieldHalved} style={{color: "#fbfafa",}} className='icon-footer'/>
                <p className="p-footer"> Licensed and insured</p>
            </div>
        </footer>
    )
}