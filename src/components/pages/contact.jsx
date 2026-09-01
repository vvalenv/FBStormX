import { Footer } from "../layouts/footer";
import { NavBar } from "../layouts/header";
import { ContactMain } from "../layouts/main-c";
import { Helmet } from 'react-helmet-async';

export function Cont() {
    return (
        <div className="body_init">
            <>
                <Helmet>
                    <title>Contact | FB StormX</title>
                    <meta name="description" content="Have questions about our services? Contact FB StormX for a free consultation in South Florida." />
                    <link rel="canonical" href="https://fbstormx.com/contact" />
                </Helmet>
                <NavBar />
                <ContactMain />
                <Footer />
            </>
        </div>
    )
}