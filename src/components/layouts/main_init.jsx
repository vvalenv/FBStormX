import roof from "../../assets/icons/roof.png";
import door from "../../assets/icons/door.png";
import windowIcon from "../../assets/icons/window.png";
import construction from "../../assets/icons/construction.png";
import truck from "../../assets/icons/truck.png";
import glue from "../../assets/icons/glue.png";
//import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
//import ReCAPTCHA from "react-google-recaptcha";


export function Main() {
    //const navigate = useNavigate();
    //const navegaC = () => {
    //    navigate('/contact'); 
    //};
    const [origen] = useState(() => {
        if (typeof window === 'undefined' || typeof document === 'undefined') {
            return 'Directo / Desconocido';
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

        return 'Directo / Desconocido';
    });
        const [copiado, setCopiado] = useState(false);
        const manejarCopia = async () => {
            try {
            // Usamos la API nativa del navegador para copiar el texto
            await navigator.clipboard.writeText("(305) 519-1550");
            
            // Cambiamos el estado para dar feedback visual al usuario
            setCopiado(true);
            
            // Volvemos al estado inicial después de 2 segundos
            setTimeout(() => setCopiado(false), 2000);
            } catch (error) {
            console.error("Error al copiar al portapapeles:", error);
            alert("No se pudo copiar el texto automáticamente.");
            }
        };
    return (
        <div className="div_main">
            <section className="section1_main">
                <h1 className="title_main main-t">Small Home Problems Become Expensive Repairs When Ignored.</h1>
                <p className="subtitle_main">We help homeowners take care of the small maintenance tasks they've been putting off before they become costly problems.</p>
                <p className="subtitle_main aux">Fix the small thing today.</p>
                <div>
                    <p className="p-contact">Call us today!</p>
                    <button className="btn_schedule" onClick={manejarCopia}><FontAwesomeIcon icon={faPhone} /> (305) 519-1550</button>
                    {copiado && (
                        <div style={{
                        position: 'fixed',
                        top: '20px',
                        right: '20px',
                        backgroundColor: '#333',
                        color: '#fff',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
                        zIndex: 1000,
                        animation: 'fadeIn 0.3s ease-in-out',
                        fontSize: '14px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px'
                        }}>
                        <strong style={{ color: '#4CAF50' }}>¡Copiado con éxito!</strong>
                        <span style={{ 
                            fontSize: '12px', 
                            opacity: 0.8, 
                            maxWidth: '200px', 
                            whiteSpace: 'nowrap', 
                            overflow: 'hidden', 
                            textOverflow: 'ellipsis' 
                        }}>
                            (305) 519-1550
                        </span>
                        </div>
                    )}
                    <style>{`
                        @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(-10px); }
                        to { opacity: 1; transform: translateY(0); }
                        }
                    `}</style>
                </div>
            </section>
            <section className="section2_main">
                <div>
                    <h2 className="title_main secondary-t">Are Any of These Issues Familiar?</h2>
                    <ul>
                        <li><p className="elem-p">Door that doesn't close properly</p></li>
                        <li><p className="elem-p">Worn or cracked caulking</p></li>
                        <li><p className="elem-p">Windows that need attention</p></li>
                        <li><p className="elem-p">Small repairs you've been postponing</p></li>
                        <li><p className="elem-p">Cluttered garage, patio or storage area</p></li>
                        <li><p className="elem-p">Maintenance projects that never make it to the top of the list</p></li>
                    </ul>
                    <p className="p-subtext">Small issues don't stay small.</p>
                </div>
                <div className="main-contact">
                    <h1 className="title_main secondary-t">Schedule your free consultation</h1>
                    <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D3h00000679PE" method="POST" className="form-contact">
                        <input type="hidden" name="oid" value="00D3h00000679PE" />
                        <input type="hidden" name="retURL" value="https://fb-storm-x.vercel.app/" />
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
                            <label htmlFor="description">Service needed</label>
                            <textarea id="description" name="description"></textarea>
                        </div>
                        <input type="submit" name="submit" className="submit-contact" value="Send"/>
                    </form>
                </div>
            </section>
            <section className="section3_main">
                <h2 className="title_main secondary-t">One visit. Multiple problems solved.</h2>
                <p className="subtitle_main" id="aux-p">Instead of calling 5 contractors, we handle everything in one visit.</p>
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
                    <li><p className="elem-p">Practical solutions not (over-selling)</p></li>
                    <li><p className="elem-p">One visit multi-solution approach</p></li>
                    <li><p className="elem-p">Trusted local service</p></li>
                </ul>
                <div className="div-p-sec5">
                    <p className="subtitle-sec5">We recommend repair when repair makes sense</p>
                    <p className="p-sec5"><strong>Reliable Service:</strong> We show up and do the work properly.</p>
                    <p className="p-sec5"><strong>Practical Solutions:</strong> We focus on solving problems, not selling unnecessary projects.</p>
                    <p className="p-sec5"><strong>Local Experience:</strong> Serving South Florida homeowners.</p>
                </div>
            </section>
            <section className="section6_main">
                <h4 className="title_main secondary-t" id="last-title"> Let's Take Care of Those Small Problems Before They Become Bigger Ones</h4>
                <div className="d-sec6">
                    <p className="p-sec5">Don't wait until it becomes expensive.</p>
                    <p className="p-sec5">That small issue you are ignoring? We fix it in hours, not weeks.</p>
                    <p className="p-sec5">What you avoid today becomes tomorrow's cost.</p>
                </div>
            </section>
        </div>
    )
}