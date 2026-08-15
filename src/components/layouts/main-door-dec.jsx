import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FrontPage } from "./UXcomponents";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

export function MainDoorDecorative() {
    const navigate = useNavigate();
    const navegaI = () => {
        window.scrollTo({
            top:0
        });
        navigate('/'); 
    };
    return (
        <>
            <FrontPage title="Decorative Glass Door Inserts in South Florida"
                subtitle="Transform Your Entrance Without Replacing the Entire Door" 
                desc="You may not need a brand-new door to give your entrance a completely new look.
                    A decorative glass insert can be installed into your existing compatible door, adding natural light, character,
                    and curb appeal without replacing the complete door and frame. In many cases, the installation can be
                    completed in a single visit, with no frame replacement or repainting required."
                subDesc="A faster, more affordable way to transform your front entrance."
                imgS="door-decorative-img" 
            />
            <section className="sec-service-desc">
                <h2>Why Choose a Decorative Glass Insert?</h2>
                <ul>
                    <li>Upgrade your existing front door.</li>
                    <li>Add natural light to your entryway.</li>
                    <li>Choose from different designs and privacy levels.</li>
                    <li>Avoid the cost of replacing the entire door system.</li>
                    <li>Minimize disruption to your home.</li>
                    <li>Complete the installation in a single visit, when conditions allow.</li>
                </ul>
                <p>Designed Around Your Home. Decorative glass is available in a range of patterns, finishes, and privacy levels.</p>
                <p>Whether you prefer greater visibility, filtered light, or increased privacy, we can assist you in selecting an
                    option that complements your home.</p>
                <p>Before installation, we evaluate the door material, dimensions, condition, and compatibility with the selected
                    insert. All work is subject to applicable product, permit, and local building requirements.</p>
                <h2>What to consider before choosing one</h2>
                <ul>
                    <li>Privacy level, since designs range from nearly clear to fully obscured.</li>
                    <li>How much light you want in the entry.</li>
                    <li>Matching the style to the rest of the front of the home.</li>
                    <li>The size and material of your existing door.</li>
                </ul>
                <p className="fp-subdesc">Upgrade Your Door—Without Replacing It.</p>
                <h2>Frequently Asked Questions</h2>
                <ul>
                    <li>Can a glass insert be installed in any door?</li>
                    <p>Not every door is suitable. Compatibility depends on the door’s material, construction, dimensions, condition,
                        and applicable building requirements. We evaluate the existing door before confirming the installation.</p>
                    <li>How long does installation take?</li>
                    <p>Once the compatible insert has been selected and is ready for installation, the work can often be completed
                        during a single visit. Actual timing depends on the door and project conditions.</p>
                    <li>Will I be able to see outside, or will the glass provide complete privacy?</li>
                    <p>That depends on the glass you actually have. Options range from clearer designs with greater visibility to
                        textured or obscured glass that provides increased privacy while still allowing natural light inside.</p>
                    <li>Explore Decorative Glass Door Inserts in South Florida</li>
                    <p>Send us your ZIP code and photos of your existing door through WhatsApp for a quick, free initial evaluation.</p>
                </ul>
                <button className="btn_schedule btn_book" onClick={navegaI}>
                    <a><FontAwesomeIcon icon={faAddressBook}/> Book Your Free Consultation</a>
                </button>
            </section>
        </>
    )
}