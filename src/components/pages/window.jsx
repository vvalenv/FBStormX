import { Footer } from "../layouts/footer";
import { NavBar } from "../layouts/header";
import { MainWindow } from "../layouts/main-window";
import { Helmet } from 'react-helmet-async';

export function WindowRepair() {
    return (
        <div className="body_init">
            <>
                <Helmet>
                    <title>Window Repair South Florida | FBStormX</title>
                    <meta name="description" content="Window stuck, leaking or hard to close? FB StormX repairs and adjusts residential windows across South Florida. Free consultation available." />
                    <link rel="canonical" href="https://fbstormx.com/services/window-repair-south-florida" />
                </Helmet>
                <NavBar />
                <MainWindow />
                <Footer />
            </>
        </div>
    )
}