import { Footer } from "../layouts/footer";
import { NavBar } from "../layouts/header";
import { useEffect } from "react";
import { MainRoof } from "../layouts/main-roof";

export function RoofRepair() {
    useEffect(() => {
        document.title = 'Minor Roof Repair South Florida | FB StormX';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute(
                'content', 
                'Small roof leak or a loose tile? FB StormX handles minor roof repairs, flashing and water intrusion solutions across South Florida. Free consultation.'
            );
        }
    }, []);
    return (
        <div className="body_init">
            <>
                <NavBar />
                <MainRoof />
                <Footer />
            </>
        </div>
    )
}