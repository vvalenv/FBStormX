import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FrontPage } from "./UXcomponents";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

export function MainDoorRepair() {
    const navigate = useNavigate();
    const navegaI = () => {
        window.scrollTo({
            top:0
        });
        navigate('/'); 
    };
    return (
        <>
            <FrontPage title="Sliding Glass Door and Front Door Repair in South Florida"
                subtitle="Your Door Shouldn’t Get Harder to Use Every Day" 
                desc="A sliding glass door that feels heavy, sticks, makes noise, or no longer closes properly may not need to be
                replaced. In South Florida, salt air, humidity, moisture, and sand can accelerate wear on rollers, tracks, locks,
                and other door components. What begins as minor resistance can gradually make the door increasingly
                difficult to operate. FB StormX provides professional sliding glass door and front door repair services
                throughout South Florida. We inspect the problem and recommend only the repairs your door needs."
                subDesc="Restore smooth operation, and proper closing... without replacing the entire door unnecessarily."
                imgS="door-repair-img" 
            />
            <section className="sec-service-desc">
                <h2>Sliding glass door repair</h2>
                <ul>
                    <li>Roller inspection, adjustment, or replacement.</li>
                    <li>Track cleaning and correction.</li>
                    <li>Lock and handle repair.</li>
                    <li>Door alignment and adjustment.</li>
                    <li>Inspection of deteriorated caulking or seals.</li>
                    <li>Evaluation of water intrusion around the door.</li>
                </ul>
                <h2>Front door repair</h2>
                <ul>
                    <li>Lock and handle repair or adjustment.</li>
                    <li>Door alignment and strike plate adjustment.</li>
                    <li>Weatherstripping and threshold sealing.</li>
                    <li><a href="/services/decorative-glass-door-inserts-south-florida">Decorative glass insert installation.</a></li>
                </ul>
                <h2>Why doors get harder to open in South Florida</h2>
                <p>Salt air, humidity and constant use wear down rollers and tracks faster here than in most of the country. Sand and debris build up in the track, the door starts dragging, and the rollers take more of the weight than they were designed to carry. Left alone long enough, the door can come off the track completely, and a simple repair turns into a much bigger job.</p>
                <h2>Frequently Asked Questions</h2>
                <ul className="ul-FAQ">
                    <li>My Sliding Glass Door is extremely heavy. Does it need to be replaced?</li>
                    <p>Not necessarily. Heavy or difficult movement is often caused by worn rollers, accumulated dirt or sand, track
                        damage, or poor alignment. We evaluate before recommending repair or replacement.</p>
                    <li>Can you repair the Lock on my Front Door?</li>
                    <p>In many cases, yes. The issue may involve the lock, handle, alignment, or the way the door meets the frame.
                        We inspect the affected components to determine whether they can be adjusted, repaired, or replaced.</p>
                    <li>Water is coming in underneath my sliding glass door. Can you fix it?</li>
                    <p>Water intrusion can result from deteriorated caulking or seals, blocked drainage openings, poor alignment,
                        track-related problems, or another nearby source. We evaluate the likely point of entry first and recommend
                        the appropriate corrective work.</p>
                    <li>Looking for Glass Door Repair in South Florida?</li>
                    <p>Send us a photo or short video through WhatsApp for a quick, free initial evaluation.</p>
                </ul>
                <button className="btn_schedule btn_book" onClick={navegaI}>
                    <a><FontAwesomeIcon icon={faAddressBook}/> Book Your Free Consultation</a>
                </button>
            </section>
        </>
    )
}