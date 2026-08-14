import { Footer } from "../layouts/footer";
import { NavBar } from "../layouts/header";
import { MainS } from "../layouts/main-service";
import { useEffect } from "react";

export function Services() {
    useEffect(() => {
        document.title = 'Services | FBStormX';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute(
                'content', 
                'From minor repairs to everyday home projects, FB StormX assists homeowners with the jobs they have been putting off.'
            );
        }
    }, []);
    return (
        <div className="body_init">
            <>
                <NavBar />
                <MainS />
                <Footer />
            </>
        </div>
    )
}