import { Footer } from "../layouts/footer";
import { NavBar } from "../layouts/header";
import { MainWindow } from "../layouts/main-window";
import { useEffect } from "react";

export function WindowRepair() {
    useEffect(() => {
        document.title = 'Window Repair South Florida | FB StormX';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute(
                'content', 
                'Window stuck, leaking or hard to close? FB StormX repairs and adjusts residential windows across South Florida. Free consultation available.'
            );
        }
    }, []);
    return (
        <div className="body_init">
            <>
                <NavBar />
                <MainWindow />
                <Footer />
            </>
        </div>
    )
}