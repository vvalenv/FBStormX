import { Footer } from "../layouts/footer";
import { NavBar } from "../layouts/header";
import { MainDoorRepair } from "../layouts/main-door-rep";
import { useEffect } from "react";

export function DoorRepair() {
    useEffect(() => {
        document.title = 'Sliding Glass Door and Front Door Repair in South Florida | FB StormX';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute(
                'content', 
                'Sliding door stuck or off track? Front door lock giving trouble? FB StormX repairs sliding and front doors across South Florida. Free consultation.'
            );
        }
    }, []);
    return (
        <div className="body_init">
            <>
                <NavBar />
                <MainDoorRepair />
                <Footer />
            </>
        </div>
    )
}