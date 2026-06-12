import { Boton } from "./UX-components";

export function Main() {
    return (
        <div className="div_main">
            <section className="section1_main">
                <h1 className="title_main">Small Home Problems Become Expensive Repairs When Ignored.</h1>
                <p className="subtitle_main">We help homeowners take care of the small maintenance tasks they've been putting off before they become costly problems.</p>
                <p className="subtitle_main">Fix the small thing today.</p>
                <Boton title="Schedule a Free Evaluation" />
            </section>
            <section className="section2_main">
                <h2 className="title_main">Are Any of These Issues Familiar?</h2>
                <ul>
                    <li><p>Door that doesn't close properly</p></li>
                    <li><p>Worn or cracked caulking</p></li>
                    <li><p>Windows that need attention</p></li>
                    <li><p>Small repairs you've been postponing</p></li>
                    <li><p>Cluttered garage, patio or storage area</p></li>
                    <li><p>Maintenance projects that never make it to the top of the list</p></li>
                </ul>
            </section>
            <section className="section3_main">
                <h2 className="title_main">One visit. Multiple problems solved.</h2>
                <p className="subtitle_main">Instead of calling 5 contractors, we handle everything in one visit.</p>
                <ul>
                    <li>Door Adjustments</li>
                    <li>Window & Door Cleaning</li>
                    <li>Caulking Services</li>
                    <li>Minor Repairs</li>
                    <li>Junk Removal</li>
                </ul>
            </section>
            <section className="section4_main">
                <h3 className="title_main">What you avoid today becomes tomorrow’s cost.</h3>
            </section>
            <section className="section5_main">
                <h3 className="title_main">Why homeowners choose FB STORMX</h3>
                <ul>
                    <li><p>Fast response</p></li>
                    <li><p>Practical solutions not (over-selling)</p></li>
                    <li><p>One visit multi-solution approach</p></li>
                    <li><p>Trusted local service </p></li>
                </ul>
            </section>
            <section className="section6_main">
                <h3 className="title_main">Testimonios</h3>
            </section>
            <section className="section7_main">
                <h4 className="title_main"> Let's Take Care of Those Small Problems Before They Become Bigger Ones</h4>
            </section>
        </div>
    )
}