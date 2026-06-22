import { Boton } from "./UX-components";
import roof from "../../assets/icons/roof.png";
import door from "../../assets/icons/door.png";
import windowIcon from "../../assets/icons/window.png";
import construction from "../../assets/icons/construction.png";
import truck from "../../assets/icons/truck.png";
import glue from "../../assets/icons/glue.png";
import { useNavigate } from 'react-router-dom';


export function Main() {
    const navigate = useNavigate();
    const navegaC = () => {
        navigate('/contact'); 
    };
    return (
        <div className="div_main">
            <section className="section1_main">
                <h1 className="title_main main-t">Small Home Problems Become Expensive Repairs When Ignored.</h1>
                <p className="subtitle_main">We help homeowners take care of the small maintenance tasks they've been putting off before they become costly problems.</p>
                <p className="subtitle_main aux">Fix the small thing today.</p>
                <div>
                    <Boton contact={navegaC} iconPhone={false} title="Schedule a Free Evaluation"/>
                    <div>
                        <p className="p-contact">Call us today!</p>
                        <Boton iconPhone={true} title=" (954) 980-1010"/>
                    </div>
                </div>
            </section>
            <section className="section2_main">
                <h2 className="title_main secondary-t">Are Any of These Issues Familiar?</h2>
                <ul>
                    <li><p className="elem-p">Door that doesn't close properly</p></li>
                    <li><p className="elem-p">Worn or cracked caulking</p></li>
                    <li><p className="elem-p">Windows that need attention</p></li>
                    <li><p className="elem-p">Small repairs you've been postponing</p></li>
                    <li><p className="elem-p">Cluttered garage, patio or storage area</p></li>
                    <li><p className="elem-p">Maintenance projects that never make it to the top of the list</p></li>
                </ul>
                <p className="p-subtext">Small issues don't stay small.</p>
            </section>
            <section className="section3_main">
                <h2 className="title_main secondary-t">One visit. Multiple problems solved.</h2>
                <p className="subtitle_main" id="aux-p">Instead of calling 5 contractors, we handle everything in one visit.</p>
                <div className="div-services">
                    <div className="elem-service">
                        <img src={roof} alt="roof" className="elem-img"/>
                        <p className="elem-p-service">Small roof repairs</p>
                    </div>
                    <div className="elem-service">
                        <img src={door} alt="door" className="elem-img"/>
                        <p className="elem-p-service">Door Adjustments</p>
                    </div>
                    <div className="elem-service">
                        <img src={windowIcon} alt="window" className="elem-img"/>
                        <p className="elem-p-service">Window & Door Cleaning</p>
                    </div>
                    <div className="elem-service">
                        <img src={glue} alt="glue" className="elem-img"/>
                        <p className="elem-p-service">Caulking Services</p>
                    </div>
                    <div className="elem-service">
                        <img src={construction} alt="construction" className="elem-img"/>
                        <p className="elem-p-service">Minor Repairs</p>
                    </div>
                    <div className="elem-service">
                        <img src={truck} alt="truck" className="elem-img"/>
                        <p className="elem-p-service">Junk Removal</p>
                    </div>
                </div>
            </section>
            <section className="section5_main"> 
                <h3 className="title_main secondary-t">Why homeowners choose FB STORMX</h3>
                <ul>
                    <li><p className="elem-p">Fast response</p></li>
                    <li><p className="elem-p">Practical solutions not (over-selling)</p></li>
                    <li><p className="elem-p">One visit multi-solution approach</p></li>
                    <li><p className="elem-p">Trusted local service</p></li>
                </ul>
                <div className="div-p-sec5">
                    <p className="subtitle-sec5">We recommend repair when repair makes sense</p>
                    <p className="p-sec5"><strong>Reliable Service:</strong> We show up and do the work properly.</p>
                    <p className="p-sec5"><strong>Practical Solutions:</strong> We focus on solving problems, not selling unnecessary projects.</p>
                    <p className="p-sec5"><strong>Local Experience:</strong> Serving South Florida homeowners.</p>
                </div>
            </section>
            <section className="section6_main">
                <h4 className="title_main secondary-t" id="last-title"> Let's Take Care of Those Small Problems Before They Become Bigger Ones</h4>
                <div className="d-sec6">
                    <p className="p-sec5">Don't wait until it becomes expensive.</p>
                    <p className="p-sec5">That small issue you are ignoring? We fix it in hours, not weeks.</p>
                    <p className="p-sec5">What you avoid today becomes tomorrow's cost.</p>
                </div>
            </section>
        </div>
    )
}