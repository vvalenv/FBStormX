import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Acordion, BtnFreeConsultation, FrontPage, ScrollAnimate, Aside } from "./UXcomponents";
import { faDoorClosed, faDroplet, faLock, faSearch } from "@fortawesome/free-solid-svg-icons";
import drop from "../../assets/icons/drop.png";
import door from "../../assets/icons/door.png";
import cleaning from "../../assets/icons/cleaning.png";
import lock from "../../assets/icons/lock.png";

export function MainDoorRepair() {
    return (
        <>
            <FrontPage title={<>Sliding Glass Door and Front Door Repair in <span>South Florida</span></>}
                subtitle={<>Your Door Shouldn’t Get Harder <span>to Use Every Day</span></>} 
                desc="A sliding glass door that feels heavy, sticks, makes noise, or no longer closes properly may not need to be
                replaced. In South Florida, salt air, humidity, moisture, and sand can accelerate wear on rollers, tracks, locks,
                and other door components. What begins as minor resistance can gradually make the door increasingly
                difficult to operate. FB StormX provides professional sliding glass door and front door repair services
                throughout South Florida. We inspect the problem and recommend only the repairs your door needs."
                subDesc={<>Restore smooth operation, and proper closing... <span>without replacing the entire door</span> unnecessarily.</>}
                imgS="door-repair-img" 
            />
            <section className="section3_main">
                <h2 className="h2-service">Sliding glass door repair</h2>
                <div className="section3-container">
                    <div className="div-services">
                        <div className="elem-service">
                            <img src={cleaning} alt="cleaning" className="elem-img"/>
                            <p className="elem-p-service">Track cleaning and correction</p>
                        </div>
                        <div className="elem-service">
                            <img src={lock} alt="lock" className="elem-img"/>
                            <p className="elem-p-service">Lock and handle</p>
                        </div>
                        <div className="elem-service">
                            <img src={door} alt="door" className="elem-img"/>
                            <p className="elem-p-service">Alignment and adjustment</p>
                        </div>
                        <div className="elem-service">
                            <img src={drop} alt="drop" className="elem-img"/>
                            <p className="elem-p-service">Water intrusion around the door</p>
                        </div>
                    </div>
                    <ScrollAnimate animationClass="fade-right">
                        <Aside />
                    </ScrollAnimate>
                </div>
            </section>
            
            <section className="sec-service-desc">
                <div className="div-data-services div-data-doorR">
                    <div className="elem-data-service">
                        <h2>Front door repair</h2>
                        <ul>
                            <li className="li-data-service">Roller inspection, adjustment, or replacement.</li>
                            <li className="li-data-service">Lock and handle repair or adjustment.</li>
                            <li className="li-data-service">Door alignment and strike plate adjustment.</li>
                            <li className="li-data-service">Weatherstripping and threshold sealing.</li>
                            <li className="li-data-service">Inspection of deteriorated caulking or seals.</li>
                            <li className="li-data-service">Evaluation of water intrusion around the door.</li>
                            <li className="li-data-service"><a href="/services/decorative-glass-door-inserts-south-florida">Decorative glass insert installation.</a></li>
                        </ul>
                    </div>
                    <div className="elem-data-service">
                        <h2>Why doors get harder to open in South Florida</h2>
                        <p className="p-data-service">Salt air, humidity and constant use wear down rollers and tracks faster here than in most of the country. Sand and debris build up in the track, the door starts dragging, and the rollers take more of the weight than they were designed to carry. Left alone long enough, the door can come off the track completely, and a simple repair turns into a much bigger job.</p>
                    </div>
                </div>
                <h2 className="h2-FAQ">Frequently Asked Questions</h2>
                <article className="art-FAQ">
                    <Acordion title={<><FontAwesomeIcon icon={faDoorClosed} className="accordion-icon"/>My Sliding Glass Door is extremely heavy. Does it need to be replaced?</>}
                     content="Not necessarily. Heavy or difficult movement is often caused by worn rollers, accumulated dirt or sand, track
                        damage, or poor alignment. We evaluate before recommending repair or replacement."
                    />
                    <Acordion title={<><FontAwesomeIcon icon={faLock} className="accordion-icon"/>Can you repair the Lock on my Front Door?</>}
                    content="In many cases, yes. The issue may involve the lock, handle, alignment, or the way the door meets the frame.
                        We inspect the affected components to determine whether they can be adjusted, repaired, or replaced."
                    />
                    <Acordion title={<><FontAwesomeIcon icon={faDroplet} className="accordion-icon"/>Water is coming in underneath my sliding glass door. Can you fix it?</>}
                    content="Water intrusion can result from deteriorated caulking or seals, blocked drainage openings, poor alignment,
                        track-related problems, or another nearby source. We evaluate the likely point of entry first and recommend
                        the appropriate corrective work."
                    />
                    <Acordion title={<><FontAwesomeIcon icon={faSearch} className="accordion-icon"/>Looking for Glass Door Repair in South Florida?</>}
                    content="Send us a photo or short video through WhatsApp for a quick, free initial evaluation."
                    />
                    <BtnFreeConsultation />
                </article>
            </section>
        </>
    )
}