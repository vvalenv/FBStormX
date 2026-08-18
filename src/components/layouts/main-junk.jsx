import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Acordion, FrontPage } from "./UXcomponents";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

export function MainJunk() {
    const navigate = useNavigate();
    const navegaI = () => {
        window.scrollTo({
            top:0
        });
        navigate('/'); 
    };
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
            <section className="sec-service-desc">
                <div className="div-data-services">
                    <div>
                        <h2>What's included</h2>
                        <ul>
                            <li>Unwanted household items.</li>
                            <li>Old patio furniture.</li>
                            <li>Garage and storage clutter.</li>
                            <li>Boxes and packaging materials.</li>
                            <li>Yard and storm-related debris.</li>
                            <li>Items left after minor home projects.</li>
                            <li>Basic cleanup of the cleared area</li>
                        </ul>
                        <p>Removal is subject to the type, size, weight, volume, accessibility, and disposal requirements of the items.</p>
                    </div>
                    <div>
                        <h2>Add it to a visit you already have scheduled</h2>
                        <p>When scheduling and capacity allow, we can take care of the repair and remove unwanted items during one
                            convenient visit.</p>
                        <p>Already scheduling FB StormX for a home repair? Ask about adding junk removal to the same appointment.</p>
                        <p className="fp-subdesc">One Visit. More Accomplished.</p>
                    </div>
                </div>
                <h2 className="h2-FAQ">Frequently Asked Questions</h2>
                <article className="art-FAQ">
                    <Acordion title="Do I need to move everything outside first?"
                    content="No. In most cases, our team can remove approved items from the garage, patio, storage area, or another
                        accessible location. Let us know in advance about stairs, narrow access points, large or heavy objects."
                    />
                    <Acordion title="Is there anything you cannot take?"
                    content="Yes. We do not remove hazardous, toxic, flammable, biological, or otherwise regulated materials. Certain
                        appliances, chemicals, paints, fuels, batteries, construction materials, and oversized items may also require
                        special handling or may not be accepted. Send us photos in advance so we can confirm what can be removed."
                    />
                    <Acordion title="How is the service priced?"
                    content="Pricing is based on the volume, size, weight, accessibility, labor, and disposal requirements of the items."
                    />
                    <Acordion title="Looking for Junk Removal in South Florida?"
                    content="Send us your ZIP code and a few photos through WhatsApp for a quick, free initial evaluation."
                    />
                </article>
                <button className="btn_schedule btn_book" onClick={navegaI}>
                    <a><FontAwesomeIcon icon={faAddressBook}/> Book Your Free Consultation</a>
                </button>
            </section>
        </>
    )
}