import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Acordion, BtnFreeConsultation, FrontPage, ScrollAnimate, Aside } from "./UXcomponents";
import { faBan, faDollarSign, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import cleaning from "../../assets/icons/cleaning.png";
import truck from "../../assets/icons/truck.png";
import grass from "../../assets/icons/grass.png";
import package2 from "../../assets/icons/package.png";


export function MainJunk() {
    return (
        <>
            <FrontPage title={<>Junk Removal and Cleanouts in <span>South Florida</span></>}
                subtitle={<>Ready to Reclaim <span>Your Space?</span></>}
                desc="The garage you have been meaning to organize. The patio furniture that did not survive the last storm. The
                    boxes that have been sitting in storage for years. Unwanted items can accumulate quickly and make useful
                    areas of your home difficult to enjoy. FB StormX provides convenient junk removal and cleanout services
                    throughout South Florida, so you can clear the clutter without handling the heavy lifting yourself." 
                subDesc={<>Clear the Clutter. <span>Reclaim Your Space.</span></>}
                imgS="junk-removal-img" 
            />

            <section className="section3_main">
                <h2 className="h2-service">Junk Removal Services</h2>
                    <div className="section3-container">
                        <div className="div-services">
                            <div className="elem-service">
                                <img src={truck} alt="unwanted items" className="elem-img"/>
                                <p className="elem-p-service">Unwanted household items</p>
                            </div>
                            <div className="elem-service">
                                <img src={package2} alt="package" className="elem-img"/>
                                <p className="elem-p-service">Boxes and packaging materials</p>
                            </div>
                            <div className="elem-service">
                                <img src={grass} alt="yard" className="elem-img"/>
                                <p className="elem-p-service">Yard and storm-related debris</p>
                            </div>
                            <div className="elem-service">
                                <img src={cleaning} alt="cleanup" className="elem-img"/>
                                <p className="elem-p-service">Basic cleanup of the cleared area</p>
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
                        <h2>What's included</h2>
                        <ul>
                            <li className="li-data-service">Unwanted household items.</li>
                            <li className="li-data-service">Old patio furniture.</li>
                            <li className="li-data-service">Garage and storage clutter.</li>
                            <li className="li-data-service">Boxes and packaging materials.</li>
                            <li className="li-data-service">Yard and storm-related debris.</li>
                            <li className="li-data-service">Items left after minor home projects.</li>
                            <li className="li-data-service">Basic cleanup of the cleared area</li>
                        </ul>
                        <p>Removal is subject to the type, size, weight, volume, accessibility, and disposal requirements of the items.</p>
                    </div>
                    <div className="elem-data-service">
                        <h2>Add it to a visit you already have scheduled</h2>
                        <p className="p-data-service">When scheduling and capacity allow, we can take care of the repair and remove unwanted items during one
                            convenient visit.</p>
                        <p className="p-data-service">Already scheduling FB StormX for a home repair? Ask about adding junk removal to the same appointment.</p>
                        <p className="fp-subdesc">One Visit. More Accomplished.</p>
                    </div>
                </div>
                <h2 className="h2-FAQ">Frequently Asked Questions</h2>
                <article className="art-FAQ">
                    <Acordion title={<><FontAwesomeIcon icon={faCircleQuestion} className="accordion-icon"/>Do I need to move everything outside first?</>}
                    content="No. In most cases, our team can remove approved items from the garage, patio, storage area, or another
                        accessible location. Let us know in advance about stairs, narrow access points, large or heavy objects."
                    />
                    <Acordion title={<><FontAwesomeIcon icon={faBan} className="accordion-icon"/>Is there anything you cannot take?</>}
                    content="Yes. We do not remove hazardous, toxic, flammable, biological, or otherwise regulated materials. Certain
                        appliances, chemicals, paints, fuels, batteries, construction materials, and oversized items may also require
                        special handling or may not be accepted. Send us photos in advance so we can confirm what can be removed."
                    />
                    <Acordion title={<><FontAwesomeIcon icon={faDollarSign} className="accordion-icon"/>How is the service priced?</>}
                    content="Pricing is based on the volume, size, weight, accessibility, labor, and disposal requirements of the items."
                    />
                    <Acordion title={<><FontAwesomeIcon icon={faSearch} className="accordion-icon"/>Looking for Junk Removal in South Florida?</>}
                    content="Send us your ZIP code and a few photos through WhatsApp for a quick, free initial evaluation."
                    />
                    <BtnFreeConsultation />
                </article>
            </section>
        </>
    )
}