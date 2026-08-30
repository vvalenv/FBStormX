import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Acordion, BtnFreeConsultation, FrontPage, ScrollAnimate, Aside } from "./UXcomponents";
import { faEye, faClock, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import door from "../../assets/icons/door.png";
import expand_circle_up from "../../assets/icons/expand_circle_up.png";
import sun from "../../assets/icons/sun.png";
import design from "../../assets/icons/design.png";

export function MainDoorDecorative() {
    return (
        <>
            <FrontPage title={<>Decorative Glass Door Inserts in <span>South Florida</span></>}
                subtitle={<><span>Transform Your Entrance</span> Without Replacing the Entire Door</>} 
                desc="You may not need a brand-new door to give your entrance a completely new look.
                    A decorative glass insert can be installed into your existing compatible door, adding natural light, character,
                    and curb appeal without replacing the complete door and frame. In many cases, the installation can be
                    completed in a single visit, with no frame replacement or repainting required."
                subDesc={<><span>A faster, more affordable way</span> to transform your front entrance.</>}
                imgS="door-decorative-img" 
            />
            <section className="section3_main">
                <h2 className="h2-service">Decorative Glass Insert</h2>
                <div className="section3-container">
                    <div className="div-services">
                        <div className="elem-service">
                            <img src={expand_circle_up} alt="upgrade" className="elem-img"/>
                            <p className="elem-p-service">Upgrade your existing front door</p>
                        </div>
                        <div className="elem-service">
                            <img src={sun} alt="natural light" className="elem-img"/>
                            <p className="elem-p-service">Add natural light to your entryway</p>
                        </div>
                        <div className="elem-service">
                            <img src={design} alt="design" className="elem-img"/>
                            <p className="elem-p-service">Different designs and privacy levels</p>
                        </div>
                        <div className="elem-service">
                            <img src={door} alt="door" className="elem-img"/>
                            <p className="elem-p-service">Avoid the cost of replacing the door</p>
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
                        <h2>Why Choose a Decorative Glass Insert?</h2>
                        <ul>
                            <li className="li-data-service">Upgrade your existing front door.</li>
                            <li className="li-data-service">Add natural light to your entryway.</li>
                            <li className="li-data-service">Choose from different designs and privacy levels.</li>
                            <li className="li-data-service">Avoid the cost of replacing the entire door system.</li>
                            <li className="li-data-service">Minimize disruption to your home.</li>
                            <li className="li-data-service">Complete the installation in a single visit, when conditions allow.</li>
                        </ul>
                    </div>
                    <div className="elem-data-service">
                        <h2>Decorative glass door options</h2>
                        <p className="p-data-service">Designed Around Your Home. Decorative glass is available in a range of patterns, finishes, and privacy levels.</p>
                        <p className="p-data-service">Whether you prefer greater visibility, filtered light, or increased privacy, we can assist you in selecting an
                            option that complements your home.</p>
                        <p className="p-data-service">Before installation, we evaluate the door material, dimensions, condition, and compatibility with the selected
                            insert. All work is subject to applicable product, permit, and local building requirements.</p>
                    </div>
                    <div className="elem-data-service">
                        <h2>What to consider before choosing one</h2>
                        <ul>
                            <li className="li-data-service">Privacy level, since designs range from nearly clear to fully obscured.</li>
                            <li className="li-data-service">How much light you want in the entry.</li>
                            <li className="li-data-service">Matching the style to the rest of the front of the home.</li>
                            <li className="li-data-service">The size and material of your existing door.</li>
                        </ul>
                        <p className="fp-subdesc">Upgrade Your Door—Without Replacing It.</p>
                    </div>
                </div>
                
                <h2 className="h2-FAQ">Frequently Asked Questions</h2>
                <article className="art-FAQ">
                    <Acordion title={<><FontAwesomeIcon icon={faCircleQuestion} className="accordion-icon"/>Can a glass insert be installed in any door?</>}
                    content="Not every door is suitable. Compatibility depends on the door’s material, construction, dimensions, condition,
                        and applicable building requirements. We evaluate the existing door before confirming the installation."
                    />
                    <Acordion title={<><FontAwesomeIcon icon={faClock} className="accordion-icon"/>How long does installation take?</>}
                    content="Once the compatible insert has been selected and is ready for installation, the work can often be completed
                        during a single visit. Actual timing depends on the door and project conditions."
                    />
                    <Acordion title={<><FontAwesomeIcon icon={faEye} className="accordion-icon"/>Will I be able to see outside, or will the glass provide complete privacy?</>}
                    content="That depends on the glass you actually have. Options range from clearer designs with greater visibility to
                        textured or obscured glass that provides increased privacy while still allowing natural light inside."
                    />
                    <Acordion title={<><FontAwesomeIcon icon={faSearch} className="accordion-icon"/>Explore Decorative Glass Door Inserts in South Florida</>}
                    content="Send us your ZIP code and photos of your existing door through WhatsApp for a quick, free initial evaluation."
                    />
                    <BtnFreeConsultation />
                </article>
            </section>
        </>
    )
}