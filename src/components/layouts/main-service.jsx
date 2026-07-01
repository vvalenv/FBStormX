import { ScrollAnimate,CardService } from "./UXcomponents";

export function MainS() {
    return (
        <main className="main-s">
            <h2 className="title_main secondary-t">One Visit. Multiple Repairs. Problem Solved.</h2>
            <p className="subtitle_service">Professional Workmanship <span> at a Fair Price.</span></p>
            <p className="subtitle2_service">From minor repairs to everyday home projects, FB StormX assists homeowners with the jobs they've been putting off. Our experienced team delivers dependable, high-quality workmanship with the convenience of completing multiple tasks in a single visit.</p>
            <div className="div-servicess">
                <ScrollAnimate className="service-col" animationClass="fade-left">
                    <CardService nombre="Minor Roof Repairs" img="roof.png" desc="Protect your home before minor roof issues become costly damage.
                    We repair small leaks, replace damaged shingles, 
                    and address problem areas to help extend the life of your roof and 
                    prevent future water intrusion." />
                </ScrollAnimate>
                <ScrollAnimate className="service-col" animationClass="fade-right">
                    <CardService nombre="Door Repair Services" img="door2.jpg" desc="Restore the function and appearance of your doors. 
                    Whether they're sticking, misaligned, difficult to close, or showing signs of wear, 
                    we make the necessary adjustments for smooth, reliable operation." />
                </ScrollAnimate>
                <ScrollAnimate className="service-col" animationClass="fade-left">
                    <CardService nombre="Window Repair Services" img="window.png" desc="Keep your windows operating safely and efficiently. 
                    We repair common issues, make precise adjustments, 
                    and help improve functionality while protecting your home from drafts and moisture." />
                </ScrollAnimate>
                <ScrollAnimate className="service-col" animationClass="fade-right">
                    <CardService nombre="Caulking Services" img="caulking.png" desc="Protect your home from water intrusion 
                    and air leaks with professional caulking. We seal gaps around windows, doors, 
                    and other exterior openings 
                    to help prevent moisture damage and improve energy efficiency." />
                </ScrollAnimate>
                <ScrollAnimate className="service-col" animationClass="fade-left">
                    <CardService nombre="Home & Storage Clean-Outs" img="junk.png" desc="Reclaim valuable space inside and 
                    outside your home. We remove unwanted furniture, household items, and clutter quickly 
                    and responsibly, leaving your property clean, organized, and ready to enjoy." />
                </ScrollAnimate>
                <ScrollAnimate className="service-col" animationClass="fade-right">
                    <CardService nombre="Decorative Glass Doors" img="door1.jpg" desc="Refresh your home's entrance without replacing your existing door. 
                    We install elegant decorative glass inserts that enhance curb appeal, 
                    bring more natural light into your home, and create a beautiful new look at a fraction of the cost of a new door. 
                    Choose from our pre-designed styles or custom options. Restrictions apply."/>
                </ScrollAnimate>
            </div>
        </main>
    )
}