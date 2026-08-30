import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Acordion, FrontPage, Aside, ScrollAnimate, BtnFreeConsultation } from "./UXcomponents";
import { faCloudShowersHeavy, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { faHand } from "@fortawesome/free-solid-svg-icons";
import search from "../../assets/icons/search.png";
import cleaning from "../../assets/icons/cleaning.png";
import star from "../../assets/icons/star_shine.png";
import glue from "../../assets/icons/glue.png";

export function MainCaulking() {
    return (
        <>
            <FrontPage title={<>Caulking and Water Intrusion Prevention in <span>South Florida</span></>}
                subtitle={<>Caulking Is More Than a <span>Cosmetic Finish</span></>} 
                desc="Exterior caulking is an important line of defense against water intrusion. Even when a window or door is not
                broken, rainwater can enter through small cracks or gaps around the frame.
                Over time, South Florida’s heat, humidity, heavy rain, and strong sunlight can cause exterior caulking to crack,
                separate, or deteriorate. These small openings may allow moisture to enter the surrounding walls and cause
                damage that is not immediately visible. FB StormX provides professional caulking services in South Florida. We
                inspect the seal and recommend the repairs needed to protect your home." 
                subDesc={<>The best time <span>to renew deteriorated caulking</span> is before the rain — not after the stain appears.</>}
                imgS="caulking-img" 
            />
            <section className="section3_main">
                <h2 className="h2-service">Caulking Services</h2>
                    <div className="section3-container">
                        <div className="div-services">
                            <div className="elem-service">
                                <img src={search} alt="inspection" className="elem-img"/>
                                <p className="elem-p-service">Caulking around windows and doors</p>
                            </div>
                            <div className="elem-service">
                                <img src={cleaning} alt="cleaning" className="elem-img"/>
                                <p className="elem-p-service">Surface cleaning</p>
                            </div>
                            <div className="elem-service">
                                <img src={star} alt="new sealant" className="elem-img"/>
                                <p className="elem-p-service">New exterior-grade sealant</p>
                            </div>
                            <div className="elem-service">
                                <img src={glue} alt="sealing" className="elem-img"/>
                                <p className="elem-p-service">Sealing of visible gaps</p>
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
                        <h2>How water actually gets in</h2>
                        <p className="p-data-service">Most leaks don't start with a broken window. They start with a small gap around the frame, where the caulking has dried out, cracked or pulled away from the wall. Water finds that gap, works its way behind the surface, and shows up weeks later as a stain, a soft spot or mold.</p>
                    </div>
                    <div className="elem-data-service">
                        <h2>Signs your caulking has failed</h2>
                        <ul>
                            <li className="li-data-service">Cracked, shrunken or missing caulk around window and door frames.</li>
                            <li className="li-data-service">Water stains on the wall or sill after heavy rain.</li>
                            <li className="li-data-service">A draft you can feel near a closed window.</li>
                            <li className="li-data-service">Paint bubbling or peeling near a frame.</li>
                            <li className="li-data-service">A musty smell in a room that doesn't go away.</li>
                        </ul>
                    </div>
                    <div className="elem-data-service">
                        <h2>What our caulking service includes</h2>
                        <ul>
                            <li className="li-data-service">Inspection of caulking around windows and doors.</li>
                            <li className="li-data-service">Removal of deteriorated or loose caulking.</li>
                            <li className="li-data-service">Surface preparation and cleaning.</li>
                            <li className="li-data-service">Application of new exterior-grade sealant.</li>
                            <li className="li-data-service">Sealing of visible gaps and vulnerable areas.</li>
                            <li className="li-data-service">Evaluation of potential water-entry points.</li>
                        </ul>
                    </div>
                </div>                
                <h2 className="h2-FAQ">Frequently Asked Questions</h2>
                <article className="art-FAQ">
                    <Acordion title={<><FontAwesomeIcon icon={faQuestionCircle} className="accordion-icon"/>How often should exterior caulking be renewed?</>}
                    content="There is no single schedule for every home. Caulking should be inspected periodically and renewed when it
                        begins to crack, separate, shrink, or lose adhesion. Exposure to sun, heat, moisture, and movement can affect
                        how long it lasts."
                    />
                    <Acordion title={<><FontAwesomeIcon icon={faHand} className="accordion-icon"/>Will new caulking stop my window leak?</>}
                    content="It may, if deteriorated caulking or a gap around the frame is the source of the water intrusion. However, leaks
                        can also come from the window assembly, drainage system, surrounding wall, or an area above the window.
                        The source should be evaluated before recommending a repair."
                    />
                    <Acordion title={<><FontAwesomeIcon icon={faLayerGroup} className="accordion-icon"/>Can new caulking be applied over old caulking?</>}
                    content="Applying new caulking directly over deteriorated material is generally not the best solution. Loose or failed
                        caulking should usually be removed, and the surface should be cleaned and prepared so the new sealant can
                        adhere properly."
                    />
                    <Acordion title={<><FontAwesomeIcon icon={faCloudShowersHeavy} className="accordion-icon"/>Protect Your Home Before the Next Heavy Rain</>}
                    content="Not sure if the caulking around your windows or doors needs attention?
                        Send us a photo or short video through WhatsApp for a quick, free initial evaluation."
                    />
                    <BtnFreeConsultation />
                </article>
            </section>
        </>
    )
}