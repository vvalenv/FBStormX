import { Footer } from "../layouts/footer";
import { NavBar } from "../layouts/header";
import { MainRoof } from "../layouts/main-roof";
import { Helmet } from 'react-helmet-async';

export function RoofRepair() {
    return (
        <div className="body_init">
            <>
                <Helmet>
                    <title>Roof Repair South Florida | FB StormX</title>
                    <meta name="description" content="Small roof leak or a loose tile? FB StormX handles minor roof repairs, flashing and water intrusion solutions across South Florida. Free consultation." />
                    <link rel="canonical" href="https://fbstormx.com/services/roof-repair-south-florida" />
                </Helmet>
                <NavBar />
                <MainRoof />
                <Footer />
            </>
        </div>
    )
}