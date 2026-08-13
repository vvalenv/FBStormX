import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faShieldHalved} from '@fortawesome/free-solid-svg-icons';
import { faClock, faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { GoogleMap } from './UXcomponents';
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
            <div className='middle-sec-footer'>
                <GoogleMap />
                <div className='areas-footer'>
                    <h3>Service areas</h3>
                    <h4>Serving homeowners across South Florida including</h4>
                    <div>
                        <ul>
                            <li>Doral</li>
                            <li>Hialeah</li>
                            <li>Miami Lakes</li>
                            <li>Kendall</li>
                            <li>Westchester</li>
                            <li>South Miami</li>
                            <li>Miami Springs</li>
                            <li>Sweetwater</li>
                            <li>Palmetto Bay</li>
                        </ul>
                        <ul>
                            <li>Cutler Bay</li>
                            <li>Homestead</li>
                            <li>Pembroke Pines</li>
                            <li>Miramar</li>
                            <li>Weston</li>
                            <li>Davie</li>
                            <li>Plantation</li>
                            <li>Hollywood</li>
                            <li>Fort Lauderdale</li>
                        </ul>
                    </div>
                </div>
                <div className='media-footer'>
                    <a href="https://www.instagram.com/fbstormx/" className='a-media-footer'>
                        <FontAwesomeIcon icon={faInstagram} className='i-media-footer' />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61589730987278" className='a-media-footer'>
                        <FontAwesomeIcon icon={faFacebook} className='i-media-footer'/>
                    </a>
                    <a href="https://www.youtube.com/@FBStormX/featured" className='a-media-footer'>
                        <FontAwesomeIcon icon={faYoutube} className='i-media-footer'/>
                    </a>
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