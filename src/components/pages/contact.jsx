import { Footer } from "../layouts/footer";
import { NavBar } from "../layouts/header";
import { ContactMain } from "../layouts/main-c";
import { useEffect } from "react";

export function Cont() {
    useEffect(() => {
        document.title = 'Contact | FBStormX';
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
                <ContactMain />
                <Footer />
            </>
        </div>
    )
}