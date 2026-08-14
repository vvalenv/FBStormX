import { Footer } from "../layouts/footer";
import { NavBar } from "../layouts/header";
import { useEffect } from "react";
import { MainCaulking } from "../layouts/main-caulking";

export function Caulking() {
    useEffect(() => {
        document.title = 'Caulking and Leak Prevention South Florida | FB StormX';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute(
                'content', 
                'Water getting in around your windows or doors? FB StormX provides caulking and water intrusion prevention across South Florida. Free consultation.'
            );
        }
    }, []);
    return (
        <div className="body_init">
            <>
                <NavBar />
                <MainCaulking />
                <Footer />
            </>
        </div>
    )
}