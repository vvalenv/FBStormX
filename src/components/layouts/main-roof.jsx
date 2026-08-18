import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Acordion, FrontPage } from "./UXcomponents";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

export function MainRoof() {
    const navigate = useNavigate();
    const navegaI = () => {
        window.scrollTo({
            top:0
        });
        navigate('/'); 
    };
    return (
        <>
            <FrontPage title={<>Minor Roof Repair and Leak Solutions in <span>South Florida</span></>}
                subtitle={<>A Small Roof Problem <span>Shouldn’t Become Major Damage</span></>} 
                desc="A ceiling stain or minor leak does not always mean you need a new roof. The source may be a localized issue
                    involving damaged shingles or tiles, deteriorated sealant, flashing, a roof penetration, fascia, or nearby area.
                    FB StormX evaluates the visible problem and recommends only the work that is appropriate and within our
                    authorized scope." 
                subDesc={<>We address limited, <span>localized repairs</span> — not full roof replacements or major roofing projects.</>}
                imgS="roof-repair-img" 
            />
            <section className="sec-service-desc">
                <div className="div-data-services">
                    <div>
                        <h2>Our Limited Minor Roof Repair Services</h2>
                        <p>Where legally permitted and no roofing contractor license or permit is required, services may include:</p>
                        <ul>
                            <li>Evaluation of small, accessible leaks.</li>
                            <li>Localized repair of specifically identified shingles or tiles.</li>
                            <li>Minor sealing around flashing or roof penetrations.</li>
                            <li>Limited fascia-related repairs.</li>
                            <li>Temporary weather-protection measures.</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Some details</h2>
                        <p>All work is subject to site conditions, local regulations, and confirmation of permit and licensing requirements.</p>
                        <p>If the problem requires work outside our scope, we will tell you directly instead of recommending a temporary
                            repair that is unlikely to last.</p>
                        <p>Projects must remain within FB StormX’s authorized scope and below a total value of $2,500.</p>
                    </div>
                    <div>
                        <h2>We do not perform:</h2>
                        <ul>
                            <li>Full roof replacements or re-roofing.</li>
                            <li>Major or structural roof repairs.</li>
                            <li>Roof decking or truss work.</li>
                            <li>Projects requiring a roofing contractor license or permit.</li>
                            <li>Engineering, code certification, or mold assessment.</li>
                            <li>Whole-roof restoration or waterproofing guarantees.</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Catch it before the next storm</h2>
                        <p>A loose tile or a small opening in the flashing is manageable in dry weather. The same opening during a storm can move a large amount of water into your home in a matter of hours. The window to fix it easily is now, not later.</p>
                    </div>
                </div>
                <h2 className="h2-FAQ">Frequently Asked Questions</h2>
                <article className="art-FAQ">
                    <Acordion title="There is a stain on my ceiling. Does that mean the roof is leaking?"
                    content="Not necessarily. Water may enter through the roof, flashing, a penetration, an exterior wall, a window, or
                        another nearby area before appearing on the ceiling. The likely source should be evaluated before
                        recommending a repair."
                    />
                    <Acordion title="Do you provide complete roof replacements?"
                    content="No. FB StormX provides only limited minor repairs that fall within our authorized scope.
                        Full replacements, major repairs, and work requiring a roofing contractor license or permit must be handled
                        by an appropriately licensed contractor."
                    />
                    <Acordion title="How quickly can you come?"
                    content="Response time depends on your location, weather conditions, and current availability. Contact us to request
                        the earliest available appointment."
                    />
                    <Acordion title="Looking for Minor Roof Leak Repair in South Florida?"
                    content="Send us your ZIP code and a photo or short video through WhatsApp for a quick, free initial evaluation.
                        Service is subject to inspection and confirmation that the work falls within our authorized scope."
                    />
                </article>
                <button className="btn_schedule btn_book" onClick={navegaI}>
                    <a><FontAwesomeIcon icon={faAddressBook}/> Book Your Free Consultation</a>
                </button>
            </section>
        </>
    )
}