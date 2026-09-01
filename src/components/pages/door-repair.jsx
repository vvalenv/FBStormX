import { Footer } from "../layouts/footer";
import { NavBar } from "../layouts/header";
import { MainDoorRepair } from "../layouts/main-door-rep";
import { Helmet } from 'react-helmet-async';

export function DoorRepair() {
    return (
        <div className="body_init">
            <>
                <Helmet>
                    <title>Sliding Glass Door and Front Door Repair in South Florida | FB StormX</title>
                    <meta name="description" content="Sliding door stuck or off track? Front door lock giving trouble? FB StormX repairs sliding and front doors across South Florida. Free consultation." />
                    <link rel="canonical" href="https://fbstormx.com/services/sliding-front-door-repair-south-florida" />
                </Helmet>
                <NavBar />
                <MainDoorRepair />
                <Footer />
            </>
        </div>
    )
}