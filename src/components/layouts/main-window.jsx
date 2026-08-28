import { Acordion, Aside, FrontPage, ScrollAnimate, BtnFreeConsultation } from "./UXcomponents";
import { useNavigate } from 'react-router-dom';
import windowIcon from "../../assets/icons/window.png";
import windowClosed from "../../assets/icons/window_closed.png";
import drop from "../../assets/icons/drop.png";
import construction from "../../assets/icons/construction.png";

export function MainWindow() {
    const navigate = useNavigate();
    const navegaI = () => {
        window.scrollTo({
            top: 0
        });
        navigate('/'); 
    };
    return (
        <>
            <FrontPage title={<>Window Repair and Adjustment in <span>South Florida</span></>}
                subtitle={<>Your Window May Not Need <span>To Be Replaced</span></>} 
                desc="A window that is difficult to open, does not close properly, or leaks during heavy rain does not always need to
                be replaced. The real problem may be a worn roller, a dirty or damaged track, deteriorated caulking, or a
                failed seal. In many cases, these issues can be corrected during a single service visit—saving you the cost and
                inconvenience of unnecessary replacement. At FB StormX, we evaluate the problem first and provide an
                honest recommendation based on what your window actually needs." 
                subDesc={<><span>Repair when possible.</span> Replace only when necessary.</>}
                imgS="window-repair-img" 
            />
            <section className="section3_main">
                    <h2 className="title_main secondary-t" id="h2-service">What our window repair service includes</h2>
                    <div className="section3-container">
                        <div className="div-services">
                            <div className="elem-service">
                                <img src={windowIcon} alt="window" className="elem-img"/>
                                <p className="elem-p-service">Window repair and adjustment</p>
                            </div>
                            <div className="elem-service">
                                <img src={windowClosed} alt="window closed" className="elem-img"/>
                                <p className="elem-p-service">Track and roller repair or replacement</p>
                            </div>
                            <div className="elem-service">
                                <img src={construction} alt="construction" className="elem-img"/>
                                <p className="elem-p-service">Seal and weatherstrip replacement</p>
                            </div>
                            <div className="elem-service">
                                <img src={drop} alt="drop" className="elem-img"/>
                                <p className="elem-p-service">Leak prevention and water intrusion inspection</p>
                            </div>
                        </div>
                    <ScrollAnimate animationClass="fade-right">
                        <Aside />
                    </ScrollAnimate>
                </div>
            </section>
            <section className="sec-service-desc">
                <div className="div-data-services">
                    <div>
                        <h2>Signs your window needs attention</h2>
                        <ul>
                            <li>It's hard to open, or it needs two hands to close.</li>
                            <li>Water appears on the sill or the floor after heavy rain.</li>
                            <li>You can feel air coming in with the window fully closed.</li>
                            <li>The lock no longer lines up the way it used to.</li>
                            <li>The track is full of sand, dirt or debris.</li>
                        </ul>
                    </div>
                    <div>
                        <h2>We repair first, and replace only if you really need it</h2>
                        <p>Most windows don't need to be replaced. In many South Florida homes the real problem is a worn roller, a dirty track or a failed seal, and all of those can be corrected in a single visit. We evaluate the window first and tell you honestly what it needs, even when the answer is that it needs very little.</p>
                    </div>
                    <div className="elem-data-service-center">
                        <h2>More done in one visit</h2>
                        <p>While we're at your home, we can take care of other repairs on your list too, from sliding glass doors to caulking around the frames. One visit, multiple repairs, problem solved.</p>
                    </div>
                </div>
                <h2 className="h2-FAQ">Frequently Asked Questions</h2>
                <article className="art-FAQ">
                    <Acordion title="How long does a window repair take?" content="Many common window repairs and adjustments can be completed during a single visit. The actual time
                        depends on the condition of the window and the parts or repairs required."/>
                    <Acordion title="My window leaks when it rains. Is the window or the exterior sealing causing the problem?"
                            content="Water intrusion may come from deteriorated caulking, failed seals, the window assembly, or even an area
                                above or surrounding the window. Our team evaluates the likely source before recommending the
                                appropriate solution." />
                    <Acordion title="Do you provide window repair services in my area?"
                            content="FB StormX serves homeowners throughout Miami-Dade, Broward, and Monroe counties.
                            Contact us with your ZIP code to confirm service availability in your area."/>
                    <Acordion title="Not Sure What Your Window Needs?"
                            content="Send us a photo or short video through WhatsApp for a quick, free initial evaluation."/>
                    <BtnFreeConsultation />
                </article>
            </section>
        </>
    );
}