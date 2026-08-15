import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FrontPage } from "./UXcomponents";
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
            <FrontPage title="Junk Removal and Cleanouts in South Florida"
                subtitle="Ready to Reclaim Your Space?" 
                desc="The garage you have been meaning to organize. The patio furniture that did not survive the last storm. The
                    boxes that have been sitting in storage for years. Unwanted items can accumulate quickly and make useful
                    areas of your home difficult to enjoy. FB StormX provides convenient junk removal and cleanout services
                    throughout South Florida, so you can clear the clutter without handling the heavy lifting yourself." 
                subDesc="Clear the Clutter. Reclaim Your Space."
                imgS="junk-removal-img" 
            />
            <section className="sec-service-desc">
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
                <h2>Add it to a visit you already have scheduled</h2>
                <p>When scheduling and capacity allow, we can take care of the repair and remove unwanted items during one
                    convenient visit.</p>
                <p>Already scheduling FB StormX for a home repair? Ask about adding junk removal to the same appointment.</p>
                <p className="fp-subdesc">One Visit. More Accomplished.</p>
                <h2>Frequently Asked Questions</h2>
                <ul>
                    <li>Do I need to move everything outside first?</li>
                    <p>No. In most cases, our team can remove approved items from the garage, patio, storage area, or another
                        accessible location. Let us know in advance about stairs, narrow access points, large or heavy objects.</p>
                    <li>Is there anything you cannot take?</li>
                    <p>Yes. We do not remove hazardous, toxic, flammable, biological, or otherwise regulated materials. Certain
                        appliances, chemicals, paints, fuels, batteries, construction materials, and oversized items may also require
                        special handling or may not be accepted. Send us photos in advance so we can confirm what can be removed.</p>
                    <li>How is the service priced?</li>
                    <p>Pricing is based on the volume, size, weight, accessibility, labor, and disposal requirements of the items.</p>
                    <li>Looking for Junk Removal in South Florida?</li>
                    <p>Send us your ZIP code and a few photos through WhatsApp for a quick, free initial evaluation.</p>
                </ul>
                <button className="btn_schedule btn_book" onClick={navegaI}>
                    <a><FontAwesomeIcon icon={faAddressBook}/> Book Your Free Consultation</a>
                </button>
            </section>
        </>
    )
}