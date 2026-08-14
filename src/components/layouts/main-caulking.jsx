import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FrontPage } from "./UXcomponents";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

export function MainCaulking() {
    const navigate = useNavigate();
    const navegaI = () => {
        window.scrollTo({
            top:0
        });
        navigate('/'); 
    };
    return (
        <>
            <FrontPage title="Caulking and Water Intrusion Prevention in South Florida"
                subtitle="Caulking Is More Than a Cosmetic Finish" 
                desc="Exterior caulking is an important line of defense against water intrusion. Even when a window or door is not
                broken, rainwater can enter through small cracks or gaps around the frame.
                Over time, South Florida’s heat, humidity, heavy rain, and strong sunlight can cause exterior caulking to crack,
                separate, or deteriorate. These small openings may allow moisture to enter the surrounding walls and cause
                damage that is not immediately visible. FB StormX provides professional caulking services in South Florida. We
                inspect the seal and recommend the repairs needed to protect your home." 
                subDesc="The best time to renew deteriorated caulking is before the rain — not after the stain appears."
                imgS="caulking-img" 
            />
            <section className="sec-service-desc">
                <h2>How water actually gets in</h2>
                <p>Most leaks don't start with a broken window. They start with a small gap around the frame, where the caulking has dried out, cracked or pulled away from the wall. Water finds that gap, works its way behind the surface, and shows up weeks later as a stain, a soft spot or mold.</p>
                <h2>Signs your caulking has failed</h2>
                <ul>
                    <li>Cracked, shrunken or missing caulk around window and door frames.</li>
                    <li>Water stains on the wall or sill after heavy rain.</li>
                    <li>A draft you can feel near a closed window.</li>
                    <li>Paint bubbling or peeling near a frame.</li>
                    <li>A musty smell in a room that doesn't go away.</li>
                </ul>
                <h2>What our caulking service includes</h2>
                <ul>
                    <li>Inspection of caulking around windows and doors.</li>
                    <li>Removal of deteriorated or loose caulking.</li>
                    <li>Surface preparation and cleaning.</li>
                    <li>Application of new exterior-grade sealant.</li>
                    <li>Sealing of visible gaps and vulnerable areas.</li>
                    <li>Evaluation of potential water-entry points.</li>
                </ul>                
                <h2>Frequently Asked Questions</h2>
                <ul>
                    <li>How often should exterior caulking be renewed?</li>
                    <p>There is no single schedule for every home. Caulking should be inspected periodically and renewed when it
                        begins to crack, separate, shrink, or lose adhesion. Exposure to sun, heat, moisture, and movement can affect
                        how long it lasts.</p>
                    <li>Will new caulking stop my window leak?</li>
                    <p>It may, if deteriorated caulking or a gap around the frame is the source of the water intrusion. However, leaks
                        can also come from the window assembly, drainage system, surrounding wall, or an area above the window.
                        The source should be evaluated before recommending a repair.</p>
                    <li>Can new caulking be applied over old caulking?</li>
                    <p>Applying new caulking directly over deteriorated material is generally not the best solution. Loose or failed
                        caulking should usually be removed, and the surface should be cleaned and prepared so the new sealant can
                        adhere properly.</p>
                    <li>Protect Your Home Before the Next Heavy Rain</li>
                    <p>Not sure if the caulking around your windows or doors needs attention?
                        Send us a photo or short video through WhatsApp for a quick, free initial evaluation.</p>
                </ul>
                <button className="btn_schedule btn_book" onClick={navegaI}>
                    <a><FontAwesomeIcon icon={faAddressBook}/> Book Your Free Consultation</a>
                </button>
            </section>
        </>
    )
}