import { Footer } from "../layouts/footer";
import { NavBar } from "../layouts/header";
import { MainJunk } from "../layouts/main-junk";
import { Helmet } from 'react-helmet-async';

export function JunkRemoval() {
    return (
        <div className="body_init">
            <>
                <Helmet>
                    <title>Junk Removal South Florida | FB StormX</title>
                    <meta name="description" content="Garage, patio or storage full of things you no longer need? FB StormX provides junk removal and cleanouts across South Florida. Free consultation." />
                    <link rel="canonical" href="https://fbstormx.com/services/junk-removal-south-florida" />
                </Helmet>
                <NavBar />
                <MainJunk />
                <Footer />
            </>
        </div>
    )
}