import { Footer } from "../layouts/footer";
import { NavBar } from "../layouts/header";
import { PrivacyPage } from "../layouts/privacy";
import { useEffect } from "react";

export function Privacy() {
    useEffect(() => {
            document.title = 'Privacy Policy | FBStormX';
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute(
                    'content', 
                    'A website that guides you to repair small things.'
                );
            }
    }, []);
    return (
        <div className="body_init">
            <>
                <NavBar />
                <PrivacyPage />
                <Footer />
            </>
        </div>
    )
}