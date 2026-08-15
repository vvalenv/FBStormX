import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FrontPage } from "./UXcomponents";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

export function MainWindow() {
    const navigate = useNavigate();
    const navegaI = () => {
        window.scrollTo({
            top:0
        });
        navigate('/'); 
    };
    return (
        <>
            <FrontPage title="Window Repair and Adjustment in South Florida"
                subtitle="Your Window May Not Need to Be Replaced" 
                desc="A window that is difficult to open, does not close properly, or leaks during heavy rain does not always need to
                be replaced. The real problem may be a worn roller, a dirty or damaged track, deteriorated caulking, or a
                failed seal. In many cases, these issues can be corrected during a single service visit—saving you the cost and
                inconvenience of unnecessary replacement. At FB StormX, we evaluate the problem first and provide an
                honest recommendation based on what your window actually needs." 
                subDesc="Repair when possible. Replace only when necessary."
                imgS="window-repair-img" 
            />
            <section className="sec-service-desc">
                <h2>Signs your window needs attention</h2>
                <ul>
                    <li>It's hard to open, or it needs two hands to close.</li>
                    <li>Water appears on the sill or the floor after heavy rain.</li>
                    <li>You can feel air coming in with the window fully closed.</li>
                    <li>The lock no longer lines up the way it used to.</li>
                    <li>The track is full of sand, dirt or debris.</li>
                </ul>
                <h2>What our window repair service includes</h2>
                <ul>
                    <li>Window repair and adjustment.</li>
                    <li>Track and roller repair or replacement.</li>
                    <li>Seal and weatherstrip replacement.</li>
                    <li>Leak prevention and water intrusion inspection.</li>
                </ul>
                <h2>We repair first, and replace only if you really need it</h2>
                <p>Most windows don't need to be replaced. In many South Florida homes the real problem is a worn roller, a dirty track or a failed seal, and all of those can be corrected in a single visit. We evaluate the window first and tell you honestly what it needs, even when the answer is that it needs very little.</p>
                <h2>More done in one visit</h2>
                <p>While we're at your home, we can take care of other repairs on your list too, from sliding glass doors to caulking around the frames. One visit, multiple repairs, problem solved.</p>
                <h2>Frequently Asked Questions</h2>
                <ul className="ul-FAQ">
                    <li>How long does a window repair take?</li>
                    <p>Many common window repairs and adjustments can be completed during a single visit. The actual time
                        depends on the condition of the window and the parts or repairs required.</p>
                    <li>My window leaks when it rains. Is the window or the exterior sealing causing the problem?</li>
                    <p>Water intrusion may come from deteriorated caulking, failed seals, the window assembly, or even an area
                        above or surrounding the window. Our team evaluates the likely source before recommending the
                        appropriate solution.</p>
                    <li>Do you provide window repair services in my area?</li>
                    <p>FB StormX serves homeowners throughout Miami-Dade, Broward, and Monroe counties.
                        Contact us with your ZIP code to confirm service availability in your area.</p>
                    <li>Not Sure What Your Window Needs?</li>
                    <p>Send us a photo or short video through WhatsApp for a quick, free initial evaluation.</p>
                </ul>
                <button className="btn_schedule btn_book" onClick={navegaI}>
                    <a><FontAwesomeIcon icon={faAddressBook}/> Book Your Free Consultation</a>
                </button>
            </section>
        </>
    )
}