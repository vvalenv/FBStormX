import { Footer } from "../layouts/footer";
import { NavBar } from "../layouts/header";
import { MainS } from "../layouts/main-service";
import { Helmet } from 'react-helmet-async';

export function Services() {
    return (
        <div className="body_init">
            <>
                <Helmet>
                    <title>Services | FBStormX</title>
                    <meta name="description" content="From minor repairs to everyday home projects, FB StormX assists homeowners with the jobs they have been putting off." />
                    <link rel="canonical" href="https://fbstormx.com/services" />
                </Helmet>
                <NavBar />
                <MainS />
                <Footer />
            </>
        </div>
    )
}