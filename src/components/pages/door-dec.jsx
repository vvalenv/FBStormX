import { Footer } from "../layouts/footer";
import { NavBar } from "../layouts/header";
import { MainDoorDecorative } from "../layouts/main-door-dec";
import { Helmet } from 'react-helmet-async';

export function DoorDecorative() {
    return (
        <div className="body_init">
            <>
                <Helmet>
                    <title>Decorative Glass Door Inserts South Florida | FB StormX</title>
                    <meta name="description" content="Update your front door without replacing it. FB StormX installs decorative glass inserts across South Florida. Free consultation available." />
                    <link rel="canonical" href="https://fbstormx.com/services/decorative-glass-door-inserts-south-florida" />
                </Helmet>
                <NavBar />
                <MainDoorDecorative />
                <Footer />
            </>
        </div>
    )
}