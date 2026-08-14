import { Footer } from "../layouts/footer";
import { NavBar } from "../layouts/header";
import { SmsTerms } from "../layouts/sms-terms";
import { useEffect } from "react";

export function Sms() {
    useEffect(() => {
            document.title = 'SMS Terms | FBStormX';
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
                <SmsTerms />
                <Footer />
            </>
        </div>
    )
}