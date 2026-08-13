import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faShieldHalved} from '@fortawesome/free-solid-svg-icons';
import { faClock, faCircleCheck } from '@fortawesome/free-regular-svg-icons';
export function Footer() {
    return (
        <footer className='footer'>
            <div className="d-footer-icons">
                <div className="d-elem-footer">
                    <FontAwesomeIcon icon={faLocationDot} style={{color: "#fbfafa",}} className='icon-footer'/>
                    <p className='p-footer'>South Florida</p>
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
            </div>
            <div className='footer-rights'>
                <hr />
                <address>© Copyright2026 All Rights Reserved</address>
                <p>View our <a href="/privacy-policy">Privacy Policy</a> and <a href="/sms-terms"> Terms &amp;Conditions</a>.</p>
            </div>
        </footer>
    )
}