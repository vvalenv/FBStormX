import { Footer } from "../layouts/footer";
import { NavBar } from "../layouts/header";
import { PrivacyPage } from "../layouts/privacy";
import {Helmet} from 'react-helmet-async';

export function Privacy() {
    return (
        <div className="body_init">
            <>
                <Helmet>
                    <title>Privacy Policy | FB StormX</title>
                    <meta name="description" content="Learn how we collect, use, and protect your personal information with our Privacy Policy." />
                    <link rel="canonical" href="https://fbstormx.com/privacy-policy" />
                </Helmet>
                <NavBar />
                <PrivacyPage />
                <Footer />
            </>
        </div>
    )
}