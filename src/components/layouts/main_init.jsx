import roof from "../../assets/icons/roof.png";
import door from "../../assets/icons/door.png";
import windowIcon from "../../assets/icons/window.png";
import construction from "../../assets/icons/construction.png";
import truck from "../../assets/icons/truck.png";
import glue from "../../assets/icons/glue.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import Card from "./UXcomponents";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
//import ReCAPTCHA from "react-google-recaptcha";


export function Main() {
    const numeroTelefono = "3055191550";
    const [origen] = useState(() => {
        if (typeof window === 'undefined' || typeof document === 'undefined') {
            return 'Website';
        }
        // 1. Primero intentamos leer el localStorage por si el usuario ya estuvo navegando
        const origenGuardado = localStorage.getItem('origen_marketing');
        if (origenGuardado) {
            return origenGuardado;
        }
        // 2. Por las dudas, si entró DIRECTAMENTE a esta sección desde Instagram con el UTM, lo leemos de la URL
        const params = new URLSearchParams(window.location.search);
        const utmSource = params.get('utm_source');
        if (utmSource) {
            localStorage.setItem('origen_marketing', utmSource); // Lo guardamos para el futuro
            console.log(utmSource);
            return utmSource;
        }   

        return 'Website';
    });
    return (
        <div className="div_main">
            <section className="section1_main">
                <div>
                    <h1 className="title_main main-t">Small Home Problems Become Expensive Repairs <span> When Ignored.</span></h1>
                    <h2 className="subtitle_main">We assist homeowners with<span> the small home repair tasks </span>
                        they&#39;ve been putting off before<span> they become expensive problems.</span></h2>
                    <h3 className="subtitle_main aux">Fix the small things today.</h3>
                    <p className="p-contact">Call us now!</p>
                    <div className="d-aux-btn">
                        <button className="btn_schedule">
                            <a href={`tel:${numeroTelefono}`}><FontAwesomeIcon icon={faPhone} /> (305) 519-1550</a>
                        </button>
                        <Link to="/services" className="btn_schedule" id="btn_services">
                            <span><FontAwesomeIcon icon={faScrewdriverWrench} /> View our services</span>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="main-contact">
                        <h1 className="title_main secondary-t">Schedule your free consultation</h1>
                        <form action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DO100000NtNmm" method="POST" className="form-contact">
                            <input type="hidden" name="oid" value="00D3h00000679PE" />
                            <input type="hidden" name="retURL" value="fbstormx.com" />
                            <input type="hidden" name="00NPj000005ezLF" value="WebForm" />
                            <input type="hidden" name="assignmentRuleId" value="01QPj0000045J9N" />
                            <input type="hidden" id="lead_source" name="lead_source" value="Digital Marketing" />
                            <input type="hidden" id="00N3h00000G85zg" name="00N3h00000G85zg" value={origen} />

                            <div className="form-group">
                                <label htmlFor="first_name">*First Name</label>
                                <input  id="first_name" maxLength="40" name="first_name" size="20" type="text" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="last_name">Last Name</label>
                                <input  id="last_name" maxLength="80" name="last_name" size="20" type="text" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">*Phone</label>
                                <input  id="phone" maxLength="40" name="phone" size="20" type="text" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">*Email</label>
                                <input  id="email" maxLength="80" name="email" size="20" type="text" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="zip">*Zip</label>
                                <input  id="zip" maxLength="20" name="zip" size="20" type="text" />
                            </div>
                            <div className="form-group d-textarea">
                                <label htmlFor="description">Service request</label>
                                <textarea id="description" name="description"></textarea>
                            </div>
                            <div className="form-group-checkbox">
                                <label htmlFor="00NPj000005tyVM" className="p-subtext-terms">By checking this box, I agree to receive customer care and informational text messages from FB StormX at the mobile number provided, including responses to inquiries, appointment confirmations and reminders, scheduling updates, service notifications, estimates, and customer support messages. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase. 
                                    I have read and agree to the <Link to="/privacy-policy">Privacy Policy</Link> and <Link to="/sms-terms">Terms &amp; Conditions</Link>.</label>
                                <input  id="00NPj000005tyVM" name="00NPj000005tyVM" type="checkbox" value="1" />
                            </div>
                            <div className="form-group-checkbox">
                                <label htmlFor="00NPj000005tyVL" className="p-subtext-terms">By checking this box, I agree to receive recurring marketing and promotional text messages from FB StormX at the mobile number provided, including information about services, special offers, and promotions. Messages may be sent using automated technology. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help. 
                                    Consent is not a condition of purchase. I have read and agree to the <Link to="/privacy-policy">Privacy Policy</Link> and <Link to="/sms-terms">Terms &amp; Conditions</Link>.</label>
                                <input  id="00NPj000005tyVL" name="00NPj000005tyVL" type="checkbox" value="1" />
                            </div>
                            <input type="submit" name="submit" className="submit-contact" value="Send"/>
                        </form>
                    </div>
                </div>
                <div className="iconW-d">
                    <a href="https://wa.me/13055191550"><FontAwesomeIcon icon={faWhatsapp} className="iconW"/></a>
                </div>
            </section>
            <section className="section4_main">
                <h2 className="title_main secondary-t">All your minor home repairs, solved in one place</h2>
                <div className="div-cards">
                    <Card nombre="Minor Roof Repairs" img="roof.png" ir='/services/roof-repair-south-florida'/>
                    <Card nombre="Door Repair Services" img="door.png" ir='/services/sliding-front-door-repair-south-florida'/>
                    <Card nombre="Window Repair Services" img="window.png" ir='/services/window-repair-south-florida'/>
                    <Card nombre="Caulking Services" img="caulking.png" ir='/services/caulking-water-intrusion-south-florida'/>
                    <Card nombre="Home & Storage Clean-Outs" img="junk.png" ir='/services/junk-removal-south-florida'/>
                    <Card nombre="Decorative Glass Doors" img="door1.jpg" ir='/services/decorative-glass-door-inserts-south-florida'/>
                </div>
            </section>
            <section className="section2_main">
                <h2 className="title_main secondary-t">Are Any of These Issues Familiar?</h2>
                <ul>
                    <li><p className="elem-p">Door that doesn't close properly</p></li>
                    <li><p className="elem-p">Windows that need attention</p></li>
                    <li><p className="elem-p">Worn or cracked caulking</p></li>
                    <li><p className="elem-p">Roof repairs that can&#39;t wait until the next storm</p></li>
                    <li><p className="elem-p">Cluttered garage, patio or storage area</p></li>
                    <li><p className="elem-p">Home repair projects that never make it to the top of your list</p></li>
                </ul>
            </section>
            <section className="section3_main">
                <h2 className="title_main secondary-t">One visit. Multiple problems solved.</h2>
                <h3 className="subtitle_main" id="aux-p">Instead of calling 6 contractors, we handle everything in one visit.</h3>
                <div className="div-services">
                    <div className="elem-service">
                        <img src={roof} alt="roof" className="elem-img"/>
                        <p className="elem-p-service">Small roof repairs</p>
                    </div>
                    <div className="elem-service">
                        <img src={door} alt="door" className="elem-img"/>
                        <p className="elem-p-service">Door Adjustments</p>
                    </div>
                    <div className="elem-service">
                        <img src={windowIcon} alt="window" className="elem-img"/>
                        <p className="elem-p-service">Window & Door Cleaning</p>
                    </div>
                    <div className="elem-service">
                        <img src={glue} alt="glue" className="elem-img"/>
                        <p className="elem-p-service">Caulking Services</p>
                    </div>
                    <div className="elem-service">
                        <img src={construction} alt="construction" className="elem-img"/>
                        <p className="elem-p-service">Minor Repairs</p>
                    </div>
                    <div className="elem-service">
                        <img src={truck} alt="truck" className="elem-img"/>
                        <p className="elem-p-service">Junk Removal</p>
                    </div>
                </div>
            </section>
            <section className="section5_main"> 
                <h3 className="title_main secondary-t">Why homeowners choose FB STORMX</h3>
                <ul>
                    <li><p className="elem-p">Fast response</p></li>
                    <li><p className="elem-p">Practical Solutions. Honest Recommendations</p></li>
                    <li><p className="elem-p">One visit multi-solution approach</p></li>
                    <li><p className="elem-p">Trusted local service</p></li>
                </ul>
                
            </section>
            <section className="section6_main">
                <h3 className="title_main secondary-t" id="last-title"> Let's Take Care of Those Small Problems Before,<span> They Become Bigger Ones</span></h3>
                <div className="d-sec6">
                    <p className="p-sec5">Don't wait until it becomes expensive.</p>
                    <p className="p-sec5">That small issue you are ignoring? We fix it in hours, not weeks.</p>
                    <p className="p-sec5">What you avoid today becomes tomorrow's cost.</p>
                </div>
            </section>
        </div>
    )
}