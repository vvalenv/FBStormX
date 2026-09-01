import { Footer } from "../layouts/footer";
import { NavBar } from "../layouts/header";
import { MainCaulking } from "../layouts/main-caulking";
import { Helmet } from 'react-helmet-async';

export function Caulking() {
    return (
        <div className="body_init">
            <>
                <Helmet>
                    <title>Caulking and Leak Prevention South Florida | FBStormX</title>
                    <meta name="description" content="Water getting in around your windows or doors? FB StormX provides caulking and water intrusion prevention across South Florida. Free consultation." />
                    <link rel="canonical" href="https://fbstormx.com/services/caulking-water-intrusion-south-florida" />
                </Helmet>
                <NavBar />
                <MainCaulking />
                <Footer />
            </>
        </div>
    )
}