import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Acordion, BtnFreeConsultation, FrontPage, ScrollAnimate, Aside } from "./UXcomponents";
import { faClock, faDroplet, faPeopleRoof, faSearch } from "@fortawesome/free-solid-svg-icons";
import drop from "../../assets/icons/drop.png";
import roof from "../../assets/icons/roof.png";
import tile from "../../assets/icons/tile.png";
import cloud_off from "../../assets/icons/cloud_off.png";


export function MainRoof() {
    return (
        <>
            <FrontPage title={<>Minor Roof Repair and Leak Solutions in <span>South Florida</span></>}
                subtitle={<>A Small Roof Problem <span>Shouldn’t Become Major Damage</span></>} 
                desc="A ceiling stain or minor leak does not always mean you need a new roof. The source may be a localized issue
                    involving damaged shingles or tiles, deteriorated sealant, flashing, a roof penetration, fascia, or nearby area.
                    FB StormX evaluates the visible problem and recommends only the work that is appropriate and within our
                    authorized scope." 
                subDesc={<>We address limited, <span>localized repairs</span> — not full roof replacements or major roofing projects.</>}
                imgS="roof-repair-img" 
            />
            <section className="section3_main">
                <h2 className="h2-service">Roof Repair Services</h2>
                    <div className="section3-container">
                        <div className="div-services">
                            <div className="elem-service">
                                <img src={drop} alt="leaks" className="elem-img"/>
                                <p className="elem-p-service">Evaluation of small, accessible leaks</p>
                            </div>
                            <div className="elem-service">
                                <img src={tile} alt="tiles" className="elem-img"/>
                                <p className="elem-p-service">Localized repair of shingles or tiles</p>
                            </div>
                            <div className="elem-service">
                                <img src={roof} alt="roof" className="elem-img"/>
                                <p className="elem-p-service">Limited fascia-related repairs</p>
                            </div>
                            <div className="elem-service">
                                <img src={cloud_off} alt="weather protection" className="elem-img"/>
                                <p className="elem-p-service">Temporary weather-protection measures</p>
                            </div>
                        </div>
                        <ScrollAnimate animationClass="fade-right">
                            <Aside />
                        </ScrollAnimate>
                    </div>
            </section>

            <section className="sec-service-desc">
                <div className="div-data-services div-data-window">
                    <div className="elem-data-service">
                        <h2>Some details</h2>
                        <p className="p-data-service">All work is subject to site conditions, local regulations, and confirmation of permit and licensing requirements.</p>
                        <p className="p-data-service">If the problem requires work outside our scope, we will tell you directly instead of recommending a temporary
                            repair that is unlikely to last.</p>
                        <p className="p-data-service">Projects must remain within FB StormX’s authorized scope and below a total value of $2,500.</p>
                    </div>
                    <div className="elem-data-service">
                        <h2>We do not perform:</h2>
                        <ul>
                            <li className="li-data-service">Full roof replacements or re-roofing.</li>
                            <li className="li-data-service">Major or structural roof repairs.</li>
                            <li className="li-data-service">Roof decking or truss work.</li>
                            <li className="li-data-service">Projects requiring a roofing contractor license or permit.</li>
                            <li className="li-data-service">Engineering, code certification, or mold assessment.</li>
                            <li className="li-data-service">Whole-roof restoration or waterproofing guarantees.</li>
                        </ul>
                    </div>
                    <div className="elem-data-service">
                        <h2>Catch it before the next storm</h2>
                        <p className="p-data-service">A loose tile or a small opening in the flashing is manageable in dry weather. The same opening during a storm can move a large amount of water into your home in a matter of hours. The window to fix it easily is now, not later.</p>
                    </div>
                </div>
                <h2 className="h2-FAQ">Frequently Asked Questions</h2>
                <article className="art-FAQ">
                    <Acordion title={<><FontAwesomeIcon icon={faDroplet} className="accordion-icon"/>There is a stain on my ceiling. Does that mean the roof is leaking?</>}
                    content="Not necessarily. Water may enter through the roof, flashing, a penetration, an exterior wall, a window, or
                        another nearby area before appearing on the ceiling. The likely source should be evaluated before
                        recommending a repair."
                    />
                    <Acordion title={<><FontAwesomeIcon icon={faPeopleRoof} className="accordion-icon"/>Do you provide complete roof replacements?</>}
                    content="No. FB StormX provides only limited minor repairs that fall within our authorized scope.
                        Full replacements, major repairs, and work requiring a roofing contractor license or permit must be handled
                        by an appropriately licensed contractor."
                    />
                    <Acordion title={<><FontAwesomeIcon icon={faClock} className="accordion-icon"/>How quickly can you come?</>}
                    content="Response time depends on your location, weather conditions, and current availability. Contact us to request
                        the earliest available appointment."
                    />
                    <Acordion title={<><FontAwesomeIcon icon={faSearch} className="accordion-icon"/>Looking for Minor Roof Leak Repair in South Florida?</>}
                    content="Send us your ZIP code and a photo or short video through WhatsApp for a quick, free initial evaluation.
                        Service is subject to inspection and confirmation that the work falls within our authorized scope."
                    />
                    <BtnFreeConsultation />
                </article>
            </section>
        </>
    )
}