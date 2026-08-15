import { Footer } from "../layouts/footer";
import { NavBar } from "../layouts/header";
import { useEffect } from "react";
import { MainJunk } from "../layouts/main-junk";

export function JunkRemoval() {
    useEffect(() => {
        document.title = 'Junk Removal South Florida | FB StormX';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute(
                'content', 
                'Garage, patio or storage full of things you no longer need? FB StormX provides junk removal and cleanouts across South Florida. Free consultation.'
            );
        }
    }, []);
    return (
        <div className="body_init">
            <>
                <NavBar />
                <MainJunk />
                <Footer />
            </>
        </div>
    )
}