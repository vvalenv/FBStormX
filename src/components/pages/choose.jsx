import { NavBar } from "../layouts/header";
import { ChooseUs } from "../layouts/main-w";
import { Footer } from "../layouts/footer";
import { Helmet } from 'react-helmet-async';

export function WhyChooseUs() {
    return(
        <div className="body_init">
            <>
                <Helmet>
                    <title>Why Choose Us | FB StormX</title>
                    <meta name="description" content="At FB StormX, we are committed to delivering quality workmanship, honest recommendations, and affordable solutions." />
                    <link rel="canonical" href="https://fbstormx.com/us" />
                </Helmet>
                <NavBar />
                <ChooseUs />
                <Footer />
            </>
        </div>
    )
}