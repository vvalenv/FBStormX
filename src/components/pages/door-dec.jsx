import { Footer } from "../layouts/footer";
import { NavBar } from "../layouts/header";
import { MainDoorDecorative } from "../layouts/main-door-dec";
import { useEffect } from "react";

export function DoorDecorative() {
    useEffect(() => {
        document.title = 'Decorative Glass Door Inserts South Florida | FB StormX';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute(
                'content', 
                'Update your front door without replacing it. FB StormX installs decorative glass inserts across South Florida. Free consultation available.'
            );
        }
    }, []);
    return (
        <div className="body_init">
            <>
                <NavBar />
                <MainDoorDecorative />
                <Footer />
            </>
        </div>
    )
}